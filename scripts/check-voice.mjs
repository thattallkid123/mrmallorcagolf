/**
 * check-voice.mjs
 *
 * Automates the parts of the MMG brand-voice "rewrite on sight" list that were
 * previously only a manual by-eye self-check (see the Writing Guide section 3
 * + section 6). check:text catches encoding corruption; this catches voice
 * drift: em dashes and banned filler words in English copy.
 *
 * SCOPE (v2): FULL_FILES are English-only master content files, scanned whole
 * — zero false-positive risk. EN_SCOPED_FILES are page/section content files
 * that embed all locales inline under a top-level `en: {`/`"en": {` key; for
 * these, only that key's subtree is scanned (brace-depth walk, quote-aware),
 * so Chinese's legitimate `——` and other locale copy never false-flag.
 *
 * Run: npm run check:voice   (standalone — not wired into pre-commit yet)
 */

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// English-only master content files — scanned in full.
const FULL_FILES = [
  'src/lib/guide-article-content.js',
  'src/lib/guide-post-content.js',
  'src/lib/golf-courses-data.js',
]

// Page/section content files with all locales inline under a top-level
// `en:` key. Only that subtree is scanned. Extend deliberately — only add
// files that follow the `en: { ... }, de: { ... }, ...` top-level shape.
const EN_SCOPED_FILES = [
  'src/lib/golf-courses-content.js',
  'src/lib/homepage-content.js',
  'src/lib/about-content.js',
  'src/lib/guides-content.js',
  'src/lib/offers-content.js',
  'src/lib/plan-your-trip-content.js',
  'src/lib/coaching-content.js',
  'src/lib/contact-content.js',
]

const FILES = [...FULL_FILES, ...EN_SCOPED_FILES]

const EM_DASH = '—'

// Section 3 "Banned words" — filler that reads as brochure/AI copy.
const BANNED_WORDS = [
  'stunning', 'breathtaking', 'nestled', 'seamless', 'elevate', 'unforgettable',
  'hidden gem', 'curated', 'bespoke', 'vibrant', 'bustling', 'exceptional',
  'world-class', 'unparalleled', 'boasting', 'holistic', 'robust', 'dynamic',
  'cutting-edge', 'game-changer',
]

// Section 3 "Banned transitions" — use plain English instead.
const BANNED_TRANSITIONS = [
  'Moreover', 'Furthermore', 'Additionally', 'Notably', 'Indeed',
  'Subsequently', 'Consequently',
]

// Legitimate phrases that contain a banned word but are not the banned filler
// use (e.g. "dynamic pricing" is an industry term, not the vague adjective
// "dynamic"). These are blanked out before the banned-word scan.
// "World-class venues" (homepage credentials heading) is an explicit Andy
// exception to the banned-word list: factually true (Pebble Beach, Doral,
// Evian, The Open), not filler, approved 2026-08-13.
const ALLOWED_PHRASES = ['dynamic pricing', 'pricing is dynamic', 'world-class venues']

function wordRegex(word) {
  // escape regex metachars, allow the hyphenated entries, match on word edges
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, 'gi')
}

const BANNED_WORD_RES = BANNED_WORDS.map((w) => ({ word: w, re: wordRegex(w) }))
const BANNED_TRANSITION_RES = BANNED_TRANSITIONS.map((w) => ({ word: w, re: wordRegex(w) }))

// Finds the top-level `en: {` / `"en": {` key and walks forward (quote-aware
// brace counting) to its matching close. Returns [startIndex, endIndex)
// character offsets into `text`, or null if no such key is found.
function findEnSubtreeRange(text) {
  const keyMatch = text.match(/^\s*"?en"?:\s*\{/m)
  if (!keyMatch) return null

  const braceOpenIdx = keyMatch.index + keyMatch[0].length - 1
  let depth = 0
  let inString = null // active quote char, or null
  for (let i = braceOpenIdx; i < text.length; i++) {
    const ch = text[i]
    if (inString) {
      if (ch === '\\') { i++; continue }
      if (ch === inString) inString = null
      continue
    }
    if (ch === "'" || ch === '"' || ch === '`') { inString = ch; continue }
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) return [braceOpenIdx, i + 1]
    }
  }
  return null
}

function checkFile(rel) {
  const abs = join(REPO_ROOT, rel)
  if (!existsSync(abs)) return { rel, findings: [], missing: true }

  const fullText = readFileSync(abs, 'utf8')
  let text = fullText
  let lineOffset = 0

  if (EN_SCOPED_FILES.includes(rel)) {
    const range = findEnSubtreeRange(fullText)
    if (!range) {
      return { rel, findings: [], missing: false, scopeError: true }
    }
    lineOffset = fullText.slice(0, range[0]).split('\n').length - 1
    text = fullText.slice(range[0], range[1])
  }

  const lines = text.split('\n')
  const findings = []

  lines.forEach((line, idx) => {
    const lineNo = idx + 1 + lineOffset
    if (line.includes(EM_DASH)) {
      findings.push({ lineNo, rule: 'em dash', detail: excerpt(line, EM_DASH) })
    }
    // Blank out legitimate phrases before the word scan so their banned word
    // does not false-flag (e.g. "dynamic pricing").
    let scan = line
    for (const phrase of ALLOWED_PHRASES) {
      scan = scan.replace(new RegExp(phrase, 'gi'), ' '.repeat(phrase.length))
    }
    for (const { word, re } of BANNED_WORD_RES) {
      re.lastIndex = 0
      if (re.test(scan)) findings.push({ lineNo, rule: 'banned word', detail: word })
    }
    for (const { word, re } of BANNED_TRANSITION_RES) {
      re.lastIndex = 0
      if (re.test(scan)) findings.push({ lineNo, rule: 'banned transition', detail: word })
    }
  })

  return { rel, findings, missing: false }
}

function excerpt(line, marker) {
  const i = line.indexOf(marker)
  const start = Math.max(0, i - 40)
  const end = Math.min(line.length, i + 40)
  return `…${line.slice(start, end).trim()}…`
}

function main() {
  const results = FILES.map(checkFile)
  const missing = results.filter((r) => r.missing).map((r) => r.rel)
  if (missing.length) {
    console.error(`⚠️  check:voice — file(s) not found (update FILES): ${missing.join(', ')}`)
  }

  const scopeErrors = results.filter((r) => r.scopeError).map((r) => r.rel)
  if (scopeErrors.length) {
    console.error(`⚠️  check:voice — could not find top-level "en:" key (update FILES or findEnSubtreeRange): ${scopeErrors.join(', ')}`)
    process.exitCode = 1
  }

  const withFindings = results.filter((r) => r.findings.length > 0)
  const total = withFindings.reduce((n, r) => n + r.findings.length, 0)

  if (total === 0) {
    console.log(
      `✅ check:voice passed — no em dashes or banned words in ${FILES.length} English master file(s).`,
    )
    return
  }

  console.error(`❌ check:voice — ${total} voice-rule violation(s):\n`)
  for (const { rel, findings } of withFindings) {
    console.error(`  ${rel}`)
    for (const { lineNo, rule, detail } of findings) {
      console.error(`    line ${lineNo} [${rule}]: ${detail}`)
    }
    console.error('')
  }
  console.error('Fix per the Writing Guide section 3. Em dashes: replace with comma, colon, or full stop.')
  process.exitCode = 1
}

main()
