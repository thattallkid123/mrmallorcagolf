import { SITE_ORIGIN } from '../../lib/site'

// Replaces src/app/robots.js. Next's robots() metadata API cannot emit the
// Content-Signal directive, so robots.txt is a route handler instead.
// Content Signals (contentsignals.org): search = classic search indexing,
// ai-input = grounding/answers (ChatGPT search, Perplexity, AI Overviews),
// ai-train = model training. We want to be found and cited, not trained on.

const CONTENT_SIGNAL = 'search=yes, ai-input=yes, ai-train=no'

export function GET() {
  const host = new URL(SITE_ORIGIN).host

  const body = [
    'User-Agent: *',
    `Content-Signal: ${CONTENT_SIGNAL}`,
    'Allow: /',
    '',
    'User-Agent: GPTBot',
    'Allow: /',
    '',
    'User-Agent: Googlebot',
    'Allow: /',
    '',
    `Host: ${host}`,
    `Sitemap: ${SITE_ORIGIN}/sitemap.xml`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
    },
  })
}
