#!/usr/bin/env node
// Regression guard for a font bug found and fixed 2026-08-26: an
// "eyebrow"/"label"-named class with no font-weight declared anywhere
// silently inherits the ambient weight (often 300, thin) instead of the
// site's bold-tracked-label convention (weight 500). Invisible in a diff
// and not caught by check:fonts, which only catches hardcoded font-family
// names, not missing weight.
//
// Narrowly scoped to classes named like a label/eyebrow (matching this
// codebase's own naming convention for the shared small-caps section-label
// pattern), not every uppercase+tracked+small element - badges, nav links,
// and language switchers are deliberately styled differently and are not
// bugs.
//
// The companion bug (a <button> with no font-family, falling back to the
// browser's default UI font) is NOT checked here - it needs real computed
// styles to avoid false positives on the many legitimate ways a button can
// inherit its font (descendant tag selectors, the `font` shorthand,
// dynamic classNames), which a static regex can't reliably resolve. See
// tests/font-consistency.spec.js for the runtime version of that check.

import { readFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const srcRoot = join(root, 'src')

function parseRules(css) {
  const rules = []
  const ruleRe = /([^{}]+)\{([^{}]*)\}/g
  let m
  while ((m = ruleRe.exec(css))) rules.push([m[1].trim(), m[2].trim()])
  return rules
}

function classBodyMap(rules) {
  const map = new Map()
  for (const [sel, body] of rules) {
    for (const part of sel.split(',')) {
      for (const cls of part.matchAll(/\.([\w-]+)/g)) {
        const name = cls[1]
        if (!map.has(name)) map.set(name, [])
        map.get(name).push(body)
      }
    }
  }
  return map
}

const globalsCss = readFileSync(join(srcRoot, 'styles', 'globals.css'), 'utf8')
const globalRules = parseRules(globalsCss)
const globalClassBodies = classBodyMap(globalRules)

const errors = []
const labelNamePattern = /(^|[-_])eyebrow($|[-_])|(^|[-_])label($|[-_])/i

for (const [cls, bodies] of globalClassBodies) {
  if (!labelNamePattern.test(cls)) continue
  const looksLikeTrackedText = bodies.some(
    (b) => /text-transform\s*:\s*uppercase/.test(b) || /letter-spacing\s*:/.test(b)
  )
  if (!looksLikeTrackedText) continue
  const hasWeight = bodies.some((b) => /font-weight\s*:/.test(b))
  if (!hasWeight) {
    errors.push(
      `src/styles/globals.css: .${cls} is named like a label/eyebrow and is uppercase/tracked, but never declares font-weight anywhere. It will silently inherit the ambient weight (often 300/thin) instead of the site's bold-label convention. Add font-weight explicitly (500 to match .eyebrow, or a different value if it's deliberately not eyebrow-styled).`
    )
  }
}

if (errors.length) {
  console.error('Font consistency check failed:')
  for (const e of errors) console.error(`- ${e}`)
  process.exit(1)
}

console.log('Font consistency check passed - every eyebrow/label class declares font-weight.')
