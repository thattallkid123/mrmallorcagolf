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

// NOTE (2026-08-23 check audit): hasLocaleRoute() and getSitemapPaths() both
// derive guide-slug membership from the same REVIEW_POST_SLUGS/ARTICLE_SLUGS
// sets in site.js — so this can't catch the two functions' guide-route
// coverage independently drifting apart (confirmed: adding a fake slug to
// REVIEW_POST_SLUGS still passed, since both sides picked it up identically).
// It still catches a real class of bug: hasLocaleRoute()/getSitemapPaths()
// applying DIFFERENT rules on top of that shared slug set (e.g. one honoring
// EN_ONLY_ARTICLE_SLUGS and the other not). Read a pass here as "the two
// functions agree on how to interpret the shared slug sets," not "the slug
// sets themselves are correct."
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
