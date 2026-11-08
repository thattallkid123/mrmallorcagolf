import { NextResponse } from 'next/server'

// True only when the caller asks for markdown ahead of HTML, so browsers
// (which send text/html first) and ordinary crawlers always get HTML.
function prefersMarkdown(accept) {
  const types = accept.toLowerCase().split(',').map((t) => t.split(';')[0].trim())
  const md = types.indexOf('text/markdown')
  if (md === -1) return false
  const html = types.indexOf('text/html')
  return html === -1 || md < html
}

export function proxy(request) {
  const host = request.headers.get('host') || ''
  if (host === 'mrmallorcagolf.com') {
    const redirectUrl = new URL(request.url)
    redirectUrl.host = 'www.mrmallorcagolf.com'
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 308)
  }

  // Markdown for Agents: see src/app/agent-md/[[...path]]/route.js
  const { pathname } = request.nextUrl
  if (
    request.method === 'GET' &&
    prefersMarkdown(request.headers.get('accept') || '') &&
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/') &&
    !pathname.startsWith('/agent-md') &&
    !pathname.startsWith('/.well-known/') &&
    !/\.[a-z0-9]{2,5}$/i.test(pathname)
  ) {
    const url = request.nextUrl.clone()
    url.pathname = `/agent-md${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
