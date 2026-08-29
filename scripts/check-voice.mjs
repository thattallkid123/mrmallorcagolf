/**
 * check-voice.mjs
 *
 * Automates the parts of the MMG brand-voice "rewrite on sight" list that were
 * previously only a manual by-eye self-check (see the Writing Guide section 3
 * + section 6). check:text catches encoding corruption; this catches voice
 * drift: em dashes and banned filler words in English copy.
 *
 * SCOPE (v3): opt-OUT. Every `*-content.js` / `*-translations.js` in src/lib
 * is discovered automatically (see EXCLUDED_FILES to exempt one). Each file is
 * then auto-classified: if it embeds all locales inline under a top-level
 * `en: {`/`"en": {` key, only that subtree is scanned (quote-aware brace-depth
 * walk) so Chinese's legitimate `——` and other locale copy never false-flag;
 * otherwise it is an English-only master and is scanned whole. Verbatim client
 * testimonials are blanked before scanning (EXCLUDED_SUBTREE_KEYS).
 *
 * Run: npm run check:voice   (also runs inside check:content)
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// SCOPE (v3, 2026-08-27): this used to be a hand-maintained allowlist of 11
// files. That made it opt-in, so every content file added after it was written
// silently escaped the check forever — which is exactly how 14 em dashes
// reached live customer-facing tool copy (handicap-checker, golf-cost-
// calculator, green-fees) and went unnoticed. It is now opt-OUT: every
// `*-content.js` / `*-translations.js` file in src/lib is discovered
// automatically, and anything that should not be scanned must be listed in
// EXCLUDED_FILES with a stated reason.
const LIB_DIR = 'src/lib'
const DISCOVER_RE = /-(content|translations)\.js$/
// `*-localized.js` mirrors are excluded by name: they hold the six translated
// locales, and the em-dash ban is an English-only convention (German, Dutch and
// Swedish want an en dash with spaces; French and Spanish use the em dash
// natively), so scanning them would flag correct typography as an error.
const LOCALIZED_RE = /-localized\.js$/

// Files matching DISCOVER_RE that should still not be scanned. Add a reason.
const EXCLUDED_FILES = new Set([
  // (none currently — keep this list short and justified)
])

// Additional English-only masters that do not match the naming pattern above.
const EXTRA_FILES = [
  'src/lib/golf-courses-data.js',
]

// Subtrees blanked before scanning, anywhere they appear. Testimonials are
// verbatim client quotes: the voice guide says they "stay word for word unless
// Andy explicitly approves a change", so a banned word inside one is not a
// defect to fix. Without this, adding play-with-a-pro-content.js to the check
// would fail on Jo's "unparalleled level of insight" and an em dash in
// Synøve's quote — both of which must stay exactly as written.
const EXCLUDED_SUBTREE_KEYS = ['testimonials']

function discoverFiles() {
  const dir = join(REPO_ROOT, LIB_DIR)
  const found = readdirSync(dir)
    .filter((name) => DISCOVER_RE.test(name) && !LOCALIZED_RE.test(name))
    .map((name) => `${LIB_DIR}/${name}`)
    .filter((rel) => !EXCLUDED_FILES.has(rel))
  return [...found, ...EXTRA_FILES].sort()
}

const FILES = discoverFiles()

const EM_DASH = '—'

// Section 3 "Banned words" — filler that reads as brochure/AI copy.
const BANNED_WORDS = [
  'stunning', 'breathtaking', 'nestled', 'seamless', 'elevate', 'unforgettable',
  'hidden gem', 'curated', 'vibrant', 'bustling', 'exceptional',
  'world-class', 'unparalleled', 'boasting', 'holistic', 'robust', 'dynamic',
  'cutting-edge', 'game-changer',
  // 'bespoke' was removed 2026-08-27 on Andy's explicit call: he uses it
  // deliberately for the Signature Experience. It has also been removed from
  // the banned list in the canonical Drive voice guide, so the two agree.
  // cursor/CLAUDE.md's brand-voice section names these two by name as banned
  // AI clichés — this check had no coverage for them until 2026-08-23.
  'delve into', 'embark on',
]

// Section 3 "Banned transitions" — use plain English instead.
const BANNED_TRANSITIONS = [
  'Moreover', 'Furthermore', 'Additionally', 'Notably', 'Indeed',
  'Subsequently', 'Consequently',
]

// Claims the site must not make, as opposed to words it must not use.
//
// Added 2026-08-29 after the homepage was found still promising a "guaranteed
// private tee time" and that Andy "always tries to secure the most personal
// tee time possible", hours after the Play With A Pro page had been corrected.
// Neither is true: courses pair bookings, and anyone can book onto the slot
// online or directly with the club right up until the group tees off. Andy
// can reserve the spare slots at cost, which is a purchase, not a promise.
//
// Deliberately targets the guarantee framing, not the phrase "private tee
// time" — Signature Day includes one as standard, so that claim is accurate.
const BANNED_CLAIMS = [
  {
    label: 'guaranteed private tee time (courses can fill the slot until tee-off)',
    re: /(guarantee\w*[^.!?]{0,40}private tee.?time|private tee.?time[^.!?]{0,40}guarantee\w*)/i,
  },
  {
    label: 'always secures the tee time (overclaims control Andy does not have)',
    re: /\balways\b[^.!?]{0,40}\b(secure|secures|securing|book|books|booking|get|gets|getting)\b[^.!?]{0,40}tee.?time/i,
  },
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
  return findSubtreeRange(text, /^\s*"?en"?:\s*\{/m)
}

// Generalised brace walk: given a regex that matches a `key: {` opener,
// returns [start, end) offsets of that key's full subtree.
function findSubtreeRange(text, keyRe) {
  const keyMatch = text.match(keyRe)
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

  // Auto-classify rather than relying on a hand-maintained list: if the file
  // carries all locales inline under a top-level `en:` key, scan only that
  // subtree; otherwise it is an English-only master and is scanned whole.
  const range = findEnSubtreeRange(fullText)
  if (range) {
    lineOffset = fullText.slice(0, range[0]).split('\n').length - 1
    text = fullText.slice(range[0], range[1])
  }

  // Blank excluded subtrees (keeping newlines so reported line numbers stay
  // accurate) so verbatim client quotes never false-flag.
  for (const key of EXCLUDED_SUBTREE_KEYS) {
    for (;;) {
      const sub = findSubtreeRange(text, new RegExp(`"?${key}"?:\\s*\\{`))
      if (!sub) break
      const blanked = text.slice(sub[0], sub[1]).replace(/[^\n]/g, ' ')
      text = text.slice(0, sub[0]) + blanked + text.slice(sub[1])
    }
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
    for (const { label, re } of BANNED_CLAIMS) {
      re.lastIndex = 0
      if (re.test(scan)) findings.push({ lineNo, rule: 'banned claim', detail: label })
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
