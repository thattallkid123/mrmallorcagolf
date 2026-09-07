/**
 * check-css-hygiene.mjs
 *
 * A ratchet, not a clean-room rule. The site already carries hundreds of
 * inline `style={{ ... }}` objects and dozens of `!important`s, and a
 * stylesheet with ~40 distinct media breakpoints. This check does not try
 * to remove them — it freezes the current numbers in
 * scripts/css-hygiene-baseline.json and fails the build when they grow:
 *
 *   1. inlineLayoutStyles — per .jsx file, the count of inline style objects
 *      whose body sets a colour by hex or a spacing / positioning property
 *      (margin / padding / gap / inset / top|right|bottom|left). These are
 *      the ones that cause the "uneven gaps / not aligned" bugs, because
 *      spacing ends up defined per element instead of by a shared scale.
 *      New ones are refused; move the rule into a class in globals.css and
 *      use the --space-* tokens.
 *
 *   2. cssImportant — total `!important` in src/styles/*.css. New ones are
 *      refused: an !important is almost always an override fighting another
 *      override, and the fix is to lower specificity, not add weight.
 *
 *   3. mediaBreakpoints — the set of `(min|max)-width: Npx` values used in
 *      @media preludes. A value not already in the baseline is refused, so
 *      the breakpoint set converges instead of every component inventing
 *      its own. Add intentional new breakpoints by re-running with --update.
 *
 *   4. Inline negative margins — `marginTop: '-4px'`, `margin: '-8px 0'`,
 *      etc. in any .jsx. Zero tolerance, no baseline: a negative margin to
 *      open or close a gap is the exact anti-pattern this check exists for.
 *      Vertical rhythm comes from the parent's `gap`.
 *
 * When you legitimately REDUCE a number (migrated a component onto tokens,
 * deleted an !important), re-run `node scripts/check-css-hygiene.mjs --update`
 * to ratchet the baseline down so the win is locked in.
 *
 * Run: npm run check:css-hygiene   (also runs inside npm run check:content)
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve, relative } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const SRC_DIR = join(REPO_ROOT, 'src')
const BASELINE_PATH = join(__dirname, 'css-hygiene-baseline.json')

const UPDATE = process.argv.includes('--update')

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

const rel = (p) => relative(REPO_ROOT, p).replace(/\\/g, '/')

const ALL = walk(SRC_DIR)
const JSX_FILES = ALL.filter((f) => f.endsWith('.jsx')).sort()
const CSS_FILES = ALL.filter((f) => f.endsWith('.css')).sort()

// `style={{ ... }}` — non-greedy up to the closing `}}`. Inline style objects
// in this codebase do not nest braces, so this is sufficient.
const STYLE_OBJ_RE = /style=\{\{([^}]*)\}\}/g
const HEX_RE = /#[0-9a-fA-F]{3,8}\b/
const SPACING_PROP_RE = /\b(margin|padding|gap|inset)[A-Za-z]*\s*:/
const OFFSET_PROP_RE = /\b(top|left|right|bottom)\s*:\s*["']?-?\d/
const NEG_MARGIN_RE = /\bmargin[A-Za-z]*\s*:\s*["']?\s*-\d/

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length
}

// --- collect current numbers -------------------------------------------------

const inlineLayoutStyles = {}
const negativeMargins = []

for (const file of JSX_FILES) {
  const text = readFileSync(file, 'utf8')
  let count = 0
  let m
  STYLE_OBJ_RE.lastIndex = 0
  while ((m = STYLE_OBJ_RE.exec(text))) {
    const body = m[1]
    if (HEX_RE.test(body) || SPACING_PROP_RE.test(body) || OFFSET_PROP_RE.test(body)) {
      count++
    }
    if (NEG_MARGIN_RE.test(body)) {
      negativeMargins.push(`${rel(file)}:${lineOf(text, m.index)}`)
    }
  }
  if (count > 0) inlineLayoutStyles[rel(file)] = count
}

const cssImportant = {}
const breakpointSet = new Set()

for (const file of CSS_FILES) {
  const text = readFileSync(file, 'utf8')
  const imp = (text.match(/!important/g) || []).length
  if (imp > 0) cssImportant[rel(file)] = imp
  for (const mm of text.matchAll(/@media[^{]*/g)) {
    for (const bp of mm[0].matchAll(/\b(?:min|max)-width:\s*(\d+)px/g)) {
      breakpointSet.add(Number(bp[1]))
    }
  }
}

const current = {
  inlineLayoutStyles,
  cssImportant,
  mediaBreakpoints: [...breakpointSet].sort((a, b) => a - b),
}

const sum = (obj) => Object.values(obj).reduce((a, b) => a + b, 0)

// --- --update: rewrite baseline and exit -----------------------------------

if (UPDATE) {
  writeFileSync(BASELINE_PATH, JSON.stringify(current, null, 2) + '\n')
  console.log(
    `css-hygiene baseline updated — inline layout styles: ${sum(inlineLayoutStyles)}, ` +
      `!important: ${sum(cssImportant)}, breakpoints: ${current.mediaBreakpoints.length}.`,
  )
  process.exit(0)
}

// --- compare against baseline --------------------------------------------------

let baseline
try {
  baseline = JSON.parse(readFileSync(BASELINE_PATH, 'utf8'))
} catch {
  console.error(
    'css-hygiene baseline missing. Create it with: node scripts/check-css-hygiene.mjs --update',
  )
  process.exit(1)
}

const failures = []

// 1. inline layout styles — per file, refuse any increase / new file
for (const [file, count] of Object.entries(inlineLayoutStyles)) {
  const was = baseline.inlineLayoutStyles[file] || 0
  if (count > was) {
    failures.push(
      `${file}: ${count} inline layout style object(s), baseline ${was}. ` +
        `Move the new rule into a class in src/styles/globals.css and use the --space-* tokens.`,
    )
  }
}

// 2. !important — refuse any increase in the total, name the files that grew
const impTotal = sum(cssImportant)
const impBaseTotal = sum(baseline.cssImportant)
if (impTotal > impBaseTotal) {
  const grew = Object.entries(cssImportant)
    .filter(([file, n]) => n > (baseline.cssImportant[file] || 0))
    .map(([file, n]) => `${file} (${baseline.cssImportant[file] || 0} → ${n})`)
  failures.push(
    `!important count rose ${impBaseTotal} → ${impTotal}: ${grew.join(', ')}. ` +
      `Lower the selector's specificity instead of adding weight.`,
  )
}

// 3. media breakpoints — refuse any value not already in the baseline set
const baseBps = new Set(baseline.mediaBreakpoints)
const newBps = current.mediaBreakpoints.filter((bp) => !baseBps.has(bp))
if (newBps.length > 0) {
  failures.push(
    `new @media breakpoint value(s): ${newBps.map((b) => b + 'px').join(', ')}. ` +
      `Reuse an existing breakpoint, or add these deliberately with ` +
      `node scripts/check-css-hygiene.mjs --update.`,
  )
}

// 4. inline negative margins — absolute, no baseline
if (negativeMargins.length > 0) {
  failures.push(
    `inline negative margin(s) — not allowed, use the parent's gap instead:\n    ` +
      negativeMargins.join('\n    '),
  )
}

if (failures.length > 0) {
  console.error('CSS hygiene check failed:\n')
  for (const f of failures) console.error(`  - ${f}`)
  console.error(
    `\nIf a change legitimately REDUCES these numbers, re-run with --update to lock it in.`,
  )
  process.exit(1)
}

console.log(
  `CSS hygiene check passed — inline layout styles: ${sum(inlineLayoutStyles)} ` +
    `(baseline ${sum(baseline.inlineLayoutStyles)}), !important: ${impTotal} ` +
    `(baseline ${impBaseTotal}), ${current.mediaBreakpoints.length} known @media breakpoint(s), ` +
    `no inline negative margins.`,
)
