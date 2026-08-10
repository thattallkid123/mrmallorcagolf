/**
 * check-lead-magnet-prices.mjs
 *
 * Standing guardrail against stale green-fee prices in the downloadable lead
 * magnet PDFs. The PDFs are generated from hardcoded Python strings/tables in
 * generate-lead-magnet-pdfs.py (reportlab has no live-data import path from a
 * .py script back into the site's JS pricing master), so — like the guide
 * narrative prose — they are NOT auto-synced by `.\mmg.ps1 pricing` and must
 * be checked separately.
 *
 * Two shapes are checked:
 *   1. COURSE_COST_ROWS — the structured [name, peak, low, ...] table that
 *      drives the cost-guide PDF's price table.
 *   2. Inline "<Course> - €NNN peak" mentions in the trip-planner PDF's
 *      day-by-day itinerary prose.
 *
 * Courses flagged `dynamic:true` in the pricing master are exempt, matching
 * check-pricing-narrative.mjs policy — their quoted rates are observed
 * snapshots, not a fixed band.
 *
 * Run: npm run check:lead-magnet-prices
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const PY_FILE = 'scripts/generate-lead-magnet-pdfs.py'

async function importLib(rel) {
  return import(pathToFileURL(join(REPO_ROOT, rel)).href)
}

const { COURSE_PRICING_BY_NAME } = await importLib('src/lib/course-pricing-data.js')
const { resolveCourseAccessName } = await importLib('src/lib/course-access-data.js')

// The Python source is plain ASCII (no accents) and uses a couple of short
// names the shared site resolver doesn't recognise on its own.
const LOCAL_ALIASES = {
  Pollenca: 'Golf Pollença',
}

function stripAccents(str) {
  return str.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

function toCanonical(name) {
  if (COURSE_PRICING_BY_NAME[name]) return name
  if (LOCAL_ALIASES[name]) return LOCAL_ALIASES[name]
  let resolved = resolveCourseAccessName(name)
  if (resolved && COURSE_PRICING_BY_NAME[resolved]) return resolved
  const folded = stripAccents(name).toLowerCase()
  for (const key of Object.keys(COURSE_PRICING_BY_NAME)) {
    if (stripAccents(key).toLowerCase() === folded) return key
  }
  resolved = resolveCourseAccessName(folded)
  return resolved && COURSE_PRICING_BY_NAME[resolved] ? resolved : null
}

const source = readFileSync(join(REPO_ROOT, PY_FILE), 'utf8')
const lines = source.split('\n')
const findings = []

function record(lineNo, quotedName, kind, low, peak) {
  const canonical = toCanonical(quotedName)
  if (!canonical) {
    findings.push({
      line: lineNo,
      problem: `Unresolvable course name "${quotedName}" (${kind}) — check spelling/alias`,
    })
    return
  }
  const pricing = COURSE_PRICING_BY_NAME[canonical]
  if (pricing.dynamic) return
  const problems = []
  if (low != null && low !== pricing.low) problems.push(`low €${low} ≠ €${pricing.low}`)
  if (peak != null && peak !== pricing.peak) problems.push(`peak €${peak} ≠ €${pricing.peak}`)
  if (!problems.length) return
  findings.push({
    line: lineNo,
    problem: `${canonical} — ${kind} — ${problems.join(', ')} (canonical Low €${pricing.low} / Peak €${pricing.peak})`,
  })
}

// ── 1. COURSE_COST_ROWS table ────────────────────────────────────────────
const CURRENCY = '(?:€|EUR)'
const ROW_RE = new RegExp(`^\\s*\\["([^"]+)",\\s*"${CURRENCY}\\s*(\\d+)",\\s*"${CURRENCY}\\s*(\\d+)",`)
lines.forEach((line, idx) => {
  const m = line.match(ROW_RE)
  if (!m) return
  const [, name, peak, low] = m
  record(idx + 1, name, 'COURSE_COST_ROWS', +low, +peak)
})

// ── 2. Itinerary prose: "<Course> - EUR NNN peak" ───────────────────────
// Course names can carry digits (e.g. "Santa Ponsa 3"), so 0-9 must stay in
// the name class — excluding it would silently skip those mentions.
const ITIN_RE = new RegExp(`([A-Za-z][A-Za-z0-9 .'&]*?)\\s*-\\s*${CURRENCY}\\s*(\\d+)\\s*peak`, 'g')
lines.forEach((line, idx) => {
  for (const m of line.matchAll(ITIN_RE)) {
    const [, rawName, peak] = m
    record(idx + 1, rawName.trim(), 'itinerary mention', null, +peak)
  }
})

// ── 3. "<b>Course</b> - EUR lo-hi" and "Course (EUR lo-hi)" bands ────────
// These two shapes are specific enough (bold-tag-prefixed, or immediately
// parenthesized after a name) that a non-course match is very unlikely, but
// unlike the two structural shapes above, an unresolved name here is treated
// as "not a course mention" rather than an error — free-form prose has
// non-course parentheticals (e.g. a bare aggregate total) this could catch.
const BOLD_BAND_RE = new RegExp(`<b>([A-Za-z][A-Za-z0-9 .'&]*?)<\\/b>\\s*-\\s*${CURRENCY}\\s*(\\d+)-(?:${CURRENCY}\\s*)?(\\d+)`, 'g')
const PAREN_BAND_RE = new RegExp(`([A-Za-z][A-Za-z0-9 .'&]*?)\\s*\\(${CURRENCY}\\s*(\\d+)-(?:${CURRENCY}\\s*)?(\\d+)\\)`, 'g')
function recordBandIfResolvable(lineNo, rawName, low, peak, kind) {
  const name = rawName.trim()
  if (toCanonical(name)) record(lineNo, name, kind, +low, +peak)
}
lines.forEach((line, idx) => {
  for (const m of line.matchAll(BOLD_BAND_RE)) {
    recordBandIfResolvable(idx + 1, m[1], m[2], m[3], 'bold-band mention')
  }
  for (const m of line.matchAll(PAREN_BAND_RE)) {
    recordBandIfResolvable(idx + 1, m[1], m[2], m[3], 'parenthetical band mention')
  }
})

// ── Report ────────────────────────────────────────────────────────────────
if (findings.length === 0) {
  console.log(
    `✅ Lead-magnet price check passed — scanned ${PY_FILE}; every course-cost row and itinerary mention matches canonical.`,
  )
  process.exit(0)
}

console.error(`❌ Lead-magnet price check FAILED — ${findings.length} issue(s):\n`)
for (const f of findings) {
  console.error(`  ${PY_FILE}:${f.line}`)
  console.error(`    ${f.problem}`)
  console.error('')
}
console.error(
  'Update the hardcoded € figures in generate-lead-magnet-pdfs.py to the canonical\n' +
    'green fee (src/lib/course-pricing-data.js), then regenerate the PDFs:\n' +
    '  python scripts/generate-lead-magnet-pdfs.py',
)
process.exitCode = 1
