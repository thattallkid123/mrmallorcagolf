#!/usr/bin/env node
// Guide image alt text that is still English on a translated page.
//
// check:rendered-english skips strings made of capitalised words (it cannot tell a Title Case alt from
// a place name), so "Son Gual Golf Course, Mallorca" stayed English on every translated review. This
// compares each translated guide/review image alt with the English one on the built content and fails
// when they are identical, unless the alt is a proper name (list below) or has an entry in
// src/lib/alt-text.js (which the guide views apply at render time).

import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const load = (rel) => import(pathToFileURL(path.join(root, rel)).href)
const [{ getGuidePostContent, GUIDE_POST_CONTENT }, { getGuideArticleContent, GUIDE_ARTICLE_CONTENT }, { ALT_TEXT }, site] = await Promise.all([
  load('src/lib/guide-post-content.js'),
  load('src/lib/guide-article-content.js'),
  load('src/lib/alt-text.js'),
  load('src/lib/site.js'),
])

// alts that are only names and read the same in every language
const NAMES = new Set(['Valldemossa', 'Soller', 'Golf de Andratx', 'Palma Pitch and Putt'])
const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

const altsOf = (b) => {
  const out = []
  if (typeof b.alt === 'string') out.push(b.alt)
  if (Array.isArray(b.items)) for (const it of b.items) if (it && typeof it.alt === 'string') out.push(it.alt)
  return out
}

const sources = [
  ...Object.keys(GUIDE_POST_CONTENT).filter((s) => !site.EN_ONLY_REVIEW_POST_SLUGS.has(s)).map((s) => [`post:${s}`, (l) => getGuidePostContent(s, l)]),
  ...Object.keys(GUIDE_ARTICLE_CONTENT).filter((s) => !site.EN_ONLY_ARTICLE_SLUGS.has(s)).map((s) => [`article:${s}`, (l) => getGuideArticleContent(s, l)]),
]

const found = new Map()
for (const [label, get] of sources) {
  const en = get('en').blocks
  for (const lc of LOCALES) {
    const tr = get(lc).blocks
    en.forEach((b, i) => {
      const e = altsOf(b), t = altsOf(tr[i] || {})
      e.forEach((alt, j) => {
        if (t[j] !== alt || NAMES.has(alt) || ALT_TEXT[alt]) return
        if (lc === 'nl' && / clubs$/.test(alt)) return
        const k = `${label}: "${alt}"`
        if (!found.has(k)) found.set(k, new Set())
        found.get(k).add(lc)
      })
    })
  }
}

if (found.size) {
  console.error(`Guide alt check failed: ${found.size} image alt text(s) are still English on translated pages.\n`)
  for (const [k, v] of found) console.error(`- ${k}  (${[...v].join('/')})`)
  console.error('\nTranslate it in the overlay (blocks[i].alt) or add the exact English string to src/lib/alt-text.js.')
  process.exit(1)
}
console.log(`Guide alt check passed - every image alt in ${sources.length} guides and reviews is translated or a proper name.`)
