#!/usr/bin/env node
// Rendered-page check: is there English on a translated page?
//
// The content checks read translation files, so they cannot see English that sits
// outside them: text hard-coded in a component, data inside a tool, a key that is
// missing from an overlay and silently falls back to English. This fetches every
// localized page from a running server and fails on any sentence-length string
// that appears word for word on the page's English twin.
//
//   npx next start -p 3000 &
//   node scripts/check-rendered-english.mjs [--base http://127.0.0.1:3000] [--locale de,es] [--limit 40]
//
// Intentional English (testimonial quotes, product names) goes in
// scripts/rendered-english-allowlist.json as exact strings. Names and lists of
// capitalised words are skipped automatically.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d }
const BASE = opt('--base', 'http://127.0.0.1:3000').replace(/\/$/, '')
const LOCALES = opt('--locale', 'de,es,fr,nl,sv,zh').split(',')
const SHOW = Number(opt('--limit', 40))
const allowFile = path.join(root, 'scripts', 'rendered-english-allowlist.json')
const allow = new Set((fs.existsSync(allowFile) ? JSON.parse(fs.readFileSync(allowFile, 'utf8')) : []).map((s) => norm(s)))

function norm(s) {
  return s.normalize('NFC').replace(/&nbsp;| | /g, ' ').replace(/\s+/g, ' ').trim()
}
function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
}

// What a visitor or a search engine reads: text nodes (kind "text") and the
// accessibility/SEO attributes alt, title, aria-label, placeholder and the
// description meta tags (kind "attr").
function extract(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ')
  const out = new Map()
  const add = (t, kind) => { if (t && out.get(t) !== 'text') out.set(t, kind) }
  for (const m of html.matchAll(/\b(?:alt|title|aria-label|placeholder)="([^"]{12,})"/g)) add(norm(decode(m[1])), 'attr')
  for (const m of html.matchAll(/<meta[^>]*>/g)) {
    const key = m[0].match(/(?:name|property)="([^"]+)"/)?.[1]
    const val = m[0].match(/content="([^"]*)"/)?.[1]
    if (val && ['description', 'og:title', 'og:description', 'twitter:title', 'twitter:description'].includes(key)) add(norm(decode(val)), 'text')
  }
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  if (title) add(norm(decode(title[1])), 'text')
  for (const node of html.replace(/<[^>]+>/g, '\u0001').split('\u0001')) add(norm(decode(node)), 'text')
  return out
}

const words = (s) => s.match(/[\p{L}'’-]+/gu) || []
// long enough to be a sentence, and not a list of names / a URL / a code
function worthChecking(s) {
  if (s.length < 28 || /^https?:|^[\w./#?=&%-]+$/.test(s)) return false
  const w = words(s)
  if (w.length < 5) return false
  // lists of proper names ("Son Gual, Alcanada, T Golf Calvià") are not translatable
  const capital = w.filter((x) => /^\p{Lu}/u.test(x)).length
  if (capital / w.length > 0.7) return false
  // needs a plain-ASCII look to count as English
  return !/[^\u0000-ɏ -⁯€£·–—’‘“”…→←↑↓✓×★]/u.test(s)
}

async function get(url) {
  const res = await fetch(url, { redirect: 'follow' })
  return res.ok ? res.text() : null
}
async function pool(items, size, fn) {
  const results = []
  let i = 0
  await Promise.all(Array.from({ length: size }, async () => { while (i < items.length) { const k = i++; results[k] = await fn(items[k]) } }))
  return results
}

const sitemap = await get(`${BASE}/sitemap.xml`)
if (!sitemap) { console.error(`Could not fetch ${BASE}/sitemap.xml. Is the server running?`); process.exit(2) }
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
const localized = urls.filter((u) => LOCALES.some((lc) => u === `/${lc}` || u.startsWith(`/${lc}/`)))

const enCache = new Map()
async function englishNodes(p) {
  if (!enCache.has(p)) enCache.set(p, get(`${BASE}${p || '/'}`).then((h) => (h ? extract(h) : null)))
  return enCache.get(p)
}

const findings = [] // { locale, page, text, kind }
let pages = 0
await pool(localized, 6, async (u) => {
  const lc = u.split('/')[1]
  const twin = u.replace(new RegExp(`^/${lc}`), '') || '/'
  const [html, en] = await Promise.all([get(`${BASE}${u}`), englishNodes(twin)])
  if (!html || !en) return
  pages++
  for (const [t, kind] of extract(html)) {
    if (worthChecking(t) && en.has(t) && !allow.has(t)) findings.push({ locale: lc, page: u, text: t, kind })
  }
})

if (!pages) { console.error('No localized pages were checked; the sitemap or the locale list is wrong.'); process.exit(2) }

const group = (kind) => {
  const byText = new Map()
  for (const f of findings.filter((x) => x.kind === kind)) {
    const e = byText.get(f.text) || { pages: [], locales: new Set() }
    e.pages.push(f.page); e.locales.add(f.locale); byText.set(f.text, e)
  }
  return byText
}
const texts = group('text')
const attrs = group('attr')

const baselineFile = path.join(root, 'scripts', 'rendered-english-baseline.json')
const baseline = fs.existsSync(baselineFile) ? JSON.parse(fs.readFileSync(baselineFile, 'utf8')) : { attr: 0 }
if (args.includes('--baseline')) {
  fs.writeFileSync(baselineFile, JSON.stringify({ attr: attrs.size }) + '\n')
  console.log(`Baseline written: ${attrs.size} English alt/aria string(s).`)
  process.exit(0)
}

const show = (map) => {
  let n = 0
  for (const [text, e] of [...map].sort((a, b) => b[1].pages.length - a[1].pages.length)) {
    if (n++ >= SHOW) { console.error(`  ...and ${map.size - SHOW} more (--limit ${map.size} to see all)`); break }
    console.error(`- "${text.length > 110 ? text.slice(0, 110) + '...' : text}"\n    on ${e.pages.length} page(s), ${[...e.locales].join('/')}: ${e.pages.slice(0, 2).join(', ')}${e.pages.length > 2 ? ', ...' : ''}`)
  }
}

let failed = false
if (texts.size) {
  failed = true
  console.error(`Rendered English check failed: ${texts.size} sentence(s) of page text appear in English on translated pages (${pages} pages checked).\n`)
  show(texts)
  console.error('\nTranslate it, or if it is intentional (a testimonial quote, a product name) add the exact string to scripts/rendered-english-allowlist.json.')
}
if (attrs.size > baseline.attr) {
  failed = true
  console.error(`\nRendered English check failed: ${attrs.size} English alt/aria string(s) on translated pages, baseline is ${baseline.attr}. New image alt text must be translated.\n`)
  show(attrs)
}
if (failed) process.exit(1)
console.log(`Rendered English check passed — ${pages} translated pages, no English page text; ${attrs.size} English alt/aria string(s) remain (baseline ${baseline.attr}, lower it with --baseline as they are translated).`)
