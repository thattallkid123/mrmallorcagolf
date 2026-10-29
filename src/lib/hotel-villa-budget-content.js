const COPY = {
  en: {
    title: 'What is your whole-villa budget per night?',
    sub: 'Optional. Enter the total for the property, not a per-person or per-room amount.',
    label: 'Whole villa per night (€)', unknown: 'Not sure yet', summary: 'Whole-villa nightly budget',
    resultsTitle: 'Enquire about a villa',
    resultsNote: 'Send your preferences and I can plan the golf with a trusted local travel partner, who handles villa options and bookings. Availability and prices are confirmed for your dates.',
    enquire: 'Enquire about a villa', review: 'Your villa preferences',
    detailLabels: ['Area', 'Priorities', 'Travellers', 'Group size', 'Accommodation', 'Whole-villa nightly budget'],
  },
  de: {
    title: 'Wie hoch ist Ihr Budget pro Nacht für die ganze Villa?',
    sub: 'Optional. Geben Sie den Gesamtbetrag für das Haus an, nicht pro Person oder Zimmer.',
    label: 'Ganze Villa pro Nacht (€)', unknown: 'Weiß ich noch nicht', summary: 'Budget pro Nacht für die ganze Villa',
    resultsTitle: 'Eine Villa anfragen',
    resultsNote: 'Senden Sie Ihre Wünsche. Ich plane das Golfprogramm gemeinsam mit einem vertrauenswürdigen lokalen Reisepartner, der sich um Villenangebote und Buchungen kümmert. Verfügbarkeit und Preise werden für Ihre Reisedaten bestätigt.',
    enquire: 'Eine Villa anfragen', review: 'Ihre Wünsche für die Villa',
    detailLabels: ['Region', 'Prioritäten', 'Reisende', 'Gruppengröße', 'Unterkunft', 'Budget pro Nacht für die ganze Villa'],
  },
  es: {
    title: '¿Cuál es su presupuesto por noche para toda la villa?',
    sub: 'Opcional. Indique el total para la propiedad, no por persona ni por habitación.',
    label: 'Villa completa por noche (€)', unknown: 'Aún no lo sé', summary: 'Presupuesto por noche para toda la villa',
    resultsTitle: 'Consultar sobre una villa',
    resultsNote: 'Envíeme sus preferencias y podré planificar el golf con un colaborador local de viajes de confianza, que se encarga de las opciones de villas y las reservas. La disponibilidad y los precios se confirman para sus fechas.',
    enquire: 'Consultar sobre una villa', review: 'Sus preferencias para la villa',
    detailLabels: ['Zona', 'Prioridades', 'Viajeros', 'Tamaño del grupo', 'Alojamiento', 'Presupuesto por noche para toda la villa'],
  },
  fr: {
    title: 'Quel est votre budget par nuit pour la villa entière ?',
    sub: 'Facultatif. Indiquez le total pour la propriété, et non par personne ou par chambre.',
    label: 'Villa entière par nuit (€)', unknown: 'Je ne sais pas encore', summary: 'Budget par nuit pour la villa entière',
    resultsTitle: 'Se renseigner sur une villa',
    resultsNote: 'Envoyez-moi vos préférences. Je peux organiser le golf avec un partenaire de voyage local de confiance, qui gère les propositions de villas et les réservations. Les disponibilités et les prix sont confirmés pour vos dates.',
    enquire: 'Se renseigner sur une villa', review: 'Vos préférences pour la villa',
    detailLabels: ['Zone', 'Priorités', 'Voyageurs', 'Taille du groupe', 'Hébergement', 'Budget par nuit pour la villa entière'],
  },
  nl: {
    title: 'Wat is uw budget per nacht voor de hele villa?',
    sub: 'Optioneel. Vul het totaal voor de woning in, niet per persoon of per kamer.',
    label: 'Hele villa per nacht (€)', unknown: 'Nog niet zeker', summary: 'Budget per nacht voor de hele villa',
    resultsTitle: 'Informeer naar een villa',
    resultsNote: 'Stuur uw wensen door. Ik kan het golfprogramma plannen met een vertrouwde lokale reispartner, die de villaopties en boekingen regelt. Beschikbaarheid en prijzen worden voor uw reisdata bevestigd.',
    enquire: 'Informeer naar een villa', review: 'Uw wensen voor de villa',
    detailLabels: ['Gebied', 'Prioriteiten', 'Reizigers', 'Groepsgrootte', 'Accommodatie', 'Budget per nacht voor de hele villa'],
  },
  sv: {
    title: 'Vad är din budget per natt för hela villan?',
    sub: 'Valfritt. Ange totalen för boendet, inte per person eller per rum.',
    label: 'Hela villan per natt (€)', unknown: 'Vet inte än', summary: 'Budget per natt för hela villan',
    resultsTitle: 'Fråga om en villa',
    resultsNote: 'Skicka dina önskemål så kan jag planera golfen med en pålitlig lokal resepartner, som tar hand om villaförslag och bokningar. Tillgänglighet och priser bekräftas för dina resedatum.',
    enquire: 'Fråga om en villa', review: 'Dina önskemål för villan',
    detailLabels: ['Område', 'Prioriteringar', 'Resenärer', 'Gruppstorlek', 'Boende', 'Budget per natt för hela villan'],
  },
  zh: {
    title: '整栋别墅每晚的预算是多少？',
    sub: '选填。请输入整栋物业的总额，而不是每人或每间客房的费用。',
    label: '整栋别墅每晚（€）', unknown: '暂不确定', summary: '整栋别墅每晚预算',
    resultsTitle: '咨询别墅住宿',
    resultsNote: '请发送您的住宿偏好。高尔夫行程由我规划，值得信赖的当地旅行合作伙伴负责别墅选择与预订。房源和价格会按您的出行日期确认。',
    enquire: '咨询别墅住宿', review: '您的别墅住宿偏好',
    detailLabels: ['区域', '优先事项', '同行人员', '同行人数', '住宿类型', '整栋别墅每晚预算'],
  },
}

export function getVillaBudgetT(lang = 'en') {
  return COPY[lang] || COPY.en
}
