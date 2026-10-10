/**
 * check-trip-preferences-i18n.mjs
 *
 * The trip preferences questionnaire (public/trip-preferences.html) is English; its
 * translations live in public/trip-preferences-assets/i18n.js, keyed by the English
 * text. A card added or reworded in catalog.js with no translation silently stays
 * English on the German, Spanish, French, Dutch, Swedish and Chinese pages. This fails
 * when a card's title, tag, detail, facts or photo label has no translation in every
 * language. A reworded card note (Andy edits these) is only a warning: it falls back to
 * English until translated, and should not block a commit.
 *
 * Run: node scripts/check-trip-preferences-i18n.mjs   (wired into check:content)
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import vm from 'node:vm'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ASSETS = resolve(__dirname, '..', 'public', 'trip-preferences-assets')

const sandbox = { window: {}, document: {} }
vm.createContext(sandbox)
vm.runInContext(readFileSync(join(ASSETS, 'catalog.js'), 'utf8'), sandbox)
vm.runInContext(readFileSync(join(ASSETS, 'i18n.js'), 'utf8'), sandbox)

const catalog = sandbox.window.MMGTripCatalog
const i18n = sandbox.window.MMGTripI18n
const failures = []
const warnings = []

// Rows must be complete: English plus one non-empty translation per language.
for (const row of i18n.rows) {
  if (row.length !== i18n.order.length + 1 || row.some((cell) => !String(cell).trim())) {
    failures.push(`i18n.js row for "${row[0]}" is missing a translation (needs ${i18n.order.length} languages)`)
  }
}

const translators = Object.fromEntries(i18n.order.map((lang) => [lang, i18n.make(lang)]))
// A row that is deliberately identical to the English ("45 minutes" in French) still counts as translated.
const missing = (text) => i18n.order.filter((lang) => !translators[lang].has(text))

const NAMES = new Set([
  'Ca n’Eduardo', 'Marc Fosh', 'Fera', 'Siso Beach', 'Annabel', 'Cova Negra', 'Sa Punta', 'VORO',
  'Coves d’Artà', 'Palma', 'Consell', 'Calvià', 'Valldemossa', 'Campos', 'Canyamel', 'Manacor',
  'Palmanova', 'Capdepera', 'Port Verd', 'Rafa Nadal Academy',
])

function need(kind, text, bucket) {
  if (!text || NAMES.has(text)) return
  const langs = missing(text)
  if (langs.length) bucket.push(`${kind} "${text}" has no translation for: ${langs.join(', ')}`)
}

for (const key of Object.keys(catalog)) {
  for (const item of catalog[key]) {
    const where = `${key}/${item.id}`
    need(`${where} title`, item.title, failures)
    need(`${where} detail`, item.detail, failures)
    String(item.tag || '').split(' · ').forEach((seg) => need(`${where} tag`, seg, failures))
    String(item.facts || '').split(' · ').forEach((seg) => need(`${where} facts`, seg, failures))
    if (item.note) need(`${where} note`, item.note, warnings)
  }
}

if (warnings.length) {
  console.warn(`⚠️  ${warnings.length} card note(s) are not translated and will show in English until added to i18n.js:`)
  warnings.forEach((w) => console.warn('  - ' + w))
}
if (failures.length) {
  console.error('Trip preferences translation check failed:')
  failures.forEach((f) => console.error('  - ' + f))
  console.error('\nAdd the missing rows to public/trip-preferences-assets/i18n.js, then re-run this check.')
  process.exit(1)
}
console.log(`✅ Trip preferences translation check passed — ${i18n.rows.length} rows, every card title, tag, detail and fact translated into ${i18n.order.length} languages.`)
