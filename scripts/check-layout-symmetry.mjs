/**
 * check-layout-symmetry.mjs
 *
 * Measures the rendered site for uneven left/right gaps, the "padding is not the same on both sides"
 * bug (Andy, 29 Oct 2026: Course Comparison filter bar and head-to-head table). A rule in prose does
 * not hold, so this loads real pages in Chromium at phone, tablet and laptop widths and fails on:
 *
 *   overflow  the page scrolls sideways (content wider than the screen)
 *   inset     a panel / card / bar whose contents sit closer to one side than the other
 *   row       a row of equal-looking cards or controls that does not fill its container evenly
 *   orphan    a wrapped grid whose last row is left-aligned instead of centred or filling the row
 *   section   a block whose left and right margins to the screen differ
 *
 * Run:  node scripts/check-layout-symmetry.mjs --base http://127.0.0.1:3001   (against a production build)
 *       node scripts/check-layout-symmetry.mjs --base https://www.mrmallorcagolf.com --report   (list everything, no failure)
 *       --pages /tools/course-comparison,/guides   limit to some paths      --widths 375,1280
 * Known, reviewed exceptions live in scripts/layout-symmetry-allowlist.json (selector + type + reason).
 * Fix the layout; only allowlist something that is deliberately one-sided, with the reason.
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
const WIDTHS = arg('--widths', '375,768,1280').split(',').map(Number)
const ONLY = arg('--pages', '')
const allowPath = path.join(root, 'scripts', 'layout-symmetry-allowlist.json')
const ALLOW = fs.existsSync(allowPath) ? JSON.parse(fs.readFileSync(allowPath, 'utf8')) : []

const PAGES = ONLY ? ONLY.split(',') : await listPages()

async function listPages() {
  // every English page in the sitemap, plus one page per other language for the main surfaces
  const res = await fetch(BASE + '/sitemap.xml')
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
  const en = urls.filter((u) => !/^\/(de|es|fr|nl|sv|zh)(\/|$)/.test(u))
  const other = urls.filter((u) => /^\/(de|es|fr|nl|sv|zh)\/(tools\/[a-z-]+|play-with-a-pro|plan-your-trip|contact)?$/.test(u) || /^\/(de|zh)$/.test(u))
  return [...new Set([...en, ...other])]
}

function measure(minInset) {
  const W = window.innerWidth
  const out = []
  const vis = (el) => {
    const r = el.getBoundingClientRect()
    if (r.width < 1 || r.height < 1) return false
    const s = getComputedStyle(el)
    return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0' && s.position !== 'fixed'
  }
  const sel = (el) => {
    const parts = []
    for (let e = el; e && e.nodeType === 1 && parts.length < 3; e = e.parentElement) {
      let p = e.tagName.toLowerCase()
      if (e.id) p += '#' + e.id
      else if (typeof e.className === 'string' && e.className.trim()) p += '.' + e.className.trim().split(/\s+/).filter((c) => !/^jsx-/.test(c))[0]
      parts.unshift(p)
    }
    return parts.join(' > ')
  }
  const add = (type, el, msg) => out.push({ type, sel: sel(el), msg })

  if (document.documentElement.scrollWidth > W + 1) {
    // find the widest offender
    let worst = null
    for (const el of document.body.querySelectorAll('*')) {
      if (!vis(el)) continue
      const r = el.getBoundingClientRect()
      if (r.right > W + 1 && (!worst || r.right > worst.r)) {
        let scroller = false
        for (let p = el.parentElement; p; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === 'auto' || o === 'scroll' || o === 'hidden' || o === 'clip') { scroller = true; break } }
        if (!scroller) worst = { el, r: r.right }
      }
    }
    add('overflow', worst ? worst.el : document.body, `page is ${document.documentElement.scrollWidth}px wide on a ${W}px screen`)
  }

  const isBox = (el) => {
    const s = getComputedStyle(el)
    const bg = s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent'
    const border = parseFloat(s.borderLeftWidth) > 0 || parseFloat(s.borderRightWidth) > 0
    return bg || border || (s.boxShadow && s.boxShadow !== 'none')
  }
  const scrolls = (el) => { const o = getComputedStyle(el).overflowX; return o === 'auto' || o === 'scroll' }

  for (const el of document.body.querySelectorAll('div,section,article,aside,form,ul,ol,table,header,footer,nav,main,fieldset,details,li,dl')) {
    if (!vis(el)) continue
    const r = el.getBoundingClientRect()
    if (r.width < 240 || r.height < 40) continue
    if (scrolls(el)) continue
    const st = getComputedStyle(el)

    // inset: contents of a visible box sit nearer one side
    if (isBox(el) && r.width < W - 2) {
      let minL = Infinity, maxR = -Infinity, n = 0, escapes = false
      // only visual parts count (images, controls, cards, bars); plain left-aligned text columns are not unevenness
      const visual = (d) => /^(IMG|SVG|PICTURE|VIDEO|BUTTON|INPUT|SELECT|TEXTAREA|IFRAME|CANVAS)$/.test(d.tagName) || isBox(d)
      for (const d of el.querySelectorAll('*')) {
        if (!vis(d) || !visual(d)) continue
        const ds = getComputedStyle(d)
        if (ds.position === 'absolute') continue
        const dr = d.getBoundingClientRect()
        if (dr.width < 1) continue
        if (dr.left < r.left - 1 || dr.right > r.right + 1) { escapes = true; break }
        minL = Math.min(minL, dr.left); maxR = Math.max(maxR, dr.right); n++
      }
      if (!escapes && n >= 2 && maxR - minL >= r.width * 0.55) {
        const l = Math.round(minL - r.left), rr = Math.round(r.right - maxR)
        if (Math.abs(l - rr) > minInset) add('inset', el, `contents are ${l}px from the left edge and ${rr}px from the right`)
      }
    }

    // row / orphan: equal-looking cards or controls in a flex/grid container
    if ((st.display === 'flex' || st.display === 'grid' || st.display === 'inline-flex') && st.flexDirection !== 'column') {
      const kids = [...el.children].filter((c) => vis(c) && getComputedStyle(c).position !== 'absolute')
      if (kids.length >= 3) {
        const cs = getComputedStyle(el)
        const cl = r.left + parseFloat(cs.paddingLeft) + parseFloat(cs.borderLeftWidth)
        const cr = r.right - parseFloat(cs.paddingRight) - parseFloat(cs.borderRightWidth)
        const rows = []
        for (const k of kids) {
          const kr = k.getBoundingClientRect()
          const row = rows.find((x) => Math.abs(x.top - kr.top) < 6)
          if (row) row.items.push(kr); else rows.push({ top: kr.top, items: [kr] })
        }
        const widths = kids.map((k) => k.getBoundingClientRect().width)
        const maxW = Math.max(...widths), minW = Math.min(...widths)
        const equalish = minW >= 110 && (maxW - minW) / maxW < 0.12
        if (equalish) {
          rows.forEach((row, i) => {
            const L = Math.round(Math.min(...row.items.map((x) => x.left)) - cl)
            const R = Math.round(cr - Math.max(...row.items.map((x) => x.right)))
            const justified = /center|space-between|space-around|space-evenly/.test(cs.justifyContent)
            if (row.items.length >= 2 && Math.abs(L - R) > 24 && !(justified && Math.abs(L - R) <= 24)) {
              const last = i === rows.length - 1 && rows.length > 1 && row.items.length < rows[0].items.length
              add(last ? 'orphan' : 'row', el, `${last ? 'last row' : 'row ' + (i + 1)} of ${rows.length}: ${row.items.length} equal items, ${L}px left gap and ${R}px right gap`)
            }
          })
        }
      }
    }
  }
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
      await page.waitForTimeout(400)
      // open the first tab / accordion-free states are not clicked: this checks what a visitor sees on arrival
      const items = await page.evaluate(measure, 16)
      for (const it of items) found.push({ width: w, page: p, ...it })
    } catch (e) {
      found.push({ width: w, page: p, type: 'error', sel: '', msg: String(e.message || e).split('\n')[0] })
    }
  }
  await ctx.close()
}
await browser.close()

const allowed = (f) => ALLOW.some((a) => (!a.type || a.type === f.type) && f.sel.includes(a.sel) && (!a.page || f.page.startsWith(a.page)))
const real = found.filter((f) => !allowed(f))
const seen = new Set()
const unique = real.filter((f) => { const k = `${f.type}|${f.sel}|${f.msg.replace(/\d+px/g, 'Npx')}`; if (seen.has(k + f.page + f.width)) return false; seen.add(k + f.page + f.width); return true })

const bySel = new Map()
for (const f of unique) {
  const k = `${f.type} | ${f.sel}`
  if (!bySel.has(k)) bySel.set(k, { f, pages: new Set(), widths: new Set() })
  bySel.get(k).pages.add(f.page); bySel.get(k).widths.add(f.width)
}
for (const [k, v] of [...bySel.entries()].sort()) {
  console.log(`${k}\n    e.g. ${v.f.page} @${v.f.width}: ${v.f.msg}   (${v.pages.size} page(s), widths ${[...v.widths].join('/')})`)
}
console.log(`\nLayout symmetry: ${PAGES.length} page(s) x ${WIDTHS.length} width(s): ${bySel.size} distinct issue(s), ${unique.length} instance(s).`)
if (!REPORT && unique.length) process.exit(1)
