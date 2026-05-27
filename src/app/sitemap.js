import {
  ALL_LOCALES,
  buildLocalePath,
  getHreflangCode,
  getSitemapPaths,
  hasLocaleRoute,
  stripLocaleFromPath,
  SITE_ORIGIN,
} from '../lib/site'

export default function sitemap() {
  const lastModified = new Date()

  return getSitemapPaths().map((path) => {
    const basePath = stripLocaleFromPath(path)
    const languages = Object.fromEntries(
      ALL_LOCALES
        .filter((locale) => hasLocaleRoute(basePath, locale))
        .map((locale) => [getHreflangCode(locale), `${SITE_ORIGIN}${buildLocalePath(basePath, locale)}`]),
    )

    return {
      url: `${SITE_ORIGIN}${path}`,
      lastModified,
      alternates: { languages },
    }
  })
}
