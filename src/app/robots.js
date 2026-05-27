import { SITE_ORIGIN } from '../lib/site'

export default function robots() {
  const host = new URL(SITE_ORIGIN).host

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    host,
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  }
}
