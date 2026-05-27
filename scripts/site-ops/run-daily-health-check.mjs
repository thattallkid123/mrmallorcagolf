import fs from 'node:fs'
import path from 'node:path'

const SITE_ORIGIN = 'https://www.mrmallorcagolf.com'
const ROUTES = ['/', '/golf-courses', '/guides', '/contact', '/itinerary']
const OUTPUT_DIR = path.resolve('outputs', 'site-ops', 'daily')

function nowStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-')
}

function shortDate() {
  return new Date().toISOString().slice(0, 10)
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, { redirect: 'manual', ...options })
  const text = await response.text()
  return { response, text }
}

function extractCanonical(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)
  if (!match) return null
  const href = match[0].match(/href=["']([^"']+)["']/i)
  return href?.[1] || null
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]+)<\/title>/i)
  return match?.[1]?.trim() || null
}

function extractMetaDescription(html) {
  const match = html.match(/<meta[^>]+name=["']description["'][^>]*>/i)
  if (!match) return null
  const content = match[0].match(/content=["']([^"']+)["']/i)
  return content?.[1] || null
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const checks = []

  const nonWww = await fetch(`${'https://mrmallorcagolf.com'}/`, { method: 'GET' })
  checks.push({
    id: 'non_www_redirect',
    ok: [301, 302, 307, 308].includes(nonWww.status) && String(nonWww.headers.get('location') || '').includes('www.mrmallorcagolf.com'),
    status: nonWww.status,
    location: nonWww.headers.get('location') || '',
  })

  const robots = await fetch(`${SITE_ORIGIN}/robots.txt`)
  const robotsTxt = await robots.text()
  checks.push({
    id: 'robots_txt',
    ok: robots.ok && robotsTxt.includes('Sitemap:'),
    status: robots.status,
  })

  const sitemap = await fetch(`${SITE_ORIGIN}/sitemap.xml`)
  const sitemapTxt = await sitemap.text()
  checks.push({
    id: 'sitemap_xml',
    ok: sitemap.ok && sitemapTxt.includes('<urlset'),
    status: sitemap.status,
  })

  for (const route of ROUTES) {
    const { response, text } = await fetchText(`${SITE_ORIGIN}${route}`)
    const canonical = extractCanonical(text)
    const title = extractTitle(text)
    const description = extractMetaDescription(text)
    checks.push({
      id: `page_${route === '/' ? 'home' : route.slice(1).replaceAll('/', '_')}`,
      route,
      ok: response.ok && canonical?.startsWith(SITE_ORIGIN) && Boolean(title) && Boolean(description),
      status: response.status,
      canonical,
      has_title: Boolean(title),
      has_description: Boolean(description),
    })
  }

  const failed = checks.filter((check) => !check.ok)
  const summary = {
    ran_at: new Date().toISOString(),
    total_checks: checks.length,
    failed_checks: failed.length,
    ok: failed.length === 0,
    checks,
  }

  const datedJson = path.join(OUTPUT_DIR, `daily-health-${shortDate()}.json`)
  const latestJson = path.join(OUTPUT_DIR, 'daily-health-latest.json')
  fs.writeFileSync(datedJson, JSON.stringify(summary, null, 2))
  fs.writeFileSync(latestJson, JSON.stringify(summary, null, 2))

  const lines = [
    '# Daily Health Check',
    `Ran: ${summary.ran_at}`,
    `Status: ${summary.ok ? 'OK' : 'ISSUES FOUND'}`,
    `Checks: ${summary.total_checks}`,
    `Failed: ${summary.failed_checks}`,
    '',
  ]

  if (failed.length > 0) {
    lines.push('## Failures')
    for (const item of failed) {
      lines.push(`- ${item.id} (${item.route || ''}) status=${item.status || 'n/a'}`)
    }
  } else {
    lines.push('No failures detected.')
  }

  const datedMd = path.join(OUTPUT_DIR, `daily-health-${nowStamp()}.md`)
  const latestMd = path.join(OUTPUT_DIR, 'daily-health-latest.md')
  fs.writeFileSync(datedMd, `${lines.join('\n')}\n`)
  fs.writeFileSync(latestMd, `${lines.join('\n')}\n`)

  console.log(`Saved daily health JSON: ${datedJson}`)
  console.log(`Saved daily health Markdown: ${datedMd}`)
}

main().catch((error) => {
  console.error(`Daily health check failed: ${error.message}`)
  process.exit(1)
})
