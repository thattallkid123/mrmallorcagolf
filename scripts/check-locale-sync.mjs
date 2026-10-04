#!/usr/bin/env node
// Locale sync: is each translation still a translation of the CURRENT English?
//
// Why this exists: translations live in overlay files that store only the
// translated text. Nothing recorded which English sentence a translation was
// made from, so when English changed the old translation stayed live and every
// existing check (same keys, same array lengths) still passed. By Oct 2026 the
// homepage English had been edited 81 times since May with the translation file
// touched in 9 of them, and a German card still promised something the English
// offer no longer made.
//
// How it works: scripts/locale-sync-manifest.json records, for every translated
// string that has been checked against the English, a fingerprint of that
// English and of the translation. The check then fails when
//   - STALE: the English changed after the translation was confirmed, or
//   - UNVERIFIED: more translated strings than the recorded baseline have never
//     been confirmed (a new translation, or one that was never audited).
// The unverified baseline is a ratchet: it can only go down as pages are audited.
//
// Workflow when you change English copy:
//   1. npm run check:locale-sync     -> lists the stale keys, per language
//   2. update those translations in the overlay files
//   3. node scripts/check-locale-sync.mjs --confirm <LABEL> --prefix <path>
//      (refuses a key whose translation text is untouched since the English
//       changed; pass --allow-unchanged only when the English edit did not
//       change the meaning, e.g. a punctuation fix)
//
// Audit a page against its English:
//   node scripts/check-locale-sync.mjs --report HOME --locale de [--prefix hero] [--unverified|--stale]
//   node scripts/check-locale-sync.mjs --facts HOME            (numbers/prices that differ)
//
// Other commands: --baseline (set the unverified baseline), --ratchet (lower it),
// --confirm ... --paths-file file.json (a list of paths).

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const MANIFEST = path.join(root, 'scripts', 'locale-sync-manifest.json')
const { LOCALES, OVERLAY_CONFIGS } = require('./lib/overlay-configs.cjs')
const importLib = (rel) => import(pathToFileURL(path.join(root, rel)).href)

const norm = (s) => s.normalize('NFC').replace(/\s+/g, ' ').trim()
const h = (s, n) => crypto.createHash('sha1').update(norm(s)).digest('hex').slice(0, n)
const enHash = (s) => h(s, 8)
const trHash = (s) => h(s, 5)

// Arrays of objects that carry a slug (the guide lists) are matched by slug, not
// by position: the German guides index is a different list from the English one
// (other order, two guides missing), so index-based paths would compare the wrong
// pairs. Everything else is matched by position, as the overlay merge does.
const idKey = (arr) => (arr.length && arr.every((x) => x && typeof x === 'object' && typeof x.slug === 'string') ? 'slug' : null)
function leaves(o, trail, out) {
  if (typeof o === 'string') out.push([trail, o])
  else if (Array.isArray(o)) {
    const key = idKey(o)
    o.forEach((v, i) => leaves(v, key ? `${trail}[${key}=${v[key]}]` : `${trail}[${i}]`, out))
  }
  else if (o && typeof o === 'object') for (const k of Object.keys(o)) leaves(o[k], trail ? `${trail}.${k}` : k, out)
  return out
}
function getPath(o, trail) {
  for (const p of trail.match(/[^.[\]]+/g) || []) {
    if (o == null) return undefined
    const eq = p.indexOf('=')
    o = eq > 0 && Array.isArray(o) ? o.find((x) => x && String(x[p.slice(0, eq)]) === p.slice(eq + 1)) : o[p]
  }
  return o
}

// ---- sources: every English content object with the translations that mirror it
async function loadSources() {
  const sources = []
  for (const c of OVERLAY_CONFIGS) {
    const [b, o] = await Promise.all([importLib(c.baseModulePath), importLib(c.overlayModulePath)])
    const english = b[c.baseGetterName]('en')
    const raw = o[c.overlayExportName]
    sources.push({ label: c.label, english, overlay: (lc) => raw[lc] })
  }
  // pages whose content module exposes getter(locale) with the English fallback already merged in:
  // rows where the translation equals the English are untranslated fallbacks (check:rendered-english
  // owns those), so collect() skips them
  for (const [label, mod, fn] of [
    ['PWAP_EXPLAINED', 'src/lib/play-with-a-pro-explained-content.js', 'getPlayWithAProExplainedContent'],
    ['TOOLS_INDEX', 'src/lib/tools-index-content.js', 'getToolsIndexContent'],
    ['SIGNATURE_DAY', 'src/lib/signature-day-content.js', 'getSignatureDayContent'],
    ['SIGNATURE_DAY', 'src/lib/signature-day-content.js', 'getSignatureDayContent'],
  ]) {
    const m = await importLib(mod)
    sources.push({ label, english: m[fn]('en'), overlay: (lc) => m[fn](lc), skipIdentical: true })
  }
  const [ga, gal, gp, gpl] = await Promise.all([
    importLib('src/lib/guide-article-content.js'), importLib('src/lib/guide-article-content-localized.js'),
    importLib('src/lib/guide-post-content.js'), importLib('src/lib/guide-post-content-localized.js'),
  ])
  for (const slug of Object.keys(gal.LOCALIZED_GUIDE_ARTICLE_CONTENT)) {
    if (!ga.GUIDE_ARTICLE_CONTENT[slug]) continue
    sources.push({ label: `GUIDE_ARTICLE:${slug}`, english: ga.getGuideArticleContent(slug, 'en'), overlay: (lc) => gal.LOCALIZED_GUIDE_ARTICLE_CONTENT[slug][lc] })
  }
  const site = await importLib('src/lib/site.js')
  for (const slug of Object.keys(gpl.LOCALIZED_GUIDE_POST_CONTENT)) {
    const en = gp.GUIDE_POST_CONTENT[slug]?.en
    if (!en) continue
    // English-only guides have no translated route, so their overlay is never shown: not audited
    if (site.EN_ONLY_REVIEW_POST_SLUGS.has(slug)) continue
    sources.push({ label: `GUIDE_POST:${slug}`, english: en, overlay: (lc) => gpl.LOCALIZED_GUIDE_POST_CONTENT[slug][lc] })
  }
  return sources
}

// every translated string that has an English string at the same path
function collect(source) {
  const rows = [] // { path, locale, en, tr }
  for (const lc of LOCALES) {
    const ov = source.overlay(lc)
    if (!ov) continue
    for (const [p, tr] of leaves(ov, '', [])) {
      const en = getPath(source.english, p)
      if (typeof en === 'string' && !(source.skipIdentical && tr === en)) rows.push({ path: p, locale: lc, en, tr })
    }
  }
  return rows
}

function readManifest() {
  if (!fs.existsSync(MANIFEST)) return { version: 1, baseline: {}, entries: {} }
  return JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
}
function writeManifest(m) {
  const sorted = { version: 1, baseline: Object.fromEntries(Object.entries(m.baseline).sort()), entries: {} }
  for (const label of Object.keys(m.entries).sort()) {
    sorted.entries[label] = {}
    for (const p of Object.keys(m.entries[label])) sorted.entries[label][p] = m.entries[label][p]
  }
  if (m.fileGuards) sorted.fileGuards = m.fileGuards
  if (m.snap) sorted.snap = m.snap
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted) + '\n')
}

// English pages that are hard-coded in JSX (no data object to fingerprint per string). The file's
// hash is recorded when its translations were last brought into line; a changed hash fails the
// check until the translation files are updated and `--ack-file <path>` is run.
const FILE_GUARDS = [
  { en: 'src/app/(en)/privacy-policy/page.jsx', translations: 'src/app/{de,es,fr}/privacy-policy/page.jsx' },
  { en: 'src/app/(en)/terms/page.jsx', translations: 'src/app/{de,es,fr}/terms/page.jsx' },
]
const fileHash = (rel) => crypto.createHash('sha1').update(fs.readFileSync(path.join(root, rel), 'utf8').replace(/\r\n/g, '\n')).digest('hex').slice(0, 10)
function guardFindings(m) {
  const out = []
  for (const g of FILE_GUARDS) {
    if (!fs.existsSync(path.join(root, g.en))) continue
    const rec = m.fileGuards?.[g.en]
    if (rec !== fileHash(g.en)) out.push(`  ${g.en} changed since its translations were last checked.
    Update ${g.translations}, then: node scripts/check-locale-sync.mjs --ack-file "${g.en}"`)
  }
  return out
}

// snap: English hash recorded for strings nobody has verified yet (--snapshot-english). It cannot
// say the translation was right, but it makes any LATER English edit fail the check, so the
// unverified backlog can no longer drift silently while it is being audited.
function classify(rows, entries, snap) {
  const stale = [], unverified = [], ok = []
  for (const r of rows) {
    const e = entries?.[r.path]
    if (e && e[r.locale]) (e.en === enHash(r.en) ? ok : stale).push(r)
    else if ((e?.en ?? snap?.[r.path]) && (e?.en ?? snap[r.path]) !== enHash(r.en)) stale.push(r)
    else unverified.push(r)
  }
  return { stale, unverified, ok }
}

const seen = new Set()
function markSeen(l, p, lc) { seen.add(`${l}|${p}|${lc}`) }
function chosenSeen(l, p, lc) { return seen.has(`${l}|${p}|${lc}`) }

// ---- args
const args = process.argv.slice(2)
const flag = (n) => args.includes(n)
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined }
if (opt('--ack-file')) {
  const m = readManifest()
  const f = opt('--ack-file')
  if (!FILE_GUARDS.some((g) => g.en === f)) { console.error('Not a guarded file: ' + f); process.exit(2) }
  m.fileGuards = { ...(m.fileGuards || {}), [f]: fileHash(f) }
  writeManifest(m)
  console.log('Recorded ' + f)
  process.exit(0)
}
if (flag('--ack-all-files')) {
  const m = readManifest()
  m.fileGuards = Object.fromEntries(FILE_GUARDS.filter((g) => fs.existsSync(path.join(root, g.en))).map((g) => [g.en, fileHash(g.en)]))
  writeManifest(m)
  console.log('Recorded ' + Object.keys(m.fileGuards).length + ' guarded file(s)')
  process.exit(0)
}
const label = opt('--confirm') || opt('--report') || opt('--facts') || opt('--outliers')
const prefix = opt('--prefix')
const localeArg = opt('--locale')
const wantLocales = localeArg && localeArg !== 'all' ? localeArg.split(',') : LOCALES
const matchesPrefix = (p) => !prefix || p === prefix || p.startsWith(prefix + '.') || p.startsWith(prefix + '[')

const manifest = readManifest()
const sources = await loadSources()
const bySource = new Map(sources.map((s) => [s.label, s]))
const pick = (lab) => (lab === 'ALL' ? sources : sources.filter((s) => s.label === lab || s.label.startsWith(lab + ':')))

// ---- --report
if (opt('--report')) {
  const chosen = pick(label)
  if (!chosen.length) { console.error('Unknown label ' + label); process.exit(2) }
  const limit = Number(opt('--limit') || 200)
  let shown = 0
  for (const s of chosen) {
    const { stale, unverified, ok } = classify(collect(s), manifest.entries[s.label], manifest.snap?.[s.label])
    const pool = flag('--stale') ? stale : flag('--all') ? [...stale, ...unverified, ...ok] : unverified
    for (const r of pool) {
      if (!wantLocales.includes(r.locale) || !matchesPrefix(r.path) || shown >= limit) continue
      shown++
      const state = stale.includes(r) ? 'STALE' : unverified.includes(r) ? 'unverified' : 'ok'
      console.log(`[${s.label} ${r.locale}] ${r.path} (${state})\n  EN: ${r.en}\n  ${r.locale.toUpperCase()}: ${r.tr}`)
    }
  }
  console.log(`\n${shown} shown (limit ${limit}).`)
  process.exit(0)
}

// ---- --facts: numbers, prices and URLs that differ between English and the translation
if (opt('--facts')) {
  const STRICT = flag('--strict')
  // strict: only numbers of two or more digits, thousands separators removed, compared as sets
  const strictTokens = (s) => [...new Set((s.replace(/(\d)[.,  ](\d{3})(?!\d)/g, '$1$2').match(/\d{2,}(?:[.,]\d+)?/g) || []).map((t) => t.replace(',', '.')))].sort().join('|')
  const looseTokens = (s) => (s.match(/€\s?\d[\d.,]*|\d[\d.,]*\s?(?:€|%)|\d+(?:[.,]\d+)?/g) || []).map((t) => t.replace(/[€%\s]/g, '').replace(/,/g, '.')).sort().join('|')
  const tokens = STRICT ? strictTokens : looseTokens
  let n = 0
  for (const s of pick(label)) {
    for (const r of collect(s)) {
      if (!wantLocales.includes(r.locale) || !matchesPrefix(r.path)) continue
      if (tokens(r.en) !== tokens(r.tr) && !(r.locale === 'zh' && !STRICT && tokens(r.en).split('|').length < 3)) {
        n++
        console.log(`[${s.label} ${r.locale}] ${r.path}\n  EN: ${r.en}\n  ${r.locale.toUpperCase()}: ${r.tr}`)
      }
    }
  }
  console.log(`\n${n} string(s) where the numbers differ.`)
  process.exit(0)
}

// ---- --hrefs: internal links must point at the same page as the English, in the same language
// "/contact" in English must be "/de/contact" in German, "/" must be "/de". A link that
// points somewhere else is drift too (the German Plan Your Trip button went to /contact
// after the English link moved to /plan-your-trip).
function hrefFindings() {
  const out = []
  for (const s of sources) {
    for (const r of collect(s)) {
      // inline <a href> in prose is localized at render time (InlineRichText), so a
      // locale prefix typed into the translation becomes /de/de/... and 404s
      if (/<a\s+href=["']\/(?:de|es|fr|nl|sv|zh)\//.test(r.tr)) out.push({ label: s.label, ...r, expected: 'unprefixed href (the renderer adds the locale)' })
      if (!/^\/[a-z0-9\-/]*(?:[#?][^\s]*)?$/i.test(r.en) || /^\/(?:[a-z]{2})\//.test(r.en)) continue
      const expected = r.en === '/' ? `/${r.locale}` : `/${r.locale}${r.en}`
      if (r.tr !== expected && r.tr !== r.en) out.push({ label: s.label, ...r, expected })
    }
  }
  return out
}
if (flag('--hrefs')) {
  const f = hrefFindings()
  for (const r of f) console.log(`[${r.label} ${r.locale}] ${r.path}\n  EN: ${r.en}   ${r.locale.toUpperCase()}: ${r.tr}   expected: ${r.expected}`)
  console.log(`\n${f.length} internal link(s) that do not match the English.`)
  process.exit(0)
}

// ---- --outliers: a translation whose length is far out of line with the same string in the
// other languages is usually not a translation of the same sentence. Uniform drift (all
// languages stale together) is not caught this way; read one language against the English
// for that (--report).
if (opt('--outliers')) {
  const chosen = pick(label)
  const rows = chosen.flatMap((s) => collect(s).map((r) => ({ ...r, label: s.label }))).filter((r) => r.en.length >= 40)
  const scale = {}
  for (const lc of LOCALES) {
    const ratios = rows.filter((r) => r.locale === lc).map((r) => r.tr.length / r.en.length).sort((a, b) => a - b)
    scale[lc] = ratios[Math.floor(ratios.length / 2)] || 1
  }
  const lo = Number(opt('--low') ?? 0.6), hi = Number(opt('--high') ?? 1.55)
  let n = 0
  for (const r of rows) {
    if (!wantLocales.includes(r.locale) || !matchesPrefix(r.path)) continue
    const norm = r.tr.length / r.en.length / scale[r.locale]
    const sentences = (t) => (t.replace(/https?:\S+/g, '').match(/[.!?]+(?:\s|$)|[。！？]+/g) || []).length
    const se = sentences(r.en), st = sentences(r.tr)
    const sentenceGap = r.en.length >= 60 && se >= 2 && Math.abs(se - st) >= 1
    if (norm < lo || norm > hi || sentenceGap) {
      n++
      console.log(`[${r.label} ${r.locale}] ${r.path}  length x${norm.toFixed(2)} of typical${sentenceGap ? `, sentences ${se} -> ${st}` : ''}\n  EN: ${r.en}\n  ${r.locale.toUpperCase()}: ${r.tr}`)
    }
  }
  console.log(`\n${n} string(s) whose length is out of line (below x${lo} or above x${hi} of the language's typical ratio).`)
  process.exit(0)
}


if (flag('--snapshot-english')) {
  manifest.snap ||= {}
  let added = 0
  for (const s of sources) {
    const snap = (manifest.snap[s.label] ||= {})
    const entries = manifest.entries[s.label] || {}
    for (const r of collect(s)) {
      const e = entries[r.path]
      if ((e && e[r.locale]) || snap[r.path]) continue
      snap[r.path] = enHash(r.en)
      added++
    }
  }
  writeManifest(manifest)
  console.log('Recorded the current English for ' + added + ' unverified string(s).')
  process.exit(0)
}
// ---- --confirm
if (opt('--confirm')) {
  const chosen = pick(label)
  if (!chosen.length) { console.error('Unknown label ' + label); process.exit(2) }
  let pathFilter = null
  const pf = opt('--paths-file')
  if (pf) pathFilter = JSON.parse(fs.readFileSync(pf, 'utf8'))
  const refused = []
  let confirmed = 0
  for (const s of chosen) {
    manifest.entries[s.label] ||= {}
    for (const r of collect(s)) {
      if (!wantLocales.includes(r.locale)) continue
      if (pathFilter) {
        const list = Array.isArray(pathFilter) ? pathFilter : (pathFilter[s.label] || pathFilter[r.locale] || [])
        if (!list.includes(r.path)) continue
      } else if (!matchesPrefix(r.path)) continue
      const e = (manifest.entries[s.label][r.path] ||= {})
      const prior = e[r.locale]
      if (prior && e.en !== enHash(r.en) && prior === trHash(r.tr) && !flag('--allow-unchanged')) {
        refused.push(`${s.label} ${r.locale} ${r.path}`)
        continue
      }
      // a different English than the one other locales were confirmed against: those are now stale, drop them
      if (e.en && e.en !== enHash(r.en)) for (const lc of LOCALES) if (lc !== r.locale && e[lc] && !chosenSeen(s.label, r.path, lc)) delete e[lc]
      e.en = enHash(r.en)
      e[r.locale] = trHash(r.tr)
      markSeen(s.label, r.path, r.locale)
      confirmed++
    }
  }
  if (refused.length) {
    console.error(`Refused ${refused.length} key(s): the English changed but the translation text is exactly what it was when last confirmed.`)
    console.error('Update the translation first (or pass --allow-unchanged if the English edit did not change the meaning):')
    refused.slice(0, 20).forEach((x) => console.error('  - ' + x))
    if (refused.length > 20) console.error(`  ...and ${refused.length - 20} more`)
    process.exit(1)
  }
  writeManifest(manifest)
  console.log(`Confirmed ${confirmed} translated string(s) against the current English.`)
  process.exit(0)
}
// ---- check / baseline / ratchet
const totals = {}
const staleAll = []
for (const s of sources) {
  const { stale, unverified, ok } = classify(collect(s), manifest.entries[s.label], manifest.snap?.[s.label])
  totals[s.label] = { stale: stale.length, unverified: unverified.length, ok: ok.length, unverifiedByLocale: Object.fromEntries(LOCALES.map((lc) => [lc, unverified.filter((r) => r.locale === lc).length])) }
  staleAll.push(...stale.map((r) => ({ label: s.label, ...r })))
}

if (flag('--baseline') || flag('--ratchet')) {
  for (const [lab, t] of Object.entries(totals)) {
    const prev = manifest.baseline[lab]
    if (flag('--ratchet') && prev !== undefined && t.unverified > prev) { console.error(`${lab}: unverified ${t.unverified} is above the baseline ${prev}; confirm or fix before ratcheting`); process.exit(1) }
    manifest.baseline[lab] = flag('--ratchet') && prev !== undefined ? Math.min(prev, t.unverified) : t.unverified
  }
  writeManifest(manifest)
  console.log('Baseline written:', JSON.stringify(manifest.baseline))
  process.exit(0)
}

// Text damage that is mechanical to detect and was found live on 2026-10-04 (see the memory note on
// the locale sync system): French elisions with the apostrophe dropped ("l echelle", "d eau"),
// Swedish ä/ö typed as ae/oe ("laengsta", "hoer"), Chinese sentences punctuated with ASCII , : ;.
const TYPO_RULES = [
  { lc: 'fr', rx: /(?<![\p{L}\d'’])(?<!\d )([dljnscmtDLJNSCMT]|[Qq]u|[Jj]usqu|[Ll]orsqu|[Qq]uelqu) (?=[aeiouhàâéèêîôûAEIOUHÉ]\p{L})/u, what: 'French elision without its apostrophe' },
  { lc: 'sv', rx: /\b\w*(?:laeng|hoer|hoera|boer\b|foer\b|goer\b)\w*/i, what: 'Swedish ä/ö typed as ae/oe' },
  { lc: 'zh', rx: /[一-鿿][,:;]|[,:;][一-鿿]/, what: 'ASCII punctuation next to Chinese text' },
]
function typographyFindings() {
  const out = []
  for (const s of sources) {
    for (const r of collect(s)) {
      if (/^(https?:|\/)/.test(r.tr)) continue
      const plain = r.tr.replace(/<[^>]+>/g, ' ')
      for (const rule of TYPO_RULES) {
        if (rule.lc !== r.locale) continue
        const m = rule.rx.exec(plain)
        if (m) out.push({ label: s.label, locale: r.locale, path: r.path, what: rule.what, snippet: plain.slice(Math.max(0, m.index - 15), m.index + m[0].length + 15) })
      }
    }
  }
  return out
}
if (flag('--typography')) {
  const f = typographyFindings()
  for (const r of f) console.log(`[${r.label} ${r.locale}] ${r.path}: ${r.what}: "${r.snippet}"`)
  console.log(`\n${f.length} typography finding(s).`)
  process.exit(0)
}

const failures = []
const typoFindings = typographyFindings()
if (typoFindings.length) {
  failures.push(`${typoFindings.length} translated string(s) with damaged text (node scripts/check-locale-sync.mjs --typography):`)
  for (const r of typoFindings.slice(0, 8)) failures.push(`  - ${r.label} ${r.locale} ${r.path}: ${r.what}: "${r.snippet}"`)
  if (typoFindings.length > 8) failures.push(`  ...and ${typoFindings.length - 8} more`)
}
const badHrefs = hrefFindings()
if (badHrefs.length) {
  failures.push(`${badHrefs.length} translated link(s) point somewhere other than the English link (node scripts/check-locale-sync.mjs --hrefs):`)
  for (const r of badHrefs.slice(0, 8)) failures.push(`  - ${r.label} ${r.locale} ${r.path}: ${r.tr} (expected ${r.expected})`)
  if (badHrefs.length > 8) failures.push(`  ...and ${badHrefs.length - 8} more`)
}
if (staleAll.length) {
  failures.push(`${staleAll.length} translated string(s) are STALE: the English changed after they were confirmed.`)
  const byLabel = {}
  for (const r of staleAll) (byLabel[r.label] ||= []).push(r)
  for (const [lab, rows] of Object.entries(byLabel)) {
    const paths = [...new Set(rows.map((r) => r.path))]
    failures.push(`  ${lab}: ${paths.length} key(s) x ${[...new Set(rows.map((r) => r.locale))].join('/')}`)
    for (const p of paths.slice(0, 6)) failures.push(`    - ${p}  (now: "${rows.find((r) => r.path === p).en.slice(0, 70)}")`)
    if (paths.length > 6) failures.push(`    ...and ${paths.length - 6} more (node scripts/check-locale-sync.mjs --report ${lab} --stale)`)
  }
}
for (const [lab, t] of Object.entries(totals)) {
  const base = manifest.baseline[lab] ?? 0
  if (t.unverified > base) failures.push(`${lab}: ${t.unverified} unverified translated string(s), baseline is ${base}. New or changed translations must be confirmed (--confirm ${lab} --prefix <path>).`)
}

failures.push(...guardFindings(manifest))
const sumUnv = Object.values(totals).reduce((a, t) => a + t.unverified, 0)
const sumOk = Object.values(totals).reduce((a, t) => a + t.ok, 0)
if (failures.length) {
  console.error('Locale sync check failed:\n' + failures.join('\n'))
  process.exit(1)
}
console.log(`Locale sync check passed — ${sumOk} translated string(s) confirmed against the current English, ${sumUnv} still unverified (audit backlog, baseline ${Object.values(manifest.baseline).reduce((a, b) => a + b, 0)}).`)
if (flag('--summary')) {
  for (const [lab, t] of Object.entries(totals)) console.log(`  ${lab.padEnd(44)} confirmed ${String(t.ok).padStart(5)}  unverified ${String(t.unverified).padStart(5)}`)
}
