import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const SITE_ORIGIN = 'https://www.mrmallorcagolf.com'
const ROUTES = ['/', '/itinerary', '/guides', '/guides/son-gual-review', '/golf-courses', '/contact']
const OUTPUT_DIR = path.resolve('outputs', 'lighthouse-live')
const RUNS_PER_ROUTE = Number(process.env.LH_RUNS || 2)
const TMP_ROOT = path.resolve('outputs', '.lh-temp')

function runLighthouseOnce(url, mode, runIndex = 0) {
  const slug = url.replace(SITE_ORIGIN, '').replace(/\//g, '_') || 'home'
  const fileName = `${mode}-${slug}-run${runIndex + 1}.json`
  const outputPath = path.join(OUTPUT_DIR, fileName)
  const runTmpDir = path.join(TMP_ROOT, `${mode}-${slug}-run${runIndex + 1}`)
  fs.mkdirSync(runTmpDir, { recursive: true })

  const args = [
    'lighthouse',
    url,
    '--quiet',
    `--chrome-flags=--headless=new --user-data-dir="${runTmpDir}"`,
    '--only-categories=performance,accessibility,best-practices,seo',
    '--output=json',
    `--output-path=${outputPath}`,
  ]

  if (mode === 'desktop') {
    args.push('--preset=desktop')
  } else {
    args.push('--form-factor=mobile')
  }

  const result = spawnSync('npx', args, { stdio: 'inherit', shell: true, timeout: 180000 })
  const reportExists = fs.existsSync(outputPath)
  if ((result.status !== 0 || result.error) && !reportExists) {
    throw new Error(`Lighthouse failed for ${url} (${mode})`)
  }

  const report = JSON.parse(fs.readFileSync(outputPath, 'utf8'))
  return {
    performance: Math.round((report.categories.performance?.score || 0) * 100),
    accessibility: Math.round((report.categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((report.categories['best-practices']?.score || 0) * 100),
    seo: Math.round((report.categories.seo?.score || 0) * 100),
    lcpMs: Math.round(report.audits['largest-contentful-paint']?.numericValue || 0),
    cls: report.audits['cumulative-layout-shift']?.displayValue || 'n/a',
    tbtMs: Math.round(report.audits['total-blocking-time']?.numericValue || 0),
  }
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
    : sorted[mid]
}

function runLighthouse(url, mode) {
  const runs = []
  for (let i = 0; i < RUNS_PER_ROUTE; i += 1) {
    runs.push(runLighthouseOnce(url, mode, i))
  }

  return {
    url,
    mode,
    runs: RUNS_PER_ROUTE,
    performance: median(runs.map((r) => r.performance)),
    accessibility: median(runs.map((r) => r.accessibility)),
    bestPractices: median(runs.map((r) => r.bestPractices)),
    seo: median(runs.map((r) => r.seo)),
    lcpMs: median(runs.map((r) => r.lcpMs)),
    cls: runs[Math.floor(runs.length / 2)]?.cls || 'n/a',
    tbtMs: median(runs.map((r) => r.tbtMs)),
  }
}

function toMarkdown(rows) {
  const header = '| Route | Mode | Perf | A11y | Best | SEO | LCP(ms) | CLS | TBT(ms) |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|'
  const body = rows
    .map((row) => `| ${row.url.replace(SITE_ORIGIN, '') || '/'} | ${row.mode} | ${row.performance} | ${row.accessibility} | ${row.bestPractices} | ${row.seo} | ${row.lcpMs} | ${row.cls} | ${row.tbtMs} |`)
    .join('\n')
  return `${header}\n${body}\n`
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true })
fs.mkdirSync(TMP_ROOT, { recursive: true })

const rows = []
for (const route of ROUTES) {
  const url = `${SITE_ORIGIN}${route}`
  rows.push(runLighthouse(url, 'mobile'))
  rows.push(runLighthouse(url, 'desktop'))
}

const stamp = new Date().toISOString().slice(0, 10)
const jsonOut = path.join(OUTPUT_DIR, `scorecard-${stamp}.json`)
const mdOut = path.join(OUTPUT_DIR, `scorecard-${stamp}.md`)

fs.writeFileSync(jsonOut, JSON.stringify(rows, null, 2))
fs.writeFileSync(mdOut, toMarkdown(rows))

console.log(`Saved scorecard JSON: ${jsonOut}`)
console.log(`Saved scorecard Markdown: ${mdOut}`)
