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
import { fileURLToPath, pathToFileURL } from 'node:url'
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
const EXCLUDED_SUBTREE_KEYS = ['testimonials', 'quote1', 'quote2', 'quoteText']

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

// Section 3 "Banned constructions" and section 4 "No dead metaphor", where the
// construction has a fixed wording a regex can see.
//
// Added 2026-10-08 after seven draft guides passed this check while carrying
// "The honest negative:" 38 times, "they answer different questions", "The
// right answer depends on the golfer, not the map", "Shorter does not mean
// simpler", 13 visible [VERIFY] tags and an "Andy note:". Every one is banned
// in the voice guide; none is a banned *word*, so the check said nothing.
// Antithesis in general ("X, not Y") cannot be caught by pattern without
// flagging honest uses; that stays a judgement call for the mmg-voice-check
// skill. These are the fixed formulas only.
const BANNED_CONSTRUCTIONS = [
  { label: 'labelled negative "The honest negative:" (state the negative in plain terms)', re: /\bthe honest negative:/i },
  { label: 'comparison filler "answer different questions"', re: /\banswers? different questions\b/i },
  { label: 'comparison filler "do different jobs"', re: /\b(?:do|does|doing) different jobs\b/i },
  { label: 'antithesis "depends on the X, not the Y"', re: /\bdepends? on the [\w-]+(?: [\w-]+)?,? not (?:on )?the\b/i },
  { label: 'antithesis "shorter does not mean simpler"', re: /\b(?:\w+er|similar [\w-]+(?: [\w-]+)?) does not mean (?:\w+er|similar)\b/i },
  { label: 'dead metaphor (say the fact that made you believe it)', re: /\b(?:earns? its place|pays? for itself|punch(?:es)? above its weight|more than makes? up for|worth its weight|does the heavy lifting|ticks every box|well worth it|adds? another dimension)\b/i },
  { label: 'brochure construction', re: /(?:\bthe best part\?|\bhere'?s the truth\b|\bhere is the truth\b|\bwhat people don'?t realise\b|\bmore than just\b|\bwhether you'?re\b|\bin the heart of\b|\bif you'?re looking for\b|\bsomething for everyone\b)/i },
  { label: 'placeholder left in copy', re: /\[(?:VERIFY|ANDY|TODO|TBC|CHECK|CAPTION)[^\]]*\]/ },
  { label: 'note to Andy left in copy (prose says "I", see first-person rule)', re: /\bAndy(?:'s)? notes?:/ },
  // Andy's call 2026-10-08: write every course plainly, never disclaim it.
  // "played for" is excluded so a client FAQ ("I haven't played for a long
  // time") is not caught.
  { label: '"I have not played" disclaimer (write the course plainly)', re: /\bI (?:have not|haven't|have never|never) (?:yet )?played (?!for\b)/i },
]

// Published lines that already break a construction rule. Grandfathered so the
// new rules could ship without rewriting live copy in seven languages; fix each
// one the next time that page's English is edited, then delete its entry.
const GRANDFATHERED_CONSTRUCTIONS = [
  { file: 'src/lib/guide-post-content.js', snippet: 'it earns its place on the list' }, // Son Termes verdict
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
    const grandfathered = GRANDFATHERED_CONSTRUCTIONS.some((g) => g.file === rel && scan.includes(g.snippet))
    if (!grandfathered) {
      for (const { label, re } of BANNED_CONSTRUCTIONS) {
        const m = scan.match(re)
        if (m) findings.push({ lineNo, rule: 'banned construction', detail: `${label}: …${excerpt(scan, m[0]).slice(1, -1)}…` })
      }
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

// Guide-level checks that need the parsed content rather than its text.
//
// 1. Repeated standfirst. The guide templates print meta.intro under the H1, so
//    a first paragraph block with the same text shows the reader the opening
//    twice. All seven draft guides of 2026-09-28 did this.
// 2. Stale "not played" claims. A guide saying "I have not played X yet" while
//    X has a published review tells the reader something false. Two drafts
//    said it about T Golf Palma after its review went live.
const GUIDE_SOURCES = [
  { rel: 'src/lib/guide-post-content.js', exportName: 'GUIDE_POST_CONTENT' },
  { rel: 'src/lib/guide-article-content.js', exportName: 'GUIDE_ARTICLE_CONTENT' },
  { rel: 'src/lib/draft-guide-content.js', exportName: 'DRAFT_GUIDE_CONTENT' },
]
const NOT_PLAYED_RE = /\b(?:have not|haven't|not yet|never)\s+(?:yet\s+)?(?:played|visited)\b|\bnot played\b/i

const normalise = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase()

async function reviewedCourseAliases() {
  const { GOLF_COURSE_DATA } = await import(pathToFileURL(join(REPO_ROOT, 'src/lib/golf-courses-data.js')).href)
  const aliases = []
  for (const region of GOLF_COURSE_DATA) {
    for (const course of region.courses || []) {
      const base = course.name.replace(/\s*\(.*?\)\s*/g, ' ').trim()
      const short = base.replace(/^(?:Club de Golf|Real Golf de|Golf de|Golf)\s+/i, '').replace(/\s+Golf$/i, '')
      for (const a of new Set([course.name, base, short])) {
        aliases.push({ alias: a, slug: course.reviewSlug || null, re: new RegExp(`\\b${a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i') })
      }
    }
  }
  return aliases
}

async function checkGuideStructure() {
  const findings = []
  const aliases = await reviewedCourseAliases()
  for (const { rel, exportName } of GUIDE_SOURCES) {
    const abs = join(REPO_ROOT, rel)
    if (!existsSync(abs)) continue
    const mod = await import(pathToFileURL(abs).href)
    for (const [slug, entry] of Object.entries(mod[exportName] || {})) {
      const en = entry.en || entry
      const blocks = en.blocks || []
      const first = blocks.find((b) => b.type === 'paragraph')
      if (first && blocks.indexOf(first) === 0 && normalise(first.text) && normalise(first.text) === normalise(en.meta?.intro)) {
        findings.push({ rel, slug, rule: 'repeated intro', detail: 'first paragraph repeats meta.intro, which the template already prints under the title' })
      }
      const texts = [en.meta?.intro, ...blocks.flatMap((b) => [b.text, ...(b.items || []).map((i) => i.text)])].filter(Boolean)
      for (const text of texts) {
        const sentences = String(text).split(/(?<=[.!?])\s+/)
        sentences.forEach((sentence, i) => {
          if (!NOT_PLAYED_RE.test(sentence)) return
          // The course is either named in the sentence itself, or it is the
          // paragraph's subject: "T Golf Palma belongs in any Palma guide. It
          // has a 42-bay range. I have not played the course yet." The subject
          // is taken as the first course the paragraph names, so a passing
          // mention ("100 metres from Son Quint's range") does not count.
          const reviewed = (a) => a.slug && a.slug !== slug
          let hit = aliases.find((a) => reviewed(a) && a.re.test(sentence))
          if (!hit && !aliases.some((a) => !a.slug && a.re.test(sentence))) {
            const before = sentences.slice(0, i + 1).join(' ')
            let first = null
            for (const a of aliases) {
              const at = before.search(a.re)
              if (at >= 0 && (!first || at < first.at)) first = { at, a }
            }
            if (first && reviewed(first.a)) hit = first.a
          }
          if (hit) findings.push({ rel, slug, rule: 'stale "not played" claim', detail: `"${sentence.slice(0, 110)}" near "${hit.alias}", but /guides/${hit.slug} is published` })
        })
      }
    }
  }
  return findings
}

async function main() {
  const results = FILES.map(checkFile)
  const structureFindings = await checkGuideStructure()
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
  const total = withFindings.reduce((n, r) => n + r.findings.length, 0) + structureFindings.length

  if (total === 0) {
    console.log(
      `✅ check:voice passed — no em dashes, banned words or banned constructions in ${FILES.length} English master file(s); guide structure clean.`,
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
  for (const { rel, slug, rule, detail } of structureFindings) {
    console.error(`  ${rel} → ${slug} [${rule}]: ${detail}`)
  }
  if (structureFindings.length) console.error('')
  console.error('Fix per the Writing Guide section 3. Em dashes: replace with comma, colon, or full stop.')
  console.error('Passing this check is not a voice check: run the mmg-voice-check skill on any new copy as well.')
  process.exitCode = 1
}

main()
