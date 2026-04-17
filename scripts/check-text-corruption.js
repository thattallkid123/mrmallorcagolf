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
  'dist',
  'build',
])

const IGNORE_FILES = new Set([
  path.join('scripts', 'check-text-corruption.js'),
  path.join('src', 'app', 'golf-courses', 'GolfCoursesClient.jsx'),
  'package-lock.json',
])

const QUOTED_STRING_PATTERN = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/gs
const DIRECT_PATTERNS = [
  /\uFFFD/g,
  /\?\?\?\?/g,
  /ÃƒÆ’./g,
  /ÃƒÂ¢[Ã¢â€šÂ¬Ã¢â€žÂ¢Ã…â€œÃ¢â€šÂ¬"Ã‚Â¦Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚ÂªÃ‚Â«Ã‚Â¬Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â²Ã‚Â³Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚Â·Ã‚Â¸Ã‚Â¹Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿]/g,
  /â[€-™]/g,
]

const MOJIBAKE_MARKERS = ['Ã', 'Â', '\u0080', '\u0082', '\u0083', '\u009d']

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
  return MOJIBAKE_MARKERS.reduce((total, marker) => total + text.split(marker).length - 1, 0)
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
  const hasMarkers = MOJIBAKE_MARKERS.some((marker) => text.includes(marker))
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

const findings = []

for (const file of walk(ROOT)) {
  const raw = fs.readFileSync(file)
  const content = raw.toString('utf8')
  const quotedFixes = collectQuotedStringFixes(content)
  const directMatches = collectDirectMatches(content)
  const hasUtf8Bom = raw.length >= 3 && raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf

  if (quotedFixes.length === 0 && directMatches.length === 0 && !hasUtf8Bom) continue

  findings.push({
    file: path.relative(ROOT, file),
    quotedFixes: quotedFixes.slice(0, 4),
    directMatches: directMatches.slice(0, 6),
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

    if (finding.hasUtf8Bom) {
      console.error('  direct: UTF-8 BOM prefix found')
    }
  }

  process.exit(1)
}

console.log('No obvious text corruption patterns found.')
