import { buildLocalePath, getAlternates, SITE_ORIGIN, stripLocaleFromPath } from './site.js'
import { getPlayWithAProMetadataDescription } from './offers-content.js'

export const DEFAULT_SOCIAL_IMAGE = {
  url: `${SITE_ORIGIN}/images/social-preview.jpg`,
  width: 1200,
  height: 630,
  alt: 'Mr Mallorca Golf',
}

const SOCIAL_IMAGE_ALT = {
  en: DEFAULT_SOCIAL_IMAGE.alt,
  zh: '马略卡高尔夫日，Mr Mallorca Golf',
}

const OPEN_GRAPH_LOCALES = {
  en: 'en_GB',
  es: 'es_ES',
  de: 'de_DE',
  fr: 'fr_FR',
  nl: 'nl_NL',
  sv: 'sv_SE',
  zh: 'zh_CN',
}

const OPEN_GRAPH_ALT_LOCALES = Object.values(OPEN_GRAPH_LOCALES)

export function getSocialImage(locale = 'en') {
  return {
    ...DEFAULT_SOCIAL_IMAGE,
    alt: SOCIAL_IMAGE_ALT[locale] || DEFAULT_SOCIAL_IMAGE.alt,
  }
}

const HOME_METADATA = {
  en: {
    title: 'Mallorca Golf - Pro & Trip Planning',
    socialTitle: 'Mr Mallorca Golf - Play With A Pro & Golf Trip Planning',
    description:
      '24 Mallorca golf courses reviewed by a PGA pro on the island. Green fees, verdicts, and trip planning help.',
  },
  de: {
    title: 'Golf in Mallorca mit PGA Pro',
    description:
      'Golftage auf Mallorca mit PGA Advanced Professional Andy Griffiths. Spielen Sie Son Gual, Alcanada und mehr - alles ist arrangiert.',
  },
  es: {
    title: 'Clases de Golf en Mallorca | PGA Pro',
    description:
      'Clases de golf en Mallorca con Andy Griffiths, PGA Advanced Professional. Coaching en campo, itinerarios y recomendaciones locales para su visita.',
  },
  fr: {
    title: 'Golf a Majorque avec PGA Pro',
    description:
      'Journees golf a Majorque avec Andy Griffiths, PGA Advanced Professional. Jouez Son Gual, Alcanada et plus, avec tous les details organises.',
  },
  nl: {
    title: 'Golf op Mallorca met PGA Pro',
    description:
      'Golfdagen op Mallorca met Andy Griffiths, PGA Advanced Professional. Speel Son Gual, Alcanada en meer, met alles geregeld.',
  },
  sv: {
    title: 'Golf pa Mallorca med PGA-proffs',
    description:
      'Golfdagar pa Mallorca med Andy Griffiths, PGA Advanced Professional. Spela Son Gual, Alcanada och mer, med allt ordnat.',
  },
  zh: {
    title: '马略卡高尔夫｜上海 11 年经验 · 普通话 · 抖音',
    description:
      '由曾在上海执教 11 年、普通话流利并在抖音拥有大量高尔夫内容的 Andy Griffiths 安排马略卡私人高尔夫球日。畅打 Son Gual、Alcanada 等球场，一切细节均已安排妥当。',
  },
}

const GOLF_COURSES_METADATA = {
  en: {
    title: 'Mallorca Courses - Reviews & Fees',
    socialImage: '/images/golf-courses.jpg',
    description:
      'All 24 Mallorca golf courses: green fees €55–€250, difficulty, regions, and which fits your trip.',
  },
  de: {
    title: '24 Golfplätze - Gebühren & Tipps',
    description:
      '24 Golfplätze auf Mallorca: Gebühren €55–€250, Schwierigkeit, Regionen, welcher passt zu Ihnen.',
  },
  es: {
    title: '24 Campos - Guía Completa',
    description:
      '24 campos de golf en Mallorca: green fees €55–€250, dificultad, zonas, cuál te conviene.',
  },
  fr: {
    title: '24 Parcours - Guide Complet',
    description:
      '24 parcours à Majorque: green fees €55–€250, difficulté, régions, lequel vous convient.',
  },
  nl: {
    title: '24 Banen - Gids & Greenfees',
    description:
      '24 banen op Mallorca: greenfees €55–€250, moeilijkheid, regio\'s, welke past bij u.',
  },
  sv: {
    title: '24 Banor - Guide & Avgifter',
    description:
      '24 banor på Mallorca: greenavgifter €55–€250, svårighet, regioner, vilken passar dig.',
  },
  zh: {
    title: '马略卡高尔夫球场指南 2026 - 岛上全部球场',
    description:
      '马略卡高尔夫完整指南，涵盖全部 24 座球场，包含绿费信息、难度评级及岛上 PGA 职业教练的真实推荐。2026 年最新版。',
  },
}

const GUIDES_INDEX_METADATA = {
  en: {
    title: 'Golf Guide - Reviews, Tips & Advice',
    description:
      'Golf guides for Mallorca by a PGA pro: course reviews, green fees, trip planning, best time to visit.',
  },
  de: {
    title: 'Golf Guide - Tipps & Bewertungen',
    description:
      'Golfratgeber f\u00fcr Mallorca von PGA Pro: Reviews, Geb\u00fchren, Reiseplanning.',
  },
  es: {
    title: 'Guía Golf - Consejos & Análisis',
    description:
      'Guías de golf en Mallorca de PGA Pro: análisis, green fees, planificación de viaje.',
  },
  fr: {
    title: 'Guide Golf - Conseils & Avis',
    description:
      'Guide golf à Majorque par PGA Pro: avis, green fees, planification de voyage.',
  },
  nl: {
    title: 'Golfgids - Tips & Beoordelingen',
    description:
      'Golfgids voor Mallorca van PGA Pro: reviews, greenfees, reisplanning.',
  },
  sv: {
    title: 'Golfguide - Tips & Omdömen',
    description:
      'Golfguide för Mallorca av PGA Pro: omdömen, greenavgifter, reseplanering.',
  },
  zh: {
    title: '高尔夫指南 - 评测与建议',
    description:
      '高尔夫真实指南，包含球场评测、绿费参考及行程规划建议。',
  },
}

const ABOUT_METADATA = {
  en: {
    title: 'Andy Griffiths - PGA Pro, Mallorca',
    socialTitle: 'About Andy Griffiths - PGA Pro, Mallorca',
    socialImage: '/images/about-andy-colour.jpg',
    description:
      'PGA Pro based in Mallorca. Experience: Pebble Beach, Evian, 11 years coaching in China.',
  },
  de: {
    title: 'Andy Griffiths - PGA Pro Mallorca',
    description:
      'PGA Pro auf Mallorca. Früher: Pebble Beach, Evian, 11 Jahre Coaching in China.',
  },
  es: {
    title: 'Andy Griffiths - PGA Pro Mallorca',
    description:
      'PGA Pro en Mallorca. Anterior: Pebble Beach, Evian, 11 años coaching en China.',
  },
  fr: {
    title: 'Andy Griffiths - PGA Pro Majorque',
    description:
      'PGA Pro à Majorque. Avant: Pebble Beach, Evian, 11 ans coaching en Chine.',
  },
  nl: {
    title: 'Andy Griffiths - PGA Pro Mallorca',
    description:
      'PGA Pro op Mallorca. Eerder: Pebble Beach, Evian, 11 jaar coaching in China.',
  },
  sv: {
    title: 'Andy Griffiths - PGA Pro Mallorca',
    description:
      'PGA Pro på Mallorca. Tidigare: Pebble Beach, Evian, 11 år coaching i Kina.',
  },
  zh: {
    title: '关于 Andy Griffiths - PGA 职业教练',
    description:
      'PGA 职业教练驻马略卡。曾执教于 Pebble Beach、Evian，11 年中国教学经验。',
  },
}

const COACHING_METADATA = {
  en: {
    title: 'Golf Coaching Mallorca - PGA Pro',
    description:
      'On-course coaching with PGA pro Andy Griffiths. Real improvement in real conditions, for visiting and resident golfers.',
  },
  de: {
    title: 'Golf Coaching Mallorca - PGA Pro',
    description:
      'On-course coaching auf Mallorca mit PGA Pro Andy Griffiths. Echte Verbesserung unter echten Bedingungen.',
  },
  es: {
    title: 'Coaching Golf Mallorca - PGA Pro',
    description:
      'Coaching en campo en Mallorca con PGA Pro Andy Griffiths. Mejora real en condiciones reales.',
  },
  fr: {
    title: 'Coaching Golf Majorque - PGA Pro',
    description:
      'Coaching sur parcours à Majorque avec PGA Pro Andy Griffiths. Amélioration réelle en conditions réelles.',
  },
  nl: {
    title: 'Golfcoaching Mallorca - PGA Pro',
    description:
      'On-course coaching op Mallorca met PGA Pro Andy Griffiths. Echte verbetering in echte omstandigheden.',
  },
  sv: {
    title: 'Golfcoaching Mallorca - PGA Pro',
    description:
      'On-course coaching i Mallorca med PGA Pro Andy Griffiths. Verklig förbättring i verkliga förhållanden.',
  },
  zh: {
    title: '马略卡高尔夫教学 - PGA 职业教练',
    description:
      '马略卡球场实地教学，由 PGA 职业教练 Andy Griffiths 指导。真实进步，真实条件。',
  },
}

const PLAY_WITH_A_PRO_EXPLAINED_METADATA = {
  en: {
    title: 'What "Play With A Pro" Looks Like',
    socialImage: '/images/client-son-gual-banner.jpg',
    description:
      'A PGA pro joins your group for a full round: reading greens, managing wind, and improving your decisions in real time.',
  },
  de: {
    title: 'Das steckt hinter „Play With A Pro“',
    description:
      'Ein PGA-Profi begleitet Ihre Gruppe eine ganze Runde: Grünlesen, Windeinschätzung und bessere Entscheidungen in Echtzeit. So sieht der Tag konkret aus.',
  },
  es: {
    title: 'Así es un día "Play With A Pro"',
    description:
      'Un profesional PGA juega con su grupo una vuelta completa: lectura de greens, gestión del viento y mejores decisiones en tiempo real.',
  },
  fr: {
    title: 'À quoi ressemble « Play With A Pro »',
    description:
      'Un professionnel PGA rejoint votre groupe pour un parcours complet : lecture des greens, gestion du vent et meilleures décisions en temps réel.',
  },
  nl: {
    title: 'Zo werkt "Play With A Pro" in de praktijk',
    description:
      'Een PGA-professional speelt een volledige ronde met uw groep: greens lezen, wind inschatten en betere beslissingen in real time.',
  },
  sv: {
    title: 'Så här ser "Play With A Pro" verkligen ut',
    description:
      'Ett PGA-proffs följer med din grupp under en hel runda: läser greener, hanterar vind och förbättrar dina beslut i realtid. Så här ser dagen ut i praktiken.',
  },
  zh: {
    title: '「Play With A Pro」真实体验详解',
    description:
      'PGA职业教练全程陪同您的团队完成一整场比赛：读果岭、判断风向，实时提升您的决策能力。这就是这一天的真实样子。',
  },
}

export function buildPlayWithAProExplainedMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/guides/play-with-a-pro-explained' : `/${locale}/guides/play-with-a-pro-explained`,
    locale,
    PLAY_WITH_A_PRO_EXPLAINED_METADATA[locale] || PLAY_WITH_A_PRO_EXPLAINED_METADATA.en,
  )
}

const PLAY_WITH_A_PRO_METADATA = {
  en: {
    title: 'Play With A Pro - Golf Day in Mallorca',
    socialImage: '/images/andy-coaching-client.jpg',
    description: getPlayWithAProMetadataDescription('en'),
    keywords: [
      'golf pro Mallorca',
      'play with a golf pro Mallorca',
      'play golf with a pro Majorca',
      'Mallorca golf pro',
      'PGA golf pro Mallorca',
    ],
  },
  de: {
    title: 'Mit Pro spielen - Mallorca Golf',
    description: getPlayWithAProMetadataDescription('de'),
  },
  es: {
    title: 'Jugar con Pro - Golf Mallorca',
    description: getPlayWithAProMetadataDescription('es'),
  },
  fr: {
    title: 'Jouer avec Pro - Golf Majorque',
    description: getPlayWithAProMetadataDescription('fr'),
  },
  nl: {
    title: 'Spelen met Pro - Golfdag',
    description: getPlayWithAProMetadataDescription('nl'),
  },
  sv: {
    title: 'Spela med Pro - Mallorca Golf',
    description: getPlayWithAProMetadataDescription('sv'),
  },
  zh: {
    title: '与职业教练同场竞技',
    description: getPlayWithAProMetadataDescription('zh'),
  },
}

const CONTACT_METADATA = {
  en: {
    title: 'Contact Andy Griffiths - Golf Enquiry',
    description:
      'Share your dates, handicap, hotel area, and goals. Get a personal reply within 24 hours via email or WhatsApp.',
  },
  de: {
    title: 'Kontakt - Golf Anfrage',
    description:
      'Teilen Sie Ihre Daten, Handicap und Ziele mit. Persönliche Antwort innerhalb von 24 Stunden.',
  },
  es: {
    title: 'Contacto - Consulta Golf',
    description:
      'Comparta sus fechas, handicap y objetivos. Respuesta personal dentro de 24 horas.',
  },
  fr: {
    title: 'Contact - Demande Golf',
    description:
      'Partagez vos dates, handicap et objectifs. Réponse personnelle sous 24 heures.',
  },
  nl: {
    title: 'Contact - Golfverzoek',
    description:
      'Deel je data, handicap en doelen. Persoonlijk antwoord binnen 24 uur.',
  },
  sv: {
    title: 'Kontakt - Golfförfrågan',
    description:
      'Dela dina datum, handicap och mål. Personligt svar inom 24 timmar.',
  },
  zh: {
    title: '联系我们 - 高尔夫咨询',
    description:
      '分享您的日期、差点和目标。24 小时内获得个人回复。',
  },
}

const PLAN_YOUR_TRIP_METADATA = {
  en: {
    title: 'Plan Your Golf Trip - Courses & Tee Times',
    socialImage: '/images/plan-your-trip-hero.jpg',
    description:
      'Use our course finder or ask Andy to plan your Mallorca trip: courses, base, routing, tee times, buggies, rentals, dining.',
  },
  de: {
    title: 'Golfreise planen - Mallorca',
    description:
      'Plätze, Basis, Route, Startzeiten, Buggys, Leihschläger und Restaurants - Andy plant Ihre Golfreise.',
  },
  es: {
    title: 'Planificar viaje golf - Mallorca',
    description:
      'Campos, base, ruta, tee times, buggies, alquiler y restaurantes - Andy planifica su viaje.',
  },
  fr: {
    title: 'Planifier séjour golf - Majorque',
    description:
      'Parcours, base, itinéraire, heures de départ, buggys, location et repas - Andy planifie votre séjour.',
  },
  nl: {
    title: 'Golftrip plannen - Mallorca',
    description:
      'Banen, basis, route, starttijden, buggys, clubhuur en restaurants - Andy plant uw reis.',
  },
  sv: {
    title: 'Planera golfresa - Mallorca',
    description:
      'Banor, bas, rutt, starttider, golfbilar, klubbor och mat - Andy planerar din resa.',
  },
  zh: {
    title: '规划高尔夫之旅 - 马略卡',
    description:
      '球场、住宿、路线、开球时间、球车、租赁和餐饮 - Andy 为您规划行程。',
  },
}

const SUBSCRIBE_METADATA = {
  en: {
    title: 'Golf Insights from Mallorca - Newsletter',
    description:
      'Join our mailing list for Mallorca golf insights, course reviews, and trip planning tips from a PGA pro.',
  },
  de: {
    title: 'Golf Newsletter - Mallorca Insights',
    description:
      'Golf-Einblicke, Platz-Bewertungen und Reiseplanung von PGA Pro aus Mallorca.',
  },
  es: {
    title: 'Newsletter Golf - Perspectivas Mallorca',
    description:
      'Perspectivas de golf, reseñas de campos y consejos de viaje de PGA Pro.',
  },
  fr: {
    title: 'Infolettre Golf - Perspectives Majorque',
    description:
      'Perspectives golf, avis sur les parcours et conseils de voyage de PGA Pro.',
  },
  nl: {
    title: 'Golfnieuwsbrief - Mallorca Inzichten',
    description:
      'Golfinzichten, baanbeoordelingen en reisadviezen van PGA Pro.',
  },
  sv: {
    title: 'Golfnyhetsbrev - Mallorca Inblickar',
    description:
      'Golfinblickar, banavgifter och reseplaneringsråd från PGA Pro.',
  },
  zh: {
    title: '高尔夫简报 - 马略卡资讯',
    description:
      '来自 PGA 职业教练的高尔夫资讯、球场评测和行程规划建议。',
  },
}

const LEGAL_METADATA = {
  'privacy-policy': {
    en: {
      title: 'Privacy Policy',
      description:
        'Privacy policy for Mr Mallorca Golf. How we collect, use, and protect your personal data in accordance with GDPR and Spanish data protection law.',
    },
    es: {
      title: 'Privacidad',
      description:
        'Política de privacidad: cómo recopilamos, usamos y protegemos tus datos conforme a RGPD.',
    },
    de: {
      title: 'Datenschutzerklärung',
      description:
        'Datenschutzerklärung von Mr Mallorca Golf: wie wir Ihre Daten gemäß DSGVO erheben, nutzen und schützen.',
    },
    fr: {
      title: 'Politique de confidentialité',
      description:
        'Politique de confidentialité de Mr Mallorca Golf : comment nous collectons, utilisons et protégeons vos données conformément au RGPD.',
    },
  },
  terms: {
    en: {
      title: 'Terms and Conditions',
      description:
        'Terms and conditions for Mr Mallorca Golf experiences and services in Mallorca, Spain.',
    },
    es: {
      title: 'Términos y Condiciones',
      description:
        'Términos y condiciones de servicios de Mr Mallorca Golf en Mallorca.',
    },
    de: {
      title: 'Allgemeine Geschäftsbedingungen',
      description:
        'Allgemeine Geschäftsbedingungen für Mr Mallorca Golf Erlebnisse und Leistungen auf Mallorca, Spanien.',
    },
    fr: {
      title: 'Conditions générales',
      description:
        'Conditions générales des expériences et services Mr Mallorca Golf à Majorque, Espagne.',
    },
  },
}

export function buildPageMetadata(pathname, locale, overrides = {}) {
  // `socialTitle` is an optional override for the og/twitter title only. The SEO
  // `title` is capped by the 60-char SERP budget (raw title + ' | Mr Mallorca Golf');
  // social cards have no such limit, so a page can read fuller there. `socialImage`
  // is an optional /images/... path override for the same cards, replacing the
  // generic default with a photo specific to the page. Both are consumed here,
  // never forwarded to Next's metadata object.
  const { socialTitle, socialImage: socialImagePath, ...pageOverrides } = overrides
  const localePath = buildLocalePath(stripLocaleFromPath(pathname), locale)
  const alternates = getAlternates(localePath)
  const seoTitle = typeof pageOverrides.title === 'string' ? pageOverrides.title : undefined
  const title = typeof socialTitle === 'string' ? socialTitle : seoTitle
  const description = typeof pageOverrides.description === 'string' ? pageOverrides.description : undefined
  const pageUrl = `${SITE_ORIGIN}${localePath}`
  const openGraphLocale = OPEN_GRAPH_LOCALES[locale] || OPEN_GRAPH_LOCALES.en
  const openGraphAltLocales = OPEN_GRAPH_ALT_LOCALES.filter((candidate) => candidate !== openGraphLocale)
  const defaultSocialImage = getSocialImage(locale)
  const socialImage = typeof socialImagePath === 'string'
    ? { ...defaultSocialImage, url: `${SITE_ORIGIN}${socialImagePath}` }
    : defaultSocialImage
  const openGraph = pageOverrides.openGraph || (title || description
    ? {
        type: 'website',
        url: pageUrl,
        siteName: 'Mr Mallorca Golf',
        locale: openGraphLocale,
        alternateLocale: openGraphAltLocales,
        images: [socialImage],
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
      }
    : undefined)
  const twitter = pageOverrides.twitter || (title || description
    ? {
        card: 'summary_large_image',
        images: [socialImage.url],
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
      }
    : undefined)

  return {
    ...pageOverrides,
    alternates,
    ...(openGraph ? { openGraph } : {}),
    ...(twitter ? { twitter } : {}),
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
  badge = 'Course Review',
  publishedTime = '2026-03-01',
}) {
  const pathname = locale === 'en' ? `/guides/${slug}` : `/${locale}/guides/${slug}`
  const jpegImagePath = imagePath.replace(/\.webp$/i, '.jpg')
  const ogImageUrl = jpegImagePath.startsWith('http') ? jpegImagePath : `${SITE_ORIGIN}${jpegImagePath}`

  const metadata = {
    title,
    description,
    openGraph: {
      type: 'article',
      url: `${SITE_ORIGIN}${pathname}`,
      locale: OPEN_GRAPH_LOCALES[locale] || OPEN_GRAPH_LOCALES.en,
      alternateLocale: OPEN_GRAPH_ALT_LOCALES.filter(
        (candidate) => candidate !== (OPEN_GRAPH_LOCALES[locale] || OPEN_GRAPH_LOCALES.en),
      ),
      title,
      description,
      publishedTime,
      authors: ['Andy Griffiths'],
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  }

  return buildPageMetadata(pathname, locale, metadata)
}

export function buildAboutMetadata(locale = 'en') {
  return buildPageMetadata(locale === 'en' ? '/about' : `/${locale}/about`, locale, ABOUT_METADATA[locale] || ABOUT_METADATA.en)
}

function buildCoachingMetadata(locale = 'en') {
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

export function buildPlanYourTripMetadata(locale = 'en') {
  return buildPageMetadata(
    locale === 'en' ? '/plan-your-trip' : `/${locale}/plan-your-trip`,
    locale,
    PLAN_YOUR_TRIP_METADATA[locale] || PLAN_YOUR_TRIP_METADATA.en,
  )
}

function buildSubscribeMetadata(locale = 'en') {
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
