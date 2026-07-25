'use client'

import { useRef, useState } from 'react'
import ToolTrustLine from '../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../lib/analytics'
import { getCanonicalCourseDataByName } from '../../../lib/course-catalog'
import { getCourseShortName } from '../../../lib/golf-courses-helpers'
import { getGolfDayBuilderT } from '../../../lib/golf-day-builder-translations'

const WA_DAY_HREF = `https://wa.me/34624466702?text=${encodeURIComponent('Hi Andy, I built a golf day on your website and would like to make it real.')}`

function trackDayWhatsApp() {
  trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'golf-day-builder' })
  trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'golf-day-builder' })
}

const COURSE_IMGS = {
  'son-gual':         '/images/courses/son-gual.webp',
  'alcanada':         '/images/courses/alcanada.webp',
  't-golf-palma':     '/images/courses/t-golf-palma.webp',
  'son-muntaner':     '/images/courses/son-muntaner.webp',
  'santa-ponsa':      '/images/courses/santa-ponsa-1.webp',
  'andratx':          '/images/courses/golf-andratx.webp',
  'son-vida':         '/images/courses/son-vida.webp',
  'son-quint':        '/images/courses/son-quint.webp',
  'bendinat':         '/images/courses/bendinat.webp',
  'capdepera':        '/images/courses/capdepera.webp',
  'canyamel':         '/images/courses/canyamel.webp',
  'pula':             '/images/courses/pula.webp',
  'son-servera':      '/images/courses/son-servera.webp',
  'maioris':          '/images/courses/maioris.webp',
  'son-antem-west':   '/images/courses/son-antem-west.webp',
  'son-termes':       '/images/courses/son-termes.webp',
  't-golf-calvia':    '/images/courses/t-golf-calvia.webp',
  'son-antem-east':   '/images/courses/son-antem-east.webp',
  'golf-pollenca':    '/images/courses/pollensa.webp',
  'santa-ponsa-2':    '/images/courses/santa-ponsa-2.webp',
  'santa-ponsa-3':    '/images/courses/santa-ponsa-3.webp',
  'palma-pitch-putt': '/images/courses/palma-pitch-putt.webp',
  'vall-dor':         '/images/courses/vall-dor.webp',
  'reserva-rotana':   '/images/courses/rotana.webp',
}

const COURSES = [
  { id:"son-gual", name:"Golf Son Gual", region:"palma", tags:["famous","challenging","serious","luxury"], facts:["Par 72 · Championship","Thomas Himmel, 2007"], blurb:"The strongest conditioning on the island and a layout that tests every part of your game. Wide enough to enjoy, demanding enough to remember. Note that a handicap certificate is required.", level:"confident+", driveMins:{southwest:30, palma:15, north:45, east:40, south:20} },
  { id:"alcanada", name:"Club de Golf Alcanada", region:"north", tags:["famous","scenic","luxury","serious"], facts:["Par 72 · Robert Trent Jones Jr.","58 bunkers"], blurb:"Sea views from most of the round and a Robert Trent Jones Jr. design that holds its own without them. The 58 bunkers are positioned to be in play, so expect to use your sand wedge.", level:"casual+", driveMins:{southwest:60, palma:45, north:10, east:40, south:60} },
  { id:"t-golf-palma", name:"T Golf Palma (Puntiró)", region:"palma", tags:["challenging","serious"], facts:["Par 71 · Jack Nicklaus Design","Only Nicklaus course in Mallorca"], blurb:"A Jack Nicklaus design twenty minutes from Palma. Firm, strategic, and honest: good shots are rewarded and loose ones are punished in proportion.", level:"confident+", driveMins:{southwest:30, palma:20, north:50, east:50, south:25} },
  { id:"son-muntaner", name:"Son Muntaner", region:"palma", tags:["luxury","famous","challenging"], facts:["Par 72 · Best in Spain 2025","Sa Capitana olive tree, hole 15"], blurb:"The flagship of the Arabella courses and the most polished club experience near Palma. Conditioning and service are the draw here, and both deliver.", level:"casual+", driveMins:{southwest:20, palma:10, north:50, east:55, south:25} },
  { id:"santa-ponsa", name:"Golf Santa Ponsa 1", region:"southwest", tags:["forgiving","relaxed","family"], facts:["Par 72 · Longest on the island","Hosted 2021 European Tour"], blurb:"Broad fairways and a relaxed pace in the southwest. The length looks intimidating on the card but the width keeps it playable for most levels.", level:"beginner+", driveMins:{southwest:10, palma:25, north:60, east:65, south:35} },
  { id:"andratx", name:"Golf de Andratx", region:"southwest", tags:["scenic","challenging","luxury"], facts:["Par 72 · David Kidd, 1999","Longest par-5 in Spain (609m)"], blurb:"Dramatic elevation changes through the hills above Camp de Mar. The views are the headline, but the tight lines and sloping lies mean it plays harder than the card suggests.", level:"confident+", driveMins:{southwest:15, palma:30, north:65, east:70, south:40} },
  { id:"son-vida", name:"Golf Son Vida", region:"palma", tags:["famous","relaxed","forgiving","luxury"], facts:["Par 70 · Est. 1964 · Oldest in Mallorca","Seve won here in 1990"], blurb:"Mallorca's oldest course, and it carries the history well. Short by modern standards, charming throughout, and a sensible choice when the day is about more than the score.", level:"beginner+", driveMins:{southwest:20, palma:10, north:50, east:55, south:25} },
  { id:"bendinat", name:"Real Golf de Bendinat", region:"southwest", tags:["scenic","relaxed","close"], facts:["Par 70 · Martin Hawtree, 1986","5,660m"], blurb:"Tight, pretty, and tucked between pines with sea glimpses on the higher holes. A shorter, social round that suits a half-day plan. Leave the driver in the bag on several tees.", level:"casual+", driveMins:{southwest:10, palma:15, north:55, east:60, south:25} },
  { id:"capdepera", name:"Capdepera Golf", region:"east", tags:["scenic","forgiving","relaxed","family"], facts:["Par 73 · Dan Maples","Hole 15 voted best in Mallorca"], blurb:"Rolling countryside golf in the quiet east, usually uncrowded even in season. Friendly off the tee, with enough variety to keep better players interested.", level:"beginner+", driveMins:{southwest:70, palma:55, north:40, east:10, south:65} },
  { id:"canyamel", name:"Canyamel Golf", region:"east", tags:["scenic","challenging"], facts:["Par 73 · José Gancedo","Stone hut on hole 9, unique in Mallorca"], blurb:"A valley course near the coast that few visitors plan for and most are glad they played. Quietly testing, particularly the approach shots into sloped greens.", level:"casual+", driveMins:{southwest:70, palma:55, north:40, east:10, south:65} },
  { id:"pula", name:"Pula Golf", region:"east", tags:["forgiving","relaxed","family"], facts:["Par 72 · Olazábal redesign","Two-level range · TrackMan Range"], blurb:"A welcoming east coast course with a serious tournament past, redesigned by José María Olazábal. Generous where it matters and well kept year round.", level:"beginner+", driveMins:{southwest:65, palma:50, north:35, east:10, south:60} },
  { id:"son-servera", name:"Golf Club Son Servera", region:"east", tags:["relaxed","scenic","forgiving"], facts:["Par 72 · Est. 1967 · 2nd oldest in Mallorca","Coastal parkland"], blurb:"Classic pine-lined parkland by the sea and one of the island's oldest clubs. Unhurried, traditional, and a fair test without drama.", level:"beginner+", driveMins:{southwest:70, palma:55, north:40, east:10, south:70} },
  { id:"son-antem-west", name:"Golf Son Antem West", region:"south", tags:["forgiving","relaxed","family","close"], facts:["Par 72 · Francisco Lopez Segales, 1995","25 mins from Palma"], blurb:"Open countryside golf near Llucmajor, 15 minutes from Palma and 25 from the airport. Generous fairways and a flat layout make it accessible for most levels.", level:"beginner+", driveMins:{southwest:30, palma:20, north:55, east:55, south:10} },
  { id:"son-termes", name:"Golf Son Termes", region:"palma", tags:["scenic","challenging","close"], facts:["Par 70 · Grupo Harris, 1998","Mountain views of Palma"], blurb:"Na Burguesa mountain golf 20 minutes from Palma. On clear days, Castell de Bellver and the cathedral are visible from the upper holes with the Mediterranean behind.", level:"casual+", driveMins:{southwest:25, palma:20, north:55, east:60, south:30} },
  { id:"t-golf-calvia", name:"T Golf Calvià (Poniente)", region:"southwest", tags:["famous","luxury","serious","scenic"], facts:["Par 72 · 15 lakes","Host of the Mallorca Open"], blurb:"Rebuilt after a €10 million renovation, T Golf Calvià feels polished from arrival to finish. Wide driving lines, 15 lakes in play, and excellent conditioning throughout.", level:"casual+", driveMins:{southwest:15, palma:25, north:55, east:65, south:35} },
  { id:"son-antem-east", name:"Golf Son Antem East", region:"south", tags:["forgiving","relaxed","family","close"], facts:["Par 72 · Francisco Lopez-Segalés, 1994","Marriott resort · 5 lakes"], blurb:"The more accessible of the two Son Antem courses. Generous fairways and five lakes on a former hunting estate near Llucmajor.", level:"beginner+", driveMins:{southwest:30, palma:20, north:55, east:60, south:10} },
  { id:"son-quint", name:"Golf Son Quint", region:"palma", tags:["forgiving","relaxed","family","close"], facts:["Par 71 · Opened 2007","Tiger Woods & Charlie played here, July 2022"], blurb:"The most approachable of the Son Vida courses. Wide fairways, four tee positions, and a view directly toward Palma Cathedral from hole 8.", level:"beginner+", driveMins:{southwest:20, palma:10, north:50, east:55, south:25} },
  { id:"maioris", name:"Golf Maioris", region:"south", tags:["relaxed","forgiving","close"], facts:["Par 72 · Opened 2006","One of few public grass driving ranges in Mallorca"], blurb:"Front nine Scottish and bumpy, back nine more American and flatter: two personalities in one round. Less crowded than the Palma courses.", level:"beginner+", driveMins:{southwest:30, palma:20, north:55, east:55, south:10} },
  { id:"vall-dor", name:"Vall d'Or Golf", region:"east", tags:["scenic","relaxed","family"], facts:["Par 71 · 1986","Cliffside finish with east coast sea views"], blurb:"A round that improves as it goes: tight traditional front nine, then the back nine opens toward the coast with sea views and a cliffside finish.", level:"casual+", driveMins:{southwest:75, palma:60, north:45, east:15, south:65} },
  { id:"golf-pollenca", name:"Golf Pollença", region:"north", tags:["scenic","relaxed","family","forgiving"], facts:["Par 35 · 9 holes · José Gancedo, 1986","Views of Tramuntana, Bay of Pollença and Bay of Alcúdia"], blurb:"Nine holes integrated into the hillside above Pollença town: views of the Tramuntana, two bays, and the sea. The right afternoon complement to an Alcanada morning. Completable in 90 minutes.", level:"beginner+", driveMins:{southwest:65, palma:55, north:10, east:50, south:65} },
  { id:"santa-ponsa-2", name:"Golf Santa Ponsa 2", region:"southwest", tags:["relaxed","serious"], facts:["Par 72 · Members only","Guests must play with a member"], blurb:"Usually the quietest course in the Southwest cluster. Tree-lined fairways reward placement over power. Andy can host clients as his guests when he is playing.", level:"casual+", driveMins:{southwest:10, palma:25, north:60, east:65, south:35} },
  { id:"santa-ponsa-3", name:"Golf Santa Ponsa 3 (9 holes)", region:"southwest", tags:["forgiving","relaxed","family"], facts:["Par 30 · 9 holes · Members only","Guests must play with a member"], blurb:"Nine holes through the Santa Ponsa residential estate: short, accurate, and well-suited to beginners, juniors, or anyone wanting a quick round.", level:"beginner+", driveMins:{southwest:10, palma:25, north:60, east:65, south:35}, note:"9 holes. Build this as an afternoon add-on alongside a full round at Santa Ponsa 1 or 2" },
  { id:"palma-pitch-putt", name:"Palma Pitch & Putt", region:"palma", tags:["forgiving","relaxed","family"], facts:["Par 27 · 9 holes all par-3s · €20–30","The only pitch & putt in Mallorca"], blurb:"The only pitch-and-putt in Mallorca, and the course Andy uses for coaching introductions. All par 3s between 50 and 100m.", level:"beginner+", driveMins:{southwest:25, palma:5, north:55, east:60, south:25}, note:"9 holes. Works as a half-day plan, a pre-round warm-up, or an introduction to the game" },
  { id:"reserva-rotana", name:"Rotana Greens (Reserva Rotana)", region:"east", hotelOnly:true, tags:["relaxed","scenic","luxury"], facts:["9 holes · Hotel guests only · Estate course","Capdepera and Pula within 25 minutes"], blurb:"A private 9-hole estate course at Reserva Rotana near Manacor, available exclusively for hotel guests.", level:"beginner+", driveMins:{southwest:80, palma:60, north:35, east:15, south:70}, note:"Hotel guests only. This option only applies if your group is staying at Reserva Rotana" },
]

const RESTAURANTS = {
  southwest: {
    casual: "Campino Restaurant at Golf de Andratx: Italian and Mediterranean on the terrace, booked around your round finish time",
    premium: "Sa Clastra (1 Michelin star) at Castell Son Claret, Es Capdellà (around 15 minutes from most Southwest courses). One of the best lunch tables on the island",
    village: "Lunch in Calvià village: a quiet hilltop town with local restaurants that rarely see tourists. Andy books the right table",
    michelin: "Sa Clastra (1★) at Castell Son Claret, Es Capdellà, or Es Fum (1★) at the St. Regis Mardavall: two of the island's finest tables, both in the Southwest"
  },
  palma: {
    casual: "Na Capitana at Son Muntaner: reliable Mediterranean lunch on the terrace overlooking the course, or a short drive to Santa Catalina market for tapas",
    premium: "DINS Santi Taura (1 Michelin star) in central Palma, or Marc Fosh (1 Michelin star) in the old town. Andy times the booking around your round",
    village: "Santa Catalina market: the best food neighbourhood in Palma, 10 minutes from most courses. Andy picks the right spot for the group",
    michelin: "DINS Santi Taura (1★), Marc Fosh (1★) and Zaranda (1★) are all in Palma: the strongest Michelin cluster on the island, all within 15 minutes of the Palma courses"
  },
  north: {
    casual: "Beachfront lunch in Port de Pollença: the promenade has several good fish and seafood options. Andy books ahead in high season",
    premium: "Maca de Castro (1 Michelin star + Green Star) in Port d'Alcúdia: seasonal tasting menus built on local produce. Around 10 minutes from Alcanada",
    village: "Pollença old town: a quiet hilltop town with a good market square, reliable local restaurants, and a Sunday market. Worth the short detour",
    michelin: "Maca de Castro (1★ + Green Star) in Port d'Alcúdia: one of the island's most interesting chef-driven restaurants, close to Alcanada golf"
  },
  east: {
    casual: "Roca Viva restaurant at Capdepera Golf: Mediterranean and Mallorcan, with an on-site vegetable garden and terrace by the 18th. One of the better clubhouse lunches on the island",
    premium: "VORO (2 Michelin stars) at Cap Vermell Grand Hotel, Canyamel: Mallorca's only two-star restaurant, chef Álvaro Salazar. 18 or 22-course tasting menu",
    village: "Artà old town: one of the most characterful towns in eastern Mallorca. A good stop for coffee and lunch before or after the round",
    michelin: "VORO (2★) at Cap Vermell, Canyamel: the strongest Michelin argument for a night on the east coast"
  },
  south: {
    casual: "T19 Restobar at Golf Maioris: outdoor terrace, German and Mediterranean clubhouse food, useful stop near the airport",
    premium: "Andreu Genestra (1 Michelin star + Green Star) near Llucmajor: seasonal tasting menus, sustainability-led cooking. Around 10 minutes from Golf Maioris and Son Antem. Book well ahead",
    village: "Llucmajor old town: a quiet market town 20 minutes from Palma with good local restaurants and a Saturday market",
    michelin: "Andreu Genestra (1★ + Green Star) near Llucmajor: one of Mallorca's most interesting chef-driven restaurants, close to the south course cluster"
  },
}

const ADDONS = {
  beach:    { title:'Beach hour',           desc:'A nearby cove for a swim and a slow hour in the shade. Beach chosen by region when the plan is confirmed.' },
  spa:      { title:'Spa and recovery',     desc:'A post-round session at a resort spa in the area. Options include Arabella Son Vida, Secrets Paguera, and Bendinat. Andy confirms the venue when you book.' },
  village:  { title:'Local village hour',   desc:"An hour in one of the island's historic towns: coffee, side streets, and a viewpoint or two." },
  wine:     { title:'Wine tasting',         desc:"A guided tasting at a local bodega. Mallorca has a small but serious wine scene: José L. Ferrer in Binissalem and Macià Batle are both worth the detour. Andy times this around the round." },
  family:   { title:'Family activity',      desc:'A boat trip, the caves, or a waterpark depending on the region and ages. Confirmed with the booking.' },
  coaching: { title:'Coaching with Andy',   desc:'A focused session with Andy Griffiths, UK PGA Advanced Professional: warm-up, technique, or on-course strategy.' },
  lunch:    { title:'Long lunch',           desc:'A proper Mallorcan table, booked and timed around your round.' },
}

const START_WINDOWS = {
  early:{ label:'Early morning start', tee:'8:00 to 9:00', depart:'7:15' },
  mid:  { label:'Mid-morning start',   tee:'10:00 to 11:00', depart:'9:00' },
  pm:   { label:'Afternoon start',     tee:'13:30 to 14:30', depart:'12:30' },
}

const QUESTIONS = [
  { key:'region', label:'Step 1 of 8 · Location', title:'Where are you staying?', sub:'The plan is built around your base.', multi:false, opts:[
    {v:'southwest', t:'Southwest', d:'Santa Ponsa, Andratx, Bendinat, Calvià'},
    {v:'palma',     t:'Palma and around', d:'Palma city, Son Vida, central island'},
    {v:'north',     t:'North', d:'Alcúdia, Pollença, the bays'},
    {v:'east',      t:'East', d:'Cala Millor, Canyamel, Artà'},
    {v:'south',     t:'South', d:'Llucmajor, airport area, Son Antem'},
    {v:'unbooked',  t:'Not booked yet', d:'We will suggest the best golf base for you'},
  ]},
  { key:'dayStyle', label:'Step 2 of 8 · Day style', title:'What kind of day are you after?', sub:'Pick the one that sounds most like you.', multi:false, opts:[
    {v:'serious',  t:'Serious golf',  d:'The round is the main event'},
    {v:'relaxed',  t:'Relaxed golf',  d:'Good golf without pressure'},
    {v:'luxury',   t:'Luxury',        d:'The best of everything, handled'},
    {v:'family',   t:'Family day',    d:'Golf plus something for everyone'},
    {v:'scenic',   t:'Scenic',        d:'Views first, score second'},
    {v:'food',     t:'Food first',    d:'Golf built around a great lunch'},
  ]},
  { key:'level', label:'Step 3 of 8 · Golf level', title:'How would you describe your golf?', sub:'Honest answers make better days.', multi:false, opts:[
    {v:'beginner',  t:'Beginner',      d:'New to the game or returning to it'},
    {v:'casual',    t:'Casual',        d:'A few rounds a year'},
    {v:'confident', t:'Confident',     d:'Regular golfer, mid handicap'},
    {v:'low',       t:'Low handicap',  d:'Single figures, bring the test'},
  ]},
  { key:'start', label:'Step 4 of 8 · Start time', title:'When do you like to start?', sub:'', multi:false, opts:[
    {v:'early', t:'Early morning', d:'First off, the day is yours after'},
    {v:'mid',   t:'Mid-morning',   d:'A civilised start with a full day shape'},
    {v:'pm',    t:'Afternoon',     d:'Slow morning, late-light golf'},
  ]},
  { key:'courseType', label:'Step 5 of 8 · Course type', title:'What matters most in the course?', sub:'', multi:false, opts:[
    {v:'famous',      t:'A known name',      d:'The courses people ask about'},
    {v:'scenic',      t:'Scenery',           d:'Sea views, mountains, elevation'},
    {v:'challenging', t:'A real test',       d:'A course that asks questions'},
    {v:'forgiving',   t:'Forgiving',         d:'Wide, friendly, and fun'},
    {v:'close',       t:'Close to my hotel', d:'Minimum time in the car'},
  ]},
  { key:'addons', label:'Step 6 of 8 · Beyond the golf', title:'What would round out the day?', sub:'Select any that appeal, or none', multi:true, opts:[
    {v:'lunch',    t:'Long lunch',        d:'A proper Mallorcan table'},
    {v:'beach',    t:'Beach',             d:'A swim after the round'},
    {v:'spa',      t:'Spa',               d:'Recovery done well'},
    {v:'village',  t:'Local village',     d:'An hour in a historic town'},
    {v:'wine',     t:'Wine',              d:'A bodega visit or tasting'},
    {v:'family',   t:'Family activity',   d:'Something for the non-golfers'},
    {v:'coaching', t:'Coaching with Andy', d:'PGA Advanced Professional session'},
  ]},
  { key:'transport', label:'Step 7 of 8 · Transport', title:'Do you need transport arranged?', sub:'', multi:false, opts:[
    {v:'yes', t:'Yes, arrange it', d:'Driver or transfers, door to door'},
    {v:'no',  t:'No, we will drive', d:'Hire car or own wheels'},
  ]},
  { key:'group', label:'Step 8 of 8 · Your group', title:'Who is coming?', sub:'', multi:false, opts:[
    {v:'solo',     t:'Just me',          d:'Solo golf, full focus'},
    {v:'couple',   t:'A couple',         d:'Two of you'},
    {v:'friends',  t:'Friends',          d:'A small group trip'},
    {v:'family',   t:'Family',           d:'Mixed ages and interests'},
    {v:'vip',      t:'VIP or corporate', d:'Hosting clients or marking an occasion'},
  ]},
]

const LEVEL_RANK = { beginner:0, casual:1, confident:2, low:3 }
const LEVEL_REQ  = { 'beginner+':0, 'casual+':1, 'confident+':2 }
const GROUP_LABEL = { solo:'a solo golfer', couple:'a couple', friends:'a group of friends', family:'a family', vip:'a VIP or corporate group' }
const REGION_LABEL = { southwest:'in the southwest', palma:'in or near Palma', north:'in the north', east:'in the east', south:'in the south', unbooked:'wherever suits the golf best' }

function displayCourseName(name) {
  return getCourseShortName(name)
}

function getCanonicalCourseInfo(course) {
  return getCanonicalCourseDataByName(course.name)
}

function getCourseHoleCount(course) {
  return getCanonicalCourseInfo(course)?.holeCount || (course.note?.includes('9 holes') ? 9 : 18)
}

function getCourseFacts(course) {
  const canonical = getCanonicalCourseInfo(course)
  if (!canonical) return course.facts

  const facts = []
  let primaryFact = `Par ${canonical.par}`
  if (canonical.holeCount === 9) primaryFact += ' · 9 holes'
  facts.push(primaryFact)

  if (canonical.access) {
    if (!canonical.access.handicapRequired) {
      facts.push(
        canonical.access.accessType === 'hotel_guests'
          ? 'Hotel guests only'
          : 'No handicap required'
      )
    } else {
      facts.push(canonical.access.requirementLabel)
    }
  }

  if (canonical.facts?.designer) {
    facts.push(`${canonical.facts.designer}${canonical.facts.opened ? ` · ${canonical.facts.opened}` : ''}`)
  }

  if (canonical.facts?.practiceFacilities) {
    facts.push(canonical.facts.practiceFacilities)
  }

  for (const fact of course.facts || []) {
    if (!facts.includes(fact)) facts.push(fact)
  }

  return facts.slice(0, 3)
}

function scoreAllCourses(answers) {
  const region = answers.region === 'unbooked' ? 'southwest' : answers.region
  const lvl = LEVEL_RANK[answers.level]
  const wantClose = answers.courseType === 'close'
  return COURSES.filter(c => !c.hotelOnly).map(c => {
    let s = 0
    if (c.tags.includes(answers.courseType)) s += 5
    if (c.tags.includes(answers.dayStyle)) s += 3
    const drive = c.driveMins[region] || 30
    if (c.region === region) s += 10
    if (wantClose) s += Math.max(0, 6 - drive / 10)
    else s += Math.max(0, 4 - drive / 20)
    if (lvl >= LEVEL_REQ[c.level]) s += 2; else s -= 4
    if (answers.dayStyle === 'family' && c.tags.includes('family')) s += 2
    return { c, s, drive }
  }).sort((a, b) => b.s - a.s)
}

function lunchFor(region, answers, premium) {
  const r = RESTAURANTS[region] || RESTAURANTS.palma
  if (answers.addons?.includes('village')) return r.village
  if (answers.dayStyle === 'luxury' || answers.dayStyle === 'food') return r.michelin || r.premium
  return premium ? r.premium : r.casual
}

function whyCourseChosen(course, answers) {
  const reasons = []
  if (course.tags.includes(answers.courseType)) {
    const p = { famous:"it is one of the island's best-known courses", scenic:"it has the views you asked for", challenging:"it is the most demanding course within reach of your base", forgiving:"the layout is wide and forgiving", close:"it is the closest quality course to where you are staying" }[answers.courseType]
    if (p) reasons.push(p)
  }
  if (course.tags.includes(answers.dayStyle) && answers.dayStyle !== answers.courseType) {
    const p = { serious:"it delivers a serious round", relaxed:"the pace and layout suit a relaxed day", luxury:"it is the premium option in your area", family:"it works for all abilities in the group", scenic:"the setting is the highlight", food:"it sits close to the best restaurant options in the area" }[answers.dayStyle]
    if (p) reasons.push(p)
  }
  const lvl = LEVEL_RANK[answers.level]
  if (lvl >= LEVEL_REQ[course.level]) reasons.push("it is well-matched to your game")
  if (!reasons.length) return "The best available match for your answers in this area."
  return reasons.map((r, i) => i === 0 ? r.charAt(0).toUpperCase() + r.slice(1) : r).join(", ") + "."
}

function buildItineraries(answers) {
  const region = answers.region === 'unbooked' ? 'southwest' : answers.region
  const ranked = scoreAllCourses(answers)
  // Use top 3 distinct courses. One per plan
  const top3 = ranked.slice(0, 3)
  const sw = START_WINDOWS[answers.start]
  const wantsCoaching = answers.addons?.includes('coaching')
  const transport = answers.transport === 'yes'
  const addonKeys = (answers.addons || []).filter(a => !['lunch','coaching'].includes(a))
  const firstAddon = addonKeys.length ? ADDONS[addonKeys[0]] : null
  const secondAddon = addonKeys.length > 1 ? ADDONS[addonKeys[1]] : null

  function makePlan(picked, planName, planTagline, planStepsFn, planWhy) {
    const course = picked.c
    const drive = picked.drive
    const holeCount = getCourseHoleCount(course)
    const isNineHole = holeCount === 9
    const holesLabel = isNineHole ? `9 holes at ${displayCourseName(course.name)}` : `18 holes at ${displayCourseName(course.name)}`
    const holeNote = isNineHole ? ` Note: ${course.note}` : ''
    const travelDesc = transport
      ? `A private transfer collects you from your accommodation. Around ${drive} minutes to the course (estimate).`
      : `Self-drive to the course, around ${drive} minutes (estimate). Parking notes come with the confirmed plan.`
    const warmup = wantsCoaching
      ? { time:'Before the round', title:'Coaching warm-up with Andy', desc:'A 45-minute session with Andy Griffiths: range warm-up, short game, and a plan for the holes ahead.' }
      : { time:'Before the round', title:'Warm-up and coffee', desc:'Range balls, the putting green, and a coffee on the terrace. Arrive 45 minutes before your tee time.' }
    return {
      name: planName,
      tagline: planTagline,
      course, drive,
      steps: planStepsFn({ course, drive, holesLabel, holeNote, travelDesc, warmup }),
      why: planWhy(course, drive),
    }
  }

  const [p1, p2, p3] = top3

  const itins = [
    makePlan(p1,
      'Efficient golf day',
      'The round is the day. Played well, back with the afternoon free.',
      ({ holesLabel, holeNote, travelDesc, warmup }) => [
        { time:`${sw.depart} (estimate)`, title:'Depart your accommodation', desc:travelDesc },
        { time:'On arrival', title:warmup.title, desc:warmup.desc },
        { time:`Tee time window ${sw.tee} (estimate)`, title:holesLabel, desc:p1.c.blurb + holeNote },
        { time:'After the round', title:'A drink at the clubhouse', desc:'A relaxed drink on the terrace while the scorecards are disputed.' },
        { time:'Early afternoon', title:'Return', desc:`Back at your base with the rest of the day untouched. Around ${p1.drive} minutes (estimate).` },
      ],
      (course) => `The golf comes first and the timings stay tight. ${whyCourseChosen(course, answers)} Nothing in the schedule you did not ask for.`
    ),
    makePlan(p2,
      'Golf & long lunch',
      'A serious round followed by a serious table.',
      ({ holesLabel, holeNote, travelDesc, warmup }) => [
        { time:`${sw.depart} (estimate)`, title:'An unhurried departure', desc:travelDesc },
        { time:'On arrival', title:warmup.title, desc:warmup.desc },
        { time:`Tee time window ${sw.tee} (estimate)`, title:holesLabel, desc:p2.c.blurb + holeNote },
        { time:'After the round', title:'A long Mallorcan lunch', desc:`${lunchFor(region, answers, true)}. The table is booked and timed so you walk off the last hole and sit straight down.` },
        { time:'Late afternoon', title:'A relaxed return', desc:`A slow drive back, around ${p2.drive} minutes (estimate).` },
      ],
      (course) => `Good golf and good food are the two things this island does most reliably. ${whyCourseChosen(course, answers)} This day gives proper time to both.`
    ),
    makePlan(p3,
      'Full experience',
      'The golf is the centrepiece. The island fills the rest of the schedule.',
      ({ holesLabel, holeNote, travelDesc, warmup }) => {
        const steps = [
          { time:`${sw.depart} (estimate)`, title:'Depart your accommodation', desc:travelDesc },
          { time:'On arrival', title:warmup.title, desc:warmup.desc },
          { time:`Tee time window ${sw.tee} (estimate)`, title:holesLabel, desc:p3.c.blurb + holeNote },
          { time:'Lunch', title:'Lunch, booked and timed', desc:`${lunchFor(region, answers, answers.dayStyle === 'luxury')}. Andy books the right table for your group.` },
        ]
        if (firstAddon) steps.push({ time:'Afternoon', title:firstAddon.title, desc:firstAddon.desc })
        else steps.push({ time:'Afternoon', title:'Beach or village hour', desc:'A nearby cove or a historic town, chosen by region when the plan is confirmed.' })
        if (secondAddon) steps.push({ time:'Late afternoon', title:secondAddon.title, desc:secondAddon.desc })
        steps.push({ time:'Evening', title:'Return in the last of the light', desc:`Back to your base, around ${p3.drive} minutes (estimate), with a full Mallorca day behind you.` })
        return steps
      },
      (course) => answers.addons?.length
        ? `${whyCourseChosen(course, answers)} The add-ons you chose deserve real time in the schedule, so this plan builds the full day around them.`
        : `${whyCourseChosen(course, answers)} This plan adds the island around the round without crowding it.`
    ),
  ]

  return itins
}

const MAILERLITE_COURSE_SELECTOR = 'https://assets.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe'
const TRIP_PLANNER_PDF_URL = '/downloads/trip-planner.pdf'

export default function GolfDayBuilderClient({ lang = 'en' }) {
  const t = getGolfDayBuilderT(lang)
  const [phase, setPhase] = useState('quiz') // 'intro' | 'quiz' | 'results'
  const [stepIdx, setStepIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [itins, setItins] = useState(null)
  const [activeItin, setActiveItin] = useState(0)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailSending, setEmailSending] = useState(false)
  const [pdfSent, setPdfSent] = useState(false)
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false)
  const [toast, setToast] = useState('')
  const [showToast, setShowToast] = useState(false)
  const containerRef = useRef(null)

  function scrollToTop() {
    const el = containerRef.current
    if (!el) return
    window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 70), behavior: 'smooth' })
  }

  const q = QUESTIONS[stepIdx]

  function startBuilder() {
    setPhase('quiz')
    scrollToTop()
  }

  function pick(key, val, multi) {
    if (multi) {
      const curr = answers[key] || []
      const idx = curr.indexOf(val)
      const next = idx >= 0 ? curr.filter(v => v !== val) : [...curr, val]
      setAnswers(prev => ({ ...prev, [key]: next }))
    } else {
      const newAnswers = { ...answers, [key]: val }
      setAnswers(newAnswers)
      setTimeout(() => {
        if (stepIdx < QUESTIONS.length - 1) {
          setStepIdx(s => s + 1)
          scrollToTop()
        } else {
          const built = buildItineraries(newAnswers)
          setItins(built)
          setActiveItin(0)
          setPhase('results')
          scrollToTop()
        }
      }, 220)
    }
  }

  function isSelected(key, val, multi) {
    if (multi) return (answers[key] || []).includes(val)
    return answers[key] === val
  }

  function canNext() {
    if (!q) return false
    if (q.multi) return true
    return !!answers[q.key]
  }

  function nextStep() {
    if (stepIdx < QUESTIONS.length - 1) {
      setStepIdx(s => s + 1)
      scrollToTop()
    } else {
      generateItineraries()
    }
  }

  function prevStep() {
    if (stepIdx > 0) {
      setStepIdx(s => s - 1)
      scrollToTop()
    }
  }

  function generateItineraries() {
    const built = buildItineraries(answers)
    setItins(built)
    setActiveItin(0)
    setPhase('results')
    scrollToTop()
  }

  function restart() {
    setPhase('quiz')
    setStepIdx(0)
    setAnswers({})
    setItins(null)
    setActiveItin(0)
    setEmail('')
    setEmailSent(false)
    setPdfSent(false)
    setSubscribeNewsletter(false)
    scrollToTop()
  }

  async function requestTripPdf() {
    if (!email) return
    setPdfSent(true)
    try {
      await fetch('/api/lead-magnet-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, guide: 'trip-planner', subscribeNewsletter }),
      })
    } catch { /* fire and forget */ }
  }

  function displayToast(msg) {
    setToast(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3200)
  }

  async function emailItinerary() {
    if (!email || !email.includes('@')) return
    setEmailSending(true)

    // Fire-and-forget: add to MailerLite
    const mlBody = new URLSearchParams()
    mlBody.set('fields[email]', email)
    mlBody.set('ml-submit', '1')
    mlBody.set('anticsrf', 'true')
    fetch(MAILERLITE_COURSE_SELECTOR, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: mlBody.toString(),
    }).catch(() => {})
    const builtItins = itins || buildItineraries(answers)
    const itineraries = builtItins.map(it => ({
      name: it.name,
      courseName: displayCourseName(it.course.name),
      tagline: it.tagline,
      steps: it.steps.map(s => ({ time: s.time, title: s.title })),
    }))
    try {
      const res = await fetch('/api/send-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tool: 'golf-day-builder', subject: 'Your Mallorca golf day plan', data: { itineraries }, subscribeNewsletter }),
      })
      setEmailSending(false)
      if (res.ok) { setEmailSent(true) }
      else { displayToast("That didn't go through. Check the address and try again.") }
    } catch {
      setEmailSending(false)
      displayToast("That didn't go through. Check the address and try again.")
    }
  }

  const andyHandles = itins ? [
    'Tee time secured at the right rate',
    'Restaurant table booked and timed around your round',
    answers.transport === 'yes' ? 'Door-to-door transport arranged' : 'Route and parking guidance for your drive',
    'Buggies, clubs, and rentals organised if needed',
    answers.addons?.includes('coaching') ? 'Your coaching session with Andy confirmed' : 'Optional warm-up or on-course coaching with Andy',
    'One WhatsApp contact for the whole day',
  ] : []

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .gdb-hero { background:#2D4A3E; color:#F7F4EF; padding:52px 24px 48px; text-align:center; }
        .gdb-eyebrow { font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#CBA968; margin-bottom:16px; display:block; }
        .gdb-h1 { font-family:var(--font-serif); font-weight:500; font-size:clamp(2.1rem,5vw,3.2rem); line-height:1.1; color:#F7F4EF; max-width:600px; margin:0 auto; }
        .gdb-sub { font-family:var(--font-sans); font-weight:300; font-size:1rem; line-height:1.6; color:rgba(247,244,239,0.78); max-width:480px; margin:16px auto 0; }
        .gdb-wrap { max-width:680px; margin:0 auto; padding:0 22px 90px; }
        /* Intro */
        .gdb-intro { text-align:center; padding-top:40px; }
        .gdb-lead { font-size:1rem; max-width:440px; margin:0 auto 30px; color:#2C2A27; line-height:1.85; }
        .gdb-btn-gold { background:#B8973C; color:#1A1916; border:none; padding:16px 34px; font-family:var(--font-sans); font-size:10px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; cursor:pointer; border-radius:999px; transition:opacity .25s, transform .25s; }
        .gdb-btn-gold:hover { opacity:.9; }
        .gdb-btn-gold:hover, .gdb-btn-pine:hover, .gdb-btn-ghost:hover, .gdb-cta-secondary .gdb-btn-secondary:hover, .gdb-tool-link:hover { transform:translateY(-1px); }
        /* Progress */
        .gdb-progress { display:flex; gap:4px; justify-content:center; margin:34px auto 10px; max-width:300px; }
        .gdb-progress span { flex:1; height:2px; background:#E0D8CB; transition:background .3s; }
        .gdb-progress span.done { background:#B8973C; }
        .gdb-step-label { text-align:center; font-weight:400; font-size:9px; letter-spacing:.14em; text-transform:uppercase; color:#8A7F74; margin-bottom:8px; }
        /* Question cards */
        .gdb-qcard h2 { font-family:var(--font-serif); font-size:clamp(1.7rem,4vw,2.3rem); font-weight:500; line-height:1.12; color:#1A1916; text-align:center; margin:16px 0 4px; }
        .gdb-qcard .sub { text-align:center; color:#8A7F74; font-size:.95rem; margin-bottom:26px; line-height:1.6; }
        .gdb-multi-note { text-align:center; font-weight:400; font-size:9px; color:#B8973C; margin-bottom:16px; letter-spacing:.14em; text-transform:uppercase; }
        .gdb-opts { display:grid; grid-template-columns:1fr; gap:10px; }
        @media(min-width:560px) {
          .gdb-opts { grid-template-columns:1fr 1fr; }
          .gdb-opts > button:last-child:nth-child(odd) { grid-column:1 / -1; max-width:calc(50% - 5px); justify-self:center; }
        }
        .gdb-opt { background:#fff; border:1px solid #E0D8CB; padding:18px; cursor:pointer; text-align:left; display:flex; gap:16px; align-items:center; transition:border-color .25s, box-shadow .25s, transform .2s; font:inherit; color:inherit; width:100%; }
        .gdb-opt:hover { border-color:#B8973C; transform:translateY(-1px); }
        .gdb-opt.selected { border-color:#B8973C; background:#F4EDD8; }
        .gdb-opt .t { font-family:var(--font-serif); font-size:1.18rem; font-weight:500; color:#1A1916; line-height:1.2; }
        .gdb-opt .d { font-size:.78rem; font-weight:400; color:#8A7F74; margin-top:2px; line-height:1.5; display:block; }
        .gdb-nav-row { display:flex; justify-content:space-between; margin-top:28px; gap:12px; }
        .gdb-btn-pine { background:#2D4A3E; color:#fff; border:none; padding:16px 34px; font-family:var(--font-sans); font-weight:500; font-size:10px; letter-spacing:.18em; text-transform:uppercase; cursor:pointer; transition:background .25s, transform .25s; border-radius:999px; }
        .gdb-btn-pine:hover { background:#3D6455; }
        .gdb-btn-pine:disabled { opacity:.35; cursor:not-allowed; }
        .gdb-btn-ghost { background:transparent; color:#8A7F74; border:1px solid #E0D8CB; padding:16px 34px; font-family:var(--font-sans); font-weight:500; font-size:10px; letter-spacing:.18em; text-transform:uppercase; cursor:pointer; transition:border-color .25s, color .25s, transform .25s; border-radius:999px; }
        .gdb-btn-ghost:hover { border-color:#B8973C; color:#2C2A27; }
        /* Results */
        .gdb-result-head { text-align:center; padding-top:40px; margin-bottom:8px; }
        .gdb-result-head .eyebrow { font-family:var(--font-sans); font-size:10px; font-weight:500; letter-spacing:.22em; text-transform:uppercase; color:#B8973C; margin-bottom:12px; display:block; }
        .gdb-result-head h2 { font-family:var(--font-serif); font-size:clamp(1.9rem,4.5vw,2.7rem); font-weight:500; color:#1A1916; line-height:1.1; }
        .gdb-result-head p { color:#8A7F74; margin-top:10px; font-size:.95rem; }
        .gdb-tabs { display:flex; gap:2px; margin:28px 0 24px; border:1px solid #E0D8CB; background:#fff; }
        .gdb-tab { flex:1; border:none; padding:14px 6px; cursor:pointer; font-family:var(--font-sans); font-weight:500; font-size:9px; letter-spacing:.12em; text-transform:uppercase; line-height:1.5; background:transparent; color:#8A7F74; transition:background .25s, color .25s; }
        .gdb-tab.active { background:#2D4A3E; color:#fff; }
        .gdb-itin { display:none; }
        .gdb-itin.active { display:block; }
        .gdb-course-card { background:linear-gradient(165deg, #2D4A3E 0%, #1A1916 120%); color:#fff; padding:30px 26px; margin-bottom:28px; position:relative; overflow:hidden; }
        .gdb-course-card .tag { display:inline-block; font-weight:500; font-size:9px; letter-spacing:.22em; text-transform:uppercase; color:#D4B068; border:1px solid rgba(212,176,104,.4); padding:6px 12px; margin-bottom:16px; }
        .gdb-course-card h3 { font-family:var(--font-serif); font-size:1.9rem; font-weight:500; line-height:1.1; margin-bottom:8px; }
        .gdb-course-card .where { font-size:.78rem; font-weight:400; letter-spacing:.06em; color:rgba(255,255,255,0.72); }
        .gdb-course-card .blurb { margin-top:14px; font-size:.92rem; color:rgba(255,255,255,0.78); line-height:1.8; max-width:46ch; }
        .gdb-pills { display:flex; flex-wrap:wrap; gap:8px; margin-top:18px; }
        .gdb-pill { font-size:.72rem; font-weight:400; letter-spacing:.04em; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.1); padding:5px 12px; color:rgba(255,255,255,0.85); }
        /* Timeline */
        .gdb-timeline { position:relative; padding-left:40px; margin-bottom:8px; }
        .gdb-timeline::before { content:""; position:absolute; left:13px; top:10px; bottom:14px; width:1px; background:linear-gradient(#B8973C, #E0D8CB); }
        .gdb-tl-item { position:relative; padding-bottom:26px; }
        .gdb-tl-item:last-child { padding-bottom:8px; }
        .gdb-tl-dot { position:absolute; left:-40px; top:0; width:27px; height:27px; background:#fff; border:1px solid #B8973C; display:flex; align-items:center; justify-content:center; font-family:var(--font-serif); font-style:italic; font-size:.8rem; color:#B8973C; }
        .gdb-tl-time { font-size:9px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#B8973C; }
        .gdb-tl-title { font-family:var(--font-serif); font-size:1.22rem; font-weight:500; color:#1A1916; margin-top:3px; line-height:1.25; }
        .gdb-tl-desc { font-size:.85rem; font-weight:300; color:#2C2A27; margin-top:4px; line-height:1.75; max-width:52ch; }
        .gdb-why-card { border-left:2px solid #B8973C; background:#F4EDD8; padding:24px 26px; margin-top:26px; }
        .gdb-why-card h4 { font-weight:500; font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#B8973C; margin-bottom:10px; }
        .gdb-why-card p { font-family:var(--font-serif); font-style:italic; font-size:1.1rem; color:#2D4A3E; line-height:1.6; }
        .gdb-andy-card { background:#EDE9E1; padding:26px; margin-top:18px; }
        .gdb-andy-card h4 { font-weight:500; font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#B8973C; margin-bottom:14px; }
        .gdb-andy-card ul { list-style:none; }
        .gdb-andy-card li { font-size:.88rem; font-weight:300; padding:6px 0 6px 28px; position:relative; color:#2C2A27; }
        .gdb-andy-card li::before { content:'·'; position:absolute; left:6px; font-family:var(--font-serif); font-size:1.4rem; line-height:1; top:6px; color:#B8973C; }
        .gdb-estimate-note { font-size:.74rem; font-weight:300; font-style:italic; color:#8A7F74; text-align:center; margin-top:22px; line-height:1.7; }
        /* CTA block */
        .gdb-cta-block { margin-top:38px; background:#1A1916; padding:44px 28px; text-align:center; color:#fff; }
        .gdb-cta-block .eyebrow { font-family:var(--font-sans); font-size:10px; font-weight:500; letter-spacing:.22em; text-transform:uppercase; color:#D4B068; margin-bottom:14px; display:block; }
        .gdb-cta-block h3 { font-family:var(--font-serif); font-size:clamp(1.6rem,4vw,2.1rem); font-weight:500; line-height:1.15; max-width:420px; margin:0 auto 12px; }
        .gdb-cta-copy { font-size:.9rem; color:rgba(255,255,255,.72); max-width:400px; margin:0 auto 28px; line-height:1.8; }
        .gdb-cta-grid { display:grid; gap:10px; max-width:380px; margin:0 auto; }
        .gdb-email-row { display:flex; flex-direction:column; gap:8px; align-items:center; }
        .gdb-email-row .gdb-btn-gold { width:100%; }
        .gdb-email-input { width:100%; border:none; padding:14px 16px; font-size:14px; font-family:var(--font-sans); color:#2C2A27; border-radius:999px; text-align:center; }
        .gdb-email-success { font-size:13px; color:#D4B068; margin:0; }
        .gdb-newsletter-label { display:flex; align-items:center; gap:8px; font-family:var(--font-sans); font-size:12px; color:rgba(255,255,255,.6); cursor:pointer; margin-top:4px; }
        .gdb-cta-secondary { display:flex; gap:8px; margin-top:6px; }
        .gdb-cta-secondary .gdb-btn-secondary { flex:1; background:transparent; color:rgba(255,255,255,0.85); border:1px solid rgba(255,255,255,.22); padding:13px 6px; font-family:var(--font-sans); font-size:9px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; cursor:pointer; border-radius:999px; transition:border-color .25s, color .25s, transform .25s; }
        .gdb-cta-secondary .gdb-btn-secondary:hover { border-color:#D4B068; color:#D4B068; }
        .gdb-restart { display:block; margin:18px auto 0; background:none; border:none; cursor:pointer; font-family:var(--font-sans); font-weight:400; font-size:10px; letter-spacing:.14em; text-transform:uppercase; padding:14px 12px 2px; color:#8A7F74; border-bottom:1px solid #C4BAA9; }
        .gdb-restart:hover { color:#2C2A27; border-color:#B8973C; }
        .gdb-more-tools { background:#f4f1eb; border:1px solid #e0d8cb; border-radius:14px; padding:18px 20px; margin-top:20px; text-align:center; }
        .gdb-more-tools-label { font-family:var(--font-sans); font-size:10px; text-transform:uppercase; letter-spacing:.18em; color:#8A7F74; margin-bottom:12px; font-weight:500; }
        .gdb-tool-links { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; }
        .gdb-tool-link { display:inline-flex; align-items:center; justify-content:center; min-height:42px; padding:10px 18px; font-size:10px; font-family:var(--font-sans); font-weight:500; letter-spacing:.14em; text-transform:uppercase; border:1px solid rgba(45,74,62,.18); background:#fff; color:#2d4a3e; text-decoration:none; border-radius:999px; transition:border-color .25s, color .25s, transform .25s; }
        .gdb-tool-link:hover { border-color:#B8973C; color:#1A1916; }
        .gdb-toast { position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(90px); background:#1A1916; color:#F7F4EF; padding:13px 26px; font-size:.8rem; font-weight:400; letter-spacing:.02em; box-shadow:0 22px 60px rgba(18,17,15,0.08); transition:transform .35s; z-index:50; max-width:88vw; text-align:center; border-radius:999px; }
        .gdb-toast.show { transform:translateX(-50%) translateY(0); }
      `}</style>

      {/* HERO */}
      <section className="gdb-hero">
        <span className="gdb-eyebrow">Free tool</span>
        <h1 className="gdb-h1">Build your perfect Mallorca golf day</h1>
        <p className="gdb-sub">Eight questions. A complete day plan with course, lunch, and add-ons, built around your group.</p>
      </section>

      <ToolTrustLine />

      <div className="gdb-wrap">

        {/* INTRO */}
        {phase === 'intro' && (
          <section className="gdb-intro">
            <p className="gdb-lead">The island has more than twenty courses and the right one depends on who is playing, when you want to tee off, and what you want from the rest of the day. This takes about a minute and gives you a plan worth keeping.</p>
            <button className="gdb-btn-gold" onClick={startBuilder}>Start building my day</button>
          </section>
        )}

        {/* QUIZ */}
        {phase === 'quiz' && q && (
          <section>
            <div className="gdb-progress">
              {QUESTIONS.map((_, i) => (
                <span key={i} className={i <= stepIdx ? 'done' : ''} />
              ))}
            </div>
            <div className="gdb-step-label">{q.label}</div>
            <div className="gdb-qcard">
              <h2>{q.title}</h2>
              {q.sub && <p className="sub">{q.sub}</p>}
              {q.multi && <div className="gdb-multi-note">Select any that appeal, or none</div>}
              <div className="gdb-opts">
                {q.opts.map(o => (
                  <button
                    key={o.v}
                    className={`gdb-opt${isSelected(q.key, o.v, q.multi) ? ' selected' : ''}`}
                    onClick={() => pick(q.key, o.v, q.multi)}
                  >
                    <span>
                      <span className="t">{o.t}</span>
                      <span className="d">{o.d}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="gdb-nav-row">
              <button
                className="gdb-btn-ghost"
                onClick={prevStep}
                style={{ visibility: stepIdx === 0 ? 'hidden' : 'visible' }}
              >Back</button>
              <button
                className="gdb-btn-pine"
                onClick={nextStep}
                disabled={!canNext()}
              >
                {stepIdx === QUESTIONS.length - 1 ? 'Build my day' : 'Continue'}
              </button>
            </div>
          </section>
        )}

        {/* RESULTS */}
        {phase === 'results' && itins && (
          <section>
            <div className="gdb-result-head">
              <span className="eyebrow">Your personalised plan</span>
              <h2>Your golf day, three ways</h2>
              <p>
                Built for {GROUP_LABEL[answers.group]} staying {REGION_LABEL[answers.region]}.
                <span style={{ display:'block', marginTop:'6px', fontSize:'.82rem', color:'#8A7F74' }}>
                  Course chosen: {whyCourseChosen(itins[0].course, answers)}
                </span>
              </p>
            </div>

            <div className="gdb-tabs">
              {['Efficient golf day', 'Golf & long lunch', 'Full experience'].map((label, i) => (
                <button
                  key={i}
                  className={`gdb-tab${activeItin === i ? ' active' : ''}`}
                  onClick={() => setActiveItin(i)}
                >
                  {label.split(' ').slice(0,2).join(' ')}<br/>{label.split(' ').slice(2).join(' ')}
                </button>
              ))}
            </div>

            {itins.map((it, i) => (
              <div key={i} className={`gdb-itin${activeItin === i ? ' active' : ''}`}>
                <div className="gdb-course-card" style={COURSE_IMGS[it.course.id] ? { backgroundImage: `linear-gradient(165deg, rgba(45,74,62,0.88) 0%, rgba(26,25,22,0.92) 120%), url(${COURSE_IMGS[it.course.id]})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
                  <span className="tag">{it.name}</span>
                  <h3>{displayCourseName(it.course.name)}</h3>
                  <div className="where">Around {it.drive} min from your base (estimate)</div>
                  <p className="blurb">{it.tagline}</p>
                  <div className="gdb-pills">
                    {getCourseFacts(it.course).map(f => <span key={f} className="gdb-pill">{f}</span>)}
                    <span className="gdb-pill">{START_WINDOWS[answers.start]?.label}</span>
                  </div>
                </div>

                <div className="gdb-timeline">
                  {it.steps.map((s, idx) => (
                    <div key={idx} className="gdb-tl-item">
                      <div className="gdb-tl-dot">{idx + 1}</div>
                      <div className="gdb-tl-time">{s.time}</div>
                      <div className="gdb-tl-title">{s.title}</div>
                      <div className="gdb-tl-desc">{s.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="gdb-why-card">
                  <h4>Why this day fits you</h4>
                  <p>{it.why}</p>
                </div>

                <div className="gdb-andy-card">
                  <h4>What Andy handles when you book through Mr Mallorca Golf</h4>
                  <ul>{andyHandles.map(h => <li key={h}>{h}</li>)}</ul>
                </div>
              </div>
            ))}

            <p className="gdb-estimate-note">Timings, travel durations, and costs shown here are planning estimates. Andy confirms exact tee times, tables, and transport when you book.</p>

            <div className="gdb-cta-block">
              <span className="eyebrow">Keep your day plan</span>
              <h3>Email yourself all three day plans</h3>
              <p className="gdb-cta-copy">We'll send the full itineraries: timings, courses and Andy's notes, so you can share them with your group and decide together. No spam. Andy replies to every message personally.</p>
              <div className="gdb-cta-grid">
                {emailSent ? (
                  <div>
                    <p className="gdb-email-success">&#10003; Done. Your plans are on their way.</p>
                    {!pdfSent ? (
                      <div style={{ background:'rgba(247,244,239,0.08)', border:'1px solid rgba(184,151,60,0.3)', borderRadius:'10px', padding:'14px 16px', margin:'10px 0' }}>
                        <p style={{ fontSize:'11px', color:'#D4B068', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'6px', fontFamily:'var(--font-sans)' }}>Also free</p>
                        <p style={{ fontSize:'13px', color:'rgba(247,244,239,0.78)', marginBottom:'10px', lineHeight:'1.5' }}>The 7-Day Mallorca Golf Itinerary PDF. A ready-to-use week plan with the right courses in the right order.</p>
                        <a
                          href={TRIP_PLANNER_PDF_URL}
                          target="_blank"
                          rel="noopener"
                          className="gdb-btn-gold"
                          style={{ fontSize:'13px', display:'inline-block', textDecoration:'none', padding:'10px 20px', borderRadius:'99px' }}
                          onClick={requestTripPdf}
                        >Download free PDF</a>
                      </div>
                    ) : (
                      <p style={{ fontSize:'12px', color:'#D4B068', margin:'6px 0' }}>PDF on its way too.</p>
                    )}
                  </div>
                ) : (
                  <div className="gdb-email-row">
                    <input
                      type="email"
                      className="gdb-email-input"
                      placeholder="you@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      aria-label="Email address"
                    />
                    <button className="gdb-btn-gold" onClick={emailItinerary} disabled={emailSending}>
                      {emailSending ? 'Sending…' : 'Email me these plans'}
                    </button>
                    <label className="gdb-newsletter-label">
                      <input
                        type="checkbox"
                        checked={subscribeNewsletter}
                        onChange={e => setSubscribeNewsletter(e.target.checked)}
                        style={{ accentColor:'#D4B068' }}
                      />
                      Also send me Andy's occasional Mallorca golf planning notes
                    </label>
                  </div>
                )}

                <div style={{ borderTop:'1px solid rgba(255,255,255,.14)', margin:'6px 0 2px' }} />
                <p style={{ fontFamily:'var(--font-sans)', fontSize:'.82rem', color:'rgba(255,255,255,.7)', margin:'2px 0 4px', lineHeight:'1.6' }}>Or have Andy turn one of these into a booked day: tee time, restaurant and transport handled around your group.</p>
                <button className="gdb-btn-gold" onClick={() => window.open('https://www.mrmallorcagolf.com/contact', '_blank', 'noopener')}>Ask Andy to build this for my group</button>
                <button className="gdb-btn-pine" style={{ borderRadius:'999px' }} onClick={() => window.open('https://www.mrmallorcagolf.com/play-with-a-pro', '_blank', 'noopener')}>Explore Play With A Pro</button>
                <div className="gdb-cta-secondary">
                  <button className="gdb-btn-secondary" onClick={() => { trackDayWhatsApp(); window.open(WA_DAY_HREF, '_blank', 'noopener') }}>WhatsApp Andy</button>
                </div>
              </div>
            </div>

            <div className="gdb-more-tools">
              <div className="gdb-more-tools-label">More planning tools</div>
              <div className="gdb-tool-links">
                <a href="/tools/course-selector" className="gdb-tool-link">Find your courses</a>
                <a href="/tools/hotel-recommender" className="gdb-tool-link">Find hotels</a>
                <a href="/tools/golf-cost-calculator" className="gdb-tool-link">Estimate trip cost</a>
              </div>
            </div>

            <div style={{ display:'flex', gap:'10px', maxWidth:'480px', margin:'0 auto' }}>
              <button className="gdb-restart" style={{ flex:1 }} onClick={() => { setPhase('quiz'); setStepIdx(QUESTIONS.length - 1); scrollToTop() }}>Adjust my answers</button>
              <button className="gdb-restart" style={{ flex:1 }} onClick={restart}>Start over</button>
            </div>
          </section>
        )}
      </div>

      <div className={`gdb-toast${showToast ? ' show' : ''}`}>{toast}</div>
    </div>
  )
}
