export const SITE_ORIGIN = 'https://www.mrmallorcagolf.com'

export const ALL_LOCALES = ['en', 'es', 'de', 'fr', 'nl', 'sv', 'zh']
export const NAV_LOCALES = ['en', 'es', 'de', 'fr', 'zh']
export const LOCALE_PREFIXES = ALL_LOCALES.filter((locale) => locale !== 'en')
const HREFLANG_CODES = {
  zh: 'zh-Hans',
}

const SHARED_BASE_PATHS = new Set([
  '/',
  '/about',
  '/plan-your-trip',
  '/play-with-a-pro',
  '/signature-day',
  '/golf-courses',
  '/contact',
  '/guides',
  '/guides/play-with-a-pro-explained',
])

const EN_ONLY_BASE_PATHS = new Set(['/a-day', '/itinerary', '/course-selector'])
const EN_ONLY_TOOL_PATHS = new Set([])
// Tools available in all locales
const LOCALES_FOR_COURSE_SELECTOR_TOOL = new Set(['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'])
const LOCALES_FOR_GREEN_FEES_TOOL = new Set(['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'])
const LOCALES_FOR_GOLF_DAY_BUILDER_TOOL = new Set(['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'])
const LOCALES_FOR_GOLF_COST_CALCULATOR = new Set(['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'])
const LOCALES_FOR_HOTEL_RECOMMENDER = new Set(['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'])
const LOCALES_FOR_HANDICAP_CHECKER = new Set(['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh'])
const LEGAL_BASE_PATHS = new Set(['/privacy-policy', '/terms'])
const LEGAL_LOCALES = new Set(['en', 'es'])

export const REVIEW_POST_SLUGS = new Set([
  'son-gual-review',
  'alcanada-review',
  'santa-ponsa-1-review',
  'son-termes-review',
  'son-muntaner-review',
  't-golf-calvia-review',
  'golf-andratx-review',
  'son-antem-west-review',
])

export const EN_ONLY_REVIEW_POST_SLUGS = new Set([
  'on-course-coaching-mallorca',
])

export const ARTICLE_SLUGS = new Set([
  'best-golf-courses-mallorca',
  'best-time-play-golf-mallorca',
  'golf-club-hire-mallorca',
  'golf-cost-mallorca',
  'golf-trip-planning-mallorca',
  'is-mallorca-good-for-golf',
  'mallorca-course-map',
])

export const EN_ONLY_ARTICLE_SLUGS = new Set([])

export function normalizePath(pathname = '/') {
  if (!pathname) return '/'

  const [pathOnly] = pathname.split(/[?#]/)
  if (!pathOnly || pathOnly === '/') return '/'

  return pathOnly.endsWith('/') ? pathOnly.slice(0, -1) : pathOnly
}

export function getLocaleFromPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  const segment = normalized.split('/')[1]
  return LOCALE_PREFIXES.includes(segment) ? segment : 'en'
}

export function stripLocaleFromPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  const locale = getLocaleFromPath(normalized)

  if (locale === 'en') return normalized

  const stripped = normalized.slice(locale.length + 1)
  return stripped || '/'
}

export function buildLocalePath(basePath = '/', locale = 'en') {
  const normalizedBasePath = normalizePath(basePath)

  if (locale === 'en') {
    return normalizedBasePath
  }

  return normalizedBasePath === '/' ? `/${locale}` : `/${locale}${normalizedBasePath}`
}

export function getHreflangCode(locale = 'en') {
  return HREFLANG_CODES[locale] || locale
}

export function getDocumentLanguage(locale = 'en') {
  return getHreflangCode(locale)
}

export function isGuidePath(basePath = '/') {
  return stripLocaleFromPath(basePath).startsWith('/guides/')
}

export function getGuideSlug(pathname = '/') {
  const basePath = stripLocaleFromPath(pathname)
  if (!basePath.startsWith('/guides/')) return null
  return basePath.slice('/guides/'.length)
}

export function isLiveGuideSlug(slug) {
  return REVIEW_POST_SLUGS.has(slug)
}

export function isDraftGuideSlug(slug) {
  return ARTICLE_SLUGS.has(slug)
}

export function isReviewPostSlug(slug) {
  return REVIEW_POST_SLUGS.has(slug) || EN_ONLY_REVIEW_POST_SLUGS.has(slug)
}

export function isArticleSlug(slug) {
  return ARTICLE_SLUGS.has(slug)
}

export function isPublishedGuideSlug(slug) {
  return isReviewPostSlug(slug) || isArticleSlug(slug)
}

export function isDraftGuidePath(pathname = '/') {
  const slug = getGuideSlug(pathname)
  return Boolean(slug && isArticleSlug(slug))
}

export function hasLocaleRoute(pathname = '/', locale = 'en') {
  const basePath = stripLocaleFromPath(pathname)

  if (EN_ONLY_BASE_PATHS.has(basePath)) return locale === 'en'
  if (SHARED_BASE_PATHS.has(basePath)) return true
  if (LEGAL_BASE_PATHS.has(basePath)) return LEGAL_LOCALES.has(locale)
  if (EN_ONLY_TOOL_PATHS.has(basePath)) return locale === 'en'
  if (basePath === '/tools') return LOCALES_FOR_GREEN_FEES_TOOL.has(locale)
  if (basePath === '/tools/course-selector') return LOCALES_FOR_COURSE_SELECTOR_TOOL.has(locale)
  if (basePath === '/tools/green-fees') return LOCALES_FOR_GREEN_FEES_TOOL.has(locale)
  if (basePath === '/tools/golf-day-builder') return LOCALES_FOR_GOLF_DAY_BUILDER_TOOL.has(locale)
  if (basePath === '/tools/golf-cost-calculator') return LOCALES_FOR_GOLF_COST_CALCULATOR.has(locale)
  if (basePath === '/tools/hotel-recommender') return LOCALES_FOR_HOTEL_RECOMMENDER.has(locale)
  if (basePath === '/tools/handicap-checker') return LOCALES_FOR_HANDICAP_CHECKER.has(locale)

  if (!basePath.startsWith('/guides/')) return false

  const slug = getGuideSlug(basePath)
  if (REVIEW_POST_SLUGS.has(slug)) return true
  if (EN_ONLY_REVIEW_POST_SLUGS.has(slug)) return locale === 'en'
  if (EN_ONLY_ARTICLE_SLUGS.has(slug)) return locale === 'en'
  if (isArticleSlug(slug)) return ALL_LOCALES.includes(locale)

  return false
}

export function getLanguageSwitchPath(pathname = '/', targetLocale = 'en') {
  const basePath = stripLocaleFromPath(pathname)

  if (hasLocaleRoute(basePath, targetLocale)) {
    return buildLocalePath(basePath, targetLocale)
  }

  if (LEGAL_BASE_PATHS.has(basePath)) {
    return buildLocalePath(basePath, 'en')
  }

  if (basePath.startsWith('/guides/')) {
    return buildLocalePath('/guides', targetLocale)
  }

  return buildLocalePath('/', targetLocale)
}

export function getLegalPath(type, locale = 'en') {
  const basePath = `/${type}`
  return buildLocalePath(basePath, LEGAL_LOCALES.has(locale) ? locale : 'en')
}

export function getGuidePath(slug, locale = 'en') {
  const basePath = `/guides/${slug}`
  if (hasLocaleRoute(basePath, locale)) {
    return buildLocalePath(basePath, locale)
  }
  return buildLocalePath(basePath, 'en')
}

export function getAlternates(pathname = '/') {
  const basePath = stripLocaleFromPath(pathname)
  const locale = getLocaleFromPath(pathname)
  const canonicalPath = hasLocaleRoute(basePath, locale)
    ? buildLocalePath(basePath, locale)
    : buildLocalePath(basePath, 'en')

  const languages = {}

  for (const candidate of ALL_LOCALES) {
    if (hasLocaleRoute(basePath, candidate)) {
      languages[getHreflangCode(candidate)] = `${SITE_ORIGIN}${buildLocalePath(basePath, candidate)}`
    }
  }

  const defaultLocale = languages.en ? 'en' : ALL_LOCALES.find((candidate) => languages[candidate])
  if (defaultLocale) {
    languages['x-default'] = languages[defaultLocale]
  }

  return {
    canonical: `${SITE_ORIGIN}${canonicalPath}`,
    languages,
  }
}

export function getSitemapPaths() {
  const paths = []
  const sharedPages = Array.from(SHARED_BASE_PATHS)

  // Include shared pages in all locales (they exist in all languages)
  for (const locale of ALL_LOCALES) {
    for (const path of sharedPages) {
      paths.push(buildLocalePath(path, locale))
    }
  }

  // Review posts: include ALL locales (published in all languages)
  for (const slug of REVIEW_POST_SLUGS) {
    for (const locale of ALL_LOCALES) {
      paths.push(buildLocalePath(`/guides/${slug}`, locale))
    }
  }

  // English-only review posts
  for (const slug of EN_ONLY_REVIEW_POST_SLUGS) {
    paths.push(buildLocalePath(`/guides/${slug}`, 'en'))
  }

  for (const slug of ARTICLE_SLUGS) {
    const locales = EN_ONLY_ARTICLE_SLUGS.has(slug) ? ['en'] : ALL_LOCALES
    for (const locale of locales) {
      paths.push(buildLocalePath(`/guides/${slug}`, locale))
    }
  }

  // Tool pages (en-only tools)
  for (const path of EN_ONLY_TOOL_PATHS) {
    paths.push(buildLocalePath(path, 'en'))
  }

  // Tools hub: available in all locales
  for (const locale of LOCALES_FOR_GREEN_FEES_TOOL) {
    paths.push(buildLocalePath('/tools', locale))
  }

  // Course selector tool: available in all locales
  for (const locale of LOCALES_FOR_COURSE_SELECTOR_TOOL) {
    paths.push(buildLocalePath('/tools/course-selector', locale))
  }

  // Green fees tool: available in all locales
  for (const locale of LOCALES_FOR_GREEN_FEES_TOOL) {
    paths.push(buildLocalePath('/tools/green-fees', locale))
  }

  // Golf day builder tool: available in all locales
  for (const locale of LOCALES_FOR_GOLF_DAY_BUILDER_TOOL) {
    paths.push(buildLocalePath('/tools/golf-day-builder', locale))
  }

  // Golf cost calculator tool: available in all locales
  for (const locale of LOCALES_FOR_GOLF_COST_CALCULATOR) {
    paths.push(buildLocalePath('/tools/golf-cost-calculator', locale))
  }

  // Hotel recommender tool: available in all locales
  for (const locale of LOCALES_FOR_HOTEL_RECOMMENDER) {
    paths.push(buildLocalePath('/tools/hotel-recommender', locale))
  }

  // Handicap checker tool: available in all locales
  for (const locale of LOCALES_FOR_HANDICAP_CHECKER) {
    paths.push(buildLocalePath('/tools/handicap-checker', locale))
  }

  return [...new Set(paths)]
}
