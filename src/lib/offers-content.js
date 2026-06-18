const OFFER_IDS = {
  solo: 'mallorca-round',
  group: 'signature-day',
  premium: 'full-andy-day',
  planning: 'trip-planning',
  undecided: 'not-sure',
}

const OFFER_CONTENT = {
  en: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'A private 18-hole golf day in Mallorca with Andy Griffiths, or add it to a trip I plan for you. Solo from €695. Groups from €950 total. Green fees additional.',
    playHeroBody:
      'Book it as a standalone private round, or add it to a planned Mallorca golf trip.\nPlay 18 holes alongside a PGA Advanced Professional.\nSolo from €695. Groups from €950 total. Green fees additional, confirmed when we speak.',
    playMultiDayDetail: null,
    homeMultiDayBody:
      'Use the basic tool for course ideas. If you want the real plan, I can handle course choice, base, routing, tee times, buggies, rentals, dining suggestions, and whether Play With A Pro belongs in the trip.',
    tripPlanningContactLabel: 'Trip planning - build my golf itinerary',
    contactUnknown: 'Not sure yet - advise me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy - Solo',
        priceDisplay: '€695',
        priceNumeric: '695',
        contactPrice: '€695',
        structuredDescription:
          "Private full day with PGA Advanced Professional Andy Griffiths. Andy's fee for the day. Green fee additional, confirmed when we speak.",
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Group',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy - Group',
        priceDisplay: '€950 total',
        priceNumeric: '950',
        contactPrice: '€950 total',
        structuredDescription:
          'Full day for groups of up to 3 with PGA Advanced Professional Andy Griffiths. One fixed day rate. Green fees confirmed separately.',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Signature Day',
        contactPrice: 'From €3,000',
        structuredName: 'Signature Day',
        structuredDescription:
          'Personalised from the ground up. Transfers, caddy, golf physio, private chef, videographer, and other add-ons planned around you before the day. From €3,000 on enquiry.',
      },
    },
  },
  de: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Ein privater Golftag auf Mallorca an der Seite von Andy Griffiths. Solo ab €695. Gruppen ab €950 total. Greenfees zusätzlich.',
    playHeroBody:
      'Ein Platz. Ein ganzer Tag an der Seite eines PGA Advanced Professionals, der alles organisiert hat. Solo ab €695. Gruppen ab €950 total. Greenfees zusätzlich, werden bei der Anfrage bestätigt.',
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
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Gruppe',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Gruppe',
        priceDisplay: '€950 total',
        contactPrice: '€950 total',
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
      'Un día privado de golf en Mallorca junto a Andy Griffiths. Solo desde €695. Grupos desde €950 total. Green fees adicionales.',
    playHeroBody:
      'Un campo. Un día completo junto a un PGA Advanced Professional que lo ha organizado todo. Solo desde €695. Grupos desde €950 total. Green fees adicionales, confirmados cuando hablemos.',
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
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Grupo',
        priceDisplay: '€950 total',
        contactPrice: '€950 total',
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
      'Une journee de golf privee a Majorque aux cotes d\'Andy Griffiths. Solo a partir de €695. Groupes a partir de €950 total. Green fees additionnels.',
    playHeroBody:
      'Un parcours. Une journee complete aux cotes d\'un PGA Advanced Professional qui a tout organise. En solo a partir de 695 EUR. Groupes a partir de 950 EUR au total. Green fees additionnels, confirmes lors de notre conversation.',
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
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groupe',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Groupe',
        priceDisplay: '€950 total',
        contactPrice: '€950 total',
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
      'Een privé-golfdag op Mallorca aan de zijde van Andy Griffiths. Solo vanaf €695. Groepen vanaf €950 total. Greenfees bijkomend.',
    playHeroBody:
      'Eén baan. Een volledige dag naast een PGA Advanced Professional die alles heeft geregeld. Solo vanaf €695. Groepen vanaf €950 total. Greenfees bijkomend, bevestigd wanneer we spreken.',
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
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groep',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Groep',
        priceDisplay: '€950 total',
        contactPrice: '€950 total',
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
      'En privat golfdag på Mallorca tillsammans med Andy Griffiths. Solo från €695. Grupper från €950 total. Green fees tillkommer.',
    playHeroBody:
      'En bana. En hel dag tillsammans med en PGA Advanced Professional som har ordnat allt. Solo från €695. Grupper från €950 total. Green fees tillkommer, bekräftas när vi pratar.',
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
        priceDisplay: '€695',
        contactPrice: '€695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupp',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Grupp',
        priceDisplay: '€950 total',
        contactPrice: '€950 total',
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
      '马略卡私人 18 洞陪打日，Andy Griffiths 全程同行。单人 €695，小组从 €950 total 起。果岭费另计。',
    playHeroBody:
      '一座球场。与一位英国职业高尔夫协会高级职业教练同组下场一整天。单人方案 €695，小组从 €950 total 起。果岭费另计，沟通时确认。',
    playMultiDayDetail:
      '完整的 Andy 日：一个球场，所有安排妥当。€3,000 起。到达后无需处理物流、决定或现场组织。可按需要安排球童、摄影、米其林午餐、私人接送、水疗礼遇、高级租杆等。Andy 会提前协调，并在您到达前确认完整行程。',
    homeMultiDayBody:
      '完整的 Andy 日 - 一个球场，所有安排妥当。没有物流，没有决定，无需组织。€3,000 起。',
    tripPlanningContactLabel: '行程规划 - 制定我的马略卡高尔夫行程',
    contactUnknown: '还不确定 - 请给我建议',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: '单人',
        displayName: '与 Andy 同场',
        fullLabel: '与 Andy 同场 - 单人',
        priceDisplay: '€695',
        priceNumeric: '695',
        contactPrice: '€695',
        structuredDescription:
          '与英国职业高尔夫协会高级职业教练 Andy Griffiths 一起完成的私人整天体验。Andy 的日费。果岭费另计，沟通时确认。',
      },
      [OFFER_IDS.group]: {
        shortLabel: '小组',
        displayName: '与 Andy 同场',
        fullLabel: '与 Andy 同场 - 小组',
        priceDisplay: '€950 total',
        priceNumeric: '950',
        contactPrice: '€950 total',
        structuredDescription:
          '最多 3 位球手的私人整天体验，与英国职业高尔夫协会高级职业教练 Andy Griffiths 同场。固定日费。果岭费另计。',
      },
      [OFFER_IDS.premium]: {
        fullLabel: '完整的 Andy 日',
        contactPrice: '€3,000 起',
        structuredName: '完整的 Andy 日',
        structuredDescription:
          '从头到尾按您的需求定制。接送、球童、高尔夫理疗、私人主厨、摄影师和其他加配项目都会在行程前安排好。咨询报价，€3,000 起。',
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
    [OFFER_IDS.planning, localeContent.tripPlanningContactLabel || OFFER_CONTENT.en.tripPlanningContactLabel, 'Enquiry'],
    [OFFER_IDS.undecided, localeContent.contactUnknown, ''],
  ]
}

export function getExperienceLabel(id, locale = 'en') {
  if (id === OFFER_IDS.planning) return getOfferLocale(locale).tripPlanningContactLabel || OFFER_CONTENT.en.tripPlanningContactLabel
  if (id === OFFER_IDS.undecided) return getOfferLocale(locale).contactUnknown
  return getOfferById(id, locale).fullLabel
}

export function getStructuredOfferCatalog(locale = 'en') {
  const offerLocale = getOfferLocale(locale)
  const soloPrefix = locale === 'zh' ? '单人' : 'Solo'
  const groupPrefix = locale === 'zh' ? '小组' : 'Group'
  return [
    {
      '@type': 'Offer',
      name: `${soloPrefix} - ${getOfferById(OFFER_IDS.solo, locale).displayName}`,
      description: getOfferById(OFFER_IDS.solo, locale).structuredDescription,
      price: getOfferById(OFFER_IDS.solo, locale).priceNumeric,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: `${groupPrefix} - ${getOfferById(OFFER_IDS.group, locale).displayName}`,
      description: getOfferById(OFFER_IDS.group, locale).structuredDescription,
      price: getOfferById(OFFER_IDS.group, locale).priceNumeric,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: offerLocale.offers[OFFER_IDS.premium].structuredName || getOfferById(OFFER_IDS.premium, locale).structuredName,
      description: getOfferById(OFFER_IDS.premium, locale).structuredDescription,
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
