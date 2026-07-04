import { SITE_ORIGIN } from '../../../../lib/site.js'

const KEY = '8165a51f1761605d62f207e8043a2027'

const URLS = [
  '/',
  '/guides',
  '/guides/son-gual-review',
  '/guides/alcanada-review',
  '/guides/golf-andratx-review',
  '/guides/son-muntaner-review',
  '/guides/t-golf-calvia-review',
  '/guides/santa-ponsa-1-review',
  '/guides/son-termes-review',
  '/guides/son-antem-west-review',
  '/guides/best-golf-courses-mallorca',
  '/guides/golf-cost-mallorca',
  '/guides/golf-club-hire-mallorca',
  '/guides/best-time-play-golf-mallorca',
  '/guides/golf-trip-planning-mallorca',
  '/guides/is-mallorca-good-for-golf',
  '/guides/on-course-coaching-mallorca',
  '/guides/play-with-a-pro-explained',
  '/play-with-a-pro',
  '/golf-courses',
  '/tools',
  '/tools/handicap-checker',
  '/tools/green-fees',
].map((path) => `${SITE_ORIGIN}${path}`)

export async function GET(request) {
  // Allow Vercel cron scheduler and manual trigger with a secret header
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.NODE_ENV === 'production') {
    return new Response('Unauthorized', { status: 401 })
  }

  const host = new URL(SITE_ORIGIN).hostname
  const body = JSON.stringify({
    host,
    key: KEY,
    keyLocation: `${SITE_ORIGIN}/${KEY}.txt`,
    urlList: URLS,
  })

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  })

  return new Response(
    JSON.stringify({ status: res.status, submitted: URLS.length }),
    { status: res.ok ? 200 : 502, headers: { 'Content-Type': 'application/json' } },
  )
}
