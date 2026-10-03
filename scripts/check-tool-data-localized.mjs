#!/usr/bin/env node
// Fails when a tool's English data has an item with no translation in a language
// overlay under src/lib/tool-data/. The overlays fall back to English silently, so
// without this a new hotel or course would ship half-translated.
//
// Covers: hotel recommender (every hotel id + every question option), the course
// selector (every course id) and the golf day builder (courses, questions,
// restaurants, add-ons and every plan template key). Add each tool here when it
// gets an overlay.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const lib = path.join(root, 'src', 'lib')
const failures = []

const load = async (rel) => (await import(pathToFileURL(path.join(lib, rel)).href)).default

// ---- hotel recommender
const hotelLogic = await import(pathToFileURL(path.join(lib, 'hotel-recommender-logic.js')).href)
for (const lang of ['de', 'es', 'fr', 'nl', 'sv', 'zh']) {
  const data = await load(`tool-data/hotel-recommender.${lang}.js`)
  for (const h of hotelLogic.HOTELS) {
    const c = data.hotels?.[h.id]
    if (!c) { failures.push(`hotel-recommender.${lang}: no entry for hotel "${h.id}"`); continue }
    for (const f of ['why', 'andy', 'golf', 'travelTime']) if (!c[f]) failures.push(`hotel-recommender.${lang}: "${h.id}" missing ${f}`)
    if (!Array.isArray(c.pills) || c.pills.length !== h.pills.length) failures.push(`hotel-recommender.${lang}: "${h.id}" pills do not match the English count`)
  }
  for (const q of hotelLogic.QUESTIONS_DATA) {
    const c = data.questions?.[q.key]
    if (!c) { failures.push(`hotel-recommender.${lang}: no question "${q.key}"`); continue }
    if (!c.title || !c.sub) failures.push(`hotel-recommender.${lang}: question "${q.key}" missing title/sub`)
    for (const o of q.opts) {
      if (!c.opts?.[o.val]?.label) failures.push(`hotel-recommender.${lang}: question "${q.key}" option "${o.val}" missing label`)
      if (o.desc && !c.opts?.[o.val]?.desc) failures.push(`hotel-recommender.${lang}: question "${q.key}" option "${o.val}" missing desc`)
    }
  }
}

// ---- course selector (course list lives in the client component, so read the ids from source)
const clientSrc = fs.readFileSync(path.join(root, 'src', 'app', '(en)', 'tools', 'course-selector', 'CourseSelectorToolClient.jsx'), 'utf8')
const start = clientSrc.indexOf('const COURSES = [')
const end = clientSrc.indexOf('const SELECTOR_COURSES')
const courseIds = [...clientSrc.slice(start, end).matchAll(/\bid:'([a-z0-9-]+)', name:/g)].map((m) => m[1])
if (courseIds.length < 20) failures.push(`course-selector: only found ${courseIds.length} course ids in the client, the parser needs updating`)
for (const lang of ['de', 'es', 'fr', 'nl', 'sv']) {
  const data = await load(`tool-data/course-selector.${lang}.js`)
  for (const id of courseIds) {
    const c = data.courses?.[id]
    if (!c) { failures.push(`course-selector.${lang}: no entry for course "${id}"`); continue }
    for (const f of ['areaLabel', 'buggyNote', 'bestFor', 'why', 'andy', 'bestPlayer']) if (!c[f]) failures.push(`course-selector.${lang}: "${id}" missing ${f}`)
  }
  for (const k of ['fee', 'diff', 'facts', 'access', 'members', 'compare']) if (!data.labels?.[k]) failures.push(`course-selector.${lang}: labels.${k} missing`)
}

// ---- golf day builder
const dayLogic = await import(pathToFileURL(path.join(lib, 'golf-day-builder-logic.js')).href)
const dayLocalize = await import(pathToFileURL(path.join(lib, 'golf-day-builder-localize.js')).href)
const missingKeys = (en, tr, prefix, lang) => {
  for (const k of Object.keys(en)) {
    if (!(k in (tr || {}))) { failures.push(`golf-day-builder.${lang}: ${prefix}${k} missing`); continue }
    if (en[k] && typeof en[k] === 'object') missingKeys(en[k], tr[k], `${prefix}${k}.`, lang)
    else if (typeof en[k] === 'string' && !String(tr[k]).trim()) failures.push(`golf-day-builder.${lang}: ${prefix}${k} is empty`)
  }
}
for (const lang of ['de', 'es', 'fr', 'nl', 'sv', 'zh']) {
  const data = await load(`tool-data/golf-day-builder.${lang}.js`)
  for (const c of dayLogic.COURSES) {
    const t = data.courses?.[c.id]
    if (!t) { failures.push(`golf-day-builder.${lang}: no entry for course "${c.id}"`); continue }
    if (!t.blurb) failures.push(`golf-day-builder.${lang}: "${c.id}" missing blurb`)
    if (!Array.isArray(t.facts) || t.facts.length !== c.facts.length) failures.push(`golf-day-builder.${lang}: "${c.id}" facts do not match the English count`)
    if (c.note && !t.note) failures.push(`golf-day-builder.${lang}: "${c.id}" missing note`)
  }
  for (const q of dayLogic.QUESTIONS) {
    const t = data.questions?.[q.key]
    if (!t || !t.title) { failures.push(`golf-day-builder.${lang}: no question "${q.key}"`); continue }
    if (!data.sections?.[q.key]) failures.push(`golf-day-builder.${lang}: no section name for "${q.key}"`)
    for (const o of q.opts) if (!t.opts?.[o.v]?.[0]) failures.push(`golf-day-builder.${lang}: question "${q.key}" option "${o.v}" missing`)
  }
  missingKeys(dayLogic.RESTAURANTS, data.restaurants, 'restaurants.', lang)
  for (const k of Object.keys(dayLogic.ADDONS)) if (!data.addons?.[k]?.[1]) failures.push(`golf-day-builder.${lang}: add-on "${k}" missing`)
  missingKeys(dayLocalize.EN_PLAN, data.plan, 'plan.', lang)
  for (const k of ['stepFmt', 'teeWindows', 'factLabels', 'built']) if (!data[k]) failures.push(`golf-day-builder.${lang}: ${k} missing`)
}

if (failures.length) {
  console.error('Tool data localisation check failed:')
  for (const f of failures.slice(0, 40)) console.error('  - ' + f)
  if (failures.length > 40) console.error(`  ...and ${failures.length - 40} more`)
  process.exit(1)
}
console.log(`Tool data localisation check passed — ${hotelLogic.HOTELS.length} hotels x 6 languages, ${courseIds.length} selector courses x 5 languages, ${dayLogic.COURSES.length} day-builder courses x 6 languages.`)
