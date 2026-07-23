import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

// Tracked guides for IndexNow submission (kept in sync by sync-discovery.mjs)
const INDEXNOW_GUIDES = [
  'https://www.mrmallorcagolf.com/guides/alcanada-review',
  'https://www.mrmallorcagolf.com/guides/golf-andratx-review',
  'https://www.mrmallorcagolf.com/guides/golf-cost-mallorca',
  'https://www.mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
  'https://www.mrmallorcagolf.com/guides/is-mallorca-good-for-golf',
  'https://www.mrmallorcagolf.com/guides/on-course-coaching-mallorca',
  'https://www.mrmallorcagolf.com/guides/play-with-a-pro-explained',
  'https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca',
  'https://www.mrmallorcagolf.com/guides/best-time-play-golf-mallorca',
  'https://www.mrmallorcagolf.com/guides/golf-club-hire-mallorca',
  'https://www.mrmallorcagolf.com/guides/mallorca-course-map',
  'https://www.mrmallorcagolf.com/guides/santa-ponsa-1-review',
  'https://www.mrmallorcagolf.com/guides/son-antem-west-review',
  'https://www.mrmallorcagolf.com/guides/son-gual-review',
  'https://www.mrmallorcagolf.com/guides/son-muntaner-review',
  'https://www.mrmallorcagolf.com/guides/son-termes-review',
  'https://www.mrmallorcagolf.com/guides/t-golf-calvia-review',
]

// Get guide slugs that changed since last push
const getChangedGuides = () => {
  try {
    const output = execSync('git diff HEAD~1 HEAD src/lib/guide-post-content.js src/lib/guide-article-content.js', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
    })

    const slugs = new Set()
    const matches = output.matchAll(/'([a-z0-9-]+)':\s*{/g)
    for (const match of matches) {
      slugs.add(match[1])
    }

    return Array.from(slugs).sort()
  } catch {
    return []
  }
}

// Main
const args = process.argv.slice(2)
const baseUrl = 'https://www.mrmallorcagolf.com'
const endpoint = `${baseUrl}/api/cron/indexnow`

let urlsToSubmit = []

if (args.length > 0) {
  // Manual: use provided slugs
  for (const arg of args) {
    urlsToSubmit.push(arg.startsWith('http') ? arg : `${baseUrl}/${arg}`)
  }
} else {
  // Auto: detect changed guides since last push
  const changed = getChangedGuides()
  if (changed.length > 0) {
    urlsToSubmit = changed.map(slug => `${baseUrl}/guides/${slug}`)
    console.log(`📡 Detected ${changed.length} changed guide(s)`)
  } else {
    console.log('No guide changes detected since last commit.')
    console.log('Usage: npm run indexnow -- guides/new-guide guides/another-guide')
    process.exit(0)
  }
}

if (urlsToSubmit.length === 0) {
  console.log('No URLs to submit.')
  process.exit(0)
}

console.log(`🔔 Pinging Bing IndexNow for ${urlsToSubmit.length} URL(s)...`)

try {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ urls: urlsToSubmit }),
  })

  const result = await response.json()
  if (response.ok) {
    console.log(`✅ Success: ${result.urlCount} URL(s) submitted to Bing IndexNow`)
    process.exit(0)
  } else {
    console.error(`❌ Error: ${result.error}`)
    process.exit(1)
  }
} catch (error) {
  console.error(`❌ Request failed: ${error.message}`)
  process.exit(1)
}
