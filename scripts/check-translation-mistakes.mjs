// Fails when a translation mistake already found in review comes back. The rules live in
// scripts/translation-mistakes.json; the reasoning behind them is in docs/translation-style-guide.md.
// Every pattern is a foreign-language wrong form, so the scan reads whole files rather than resolving
// each string's locale: that way it also covers tool data, the trip preferences questionnaire and
// hard-coded legal pages, which the overlay checks do not see.
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const { rules } = JSON.parse(fs.readFileSync(path.join(root, 'scripts/translation-mistakes.json'), 'utf8'))
const compiled = rules.map((r) => ({ ...r, rx: new RegExp(r.pattern, 'gu') }))

const SCAN = ['src', 'public/trip-preferences-assets']
const EXT = /\.(js|jsx|mjs|json)$/

function walk(dir, out) {
  if (!fs.existsSync(dir)) return out
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (EXT.test(e.name)) out.push(p)
  }
  return out
}

const files = SCAN.flatMap((d) => walk(path.join(root, d), []))
const findings = []
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8')
  for (const r of compiled) {
    r.rx.lastIndex = 0
    let m
    while ((m = r.rx.exec(text))) {
      const line = text.slice(0, m.index).split('\n').length
      findings.push(`  - ${path.relative(root, f)}:${line} [${r.lang}] "${m[0]}" -> ${r.fix}`)
    }
  }
}

if (findings.length) {
  console.error(`Translation mistakes check failed: ${findings.length} known mistake(s) found (rules in scripts/translation-mistakes.json, reasons in docs/translation-style-guide.md):`)
  console.error(findings.join('\n'))
  process.exit(1)
}
console.log(`Translation mistakes check passed - ${compiled.length} known mistake pattern(s), ${files.length} file(s) scanned.`)
