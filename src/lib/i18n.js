export const LOCALES = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh']

export const DEFAULT_LOCALE = 'en'

export const NAV_LOCALES = ['en', 'es', 'de', 'fr', 'zh']

export function isSupportedLocale(locale) {
  return LOCALES.includes(locale)
}

export function getLocaleLabel(locale) {
  const labels = {
    en: 'English',
    de: 'Deutsch',
    es: 'Espanol',
    fr: 'Francais',
    nl: 'Nederlands',
    sv: 'Svenska',
    zh: 'Chinese',
  }

  return labels[locale] || locale
}
