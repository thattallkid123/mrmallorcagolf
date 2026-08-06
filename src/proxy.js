import { NextResponse } from 'next/server'

export function proxy(request) {
  const host = request.headers.get('host') || ''
  if (host === 'mrmallorcagolf.com') {
    const redirectUrl = new URL(request.url)
    redirectUrl.host = 'www.mrmallorcagolf.com'
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
