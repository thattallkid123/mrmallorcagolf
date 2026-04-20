const OFFER_IDS = {
  solo: 'mallorca-round',
  group: 'signature-day',
  premium: 'full-andy-day',
  undecided: 'not-sure',
}

const OFFER_CONTENT = {
  en: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'A private golf day in Mallorca, played alongside UK PGA Advanced Professional Andy Griffiths. Solo from €495. Groups from €950. Green fees additional.',
    playHeroBody:
      'One course. A full day alongside a PGA Advanced Professional who has arranged everything. Solo from €495. Groups from €950. Green fees additional, confirmed when we speak.',
    playMultiDayDetail:
      "The Full Andy Day. One day, one course, everything arranged. From €3,000. No logistics, no decisions, nothing to organise on arrival. Depending on what you want from the day, this can include a caddy, a videographer, Michelin lunch, private transfers, spa access, a premium rental set. Andy coordinates everything in advance and confirms the full itinerary with you before you arrive.",
    homeMultiDayBody:
      'The Full Andy Day -one course, everything arranged. No logistics, no decisions, nothing to organise on arrival. From €3,000.',
    contactUnknown: 'Not sure yet - advise me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy -Solo',
        priceDisplay: '€495',
        priceNumeric: '495',
        contactPrice: '€495',
        structuredDescription: "Private full day with PGA Professional Andy Griffiths. Andy's fee for the day. Green fee additional, confirmed when we speak.",
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Group',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy - Group',
        priceDisplay: '€950',
        priceNumeric: '950',
        contactPrice: '€950',
        structuredDescription: 'Full day for groups of up to 3 with PGA Professional. One fixed day rate for Andy. Green fees confirmed separately.',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'The Full Andy Day',
        contactPrice: 'From €3,000',
        structuredName: 'The Full Andy Day',
        structuredDescription: 'Everything included. Private tee time, caddy, videographer, Michelin dining, private transfers, spa access, premium equipment. Bespoke itinerary on enquiry.',
      },
    },
  },
  de: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Ein privater Golftag auf Mallorca an der Seite von Andy Griffiths. Solo ab €495. Gruppen ab €950. Greenfees zusätzlich.',
    playHeroBody:
      'Ein Platz. Ein ganzer Tag an der Seite eines PGA Advanced Professionals, der alles organisiert hat. Solo ab €495. Gruppen ab €950. Greenfees zusätzlich, werden bei der Anfrage bestätigt.',
    playMultiDayDetail:
      'Der volle Andy Tag. Ein Tag, ein Platz, alles ist arrangiert. Ab €3.000. Keine Logistik, keine Entscheidungen, nichts zum Organisieren bei der Ankunft. Je nachdem, was Sie vom Tag erwarten, kann dies einen Caddie, einen Videografen, Michelin-Lunch, private Transfers, Spa-Zugang, ein Premium-Leih-Set beinhalten. Andy koordiniert alles im Voraus und bestätigt das vollständige Programm mit Ihnen vor Ihrer Ankunft.',
    homeMultiDayBody:
      'Der volle Andy Tag -ein Platz, alles ist arrangiert. Keine Logistik, keine Entscheidungen, nichts zum Organisieren. Ab €3.000.',
    contactUnknown: 'Noch unsicher - beraten Sie mich',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Solo',
        priceDisplay: '€495',
        contactPrice: '€495',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Gruppe',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Gruppe',
        priceDisplay: '€950',
        contactPrice: '€950',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Der volle Andy Tag',
        contactPrice: 'Ab €3.000',
      },
    },
  },
  es: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Un día privado de golf en Mallorca junto a Andy Griffiths. Solo desde €495. Grupos desde €950. Green fees adicionales.',
    playHeroBody:
      'Un campo. Un día completo junto a un PGA Advanced Professional que lo ha organizado todo. Solo desde €495. Grupos desde €950. Green fees adicionales, confirmados cuando hablemos.',
    playMultiDayDetail:
      'El Día Andy Completo. Un día, un campo, todo está organizado. Desde €3.000. Sin logística, sin decisiones, nada que organizar a tu llegada. Dependiendo de lo que quieras del día, esto puede incluir un caddie, un videógrafo, almuerzo Michelin, traslados privados, acceso a spa, equipo de alquiler premium. Andy coordina todo por adelantado y confirma el itinerario completo contigo antes de tu llegada.',
    homeMultiDayBody:
      'El Día Andy Completo -un campo, todo está organizado. Sin logística, sin decisiones, nada que organizar. Desde €3.000.',
    contactUnknown: 'Aún no lo sé - aconséjeme',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Solo',
        priceDisplay: '€495',
        contactPrice: '€495',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Grupo',
        priceDisplay: '€950',
        contactPrice: '€950',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'El Día Andy Completo',
        contactPrice: 'Desde €3.000',
      },
    },
  },
  fr: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Une journee de golf privee a Majorque aux cotes d\'Andy Griffiths. Solo a partir de €495. Groupes a partir de €950. Green fees additionnels.',
    playHeroBody:
      'Un parcours. Une journee complete aux cotes d\'un PGA Advanced Professional qui a tout organise. En solo a partir de 495 EUR. Groupes a partir de 950 EUR. Green fees additionnels, confirmes lors de notre conversation.',
    playMultiDayDetail:
      'La Journee Andy Complete. Un jour, un parcours, tout est organise. A partir de 3 000 EUR. Pas de logistique, pas de decisions, rien a organiser a votre arrivee. Selon ce que vous souhaitez de cette journee, cela peut inclure un caddie, un videographe, un dejeuner Michelin, des transferts prives, acces au spa, un equipement de location premium. Andy coordonne tout a l\'avance et confirme l\'itineraire complet avec vous avant votre arrivee.',
    homeMultiDayBody:
      'La Journee Andy Complete -un parcours, tout est organise. Pas de logistique, pas de decisions, rien a organiser. A partir de 3 000 EUR.',
    contactUnknown: 'Je ne suis pas encore certain(e) - conseillez-moi',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Solo',
        priceDisplay: '€495',
        contactPrice: '€495',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groupe',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Groupe',
        priceDisplay: '€950',
        contactPrice: '€950',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'La Journee Andy Complete',
        contactPrice: 'A partir de 3 000 EUR',
      },
    },
  },
  nl: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Een privé-golfdag op Mallorca aan de zijde van Andy Griffiths. Solo vanaf €495. Groepen vanaf €950. Greenfees bijkomend.',
    playHeroBody:
      'Eén baan. Een volledige dag naast een PGA Advanced Professional die alles heeft geregeld. Solo vanaf €495. Groepen vanaf €950. Greenfees bijkomend, bevestigd wanneer we spreken.',
    playMultiDayDetail:
      'De Volledige Andy Dag. Eén dag, één baan, alles is geregeld. Vanaf €3.000. Geen logistiek, geen beslissingen, niets om te organiseren bij aankomst. Afhankelijk van wat je van de dag wilt, kan dit een caddie, videograaf, Michelin-lunch, privévervoer, spavergoeging, premium verhuurapparatuur omvatten. Andy coördineert alles vooraf en bevestigt het volledige programma met je vóór je aankomst.',
    homeMultiDayBody:
      'De Volledige Andy Dag -eén baan, alles is geregeld. Geen logistiek, geen beslissingen, niets om te organiseren. Vanaf €3.000.',
    contactUnknown: 'Nog niet zeker - adviseer me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Solo',
        priceDisplay: '€495',
        contactPrice: '€495',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groep',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Groep',
        priceDisplay: '€950',
        contactPrice: '€950',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'De Volledige Andy Dag',
        contactPrice: 'Vanaf €3.000',
      },
    },
  },
  sv: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'En privat golfdag på Mallorca tillsammans med Andy Griffiths. Solo från €495. Grupper från €950. Green fees tillkommer.',
    playHeroBody:
      'En bana. En hel dag tillsammans med en PGA Advanced Professional som har ordnat allt. Solo från €495. Grupper från €950. Green fees tillkommer, bekräftas när vi pratar.',
    playMultiDayDetail:
      'Den Fullständiga Andy-dagen. En dag, en bana, allt är ordnat. Från €3.000. Ingen logistik, inga beslut, inget att organisera vid ankomst. Beroende på vad du vill från dagen kan detta innefatta en caddie, en videograf, Michelin-lunch, privata transfers, spa-tillgång, premiumklubbor för uthyrning. Andy koordinerar allt på förhand och bekräftar det fullständiga programmet med dig innan du anländer.',
    homeMultiDayBody:
      'Den Fullständiga Andy-dagen -en bana, allt är ordnat. Ingen logistik, inga beslut, inget att organisera. Från €3.000.',
    contactUnknown: 'Inte säker ännu - ge mig råd',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Solo',
        priceDisplay: '€495',
        contactPrice: '€495',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupp',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Grupp',
        priceDisplay: '€950',
        contactPrice: '€950',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Den Fullständiga Andy-dagen',
        contactPrice: 'Från €3.000',
      },
    },
  },
  zh: {
    statSoloLabel: '单人',
    playWithAProMeta:
      'A private golf day in Mallorca alongside Andy Griffiths. Solo €495. Groups from €950. Green fees additional.',
    playHeroBody:
      '一座球场。一整天与一位已经把一切都安排好的 PGA Advanced Professional 同组下场。单人方案 €495。小组从 €950 起，果岭费另计。',
    playMultiDayDetail:
      '完整的 Andy 日：一个球场，所有安排妥当。€3,000 起。没有物流，没有决定，到达时无需组织任何事务。根据您对这一天的期望，可以包括球童、摄影师、米其林级午餐、私人接送、水疗礼遇、高级球具租赁。Andy 提前协调一切，并在您到达前与您确认完整的行程安排。',
    homeMultiDayBody:
      '完整的 Andy 日 -一个球场，所有安排妥当。没有物流，没有决定，无需组织。€3,000 起。',
    contactUnknown: '暂时不确定 - 请给我建议',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: '单人',
        displayName: '与 Andy 共度一天',
        fullLabel: '与 Andy 共度一天 - 单人',
        priceDisplay: '€495',
        contactPrice: '€495',
      },
      [OFFER_IDS.group]: {
        shortLabel: '小组',
        displayName: '与 Andy 共度一天',
        fullLabel: '与 Andy 共度一天 - 小组',
        priceDisplay: '€950',
        contactPrice: '€950',
      },
      [OFFER_IDS.premium]: {
        fullLabel: '完整的 Andy 日',
        contactPrice: '€3,000 起',
      },
    },
  },
}

function getOfferLocale(locale = 'en') {
  return OFFER_CONTENT[locale] || OFFER_CONTENT.en
}

export function getOfferCopy(locale = 'en') {
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
