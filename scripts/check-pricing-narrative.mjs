/**
 * check-pricing-narrative.mjs
 *
 * Standing guardrail against stale green-fee prices in hand-written PROSE.
 *
 * Canonical green fees live in src/lib/course-pricing-data.js
 * (COURSE_PRICING_BY_NAME, keyed by course name, low/peak/dynamic/licenceFee).
 * The course-listing pills in golf-courses-data.js are auto-synced from that
 * master by `.\mmg.ps1 pricing`, but the narrative price mentions in the guide
 * / homepage / offers content files are hand-written and are NOT regenerated.
 * A recent audit found Santa Ponsa 1 quoted at €75/€125 instead of the official
 * €77/€126 — this check exists to catch that class of drift before it ships.
 *
 * ── How it keeps false positives low ────────────────────────────────────────
 * The hard part is attributing a price to the right course. Rather than grep
 * for bare "€NN near a course name" (which would trip over club hire, buggies,
 * lunch, and the €2/€3 federation licence fee), we import each content module
 * and walk its data tree, tracking the current course from structural anchors
 * (a review-slug object key, or a card's `name`/`href`). Within a course's
 * subtree we only read TWO self-labelling, unambiguous price shapes:
 *
 *   1. Labelled pair   — "Peak €165 / Low €115" (either order)
 *   2. Standalone band — a whole string that is just "€80-165" (e.g. a card
 *                        meta pill). Ranges embedded inside a sentence are NOT
 *                        matched, so "clubs from €35-48" can never be read as a
 *                        green fee.
 *
 * Because we never parse a bare number, the federation/licence fee (€3 at most
 * courses, €2 at Palma Pitch & Putt) is structurally out of scope — it is
 * neither a labelled Peak/Low pair nor a standalone band token.
 *
 * ── Dynamic courses ─────────────────────────────────────────────────────────
 * Courses flagged `dynamic:true` (e.g. Son Antem West, Son Muntaner) legitimately
 * quote observed rates that drift from the canonical low/peak band, so they are
 * exempt from band matching — we never flag them.
 *
 * Run: npm run check:pricing-narrative
 */

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

// Prose surfaces that carry hand-written green-fee prices (not auto-synced).
const PROSE_FILES = [
  'src/lib/guide-post-content.js',
  'src/lib/guide-post-content-localized.js',
  'src/lib/guide-article-content.js',
  'src/lib/offers-content.js',
  'src/lib/homepage-content.js',
  'src/lib/plan-your-trip-content.js',
]

async function importLib(rel) {
  const abs = join(REPO_ROOT, rel)
  return import(pathToFileURL(abs).href)
}

// ── Canonical data + course resolution ──────────────────────────────────────
const { COURSE_PRICING_BY_NAME } = await importLib('src/lib/course-pricing-data.js')
const { resolveCourseAccessName } = await importLib('src/lib/course-access-data.js')
const { GOLF_COURSE_DATA } = await importLib('src/lib/golf-courses-data.js')

// Build reviewSlug -> canonical pricing key from the course listing (the
// authoritative slug↔course map, so new guides are picked up automatically).
const SLUG_TO_COURSE = {}
for (const region of GOLF_COURSE_DATA || []) {
  for (const item of region.courses || []) {
    if (item.reviewSlug && item.name) {
      const canonical = COURSE_PRICING_BY_NAME[item.name]
        ? item.name
        : resolveCourseAccessName(item.name)
      if (canonical && COURSE_PRICING_BY_NAME[canonical]) {
        SLUG_TO_COURSE[item.reviewSlug] = canonical
      }
    }
  }
}

function slugFrom(str) {
  if (typeof str !== 'string') return null
  const m = str.match(/(?:^|\/)([a-z0-9-]+-review)(?:$|[/?#])/i)
  if (m) return m[1]
  if (/^[a-z0-9-]+-review$/i.test(str.trim())) return str.trim()
  return null
}

// Resolve any identifier (slug, /guides/..-review href, or a course name /
// alias) to a canonical COURSE_PRICING_BY_NAME key, or null if it isn't one.
function toCanonical(str) {
  if (typeof str !== 'string' || !str.trim()) return null
  const slug = slugFrom(str)
  if (slug) return SLUG_TO_COURSE[slug] || null
  const name = str.trim()
  if (COURSE_PRICING_BY_NAME[name]) return name
  const resolved = resolveCourseAccessName(name)
  return resolved && COURSE_PRICING_BY_NAME[resolved] ? resolved : null
}

// ── Price shape extraction ──────────────────────────────────────────────────
const LABELLED_PEAK_FIRST = /Peak\s*€\s?(\d{2,3})\s*\/\s*Low\s*€\s?(\d{2,3})/i
const LABELLED_LOW_FIRST = /Low\s*€\s?(\d{2,3})\s*\/\s*Peak\s*€\s?(\d{2,3})/i
// A whole string that is nothing but a band, e.g. "€80-165" or "€77 – €126".
const STANDALONE_BAND = /^\s*€\s?(\d{2,3})\s*[-–—]\s*€?\s?(\d{2,3})\s*$/

// Returns {low, peak, kind} for a string, or null if it carries no checkable
// green-fee shape.
function extractBand(str) {
  let m = str.match(LABELLED_PEAK_FIRST)
  if (m) return { peak: +m[1], low: +m[2], kind: 'labelled Peak/Low' }
  m = str.match(LABELLED_LOW_FIRST)
  if (m) return { low: +m[1], peak: +m[2], kind: 'labelled Low/Peak' }
  m = str.match(STANDALONE_BAND)
  if (m) return { low: +m[1], peak: +m[2], kind: 'price band' }
  return null
}

// ── Walk each module tree, attributing prices to a course ───────────────────
const CTX_FIELDS = ['reviewSlug', 'href', 'slug', 'courseName', 'course', 'name']

const findings = []
const seen = new Set()

function checkString(value, ctx, file) {
  const band = extractBand(value)
  if (!band) return
  if (!ctx) return // no resolvable course — never guess
  const pricing = COURSE_PRICING_BY_NAME[ctx]
  if (!pricing) return
  if (pricing.dynamic) return // observed rates vary — exempt

  const problems = []
  if (band.low !== pricing.low) problems.push(`low €${band.low} ≠ €${pricing.low}`)
  if (band.peak !== pricing.peak) problems.push(`peak €${band.peak} ≠ €${pricing.peak}`)
  if (problems.length) {
    // Dedupe: locale subtrees often share the same card object by reference,
    // so the same quoted band surfaces once per locale — collapse to one.
    const key = `${file}|${ctx}|${value.trim()}`
    if (seen.has(key)) return
    seen.add(key)
    findings.push({
      file,
      course: ctx,
      quoted: value.trim(),
      kind: band.kind,
      expected: `Low €${pricing.low} / Peak €${pricing.peak}`,
      problems,
    })
  }
}

function walk(node, ctx, file) {
  if (typeof node === 'string') {
    checkString(node, ctx, file)
    return
  }
  if (Array.isArray(node)) {
    for (const item of node) walk(item, ctx, file)
    return
  }
  if (node && typeof node === 'object') {
    // Does this object itself declare a course? (card name/href pattern)
    let objCtx = ctx
    for (const field of CTX_FIELDS) {
      if (typeof node[field] === 'string') {
        const c = toCanonical(node[field])
        if (c) {
          objCtx = c
          break
        }
      }
    }
    for (const [key, val] of Object.entries(node)) {
      if (typeof val === 'string') {
        checkString(val, objCtx, file)
      } else {
        // A slug-keyed entry (guide content) sets context for its subtree.
        const keyCtx = toCanonical(key) || objCtx
        walk(val, keyCtx, file)
      }
    }
  }
}

// Recover 1-based line numbers for a quoted value so findings are clickable.
function findLines(file, quoted) {
  const abs = join(REPO_ROOT, file)
  if (!existsSync(abs)) return []
  const needle = quoted
  const lines = readFileSync(abs, 'utf8').split('\n')
  const hits = []
  lines.forEach((line, idx) => {
    if (line.includes(needle)) hits.push(idx + 1)
  })
  return hits
}

for (const file of PROSE_FILES) {
  const abs = join(REPO_ROOT, file)
  if (!existsSync(abs)) {
    console.warn(`⚠️  Skipping missing prose file: ${file}`)
    continue
  }
  const mod = await importLib(file)
  for (const [name, value] of Object.entries(mod)) {
    if (typeof value === 'function') continue
    walk(value, null, file)
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
if (findings.length === 0) {
  console.log(
    `✅ Pricing narrative check passed — scanned ${PROSE_FILES.length} prose file(s); every labelled/banded green fee matches canonical.`,
  )
  process.exit(0)
}

console.error(`❌ Pricing narrative check FAILED — ${findings.length} stale price(s):\n`)
for (const f of findings) {
  const lines = findLines(f.file, f.quoted)
  const where = lines.length ? `${f.file}:${lines.join(',')}` : f.file
  console.error(`  ${f.course}`)
  console.error(`    ${where}`)
  console.error(`    quoted "${f.quoted}" (${f.kind}) — ${f.problems.join(', ')}`)
  console.error(`    canonical: ${f.expected}`)
  console.error('')
}
console.error(
  'Update the prose to the canonical green fee (src/lib/course-pricing-data.js),\n' +
    'or — if a figure is intentional (e.g. a genuine observed/twilight rate) — make\n' +
    'the course dynamic in the pricing master, or narrow the wording so it is not a\n' +
    'labelled Peak/Low pair or a standalone €low-high band.',
)
process.exitCode = 1
