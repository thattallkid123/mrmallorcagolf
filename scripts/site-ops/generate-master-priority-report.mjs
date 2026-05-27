import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'outputs', 'site-ops')

function latestFile(dir, prefix, ext) {
  if (!fs.existsSync(dir)) return null
  const files = fs.readdirSync(dir).filter((name) => name.startsWith(prefix) && name.endsWith(ext))
  if (files.length === 0) return null
  files.sort()
  return path.join(dir, files[files.length - 1])
}

function loadJson(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function loadCsv(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return []
  const lines = fs.readFileSync(filePath, 'utf8').trim().split(/\r?\n/)
  if (lines.length < 2) return []
  const parseLine = (line) => {
    const values = []
    let current = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i]
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"'
          i += 1
        } else {
          inQuotes = !inQuotes
        }
      } else if (ch === ',' && !inQuotes) {
        values.push(current)
        current = ''
      } else {
        current += ch
      }
    }
    values.push(current)
    return values
  }

  const headers = parseLine(lines[0])
  return lines.slice(1).map((line) => {
    const values = parseLine(line)
    return Object.fromEntries(headers.map((header, idx) => [header, values[idx] ?? '']))
  })
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function buildPriorities() {
  const priorities = []

  const daily = loadJson(path.join(OUT_DIR, 'daily', 'daily-health-latest.json'))
  if (daily && daily.failed_checks > 0) {
    priorities.push({
      priority: 'P0',
      area: 'Technical Health',
      issue: `${daily.failed_checks} failed daily health checks`,
      action: 'Fix robots/sitemap/canonical/status failures immediately and rerun daily health script.',
      source: 'outputs/site-ops/daily/daily-health-latest.json',
    })
  }

  const indexingRows = loadCsv(latestFile(path.join(ROOT, 'search_console', 'reports'), 'url-indexing-', '.csv'))
  const indexingProblems = indexingRows.filter((row) => (row.action || '').trim() !== 'OK')
  for (const row of indexingProblems.slice(0, 5)) {
    priorities.push({
      priority: 'P0',
      area: 'Indexing',
      issue: row.url || 'URL indexing issue',
      action: row.action || 'Review in Search Console and fix the reported state.',
      source: 'search_console/reports/url-indexing-*.csv',
    })
  }

  const scRows = loadCsv(latestFile(path.join(ROOT, 'search_console', 'reports'), 'search-console-', '.csv'))
  const quickWins = scRows
    .map((row) => ({
      page: row.page || '',
      query: row.query || '',
      impressions: toNumber(row.impressions),
      ctr: toNumber(row.ctr),
      position: toNumber(row.position, 999),
    }))
    .filter((row) => row.impressions >= 20 && row.ctr < 0.02 && row.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)

  for (const row of quickWins.slice(0, 8)) {
    priorities.push({
      priority: row.position <= 10 ? 'P0' : 'P1',
      area: 'Search CTR',
      issue: `${row.page} for "${row.query}" (impr ${row.impressions}, pos ${row.position.toFixed(1)}, ctr ${(row.ctr * 100).toFixed(1)}%)`,
      action: 'Improve title/meta intro and add internal links from relevant hub pages.',
      source: 'search_console/reports/search-console-*.csv',
    })
  }

  const lighthouse = loadJson(path.join(ROOT, 'outputs', 'lighthouse-live', `scorecard-${new Date().toISOString().slice(0, 10)}.json`))
    || loadJson(latestFile(path.join(ROOT, 'outputs', 'lighthouse-live'), 'scorecard-', '.json'))

  if (Array.isArray(lighthouse)) {
    const mobileRows = lighthouse.filter((row) => row.mode === 'mobile').sort((a, b) => a.performance - b.performance)
    for (const row of mobileRows.slice(0, 6)) {
      priorities.push({
        priority: row.performance < 90 ? 'P0' : row.performance < 95 ? 'P1' : 'P2',
        area: 'Performance',
        issue: `${row.url} mobile performance ${row.performance} (LCP ${row.lcpMs}ms, TBT ${row.tbtMs}ms)`,
        action: 'Reduce route JS/CSS, optimize hero media path, and re-check Lighthouse.',
        source: 'outputs/lighthouse-live/scorecard-*.json',
      })
    }
  }

  const monthly = loadJson(path.join(OUT_DIR, 'monthly', 'monthly-technical-audit-latest.json'))
  if (monthly?.summary?.failed_urls > 0) {
    priorities.push({
      priority: monthly.summary.failed_urls > 20 ? 'P0' : 'P1',
      area: 'Technical SEO',
      issue: `${monthly.summary.failed_urls} URLs failed monthly technical audit checks`,
      action: 'Fix canonical/title/description/h1 gaps from monthly audit report.',
      source: 'outputs/site-ops/monthly/monthly-technical-audit-latest.json',
    })
  }

  return priorities
}

function writeReport(priorities) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const grouped = { P0: [], P1: [], P2: [] }
  for (const item of priorities) {
    if (!grouped[item.priority]) grouped[item.priority] = []
    grouped[item.priority].push(item)
  }

  const lines = [
    '# Master SEO/PERF Priority Report',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Total items: ${priorities.length}`,
    '',
  ]

  for (const priority of ['P0', 'P1', 'P2']) {
    lines.push(`## ${priority}`)
    if (grouped[priority].length === 0) {
      lines.push('No items.')
      lines.push('')
      continue
    }
    for (const item of grouped[priority]) {
      lines.push(`- [${item.area}] ${item.issue}`)
      lines.push(`  Action: ${item.action}`)
      lines.push(`  Source: ${item.source}`)
    }
    lines.push('')
  }

  const dated = path.join(OUT_DIR, `master-priority-${stamp}.md`)
  const latest = path.join(OUT_DIR, 'master-priority-latest.md')
  fs.writeFileSync(dated, `${lines.join('\n')}\n`)
  fs.writeFileSync(latest, `${lines.join('\n')}\n`)
  console.log(`Saved master priority report: ${dated}`)
}

const priorities = buildPriorities()
writeReport(priorities)
