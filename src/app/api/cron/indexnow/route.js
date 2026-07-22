// Tracked guides for IndexNow submission (kept in sync by sync-discovery.mjs)
const INDEXNOW_GUIDES = [
  '/guides/alcanada-review',
  '/guides/golf-andratx-review',
  '/guides/golf-cost-mallorca',
  '/guides/golf-trip-planning-mallorca',
  '/guides/is-mallorca-good-for-golf',
  '/guides/on-course-coaching-mallorca',
  '/guides/play-with-a-pro-explained',
  '/guides/best-golf-courses-mallorca',
  '/guides/best-time-play-golf-mallorca',
  '/guides/golf-club-hire-mallorca',
  '/guides/santa-ponsa-1-review',
  '/guides/son-antem-west-review',
  '/guides/son-gual-review',
  '/guides/son-muntaner-review',
  '/guides/son-termes-review',
  '/guides/t-golf-calvia-review',
]

export async function POST(request) {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return Response.json({ error: 'IndexNow key not configured' }, { status: 500 })
  }

  try {
    const { urls } = await request.json()
    if (!Array.isArray(urls) || urls.length === 0) {
      return Response.json({ error: 'No URLs provided' }, { status: 400 })
    }

    const response = await fetch('https://api.indexnow.microsoft.com/indexnow', {
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
      throw new Error(`Bing IndexNow API error: ${response.status}`)
    }

    return Response.json({ success: true, urlCount: urls.length })
  } catch (error) {
    console.error('IndexNow ping failed:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
