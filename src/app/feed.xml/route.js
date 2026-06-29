import { SITE_ORIGIN } from '../../lib/site.js'
import { GUIDE_POST_CONTENT } from '../../lib/guide-post-content.js'
import { GUIDE_ARTICLE_CONTENT } from '../../lib/guide-article-content.js'

const GUIDE_DATES = {
  'best-golf-courses-mallorca': '2026-06-01',
  'golf-cost-mallorca': '2026-05-01',
  'golf-club-hire-mallorca': '2026-05-01',
  'best-time-play-golf-mallorca': '2026-05-01',
  'golf-trip-planning-mallorca': '2026-05-01',
  'son-gual-review': '2026-05-01',
  'alcanada-review': '2026-05-01',
  'golf-andratx-review': '2026-05-01',
  'son-muntaner-review': '2026-05-01',
  'santa-ponsa-1-review': '2026-05-01',
  'son-termes-review': '2026-05-01',
  'son-antem-west-review': '2026-05-01',
  't-golf-calvia-review': '2026-05-01',
  'on-course-coaching-mallorca': '2026-05-01',
  'is-mallorca-good-for-golf': '2026-04-01',
  'play-with-a-pro-explained': '2026-06-26',
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = []

  for (const [slug, content] of Object.entries(GUIDE_POST_CONTENT)) {
    const meta = content?.en?.metadata
    if (!meta?.title) continue
    const imageRaw = meta.imagePath
    const image = imageRaw ? (imageRaw.startsWith('http') ? imageRaw : `${SITE_ORIGIN}${imageRaw}`) : null
    items.push({
      title: meta.title,
      description: meta.description || '',
      url: `${SITE_ORIGIN}/guides/${slug}`,
      date: GUIDE_DATES[slug] || '2026-04-01',
      image,
    })
  }

  for (const [slug, content] of Object.entries(GUIDE_ARTICLE_CONTENT)) {
    const meta = content?.metadata
    if (!meta?.title) continue
    items.push({
      title: meta.title,
      description: meta.description || '',
      url: `${SITE_ORIGIN}/guides/${slug}`,
      date: GUIDE_DATES[slug] || '2026-04-01',
      image: meta.image || null,
    })
  }

  items.sort((a, b) => new Date(b.date) - new Date(a.date))

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Mr Mallorca Golf</title>
    <link>${SITE_ORIGIN}</link>
    <description>Honest guides to golf in Mallorca from a PGA professional based on the island. Course reviews, green fees, trip planning, and when to visit.</description>
    <language>en-GB</language>
    <atom:link href="${SITE_ORIGIN}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.map(item => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>${item.image ? `
      <media:content url="${item.image}" medium="image"/>` : ''}
    </item>`).join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
