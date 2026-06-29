// Run after deploying new or updated content: npm run indexnow
// Submits all guide URLs to Bing/IndexNow for instant indexing.

const KEY = '8165a51f1761605d62f207e8043a2027'
const HOST = 'www.mrmallorcagolf.com'

const URLS = [
  'https://www.mrmallorcagolf.com/',
  'https://www.mrmallorcagolf.com/guides',
  'https://www.mrmallorcagolf.com/guides/son-gual-review',
  'https://www.mrmallorcagolf.com/guides/alcanada-review',
  'https://www.mrmallorcagolf.com/guides/golf-andratx-review',
  'https://www.mrmallorcagolf.com/guides/son-muntaner-review',
  'https://www.mrmallorcagolf.com/guides/t-golf-calvia-review',
  'https://www.mrmallorcagolf.com/guides/santa-ponsa-1-review',
  'https://www.mrmallorcagolf.com/guides/son-termes-review',
  'https://www.mrmallorcagolf.com/guides/son-antem-west-review',
  'https://www.mrmallorcagolf.com/guides/best-golf-courses-mallorca',
  'https://www.mrmallorcagolf.com/guides/golf-cost-mallorca',
  'https://www.mrmallorcagolf.com/guides/golf-club-hire-mallorca',
  'https://www.mrmallorcagolf.com/guides/best-time-play-golf-mallorca',
  'https://www.mrmallorcagolf.com/guides/golf-trip-planning-mallorca',
  'https://www.mrmallorcagolf.com/guides/is-mallorca-good-for-golf',
  'https://www.mrmallorcagolf.com/guides/on-course-coaching-mallorca',
  'https://www.mrmallorcagolf.com/guides/play-with-a-pro-explained',
  'https://www.mrmallorcagolf.com/play-with-a-pro',
  'https://www.mrmallorcagolf.com/golf-courses',
]

const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: URLS })

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body,
})

console.log(`IndexNow: ${res.status} ${res.statusText}`)
if (res.status === 200) {
  console.log(`Submitted ${URLS.length} URLs to IndexNow.`)
} else {
  const text = await res.text().catch(() => '')
  console.error('Response:', text)
  process.exit(1)
}
