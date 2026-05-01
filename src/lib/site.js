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
  '/play-with-a-pro',
  '/golf-courses',
  '/contact',
  '/guides',
])

const LEGAL_BASE_PATHS = new Set(['/privacy-policy', '/terms'])
const LEGAL_LOCALES = new Set(['en', 'es'])

export const REVIEW_POST_SLUGS = new Set([
  'son-gual-review',
  'alcanada-review',
  'santa-ponsa-1-review',
  'son-termes-review',
  'son-muntaner-review',
])

export const EN_ONLY_REVIEW_POST_SLUGS = new Set([])

export const ARTICLE_SLUGS = new Set([
  'a-day-at-son-gual',
  'best-golf-courses-mallorca',
  'best-time-play-golf-mallorca',
  'golf-club-hire-mallorca',
  'golf-cost-mallorca',
  'golf-trip-planning-mallorca',
  'is-mallorca-good-for-golf',
])

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

  if (SHARED_BASE_PATHS.has(basePath)) return true
  if (LEGAL_BASE_PATHS.has(basePath)) return LEGAL_LOCALES.has(locale)

  if (!basePath.startsWith('/guides/')) return false

  const slug = getGuideSlug(basePath)
  if (REVIEW_POST_SLUGS.has(slug)) return true
  if (EN_ONLY_REVIEW_POST_SLUGS.has(slug)) return locale === 'en'
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

  // Article/guide posts: include ALL locales (published in all languages)
  for (const slug of ARTICLE_SLUGS) {
    for (const locale of ALL_LOCALES) {
      paths.push(buildLocalePath(`/guides/${slug}`, locale))
    }
  }

  return [...new Set(paths)]
}
