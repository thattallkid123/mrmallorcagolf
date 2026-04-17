const OFFER_IDS = {
  solo: 'mallorca-round',
  group: 'signature-day',
  multiDay: 'full-experience',
  undecided: 'not-sure',
}

const OFFER_CONTENT = {
  en: {
    statSoloLabel: 'Solo — all inclusive',
    playWithAProMeta:
      'A private golf day in Mallorca, played alongside UK PGA Advanced Professional Andy Griffiths. Solo from €595 all inclusive. Groups of 2 to 4 from €1,195, with green fees confirmed separately.',
    playHeroBody:
      'One course. A full day alongside a PGA Advanced Professional who has arranged everything. Solo from €595 all inclusive. Groups of 2 to 4 from €1,195, plus green fees.',
    playMultiDayDetail:
      "I handle everything: course bookings, tee times, transfers, restaurant, and any extras. You arrive, play, eat, and leave knowing it was worth it. Multi-day experiences from €2,000. Get in touch with your dates and I'll come back with a proposal.",
    homeMultiDayBody:
      'Two or three consecutive days across Son Gual, Alcanada, and beyond — with private transfers, handpicked dining, and access to courses most visitors cannot book. From €2,000. Get in touch with your dates.',
    contactUnknown: 'Not sure yet - advise me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy — Solo',
        priceDisplay: '€595',
        priceNumeric: '595',
        contactPrice: '€595 all inclusive',
        structuredDescription: 'Private full day at Son Gual or Alcanada with PGA Professional. Green fee, lunch, everything included.',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Group of 2 to 4',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy — Group of 2 to 4',
        priceDisplay: '€1,195',
        priceNumeric: '1195',
        contactPrice: '€1,195 + green fees',
        structuredDescription: 'Full private golf day for groups of 2-4. One fixed day rate for Andy, with green fees confirmed separately.',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: 'Multi-day trip',
        contactPrice: 'On enquiry',
        structuredName: 'Multi-Day Experience',
        structuredDescription: 'Multiple courses, private transfers, Michelin dining. Bespoke itinerary on enquiry.',
      },
    },
  },
  de: {
    statSoloLabel: 'Solo — alles inklusive',
    playWithAProMeta:
      'Ein privater Golftag auf Mallorca an der Seite von Andy Griffiths. Solo ab €595 all inclusive. Gruppen von 2 bis 4 ab €1.195, Greenfees werden separat bestaetigt.',
    playHeroBody:
      'Ein Platz. Ein ganzer Tag an der Seite eines PGA Advanced Professionals, der alles organisiert hat. Solo ab €595 inklusive Greenfee und Lunch. Gruppen von 2 bis 4 ab €1.195, zuzüglich Greenfees.',
    playMultiDayDetail:
      'Ab €2.000. Schreiben Sie mir mit Ihren Reisedaten, und ich schicke Ihnen einen passenden Vorschlag.',
    homeMultiDayBody:
      'Zwei oder drei aufeinanderfolgende Tage über Son Gual, Alcanada und mehr, mit privaten Transfers, sorgfältig ausgewählten Restaurants und Zugang zu Plätzen, die die meisten Besucher nicht buchen können. Ab €2.000. Schreiben Sie mir mit Ihren Daten.',
    contactUnknown: 'Noch unsicher - beraten Sie mich',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Solo',
        priceDisplay: '€595',
        contactPrice: '€595 alles inklusive',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Gruppe von 2 bis 4',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Gruppe von 2 bis 4',
        priceDisplay: '€1.195',
        contactPrice: '€1.195 + Greenfees',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: 'Mehrtägige Reise',
        contactPrice: 'Auf Anfrage',
      },
    },
  },
  es: {
    statSoloLabel: 'Solo — todo incluido',
    playWithAProMeta:
      'Un dia privado de golf en Mallorca junto a Andy Griffiths. Solo desde €595 todo incluido. Grupos de 2 a 4 desde €1.195, con green fees confirmados por separado.',
    playHeroBody:
      'Un campo. Un día completo junto a un PGA Advanced Professional que lo ha organizado todo. Solo desde €595 todo incluido. Grupos de 2 a 4 desde €1.195, más green fees.',
    playMultiDayDetail:
      'Desde €2.000. Escríbame con sus fechas y le propondré una opción a su medida.',
    homeMultiDayBody:
      'Dos o tres días consecutivos entre Son Gual, Alcanada y más campos, con traslados privados, restaurantes elegidos con criterio y acceso a campos que la mayoría de los visitantes no puede reservar. Desde €2.000. Escríbame con sus fechas.',
    contactUnknown: 'Aún no lo sé - aconséjeme',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Solo',
        priceDisplay: '€595',
        contactPrice: '€595 todo incluido',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupo de 2 a 4',
        displayName: 'A Day With Andy',
        fullLabel: 'Un día con Andy - Grupo de 2 a 4',
        priceDisplay: '€1.195',
        contactPrice: '€1.195 + green fees',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: 'Viaje de varios días',
        contactPrice: 'A consultar',
      },
    },
  },
  fr: {
    statSoloLabel: 'Solo — tout compris',
    playWithAProMeta:
      'Une journee de golf privee a Majorque aux cotes d Andy Griffiths. Solo a partir de €595 tout compris. Groupes de 2 a 4 a partir de €1 195, green fees confirmes separement.',
    playHeroBody:
      'Un parcours. Une journée complète aux côtés d’un PGA Advanced Professional qui a tout organisé. En solo à partir de 595 € tout compris. Groupes de 2 à 4 à partir de 1 195 €, green fees en plus.',
    playMultiDayDetail:
      'À partir de 2 000 €. Envoyez-moi vos dates et je vous proposerai une version adaptée.',
    homeMultiDayBody:
      'Deux ou trois jours consécutifs entre Son Gual, Alcanada et d’autres parcours, avec transferts privés, tables choisies avec soin et accès à des parcours que la plupart des visiteurs ne peuvent pas réserver. À partir de 2 000 €. Envoyez-moi vos dates.',
    contactUnknown: 'Je ne suis pas encore certain(e) - conseillez-moi',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Solo',
        priceDisplay: '€595',
        contactPrice: '€595 tout compris',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groupe de 2 à 4',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journée avec Andy - Groupe de 2 à 4',
        priceDisplay: '€1 195',
        contactPrice: '€1 195 + green fees',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: 'Séjour sur plusieurs jours',
        contactPrice: 'Sur demande',
      },
    },
  },
  nl: {
    statSoloLabel: 'Solo — inclusief greenfee en lunch',
    playWithAProMeta:
      'Een prive-golfdag op Mallorca aan de zijde van Andy Griffiths. Solo vanaf €595 all-in. Groepen van 2 tot 4 vanaf €1.195, met greenfees apart bevestigd.',
    playHeroBody:
      'Eén baan. Een volledige dag naast een PGA Advanced Professional die alles heeft geregeld. Solo vanaf €595, inclusief greenfee en lunch. Groepen van 2 tot 4 vanaf €1.195, plus greenfees.',
    playMultiDayDetail:
      'Vanaf €2.000. Stuur me uw data en ik werk een passend voorstel uit.',
    homeMultiDayBody:
      'Twee of drie opeenvolgende dagen langs Son Gual, Alcanada en meer, met privétransfers, zorgvuldig gekozen restaurants en toegang tot banen die de meeste bezoekers niet kunnen boeken. Vanaf €2.000. Stuur me uw data.',
    contactUnknown: 'Nog niet zeker - adviseer me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Solo',
        priceDisplay: '€595',
        contactPrice: '€595 all-in',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groep van 2 tot 4',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Groep van 2 tot 4',
        priceDisplay: '€1.195',
        contactPrice: '€1.195 + greenfees',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: 'Meerdaagse reis',
        contactPrice: 'Op aanvraag',
      },
    },
  },
  sv: {
    statSoloLabel: 'Solo — greenfee och lunch ingår',
    playWithAProMeta:
      'En privat golfdag pa Mallorca tillsammans med Andy Griffiths. Solo fran €595 all inclusive. Grupper pa 2 till 4 fran €1.195, med green fees som bekraftas separat.',
    playHeroBody:
      'En bana. En hel dag tillsammans med en PGA Advanced Professional som har ordnat allt. Solo från €595, inklusive greenfee och lunch. Grupper på 2 till 4 från €1.195, plus green fees.',
    playMultiDayDetail:
      'Från €2.000. Skicka dina datum så sätter jag ihop ett förslag som passar.',
    homeMultiDayBody:
      'Två eller tre dagar i följd över Son Gual, Alcanada och vidare, med privata transfers, noggrant utvalda restauranger och tillgång till banor som de flesta besökare inte kan boka. Från €2.000. Skicka dina datum.',
    contactUnknown: 'Inte säker ännu - ge mig råd',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Solo',
        priceDisplay: '€595',
        contactPrice: '€595 allt inkluderat',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupp på 2 till 4',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Grupp på 2 till 4',
        priceDisplay: '€1.195',
        contactPrice: '€1.195 + green fees',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: 'Flerdagarsresa',
        contactPrice: 'På förfrågan',
      },
    },
  },
  zh: {
    statSoloLabel: '单人 — 全包',
    playWithAProMeta:
      'A private golf day in Mallorca alongside Andy Griffiths. Solo €595 all inclusive. Groups of 2 to 4 from €1,195, with green fees confirmed separately.',
    playHeroBody:
      '一座球场。一整天与一位已经把一切都安排好的 PGA Advanced Professional 同组下场。单人方案 €595 全包。2 到 4 人的小组从 €1,195 起，果岭费另计。',
    playMultiDayDetail:
      '€2,000 起。把您的日期发给我，我会为您准备合适的方案。',
    homeMultiDayBody:
      '连续两到三天，安排 Son Gual、Alcanada 及更多球场，包含私人接送、精心挑选的餐饮，以及多数访客订不到的球场机会。€2,000 起。把您的日期发给我。',
    contactUnknown: '暂时不确定 - 请给我建议',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: '单人',
        displayName: '与 Andy 共度一天',
        fullLabel: '与 Andy 共度一天 - 单人',
        priceDisplay: '€595',
        contactPrice: '€595 全包',
      },
      [OFFER_IDS.group]: {
        shortLabel: '2 到 4 人',
        displayName: '与 Andy 共度一天',
        fullLabel: '与 Andy 共度一天 - 2 到 4 人',
        priceDisplay: '€1,195',
        contactPrice: '€1,195 + 果岭费',
      },
      [OFFER_IDS.multiDay]: {
        fullLabel: '多日行程',
        contactPrice: '按需报价',
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
      OFFER_IDS.multiDay,
      getOfferById(OFFER_IDS.multiDay, locale).fullLabel,
      getOfferById(OFFER_IDS.multiDay, locale).contactPrice,
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
      name: `Group of 2 to 4 - ${getOfferById(OFFER_IDS.group, 'en').displayName}`,
      description: getOfferById(OFFER_IDS.group, 'en').structuredDescription,
      price: getOfferById(OFFER_IDS.group, 'en').priceNumeric,
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: getOfferById(OFFER_IDS.multiDay, 'en').structuredName,
      description: getOfferById(OFFER_IDS.multiDay, 'en').structuredDescription,
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
