import {
  ALL_LOCALES,
  buildLocalePath,
  getHreflangCode,
  getSitemapPaths,
  hasLocaleRoute,
  stripLocaleFromPath,
  SITE_ORIGIN,
} from '../lib/site'

const LAST_MODIFIED_BY_PATH = {
  '/': '2026-06-01',
  '/golf-courses': '2026-06-01',
  '/guides': '2026-06-01',
  '/guides/best-golf-courses-mallorca': '2026-06-01',
  '/guides/golf-cost-mallorca': '2026-05-01',
  '/guides/golf-club-hire-mallorca': '2026-05-01',
  '/guides/best-time-play-golf-mallorca': '2026-05-01',
  '/guides/golf-trip-planning-mallorca': '2026-05-01',
  '/guides/son-gual-review': '2026-05-01',
  '/guides/alcanada-review': '2026-05-01',
  '/guides/golf-andratx-review': '2026-05-01',
  '/guides/son-muntaner-review': '2026-05-01',
  '/guides/santa-ponsa-1-review': '2026-05-01',
  '/guides/son-termes-review': '2026-05-01',
  '/guides/son-antem-west-review': '2026-05-01',
  '/guides/t-golf-calvia-review': '2026-05-01',
  '/guides/play-with-a-pro-explained': '2026-06-26',
  '/guides/is-mallorca-good-for-golf': '2026-05-01',
  '/guides/on-course-coaching-mallorca': '2026-05-01',
  '/play-with-a-pro': '2026-06-25',
  '/signature-day': '2026-06-25',
  '/about': '2026-04-01',
  '/contact': '2026-04-01',
  '/plan-your-trip': '2026-05-01',
  '/course-selector': '2026-06-01',
}

export default function sitemap() {
  return getSitemapPaths().map((path) => {
    const basePath = stripLocaleFromPath(path)
    const languages = Object.fromEntries(
      ALL_LOCALES
        .filter((locale) => hasLocaleRoute(basePath, locale))
        .map((locale) => [getHreflangCode(locale), `${SITE_ORIGIN}${buildLocalePath(basePath, locale)}`]),
    )

    const lastModified = LAST_MODIFIED_BY_PATH[basePath] ?? '2026-04-01'

    return {
      url: `${SITE_ORIGIN}${path}`,
      lastModified,
      alternates: { languages },
    }
  })
}
