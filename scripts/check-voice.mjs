/**
 * check-voice.mjs
 *
 * Automates the parts of the MMG brand-voice "rewrite on sight" list that were
 * previously only a manual by-eye self-check (see the Writing Guide section 3
 * + section 6). check:text catches encoding corruption; this catches voice
 * drift: em dashes and banned filler words in English copy.
 *
 * SCOPE (v1): the two English-only master content files, where every string is
 * English so there is zero false-positive risk. The page/section content files
 * (homepage-content.js, contact-content.js, etc.) embed all locales inline —
 * enforcing English-only rules there needs locale-aware traversal of each
 * module's `en` subtree, which is a planned v2. Chinese uses `——` legitimately,
 * so a naive whole-file scan there would be pure noise.
 *
 * Run: npm run check:voice   (standalone — not wired into pre-commit yet)
 */

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// English-only master content files. Extend deliberately — only add files
// whose strings are all English, or a v2 that scopes to an `en` subtree.
const FILES = ['src/lib/guide-article-content.js', 'src/lib/guide-post-content.js']

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
const ALLOWED_PHRASES = ['dynamic pricing']

function wordRegex(word) {
  // escape regex metachars, allow the hyphenated entries, match on word edges
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, 'gi')
}

const BANNED_WORD_RES = BANNED_WORDS.map((w) => ({ word: w, re: wordRegex(w) }))
const BANNED_TRANSITION_RES = BANNED_TRANSITIONS.map((w) => ({ word: w, re: wordRegex(w) }))

function checkFile(rel) {
  const abs = join(REPO_ROOT, rel)
  if (!existsSync(abs)) return { rel, findings: [], missing: true }

  const lines = readFileSync(abs, 'utf8').split('\n')
  const findings = []

  lines.forEach((line, idx) => {
    const lineNo = idx + 1
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
