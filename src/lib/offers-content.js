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
      'A private 18-hole golf day in Mallorca with Andy Griffiths, or add it to a trip I plan for you. Solo from â‚¬695. Groups from â‚¬950 total. Green fees additional.',
    playHeroBody:
      'Book it as a standalone private round, or add it to a planned Mallorca golf trip.\nPlay 18 holes alongside a PGA Advanced Professional.\nSolo from â‚¬695. Groups from â‚¬950 total. Green fees additional, confirmed when we speak.',
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
        priceDisplay: 'â‚¬695',
        priceNumeric: '695',
        contactPrice: 'â‚¬695',
        structuredDescription:
          "Private full day with PGA Advanced Professional Andy Griffiths. Andy's fee for the day. Green fee additional, confirmed when we speak.",
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Group',
        displayName: 'A Day With Andy',
        fullLabel: 'A Day With Andy - Group',
        priceDisplay: 'â‚¬950 total',
        priceNumeric: '950',
        contactPrice: 'â‚¬950 total',
        structuredDescription:
          'Full day for groups of up to 3 with PGA Advanced Professional Andy Griffiths. One fixed day rate. Green fees confirmed separately.',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Signature Day',
        contactPrice: 'From â‚¬3,000',
        structuredName: 'Signature Day',
        structuredDescription:
          'Personalised from the ground up. Transfers, caddy, golf physio, private chef, videographer, and other add-ons planned around you before the day. From â‚¬3,000 on enquiry.',
      },
    },
  },
  de: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Ein privater Golftag auf Mallorca an der Seite von Andy Griffiths. Solo ab â‚¬695. Gruppen ab â‚¬950 insgesamt. Greenfees zusÃ¤tzlich.',
    playHeroBody:
      'Ein Platz. Ein ganzer Tag an der Seite eines PGA Advanced Professionals, der alles organisiert hat. Solo ab â‚¬695. Gruppen ab â‚¬950 insgesamt. Greenfees zusÃ¤tzlich, werden bei der Anfrage bestÃ¤tigt.',
    playMultiDayDetail:
      'Der volle Andy Tag. Ein Tag, ein Platz, alles ist arrangiert. Ab â‚¬3.000. Keine Logistik, keine Entscheidungen, nichts zum Organisieren bei der Ankunft. Je nachdem, was Sie vom Tag erwarten, kann dies einen Caddie, einen Videografen, Michelin-Lunch, private Transfers, Spa-Zugang, ein Premium-Leih-Set beinhalten. Andy koordiniert alles im Voraus und bestÃ¤tigt das vollstÃ¤ndige Programm mit Ihnen vor Ihrer Ankunft.',
    homeMultiDayBody:
      'Der volle Andy Tag -ein Platz, alles ist arrangiert. Keine Logistik, keine Entscheidungen, nichts zum Organisieren. Ab â‚¬3.000.',
    contactUnknown: 'Noch unsicher - beraten Sie mich',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Solo',
        priceDisplay: 'â‚¬695',
        contactPrice: 'â‚¬695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Gruppe',
        displayName: 'A Day With Andy',
        fullLabel: 'Ein Tag mit Andy - Gruppe',
        priceDisplay: 'â‚¬950 insgesamt',
        contactPrice: 'â‚¬950 insgesamt',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Der volle Andy Tag',
        contactPrice: 'Ab â‚¬3.000',
      },
    },
  },
  es: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Un dÃ­a privado de golf en Mallorca junto a Andy Griffiths. Solo desde â‚¬695. Grupos desde â‚¬950 en total. Green fees adicionales.',
    playHeroBody:
      'Un campo. Un dÃ­a completo junto a un PGA Advanced Professional que lo ha organizado todo. Solo desde â‚¬695. Grupos desde â‚¬950 en total. Green fees adicionales, confirmados cuando hablemos.',
    playMultiDayDetail:
      'El DÃ­a Andy Completo. Un dÃ­a, un campo, todo estÃ¡ organizado. Desde â‚¬3.000. Sin logÃ­stica, sin decisiones, nada que organizar a tu llegada. Dependiendo de lo que quieras del dÃ­a, esto puede incluir un caddie, un videÃ³grafo, almuerzo Michelin, traslados privados, acceso a spa, equipo de alquiler premium. Andy coordina todo por adelantado y confirma el itinerario completo contigo antes de tu llegada.',
    homeMultiDayBody:
      'El DÃ­a Andy Completo -un campo, todo estÃ¡ organizado. Sin logÃ­stica, sin decisiones, nada que organizar. Desde â‚¬3.000.',
    contactUnknown: 'AÃºn no lo sÃ© - aconsÃ©jeme',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un dÃ­a con Andy - Solo',
        priceDisplay: 'â‚¬695',
        contactPrice: 'â‚¬695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupo',
        displayName: 'A Day With Andy',
        fullLabel: 'Un dÃ­a con Andy - Grupo',
        priceDisplay: 'â‚¬950 en total',
        contactPrice: 'â‚¬950 en total',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'El DÃ­a Andy Completo',
        contactPrice: 'Desde â‚¬3.000',
      },
    },
  },
  fr: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'Une journee de golf privee a Majorque aux cotes d\'Andy Griffiths. Solo a partir de â‚¬695. Groupes a partir de â‚¬950 au total. Green fees additionnels.',
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
        fullLabel: 'Une journÃ©e avec Andy - Solo',
        priceDisplay: 'â‚¬695',
        contactPrice: 'â‚¬695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groupe',
        displayName: 'A Day With Andy',
        fullLabel: 'Une journÃ©e avec Andy - Groupe',
        priceDisplay: 'â‚¬950 au total',
        contactPrice: 'â‚¬950 au total',
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
      'Een privÃ©-golfdag op Mallorca aan de zijde van Andy Griffiths. Solo vanaf â‚¬695. Groepen vanaf â‚¬950 in totaal. Greenfees bijkomend.',
    playHeroBody:
      'EÃ©n baan. Een volledige dag naast een PGA Advanced Professional die alles heeft geregeld. Solo vanaf â‚¬695. Groepen vanaf â‚¬950 in totaal. Greenfees bijkomend, bevestigd wanneer we spreken.',
    playMultiDayDetail:
      'De Volledige Andy Dag. EÃ©n dag, Ã©Ã©n baan, alles is geregeld. Vanaf â‚¬3.000. Geen logistiek, geen beslissingen, niets om te organiseren bij aankomst. Afhankelijk van wat je van de dag wilt, kan dit een caddie, videograaf, Michelin-lunch, privÃ©vervoer, spavergoeging, premium verhuurapparatuur omvatten. Andy coÃ¶rdineert alles vooraf en bevestigt het volledige programma met je vÃ³Ã³r je aankomst.',
    homeMultiDayBody:
      'De Volledige Andy Dag -eÃ©n baan, alles is geregeld. Geen logistiek, geen beslissingen, niets om te organiseren. Vanaf â‚¬3.000.',
    contactUnknown: 'Nog niet zeker - adviseer me',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Solo',
        priceDisplay: 'â‚¬695',
        contactPrice: 'â‚¬695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Groep',
        displayName: 'A Day With Andy',
        fullLabel: 'Een dag met Andy - Groep',
        priceDisplay: 'â‚¬950 in totaal',
        contactPrice: 'â‚¬950 in totaal',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'De Volledige Andy Dag',
        contactPrice: 'Vanaf â‚¬3.000',
      },
    },
  },
  sv: {
    statSoloLabel: 'Solo',
    playWithAProMeta:
      'En privat golfdag pÃ¥ Mallorca tillsammans med Andy Griffiths. Solo frÃ¥n â‚¬695. Grupper frÃ¥n â‚¬950 totalt. Green fees tillkommer.',
    playHeroBody:
      'En bana. En hel dag tillsammans med en PGA Advanced Professional som har ordnat allt. Solo frÃ¥n â‚¬695. Grupper frÃ¥n â‚¬950 totalt. Green fees tillkommer, bekrÃ¤ftas nÃ¤r vi pratar.',
    playMultiDayDetail:
      'Den FullstÃ¤ndiga Andy-dagen. En dag, en bana, allt Ã¤r ordnat. FrÃ¥n â‚¬3.000. Ingen logistik, inga beslut, inget att organisera vid ankomst. Beroende pÃ¥ vad du vill frÃ¥n dagen kan detta innefatta en caddie, en videograf, Michelin-lunch, privata transfers, spa-tillgÃ¥ng, premiumklubbor fÃ¶r uthyrning. Andy koordinerar allt pÃ¥ fÃ¶rhand och bekrÃ¤ftar det fullstÃ¤ndiga programmet med dig innan du anlÃ¤nder.',
    homeMultiDayBody:
      'Den FullstÃ¤ndiga Andy-dagen -en bana, allt Ã¤r ordnat. Ingen logistik, inga beslut, inget att organisera. FrÃ¥n â‚¬3.000.',
    contactUnknown: 'Inte sÃ¤ker Ã¤nnu - ge mig rÃ¥d',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'Solo',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Solo',
        priceDisplay: 'â‚¬695',
        contactPrice: 'â‚¬695',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'Grupp',
        displayName: 'A Day With Andy',
        fullLabel: 'En dag med Andy - Grupp',
        priceDisplay: 'â‚¬950 totalt',
        contactPrice: 'â‚¬950 totalt',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'Den FullstÃ¤ndiga Andy-dagen',
        contactPrice: 'FrÃ¥n â‚¬3.000',
      },
    },
  },
  zh: {
    statSoloLabel: 'å•äºº',
    playWithAProMeta:
      'é©¬ç•¥å¡ç§äºº 18 æ´žé™ªæ‰“æ—¥ï¼ŒAndy Griffiths å…¨ç¨‹åŒè¡Œã€‚å•äºº â‚¬695ï¼Œå°ç»„ä»Ž â‚¬950 ?? èµ·ã€‚æžœå²­è´¹å¦è®¡ã€‚',
    playHeroBody:
      'ä¸€åº§çƒåœºã€‚ä¸Žä¸€ä½è‹±å›½èŒä¸šé«˜å°”å¤«åä¼šé«˜çº§èŒä¸šæ•™ç»ƒåŒç»„ä¸‹åœºä¸€æ•´å¤©ã€‚å•äººæ–¹æ¡ˆ â‚¬695ï¼Œå°ç»„ä»Ž â‚¬950 ?? èµ·ã€‚æžœå²­è´¹å¦è®¡ï¼Œæ²Ÿé€šæ—¶ç¡®è®¤ã€‚',
    playMultiDayDetail:
      'å®Œæ•´çš„ Andy æ—¥ï¼šä¸€ä¸ªçƒåœºï¼Œæ‰€æœ‰å®‰æŽ’å¦¥å½“ã€‚â‚¬3,000 èµ·ã€‚åˆ°è¾¾åŽæ— éœ€å¤„ç†ç‰©æµã€å†³å®šæˆ–çŽ°åœºç»„ç»‡ã€‚å¯æŒ‰éœ€è¦å®‰æŽ’çƒç«¥ã€æ‘„å½±ã€ç±³å…¶æž—åˆé¤ã€ç§äººæŽ¥é€ã€æ°´ç–—ç¤¼é‡ã€é«˜çº§ç§Ÿæ†ç­‰ã€‚Andy ä¼šæå‰åè°ƒï¼Œå¹¶åœ¨æ‚¨åˆ°è¾¾å‰ç¡®è®¤å®Œæ•´è¡Œç¨‹ã€‚',
    homeMultiDayBody:
      'å®Œæ•´çš„ Andy æ—¥ - ä¸€ä¸ªçƒåœºï¼Œæ‰€æœ‰å®‰æŽ’å¦¥å½“ã€‚æ²¡æœ‰ç‰©æµï¼Œæ²¡æœ‰å†³å®šï¼Œæ— éœ€ç»„ç»‡ã€‚â‚¬3,000 èµ·ã€‚',
    tripPlanningContactLabel: 'è¡Œç¨‹è§„åˆ’ - åˆ¶å®šæˆ‘çš„é©¬ç•¥å¡é«˜å°”å¤«è¡Œç¨‹',
    contactUnknown: 'è¿˜ä¸ç¡®å®š - è¯·ç»™æˆ‘å»ºè®®',
    offers: {
      [OFFER_IDS.solo]: {
        shortLabel: 'å•äºº',
        displayName: 'ä¸Ž Andy åŒåœº',
        fullLabel: 'ä¸Ž Andy åŒåœº - å•äºº',
        priceDisplay: 'â‚¬695',
        priceNumeric: '695',
        contactPrice: 'â‚¬695',
        structuredDescription:
          'ä¸Žè‹±å›½èŒä¸šé«˜å°”å¤«åä¼šé«˜çº§èŒä¸šæ•™ç»ƒ Andy Griffiths ä¸€èµ·å®Œæˆçš„ç§äººæ•´å¤©ä½“éªŒã€‚Andy çš„æ—¥è´¹ã€‚æžœå²­è´¹å¦è®¡ï¼Œæ²Ÿé€šæ—¶ç¡®è®¤ã€‚',
      },
      [OFFER_IDS.group]: {
        shortLabel: 'å°ç»„',
        displayName: 'ä¸Ž Andy åŒåœº',
        fullLabel: 'ä¸Ž Andy åŒåœº - å°ç»„',
        priceDisplay: 'â‚¬950 ??',
        priceNumeric: '950',
        contactPrice: 'â‚¬950 ??',
        structuredDescription:
          'æœ€å¤š 3 ä½çƒæ‰‹çš„ç§äººæ•´å¤©ä½“éªŒï¼Œä¸Žè‹±å›½èŒä¸šé«˜å°”å¤«åä¼šé«˜çº§èŒä¸šæ•™ç»ƒ Andy Griffiths åŒåœºã€‚å›ºå®šæ—¥è´¹ã€‚æžœå²­è´¹å¦è®¡ã€‚',
      },
      [OFFER_IDS.premium]: {
        fullLabel: 'å®Œæ•´çš„ Andy æ—¥',
        contactPrice: 'â‚¬3,000 èµ·',
        structuredName: 'å®Œæ•´çš„ Andy æ—¥',
        structuredDescription:
          'ä»Žå¤´åˆ°å°¾æŒ‰æ‚¨çš„éœ€æ±‚å®šåˆ¶ã€‚æŽ¥é€ã€çƒç«¥ã€é«˜å°”å¤«ç†ç–—ã€ç§äººä¸»åŽ¨ã€æ‘„å½±å¸ˆå’Œå…¶ä»–åŠ é…é¡¹ç›®éƒ½ä¼šåœ¨è¡Œç¨‹å‰å®‰æŽ’å¥½ã€‚å’¨è¯¢æŠ¥ä»·ï¼Œâ‚¬3,000 èµ·ã€‚',
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
  const soloPrefix = locale === 'zh' ? 'å•äºº' : 'Solo'
  const groupPrefix = locale === 'zh' ? 'å°ç»„' : 'Group'
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
