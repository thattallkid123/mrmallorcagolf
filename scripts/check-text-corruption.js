const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const INCLUDE_EXTENSIONS = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
  '.css',
  '.md',
  '.txt',
  '.xml',
  '.yml',
  '.yaml',
])

const IGNORE_DIRS = new Set([
  '.git',
  '.next',
  'node_modules',
  'out',
  'outputs',
  'dist',
  'build',
])

const IGNORE_FILES = new Set([
  path.join('scripts', 'check-text-corruption.js'),
  path.join('src', 'app', '(en)', 'golf-courses', 'GolfCoursesClient.jsx'),
  'package-lock.json',
])
const MAX_FILE_BYTES = 2 * 1024 * 1024

const QUOTED_STRING_PATTERN = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/gs
const DIRECT_PATTERNS = [
  /\uFFFD/g,
  /\?\?\?\?/g,
  /\?\d{1,4}\?\?\d{1,4}/g,
  /\b\d{1,4}\?\?\d{1,4}\b/g,
  /\?\d{1,4}-\?\d{1,4}/g,
  /ÃƒÆ’./g,
  /ÃƒÂ¢[Ã¢â€šÂ¬Ã¢â€žÂ¢Ã…â€œÃ¢â€šÂ¬"Ã‚Â¦Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚ÂªÃ‚Â«Ã‚Â¬Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â²Ã‚Â³Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚Â·Ã‚Â¸Ã‚Â¹Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿]/g,
  /â[€-™]/g,
]

const MOJIBAKE_MARKERS = ['Ã', '\u0080', '\u0082', '\u0083', '\u009d']
const SUSPICIOUS_CIRCUMFLEX_A_PATTERN = /Â(?=[^A-Za-zÀ-ÿ])/g

// Irreversible data loss: a literal '?' sitting where an accented letter used
// to be (e.g. "ca?da" for "caída", "zus?tzlich" for "zusätzlich"). Found live
// in guide-article-content-localized.js, untouched since 2026-04-17 (729be34)
// through four later commits that edited those same lines — nothing catches
// this shape because it's valid ASCII, not mojibake. Unlike the mojibake
// patterns above, there is no repair: the original character is gone and a
// human has to retype the word. Excludes URL query strings (?title=) and
// regex/code fragments that leak in via QUOTED_STRING_PATTERN's multiline
// string-boundary matching (e.g. an apostrophe in a comment before code).
const INWORD_QUESTION_MARK_PATTERN = /[A-Za-zÀ-ÿ]\?[a-zà-ÿ]+/g
const QUESTION_MARK_URL_EXCLUSION = /:\/\/|\?[a-z][a-zA-Z0-9_]*=/
const QUESTION_MARK_CODE_EXCLUSION = /\.test\(|RegExp|=>|\bfunction\b|\bconst\b|require\(|\/[gimsuy]?\.test/

// ASCII-folded accented words: a translation pass wrote German words with
// their pre-1996-orthography ASCII digraphs (ä→ae, ö→oe, ü→ue, ß→ss) instead
// of the accented characters — e.g. "Haeufige Fragen" for "Häufige Fragen".
// This produces perfectly valid ASCII, so no pattern-based check can catch it
// generically without a dictionary; this is a denylist of specific words
// found live in the repo (2026-08-14 audit). Append new words here as found
// rather than trying to generalize the regex — a broad ae/oe/ue pattern would
// false-positive on legitimate loanwords.
const ASCII_FOLDED_GERMAN_WORDS = [
  'Haeufige', 'Haeufigsten', 'Gaeste', 'Gaesterunde', 'Gaesterunden',
  'zugaenglich', 'fuenf', 'Voegel', 'Haeuser', 'Wohnhaeuser',
  'zusaetzlich', 'regelmaessig', 'Oeffentlich', 'oeffnet', 'geniessen',
  'ungestoertes', 'ungestoert', 'staendig', 'frueh', 'Qualitaet', 'nervoes',
]
const ASCII_FOLDED_GERMAN_PATTERN = new RegExp(`\\b(${ASCII_FOLDED_GERMAN_WORDS.join('|')})\\b`, 'g')

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      walk(fullPath, files)
      continue
    }

    if (!INCLUDE_EXTENSIONS.has(path.extname(entry.name))) continue
    const relativePath = path.relative(ROOT, fullPath)
    if (IGNORE_FILES.has(relativePath)) continue
    files.push(fullPath)
  }

  return files
}

function countCjk(text) {
  return [...text].filter((char) => char >= '\u4E00' && char <= '\u9FFF').length
}

function countLatinSupplement(text) {
  return [...text].filter((char) => char >= '\u00C0' && char <= '\u00FF').length
}

function countReplacementChars(text) {
  return text.split('\uFFFD').length - 1
}

function countControlChars(text) {
  return [...text].filter((char) => {
    const code = char.charCodeAt(0)
    return (code >= 0x00 && code < 0x20 && code !== 0x09 && code !== 0x0A && code !== 0x0D) || (code >= 0x7F && code <= 0x9F)
  }).length
}

function countMarkers(text) {
  const baseMarkers = MOJIBAKE_MARKERS.reduce((total, marker) => total + text.split(marker).length - 1, 0)
  const suspiciousCircumflexA = text.match(SUSPICIOUS_CIRCUMFLEX_A_PATTERN)?.length || 0
  return baseMarkers + suspiciousCircumflexA
}

function goodness(text) {
  return ['€', '·', '–', '→', '★'].reduce((total, marker) => total + text.split(marker).length - 1, 0)
}

function scoreText(text) {
  return [
    countCjk(text),
    -countMarkers(text),
    goodness(text),
    -countReplacementChars(text),
    -countControlChars(text),
    -(text.split('?').length - 1),
  ]
}

function isBetterScore(candidate, current) {
  for (let i = 0; i < candidate.length; i += 1) {
    if (candidate[i] > current[i]) return true
    if (candidate[i] < current[i]) return false
  }

  return false
}

function maybeRepair(text) {
  const hasSuspiciousCircumflexA = /Â(?=[^A-Za-zÀ-ÿ])/.test(text)
  const hasMarkers = MOJIBAKE_MARKERS.some((marker) => text.includes(marker)) || hasSuspiciousCircumflexA
  const looksLikeCjkMojibake = countCjk(text) === 0 && countLatinSupplement(text) >= 6

  if (!hasMarkers && !looksLikeCjkMojibake) return text

  let current = text
  const baselineCjk = countCjk(text)

  for (let i = 0; i < 4; i += 1) {
    let best = current
    let bestScore = scoreText(current)
    const currentMarkers = countMarkers(current)
    const currentCjk = countCjk(current)

    for (const encoding of ['latin1', 'binary']) {
      try {
        const candidate = Buffer.from(current, encoding).toString('utf8')
        const candidateScore = scoreText(candidate)
        const increasesCjk = countCjk(candidate) > currentCjk && countMarkers(candidate) <= currentMarkers
        const improvesMarkedText = currentMarkers > 0 && isBetterScore(candidateScore, bestScore)

        if (increasesCjk || improvesMarkedText) {
          best = candidate
          bestScore = candidateScore
        }
      } catch {
        // Ignore strings that cannot be sensibly re-decoded.
      }
    }

    if (best === current || (baselineCjk === 0 && countCjk(best) === 0 && countMarkers(text) === 0)) break
    current = best
  }

  return current
}

function collectQuotedStringFixes(content) {
  const fixes = []

  for (const match of content.matchAll(QUOTED_STRING_PATTERN)) {
    const literal = match[0]
    const inner = literal.slice(1, -1)
    const repaired = maybeRepair(inner)

    if (repaired !== inner) {
      fixes.push({
        before: inner.slice(0, 120),
        after: repaired.slice(0, 120),
      })
    }
  }

  return fixes
}

function collectDirectMatches(content) {
  const hits = []

  for (const pattern of DIRECT_PATTERNS) {
    const matches = content.match(pattern)
    if (matches) hits.push(...matches)
  }

  return [...new Set(hits)]
}

function collectUnrepairableLosses(content) {
  const hits = []

  for (const match of content.matchAll(QUOTED_STRING_PATTERN)) {
    const inner = match[0].slice(1, -1)
    if (QUESTION_MARK_URL_EXCLUSION.test(inner) || QUESTION_MARK_CODE_EXCLUSION.test(inner)) continue

    const questionMarkHits = inner.match(INWORD_QUESTION_MARK_PATTERN)
    if (questionMarkHits) {
      for (const hit of questionMarkHits) {
        hits.push({ word: hit, context: inner.slice(0, 120) })
      }
    }

    const foldedHits = inner.match(ASCII_FOLDED_GERMAN_PATTERN)
    if (foldedHits) {
      for (const hit of foldedHits) {
        hits.push({ word: hit, context: inner.slice(0, 120) })
      }
    }
  }

  return hits
}

const findings = []

for (const file of walk(ROOT)) {
  const { size } = fs.statSync(file)
  if (size > MAX_FILE_BYTES) continue

  const raw = fs.readFileSync(file)
  const content = raw.toString('utf8')
  const quotedFixes = collectQuotedStringFixes(content)
  const directMatches = collectDirectMatches(content)
  const unrepairableLosses = collectUnrepairableLosses(content)
  const hasUtf8Bom = raw.length >= 3 && raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf

  if (quotedFixes.length === 0 && directMatches.length === 0 && unrepairableLosses.length === 0 && !hasUtf8Bom) continue

  findings.push({
    file: path.relative(ROOT, file),
    quotedFixes: quotedFixes.slice(0, 4),
    directMatches: directMatches.slice(0, 6),
    unrepairableLosses: unrepairableLosses.slice(0, 6),
    hasUtf8Bom,
  })
}

if (findings.length > 0) {
  console.error('Potential text corruption found:\n')

  for (const finding of findings) {
    console.error(`- ${finding.file}`)

    if (finding.quotedFixes.length > 0) {
      for (const fix of finding.quotedFixes) {
        console.error(`  repairable: ${JSON.stringify(fix.before)} -> ${JSON.stringify(fix.after)}`)
      }
    }

    if (finding.directMatches.length > 0) {
      console.error(`  direct: ${finding.directMatches.join(', ')}`)
    }

    if (finding.unrepairableLosses.length > 0) {
      for (const loss of finding.unrepairableLosses) {
        console.error(`  UNREPAIRABLE (retype by hand): "${loss.word}" in: ${JSON.stringify(loss.context)}`)
      }
    }

    if (finding.hasUtf8Bom) {
      console.error('  direct: UTF-8 BOM prefix found')
    }
  }

  process.exit(1)
}

console.log('No obvious text corruption patterns found.')
