import { getAlternates } from './site'

const HOME_METADATA = {
  en: {
    title: "Mr Mallorca Golf - Play Mallorca's Best Courses with a PGA Professional",
    description:
      'Private golf experiences in Mallorca with a PGA Advanced Professional. Full days on Son Gual, Alcanada, and more - on-course coaching, everything arranged.',
  },
  de: {
    title: 'Mr Mallorca Golf - Mallorcas beste Golfplaetze mit einem PGA Professional',
    description:
      'Private Golferlebnisse auf Mallorca mit einem PGA Advanced Professional. Ganztagige Runden auf Son Gual, Alcanada und mehr - Coaching auf dem Platz, alles arrangiert.',
  },
  es: {
    title: 'Mr Mallorca Golf - Juegue los mejores campos de Mallorca con un PGA Professional',
    description:
      'Experiencias privadas de golf en Mallorca con un PGA Advanced Professional. Dias completos en Son Gual, Alcanada y mas - coaching en el campo, todo organizado.',
  },
  fr: {
    title: 'Mr Mallorca Golf - Les meilleurs parcours de Majorque avec un PGA Professional',
    description:
      'Experiences golf privees a Majorque avec un PGA Advanced Professional. Journees completes a Son Gual, Alcanada et plus - coaching sur parcours, tout organise.',
  },
  nl: {
    title: 'Mr Mallorca Golf - Speel de beste banen van Mallorca met een PGA Professional',
    description:
      'Prive golfervaringen op Mallorca met een PGA Advanced Professional. Volledige dagen op Son Gual, Alcanada en meer - coaching op de baan, alles geregeld.',
  },
  sv: {
    title: 'Mr Mallorca Golf - Spela Mallorcas besta banor med en PGA Professional',
    description:
      'Privata golfupplevelser pa Mallorca med en PGA Advanced Professional. Heldagar pa Son Gual, Alcanada och mer - coaching pa banan, allt ordnat.',
  },
  zh: {
    title: 'Mr Mallorca Golf - Yu PGA Professional tong chang ti yan Mallorca zui hao qiu chang',
    description:
      'Zai Mallorca yu PGA Advanced Professional yi qi tiyan siren gaoerfu xingcheng. Son Gual, Alcanada deng quanri anpai - changshang zhidao, yiqie anpai tuo dang.',
  },
}

export function buildPageMetadata(pathname, locale, overrides = {}) {
  const alternates = getAlternates(pathname)

  return {
    ...overrides,
    alternates,
  }
}

export function buildHomeMetadata(locale = 'en') {
  return buildPageMetadata(locale === 'en' ? '/' : `/${locale}`, locale, HOME_METADATA[locale] || HOME_METADATA.en)
}
