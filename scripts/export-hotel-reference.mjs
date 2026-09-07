#!/usr/bin/env node
// Generate MMG_HOTEL_REFERENCE.md (Drive) from the HOTELS data in
// src/lib/hotel-recommender-logic.js - the master the recommender tool
// actually scores from. The Drive doc had drifted to ~26 hotels of prose while
// the tool had 64; this makes the doc a read-only view that can't fall behind.
//
//   node scripts/export-hotel-reference.mjs           # write to Drive
//   node scripts/export-hotel-reference.mjs --check    # exit 1 if Drive is stale
//
// Edit hotels in src/lib/hotel-recommender-logic.js, then re-run this.

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..')
const driveRoot = process.env.MMG_DRIVE_ROOT || 'G:\\My Drive\\Mr Mallorca Golf'
const outPath = path.join(driveRoot, 'Reference', 'MMG_HOTEL_REFERENCE.md')
const checkOnly = process.argv.includes('--check')

const logicPath = path.join(repoRoot, 'src', 'lib', 'hotel-recommender-logic.js')
const { HOTELS } = await import(pathToFileURL(logicPath).href)

const AREA_LABEL = {
  southwest: 'Southwest (Santa Ponsa, Andratx, Bendinat, Calvià)',
  north: 'North (Pollença, Alcúdia, Formentor)',
  east: 'East (Capdepera, Canyamel, Son Servera, Artà)',
  palma: 'Palma & city',
  northwest: 'Northwest (Sóller, Deià, Tramuntana)',
}
const AREA_ORDER = ['southwest', 'north', 'east', 'palma', 'northwest']
const LUX = { 1: '1 (budget)', 2: '2 (mid)', 3: '3 (upper)', 4: '4 (ultra)' }
const PROX = { 1: '1 (30–60 min — not a golf-first base)', 2: '2 (15–25 min)', 3: '3 (on or beside a course)' }

const esc = s => String(s == null ? '' : s).trim()
const list = a => (Array.isArray(a) ? a.join(', ') : esc(a))

function hotelBlock(h) {
  const lines = [`### ${esc(h.name)}${h.subname ? ` — ${esc(h.subname)}` : ''}`, '']
  lines.push(`- Luxury: ${LUX[h.luxury] || h.luxury} · Golf proximity: ${PROX[h.golfProximity] || h.golfProximity}`)
  lines.push(`- Beach: ${h.beach ? 'yes' : 'no'} · Spa: ${h.spa ? 'yes' : 'no'} · Type: ${esc(h.type)}`)
  if (h.vibes?.length) lines.push(`- Vibe: ${list(h.vibes)}`)
  if (h.groups?.length || h.sizes?.length) lines.push(`- Suits: ${list(h.groups)}${h.sizes?.length ? ` · sizes ${list(h.sizes)}` : ''}`)
  if (h.travelTime) lines.push(`- Getting there: ${esc(h.travelTime)}`)
  if (h.golf) lines.push(`- Golf: ${esc(h.golf)}`)
  if (h.why) lines.push(`- Why: ${esc(h.why)}`)
  if (h.andy) lines.push(`- Andy's note: ${esc(h.andy)}`)
  lines.push('', '')
  return lines.join('\n')
}

const now = new Date().toISOString().slice(0, 10)
let md = `# MMG Hotel Reference — Mallorca Golf Trip Bases

**GENERATED — DO NOT EDIT.** Built from \`mrmallorcagolf-real/src/lib/hotel-recommender-logic.js\`
by \`scripts/export-hotel-reference.mjs\`. Edit hotels there (that data is what
the Hotel Recommender tool scores from), then re-run the script.

Last generated: ${now} · ${HOTELS.length} hotels

Golf proximity: 3 = on or beside a course · 2 = 15–25 min · 1 = 30–60 min (not a golf-first base).

---
`

for (const area of AREA_ORDER) {
  const inArea = HOTELS.filter(h => h.area === area)
  if (!inArea.length) continue
  md += `\n## ${AREA_LABEL[area] || area}\n\n`
  for (const h of inArea.sort((a, b) => (b.luxury - a.luxury) || a.name.localeCompare(b.name))) {
    md += hotelBlock(h)
  }
}

const next = md.trimEnd() + '\n'
const driveMounted = fs.existsSync(path.dirname(outPath))

if (checkOnly) {
  if (!driveMounted) { console.log('Drive not mounted — skipping hotel reference check.'); process.exit(0) }
  const prev = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : ''
  if (next === prev) { console.log('Hotel reference is up to date.'); process.exit(0) }
  console.error('MMG_HOTEL_REFERENCE.md is stale — run: node scripts/export-hotel-reference.mjs')
  process.exit(1)
}

if (!driveMounted) {
  console.error(`Drive not mounted at ${path.dirname(outPath)} — skipping write.`)
  process.exit(0)
}
fs.writeFileSync(outPath, next)
console.log(`Wrote ${outPath} (${HOTELS.length} hotels).`)
