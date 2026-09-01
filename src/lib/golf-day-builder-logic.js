export const COURSES = [
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
  { id:"palma-pitch-putt", name:"Palma Pitch & Putt", region:"palma", tags:["forgiving","relaxed","family"], facts:["Par 27 · 9 holes all par-3s · from €17","The only pitch & putt in Mallorca"], blurb:"The only pitch-and-putt in Mallorca, and the course Andy uses for coaching introductions. All par 3s between 50 and 100m.", level:"beginner+", driveMins:{southwest:25, palma:5, north:55, east:60, south:25}, note:"9 holes. Works as a half-day plan, a pre-round warm-up, or an introduction to the game" },
  { id:"reserva-rotana", name:"Rotana Greens (Reserva Rotana)", region:"east", hotelOnly:true, tags:["relaxed","scenic","luxury"], facts:["9 holes · Hotel guests only · Estate course","Capdepera and Pula within 25 minutes"], blurb:"A private 9-hole estate course at Reserva Rotana near Manacor, available exclusively for hotel guests.", level:"beginner+", driveMins:{southwest:80, palma:60, north:35, east:15, south:70}, note:"Hotel guests only. This option only applies if your group is staying at Reserva Rotana" },
]

export const RESTAURANTS = {
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

export const ADDONS = {
  beach:    { title:'Beach hour',           desc:'A nearby cove for a swim and a slow hour in the shade. Beach chosen by region when the plan is confirmed.' },
  spa:      { title:'Spa and recovery',     desc:'A post-round session at a resort spa in the area. Options include Arabella Son Vida, Secrets Paguera, and Bendinat. Andy confirms the venue when you book.' },
  village:  { title:'Local village hour',   desc:"An hour in one of the island's historic towns: coffee, side streets, and a viewpoint or two." },
  wine:     { title:'Wine tasting',         desc:"A guided tasting at a local bodega. Mallorca has a small but serious wine scene: José L. Ferrer in Binissalem and Macià Batle are both worth the detour. Andy times this around the round." },
  family:   { title:'Family activity',      desc:'A boat trip, the caves, or a waterpark depending on the region and ages. Confirmed with the booking.' },
  coaching: { title:'Coaching with Andy',   desc:'A focused session with Andy Griffiths, UK PGA Advanced Professional: warm-up, technique, or on-course strategy.' },
  lunch:    { title:'Long lunch',           desc:'A proper Mallorcan table, booked and timed around your round.' },
}

export const START_WINDOWS = {
  early:{ label:'Early morning start', tee:'8:00 to 9:00', depart:'7:15' },
  mid:  { label:'Mid-morning start',   tee:'10:00 to 11:00', depart:'9:00' },
  pm:   { label:'Afternoon start',     tee:'13:30 to 14:30', depart:'12:30' },
}

export const QUESTIONS = [
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

export const LEVEL_RANK = { beginner:0, casual:1, confident:2, low:3 }
export const LEVEL_REQ  = { 'beginner+':0, 'casual+':1, 'confident+':2 }
export const GROUP_LABEL = { solo:'a solo golfer', couple:'a couple', friends:'a group of friends', family:'a family', vip:'a VIP or corporate group' }
export const REGION_LABEL = { southwest:'in the southwest', palma:'in or near Palma', north:'in the north', east:'in the east', south:'in the south', unbooked:'wherever suits the golf best' }

export function scoreAllCourses(answers) {
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

export function lunchFor(region, answers, premium) {
  const r = RESTAURANTS[region] || RESTAURANTS.palma
  if (answers.addons?.includes('village')) return r.village
  if (answers.dayStyle === 'luxury' || answers.dayStyle === 'food') return r.michelin || r.premium
  return premium ? r.premium : r.casual
}

export function whyCourseChosen(course, answers) {
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
