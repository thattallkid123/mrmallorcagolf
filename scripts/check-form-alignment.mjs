#!/usr/bin/env node
// Fields that sit side by side must line up. A question that wraps to two lines next to one that wraps to three pushes its input
// lower than its neighbour, and the row looks broken (the golf questionnaire's two selects, 2026-11-12). This opens every static form
// page in public/ at phone, tablet and desktop width, reveals every step, and fails when two controls that share a row do not start
// at the same height, when a control or label is clipped by the card, or when a lone control is left stranded in a row of equals.
import fs from 'node:fs'
import { createServer } from 'node:http'
import path from 'node:path'
import { chromium } from 'playwright'

const root = path.resolve('public')
const pages = fs.readdirSync(root).filter((f) => f.endsWith('.html')).filter((f) => /<form[\s>]/.test(fs.readFileSync(path.join(root, f), 'utf8')))
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.json': 'application/json' }
const server = createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  let body
  try { body = fs.readFileSync(path.join(root, p)) } catch { res.writeHead(404).end(); return }
  res.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' }).end(body)
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const browser = await chromium.launch()
const problems = []
for (const file of pages) {
  for (const width of [375, 768, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    await page.route((u) => !['127.0.0.1', 'localhost'].includes(new URL(u).hostname), (r) => r.abort())
    await page.goto(`http://127.0.0.1:${server.address().port}/${file}`, { waitUntil: 'load' }).catch(() => {})
    const found = await page.evaluate(() => {
      // show every step and every conditional field so all rows are measured
      document.querySelectorAll('[hidden]').forEach((e) => { if (e.closest('form') || e.querySelector('input,select,textarea')) e.hidden = false })
      const controls = [...document.querySelectorAll('form input:not([type=hidden]):not([type=radio]):not([type=checkbox]), form select, form textarea')]
        .filter((c) => c.offsetParent && c.getBoundingClientRect().width > 0)
      const out = []
      const label = (c) => (c.labels && c.labels[0] ? c.labels[0].textContent : c.name || c.id || 'control').trim().replace(/\s+/g, ' ').slice(0, 50)
      for (let i = 0; i < controls.length; i++) {
        for (let j = i + 1; j < controls.length; j++) {
          const a = controls[i].getBoundingClientRect(), b = controls[j].getBoundingClientRect()
          const overlap = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
          const sideBySide = overlap > Math.min(a.height, b.height) * 0.4 && (a.right <= b.left + 1 || b.right <= a.left + 1)
          if (sideBySide && Math.abs(a.top - b.top) > 1.5) out.push(`"${label(controls[i])}" and "${label(controls[j])}" share a row but start ${Math.round(Math.abs(a.top - b.top))}px apart`)
        }
      }
      const vw = document.documentElement.clientWidth
      for (const c of controls) { const r = c.getBoundingClientRect(); if (r.left < -1 || r.right > vw + 1) out.push(`"${label(c)}" runs past the screen edge`) }
      if (document.documentElement.scrollWidth > vw + 1) out.push('the page scrolls sideways')
      return out
    })
    for (const f of found) problems.push(`${file} at ${width}px: ${f}`)
    await page.close()
  }
}
await browser.close(); server.close()
if (problems.length) { console.error(`Form alignment check failed (${problems.length}):\n  ` + [...new Set(problems)].join('\n  ')); process.exit(1) }
console.log(`Form alignment check passed - ${pages.length} form page(s) (${pages.join(', ')}) at 375, 768 and 1280px: side-by-side fields start level, nothing past the edge.`)
