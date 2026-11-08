import TurndownService from 'turndown'

// Markdown for Agents. src/proxy.js rewrites a page request here only when the
// caller's Accept header prefers text/markdown; browsers keep getting HTML.
// This renders the same public page the visitor would see and converts it, so
// the markdown can never drift from the HTML or expose anything the page does
// not already show.

export const dynamic = 'force-dynamic'

const ALLOWED_HOSTS = /^(www\.mrmallorcagolf\.com|localhost(:\d+)?|127\.0\.0\.1(:\d+)?|[a-z0-9-]+\.vercel\.app)$/i

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '_',
})
turndown.remove(['script', 'style', 'nav', 'footer', 'svg', 'noscript', 'iframe', 'button', 'form', 'select', 'template'])

function markdownResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      'x-markdown-tokens': String(Math.ceil(body.length / 4)),
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
    },
  })
}

function mainHtml(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)
  if (main) return main[0]
  const body = html.match(/<body[\s\S]*?<\/body>/i)
  return body ? body[0] : html
}

export async function GET(request, { params }) {
  const { path = [] } = await params
  const segments = path.map((s) => decodeURIComponent(s))
  if (segments.some((s) => !s || s === '.' || s === '..' || s.includes('/') || s.includes('\\'))) {
    return markdownResponse('# Bad request\n', 400)
  }

  const url = new URL(request.url)
  if (!ALLOWED_HOSTS.test(url.host)) {
    return markdownResponse('# Not available\n', 400)
  }

  const pagePath = '/' + segments.map(encodeURIComponent).join('/')
  const target = `${url.origin}${pagePath}`

  let res
  try {
    res = await fetch(target, { headers: { Accept: 'text/html', 'User-Agent': 'mmg-markdown-renderer' }, redirect: 'manual' })
  } catch {
    return markdownResponse('# Temporarily unavailable\n', 502)
  }

  if (res.status >= 300 && res.status < 400) {
    const location = res.headers.get('location') || ''
    return new Response(null, { status: res.status, headers: { Location: location, Vary: 'Accept' } })
  }
  if (!res.ok || !(res.headers.get('content-type') || '').includes('text/html')) {
    return markdownResponse('# Not found\n', res.status === 404 ? 404 : 502)
  }

  const html = await res.text()
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '')
    .replace(/\s+/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim()
  let md = turndown.turndown(mainHtml(html))
  // Relative links become absolute so an agent can follow them from anywhere.
  md = md.replace(/\]\(\/(?!\/)/g, `](${url.origin}/`)
  md = md.replace(/\n{3,}/g, '\n\n').trim()

  const header = [title && `# ${title}`, `Source: ${target}`].filter(Boolean).join('\n\n')
  return markdownResponse(`${header}\n\n${md}\n`)
}
