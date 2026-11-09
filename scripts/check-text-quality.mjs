/**
 * check-text-quality.mjs
 *
 * Keeps three reading-quality fixes from drifting back after the 9 Nov 2026 pass (Impeccable scan).
 * Loads real pages in Chromium and measures what a visitor sees on arrival:
 *
 *   contrast   text under WCAG AA (4.5:1, or 3:1 for large text) against a solid or layered colour background.
 *              Text over a photo or gradient is skipped: the colour underneath cannot be read from the DOM.
 *   straggler  a paragraph, list item, quote or heading whose last line is one lone word.
 *   measure    a paragraph where most lines run past 100 characters.
 *
 * It is a ratchet, like check:css-hygiene. Today's known cases are frozen in scripts/text-quality-baseline.json;
 * the check fails only on a NEW one. Fix the CSS, do not add to the baseline. When you fix a baseline entry,
 * run `node scripts/check-text-quality.mjs --base <url> --update` to lock the win in.
 *
 * Run:  node scripts/check-text-quality.mjs --base http://127.0.0.1:3001   (against a production build)
 *       --report   list everything found, no failure       --update   rewrite the baseline from this run
 *       --pages /guides,/tools   limit to some paths        --widths 375,1280        --no-deep   skip the click-through of tool pages
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')

const args = process.argv.slice(2)
const arg = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d }
const BASE = arg('--base', 'http://127.0.0.1:3001').replace(/\/$/, '')
const REPORT = args.includes('--report')
const UPDATE = args.includes('--update')
const WIDTHS = arg('--widths', '375,1280').split(',').map(Number)
const ONLY = arg('--pages', '')
const baselinePath = arg('--baseline', path.join(root, 'scripts', 'text-quality-baseline.json'))

const PAGES = ONLY ? ONLY.split(',') : await listPages()

async function listPages() {
  const res = await fetch(BASE + '/sitemap.xml')
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
  const en = urls.filter((u) => !/^\/(de|es|fr|nl|sv|zh)(\/|$)/.test(u))
  const other = urls.filter((u) => /^\/(de|es|fr|nl|sv)\/(play-with-a-pro|contact)?$/.test(u) || /^\/zh$/.test(u))
  return [...new Set([...en, ...other])]
}

function measure() {
  const out = []
  const sel = (el) => {
    const parts = []
    for (let e = el; e && e.nodeType === 1 && parts.length < 3; e = e.parentElement) {
      let p = e.tagName.toLowerCase()
      if (e.id) p += '#' + e.id
      else if (typeof e.className === 'string' && e.className.trim()) p += '.' + e.className.trim().split(/\s+/).filter((c) => !/^jsx-|^reveal/.test(c))[0]
      parts.unshift(p)
    }
    return parts.join(' > ')
  }
  const rgba = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/)
    if (!m) return null
    const n = m[1].split(/[ ,/]+/).filter(Boolean).map(Number)
    if (n.length < 3 || n.some((x) => Number.isNaN(x))) return null
    return { r: n[0], g: n[1], b: n[2], a: n.length > 3 ? n[3] : 1 }
  }
  const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }
  const lum = (c) => 0.2126 * lin(c.r) + 0.7152 * lin(c.g) + 0.0722 * lin(c.b)
  const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 })

  const visible = (el) => {
    for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
      const s = getComputedStyle(e)
      if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) < 0.99) return false
    }
    const r = el.getBoundingClientRect()
    return r.width > 1 && r.height > 1
  }
  // background colour under el, or null when an image or gradient sits somewhere in the stack
  const backdrop = (el) => {
    const layers = []
    for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
      const s = getComputedStyle(e)
      if (s.backgroundImage !== 'none') return null
      const c = rgba(s.backgroundColor)
      if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break }
    }
    let base = { r: 255, g: 255, b: 255, a: 1 }
    for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base)
    return base
  }
  const ownText = (el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.data.trim().length > 1)

  for (const el of document.body.querySelectorAll('*')) {
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH', 'OPTION'].includes(el.tagName.toUpperCase())) continue
    if (!ownText(el) || el.closest('svg,[aria-hidden="true"],button:disabled,input,textarea,select')) continue
    if (!visible(el)) continue
    const cs = getComputedStyle(el)

    // contrast
    const fg = rgba(cs.color)
    const bg = backdrop(el)
    if (fg && bg) {
      const text = over(fg, bg)
      const L1 = lum(text), L2 = lum(bg)
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
      // Light text on a near-white backdrop is almost always text over a photo or gradient painted by a sibling
      // layer (a hero), which the DOM walk above cannot see. Skip it rather than report a false 1.0:1.
      if (lum(text) > 0.6 && lum(bg) > 0.85) continue
      const px = parseFloat(cs.fontSize)
      const large = px >= 24 || (px >= 18.66 && parseInt(cs.fontWeight, 10) >= 700)
      if (ratio < (large ? 3 : 4.5)) out.push({ rule: 'contrast', sel: sel(el), msg: `${ratio.toFixed(1)}:1 (need ${large ? 3 : 4.5}:1) ${cs.color} on rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})` })
    }

    // straggler and measure: block-level reading text only
    if (!/^(P|LI|BLOCKQUOTE|FIGCAPTION|H1|H2|H3|H4|DD)$/.test(el.tagName)) continue
    const txt = el.textContent.trim().replace(/\s+/g, ' ')
    if (txt.length < 40 || txt.length > 2500) continue
    // Chinese text has no spaces, so a whole clause reads as one "word" here; the lone-word test does not apply
    if (/[㐀-鿿]/.test(txt)) continue
    const words = []
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
    const rng = document.createRange()
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      for (const m of n.data.matchAll(/\S+/g)) {
        rng.setStart(n, m.index); rng.setEnd(n, m.index + m[0].length)
        // a hyphenated word can break across two lines: place it on the line where it ends
        const rects = rng.getClientRects()
        const r = rects[rects.length - 1]
        if (r && r.width > 0) words.push({ w: m[0], y: Math.round(r.bottom / 3) })
      }
    }
    const lines = []
    for (const w of words) {
      const last = lines[lines.length - 1]
      if (last && Math.abs(last.y - w.y) <= 1) last.words.push(w.w)
      else lines.push({ y: w.y, words: [w.w] })
    }
    if (lines.length >= 2 && lines[lines.length - 1].words.length === 1) {
      out.push({ rule: 'straggler', sel: sel(el), msg: `"${lines[lines.length - 1].words[0]}" alone on the last of ${lines.length} lines` })
    }
    if (lines.length >= 2 && el.tagName === 'P') {
      const lens = lines.map((l) => l.words.join(' ').length)
      const long = lens.filter((n) => n > 100).length
      if (long > lens.length / 2) out.push({ rule: 'measure', sel: sel(el), msg: `${long} of ${lens.length} lines past 100 characters (longest ${Math.max(...lens)})` })
    }
  }
  return out
}

// Tools reveal their results only after answers are given. Click through up to 14 steps (preferring Continue,
// Next, Start, Calculate and similar), measuring after each, so text in results panels is covered too. Best effort:
// a tool that needs typed input may stop early, so this lowers the blind spot without claiming full coverage.
const DEEP = !args.includes('--no-deep')
const TOOL_PAGE = /^\/(tools\/|hotel-recommender|golf-day-builder|golf-trip-calculator|course-selector)/
async function walkTool(page) {
  const out = []
  let steps = 0
  for (let step = 0; step < 14; step++) {
    const clicked = await page.evaluate(() => {
      const main = document.querySelector('main') || document.body
      const skip = /back|restart|reset|previous|menu|close|language|whatsapp|cookie|accept|decline|share|print|save|email|download|enquir|subscribe|submit|send/i
      const cands = [...main.querySelectorAll('button, [role=button], summary')].filter((b) => {
        if (b.closest('header,nav,footer,[role=dialog]') || b.disabled || b.getAttribute('aria-disabled') === 'true' || b.dataset.deepClicked) return false
        const r = b.getBoundingClientRect()
        const label = (b.textContent || '').trim()
        return r.width > 2 && r.height > 2 && label && !skip.test(label) && !skip.test(b.getAttribute('aria-label') || '')
      })
      const pick = cands.find((b) => /continue|next|start|show|see|calculate|check|results|build|find|compare/i.test(b.textContent)) || cands[0]
      if (!pick) return false
      pick.dataset.deepClicked = '1'
      pick.scrollIntoView({ block: 'center' })
      pick.click()
      return true
    })
    if (!clicked) break
    await page.waitForTimeout(450)
    out.push(...(await page.evaluate(measure)))
    steps += 1
  }
  if (args.includes('--verbose')) console.error(`  ${page.url()}: clicked through ${steps} step(s)`)
  return out
}

const browser = await chromium.launch()
const found = []
for (const w of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
  const page = await ctx.newPage()
  for (const p of PAGES) {
    try {
      await page.goto(BASE + p, { waitUntil: 'networkidle', timeout: 60000 })
      await page.waitForTimeout(500)
      for (const it of await page.evaluate(measure)) found.push({ page: p, width: w, ...it })
      if (DEEP && TOOL_PAGE.test(p)) {
        for (const it of await walkTool(page)) found.push({ page: p, width: w, ...it })
      }
    } catch (e) {
      found.push({ page: p, width: w, rule: 'error', sel: '', msg: String(e.message || e).split('\n')[0] })
    }
  }
  await ctx.close()
}
await browser.close()

// one entry per rule + page + selector (widths merged), so the baseline is stable
const byKey = new Map()
for (const f of found) {
  const key = `${f.rule}|${f.page}|${f.sel}`
  if (!byKey.has(key)) byKey.set(key, { ...f, widths: new Set() })
  byKey.get(key).widths.add(f.width)
}
const keys = [...byKey.keys()].sort()
const errors = [...byKey.values()].filter((v) => v.rule === 'error')

if (UPDATE) {
  fs.writeFileSync(baselinePath, JSON.stringify({ note: 'Known text-quality cases, frozen. Fix, do not add. Regenerate with --update after a fix.', keys: keys.filter((k) => !k.startsWith('error|')) }, null, 1) + '\n')
  console.log(`Baseline written: ${keys.length} known case(s).`)
  process.exit(0)
}

const baseline = new Set(fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath, 'utf8')).keys : [])
const fresh = keys.filter((k) => !baseline.has(k))
const fixed = [...baseline].filter((k) => !byKey.has(k))
const show = REPORT ? keys : fresh
for (const k of show) {
  const v = byKey.get(k)
  console.log(`${v.rule} | ${v.page} | ${v.sel}\n    @${[...v.widths].join('/')}: ${v.msg}`)
}
console.log(`\nText quality: ${PAGES.length} page(s) x ${WIDTHS.length} width(s): ${keys.length} case(s) found, ${baseline.size} in baseline, ${fresh.length} new.`)
if (fixed.length && !REPORT) console.log(`${fixed.length} baseline case(s) no longer occur: run with --update to lock the improvement in.`)
if (!REPORT && (fresh.length || errors.length)) process.exit(1)
