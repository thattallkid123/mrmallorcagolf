'use client'
import { useState } from 'react'
import Link from 'next/link'

const TRANSLATIONS = {
  en: {
    allCourses: 'All Courses', expertPicks: '★ Expert Picks Only',
    southwest: 'Southwest', south: 'South', east: 'East', north: 'North',
    yourGuide: '{t.yourGuide}', playWithAndy: 'Play with Andy',
    credentials: 'UK PGA Advanced Professional · Trackman Master · TPI Level 3 · 11 years coaching in Shanghai · Based in Mallorca since 2025',
    intro1: "{t.intro1}",
    intro2: '{t.intro2}',
    sidebarH3: 'Want to play one of these courses with a UK PGA professional alongside you?',
    sidebarP: '{t.sidebarP}',
    sidebarBtn: 'Get in touch →',
    quickPicksTitle: 'Quick picks',
    quickPicks: ['Best overall: Son Gual','Most scenic: Alcanada','Best in Spain: Son Muntaner','Most challenging: Golf de Andratx','Best for beginners: Son Quint','Best value: Golf Pollensa','Best East coast: Pula or Canyamel'],
    ctaEyebrow: '{t.ctaEyebrow}',
    ctaH2: 'Private round, everything arranged, UK PGA professional throughout.',
    ctaP: "Tell me which course interests you, your dates, and your handicap. I'll come back with a recommendation within 24 hours.",
    seeExperiences: 'See the Experiences →',
    getInTouch: 'Get in touch',
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

function CourseCard({ c }) {
  return (
    <div className={`course${c.expert ? ' course--expert' : ''}${c.full ? ' course--full' : ''}`}>
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
          <p className="course__location">{c.location}</p>
          <div className="course__stats">
            {c.pills.map((p, i) => <span key={i} className={`stat-pill${i === 0 ? ' stat-pill--gold' : ''}`}>{p}</span>)}
          </div>
          <div className="difficulty">
            <div className="difficulty__track"><div className="difficulty__fill" style={{width:`${c.difficulty}%`}}></div></div>
            <span className="difficulty__score">{c.diffScore}</span>
          </div>
          <p className="course__text">{c.text}</p>
          {c.text2 && <p className="course__text" style={{marginTop:12}}>{c.text2}</p>}
          {c.note && <div className="course__note"><p>{c.note}</p></div>}
        </div>
        {/* Desktop: image on right, full card height */}
        {c.img && (
          <div className="course__img-desktop">
            <img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} loading="lazy" />
          </div>
        )}
      </div>
      <div className="course__footer">
        <span className="course__footer-info">{c.footer}</span>
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
      <section className="geography reveal">
        <div className="geography__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.3)'}}>Where the courses sit</p>
          <h2>Mallorca has more outstanding golf than most visitors realise.</h2>
          <p>Twenty-two courses ranging from genuine European Tour venues to quieter, less-visited gems. Green fees from €20 to over €200. I&apos;m a PGA Advanced Professional based on the island, working my way through every course — all reviews are well-researched, with my own personal notes for the courses I&apos;ve played.</p>
          <p>Best time to play: October–November and February–April. The island plays year-round — in January, when courses in much of the rest of Europe are unplayable, the fairways here are immaculate.</p>
        </div>
        <div className="geography__right">
          {[
            { region: 'Palma', courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt' },
            { region: 'Southwest', courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx' },
            { region: 'South', courses: 'Golf Maioris · Son Antem East · Son Antem West' },
            { region: 'East', courses: 'Capdepera · Canyamel · Pula · Son Servera' },
            { region: 'North', courses: 'Alcanada · Golf Pollensa' },
          ].map((row, i) => (
            <div key={i} className="geo-row">
              <span className="geo-region">{row.region}</span>
              <span className="geo-courses">{row.courses}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO BAR */}
      <div className="intro-bar">
        <div className="intro-bar__text reveal">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
        </div>
        <div className="intro-bar__expert reveal">
          <p className="expert-label">{t.yourGuide}</p>
          <p className="expert-name">Andy Griffiths</p>
          <p className="expert-credentials">{t.credentials}</p>
          <Link href="/play-with-a-pro" className="expert-cta">{t.playWithAndy}</Link>
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
                  <div className="courses-grid-list">
                    {coursesToShow.map((c, j) => <CourseCard key={j} c={c} />)}
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
              {t.quickPicks.map((p,i) => <li key={i}>{p}</li>)}
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

