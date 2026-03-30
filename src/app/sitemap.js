import { getSitemapPaths, SITE_ORIGIN } from '../lib/site'

export default function sitemap() {
  const lastModified = new Date()

  return getSitemapPaths().map((path) => ({
    url: `${SITE_ORIGIN}${path}`,
    lastModified,
  }))
}
