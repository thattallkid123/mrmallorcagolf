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

const GOLF_COURSES_METADATA = {
  en: {
    title: 'Mallorca Golf Guide 2026 - Every Course on the Island',
    description:
      'The complete guide to golf in Mallorca - all 22 courses, green fees, difficulty ratings, and honest recommendations from a PGA professional based on the island. 2026 edition.',
  },
  de: {
    title: 'Mallorca Golf Guide 2026 - Jeder Kurs auf der Insel',
    description:
      'Der vollstaendige Leitfaden fuer Golf auf Mallorca - alle 22 Kurse, Green Fees, Schwierigkeitsratings und ehrliche Empfehlungen von einem auf der Insel ansaessigen PGA Professional. 2026 Ausgabe.',
  },
  es: {
    title: 'Guia de Golf en Mallorca 2026 - Todos los campos de la isla',
    description:
      'La guia completa del golf en Mallorca - 22 campos, green fees, dificultades y recomendaciones honestas de un PGA profesional en la isla.',
  },
  fr: {
    title: "Guide Golf Majorque 2026 - Tous les parcours de l'ile",
    description:
      "Le guide complet du golf a Majorque - 22 parcours, green fees, evaluations de difficulte et recommandations honnetes d'un professionnel PGA base sur l'ile. Edition 2026.",
  },
  nl: {
    title: 'Mallorca Golfgids 2026 - Alle banen op het eiland',
    description:
      'De complete gids voor golf op Mallorca - alle 22 banen, greenfees, moeilijkheidsgraden en eerlijke aanbevelingen van een PGA professional op het eiland. Editie 2026.',
  },
  sv: {
    title: 'Mallorca Golfguide 2026 - Alla banor pa on',
    description:
      'Den kompletta guiden till golf pa Mallorca - alla 22 banor, greenavgifter, svarighetsbetyg och arliga rekommendationer fran en PGA-professional baserad pa on. 2026-utgavan.',
  },
  zh: {
    title: 'Mallorca Golf Guide 2026 - All Courses on the Island',
    description:
      'A complete guide to golf in Mallorca covering all 22 courses, green fees, difficulty ratings, and honest recommendations from a PGA professional based on the island.',
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

export function buildGolfCoursesMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/golf-courses' : `/${locale}/golf-courses`,
    locale,
    GOLF_COURSES_METADATA[locale] || GOLF_COURSES_METADATA.en,
  )
}
