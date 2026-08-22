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
  '/guides/best-golf-courses-mallorca': '2026-08-14',
  '/guides/5-day-mallorca-golf-itinerary': '2026-08-14',
  '/guides/golf-cost-mallorca': '2026-08-14',
  '/guides/golf-club-hire-mallorca': '2026-08-14',
  '/guides/best-time-play-golf-mallorca': '2026-05-01',
  '/guides/golf-trip-planning-mallorca': '2026-08-14',
  '/guides/son-gual-review': '2026-08-14',
  '/guides/alcanada-review': '2026-08-22',
  '/guides/golf-andratx-review': '2026-08-22',
  '/guides/son-muntaner-review': '2026-08-14',
  '/guides/santa-ponsa-1-review': '2026-08-22',
  '/guides/son-termes-review': '2026-08-22',
  '/guides/son-antem-west-review': '2026-08-22',
  '/guides/t-golf-calvia-review': '2026-08-14',
  '/guides/mallorca-course-map': '2026-07-23',
  '/guides/is-mallorca-good-for-golf': '2026-08-14',
  '/guides/on-course-coaching-mallorca': '2026-08-22',
  '/play-with-a-pro': '2026-06-25',
  '/signature-day': '2026-06-25',
  '/about': '2026-04-01',
  '/contact': '2026-04-01',
  '/plan-your-trip': '2026-05-01',
  '/course-selector': '2026-06-01',
  '/tools': '2026-07-25',
  '/tools/golf-cost-calculator': '2026-07-25',
  '/tools/hotel-recommender': '2026-07-25',
  '/tools/handicap-checker': '2026-07-25',
  '/tools/green-fees': '2026-07-25',
  '/tools/golf-day-builder': '2026-07-25',
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
