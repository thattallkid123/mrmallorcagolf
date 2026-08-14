import { normalizeMojibakeDeep } from './text-normalization.js'

const OFFER_IDS = {
  solo: 'pwap-solo',
  group: 'pwap-group',
  premium: 'signature-day',
  undecided: 'not-sure',
}

const OFFER_CONTENT = {
  en: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Play With A Pro in Mallorca (Majorca): an 18-hole day with PGA Advanced Professional Andy Griffiths. Solo from €695, groups from €950 total, green fees additional.',
    playHeroBody:
      'Play With A Pro: on-course coaching, course strategy, and real game improvement on the right Mallorca course for you.',
    playMultiDayDetail: null,
    homeMultiDayBody:
      'Use the basic tool for course ideas. If you want the real plan, I can handle course choice, base, routing, tee times, buggies, rentals, dining suggestions, and whether Play With A Pro belongs in the trip.',
    contactUnknown: 'Not sure yet - advise me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy - Solo',
        priceDisplay: '€695',
        priceNumeric: '695',
        contactPrice: '€695',
        structuredDescription: "Full day with PGA Advanced Professional Andy Griffiths. Andy's fee for the day. Green fee additional, confirmed when we speak.",
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Group',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy - Group',
        priceDisplay: '€950 total',
        priceNumeric: '950',
        contactPrice: '€950 total',
        structuredDescription: 'Full day for groups of up to 3 with PGA Advanced Professional Andy Griffiths. One fixed day rate. Green fees confirmed separately.',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Signature Day',
        contactPrice: 'On request',
        structuredName: 'Signature Day',
        structuredDescription: 'A privately arranged golf day with Andy Griffiths, a post-round recovery and sports-performance session with John Brazier, private transfers, and a coordinated evening. Pricing confirmed after the first conversation.',
      },
    },
  },
  de: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Ein Golftag auf Mallorca an der Seite von Andy Griffiths. Solo ab €695. Gruppen ab €950 insgesamt. Greenfees zusätzlich.',
    playHeroBody:
      'Ein Platz. Ein ganzer Tag an der Seite eines PGA Advanced Professionals, der alles organisiert hat. Solo ab €695. Gruppen ab €950 insgesamt. Greenfees zusätzlich, werden bei der Anfrage bestätigt.',
    playMultiDayDetail:
      'Signature Day. Ein privater Golftag mit Andy, einer Session mit John Brazier, privaten Transfers und einem koordinierten Abend. Der Preis wird nach dem ersten Gespraech bestaetigt, sobald der Tag Form hat.',
    homeMultiDayBody:
      'Signature Day - ein privater Golftag mit Andy, John Brazier, Transfers und einem koordinierten Abend. Preis nach Umfang des Tages.',
    contactUnknown: 'Noch unsicher - beraten Sie mich',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Solo',
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Gruppe',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Gruppe',
        priceDisplay: '€950 insgesamt',
        contactPrice: '€950 insgesamt',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Der volle Andy Tag',
        contactPrice: 'Auf Anfrage',
      },
    },
  },
  es: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Un día de golf en Mallorca junto a Andy Griffiths. Solo desde €695. Grupos desde €950 en total. Green fees adicionales.',
    playHeroBody:
      'Un campo. Un día completo junto a un PGA Advanced Professional que lo ha organizado todo. Solo desde €695. Grupos desde €950 en total. Green fees adicionales, confirmados cuando hablemos.',
    playMultiDayDetail:
      'Signature Day. Un dia privado de golf con Andy, una sesión con John Brazier, traslados privados y una noche coordinada. El precio se confirma después de la primera conversacion, cuando el dia tiene forma.',
    homeMultiDayBody:
      'Signature Day - un dia privado de golf con Andy, John Brazier, traslados y una noche coordinada. Precio según el dia.',
    contactUnknown: 'Aún no lo sé - aconséjeme',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Solo',
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Grupo',
        priceDisplay: '€950 en total',
        contactPrice: '€950 en total',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'El Día Andy Completo',
        contactPrice: 'Bajo consulta',
      },
    },
  },
  fr: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Une journée de golf à Majorque aux côtés d\'Andy Griffiths. Solo à partir de €695. Groupes à partir de €950 au total. Green fees additionnels.',
    playHeroBody:
      'Un parcours. Une journée complète aux côtés d\'un PGA Advanced Professional qui a tout organisé. En solo à partir de €695. Groupes à partir de €950 au total. Green fees additionnels, confirmés lors de notre conversation.',
    playMultiDayDetail:
      'Signature Day. Une journée de golf privee avec Andy, une session avec John Brazier, des transferts prives et une soiree coordonnee. Le tarif est confirme après la première conversation, lorsque le cadre de la journée est clair.',
    homeMultiDayBody:
      'Signature Day - une journée de golf privee avec Andy, John Brazier, des transferts prives et une soiree coordonnee. Tarif adapte a la journée.',
    contactUnknown: 'Je ne suis pas encore certain(e) - conseillez-moi',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Solo',
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groupe',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Groupe',
        priceDisplay: '€950 au total',
        contactPrice: '€950 au total',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'La Journée Andy Complète',
        contactPrice: 'Sur demande',
      },
    },
  },
  nl: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Een golfdag op Mallorca aan de zijde van Andy Griffiths. Solo vanaf €695. Groepen vanaf €950 in totaal. Greenfees bijkomend.',
    playHeroBody:
      'Eén baan. Een volledige dag naast een PGA Advanced Professional die alles heeft geregeld. Solo vanaf €695. Groepen vanaf €950 in totaal. Greenfees bijkomend, bevestigd wanneer we spreken.',
    playMultiDayDetail:
      'Signature Day. Een prive golfdag met Andy, een sessie met John Brazier, prive transfers en een georganiseerde avond. De prijs wordt bevestigd na het eerste gesprek, zodra de dag vorm heeft.',
    homeMultiDayBody:
      'Signature Day - een prive golfdag met Andy, John Brazier, transfers en een georganiseerde avond. Prijs afgestemd op de dag.',
    contactUnknown: 'Nog niet zeker - adviseer me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Solo',
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groep',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Groep',
        priceDisplay: '€950 totaal',
        contactPrice: '€950 totaal',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'De Volledige Andy Dag',
        contactPrice: 'Op aanvraag',
      },
    },
  },
  sv: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'En golfdag på Mallorca tillsammans med Andy Griffiths. Solo från €695. Grupper från €950 totalt. Green fees tillkommer.',
    playHeroBody:
      'En bana. En hel dag tillsammans med en PGA Advanced Professional som har ordnat allt. Solo från €695. Grupper från €950 totalt. Green fees tillkommer, bekräftas när vi pratar.',
    playMultiDayDetail:
      'Signature Day. En privat golfdag med Andy, en session med John Brazier, privata transfers och en koordinerad kvall. Priset bekraftas efter första samtalet, när dagen har form.',
    homeMultiDayBody:
      'Signature Day - en privat golfdag med Andy, John Brazier, transfers och en koordinerad kvall. Pris anpassat efter dagen.',
    contactUnknown: 'Inte säker ännu - ge mig råd',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Solo',
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupp',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Grupp',
        priceDisplay: '€950 totalt',
        contactPrice: '€950 totalt',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Den Fullständiga Andy-dagen',
        contactPrice: 'Pa forfragan',
      },
    },
  },
  zh: {
    statSoloLabel: '单人',
    playWithAProMeta:
      '与马略卡职业高尔夫教练安迪·格里菲斯共度一天的高尔夫时光。单人 €695。小组从 €950 总计起。果岭费另计。',
    playHeroBody:
      '一座球场。一整天与一位已经把一切都安排好的 PGA Advanced Professional 同组下场。单人方案 €695。小组从 €950 总计起，果岭费另计。',
    playMultiDayDetail:
      'Signature Day：与 Andy 同打私人高尔夫日，包含 John Brazier 环节、私人接送和晚间协调。第一次沟通后，等当天范围清楚再确认价格。',
    homeMultiDayBody:
      'Signature Day - 与 Andy 同打私人高尔夫日，包含 John Brazier 环节、私人接送和晚间协调。按当天范围报价。',
    contactUnknown: '暂时不确定 - 请给我建议',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: '单人',
        displayName: '与 Andy 共度一天',
        fullLabel: '与 Andy 共度一天 - 单人',
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: '小组',
        displayName: '与 Andy 共度一天',
        fullLabel: '与 Andy 共度一天 - 小组',
        priceDisplay: '€950 总计',
        contactPrice: '€950 总计',
      },
      [OFFER_IDS.premium]: {
        fullLabel: '完整的 Andy 日',
        contactPrice: '按需报价',
      },
    },
  },
}

function getOfferLocale(locale = 'en') {
  return normalizeMojibakeDeep(OFFER_CONTENT[locale] || OFFER_CONTENT.en)
}

function getOfferCopy(locale = 'en') {
  return getOfferLocale(locale)
}

export function getOfferById(id, locale = 'en') {
  const localeContent = getOfferLocale(locale)
  return localeContent.offers[id] || OFFER_CONTENT.en.offers[id]
}

export function getHomepageSoloStat(locale = 'en') {
  return {
    value: getOfferById(OFFER_IDS.solo, locale).priceDisplay,
    label: getOfferLocale(locale).statSoloLabel,
  }
}

export function getContactExperienceOptions(locale = 'en') {
  const localeContent = getOfferLocale(locale)
  return [
    [
      OFFER_IDS.solo,
      getOfferById(OFFER_IDS.solo, locale).fullLabel,
      getOfferById(OFFER_IDS.solo, locale).contactPrice,
    ],
    [
      OFFER_IDS.group,
      getOfferById(OFFER_IDS.group, locale).fullLabel,
      getOfferById(OFFER_IDS.group, locale).contactPrice,
    ],
    [
      OFFER_IDS.premium,
      getOfferById(OFFER_IDS.premium, locale).fullLabel,
      getOfferById(OFFER_IDS.premium, locale).contactPrice,
    ],
    [OFFER_IDS.undecided, localeContent.contactUnknown, ''],
  ]
}

export function getExperienceLabel(id, locale = 'en') {
  if (id === OFFER_IDS.undecided) return getOfferLocale(locale).contactUnknown
  return getOfferById(id, locale).fullLabel
}

export function getStructuredOfferCatalog() {
  return [
    {
      '@type': 'Offer',
      name: `Solo - ${getOfferById(OFFER_IDS.solo, 'en').displayName}`,
      description: getOfferById(OFFER_IDS.solo, 'en').structuredDescription,
      price: getOfferById(OFFER_IDS.solo, 'en').priceNumeric,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: `Group - ${getOfferById(OFFER_IDS.group, 'en').displayName}`,
      description: getOfferById(OFFER_IDS.group, 'en').structuredDescription,
      price: getOfferById(OFFER_IDS.group, 'en').priceNumeric,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: getOfferById(OFFER_IDS.premium, 'en').structuredName,
      description: getOfferById(OFFER_IDS.premium, 'en').structuredDescription,
      priceCurrency: 'EUR',
    },
  ]
}

export function getPlayWithAProMetadataDescription(locale = 'en') {
  return getOfferLocale(locale).playWithAProMeta
}

export function getPlayHeroBody(locale = 'en') {
  return getOfferLocale(locale).playHeroBody
}

export function getPlayMultiDayDetail(locale = 'en') {
  return getOfferLocale(locale).playMultiDayDetail
}

export function getHomeMultiDayBody(locale = 'en') {
  return getOfferLocale(locale).homeMultiDayBody
}

export { OFFER_IDS }
