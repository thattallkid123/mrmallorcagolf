import { SITE_ORIGIN } from '../../../../lib/site.js'

// Tracked guides for IndexNow submission (kept in sync by sync-discovery.mjs)
const INDEXNOW_GUIDES = [
  '/guides/alcanada-review',
  '/guides/golf-andratx-review',
  '/guides/golf-cost-mallorca',
  '/guides/golf-trip-planning-mallorca',
  '/guides/is-mallorca-good-for-golf',
  '/guides/on-course-coaching-mallorca',
  '/guides/best-golf-courses-mallorca',
  '/guides/best-time-play-golf-mallorca',
  '/guides/golf-club-hire-mallorca',
  '/guides/mallorca-course-map',
  '/guides/santa-ponsa-1-review',
  '/guides/son-antem-west-review',
  '/guides/son-gual-review',
  '/guides/son-muntaner-review',
  '/guides/son-termes-review',
  '/guides/t-golf-calvia-review',
  '/guides/5-day-mallorca-golf-itinerary',
]

const MAX_URLS_PER_REQUEST = 50

function isAuthorized(request) {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) return false
  const authHeader = request.headers.get('authorization') || ''
  return authHeader === `Bearer ${cronSecret}`
}

async function submitToIndexNow(urls) {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return Response.json({ error: 'IndexNow key not configured' }, { status: 500 })
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.mrmallorcagolf.com',
        key,
        keyLocation: `https://www.mrmallorcagolf.com/${key}.txt`,
        urlList: urls,
      }),
    })

    if (!response.ok) {
      throw new Error(`IndexNow API error: ${response.status}`)
    }

    return Response.json({ success: true, urlCount: urls.length })
  } catch (error) {
    console.error('IndexNow ping failed:', error)
    return Response.json({ error: 'IndexNow submission failed' }, { status: 500 })
  }
}

// Vercel's scheduled cron sends GET with the Authorization header it manages
// itself (matches CRON_SECRET). It re-submits the full tracked guide list.
export async function GET(request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return submitToIndexNow(INDEXNOW_GUIDES.map((path) => `${SITE_ORIGIN}${path}`))
}

// Manual/ad-hoc submissions (scripts/indexnow-ping.mjs) POST a specific URL
// list and must present the same bearer secret.
export async function POST(request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { urls } = await request.json()
    if (!Array.isArray(urls) || urls.length === 0) {
      return Response.json({ error: 'No URLs provided' }, { status: 400 })
    }

    if (urls.length > MAX_URLS_PER_REQUEST) {
      return Response.json({ error: `Too many URLs (max ${MAX_URLS_PER_REQUEST})` }, { status: 400 })
    }

    const invalid = urls.some((url) => typeof url !== 'string' || !url.startsWith(SITE_ORIGIN))
    if (invalid) {
      return Response.json({ error: `All URLs must start with ${SITE_ORIGIN}` }, { status: 400 })
    }

    return submitToIndexNow(urls)
  } catch (error) {
    console.error('IndexNow request parsing failed:', error)
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}
