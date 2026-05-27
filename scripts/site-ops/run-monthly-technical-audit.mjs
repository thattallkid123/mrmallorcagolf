import fs from 'node:fs'
import path from 'node:path'

const SITE_ORIGIN = 'https://www.mrmallorcagolf.com'
const OUTPUT_DIR = path.resolve('outputs', 'site-ops', 'monthly')

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, '-')
}

function extractTagCount(html, pattern) {
  const matches = html.match(pattern)
  return matches ? matches.length : 0
}

function extractCanonical(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)
  if (!match) return null
  const href = match[0].match(/href=["']([^"']+)["']/i)
  return href?.[1] || null
}

async function fetchSitemapUrls(limit = 150) {
  const response = await fetch(`${SITE_ORIGIN}/sitemap.xml`)
  if (!response.ok) throw new Error(`Sitemap fetch failed (${response.status})`)
  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  return urls.slice(0, limit)
}

async function auditUrl(url) {
  const response = await fetch(url, { redirect: 'follow' })
  const html = await response.text()
  const canonical = extractCanonical(html)
  const titleCount = extractTagCount(html, /<title>[\s\S]*?<\/title>/gi)
  const descriptionCount = extractTagCount(html, /<meta[^>]+name=["']description["'][^>]*>/gi)
  const h1Count = extractTagCount(html, /<h1[\s>]/gi)
  const schemaCount = extractTagCount(html, /<script[^>]+type=["']application\/ld\+json["'][^>]*>/gi)

  return {
    url,
    status: response.status,
    canonical,
    canonical_ok: Boolean(canonical?.startsWith(SITE_ORIGIN)),
    title_count: titleCount,
    description_count: descriptionCount,
    h1_count: h1Count,
    schema_count: schemaCount,
    ok: response.ok && titleCount >= 1 && descriptionCount >= 1 && h1Count >= 1 && Boolean(canonical?.startsWith(SITE_ORIGIN)),
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const urls = await fetchSitemapUrls()
  const rows = []

  for (const url of urls) {
    rows.push(await auditUrl(url))
  }

  const failures = rows.filter((row) => !row.ok)
  const summary = {
    ran_at: new Date().toISOString(),
    inspected_urls: rows.length,
    failed_urls: failures.length,
    ok: failures.length === 0,
  }

  const payload = { summary, failures, rows }
  const datedJson = path.join(OUTPUT_DIR, `monthly-technical-audit-${stamp()}.json`)
  const latestJson = path.join(OUTPUT_DIR, 'monthly-technical-audit-latest.json')
  fs.writeFileSync(datedJson, JSON.stringify(payload, null, 2))
  fs.writeFileSync(latestJson, JSON.stringify(payload, null, 2))

  const lines = [
    '# Monthly Technical Audit',
    `Ran: ${summary.ran_at}`,
    `Inspected URLs: ${summary.inspected_urls}`,
    `Failed URLs: ${summary.failed_urls}`,
    `Status: ${summary.ok ? 'OK' : 'ISSUES FOUND'}`,
    '',
    '## Failure Samples (first 25)',
  ]

  if (failures.length === 0) {
    lines.push('No failures found.')
  } else {
    for (const fail of failures.slice(0, 25)) {
      lines.push(`- ${fail.url}`)
      lines.push(`  status=${fail.status} canonical_ok=${fail.canonical_ok} title=${fail.title_count} description=${fail.description_count} h1=${fail.h1_count} schema=${fail.schema_count}`)
    }
  }

  const datedMd = path.join(OUTPUT_DIR, `monthly-technical-audit-${stamp()}.md`)
  const latestMd = path.join(OUTPUT_DIR, 'monthly-technical-audit-latest.md')
  fs.writeFileSync(datedMd, `${lines.join('\n')}\n`)
  fs.writeFileSync(latestMd, `${lines.join('\n')}\n`)

  console.log(`Saved monthly audit JSON: ${datedJson}`)
  console.log(`Saved monthly audit Markdown: ${datedMd}`)
}

main().catch((error) => {
  console.error(`Monthly technical audit failed: ${error.message}`)
  process.exit(1)
})
