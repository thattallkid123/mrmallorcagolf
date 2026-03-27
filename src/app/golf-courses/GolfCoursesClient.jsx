'use client'
import { useState } from 'react'
import Link from 'next/link'

const TRANSLATIONS = {
  en: {
    allCourses: 'All Courses', expertPicks: '★ Expert Picks Only',
    southwest: 'Southwest', south: 'South', east: 'East', north: 'North',
    yourGuide: 'Your guide', playWithAndy: 'Play with Andy',
    credentials: 'UK PGA Advanced Professional · Trackman Master · TPI Level 3 · 11 years coaching in Shanghai · Based in Mallorca since 2025',
    intro1: "Mallorca has more outstanding golf than most visitors realise. Twenty-two courses, several of genuine European Tour standard, in conditions that stay immaculate through winter.",
    intro2: "I'm working my way through every course on the island — playing them, reviewing them honestly. Below is what I know so far.",
    sidebarH3: 'Want to play one of these courses with a UK PGA professional alongside you?',
    sidebarP: 'Private round, everything arranged. Son Gual and Alcanada are the primary venues.',
    sidebarBtn: 'Get in touch →',
    quickPicksTitle: 'Quick picks',
    quickPicks: ['Best overall: Son Gual','Most scenic: Alcanada','Best in Spain: Son Muntaner','Most challenging: Golf de Andratx','Best for beginners: Son Quint','Best value: Golf Pollensa','Best East coast: Pula or Canyamel'],
    ctaEyebrow: 'Want to play one of these?',
    ctaH2: 'Private round, everything arranged, UK PGA professional throughout.',
    ctaP: "Tell me which course interests you, your dates, and your handicap. I'll come back with a recommendation within 24 hours.",
    seeExperiences: 'See the Experiences →',
    getInTouch: 'Get in touch',
    courseNote: '',
    geoEyebrow: 'Where the courses sit',
    geoH2: "Mallorca has more outstanding golf than most visitors realise.",
    geoP1: "Twenty-two courses ranging from genuine European Tour venues to quieter, less-visited gems. Green fees from €20 to over €200. I'm a UK PGA Advanced Professional based on the island, working my way through every course — all reviews are well-researched, with my own personal notes for the courses I've played.",
    geoP2: "Best time to play: October–November and February–April. The island plays year-round — in January, when courses in much of the rest of Europe are unplayable, the fairways here are immaculate.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: 'Southwest', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: 'South', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: 'East', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: 'North', courses: 'Alcanada · Golf Pollensa'}],
  },
  de: {
    allCourses: 'Alle Plätze', expertPicks: '★ Nur Expertentipps',
    southwest: 'Südwesten', south: 'Süden', east: 'Osten', north: 'Norden',
    yourGuide: 'Ihr Guide', playWithAndy: 'Mit Andy spielen',
    credentials: 'UK PGA Advanced Professional · Trackman Master · TPI Level 3 · 11 Jahre Coaching in Shanghai · Auf Mallorca seit 2025',
    intro1: 'Mallorca hat mehr herausragendes Golf als die meisten Besucher vermuten. Alle Rezensionen sind sorgfältig recherchiert und korrekt, mit meinen persönlichen Notizen für die Plätze, die ich selbst gespielt habe.',
    intro2: 'Son Muntaner wurde 2025 bei den World Golf Awards zum besten Golfplatz Spaniens gekürt. Die Insel hat die DP World Tour, das Rolex Challenge Tour Grand Final und Platzentwürfe von Robert Trent Jones Jr., Jack Nicklaus und Seve Ballesteros beherbergt.',
    sidebarH3: 'Möchten Sie einen dieser Plätze mit einem UK PGA Professional an Ihrer Seite spielen?',
    sidebarP: 'Private Runde, alles arrangiert, Coaching auf dem Platz. Son Gual und Alcanada sind die primären Venues.',
    sidebarBtn: 'Kontakt aufnehmen →',
    quickPicksTitle: 'Schnellauswahl',
    quickPicks: ['Bester Platz: Son Gual','Schönster Platz: Alcanada','Bester in Spanien: Son Muntaner','Schwierigster: Golf de Andratx','Bester für Anfänger: Son Quint','Bestes Preis-Leistung: Golf Pollensa','Bester Ostküste: Pula oder Canyamel'],
    ctaEyebrow: 'Einen dieser Plätze spielen?',
    ctaH2: 'Private Runde, alles arrangiert, UK PGA Professional dabei.',
    ctaP: 'Teilen Sie mir mit, welcher Platz Sie interessiert, Ihre Daten und Ihr Handicap. Ich melde mich innerhalb von 24 Stunden mit einer Empfehlung.',
    seeExperiences: 'Erlebnisse ansehen →',
    getInTouch: 'Kontakt aufnehmen',
    courseNote: 'Die Platzbeschreibungen sind auf Englisch.',
    geoEyebrow: 'Wo die Plätze liegen',
    geoH2: "Mallorca hat mehr herausragendes Golf, als die meisten Besucher vermuten.",
    geoP1: "Zweiundzwanzig Plätze — von echten European Tour Austragungsorten bis hin zu ruhigeren, weniger bekannten Schätzen. Green Fees von 20 € bis über 200 €. Ich bin ein UK PGA Advanced Professional auf der Insel und arbeite mich durch jeden Platz.",
    geoP2: "Beste Spielzeit: Oktober–November und Februar–April. Die Insel ist ganzjährig bespielbar — im Januar, wenn Plätze in Europa geschlossen sind, sind die Fairways hier makellos.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: 'Südwesten', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: 'Süden', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: 'Osten', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: 'Norden', courses: 'Alcanada · Golf Pollensa'}],
  },
  es: {
    allCourses: 'Todos los campos', expertPicks: '★ Solo selecciones de experto',
    southwest: 'Suroeste', south: 'Sur', east: 'Este', north: 'Norte',
    yourGuide: 'Tu guía', playWithAndy: 'Jugar con Andy',
    credentials: 'UK PGA Advanced Professional · Trackman Master · TPI Nivel 3 · 11 años entrenando en Shanghái · En Mallorca desde 2025',
    intro1: 'Mallorca tiene más golf de calidad de lo que la mayoría de visitantes imagina. Todas las reseñas están bien documentadas y son precisas, con mis notas personales y de primera mano para los campos que he jugado.',
    intro2: 'Son Muntaner fue nombrado Mejor Campo de Golf de España en los World Golf Awards 2025. La isla ha acogido el DP World Tour, el Rolex Challenge Tour Grand Final, y tiene diseños de Robert Trent Jones Jr., Jack Nicklaus y Seve Ballesteros.',
    sidebarH3: '¿Quiere jugar uno de estos campos con un UK PGA profesional a su lado?',
    sidebarP: 'Ronda privada, todo organizado, coaching en campo. Son Gual y Alcanada son los campos principales.',
    sidebarBtn: 'Ponerse en contacto →',
    quickPicksTitle: 'Selecciones rápidas',
    quickPicks: ['El mejor: Son Gual','El más pintoresco: Alcanada','El mejor de España: Son Muntaner','El más difícil: Golf de Andratx','El mejor para principiantes: Son Quint','El mejor precio: Golf Pollensa','El mejor de la costa este: Pula o Canyamel'],
    ctaEyebrow: '¿Quiere jugar uno de estos campos?',
    ctaH2: 'Ronda privada, todo organizado, UK PGA profesional durante toda la jornada.',
    ctaP: 'Dígame qué campo le interesa, sus fechas y su handicap. Le responderé con una recomendación en 24 horas.',
    seeExperiences: 'Ver las experiencias →',
    getInTouch: 'Contactar',
    courseNote: 'Las descripciones de los campos están en inglés.',
    geoEyebrow: 'Dónde están los campos',
    geoH2: "Mallorca tiene más golf de calidad de lo que la mayoría de visitantes imagina.",
    geoP1: "Veintidós campos — desde auténticos recintos del European Tour hasta joyas más tranquilas y menos conocidas. Green fees desde 20 € hasta más de 200 €. Soy un UK PGA Advanced Professional en la isla, recorriendo cada campo.",
    geoP2: "Mejor época: octubre–noviembre y febrero–abril. La isla es jugable todo el año — en enero, cuando los campos en gran parte de Europa son injugables, los fairways aquí están impecables.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: 'Suroeste', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: 'Sur', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: 'Este', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: 'Norte', courses: 'Alcanada · Golf Pollensa'}],
  },
  fr: {
    allCourses: 'Tous les parcours', expertPicks: "★ Sélections d'expert uniquement",
    southwest: 'Sud-ouest', south: 'Sud', east: 'Est', north: 'Nord',
    yourGuide: 'Votre guide', playWithAndy: 'Jouer avec Andy',
    credentials: "UK PGA Advanced Professional · Trackman Master · TPI Niveau 3 · 11 ans d'entraînement à Shanghai · Basé à Majorque depuis 2025",
    intro1: "Majorque possède un golf de qualité supérieure à ce que la plupart des visiteurs imaginent. Toutes les évaluations sont bien documentées et précises, avec mes notes personnelles et de première main pour les parcours que j'ai joués.",
    intro2: "Son Muntaner a été nommé Meilleur Parcours de Golf d'Espagne aux World Golf Awards 2025. L'île a accueilli le DP World Tour, le Rolex Challenge Tour Grand Final, et des designs de Robert Trent Jones Jr., Jack Nicklaus et Seve Ballesteros.",
    sidebarH3: "Vous souhaitez jouer l'un de ces parcours avec un UK PGA professionnel à vos côtés ?",
    sidebarP: 'Partie privée, tout organisé, coaching sur parcours. Son Gual et Alcanada sont les sites principaux.',
    sidebarBtn: "Prendre contact →",
    quickPicksTitle: 'Sélections rapides',
    quickPicks: ["Le meilleur : Son Gual","Le plus pittoresque : Alcanada","Le meilleur d'Espagne : Son Muntaner","Le plus difficile : Golf de Andratx","Le meilleur pour débutants : Son Quint","Le meilleur rapport qualité-prix : Golf Pollensa","Le meilleur côte est : Pula ou Canyamel"],
    ctaEyebrow: "Vous souhaitez jouer l'un de ces parcours ?",
    ctaH2: "Partie privée, tout organisé, UK PGA professionnel tout au long de la journée.",
    ctaP: 'Dites-moi quel parcours vous intéresse, vos dates et votre handicap. Je reviendrai avec une recommandation dans les 24 heures.',
    seeExperiences: "Voir les expériences →",
    getInTouch: "Prendre contact",
    courseNote: 'Les descriptions des parcours sont en anglais.',
    geoEyebrow: 'Où se trouvent les parcours',
    geoH2: "Majorque possède plus de golf de qualité que la plupart des visiteurs ne l'imaginent.",
    geoP1: "Vingt-deux parcours — des vrais sites du Tour Européen aux joyaux plus tranquilles et moins connus. Green fees de 20 € à plus de 200 €. Je suis un UK PGA Advanced Professional basé sur l'île, parcourant chaque terrain.",
    geoP2: "Meilleure période : octobre–novembre et février–avril. L'île est jouable toute l'année — en janvier, quand les parcours en Europe sont impraticables, les fairways ici sont impeccables.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: 'Sud-ouest', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: 'Sud', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: 'Est', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: 'Nord', courses: 'Alcanada · Golf Pollensa'}],
  },
  zh: {
    allCourses: '全部球场', expertPicks: '★ 仅专家推荐',
    southwest: '西南部', south: '南部', east: '东部', north: '北部',
    yourGuide: '您的向导', playWithAndy: '与Andy同场竞技',
    credentials: '英国PGA高级职业教练 · Trackman认证大师 · TPI Level 3 · 在上海执教11年 · 2025年起定居马略卡',
    intro1: '马略卡岛拥有比大多数游客想象的更为出色的高尔夫球场。所有评测均经过深入研究，内容准确，并附有我本人对亲身打过球场的第一手笔记。',
    intro2: 'Son Muntaner荣获2025年世界高尔夫奖"西班牙最佳高尔夫球场"称号。该岛曾举办DP世界巡回赛、劳力士挑战巡回赛总决赛，并拥有小罗伯特·特伦特·琼斯、杰克·尼克劳斯和塞韦·巴列斯特罗斯设计的球场。',
    sidebarH3: '想在英国PGA职业教练的陪伴下体验这些球场吗？',
    sidebarP: '私人全程陪打，一切安排妥当，全程球场教学。Son Gual和Alcanada是主要场地。',
    sidebarBtn: '立即联系 →',
    quickPicksTitle: '快速推荐',
    quickPicks: ['综合最佳：Son Gual','最美风景：Alcanada','西班牙最佳：Son Muntaner','难度最高：Golf de Andratx','最适合初学者：Son Quint','最具性价比：Golf Pollensa','东海岸最佳：Pula或Canyamel'],
    ctaEyebrow: '想体验这些球场？',
    ctaH2: '私人一日体验，全程安排，英国PGA职业教练全程陪伴。',
    ctaP: '告诉我您感兴趣的球场、出行日期和差点，我将在24小时内给您回复并提供建议。',
    seeExperiences: '查看体验项目 →',
    getInTouch: '立即联系',
    courseNote: '球场描述内容为英文。',
    geoEyebrow: '球场地理分布',
    geoH2: "马略卡岛拥有比大多数游客想象的更出色的高尔夫资源。",
    geoP1: "共22个球场——从真正的欧巡赛场地到安静少人知晓的宝藏球场。果岭费从20欧元到200欧元以上不等。我是驻岛的英国PGA高级职业教练，正在逐一打遍岛上所有球场。",
    geoP2: "最佳打球季节：10月至11月和2月至4月。全年均可打球——1月份，当欧洲大部分球场无法开放时，这里的球道依然完美无瑕。",
    geoRegions: [{region: '帕尔马', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: '西南部', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: '南部', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: '东部', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: '北部', courses: 'Alcanada · Golf Pollensa'}],
  },
  nl: {
    allCourses: 'Alle banen', expertPicks: '★ Alleen expertselecties',
    southwest: 'Zuidwest', south: 'Zuid', east: 'Oost', north: 'Noord',
    yourGuide: 'Uw gids', playWithAndy: 'Speel met Andy',
    credentials: 'UK PGA Advanced Professional · Trackman Master · TPI Level 3 · 11 jaar coaching in Shanghai · Gebaseerd op Mallorca sinds 2025',
    intro1: 'Mallorca heeft meer uitstekende golf dan de meeste bezoekers verwachten. Alle beoordelingen zijn goed onderzocht en nauwkeurig, met mijn persoonlijke notities en eerste-hands aantekeningen voor de banen die ik zelf gespeeld heb.',
    intro2: 'Son Muntaner werd uitgeroepen tot Beste Golfbaan van Spanje bij de World Golf Awards 2025. Het eiland heeft de DP World Tour, de Rolex Challenge Tour Grand Final georganiseerd en heeft ontwerpen van Robert Trent Jones Jr., Jack Nicklaus en Seve Ballesteros.',
    sidebarH3: 'Wilt u een van deze banen spelen met een UK PGA professional naast u?',
    sidebarP: 'Privéronde, alles geregeld, coaching op de baan. Son Gual en Alcanada zijn de primaire locaties.',
    sidebarBtn: 'Neem contact op →',
    quickPicksTitle: 'Snelle keuzes',
    quickPicks: ['Beste overall: Son Gual','Mooiste: Alcanada','Beste van Spanje: Son Muntaner','Moeilijkste: Golf de Andratx','Beste voor beginners: Son Quint','Beste waarde: Golf Pollensa','Beste oostkust: Pula of Canyamel'],
    ctaEyebrow: 'Wilt u een van deze banen spelen?',
    ctaH2: 'Privéronde, alles geregeld, UK PGA professional de hele dag aanwezig.',
    ctaP: 'Vertel me welke baan u interesseert, uw data en uw handicap. Ik kom binnen 24 uur terug met een aanbeveling.',
    seeExperiences: 'Bekijk de ervaringen →',
    getInTouch: 'Neem contact op',
    courseNote: 'De baanbeschrijvingen zijn in het Engels.',
    geoEyebrow: 'Waar de banen liggen',
    geoH2: "Mallorca heeft meer uitstekende golf dan de meeste bezoekers verwachten.",
    geoP1: "Tweeëntwintig banen — van echte European Tour-locaties tot rustiger, minder bekende parels. Green fees van €20 tot meer dan €200. Ik ben een UK PGA Advanced Professional op het eiland en werk me door elke baan.",
    geoP2: "Beste speeltijd: oktober–november en februari–april. Het eiland is het hele jaar speelbaar — in januari, wanneer banen in Europa gesloten zijn, zijn de fairways hier vlekkeloos.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: 'Zuidwest', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: 'Zuid', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: 'Oost', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: 'Noord', courses: 'Alcanada · Golf Pollensa'}],
  },
  sv: {
    allCourses: 'Alla banor', expertPicks: '★ Endast experttips',
    southwest: 'Sydväst', south: 'Söder', east: 'Öst', north: 'Norr',
    yourGuide: 'Din guide', playWithAndy: 'Spela med Andy',
    credentials: 'UK PGA Advanced Professional · Trackman Master · TPI Nivå 3 · 11 år som coach i Shanghai · Bosatt på Mallorca sedan 2025',
    intro1: 'Mallorca har mer utmärkt golf än de flesta besökare inser. Alla recensioner är välresearchade och korrekta, med mina personliga anteckningar från de banor jag spelat.',
    intro2: 'Son Muntaner utsågs till Bästa Golfbana i Spanien vid World Golf Awards 2025. Ön har arrangerat DP World Tour, Rolex Challenge Tour Grand Final och har bandesign av Robert Trent Jones Jr., Jack Nicklaus och Seve Ballesteros.',
    sidebarH3: 'Vill du spela en av dessa banor med en UK PGA-professionell vid din sida?',
    sidebarP: 'Privat runda, allt ordnat, coaching på banan. Son Gual och Alcanada är de primära banorna.',
    sidebarBtn: 'Ta kontakt →',
    quickPicksTitle: 'Snabbval',
    quickPicks: ['Bäst totalt: Son Gual','Vackrast: Alcanada','Bäst i Spanien: Son Muntaner','Svårast: Golf de Andratx','Bäst för nybörjare: Son Quint','Bäst värde: Golf Pollensa','Bäst östkust: Pula eller Canyamel'],
    ctaEyebrow: 'Vill du spela en av dessa banor?',
    ctaH2: 'Privat runda, allt ordnat, UK PGA-professionell under hela dagen.',
    ctaP: 'Berätta vilken bana som intresserar dig, dina datum och ditt handicap. Jag återkommer med en rekommendation inom 24 timmar.',
    seeExperiences: 'Se upplevelserna →',
    getInTouch: 'Ta kontakt',
    courseNote: 'Banebeskrivningarna är på engelska.',
    geoEyebrow: 'Var banorna ligger',
    geoH2: "Mallorca har mer utmärkt golf än de flesta besökare inser.",
    geoP1: "Tjugotvå banor — från riktiga European Tour-arenor till lugnare, mindre kända pärlor. Green fees från €20 till över €200. Jag är en UK PGA Advanced Professional på ön och spelar mig igenom varje bana.",
    geoP2: "Bästa speltid: oktober–november och februari–april. Ön är spelbar året runt — i januari, när banor i Europa är obrukbara, är fairwaysarna här immakulate.",
    geoRegions: [{region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt'}, {region: 'Sydväst', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx'}, {region: 'Söder', courses: 'Golf Maioris · Son Antem East · Son Antem West'}, {region: 'Öst', courses: 'Capdepera · Canyamel · Pula · Son Servera'}, {region: 'Norr', courses: 'Alcanada · Golf Pollensa'}],
  },
}


function getRegions(t) {
  return [
    { key: 'all', label: t.allCourses },
    { key: 'palma', label: 'Palma' },
    { key: 'southwest', label: t.southwest },
    { key: 'south', label: t.south },
    { key: 'east', label: t.east },
    { key: 'north', label: t.north },
    { key: 'expert', label: t.expertPicks },
  ]
}


const COURSE_TRANSLATIONS = {
  de: {
    'Golf Son Gual': {
      location: 'Palma · 11 km vom Stadtzentrum',
      text: 'Thomas Himmels Design von 2007 hat sein eigenes Wind-Ökosystem — die erhöhte Lage und der Baumbestand sorgen dafür, dass sich der Wind an jedem Loch anders verhält. Die Greens sind schnell und erhöht; wichtiger als der Schwung ist, wo der Ball nicht landet. Der Abschluss von Loch 15 bis 18 gehört zu den besten vier Löchern im europäischen Golf. Rafa Nadal hat erklärt, dies sei sein Lieblingsplatz auf der Insel.',
      note: '„Der Wind auf 16 ist eine andere Herausforderung als der Wind auf 7. Das macht den Platz so wiederholbar."',
      footer: 'Rafas Favorit · Pflichtrunde',
    },
    'Golf Son Vida': {
      location: 'Arabella · Son Vida, Palma',
      text: 'Der älteste Platz auf Mallorca, eröffnet 1964. Seve Ballesteros gewann hier 1990 in einem European-Tour-Playoff. Das Layout windet sich durch das Wohnviertel Son Vida mit enger Routenführung und Höhenunterschieden. Das 18. Loch ist ein Par 5 mit einem Wasserdurchgang beim zweiten Schlag, der viele zu einer Entscheidung verleitet, die sie später bereuen.',
      footer: 'Ältester Platz der Insel · Seve gewann hier',
    },
    'Son Muntaner': {
      location: 'Son Vida · Palma',
      text: 'Ausgezeichnet als Bester Golfplatz Spaniens bei den World Golf Awards 2025. Der ursprüngliche Platz des Castillo Hotel Son Vida, neu gestaltet von Severiano Ballesteros. Ausblicke über die Bucht von Palma von den höheren Löchern. Ein tausend Jahre alter Olivenbaum steht an Loch 15 — im Spiel, nicht nur zur Dekoration. Gastgeber des Mallorca Golf Open auf der DP World Tour.',
      footer: 'Bester in Spanien 2025 · DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella · Son Vida, Palma',
      text: 'Der zugänglichste der Arabella-Plätze. Lange, offene Fairways und vier verschiedene Abschlagpositionen machen ihn wirklich für jedes Niveau geeignet. Von Loch 8, dem höchsten Punkt des Platzes, schlägt man direkt in Richtung Palma-Kathedrale ab. Tiger Woods spielte hier im Juli 2022 mit seinem Sohn Charlie. Die Steinmauern sind im Spiel — nicht nur Dekoration.',
      footer: 'Ideal für Anfänger · Tiger Woods spielte hier',
    },
    'T Golf Palma Puntiró': {
      location: 'Palma · 10 km vom Stadtzentrum',
      text: 'Der einzige von Jack Nicklaus entworfene Platz auf Mallorca, eröffnet 2006 und 2022 vollständig renoviert. Nicklaus entwarf ihn, um dem vorhandenen Gelände zu folgen — keine künstlich geglätteten Fairways. Einheimische Kiefern, wilde Oliven und Johannisbrotbäume bilden das Rough durchgehend, ohne sichtbare Gebäude von einem der Löcher.',
      footer: 'Einziges Nicklaus-Design auf der Insel',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella · Zentral-Palma',
      text: 'Neun Löcher, Par 27, 638 Meter gesamt. Der einzige offizielle Pitch & Putt Platz auf Mallorca. Alle neun Löcher sind Par 3, von 50–100 m, was Präzision statt Kraft erfordert. Der natürliche Einstiegspunkt für Anfänger und Junioren, eine gute Aufwärmrunde vor einem vollen Runde anderswo, oder eine nützliche Option für einen Nicht-Golfer.',
      footer: 'Ideal für Anfänger & Junioren',
    },
    'Golf Son Termes': {
      location: 'Bunyola · 10 km von Palma',
      text: 'Wahrscheinlich der Platz auf der Insel, der sich am stärksten in seine Umgebung einfügt — er liegt in einem Tal der Tramuntana, wobei die Berge an jedem Loch den Hintergrund bilden. Kurz mit Par 70 und 5.285 m, aber das Gelände kompensiert mit ständigen Höhenunterschieden und engen Fairways — Buggy empfohlen. Das Restaurant überblickt das 18. Grün und die Bucht von Palma.',
      footer: 'Tramuntana-Tal · 10 Min. von Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa · 20 km von Palma',
      text: 'Der einzige öffentliche Platz der Santa-Ponsa-Gruppe mit echtem European-Tour-Prestige — er war Gastgeber des DP World Tour Mallorca Golf Open 2021. Einer der längsten Plätze der Insel; Loch 10 mit 590 m ist eines der längsten Par-5-Löcher Europas. Mehrere teilweise blinde Abschläge und Wasserhindernisse. Löcher 5, 6 und 7 bieten einige der schönsten Tramuntana-Bergblicke der Insel.',
      footer: 'Öffentlicher Zugang · DP World Tour Austragungsort',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa · 20 km von Palma',
      text: 'Nur für Mitglieder und meist ruhig. Viele Abschläge machen den Driver zur schlechten Wahl — ein Hybrid zur Positionskontrolle ist oft die klügere Entscheidung. Die Baumreihen sind dicht und ein Ball an der falschen Stelle bedeutet meist Rückkehr per Chip. Das 18. Loch: ein Par 3 mit einem Grün in Form der Insel Mallorca selbst — ein Detail, das man kennen sollte.',
      note: '„Das 18. Grün ist wie Mallorca selbst geformt. Ein Detail, das man kennen sollte, bevor man dort ankommt."',
      footer: 'Zugang für Kunden arrangierbar',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa · 20 km von Palma',
      text: 'Neun Löcher durch eine Wohnsiedlung. Die meisten Löcher sind kurz — ideal für Anfänger oder für jeden, der das Kurzspiel üben möchte, ohne eine volle Runde zu spielen. Das zweite Loch ist mein Favorit: trotz der kurzen Distanz ist ein präziser Abschlag erforderlich.',
      footer: 'Gut für das Kurzspiel · Zugang arrangierbar',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat · 7 km von Palma',
      text: 'Sieben Kilometer von Palma in einem bewaldeten Tal — wirklich ruhig für einen Platz so nah an der Stadt. Blick auf die Bucht von Palma, die Insel Cabrera und das alte Schloss Bendinat. Hinweis: Das Hauptclubhaus wird derzeit renoviert, Wiedereröffnung geplant für Mai/Juni 2026. Begrenzte Besucherstartkarten pro Tag — im Voraus buchen.',
      footer: 'Clubhaus-Renovierung bis Mai/Juni 2026',
    },
    'T Golf Calvià (Poniente)': {
      location: 'Calvià · 12 km von Palma',
      text: 'Ursprünglich von John Harris 1978 entworfen und nach einer Investition von 10 Millionen Euro vollständig neu gebaut — neuer Platz, neues Clubhaus, ein völlig anderes Angebot. Fünfzehn Seen, offene Fairways, große wellige Greens. Das Meer auf einer Seite und die Tramuntana auf der anderen. Gastgeber der Mallorca Open.',
      footer: 'Gastgeber der Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar · 40 km von Palma',
      text: 'Das 6. Loch ist das längste Par 5 Spaniens mit 609 m. In die Hügel über Camp de Mar ohne Kompromisse gebaut. Extra Bälle mitbringen und kein Ego — das Rough ist echt und die Fairways eng. Nicht für Anfänger ohne Handicap-Ausweis geeignet. Erlebnis, Aussichten und Schwierigkeit machen es zu einer der denkwürdigsten Runden der Insel.',
      footer: 'Schwierigster Platz der Insel',
    },
    'Golf Maioris': {
      location: 'Llucmajor · 20 km von Palma',
      text: 'Ein interessanter Platz, da Vorder- und Rückneun sich wie zwei verschiedene Designphilosophien anfühlen — die erste Neun schottisch und wellig, die zweite amerikanischer und flacher. Fünfzehn Minuten vom Flughafen und weniger überfüllt als die Plätze näher an Palma. Hat eine der wenigen öffentlichen Grasabschlaganlagen der Insel.',
      footer: '15 Min. vom Flughafen · Öffentliche Grasabschlaganlage',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor · 15 km von Palma',
      text: 'Breite, großzügige Fairways, die Spielern willkommen sind, die noch Vertrauen vom Abschlag aufbauen, während Länge und fünf Seen bessere Spieler ehrlich halten. Auf einem ehemaligen Jagdgut bei Llucmajor gebaut, zehn Minuten vom Flughafen. Von Francisco Lopez-Segalés entworfen, eröffnet 1994.',
      footer: 'Gut für Anfänger · Marriott Resort',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor · 15 km von Palma',
      text: 'Der anspruchsvollere der beiden Son-Antem-Plätze und Austragungsort der meisten Resort-Turniere. Engere Fairways, weniger nachsichtige Roughs, wellige Greens mit Bunkern drumherum. Führt durch eine traditionelle mallorquinische Finca mit Blick auf den Randa-Berg.',
      footer: 'Anspruchsvoller als East · Turnieranlage',
    },
    'Capdepera Golf': {
      location: 'Artà · 65 km von Palma',
      text: 'Dan Maples entwarf dies, um der vorhandenen Landschaft zu folgen. Die erste Hälfte führt durch ein weites Tal — offen, relativ sanft. Die zweite Neun erklimmt die Levant-Hügel und wird zu einem viel technischeren Test. Loch 15, oben in den Bergen mit Blick über das ganze Tal zur Küste, wurde von Mallorca Magazin als bestes Loch der Insel ausgewählt.',
      footer: 'Am besten kombiniert mit Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera · 65 km von Palma',
      text: 'Jedes der ersten neun Löcher hat seinen eigenen Charakter. Loch 4 hat an klaren Tagen Blick auf Menorca. Loch 9 hat ein traditionelles Steinhaus in der Mitte des Fairways — ein Hindernis, das nur auf Mallorca existiert. Loch 18 endet mit einer dreifachen Wellenbewegung auf dem Grün, die von der Clubhaustarrasse aus sichtbar ist.',
      footer: 'Blick auf Menorca an klaren Tagen',
    },
    'Pula Golf': {
      location: 'Son Servera · 55 km von Palma',
      text: 'Von Olazábal zwischen 2004 und 2006 vollständig neu gestaltet, danach Gastgeber von acht European-Tour-Events. Hervorragende Übungsanlagen inklusive Trackman-Range-Technologie. Federer und Nadal spielten hier im Juli 2025 eine Runde. Pep Guardiola ist regelmäßiger Gast.',
      footer: 'Olazábal-Design · Gastgeber European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera · 55 km von Palma',
      text: 'Gegründet 1967, einer der ältesten Plätze der Insel. Ein Parkland-Platz entlang der Costa de los Pinos mit großzügigen Fairways und entspanntem Rough. Löcher 3 bis 7 sind die Ausnahme: enge, von Bäumen gesäumte Fairways, die in die Hügel aufsteigen und zwischen Seen weben. Wasser an sechs Löchern.',
      footer: 'Einer der ältesten Plätze der Insel',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alcúdia · 55 km von Palma',
      text: 'Mein zweiter Ankerplatz und wohl der malerischste Mallorcas. Design von Robert Trent Jones Jr. Der Leuchtturm von Alcanada, von 16 der 18 Löcher sichtbar, ist eines der meistfotografierten Golffahr in Europa. 58 Bunker sind strategisch über das Layout verteilt — sie erfordern auf jedem Anspiel Aufmerksamkeit.',
      text2: 'Der Platz ist Gastgeber des Rolex Challenge Tour Grand Final, der im Oktober 2026 zum sechsten Mal zurückkehrt. Die Greens sind stark gewellt und extrem schnell. Die Restaurant-Terrasse nach der Runde ist einer der schönsten Orte der Insel. 50 Minuten von Palma einplanen — es lohnt sich.',
      note: '„Eine der schönsten Runden, die man irgendwo in Europa spielen kann. Der Leuchtturm auf 17 ist unvergesslich."',
      footer: 'Rolex Challenge Tour Grand Final Okt. 2026 · 50 Min. von Palma',
    },
    'Golf Pollensa': {
      location: 'Pollença · 60 km von Palma',
      text: 'Neun Löcher am Eingang zur Stadt Pollença, in die Hügel integriert mit Blick auf die Tramuntana und die Buchten von Pollença und Alcúdia. Von José Gancedo 1986 entworfen. Eine Runde dauert etwa 90 Minuten — ein einfaches Aufwärmen oder eine gute Option an einem Tag, an dem man Golf ohne vollen Einsatz möchte.',
      footer: 'Schnelle Runde · 90 Minuten',
    },
  },
  es: {
    'Golf Son Gual': {
      location: 'Palma · 11 km del centro',
      text: 'El diseño de Thomas Himmel de 2007 tiene su propio ecosistema de viento — su posición elevada y la cobertura arbórea hacen que el viento se comporte de manera diferente en cada hoyo. Los greens son rápidos y elevados; donde fallas importa más que cómo golpeas. El tramo final — hoyos 15 a 18 — está entre los cuatro mejores hoyos consecutivos del golf europeo. Rafa Nadal ha dicho que es su campo favorito en la isla.',
      note: '"El viento en el 16 es un desafío diferente al del 7. Eso es lo que hace que el campo sea tan rejugable."',
      footer: 'Favorito de Rafa · Campo obligatorio',
    },
    'Golf Son Vida': {
      location: 'Arabella · Son Vida, Palma',
      text: 'El campo más antiguo de Mallorca, inaugurado en 1964. Seve Ballesteros ganó aquí en un playoff del European Tour en 1990. El trazado serpentea por el barrio residencial de Son Vida con un recorrido ajustado y cambios de elevación. El hoyo 18 es un par 5 con un paso sobre agua en el segundo golpe que tienta a muchos a tomar una decisión que luego lamentan.',
      footer: 'El campo más antiguo de la isla · Seve ganó aquí',
    },
    'Son Muntaner': {
      location: 'Son Vida · Palma',
      text: 'Elegido Mejor Campo de Golf de España en los World Golf Awards 2025. El campo original del Castillo Hotel Son Vida, rediseñado por Severiano Ballesteros. Vistas sobre la Bahía de Palma desde los hoyos más altos. Un olivo milenario está en el hoyo 15 — en juego, no solo de decoración. Acoge el Mallorca Golf Open en el DP World Tour.',
      footer: 'El mejor de España 2025 · DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella · Son Vida, Palma',
      text: 'El más accesible de los campos de Arabella. Calles largas y abiertas y cuatro posiciones de salida diferentes lo hacen genuinamente apto para cualquier nivel. Desde el hoyo 8, el punto más alto del campo, se golpea directamente hacia la Catedral de Palma. Tiger Woods jugó aquí con su hijo Charlie en julio de 2022. Los muros de piedra están en juego — no solo de decoración.',
      footer: 'Ideal para principiantes · Tiger Woods jugó aquí',
    },
    'T Golf Palma Puntiró': {
      location: 'Palma · 10 km del centro',
      text: 'El único campo diseñado por Jack Nicklaus en Mallorca, inaugurado en 2006 y completamente renovado en 2022. Nicklaus lo diseñó para seguir el terreno existente sin modificaciones. Pinos nativos, olivos silvestres y algarrobos forman el rough sin que haya edificios visibles desde ningún hoyo.',
      footer: 'Único diseño Nicklaus en la isla',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella · Centro de Palma',
      text: 'Nueve hoyos, par 27, 638 metros en total. El único campo de pitch & putt oficial de Mallorca. Los nueve hoyos son par 3 de 50 a 100 m, exigiendo precisión en lugar de potencia. El punto de partida natural para principiantes y jóvenes, un buen calentamiento antes de una ronda completa, o una opción útil para un acompañante no golfista.',
      footer: 'Perfecto para principiantes y jóvenes',
    },
    'Golf Son Termes': {
      location: 'Bunyola · 10 km de Palma',
      text: 'Probablemente el campo de la isla que más integrado está con su entorno — se asienta en un valle de la Tramuntana con las montañas formando un telón de fondo en cada hoyo. Corto con par 70 y 5.285 m, pero el terreno compensa con constantes cambios de elevación y calles estrechas — se recomienda buggy. El restaurante domina el green 18 y la Bahía de Palma.',
      footer: 'Valle de la Tramuntana · 10 min de Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa · 20 km de Palma',
      text: 'El único campo público del grupo Santa Ponsa con auténtico pedigrí del European Tour — fue sede del Mallorca Golf Open del DP World Tour 2021. Uno de los campos más largos de la isla; el hoyo 10 con 590 m es uno de los par 5 más largos de Europa. Varios golpes de salida parcialmente ciegos y obstáculos de agua. Los hoyos 5, 6 y 7 ofrecen algunas de las mejores vistas de la Serra de Tramuntana.',
      footer: 'Acceso público · Sede del DP World Tour',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa · 20 km de Palma',
      text: 'Solo para socios y generalmente tranquilo. Muchos golpes de salida hacen que el driver sea una mala elección — un hybrid para controlar la posición suele ser la decisión más inteligente. El alineamiento de árboles es denso y una bola en el lugar equivocado suele significar volver con un chip. El hoyo 18: un par 3 con un green con la forma de la isla de Mallorca — un detalle que conviene saber antes de llegar.',
      note: '"El green del 18 tiene la forma de Mallorca. Un detalle que conviene saber antes de llegar."',
      footer: 'Acceso organizable para clientes',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa · 20 km de Palma',
      text: 'Nueve hoyos por una comunidad residencial. La mayoría de los hoyos son cortos — ideal para principiantes o para quien quiera trabajar el juego corto sin comprometerse a una ronda completa. El segundo hoyo es mi favorito: requiere un golpe de salida preciso a pesar de la corta distancia.',
      footer: 'Bueno para el juego corto · Acceso organizable',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat · 7 km de Palma',
      text: 'Siete kilómetros de Palma en un valle arbolado — genuinamente tranquilo para un campo tan cercano a la ciudad. Vistas sobre la Bahía de Palma, la isla de Cabrera y el antiguo Castillo de Bendinat. Nota: el clubhouse principal está en obras, con reapertura prevista para mayo/junio 2026. Tarjetas de visitante limitadas por día — reservar con antelación.',
      footer: 'Renovación del clubhouse hasta mayo/junio 2026',
    },
    'T Golf Calvià (Poniente)': {
      location: 'Calvià · 12 km de Palma',
      text: 'Diseñado originalmente por John Harris en 1978 y completamente reconstruido tras una inversión de 10 millones de euros — nuevo campo, nuevo clubhouse, una propuesta completamente diferente. Quince lagos, calles abiertas que invitan al driver, grandes greens ondulados. El mar a un lado y la Tramuntana al otro. Ha sido sede del Mallorca Open.',
      footer: 'Sede del Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar · 40 km de Palma',
      text: 'El hoyo 6 es el par 5 más largo de España con 609 metros. Construido en las colinas sobre Camp de Mar sin compromisos. Traer pelotas extra y humildad — el rough es real y las calles estrechas. No apto para principiantes sin handicap. La experiencia, las vistas y la dificultad lo convierten en una de las rondas más memorables de la isla.',
      footer: 'El campo más difícil de la isla',
    },
    'Golf Maioris': {
      location: 'Llucmajor · 20 km de Palma',
      text: 'Un campo interesante porque los nueve primeros y los nueve últimos hoyos parecen dos filosofías de diseño únicas — los primeros nueve escoceses y ondulados, los segundos más americanos y planos. A quince minutos del aeropuerto y menos concurrido que los campos más cercanos a Palma. Tiene uno de los pocos campos de prácticas de hierba pública de la isla.',
      footer: '15 min del aeropuerto · Campo de prácticas de hierba',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor · 15 km de Palma',
      text: 'Calles anchas y generosas que dan la bienvenida a los jugadores que aún están ganando confianza desde el tee, mientras que la longitud y los cinco lagos mantienen honestos a los mejores jugadores. Construido en una antigua finca de caza cerca de Llucmajor, a diez minutos del aeropuerto. Diseñado por Francisco Lopez-Segalés, inaugurado en 1994.',
      footer: 'Bueno para principiantes · Resort Marriott',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor · 15 km de Palma',
      text: 'El más exigente de los dos campos de Son Antem y donde se celebran la mayoría de los torneos del resort. Calles más estrechas, menos rough indulgente, greens ondulados rodeados de búnkeres. Discurre por una finca mallorquina tradicional con vistas a la montaña de Randa.',
      footer: 'Más difícil que East · Sede de torneos',
    },
    'Capdepera Golf': {
      location: 'Artà · 65 km de Palma',
      text: 'Dan Maples lo diseñó para seguir el paisaje existente. La primera mitad discurre por un amplio valle — abierto, relativamente suave. Los nueve traseros ascienden a las colinas del Llevant y se convierten en un test mucho más técnico. El hoyo 15, en lo alto de las montañas con vistas sobre todo el valle hasta la costa, fue elegido como el mejor hoyo de la isla por Mallorca Magazin.',
      footer: 'Ideal combinado con Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera · 65 km de Palma',
      text: 'Cada uno de los primeros nueve hoyos tiene su propio carácter. El hoyo 4 tiene vistas a Menorca en días despejados. El hoyo 9 tiene una caseta de piedra tradicional en medio de la calle — un obstáculo único en Mallorca. El hoyo 18 termina con una ondulación triple en el green visible desde la terraza del clubhouse.',
      footer: 'Vistas a Menorca en días despejados',
    },
    'Pula Golf': {
      location: 'Son Servera · 55 km de Palma',
      text: 'Completamente rediseñado por Olazábal entre 2004 y 2006, posteriormente acogiendo ocho eventos del European Tour. Excelentes instalaciones de práctica incluyendo tecnología Trackman Range. Federer y Nadal jugaron una ronda aquí en julio de 2025. Pep Guardiola es habitual.',
      footer: 'Diseño de Olazábal · Sede del European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera · 55 km de Palma',
      text: 'Fundado en 1967, uno de los campos más antiguos de la isla. Un campo de parque a lo largo de la Costa de los Pinos con calles generosas y rough relajado. Los hoyos 3 a 7 son la excepción: calles estrechas bordeadas de árboles que suben a las colinas y se entrecruzan entre lagos. Agua en seis hoyos.',
      footer: 'Uno de los campos más antiguos de la isla',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alcúdia · 55 km de Palma',
      text: 'Mi segundo campo ancla y probablemente el más pintoresco de Mallorca. Diseño de Robert Trent Jones Jr. El faro de Alcanada, visible desde 16 de los 18 hoyos, es uno de los hitos de golf más fotografiados de Europa. Cincuenta y ocho búnkeres están distribuidos estratégicamente por el trazado — exigen atención en cada aproximación.',
      text2: 'El campo acoge el Rolex Challenge Tour Grand Final, que regresa por sexta vez en octubre de 2026. Los greens son muy ondulados y extremadamente rápidos. La terraza del restaurante tras la ronda es uno de los mejores lugares de la isla. Calcular 50 minutos desde Palma — merece cada minuto.',
      note: '"Una de las rondas más hermosas que se pueden jugar en cualquier lugar de Europa. El faro en el 17 es inolvidable."',
      footer: 'Rolex Challenge Tour Grand Final Oct. 2026 · 50 min de Palma',
    },
    'Golf Pollensa': {
      location: 'Pollença · 60 km de Palma',
      text: 'Nueve hoyos a la entrada de la ciudad de Pollença, integrados en la ladera con vistas a la Tramuntana y a las bahías de Pollença y Alcúdia. Diseñado por José Gancedo en 1986. Una ronda dura unos 90 minutos — un calentamiento fácil o una buena opción para un día en que se quiere golf sin compromiso total.',
      footer: 'Ronda rápida · 90 minutos',
    },
  },
  fr: {
    'Golf Son Gual': {
      location: 'Palma · 11 km du centre-ville',
      text: 'Le design de Thomas Himmel en 2007 possède son propre écosystème de vent — sa position élevée et le couvert arboré font que le vent se comporte différemment sur chaque trou. Les greens sont rapides et surélevés ; où vous ratez compte plus que comment vous frappez. Le final — trous 15 à 18 — figure parmi les quatre meilleurs trous consécutifs du golf européen. Rafa Nadal a dit que c\'est son parcours préféré sur l\'île.',
      note: '"Le vent sur le 16 est un défi différent du vent sur le 7. C\'est ce qui rend le parcours si rejouable."',
      footer: 'Favori de Rafa · Incontournable',
    },
    'Golf Son Vida': {
      location: 'Arabella · Son Vida, Palma',
      text: 'Le plus ancien parcours de Majorque, ouvert en 1964. Seve Ballesteros y a gagné en playoff sur l\'European Tour en 1990. Le tracé serpente à travers le quartier résidentiel de Son Vida avec un parcours serré et des changements de dénivelé. Le trou 18 est un par 5 avec un passage au-dessus de l\'eau sur le deuxième coup qui pousse beaucoup à prendre une décision qu\'ils regrettent ensuite.',
      footer: 'Le plus ancien parcours de l\'île · Seve a gagné ici',
    },
    'Son Muntaner': {
      location: 'Son Vida · Palma',
      text: 'Élu Meilleur Parcours de Golf d\'Espagne aux World Golf Awards 2025. Le parcours original du domaine du Castillo Hotel Son Vida, redessiné par Severiano Ballesteros. Vues sur la Baie de Palma depuis les trous les plus élevés. Un olivier millénaire se trouve sur le 15 — en jeu, pas seulement décoratif. Accueille le Mallorca Golf Open sur le DP World Tour.',
      footer: 'Meilleur en Espagne 2025 · DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella · Son Vida, Palma',
      text: 'Le plus accessible des parcours Arabella. De longs fairways ouverts et quatre positions de départ différentes le rendent vraiment adapté à tous les niveaux. Du trou 8, le point le plus haut du parcours, on frappe directement vers la Cathédrale de Palma. Tiger Woods y a joué avec son fils Charlie en juillet 2022. Les murs en pierre sont en jeu — pas seulement décoratifs.',
      footer: 'Idéal pour débutants · Tiger Woods a joué ici',
    },
    'T Golf Palma Puntiró': {
      location: 'Palma · 10 km du centre-ville',
      text: 'Le seul parcours conçu par Jack Nicklaus à Majorque, ouvert en 2006 et entièrement rénové en 2022. Nicklaus l\'a conçu pour suivre le terrain existant sans modification. Des pins indigènes, des oliviers sauvages et des caroubiers forment le rough tout au long, sans bâtiments visibles depuis aucun trou.',
      footer: 'Seul design Nicklaus sur l\'île',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella · Centre de Palma',
      text: 'Neuf trous, par 27, 638 mètres au total. Le seul parcours officiel de pitch & putt à Majorque. Les neuf trous sont des par 3 de 50 à 100 m, exigeant la précision plutôt que la puissance. Le point de départ naturel pour les débutants et les juniors, un bon échauffement avant un parcours complet, ou une option utile pour un accompagnateur non-golfeur.',
      footer: 'Parfait pour débutants et juniors',
    },
    'Golf Son Termes': {
      location: 'Bunyola · 10 km de Palma',
      text: 'Probablement le parcours de l\'île qui s\'intègre le mieux à son environnement — il se trouve dans une vallée de la Tramuntana avec les montagnes formant un décor sur chaque trou. Court avec par 70 et 5 285 m, mais le terrain compense avec des changements de dénivelé constants et des fairways étroits — buggy recommandé. Le restaurant surplombe le 18e green et la Baie de Palma.',
      footer: 'Vallée de la Tramuntana · 10 min de Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa · 20 km de Palma',
      text: 'Le seul parcours public du groupe Santa Ponsa avec un vrai pedigree du European Tour — il a accueilli le Mallorca Golf Open du DP World Tour 2021. L\'un des parcours les plus longs de l\'île ; le trou 10 avec 590 m est l\'un des plus longs par 5 d\'Europe. Plusieurs départs partiellement aveugles et obstacles d\'eau. Les trous 5, 6 et 7 offrent certaines des meilleures vues sur la Serra de Tramuntana.',
      footer: 'Accès public · Terrain du DP World Tour',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa · 20 km de Palma',
      text: 'Réservé aux membres et généralement calme. Beaucoup de départs rendent le driver un mauvais choix — un hybrid pour contrôler la position est souvent la décision la plus judicieuse. L\'alignement d\'arbres est dense et une balle au mauvais endroit signifie généralement revenir avec un chip. Le 18 : un par 3 avec un green en forme de l\'île de Majorque elle-même — un détail à connaître avant d\'arriver.',
      note: '"Le green du 18 a la forme de Majorque elle-même. Un de ces détails à connaître avant d\'arriver."',
      footer: 'Accès organisable pour les clients',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa · 20 km de Palma',
      text: 'Neuf trous à travers une communauté résidentielle. La plupart des trous sont courts — bien adapté aux débutants ou à quiconque veut travailler le jeu court sans s\'engager dans un parcours complet. Le deuxième trou est mon préféré : malgré la courte distance, un départ précis est nécessaire.',
      footer: 'Bon pour le jeu court · Accès organisable',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat · 7 km de Palma',
      text: 'Sept kilomètres de Palma dans une vallée boisée — vraiment paisible pour un parcours si proche de la ville. Vues sur la Baie de Palma, l\'île de Cabrera et le vieux Château de Bendinat. Note : le clubhouse principal est en travaux, avec une réouverture prévue en mai/juin 2026. Green fees visiteurs limités par jour — réserver à l\'avance.',
      footer: 'Rénovation du clubhouse jusqu\'en mai/juin 2026',
    },
    'T Golf Calvià (Poniente)': {
      location: 'Calvià · 12 km de Palma',
      text: 'Conçu à l\'origine par John Harris en 1978 et entièrement reconstruit suite à un investissement de 10 millions d\'euros — nouveau parcours, nouveau clubhouse, proposition entièrement différente. Quinze lacs, fairways ouverts encourageant le driver, grands greens ondulés. La mer d\'un côté et la Tramuntana de l\'autre. A accueilli le Mallorca Open.',
      footer: 'Hôte du Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar · 40 km de Palma',
      text: 'Le trou 6 est le plus long par 5 d\'Espagne avec 609 mètres. Construit dans les collines au-dessus de Camp de Mar sans compromis. Apporter des balles supplémentaires et pas d\'ego — le rough est réel et les fairways étroits. Pas adapté aux débutants sans handicap. L\'expérience, les vues et la difficulté en font l\'un des parcours les plus mémorables de l\'île.',
      footer: 'Le parcours le plus difficile de l\'île',
    },
    'Golf Maioris': {
      location: 'Llucmajor · 20 km de Palma',
      text: 'Un parcours intéressant car le neuf avant et le neuf arrière semblent avoir deux philosophies de design uniques — le premier neuf écossais et vallonné, le second plus américain et plat. Quinze minutes de l\'aéroport et moins fréquenté que les parcours plus proches de Palma. Possède l\'un des rares practice sur herbe publics de l\'île.',
      footer: '15 min de l\'aéroport · Practice sur herbe public',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor · 15 km de Palma',
      text: 'Larges fairways accueillants pour les joueurs qui construisent encore leur confiance au départ, tandis que la longueur et cinq lacs maintiennent les meilleurs joueurs honnêtes. Construit sur un ancien domaine de chasse près de Llucmajor, à dix minutes de l\'aéroport. Conçu par Francisco Lopez-Segalés, ouvert en 1994.',
      footer: 'Bon pour débutants · Resort Marriott',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor · 15 km de Palma',
      text: 'Le plus exigeant des deux parcours de Son Antem et où se tiennent la plupart des tournois du resort. Fairways plus étroits, rough moins indulgent, greens ondulés entourés de bunkers. Serpente à travers une finca mallorquine traditionnelle avec vues sur la montagne de Randa.',
      footer: 'Plus difficile que East · Site de tournois',
    },
    'Capdepera Golf': {
      location: 'Artà · 65 km de Palma',
      text: 'Dan Maples l\'a conçu pour suivre le paysage existant. La première moitié parcourt une large vallée — ouverte, relativement douce. Le neuf retour grimpe dans les collines du Llevant et devient un test beaucoup plus technique. Le trou 15, en haut des montagnes avec des vues sur toute la vallée jusqu\'à la côte, a été choisi comme le meilleur trou de l\'île par Mallorca Magazin.',
      footer: 'À combiner idéalement avec Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera · 65 km de Palma',
      text: 'Chacun des neuf premiers trous a son propre caractère. Le trou 4 offre des vues sur Minorque par temps clair. Le trou 9 a une cabane en pierre traditionnelle au milieu du fairway — un obstacle unique à Majorque. Le trou 18 se termine par une ondulation triple sur le green visible depuis la terrasse du clubhouse.',
      footer: 'Vues sur Minorque par temps clair',
    },
    'Pula Golf': {
      location: 'Son Servera · 55 km de Palma',
      text: 'Entièrement redessiné par Olazábal entre 2004 et 2006, accueillant ensuite huit événements du European Tour. Excellentes installations d\'entraînement incluant la technologie Trackman Range. Federer et Nadal ont joué une partie ici en juillet 2025. Pep Guardiola est un habitué.',
      footer: 'Design Olazábal · Hôte du European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera · 55 km de Palma',
      text: 'Fondé en 1967, l\'un des plus anciens parcours de l\'île. Un parcours de parc le long de la Costa de los Pinos avec de larges fairways et un rough détendu. Les trous 3 à 7 sont l\'exception : des fairways étroits bordés d\'arbres qui montent dans les collines et s\'entrelacent entre les lacs. Eau sur six trous.',
      footer: 'L\'un des plus anciens parcours de l\'île',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alcúdia · 55 km de Palma',
      text: 'Mon deuxième parcours phare et sans doute le plus pittoresque de Majorque. Design de Robert Trent Jones Jr. Le phare d\'Alcanada, visible depuis 16 des 18 trous, est l\'un des monuments de golf les plus photographiés d\'Europe. Cinquante-huit bunkers sont disposés stratégiquement sur le tracé — ils exigent de l\'attention sur chaque approche.',
      text2: 'Le parcours accueille le Rolex Challenge Tour Grand Final, qui revient pour sa sixième édition en octobre 2026. Les greens sont très ondulés et extrêmement rapides. La terrasse du restaurant après la partie est l\'un des plus beaux endroits de l\'île. Prévoir 50 minutes depuis Palma — ça vaut chaque minute.',
      note: '"L\'un des plus beaux parcours que l\'on puisse jouer n\'importe où en Europe. Le phare sur le 17 est inoubliable."',
      footer: 'Rolex Challenge Tour Grand Final Oct. 2026 · 50 min de Palma',
    },
    'Golf Pollensa': {
      location: 'Pollença · 60 km de Palma',
      text: 'Neuf trous à l\'entrée de la ville de Pollença, intégrés dans la colline avec des vues sur la Tramuntana et les baies de Pollença et d\'Alcúdia. Conçu par José Gancedo en 1986. Une partie dure environ 90 minutes — un échauffement facile ou une bonne option pour un jour où l\'on veut du golf sans engagement total.',
      footer: 'Partie rapide · 90 minutes',
    },
  },
  zh: {
    'Golf Son Gual': {
      location: '帕尔马 · 距市中心11公里',
      text: '托马斯·希梅尔2007年的设计拥有其独特的风势生态系统——其海拔位置和树木覆盖使风在每个球洞的表现都不同。果岭快速且抬高；失误的落点比挥杆方式更为关键。第15至18洞的收官段是欧洲高尔夫最精彩的四个连续球洞之一。拉法·纳达尔称这是他在岛上最喜欢的球场。',
      note: '"第16洞的风与第7洞的风是不同的挑战。这正是这个球场令人回味无穷的原因。"',
      footer: '拉法最爱 · 必打球场',
    },
    'Golf Son Vida': {
      location: '阿拉贝拉 · 帕尔马Son Vida',
      text: '马略卡岛最古老的球场，建于1964年。塞维亚诺·巴列斯特罗斯在1990年欧巡赛季后赛中在此获胜。球道蜿蜒穿过Son Vida住宅区，路线紧凑，高度变化明显。第18洞是一个5杆洞，第二杆需要越水，诱使很多球手做出事后后悔的决定。',
      footer: '岛上最古老的球场 · 塞维在此夺冠',
    },
    'Son Muntaner': {
      location: 'Son Vida · 帕尔马',
      text: '荣获2025年世界高尔夫奖「西班牙最佳高尔夫球场」称号。卡斯蒂略酒店Son Vida庄园的原始球场，由塞维亚诺·巴列斯特罗斯重新设计。从较高球洞可俯瞰帕尔马湾。第15洞旁有一棵千年橄榄树——在场内，不只是装饰。主办DP世界巡回赛马略卡高尔夫公开赛。',
      footer: '2025年西班牙最佳 · DP世界巡回赛',
    },
    'Golf Son Quint': {
      location: '阿拉贝拉 · 帕尔马Son Vida',
      text: '阿拉贝拉系列中最易上手的球场。宽阔的球道和四个不同的发球台使其真正适合各个水平的球手。从球场最高点第8洞出发，可以直接面向帕尔马大教堂挥杆。老虎伍兹于2022年7月与儿子查理在此打球。石墙是场内障碍——不只是装饰。',
      footer: '适合初学者 · 老虎伍兹曾在此打球',
    },
    'T Golf Palma Puntiró': {
      location: '帕尔马 · 距市中心10公里',
      text: '马略卡岛唯一一个由杰克·尼克劳斯设计的球场，2006年开业，2022年全面翻新。尼克劳斯按照现有地形设计，未做人工平整。全程以本地松树、野生橄榄树和角豆树作为长草区，从任何球洞都看不到建筑物。',
      footer: '岛上唯一尼克劳斯设计',
    },
    'Palma Pitch & Putt': {
      location: '阿拉贝拉 · 帕尔马市中心',
      text: '9个球洞，标准杆27，全长638米。马略卡岛唯一官方短洞高尔夫球场。九个球洞均为3杆洞，距离50至100米，考验准确性而非力量。是初学者和青少年的天然起点，也是正式一轮前的热身选择，或为非高尔夫同伴提供体验的好去处。',
      footer: '适合初学者和青少年',
    },
    'Golf Son Termes': {
      location: '布尼奥拉 · 距帕尔马10公里',
      text: '可能是岛上与周围环境融合最自然的球场——坐落在特拉蒙塔纳山脉的山谷中，群山在每个球洞都构成背景。标准杆70，全长5285米，地形以持续的高度变化和狭窄球道补足了短距离的不足——建议乘坐球车。餐厅俯瞰第18洞果岭和帕尔马湾。',
      footer: '特拉蒙塔纳山谷 · 距帕尔马10分钟',
    },
    'Golf Santa Ponsa 1': {
      location: '桑塔蓬萨 · 距帕尔马20公里',
      text: '桑塔蓬萨球场群中唯一的公共球场，拥有真实的欧巡赛背景——曾举办2021年DP世界巡回赛马略卡高尔夫公开赛。岛上最长的球场之一，第10洞590米是欧洲最长的5杆洞之一。多个部分盲洞开球和水障碍。第5、6、7洞提供岛上一些最佳的特拉蒙塔纳山脉景观。',
      footer: '公众球场 · DP世界巡回赛举办地',
    },
    'Golf Santa Ponsa 2': {
      location: '桑塔蓬萨 · 距帕尔马20公里',
      text: '仅限会员且通常安静。许多开球使司机杆成为错误选择——用球道木控制落位往往是更明智的决定。树木排列密集，球落错地方通常意味着只能削球出来。第18洞：一个3杆洞，果岭形状酷似马略卡岛本身——上场前值得了解的细节。',
      note: '"第18洞的果岭形状就像马略卡岛本身。上场前值得了解的细节之一。"',
      footer: '可为客户安排入场',
    },
    'Golf Santa Ponsa 3': {
      location: '桑塔蓬萨 · 距帕尔马20公里',
      text: '九个球洞穿越住宅社区。大多数球洞较短——适合初学者或希望练习短杆而不进行完整一轮的球手。第2洞是我的最爱：距离虽短，但需要精准的开球，这正是这类球场应有的迷惑性测试。',
      footer: '适合短杆练习 · 可安排入场',
    },
    'Real Golf de Bendinat': {
      location: '本迪纳特 · 距帕尔马7公里',
      text: '距帕尔马7公里，坐落在林木茂密的山谷中——对于如此靠近城市的球场而言，环境格外宁静。可俯瞰帕尔马湾、卡布雷拉岛和古老的本迪纳特城堡。注意：主会所目前正在翻修，预计于2026年5月/6月重新开放。每日游客开球资格有限——提前预订。',
      footer: '会所翻修至2026年5月/6月',
    },
    'T Golf Calvià (Poniente)': {
      location: '卡尔维亚 · 距帕尔马12公里',
      text: '最初由约翰·哈里斯于1978年设计，经过1000万欧元的翻新后全面重建——新球场、新会所，完全不同的格局。十五个湖泊，开阔球道鼓励使用司机杆，大型起伏果岭。一侧是大海，另一侧是特拉蒙塔纳山脉。曾举办马略卡公开赛。',
      footer: '马略卡公开赛举办地',
    },
    'Golf de Andratx': {
      location: '坎普德马尔 · 距帕尔马40公里',
      text: '第6洞以609米成为西班牙最长的5杆洞。毫不妥协地建在坎普德马尔上方的山丘中。准备备用球，放下自尊——长草区是真实的，球道狭窄。不适合没有差点证书的初学者。这里的体验、景色和难度使其成为岛上最难忘的一轮之一。',
      footer: '岛上最具挑战性的球场',
    },
    'Golf Maioris': {
      location: '卢克马约尔 · 距帕尔马20公里',
      text: '有趣的是，前九洞和后九洞感觉像是两种不同的设计理念——前九洞具有苏格兰风格的起伏，后九洞更接近美式的平坦风格。距机场仅15分钟，比靠近帕尔马的球场人少——是当天头场或末场的低调好选择。拥有岛上少有的公共草地练习场之一。',
      footer: '距机场15分钟 · 公共草地练习场',
    },
    'Golf Son Antem East': {
      location: '卢克马约尔 · 距帕尔马15公里',
      text: '宽阔慷慨的球道欢迎仍在积累开球信心的球手，而长度和五个湖泊则让更好的球手保持诚实。建在卢克马约尔附近的前狩猎庄园上，距机场十分钟。由弗朗西斯科·洛佩斯·塞加莱斯设计，1994年开业。',
      footer: '适合初学者 · 万豪度假村',
    },
    'Golf Son Antem West': {
      location: '卢克马约尔 · 距帕尔马15公里',
      text: '两个Son Antem球场中更具挑战性的一个，也是度假村大多数锦标赛的举办地。更窄的球道，更少宽容的长草区，被沙坑环绕的起伏果岭。穿越传统马略卡农庄，可欣赏兰达山的景色。',
      footer: '比East更具挑战性 · 锦标赛场地',
    },
    'Capdepera Golf': {
      location: '阿尔塔 · 距帕尔马65公里',
      text: '丹·梅普尔斯在设计时尽量遵循现有地形。前半段穿越宽阔的山谷——开阔，相对平缓。后九洞攀上莱万特山丘，成为技术性更强的考验。第15洞位于山顶，可俯瞰整个山谷直至海岸，被《马略卡杂志》评选为岛上最佳球洞。',
      footer: '建议与卡尼亚梅尔组合打',
    },
    'Canyamel Golf': {
      location: '卡普德佩拉 · 距帕尔马65公里',
      text: '前九洞每个球洞都有其独特性格。第4洞在晴天可远眺梅诺卡岛。第9洞球道中间有一座传统石屋——马略卡独有的障碍。第18洞以从会所露台可见的三重波浪果岭起伏作为收尾。',
      footer: '晴天可远眺梅诺卡岛',
    },
    'Pula Golf': {
      location: '松塞尔韦拉 · 距帕尔马55公里',
      text: '由奥拉萨巴尔在2004至2006年间全面重新设计，此后举办了八场欧巡赛赛事。优秀的练习设施，包括Trackman Range技术。费德勒和纳达尔于2025年7月在此打了一轮球。瓜迪奥拉是常客。',
      footer: '奥拉萨巴尔设计 · 欧巡赛举办地',
    },
    'Golf Club Son Servera': {
      location: '松塞尔韦拉 · 距帕尔马55公里',
      text: '创建于1967年，是岛上最古老的球场之一。沿科斯塔德洛斯皮诺斯的林地球场，球道宽敞，长草区轻松。第3至7洞是例外：狭窄的树木围绕球道爬上山丘，穿梭于湖泊之间。六个球洞有水障碍。',
      footer: '岛上最古老的球场之一',
    },
    'Club de Golf Alcanada': {
      location: '阿尔库迪亚港 · 距帕尔马55公里',
      text: '我的第二个主要球场，也可能是马略卡岛最美丽的。小罗伯特·特伦特·琼斯的设计。阿尔卡纳达灯塔从18个球洞中的16个可见，是欧洲最受拍摄的高尔夫标志之一。五十八个沙坑在球场中战略性分布——每次近打都需要注意。',
      text2: '球场将于2026年10月迎来第六届劳力士挑战巡回赛总决赛。果岭起伏强烈，速度极快。赛后的餐厅露台是岛上最美的地方之一。从帕尔马出发预留50分钟——每分钟都值得。',
      note: '"这是您能在欧洲任何地方打到的最美丽的球场之一。第17洞的灯塔令人难忘。"',
      footer: '2026年10月劳力士挑战巡回赛总决赛 · 距帕尔马50分钟',
    },
    'Golf Pollensa': {
      location: '波连萨 · 距帕尔马60公里',
      text: '九个球洞位于波连萨镇入口，融入山坡，可俯瞰特拉蒙塔纳山脉以及波连萨湾和阿尔库迪亚湾。由何塞·甘塞多于1986年设计。一轮约需90分钟——轻松热身或适合不想投入完整一轮的高尔夫日。',
      footer: '快速一轮 · 90分钟',
    },
  },
  nl: {
    'Golf Son Gual': {
      location: 'Palma · 11 km van het stadscentrum',
      text: 'Thomas Himmels ontwerp uit 2007 heeft zijn eigen wind-ecosysteem — de verhoogde ligging en boomkap zorgen ervoor dat de wind op elke hole anders kan gedragen. De greens zijn snel en verhoogd; waar je mist telt meer dan hoe je slaat. Het slot — holes 15 tot 18 — behoort tot de vier beste opeenvolgende holes in het Europese golf. Rafa Nadal heeft gezegd dat dit zijn favoriete baan op het eiland is.',
      note: '"De wind op 16 is een andere uitdaging dan de wind op 7. Dat maakt de baan zo herspelbaar."',
      footer: 'Rafa\'s favoriet · Must-play',
    },
    'Golf Son Vida': {
      location: 'Arabella · Son Vida, Palma',
      text: 'De oudste golfbaan van Mallorca, geopend in 1964. Seve Ballesteros won hier in 1990 in een European Tour playoff. Het parcours slingert door de residentiële wijk Son Vida met strakke routing en hoogteverschillen. Hole 18 is een par 5 met een wateroversteek bij de tweede slag die velen verleidt tot een beslissing die ze later betreuren.',
      footer: 'Oudste baan van het eiland · Seve won hier',
    },
    'Son Muntaner': {
      location: 'Son Vida · Palma',
      text: 'Uitgeroepen tot Beste Golfbaan van Spanje op de World Golf Awards 2025. De originele baan van het Castillo Hotel Son Vida-landgoed, herontworpen door Severiano Ballesteros. Uitzichten over de Baai van Palma vanaf de hogere holes. Een duizend jaar oude olijfboom staat op hole 15 — in spel, niet alleen decoratief. Gastheer van de Mallorca Golf Open op de DP World Tour.',
      footer: 'Beste van Spanje 2025 · DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella · Son Vida, Palma',
      text: 'De meest toegankelijke van de Arabella-banen. Lange, open fairways en vier verschillende teeposities maken het echt geschikt voor elk niveau. Vanaf hole 8, het hoogste punt van de baan, sla je direct in de richting van de Kathedraal van Palma. Tiger Woods speelde hier in juli 2022 met zijn zoon Charlie. De stenen muren zijn in spel — niet alleen decoratief.',
      footer: 'Ideaal voor beginners · Tiger Woods speelde hier',
    },
    'T Golf Palma Puntiró': {
      location: 'Palma · 10 km van het stadscentrum',
      text: 'De enige door Jack Nicklaus ontworpen baan op Mallorca, geopend in 2006 en volledig gerenoveerd in 2022. Nicklaus ontwierp het om het bestaande terrein te volgen zonder aanpassing. Inheemse dennen, wilde olijfbomen en johannesbroodbomen vormen de rough, zonder gebouwen zichtbaar vanaf enige hole.',
      footer: 'Enig Nicklaus-ontwerp op het eiland',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella · Centraal Palma',
      text: 'Negen holes, par 27, 638 meter totaal. De enige officiële pitch & putt baan op Mallorca. Alle negen holes zijn par 3 van 50–100 m, waarbij precisie vereist is in plaats van kracht. Het natuurlijke startpunt voor beginners en junioren, een goede warming-up voor een volledige ronde elders, of een handige optie voor een niet-golfende partner.',
      footer: 'Perfect voor beginners en junioren',
    },
    'Golf Son Termes': {
      location: 'Bunyola · 10 km van Palma',
      text: 'Waarschijnlijk de baan op het eiland die het meest geïntegreerd is met zijn omgeving — het ligt in een dal van de Tramuntana met de bergen als achtergrond op elke hole. Kort met par 70 en 5.285 m, maar het terrein compenseert met constante hoogteverschillen en smalle fairways — buggy aanbevolen. Het restaurant kijkt uit op de 18e green en de Baai van Palma.',
      footer: 'Tramuntanadal · 10 min van Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa · 20 km van Palma',
      text: 'De enige publieke baan van de Santa Ponsa-groep met echte European Tour-pedigree — het was gastheer van de DP World Tour Mallorca Golf Open 2021. Een van de langste banen op het eiland; hole 10 met 590 m is een van de langste par 5\'s in Europa. Meerdere gedeeltelijk blinde teeshots en waterhindernissen. Holes 5, 6 en 7 bieden enkele van de beste uitzichten op de Serra de Tramuntana.',
      footer: 'Openbaar toegankelijk · DP World Tour-terrein',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa · 20 km van Palma',
      text: 'Alleen voor leden en meestal rustig. Veel teeshots maken de driver een slechte keuze — een hybrid om de positie te controleren is vaak de slimmere beslissing. De bomenrijen zijn dicht en een bal op de verkeerde plek betekent meestal terug chippen. Hole 18: een par 3 met een green in de vorm van het eiland Mallorca zelf — een detail dat het waard is te weten voor je begint.',
      note: '"De green van hole 18 heeft de vorm van Mallorca zelf. Eén van die details die je wilt weten voor je er bent."',
      footer: 'Toegang organiseerbaar voor cliënten',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa · 20 km van Palma',
      text: 'Negen holes door een residentiële gemeenschap. De meeste holes zijn kort — goed geschikt voor beginners of voor iemand die het kortspel wil oefenen zonder een volledige ronde te spelen. Hole 2 is mijn favoriet: ondanks de korte afstand is een nauwkeurig teeshot vereist.',
      footer: 'Goed voor kortspel · Toegang organiseerbaar',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat · 7 km van Palma',
      text: 'Zeven kilometer van Palma in een bebost dal — echt rustig voor een baan zo dicht bij de stad. Uitzichten over de Baai van Palma, het eiland Cabrera en het oude Kasteel van Bendinat. Opmerking: het hoofdclubhouse is momenteel in renovatie, met volledige heropening gepland voor mei/juni 2026. Beperkte bezoekers-greenfees per dag — van tevoren boeken.',
      footer: 'Clubhouse-renovatie tot mei/juni 2026',
    },
    'T Golf Calvià (Poniente)': {
      location: 'Calvià · 12 km van Palma',
      text: 'Oorspronkelijk ontworpen door John Harris in 1978 en volledig herbouwd na een investering van 10 miljoen euro — nieuwe baan, nieuw clubhouse, een heel ander aanbod. Vijftien meren, open fairways die de driver aanmoedigen, grote golvende greens. De zee aan één kant en de Tramuntana aan de andere. Heeft de Mallorca Open georganiseerd.',
      footer: 'Gastheer Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar · 40 km van Palma',
      text: 'Hole 6 is de langste par 5 van Spanje met 609 meter. Zonder compromissen gebouwd in de heuvels boven Camp de Mar. Extra ballen meenemen en geen ego — de rough is echt en de fairways smal. Niet geschikt voor beginners zonder handicapcertificaat. De ervaring, uitzichten en moeilijkheid maken het tot een van de meest memorabele ronden op het eiland.',
      footer: 'Moeilijkste baan van het eiland',
    },
    'Golf Maioris': {
      location: 'Llucmajor · 20 km van Palma',
      text: 'Een interessante baan omdat de voor- en achterkant aanvoelen als twee unieke ontwerpfilosofieën — de eerste negen Schots en heuvelachtig, de tweede meer Amerikaans en vlakker. Vijftien minuten van het vliegveld en minder druk dan de banen dichter bij Palma. Heeft een van de weinige openbare grasdrivingranges op het eiland.',
      footer: '15 min van luchthaven · Openbare grasdrivingrange',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor · 15 km van Palma',
      text: 'Brede, ruime fairways die spelers verwelkomen die nog vertrouwen opbouwen vanaf de tee, terwijl de lengte en vijf meren betere spelers eerlijk houden. Gebouwd op een voormalig jachtlandgoed bij Llucmajor, tien minuten van het vliegveld. Ontworpen door Francisco Lopez-Segalés, geopend in 1994.',
      footer: 'Goed voor beginners · Marriott resort',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor · 15 km van Palma',
      text: 'De meest veeleisende van de twee Son Antem-banen en waar de meeste toernooien van het resort worden gehouden. Smallere fairways, minder vergevingsgezinde rough, golvende greens omgeven door bunkers. Slingert door een traditionele Mallorquijnse finca met uitzicht op de Randa-berg.',
      footer: 'Uitdagender dan East · Toernooiterrein',
    },
    'Capdepera Golf': {
      location: 'Artà · 65 km van Palma',
      text: 'Dan Maples ontwierp dit om het bestaande landschap te volgen. De eerste helft loopt door een breed dal — open, relatief zacht. De achterkant klimt de Llevant-heuvels in en wordt een veel technischer uitdaging. Hole 15, hoog in de bergen met uitzicht over het hele dal tot aan de kust, werd door Mallorca Magazin gekozen als de beste hole van het eiland.',
      footer: 'Bij voorkeur te combineren met Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera · 65 km van Palma',
      text: 'Elk van de eerste negen holes heeft zijn eigen karakter. Hole 4 heeft op een heldere dag uitzicht op Menorca. Hole 9 heeft een traditioneel stenen hutje in het midden van de fairway — een hindernis die uniek is voor Mallorca. Hole 18 eindigt met een drievoudige golfbeweging op de green zichtbaar vanuit de clubhuisterrasse.',
      footer: 'Zicht op Menorca op heldere dagen',
    },
    'Pula Golf': {
      location: 'Son Servera · 55 km van Palma',
      text: 'Volledig herontworpen door Olazábal tussen 2004 en 2006, daarna gastheer van acht European Tour-evenementen. Uitstekende oefenfaciliteiten inclusief Trackman Range-technologie. Federer en Nadal speelden hier in juli 2025 een ronde. Pep Guardiola is een vaste gast.',
      footer: 'Olazábal-ontwerp · Gastheer European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera · 55 km van Palma',
      text: 'Opgericht in 1967, een van de oudste banen op het eiland. Een parklandbaan langs de Costa de los Pinos met ruime fairways en ontspannen rough. Holes 3 tot 7 zijn de uitzondering: smalle, met bomen omzoomde fairways die de heuvels in klimmen en tussen meren weven. Water op zes holes.',
      footer: 'Een van de oudste banen op het eiland',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alcúdia · 55 km van Palma',
      text: 'Mijn tweede ankerbaan en waarschijnlijk het meest schilderachtige van Mallorca. Ontwerp van Robert Trent Jones Jr. De vuurtoren van Alcanada, zichtbaar vanaf 16 van de 18 holes, is een van de meest gefotografeerde golffaçades in Europa. Achtenvijftig bunkers zijn strategisch over het parcours verdeeld — ze vereisen aandacht bij elke benadering.',
      text2: 'De baan is gastheer van de Rolex Challenge Tour Grand Final, die in oktober 2026 voor de zesde keer terugkeert. De greens zijn sterk golvend en extreem snel. Het restaurantterras na de ronde is een van de mooiste plekken op het eiland. Reken 50 minuten vanaf Palma — elke minuut is het waard.',
      note: '"Een van de mooiste ronden die je ergens in Europa kunt spelen. De vuurtoren op 17 is onvergetelijk."',
      footer: 'Rolex Challenge Tour Grand Final okt. 2026 · 50 min van Palma',
    },
    'Golf Pollensa': {
      location: 'Pollença · 60 km van Palma',
      text: 'Negen holes aan de ingang van de stad Pollença, geïntegreerd in de heuvel met uitzicht op de Tramuntana en de baaien van Pollença en Alcúdia. Ontworpen door José Gancedo in 1986. Een ronde duurt ongeveer 90 minuten — een gemakkelijke warming-up of een goede optie voor een dag waarop je golf wilt zonder volledige inzet.',
      footer: 'Snelle ronde · 90 minuten',
    },
  },
  sv: {
    'Golf Son Gual': {
      location: 'Palma · 11 km från centrum',
      text: 'Thomas Himmels design från 2007 har sitt eget vindekosystem — dess upphöjda läge och trädtäckning gör att vinden kan bete sig annorlunda på varje hål. Greenerna är snabba och upphöjda; var du missar spelar större roll än hur du svingar. Avslutningssträckan — hålen 15 till 18 — är bland de fyra finaste konsekutiva hålen i europeisk golf. Rafa Nadal har sagt att detta är hans favoritbana på ön.',
      note: '"Vinden på 16 är en annan utmaning än vinden på 7. Det är det som gör banan så återspelbar."',
      footer: 'Rafas favorit · Måste spelas',
    },
    'Golf Son Vida': {
      location: 'Arabella · Son Vida, Palma',
      text: 'Mallorcas äldsta golfbana, öppnad 1964. Seve Ballesteros vann här i ett European Tour-playoff 1990. Layouten slingrar sig genom det bostadstunga Son Vida-området med tät routing och höjdvariationer. Hål 18 är ett par 5 med ett vattendrag på det andra slaget som lockar många till ett beslut de senare ångrar.',
      footer: 'Öns äldsta bana · Seve vann här',
    },
    'Son Muntaner': {
      location: 'Son Vida · Palma',
      text: 'Utnämnd till Bästa Golfbana i Spanien på World Golf Awards 2025. Den ursprungliga banan på Castillo Hotel Son Vidas herrgård, omdesignad av Severiano Ballesteros. Utsikt över Palmas bukt från de högre hålen. Ett tusen år gammalt olivträd står vid hål 15 — i spel, inte bara som dekoration. Värd för Mallorca Golf Open på DP World Tour.',
      footer: 'Bäst i Spanien 2025 · DP World Tour',
    },
    'Golf Son Quint': {
      location: 'Arabella · Son Vida, Palma',
      text: 'Den mest tillgängliga av Arabella-banorna. Långa, öppna fairways och fyra olika tee-positioner gör den genuint lämplig för alla nivåer. Från hål 8, banans högsta punkt, slår man direkt mot Palmas katedral. Tiger Woods spelade här med sin son Charlie i juli 2022. Stenmurarna är i spel — inte bara dekoration.',
      footer: 'Idealisk för nybörjare · Tiger Woods spelade här',
    },
    'T Golf Palma Puntiró': {
      location: 'Palma · 10 km från centrum',
      text: 'Den enda Jack Nicklaus-designade banan på Mallorca, öppnad 2006 och helt renoverad 2022. Nicklaus designade den för att följa det befintliga terrängen utan modifiering. Inhemska tallar, vilda olivträd och johannesbrödträd bildar roughen genomgående utan synliga byggnader från något hål.',
      footer: 'Enda Nicklaus-design på ön',
    },
    'Palma Pitch & Putt': {
      location: 'Arabella · Centrala Palma',
      text: 'Nio hål, par 27, 638 meter totalt. Den enda officiella pitch & putt-banan på Mallorca. Alla nio hål är par 3 på 50–100 m, vilket kräver precision snarare än kraft. Den naturliga startpunkten för nybörjare och juniorer, en bra uppvärmning inför en full runda på annan bana, eller ett användbart alternativ för en icke-golfande sällskap.',
      footer: 'Perfekt för nybörjare och juniorer',
    },
    'Golf Son Termes': {
      location: 'Bunyola · 10 km från Palma',
      text: 'Förmodligen den bana på ön som känns mest integrerad med sin omgivning — den ligger i en dal i Tramuntana med bergen som bakgrund på varje hål. Kort med par 70 och 5 285 m, men terrängen kompenserar med ständiga höjdvariationer och smala fairways — buggy rekommenderas. Restaurangen blickar ut över det 18:e greenet och Palmas bukt.',
      footer: 'Tramuntanadal · 10 min från Palma',
    },
    'Golf Santa Ponsa 1': {
      location: 'Santa Ponsa · 20 km från Palma',
      text: 'Den enda publika banan i Santa Ponsa-gruppen med äkta European Tour-meriter — den var värd för DP World Tour Mallorca Golf Open 2021. En av öns längsta banor; hål 10 med 590 m är ett av Europas längsta par 5. Flera delvis blinda teeshots och vattenhinder. Hålen 5, 6 och 7 erbjuder några av öns bästa utsikter över Serra de Tramuntana.',
      footer: 'Offentlig tillgång · DP World Tour-värd',
    },
    'Golf Santa Ponsa 2': {
      location: 'Santa Ponsa · 20 km från Palma',
      text: 'Endast för medlemmar och vanligtvis lugn. Många teeshots gör drivern till ett dåligt val — en hybrid för positionskontroll är ofta det klokare beslutet. Trädraden är tät och en boll på fel ställe innebär vanligtvis att chippa tillbaka. Hål 18: ett par 3 med ett green format som ön Mallorca själv — en detalj värd att känna till innan du kommer dit.',
      note: '"Det 18:e greenet är format som Mallorca. En av de detaljer man vill veta om innan man kommer dit."',
      footer: 'Tillgång kan arrangeras för klienter',
    },
    'Golf Santa Ponsa 3': {
      location: 'Santa Ponsa · 20 km från Palma',
      text: 'Nio hål genom ett bostadsområde. De flesta hålen är korta — väl lämpade för nybörjare eller den som vill öva det korta spelet utan att förbinda sig till en full runda. Det andra hålet är mitt favorit: trots det korta avståndet krävs ett precist teeshot.',
      footer: 'Bra för kortspel · Tillgång kan arrangeras',
    },
    'Real Golf de Bendinat': {
      location: 'Bendinat · 7 km från Palma',
      text: 'Sju kilometer från Palma i en skogsdal — genuint fridfull för en bana så nära staden. Utsikt över Palmas bukt, ön Cabrera och det gamla Bendinat-slottet. Obs: huvudklubhuset renoveras just nu, med full återöppning planerad till maj/juni 2026. Begränsade besökargreenfeeavgifter per dag — boka i förväg.',
      footer: 'Klubbhusrenovering till maj/juni 2026',
    },
    'T Golf Calvià (Poniente)': {
      location: 'Calvià · 12 km från Palma',
      text: 'Ursprungligen designad av John Harris 1978 och helt återuppbyggd efter en investering på 10 miljoner euro — ny bana, nytt klubbhus, ett helt annat erbjudande. Femton sjöar, öppna fairways som uppmuntrar till driver, stora kuperade greener. Havet på ena sidan och Tramuntana på den andra. Har arrangerat Mallorca Open.',
      footer: 'Värd för Mallorca Open',
    },
    'Golf de Andratx': {
      location: 'Camp de Mar · 40 km från Palma',
      text: 'Hål 6 är Spaniens längsta par 5 med 609 meter. Byggd i kullarna ovanför Camp de Mar utan kompromisser. Ta med extra bollar och lägg egot hemma — roughen är äkta och fairwaysarna smala. Inte lämplig för nybörjare utan handicapcertifikat. Upplevelsen, utsikterna och svårigheten gör det till en av öns mest minnesvärda rundor.',
      footer: 'Svåraste banan på ön',
    },
    'Golf Maioris': {
      location: 'Llucmajor · 20 km från Palma',
      text: 'En intressant bana i att den niorna fram och niorna bak känns som två unika designfilosofier — de första nio skotska och kuperade, de andra mer amerikanska och platta. Femton minuter från flygplatsen och mindre fullsatt än banorna närmre Palma. Har en av öns få offentliga gräsdrivingranges.',
      footer: '15 min från flygplatsen · Offentlig gräsdrivingrange',
    },
    'Golf Son Antem East': {
      location: 'Llucmajor · 15 km från Palma',
      text: 'Breda, generösa fairways som välkomnar spelare som fortfarande bygger upp förtroende från teet, medan längden och fem sjöar håller bättre spelare ärliga. Byggd på ett tidigare jaktställe nära Llucmajor, tio minuter från flygplatsen. Designad av Francisco Lopez-Segalés, öppnad 1994.',
      footer: 'Bra för nybörjare · Marriott resort',
    },
    'Golf Son Antem West': {
      location: 'Llucmajor · 15 km från Palma',
      text: 'Den mest krävande av de två Son Antem-banorna och där de flesta av resortens turneringar hålls. Smalare fairways, mindre förlåtande rough, kuperade greener omgivna av bunkrar. Slingrar sig genom en traditionell mallorquinsk finca med utsikt över Randa-berget.',
      footer: 'Svårare än East · Turneringsarena',
    },
    'Capdepera Golf': {
      location: 'Artà · 65 km från Palma',
      text: 'Dan Maples designade detta för att följa det befintliga landskapet. Den första halvan löper genom en bred dal — öppen, relativt mild. De bakre nio klättrar upp i Llevant-kullarna och blir ett mycket mer tekniskt test. Hål 15, högt upp i bergen med utsikt över hela dalen till kusten, valdes av Mallorca Magazin som öns bästa hål.',
      footer: 'Kombineras bäst med Canyamel',
    },
    'Canyamel Golf': {
      location: 'Capdepera · 65 km från Palma',
      text: 'Var och en av de första nio hålen har sin egen karaktär. Hål 4 har utsikt mot Menorca på klara dagar. Hål 9 har en traditionell stenstuga mitt i fairwayen — ett hinder unikt för Mallorca. Hål 18 avslutas med en trevågig undulation på greenet synlig från klubbhusterrassen.',
      footer: 'Utsikt mot Menorca på klara dagar',
    },
    'Pula Golf': {
      location: 'Son Servera · 55 km från Palma',
      text: 'Helt omdesignad av Olazábal mellan 2004 och 2006, som sedan arrangerade åtta European Tour-evenemang. Utmärkta träningsanläggningar inklusive Trackman Range-teknologi. Federer och Nadal spelade en runda här i juli 2025. Pep Guardiola är en regelbunden gäst.',
      footer: 'Olazábal-design · Värd för European Tour',
    },
    'Golf Club Son Servera': {
      location: 'Son Servera · 55 km från Palma',
      text: 'Grundad 1967, en av öns äldsta banor. En parklayoutbana längs Costa de los Pinos med generösa fairways och avslappnad rough. Hålen 3 till 7 är undantaget: smala, trädklädda fairways som klättrar upp i kullarna och väver mellan sjöar. Vatten på sex hål.',
      footer: 'En av öns äldsta banor',
    },
    'Club de Golf Alcanada': {
      location: 'Port d\'Alcúdia · 55 km från Palma',
      text: 'Min andra ankarbana och troligen Mallorcas vackraste. Design av Robert Trent Jones Jr. Alcanada-fyren, synlig från 16 av de 18 hålen, är ett av Europas mest fotograferade golflandmärken. Femtioåtta bunkrar är strategiskt placerade över layouten — de kräver uppmärksamhet vid varje approach.',
      text2: 'Banan är värd för Rolex Challenge Tour Grand Final, som återvänder för sjätte gången i oktober 2026. Greenerna är kraftigt kuperade och extremt snabba. Restaurangterrassen efter rundan är en av öns vackraste platser. Räkna med 50 minuter från Palma — varje minut är värd det.',
      note: '"En av de vackraste rundorna du kan spela någonstans i Europa. Fyren på 17 är oförglömlig."',
      footer: 'Rolex Challenge Tour Grand Final okt. 2026 · 50 min från Palma',
    },
    'Golf Pollensa': {
      location: 'Pollença · 60 km från Palma',
      text: 'Nio hål vid ingången till Pollença stad, integrerade i sluttningen med utsikt över Tramuntana och Pollença- och Alcúdiabukterna. Designad av José Gancedo 1986. En runda tar ca 90 minuter — en enkel uppvärmning eller ett bra alternativ för en dag när man vill spela golf utan fullt engagemang.',
      footer: 'Snabb runda · 90 minuter',
    },
  },
}
const COURSE_DATA = [
  {
    region: 'palma',
    courses: [
      { expert: true, full: true, badges: ['★ Expert Pick', 'Most Recommended'], name: 'Golf Son Gual', img: '/images/courses/son-gual.jpg', location: 'Palma · 11km from city centre', pills: ['€80–165', 'Par 72 · Championship', 'Handicap required', 'Buggies available', 'Designed by Thomas Himmel, 2007'], difficulty: 90, diffScore: '9/10', text: "Thomas Himmel's 2007 design sits in its own wind ecosystem — its elevated position and tree coverage mean the wind can behave differently on every hole. The greens are fast and raised; where you miss matters more than how you swing. The closing stretch — holes 15 to 18 — is among the finest four holes in European golf. Rafa Nadal has said this is his favourite course on the island.", note: '"The wind on 16 is a different challenge to the wind on 7. Thats what makes the course so re-playable."', footer: 'Rafas favourite · Must-play' },
      { expert: false, badges: [], name: 'Golf Son Vida', img: '/images/courses/son-vida.webp', location: 'Arabella · Son Vida, Palma', pills: ['From €95', 'Par 72 · Est. 1964', 'Buggies available', 'Seve won here in 1990'], difficulty: 80, diffScore: '8/10', text: 'The oldest course in Mallorca, opened 1964. Seve Ballesteros won here in a European Tour playoff in 1990. The layout winds through the residential Son Vida neighbourhood with tight routing and elevation changes. The 18th hole is a par 5 with a water carry on the second shot that tempts many into a decision they later regret.', footer: 'Oldest course on the island · Seve won here' },
      { expert: false, badges: [], name: 'Son Muntaner', img: '/images/courses/son-muntaner.jpg', location: 'Son Vida · Palma', pills: ['Dynamic pricing', 'DP World Tour', 'Par 72', 'Best in Spain 2025'], difficulty: 70, diffScore: '7/10', text: 'Named Best Golf Course in Spain at the 2025 World Golf Awards. The original course at the Castillo Hotel Son Vida estate, redesigned by Severiano Ballesteros. Views across the Bay of Palma from the higher holes. A thousand-year-old olive tree sits on the 15th — in play, not decoration. Hosts the Mallorca Golf Open on the DP World Tour.', footer: 'Best in Spain 2025 · DP World Tour' },
      { expert: false, badges: [], name: 'Golf Son Quint', img: '/images/courses/son-quint.jpg', location: 'Arabella · Son Vida, Palma', pills: ['Dynamic pricing', 'Par 72 · Opened 2007', 'All levels welcome'], difficulty: 50, diffScore: '5/10', text: 'The most approachable of the Arabella courses. Long, open fairways and four different tee positions make it genuinely suited to any level. From hole 8, the highest point on the course, you tee off facing directly toward Palma Cathedral. Tiger Woods played here with his son Charlie in July 2022. The stone walls are in play — not just decoration.', footer: 'Best for beginners · Tiger Woods played here' },
      { expert: false, badges: [], name: 'T Golf Palma Puntiró', img: '/images/courses/t-golf-palma.jpg', location: 'Palma · 10km from city centre', pills: ['Dynamic pricing', 'Par 71 · 6,027m', 'Jack Nicklaus Design'], difficulty: 70, diffScore: '7/10', text: 'The only Jack Nicklaus-designed course in Mallorca, opened 2006 and completely renovated in 2022. Nicklaus designed it to follow the existing land without modification — no artificially flattened fairways. Native pines, wild olives, and carob trees form the rough throughout with no buildings visible from any hole.', footer: 'Only Nicklaus design on the island' },
      { expert: false, badges: [], name: 'Palma Pitch & Putt', img: '/images/courses/palma-pitch-putt.jpg', location: 'Arabella · Central Palma', pills: ['€20–35', '9 holes · All par 3', '45 minutes'], difficulty: 20, diffScore: '2/10', text: "Nine holes, par 27, 638 metres total. The only official pitch & putt course in Mallorca. All nine holes are par 3s ranging from 50–100m, demanding accuracy rather than power. The natural starting point for beginners and juniors, a good warm-up before a full round elsewhere, or a useful option for a non-golfing partner who wants to try the game.", footer: 'Perfect for beginners & juniors' },
      { expert: false, badges: [], name: 'Golf Son Termes', img: '/images/courses/son-termes.webp', location: 'Bunyola · 10km from Palma', pills: ['Dynamic pricing', 'Par 70 · 5,285m', 'Tramuntana valley'], difficulty: 60, diffScore: '6/10', text: "Probably the course on the island that feels most integrated with its surroundings — it sits in a valley in the Tramuntana with the mountains forming a backdrop on every hole. Short at par 70 and 5,285m, but the terrain compensates with constant elevation changes and narrow fairways — buggy recommended. The restaurant overlooks the 18th green and the Bay of Palma.", footer: 'Tramuntana valley · 10 mins from Palma' },
    ]
  },
  {
    region: 'southwest',
    courses: [
      { expert: true, badges: ['★ Expert Pick', 'DP World Tour Host'], name: 'Golf Santa Ponsa 1', img: '/images/courses/santa-ponsa-1.webp', location: 'Santa Ponsa · 20km from Palma', pills: ['€77–126', 'Par 72 · Longest on island', 'Public access'], difficulty: 80, diffScore: '8/10', text: "The only public course in the Santa Ponsa group with genuine European Tour pedigree — it hosted the 2021 DP World Tour Mallorca Golf Open. One of the longest courses on the island; the 10th hole at 590m is one of Europe's longest par-5s. Several partially blind tee shots and water hazards. Holes 5, 6 and 7 offer some of the best Tramuntana mountain views on the island.", footer: 'Public access · DP World Tour venue' },
      { expert: true, badges: ['★ Expert Pick', 'Members + Arranged Access'], name: 'Golf Santa Ponsa 2', img: '/images/courses/santa-ponsa-2.webp', location: 'Santa Ponsa · 20km from Palma', pills: ['Members only', 'Access via arrangement', 'Opened 1991'], difficulty: 70, diffScore: '7/10', text: "Members-only and usually quiet. Many tee shots make the driver a poor choice — a hybrid to control position is often the smarter call. The tree-lining is heavy and a ball in the wrong place usually means chipping back out. The 18th: a par-3 with a green shaped like the island of Mallorca itself — a detail worth knowing before you get there.", note: '"The 18th green is shaped like Mallorca itself. One of those details you want to know before you get there."', footer: 'Access arrangeable for clients' },
      { expert: true, badges: ['★ Expert Pick', 'Members + Arranged Access'], name: 'Golf Santa Ponsa 3', img: '/images/courses/santa-ponsa-3.webp', location: 'Santa Ponsa · 20km from Palma', pills: ['Members only', '9 holes', 'Shorter course'], difficulty: 40, diffScore: '4/10', text: "Nine holes winding through a residential community. Most holes are short — well-suited to beginners or to anyone who wants to work on approach play without committing to a full round. The second hole is my favourite: requires a precise tee shot despite the short distance, which is exactly the kind of deceptive test a course like this should include.", footer: 'Good for approach practice · Access arrangeable' },
      { expert: false, badges: [], name: 'Real Golf de Bendinat', img: '/images/courses/bendinat.jpg', location: 'Bendinat · 7km from Palma', pills: ['€74–123', 'Par 69 · 5,660m', 'Martin Hawtree, 1986'], difficulty: 60, diffScore: '6/10', text: "Seven kilometres from Palma in a wooded valley — genuinely peaceful for a course so close to the city. Views of the Bay of Palma, Cabrera Island, and the old Bendinat Castle. Note: the main clubhouse is currently under renovation, with full reopening planned May/June 2026. Limited visitor green fees per day — book ahead.", footer: 'Clubhouse renovation until May/June 2026' },
      { expert: false, badges: [], name: 'T Golf Calvià (Poniente)', img: '/images/courses/t-golf-calvia.webp', location: 'Calvià · 12km from Palma', pills: ['Dynamic pricing', 'Par 72 · 15 lakes', '€10M renovation'], difficulty: 70, diffScore: '7/10', text: "Originally designed by John Harris in 1978 and completely rebuilt following a €10 million renovation — new course, new clubhouse, entirely different proposition. Fifteen lakes, open fairways encouraging driver, large undulating greens. The sea on one side and the Tramuntana on the other. Has hosted the Mallorca Open.", footer: 'Mallorca Open host' },
      { expert: false, badges: [], name: 'Golf de Andratx', img: '/images/courses/golf-andratx.webp', location: 'Camp de Mar · 40km from Palma', pills: ['€96–140', 'Par 70 · Handicap max 28', 'Coastal Hills'], difficulty: 90, diffScore: '9/10', text: "The 6th is the longest par 5 in Spain at 609 metres. Built into the hills above Camp de Mar without compromise. Bring extra balls and no ego — the rough is genuine and the fairways narrow. Not suitable for beginners without a handicap certificate. The experience, views, and difficulty make it one of the most memorable rounds on the island.", footer: 'Most challenging course on the island' },
    ]
  },
  {
    region: 'south',
    courses: [
      { expert: false, badges: [], name: 'Golf Maioris', img: '/images/courses/maioris.webp', location: 'Llucmajor · 20km from Palma', pills: ['Dynamic pricing', 'Par 72 · 6,300m', 'Opened 2006'], difficulty: 70, diffScore: '7/10', text: "An interesting course in that the front nine and back nine feel like two unique design philosophies — the front nine Scottish and bumpy, the back nine more American in style, flatter. Fifteen minutes from the airport and less crowded than the courses closer to Palma — an underrated option for a first-day or last-day round. Has one of the island's few public grass driving ranges.", footer: '15 mins from airport · Public grass driving range' },
      { expert: false, badges: [], name: 'Golf Son Antem East', img: '/images/courses/son-antem-east.webp', location: 'Llucmajor · 15km from Palma', pills: ['Dynamic pricing', 'Par 72 · 5 lakes', 'Marriott Resort'], difficulty: 60, diffScore: '6/10', text: "Wide, generous fairways welcoming for players still building confidence from the tee, while the length and five lakes keep better players honest. Built on a former hunting estate near Llucmajor, ten minutes from the airport. Designed by Francisco Lopez-Segalés, opened 1994.", footer: 'Good for beginners · Marriott resort' },
      { expert: false, badges: [], name: 'Golf Son Antem West', img: '/images/courses/son-antem-west.webp', location: 'Llucmajor · 15km from Palma', pills: ['Dynamic pricing', 'Par 72 · Tournament course'], difficulty: 70, diffScore: '7/10', text: "The more testing of the two Son Antem courses and where most of the resort's tournaments are held. Narrower fairways, fewer forgiving rough areas, undulating greens surrounded by bunkers. Threads through a traditional Mallorcan finca with views of Randa Mountain.", footer: 'More challenging than East · Tournament venue' },
    ]
  },
  {
    region: 'east',
    courses: [
      { expert: false, badges: [], name: 'Capdepera Golf', img: '/images/courses/capdepera.jpg', location: 'Artà · 65km from Palma', pills: ['Dynamic pricing', 'Par 72', 'Dan Maples design'], difficulty: 70, diffScore: '7/10', text: "Dan Maples designed this to follow the existing landscape. The first half runs through a wide valley — open, relatively gentle. The back nine climbs into the Levant hills and becomes a much more technical test. Hole 15, up in the mountains with views across the whole valley to the coast, was chosen as the best hole on the island by Mallorca Magazin.", footer: 'Best paired with Canyamel' },
      { expert: false, badges: [], name: 'Canyamel Golf', img: '/images/courses/canyamel.jpg', location: 'Capdepera · 65km from Palma', pills: ['€85–145', 'Par 73 · 6,198m', 'José Gancedo, 1988'], difficulty: 60, diffScore: '6/10', text: "Each of the first nine holes has its own distinct character. Hole 4 has views across to Menorca on a clear day. Hole 9 has a traditional stone hut in the middle of the fairway — a hazard unique to Mallorca. Hole 18 ends with a triple-wave undulation on the green visible from the clubhouse terrace.", footer: 'Views to Menorca on clear days' },
      { expert: false, badges: [], name: 'Pula Golf', img: '/images/courses/pula.jpg', location: 'Son Servera · 55km from Palma', pills: ['Dynamic pricing', 'Par 72 · Olazábal redesign', '8 European Tour events'], difficulty: 70, diffScore: '7/10', text: "Completely redesigned by Olazábal between 2004–2006, subsequently hosting eight European Tour events. Excellent practice facilities including Trackman Range technology. Federer and Nadal played a round here in July 2025. Pep Guardiola is a regular.", footer: 'Olazábal design · European Tour host' },
      { expert: false, badges: [], name: 'Golf Club Son Servera', img: '/images/courses/son-servera.jpg', location: 'Son Servera · 55km from Palma', pills: ['€80–145', 'Par 72 · Est. 1967', 'Coastal parkland'], difficulty: 60, diffScore: '6/10', text: "Founded in 1967, one of the oldest courses on the island. A parkland course along the Costa de los Pinos with generous fairways and relaxed rough. Holes 3 to 7 are the exception: narrow tree-lined fairways that climb into the hills and weave between lakes. Water on six holes.", footer: 'One of the oldest courses on the island' },
    ]
  },
  {
    region: 'north',
    courses: [
      { expert: true, full: true, badges: ['★ Expert Pick', 'Rolex Challenge Tour Grand Final'], name: 'Club de Golf Alcanada', img: '/images/courses/alcanada.jpg', location: "Port d'Alcúdia · 55km from Palma", pills: ['€115–220', 'Par 72 · Robert Trent Jones Jr.', '58 bunkers', 'Championship greens'], difficulty: 70, diffScore: '7/10', text: "My second anchor course and arguably Mallorca's most scenic. Robert Trent Jones Jr. design. The Alcanada lighthouse, visible from 16 of the 18 holes, is one of Europe's most photographed golf landmarks. Fifty-eight bunkers are placed strategically across the layout — they demand attention on every approach.", text2: "The course hosts the Rolex Challenge Tour Grand Final, returning for its sixth edition in October 2026. The greens are severely undulating and extremely fast. The restaurant terrace after the round is one of the best places on the island. Allow 50 minutes from Palma — it's worth every minute.", note: '"One of the most beautiful rounds you\'ll play anywhere in Europe. The lighthouse on 17 is unforgettable."', footer: 'Rolex Challenge Tour Grand Final Oct 2026 · Allow 50 mins from Palma' },
      { expert: false, badges: [], name: 'Golf Pollensa', img: '/images/courses/pollensa.jpg', location: 'Pollença · 60km from Palma', pills: ['€30–60', '9 holes · 90 minutes', 'Tramuntana views'], difficulty: 40, diffScore: '4/10', text: "Nine holes at the entrance to Pollença town, integrated into the hillside with views of the Tramuntana and the bays of Pollença and Alcúdia. Designed by José Gancedo in 1986. A round takes around 90 minutes — an easy warm-up or good option on a day when you want golf without full commitment.", footer: 'Good warm-up round · 90 minutes' },
    ]
  },
]

const REGION_HEADERS = {
  palma: { title: 'Palma', subtitle: '5–11km from city', count: '8 courses' },
  southwest: { title: 'Southwest', subtitle: 'Santa Ponsa & Camp de Mar · 20–40km', count: '6 courses' },
  south: { title: 'South', subtitle: 'Llucmajor · 15–20km', count: '3 courses' },
  east: { title: 'East', subtitle: '50–65km from Palma · Worth basing yourself here', count: '4 courses' },
  north: { title: 'North', subtitle: "Port d'Alcúdia · 55–60km · Alcanada alone justifies the drive", count: '2 courses' },
}

const slugify = name => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')

const SHORT_TO_ID = {
  'Son Gual':'golf-son-gual','Son Muntaner':'son-muntaner','Son Vida':'golf-son-vida',
  'Son Quint':'golf-son-quint','T Golf Puntiró':'t-golf-palma-puntiro','Son Termes':'golf-son-termes',
  'Palma Pitch & Putt':'palma-pitch-putt','Santa Ponsa 1':'golf-santa-ponsa-1',
  'Santa Ponsa 2':'golf-santa-ponsa-2','Santa Ponsa 3':'golf-santa-ponsa-3',
  'T Golf Calvià':'t-golf-calvia-poniente','Bendinat':'real-golf-de-bendinat',
  'Golf de Andratx':'golf-de-andratx','Golf Maioris':'golf-maioris',
  'Son Antem East':'golf-son-antem-east','Son Antem West':'golf-son-antem-west',
  'Capdepera':'capdepera-golf','Canyamel':'canyamel-golf','Pula':'pula-golf',
  'Son Servera':'golf-club-son-servera','Alcanada':'club-de-golf-alcanada',
  'Golf Pollensa':'golf-pollensa',
}

function CourseCard({ c, lang = 'en' }) {
  return (
    <div id={slugify(c.name)} className={`course${c.expert ? ' course--expert' : ''}${c.full ? ' course--full' : ''}`} style={{scrollMarginTop:'90px'}}>
      {/* Mobile: image on top, full width, fixed height */}
      {c.img && (
        <div className="course__img-mobile">
          <img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} loading="lazy" />
        </div>
      )}
      <div className="course__inner" style={{display:'flex',gap:20,alignItems:'flex-start'}}>
        <div style={{flex:1,minWidth:0}}>
          {c.badges.length > 0 && (
            <div className="course__badges">
              {c.badges.map((b, i) => (
                <span key={i} className={`badge ${b.startsWith('★') ? 'badge--expert' : b.includes('Members') ? 'badge--members' : 'badge--award'}`}>{b}</span>
              ))}
            </div>
          )}
          <h3 className="course__name">{c.name}</h3>
          <p className="course__location">{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.location) || c.location}</p>
          <div className="course__stats">
            {c.pills.map((p, i) => <span key={i} className={`stat-pill${i === 0 ? ' stat-pill--gold' : ''}`}>{p}</span>)}
          </div>
          <div className="difficulty">
            <div className="difficulty__track"><div className="difficulty__fill" style={{width:`${c.difficulty}%`}}></div></div>
            <span className="difficulty__score">{c.diffScore}</span>
          </div>
          <p className="course__text">{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.text) || c.text}</p>
          {(c.text2 || (lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.text2)) && <p className="course__text" style={{marginTop:12}}>{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.text2) || c.text2}</p>}
          {(c.note || (lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.note)) && <div className="course__note"><p>{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.note) || c.note}</p></div>}
        </div>
        {/* Desktop: image on right, full card height */}
        {c.img && (
          <div className="course__img-desktop">
            <img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} loading="lazy" />
          </div>
        )}
      </div>
      <div className="course__footer">
        <span className="course__footer-info">{(lang !== 'en' && COURSE_TRANSLATIONS[lang]?.[c.name]?.footer) || c.footer}</span>
      </div>
    </div>
  )
}

export default function GolfCoursesClient({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en
  const REGIONS = getRegions(t)
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleRegions = COURSE_DATA.filter(region => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'expert') return region.courses.some(c => c.expert)
    return region.region === activeFilter
  })

  return (
    <>
      {/* GEOGRAPHY */}
      <section className="geography reveal" style={{background:'var(--cream)'}}>
        <div className="geography__left">
          <p className="eyebrow" style={{color:'var(--gold)'}}>{t.geoEyebrow}</p>
          <h2 style={{color:'var(--deep)'}}>{t.geoH2}</h2>
          <p style={{color:'var(--charcoal)'}}>{t.geoP1}</p>
          <p style={{color:'var(--charcoal)'}}>{t.geoP2}</p>
        </div>
        <div className="geography__right">
          {t.geoRegions.map((row, i) => (
            <div key={i} className="geo-row">
              <span className="geo-region" style={{color:'var(--charcoal)'}}>{row.region}</span>
              <span className="geo-courses">
                {row.courses.split(' · ').map((name, j) => {
                  const id = SHORT_TO_ID[name] || slugify(name)
                  return (
                    <span key={j}>
                      {j > 0 && <span style={{color:'var(--stone)'}}> · </span>}
                      <a href={`#${id}`} style={{color: j % 2 === 0 ? 'var(--pine)' : 'var(--charcoal)',textDecoration:'none',fontWeight:400}} onMouseOver={e=>e.currentTarget.style.textDecoration='underline'} onMouseOut={e=>e.currentTarget.style.textDecoration='none'}>{name}</a>
                    </span>
                  )
                })}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO BAR */}
      <div className="intro-bar">
        <div className="intro-bar__text reveal" style={{maxWidth:'100%'}}>
          <p>{t.intro1} {t.intro2}</p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="filter-tabs">
        {REGIONS.map(r => (
          <button
            key={r.key}
            className={`filter-tab${activeFilter === r.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(r.key)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* COURSE LISTING */}
      <div className="page-layout">
        <div className="page-main">
          {visibleRegions.map((regionData, i) => {
            const header = REGION_HEADERS[regionData.region]
            const coursesToShow = activeFilter === 'expert'
              ? regionData.courses.filter(c => c.expert)
              : regionData.courses
            return (
              <div key={regionData.region + activeFilter}>
                {i > 0 && <div className="divider" />}
                <section className="region-section">
                  <div className="region-header">
                    <h2 className="region-title">{header.title}</h2>
                    <p className="region-subtitle">{header.subtitle}</p>
                    <span className="region-count">{header.count}</span>
                  </div>
                  {t.courseNote && (
            <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',padding:'12px 0',borderBottom:'1px solid var(--linen)',marginBottom:16}}>{t.courseNote}</p>
          )}
          <div className="courses-grid-list">
                    {coursesToShow.map((c, j) => <CourseCard key={j} c={c} lang={lang} />)}
                  </div>
                </section>
              </div>
            )
          })}
        </div>

        <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>{t.sidebarH3}</h3>
            <p>{t.sidebarP}</p>
            <Link href="/contact" className="sidebar-btn">{t.sidebarBtn}</Link>
          </div>
          <div className="sidebar-card sidebar-card--cream">
            <h3 style={{fontSize:'1rem'}}>{t.quickPicksTitle}</h3>
            <ul className="sidebar-quick">
              {t.quickPicks.map((p,i) => {
                // Split label at colon, link only the course-name part
                const colonIdx = p.indexOf(': ')
                const prefix = colonIdx >= 0 ? p.slice(0, colonIdx + 2) : ''
                const coursesPart = colonIdx >= 0 ? p.slice(colonIdx + 2) : p
                // Split on " or ", " oder ", " eller ", " ou ", " o ", " of " to support multi-language
                const separator = coursesPart.match(/ (or|oder|eller|ou|o) /)
                const parts = separator ? coursesPart.split(separator[0]) : [coursesPart]
                const sepWord = separator ? separator[0] : null
                return (
                  <li key={i}>
                    {prefix}
                    {parts.map((part, j) => {
                      const match = Object.keys(SHORT_TO_ID).find(k => part.trim().includes(k))
                      const id = match ? SHORT_TO_ID[match] : null
                      return (
                        <span key={j}>
                          {j > 0 && sepWord}
                          {id ? <a href={`#${id}`} style={{color:'inherit',textDecoration:'none'}} onMouseOver={e=>e.currentTarget.style.color='var(--pine)'} onMouseOut={e=>e.currentTarget.style.color='inherit'}>{part}</a> : part}
                        </span>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>

      {/* FINAL CTA */}
      <section className="guide-cta">
        <div>
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'0.75rem'}}>{t.ctaEyebrow}</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem',marginBottom:'1.25rem'}}>{t.ctaH2}</h2>
          <p>{t.ctaP}</p>
        </div>
        <div className="guide-cta__actions">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 32px'}}>{t.seeExperiences}</Link>
          <Link href="/contact" className="btn btn--outline-white">{t.getInTouch}</Link>
        </div>
      </section>
    </>
  )
}

