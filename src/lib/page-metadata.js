import { getAlternates, SITE_ORIGIN } from './site.js'
import { getPlayWithAProMetadataDescription } from './offers-content.js'

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
      'The complete guide to golf in Mallorca - all 24 courses, including 21 open to green-fee visitors, plus honest recommendations from a PGA professional based on the island. 2026 edition.',
  },
  de: {
    title: 'Mallorca Golf Guide 2026 - Jeder Kurs auf der Insel',
    description:
      'Der vollstaendige Leitfaden fuer Golf auf Mallorca - alle 24 Kurse, Green Fees, Schwierigkeitsratings und ehrliche Empfehlungen von einem auf der Insel ansaessigen PGA Professional. 2026 Ausgabe.',
  },
  es: {
    title: 'Guia de Golf en Mallorca 2026 - Todos los campos de la isla',
    description:
      'La guia completa del golf en Mallorca - 24 campos, green fees, dificultades y recomendaciones honestas de un PGA profesional en la isla.',
  },
  fr: {
    title: "Guide Golf Majorque 2026 - Tous les parcours de l'ile",
    description:
      "Le guide complet du golf a Majorque - 24 parcours, green fees, evaluations de difficulte et recommandations honnetes d'un professionnel PGA base sur l'ile. Edition 2026.",
  },
  nl: {
    title: 'Mallorca Golfgids 2026 - Alle banen op het eiland',
    description:
      'De complete gids voor golf op Mallorca - alle 24 banen, greenfees, moeilijkheidsgraden en eerlijke aanbevelingen van een PGA professional op het eiland. Editie 2026.',
  },
  sv: {
    title: 'Mallorca Golfguide 2026 - Alla banor pa on',
    description:
      'Den kompletta guiden till golf pa Mallorca - alla 24 banor, greenavgifter, svarighetsbetyg och arliga rekommendationer fran en PGA-professional baserad pa on. 2026-utgavan.',
  },
  zh: {
    title: 'Mallorca Golf Guide 2026 - All Courses on the Island',
    description:
      'A complete guide to golf in Mallorca covering all 24 courses, including 21 open to green-fee visitors, plus honest recommendations from a PGA professional based on the island.',
  },
}

const GUIDES_INDEX_METADATA = {
  en: {
    title: 'Mallorca Golf Guide - Course Reviews, Tips and Advice',
    description:
      'Honest guides to golf in Mallorca from a PGA professional based on the island. Course reviews, green fees, trip planning, and when to visit - all updated for 2026.',
  },
  de: {
    title: 'Mallorca Golff\u00fchrer - Platz-Bewertungen und Tipps',
    description:
      'Ehrliche Golfratgeber fur Mallorca von einem PGA Professional. Platz-Bewertungen, Greenfees und Reiseplanung - aktualisiert fur 2026.',
  },
  es: {
    title: 'Guia de Golf en Mallorca - Analisis de campos y consejos',
    description:
      'Guias honestas de golf en Mallorca de un Profesional PGA. Analisis de campos, green fees y planificacion de viajes - actualizadas para 2026.',
  },
  fr: {
    title: 'Guide Golf Majorque - Avis sur les parcours et conseils',
    description:
      'Guides honnetes sur le golf a Majorque par un Professionnel PGA. Avis sur les parcours, green fees et planification de voyage - mis a jour pour 2026.',
  },
  nl: {
    title: 'Mallorca Golfgids - Baanbeoordelingen en tips',
    description:
      'Eerlijke golfgidsen voor Mallorca van een PGA Professional. Baanbeoordelingen, greenfees en reisplanning - bijgewerkt voor 2026.',
  },
  sv: {
    title: 'Mallorca Golfguide - Banomdomen och tips',
    description:
      'Arliga golfguider for Mallorca av en PGA Professional. Banomdomen, greenfees och reseplanering - uppdaterade for 2026.',
  },
  zh: {
    title: 'Mallorca Golf Guide - Course Reviews and Advice',
    description:
      'Honest golf guides for Mallorca from a PGA professional, covering course reviews, green fees, and trip planning for 2026.',
  },
}

const ABOUT_METADATA = {
  en: {
    title: 'About Andy Griffiths - PGA Professional, Mallorca',
    description:
      'Andy Griffiths is a UK PGA Advanced Professional based in Mallorca. Formerly Pebble Beach, Evian, 11 years coaching in China.',
  },
  de: {
    title: 'Uber Andy Griffiths - PGA Professional, Mallorca',
    description:
      'Andy Griffiths ist ein UK PGA Advanced Professional mit Sitz auf Mallorca. Ehemals Pebble Beach, Evian, 11 Jahre Coaching in China.',
  },
  es: {
    title: 'Sobre Andy Griffiths - PGA Profesional, Mallorca',
    description:
      'Andy Griffiths es un UK PGA Advanced Professional con base en Mallorca. Anteriormente Pebble Beach, Evian, 11 anos de entrenamiento en China.',
  },
  fr: {
    title: "A propos d'Andy Griffiths - Professionnel PGA Avance, Majorque",
    description:
      "Andy Griffiths est un professionnel PGA avance du Royaume-Uni base a Majorque. Ancien coach a Pebble Beach, Evian, 11 ans de coaching en Chine.",
  },
  nl: {
    title: 'Over Andy Griffiths - PGA Professional, Mallorca',
    description:
      'Andy Griffiths is een Britse UK PGA Advanced Professional gevestigd op Mallorca. Eerder Pebble Beach, Evian, 11 jaar coaching in China.',
  },
  sv: {
    title: 'Om Andy Griffiths - PGA-professional, Mallorca',
    description:
      'Andy Griffiths ar en brittisk PGA Advanced Professional baserad pa Mallorca. Tidigare Pebble Beach, Evian, 11 ar coaching i Kina.',
  },
  zh: {
    title: 'About Andy Griffiths - PGA Professional, Mallorca',
    description:
      'Andy Griffiths is a UK PGA Advanced Professional based in Mallorca, with previous experience at Pebble Beach, Evian, and 11 years coaching in China.',
  },
}

const COACHING_METADATA = {
  en: {
    title: 'On-Course Golf Coaching in Mallorca - PGA Professional',
    description:
      'On-course golf coaching in Mallorca with PGA Advanced Professional Andy Griffiths. Real improvement in real conditions - for visiting and resident golfers.',
  },
  de: {
    title: 'On-Course Golf Coaching auf Mallorca - PGA Professional',
    description:
      'On-Course Golf Coaching auf Mallorca mit PGA Advanced Professional Andy Griffiths. Echte Verbesserung in echten Bedingungen - fuer besuchende und ansaessige Golfer.',
  },
  es: {
    title: 'Coaching de Golf en Campo en Mallorca - PGA Profesional',
    description:
      'Coaching de golf en campo en Mallorca con UK PGA Advanced Professional Andy Griffiths. Mejora real en condiciones reales - para golfistas en visita y residentes.',
  },
  fr: {
    title: 'Coaching Golf sur Parcours a Majorque - Professionnel PGA',
    description:
      'Coaching golf sur parcours a Majorque avec un Professionnel PGA Avance Andy Griffiths. Amelioration reelle dans des conditions reelles - pour golfeurs en visite et residents.',
  },
  nl: {
    title: 'On-Course Golfcoaching in Mallorca - PGA Professional',
    description:
      'On-course golfcoaching op Mallorca met PGA Advanced Professional Andy Griffiths. Echte verbetering in echte omstandigheden - voor bezoekers en inwoners.',
  },
  sv: {
    title: 'On-Course Golfcoaching i Mallorca - PGA-professional',
    description:
      'On-course golfcoaching i Mallorca med PGA Advanced Professional Andy Griffiths. Verklig forbattring i verkliga forhallanden - for besokande och bosatta golfare.',
  },
  zh: {
    title: 'On-Course Golf Coaching in Mallorca - PGA Professional',
    description:
      'On-course golf coaching in Mallorca with PGA Advanced Professional Andy Griffiths. Real improvement in real playing conditions for visiting and resident golfers.',
  },
}

const PLAY_WITH_A_PRO_METADATA = {
  en: {
    title: 'Play With a Pro - Private Golf Days in Mallorca',
    description: getPlayWithAProMetadataDescription('en'),
  },
  de: {
    title: 'Mit einem Profi spielen - Private Golftage auf Mallorca',
    description: getPlayWithAProMetadataDescription('de'),
  },
  es: {
    title: 'Jugar con un Profesional - Dias de Golf Privados en Mallorca',
    description: getPlayWithAProMetadataDescription('es'),
  },
  fr: {
    title: 'Jouer avec un Pro - Journees Golf Privees a Majorque',
    description: getPlayWithAProMetadataDescription('fr'),
  },
  nl: {
    title: 'Spelen met een Pro - Privegolfdagen op Mallorca',
    description: getPlayWithAProMetadataDescription('nl'),
  },
  sv: {
    title: 'Spela med ett Proffs - Privata Golfdagar pa Mallorca',
    description: getPlayWithAProMetadataDescription('sv'),
  },
  zh: {
    title: 'Private Golf Days in Mallorca - Play With a Pro',
    description: getPlayWithAProMetadataDescription('zh'),
  },
}

const CONTACT_METADATA = {
  en: {
    title: 'Contact - Mr Mallorca Golf | Andy Griffiths PGA Professional',
    description:
      'Get in touch to arrange a private golf day in Mallorca. PGA Advanced Professional Andy Griffiths responds personally within 24 hours.',
  },
  de: {
    title: 'Kontakt - Mr Mallorca Golf | Andy Griffiths UK PGA Professional',
    description:
      'Arrangieren Sie Ihren privaten Golftag auf Mallorca. UK PGA Advanced Professional Andy Griffiths antwortet persoenlich innerhalb von 24 Stunden.',
  },
  es: {
    title: 'Contacto - Mr Mallorca Golf | Andy Griffiths PGA Profesional',
    description:
      'Organice su dia de golf privado en Mallorca. Andy Griffiths responde personalmente en 24 horas.',
  },
  fr: {
    title: 'Contact - Mr Mallorca Golf | Andy Griffiths PGA Professionnel',
    description:
      'Organisez votre journee golf privee a Majorque. Andy Griffiths repond personnellement sous 24 heures.',
  },
  nl: {
    title: 'Contact - Mr Mallorca Golf | Andy Griffiths PGA Professional',
    description:
      'Organiseer uw privegolfdag op Mallorca. Andy Griffiths reageert persoonlijk binnen 24 uur.',
  },
  sv: {
    title: 'Kontakt - Mr Mallorca Golf | Andy Griffiths UK PGA-proffs',
    description:
      'Arrangera din privata golfdag pa Mallorca. Andy Griffiths svarar personligen inom 24 timmar.',
  },
  zh: {
    title: 'Contact - Mr Mallorca Golf | Andy Griffiths PGA Professional',
    description:
      'Arrange a private golf day in Mallorca. Andy Griffiths replies personally within 24 hours.',
  },
}

const SUBSCRIBE_METADATA = {
  en: {
    title: 'Golf Insights from Mallorca - Weekly Newsletter | Mr Mallorca Golf',
    description:
      'Join the mailing list for weekly Mallorca golf insights, course reviews, and trip planning tips from a PGA professional on the island.',
  },
  de: {
    title: 'Golf-Einblicke aus Mallorca - Wöchentlicher Newsletter | Mr Mallorca Golf',
    description:
      'Abonnieren Sie unseren Newsletter für wöchentliche Golf-Einblicke aus Mallorca, Platz-Bewertungen und Reiseplanung von einem PGA-Profi.',
  },
  es: {
    title: 'Perspectivas de Golf en Mallorca - Boletín Semanal | Mr Mallorca Golf',
    description:
      'Únase a nuestra lista de correo para obtener perspectivas semanales de golf en Mallorca, reseñas de campos y consejos de viaje de un profesional PGA.',
  },
  fr: {
    title: 'Perspectives Golf à Majorque - Lettre d\'information Hebdomadaire | Mr Mallorca Golf',
    description:
      'Rejoignez notre liste de diffusion pour des perspectives hebdomadaires sur le golf à Majorque, des avis sur les parcours et des conseils de voyage d\'un professionnel PGA.',
  },
  nl: {
    title: 'Golfinzichten van Mallorca - Wekelijkse Nieuwsbrief | Mr Mallorca Golf',
    description:
      'Abonneer je op onze mailinglist voor wekelijkse golfinzichten van Mallorca, beoordelingen van banen en reisadviezen van een PGA-professional.',
  },
  sv: {
    title: 'Golfinblickar från Mallorca - Veckovis Nyhetsbrev | Mr Mallorca Golf',
    description:
      'Prenumerera på vår maillista för veckovisa golfinblickar från Mallorca, banavgifter och reseplaneringsadiv från en PGA-professional.',
  },
  zh: {
    title: 'Mallorca Golf Insights - Weekly Newsletter | Mr Mallorca Golf',
    description:
      'Join the mailing list for weekly Mallorca golf insights, course reviews, and trip planning tips from a PGA professional on the island.',
  },
}

const LEGAL_METADATA = {
  'privacy-policy': {
    en: {
      title: 'Privacy Policy - Mr Mallorca Golf',
      description:
        'Privacy policy for Mr Mallorca Golf. How we collect, use, and protect your personal data in accordance with GDPR and Spanish data protection law.',
    },
    es: {
      title: 'Politica de Privacidad - Mr Mallorca Golf',
      description:
        'Politica de privacidad de Mr Mallorca Golf. Como recopilamos, usamos y protegemos tus datos personales conforme al RGPD y la LOPDGDD.',
    },
  },
  terms: {
    en: {
      title: 'Terms and Conditions - Mr Mallorca Golf',
      description:
        'Terms and conditions for Mr Mallorca Golf experiences and services in Mallorca, Spain.',
    },
    es: {
      title: 'Terminos y Condiciones - Mr Mallorca Golf',
      description:
        'Terminos y condiciones de las experiencias y servicios de Mr Mallorca Golf en Mallorca, Espana.',
    },
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

export function buildGuidesIndexMetadata(locale = 'en') {
  return buildPageMetadata(locale === 'en' ? '/guides' : `/${locale}/guides`, locale, GUIDES_INDEX_METADATA[locale] || GUIDES_INDEX_METADATA.en)
}

export function buildGuidePostMetadata({
  slug,
  locale = 'en',
  title,
  description,
  imagePath,
  publishedTime = '2026-03-01',
}) {
  const pathname = locale === 'en' ? `/guides/${slug}` : `/${locale}/guides/${slug}`
  const canonicalPath = `/guides/${slug}`
  const imageUrl = imagePath.startsWith('http') ? imagePath : `${SITE_ORIGIN}${imagePath}`

  const metadata = {
    title,
    description,
    openGraph: {
      type: 'article',
      url: `${SITE_ORIGIN}${pathname}`,
      title,
      description,
      publishedTime,
      authors: ['Andy Griffiths'],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }

  const builtMetadata = buildPageMetadata(pathname, locale, metadata)

  // For non-English locales, override canonical to point to English version
  if (locale !== 'en') {
    builtMetadata.alternates = {
      ...builtMetadata.alternates,
      canonical: `${SITE_ORIGIN}${canonicalPath}`,
    }
  }

  return builtMetadata
}

export function buildAboutMetadata(locale = 'en') {
  return buildPageMetadata(locale === 'en' ? '/about' : `/${locale}/about`, locale, ABOUT_METADATA[locale] || ABOUT_METADATA.en)
}

export function buildCoachingMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/coaching' : `/${locale}/coaching`,
    locale,
    COACHING_METADATA[locale] || COACHING_METADATA.en,
  )
}

export function buildPlayWithAProMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/play-with-a-pro' : `/${locale}/play-with-a-pro`,
    locale,
    PLAY_WITH_A_PRO_METADATA[locale] || PLAY_WITH_A_PRO_METADATA.en,
  )
}

export function buildContactMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/contact' : `/${locale}/contact`,
    locale,
    CONTACT_METADATA[locale] || CONTACT_METADATA.en,
  )
}

export function buildSubscribeMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/subscribe' : `/${locale}/subscribe`,
    locale,
    SUBSCRIBE_METADATA[locale] || SUBSCRIBE_METADATA.en,
  )
}

export function buildLegalMetadata(type, locale = 'en') {
  const localizedMetadata = LEGAL_METADATA[type]
  const basePath = `/${type}`

  return buildPageMetadata(
    locale === 'en' ? basePath : `/${locale}${basePath}`,
    locale,
    {
      ...(localizedMetadata?.[locale] || localizedMetadata?.en || {}),
      robots: {
        index: false,
        follow: true,
      },
    },
  )
}
