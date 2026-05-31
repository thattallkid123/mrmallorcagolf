import {
  ALL_LOCALES,
  ARTICLE_SLUGS,
  REVIEW_POST_SLUGS,
  buildLocalePath,
  getSitemapPaths,
  hasLocaleRoute,
} from '../src/lib/site.js'

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

function checkGuideParity() {
  const sitemapPaths = new Set(getSitemapPaths())
  const guideSlugs = [...REVIEW_POST_SLUGS, ...ARTICLE_SLUGS]
  const failures = []

  for (const slug of guideSlugs) {
    const basePath = `/guides/${slug}`
    for (const locale of ALL_LOCALES) {
      const routeExists = hasLocaleRoute(basePath, locale)
      const localizedPath = buildLocalePath(basePath, locale)
      const inSitemap = sitemapPaths.has(localizedPath)

      if (routeExists !== inSitemap) {
        failures.push(
          `${localizedPath}: hasLocaleRoute=${routeExists} but sitemapContains=${inSitemap}`,
        )
      }
    }
  }

  assert(failures.length === 0, `Route/sitemap parity failures:\n${failures.join('\n')}`)
}

checkGuideParity()
console.log('Route parity checks passed.')
