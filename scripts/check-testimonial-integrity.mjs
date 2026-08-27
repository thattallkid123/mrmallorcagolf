#!/usr/bin/env node
/**
 * check-testimonial-integrity.mjs
 *
 * The voice guide says testimonials "stay word for word unless Andy
 * explicitly approves a change." Nothing mechanical enforced that - and
 * fixing check-voice.mjs's scope on 2026-08-27 (opt-out auto-discovery,
 * covering play-with-a-pro-content.js for the first time) required blanking
 * the testimonials subtree before scanning, precisely so a verbatim quote
 * containing a banned word ("unparalleled") wouldn't fail the build. That
 * exemption is correct, but it means testimonials are now the one thing in
 * scope for check:voice that check:voice deliberately cannot see. Nothing
 * else guarded them either. This closes that hole with the same
 * snapshot/accept pattern as check:privacy-surface.mjs: content-hash each
 * known testimonial-bearing subtree, fail on any drift, require a deliberate
 * `--accept` once Andy has actually approved the change.
 *
 * Scope, found by grepping every src/lib/*.js for quote/testimonial/author
 * keys and checking each hit by hand:
 *   - play-with-a-pro-content.js: the `testimonials` array (5 client quotes)
 *   - play-with-a-pro-content-localized.js: same, once per locale
 *   - homepage-content.js: the `quote` object (Jo's excerpt, pulled from PWAP)
 *   - homepage-content-localized.js: same, once per locale
 * Deliberately excluded: about-content.js and coaching-content.js also have
 * a `quote` key, but those are Andy's own editorial words (one is explicitly
 * attributed "Andy Griffiths, PGA Advanced Professional"), not client
 * testimonials - he can edit his own words freely, so they are out of scope.
 *
 * On failure: confirm the change was explicitly approved by Andy (per the
 * voice guide rule), then run:
 *   npm run check:testimonial-integrity -- --accept
 */

import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const SNAPSHOT_PATH = join(__dirname, '.testimonial-integrity-snapshot.json')

// Quote-aware brace walk (same technique as check-voice.mjs's subtree
// scanner): given text and the index of an opening `{` or `[`, returns the
// index one past its matching close.
function matchingCloseIndex(text, openIdx) {
  const openCh = text[openIdx]
  const closeCh = openCh === '{' ? '}' : ']'
  let depth = 0
  let inString = null
  for (let i = openIdx; i < text.length; i++) {
    const ch = text[i]
    if (inString) {
      if (ch === '\\') { i++; continue }
      if (ch === inString) inString = null
      continue
    }
    if (ch === "'" || ch === '"' || ch === '`') { inString = ch; continue }
    if (ch === openCh) depth++
    else if (ch === closeCh) {
      depth--
      if (depth === 0) return i + 1
    }
  }
  return -1
}

// Finds every top-level locale block (`"es": { ... }`) in a *-localized.js
// file and returns { locale, start, end } for each.
function findLocaleBlocks(text) {
  const blocks = []
  const re = /^\s*"(en|de|es|fr|nl|sv|zh)":\s*\{/gm
  let m
  while ((m = re.exec(text))) {
    const openIdx = m.index + m[0].length - 1
    const end = matchingCloseIndex(text, openIdx)
    if (end === -1) continue
    blocks.push({ locale: m[1], start: m.index, end })
  }
  return blocks
}

// Finds a named key's subtree (`"key": {` or `"key": [`) within a text range.
function findKeySubtree(text, key, from = 0, to = text.length) {
  const re = new RegExp(`"${key}":\\s*([\\{\\[])`)
  const scoped = text.slice(from, to)
  const m = scoped.match(re)
  if (!m) return null
  const openIdx = from + m.index + m[0].length - 1
  const end = matchingCloseIndex(text, openIdx)
  if (end === -1) return null
  return text.slice(openIdx, end)
}

function hashContent(text) {
  return createHash('sha256').update(text.replace(/\r\n/g, '\n').trim()).digest('hex').slice(0, 16)
}

function collectSnapshots() {
  const out = {}

  // EN master: testimonials array in play-with-a-pro-content.js
  {
    const rel = 'src/lib/play-with-a-pro-content.js'
    const text = readFileSync(join(REPO_ROOT, rel), 'utf8')
    const sub = findKeySubtree(text, 'testimonials')
    if (sub) out[`${rel} :: en testimonials`] = hashContent(sub)
  }

  // EN master: quote object in homepage-content.js
  {
    const rel = 'src/lib/homepage-content.js'
    const text = readFileSync(join(REPO_ROOT, rel), 'utf8')
    const sub = findKeySubtree(text, 'quote')
    if (sub) out[`${rel} :: en quote`] = hashContent(sub)
  }

  // Localized: testimonials per locale in play-with-a-pro-content-localized.js
  {
    const rel = 'src/lib/play-with-a-pro-content-localized.js'
    const text = readFileSync(join(REPO_ROOT, rel), 'utf8')
    for (const { locale, start, end } of findLocaleBlocks(text)) {
      const sub = findKeySubtree(text, 'testimonials', start, end)
      if (sub) out[`${rel} :: ${locale} testimonials`] = hashContent(sub)
    }
  }

  // Localized: quote object per locale in homepage-content-localized.js
  {
    const rel = 'src/lib/homepage-content-localized.js'
    const text = readFileSync(join(REPO_ROOT, rel), 'utf8')
    for (const { locale, start, end } of findLocaleBlocks(text)) {
      const sub = findKeySubtree(text, 'quote', start, end)
      if (sub) out[`${rel} :: ${locale} quote`] = hashContent(sub)
    }
  }

  return out
}

const current = collectSnapshots()
const accepting = process.argv.includes('--accept')

if (Object.keys(current).length < 10) {
  // 1 (en testimonials) + 1 (en quote) + up to 6 (localized testimonials) +
  // up to 6 (localized quote) = should be well above 10. A low count means
  // the extraction broke, not that testimonials genuinely shrank - fail loud
  // rather than silently accepting a near-empty snapshot as "correct".
  console.error(`Testimonial integrity check: only found ${Object.keys(current).length} testimonial subtree(s) - expected close to 14. The file structure may have changed; check findKeySubtree/findLocaleBlocks before trusting this run.`)
  process.exit(1)
}

if (accepting) {
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(current, null, 2) + '\n', 'utf8')
  console.log(`Testimonial integrity snapshot updated (${Object.keys(current).length} subtree(s)). Commit .testimonial-integrity-snapshot.json.`)
  process.exit(0)
}

if (!existsSync(SNAPSHOT_PATH)) {
  mkdirSync(dirname(SNAPSHOT_PATH), { recursive: true })
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(current, null, 2) + '\n', 'utf8')
  console.log(`Testimonial integrity check: no snapshot found, created one for ${Object.keys(current).length} subtree(s). Commit .testimonial-integrity-snapshot.json.`)
  process.exit(0)
}

const previous = JSON.parse(readFileSync(SNAPSHOT_PATH, 'utf8'))
const added = Object.keys(current).filter((k) => !(k in previous))
const removed = Object.keys(previous).filter((k) => !(k in current))
const changed = Object.keys(current).filter((k) => k in previous && previous[k] !== current[k])

if (added.length || removed.length || changed.length) {
  console.error('Testimonial integrity check failed - a testimonial/client-quote subtree differs from the last accepted snapshot:\n')
  for (const k of added) console.error(`  + new: ${k}`)
  for (const k of removed) console.error(`  - removed: ${k}`)
  for (const k of changed) console.error(`  ~ changed: ${k}`)
  console.error(
    '\nPer the voice guide, testimonials stay word for word unless Andy explicitly ' +
    'approves a change. Confirm this was approved, then run:\n  npm run check:testimonial-integrity -- --accept'
  )
  process.exit(1)
}

console.log(`Testimonial integrity check passed - ${Object.keys(current).length} subtree(s) match the last accepted snapshot.`)
