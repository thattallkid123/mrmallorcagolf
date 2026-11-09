#!/usr/bin/env node
/**
 * check-text-colour-tokens.mjs
 *
 * The cheap, runs-everywhere half of the text-quality guard (the rendered half is check-text-quality.mjs, CI only).
 * The brand gold, taupe and stone are too pale to be small text on cream or white (2.5:1, 3.6:1 and 1.7:1; AA needs 4.5:1).
 * Text takes --gold-readable, --gold-text, --taupe-text or --gold-light, never the raw colour. Borders, backgrounds,
 * rules and icon fills may keep the raw colour: this looks only at `color:` declarations.
 *
 * Ratchet, like check:css-hygiene: it counts raw-colour text declarations per file and fails when a file's count goes
 * UP or a new file appears. Existing ones may be on dark backgrounds, where raw gold is fine; they are not edited
 * here. Run `node scripts/check-text-colour-tokens.mjs --update` after you remove some, to lock the lower count in.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const baselinePath = path.join(root, 'scripts', 'text-colour-tokens-baseline.json')
const UPDATE = process.argv.includes('--update')

// `color:` only: the lookbehind skips background-color, border-color, outline-color, text-decoration-color, etc.
const RAW = /(?<![-\w])color\s*:\s*['"]?(var\(--(?:gold|taupe|stone)\)|#B8973C|#8A7F74|#C4BAA9)(?![\w-])/gi

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (/\.(css|jsx|js|mjs)$/.test(e.name)) out.push(p)
  }
  return out
}

const counts = {}
for (const f of walk(path.join(root, 'src'))) {
  const n = (fs.readFileSync(f, 'utf8').match(RAW) || []).length
  if (n) counts[path.relative(root, f).split(path.sep).join('/')] = n
}

if (UPDATE) {
  fs.writeFileSync(baselinePath, JSON.stringify({ note: 'Raw gold/taupe/stone used as text colour, per file. May only go down. See scripts/check-text-colour-tokens.mjs.', counts }, null, 1) + '\n')
  console.log(`Baseline written: ${Object.keys(counts).length} file(s), ${Object.values(counts).reduce((a, b) => a + b, 0)} declaration(s).`)
  process.exit(0)
}

const base = fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath, 'utf8')).counts : {}
const worse = Object.entries(counts).filter(([f, n]) => n > (base[f] || 0))
if (worse.length) {
  console.error('Raw gold, taupe or stone used as text colour (too pale to read as small text on cream or white):')
  for (const [f, n] of worse) console.error(`  ${f}: ${n} now, ${base[f] || 0} allowed`)
  console.error('Use --gold-readable / --gold-text / --taupe-text (or --gold-light on dark) for text. Raw colours stay fine for borders, backgrounds and rules.')
  process.exit(1)
}
const total = Object.values(counts).reduce((a, b) => a + b, 0)
const allowed = Object.values(base).reduce((a, b) => a + b, 0)
console.log(`Text colour token check passed - ${total} raw-colour text declaration(s) (baseline ${allowed}).`)
