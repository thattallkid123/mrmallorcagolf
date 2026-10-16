// Legacy descriptions and travel estimates are retained for data compatibility.
// Displayed plans use confirmed scorecards/access and do not render those estimates.
import { getCanonicalCourseDataByName } from './course-catalog.js'
import { EN_PLAN } from './golf-day-builder-localize.js'
const EN_WHY = EN_PLAN.whyCourse

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
  { id:"son-termes", name:"Golf Son Termes", region:"palma", tags:["scenic","challenging","close"], facts:["Par 70 · Grupo Harris, 1998","Mountain views of Palma"], blurb:"Mountain golf in the Tramuntana foothills, 25 minutes from Palma. On clear days, Castell de Bellver and the cathedral are visible from the upper holes with the Mediterranean behind.", level:"casual+", driveMins:{southwest:25, palma:20, north:55, east:60, south:30} },
  { id:"t-golf-calvia", name:"T Golf Calvià (Poniente)", region:"southwest", tags:["famous","luxury","serious","scenic"], facts:["Par 72 · 15 lakes","Host of the Mallorca Open"], blurb:"Rebuilt after a €10 million renovation, T Golf Calvià feels polished from arrival to finish. Wide driving lines, 15 lakes in play, and excellent conditioning throughout.", level:"casual+", driveMins:{southwest:15, palma:25, north:55, east:65, south:35} },
  { id:"son-antem-east", name:"Golf Son Antem East", region:"south", tags:["forgiving","relaxed","family","close"], facts:["Par 72 · Francisco Lopez-Segalés, 1994","Marriott resort · 5 lakes"], blurb:"The more accessible of the two Son Antem courses. Generous fairways and five lakes on a former hunting estate near Llucmajor.", level:"beginner+", driveMins:{southwest:30, palma:20, north:55, east:60, south:10} },
  { id:"son-quint", name:"Golf Son Quint", region:"palma", tags:["forgiving","relaxed","family","close"], facts:["Par 71 · Opened 2007","Tiger Woods & Charlie played here, July 2022"], blurb:"The most approachable of the Son Vida courses. Wide fairways, four tee positions, and a view directly toward Palma Cathedral from hole 8.", level:"beginner+", driveMins:{southwest:20, palma:10, north:50, east:55, south:25} },
  { id:"maioris", name:"Golf Maioris", region:"south", tags:["relaxed","forgiving","close"], facts:["Par 72 · Opened 2006","One of few public grass driving ranges in Mallorca"], blurb:"Front nine Scottish and bumpy, back nine more American and flatter: two personalities in one round. Less crowded than the Palma courses.", level:"beginner+", driveMins:{southwest:30, palma:20, north:55, east:55, south:10} },
  { id:"vall-dor", name:"Vall d'Or Golf", region:"east", tags:["scenic","relaxed","family"], facts:["Par 71 · 1986","Cliffside finish with east coast sea views"], blurb:"A round that improves as it goes: tight traditional front nine, then the back nine opens toward the coast with sea views and a cliffside finish.", level:"casual+", driveMins:{southwest:75, palma:60, north:45, east:15, south:65} },
  { id:"golf-pollenca", name:"Golf Pollença", region:"north", tags:["scenic","relaxed","family","forgiving"], facts:["Par 35 · 9 holes · José Gancedo, 1986","Views of Tramuntana, Bay of Pollença and Bay of Alcúdia"], blurb:"Nine holes integrated into the hillside above Pollença town: views of the Tramuntana, two bays, and the sea. The right afternoon complement to an Alcanada morning. Completable in 90 minutes.", level:"beginner+", driveMins:{southwest:65, palma:55, north:10, east:50, south:65} },
  { id:"santa-ponsa-2", name:"Golf Santa Ponsa 2", region:"southwest", tags:["relaxed","serious"], facts:["Par 72 · Members only","Guests must play with a member"], blurb:"Usually the quietest course in the Southwest cluster. Tree-lined fairways reward placement over power. I can host clients as my guests when I am playing.", level:"casual+", driveMins:{southwest:10, palma:25, north:60, east:65, south:35} },
  { id:"santa-ponsa-3", name:"Golf Santa Ponsa 3 (9 holes)", region:"southwest", tags:["forgiving","relaxed","family"], facts:["Par 30 · 9 holes · Members only","Guests must play with a member"], blurb:"Nine holes through the Santa Ponsa residential estate: short, accurate, and well-suited to beginners, juniors, or anyone wanting a quick round.", level:"beginner+", driveMins:{southwest:10, palma:25, north:60, east:65, south:35}, note:"9 holes. Build this as an afternoon add-on alongside a full round at Santa Ponsa 1 or 2" },
  { id:"palma-pitch-putt", name:"Palma Pitch & Putt", region:"palma", tags:["forgiving","relaxed","family"], facts:["Par 27 · 9 holes all par-3s · from €17","The only pitch & putt in Mallorca"], blurb:"The only pitch-and-putt in Mallorca, and the course I use for coaching introductions. All par 3s between 50 and 100m.", level:"beginner+", driveMins:{southwest:25, palma:5, north:55, east:60, south:25}, note:"9 holes. Works as a half-day plan, a pre-round warm-up, or an introduction to the game" },
  { id:"reserva-rotana", name:"Rotana Greens (Reserva Rotana)", region:"east", hotelOnly:true, tags:["relaxed","scenic","luxury"], facts:["9 holes · Hotel guests only · Estate course","Capdepera and Pula within 25 minutes"], blurb:"A private 9-hole estate course at Reserva Rotana near Manacor, available exclusively for hotel guests.", level:"beginner+", driveMins:{southwest:80, palma:60, north:35, east:15, south:70}, note:"Hotel guests only. This option only applies if your group is staying at Reserva Rotana" },
]

export const RESTAURANTS = {
  "southwest": {
    "casual": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "premium": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "village": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "michelin": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking."
  },
  "palma": {
    "casual": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "premium": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "village": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "michelin": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking."
  },
  "north": {
    "casual": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "premium": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "village": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "michelin": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking."
  },
  "east": {
    "casual": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "premium": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "village": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "michelin": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking."
  },
  "south": {
    "casual": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "premium": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "village": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "michelin": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking."
  }
}

export const ADDONS = {
  "beach": {
    "title": "Beach stop",
    "desc": "An optional stop near the course. Venue, opening hours and travel time are checked when the plan is agreed."
  },
  "spa": {
    "title": "Spa",
    "desc": "An optional stop near the course. Venue, opening hours and travel time are checked when the plan is agreed."
  },
  "village": {
    "title": "Village visit",
    "desc": "An optional stop near the course. Venue, opening hours and travel time are checked when the plan is agreed."
  },
  "wine": {
    "title": "Wine tasting",
    "desc": "An optional stop near the course. Venue, opening hours and travel time are checked when the plan is agreed."
  },
  "family": {
    "title": "Family activity",
    "desc": "An optional stop near the course. Venue, opening hours and travel time are checked when the plan is agreed."
  },
  "coaching": {
    "title": "Play With A Pro",
    "desc": "18 holes with me, with coaching during play, followed by video and written notes. Subject to availability."
  },
  "lunch": {
    "title": "Lunch",
    "desc": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking."
  }
}

export const START_WINDOWS = {
  early:{ label:'Early morning start', tee:'8:00 to 9:00', depart:'7:15' },
  mid:  { label:'Mid-morning start',   tee:'10:00 to 11:00', depart:'9:00' },
  pm:   { label:'Afternoon start',     tee:'13:30 to 14:30', depart:'12:30' },
}

export const QUESTIONS = [
  {
    "key": "region",
    "label": "Step 1 of 8 · Location",
    "title": "Where are you staying?",
    "sub": "Choose your accommodation area, or select ‘Not booked yet’.",
    "multi": false,
    "opts": [
      {
        "v": "southwest",
        "t": "Southwest",
        "d": "Santa Ponsa, Andratx, Bendinat, Calvià"
      },
      {
        "v": "palma",
        "t": "Palma and around",
        "d": "Palma city, Son Vida, central island"
      },
      {
        "v": "north",
        "t": "North",
        "d": "Alcúdia, Pollença, the bays"
      },
      {
        "v": "east",
        "t": "East",
        "d": "Cala Millor, Canyamel, Artà"
      },
      {
        "v": "south",
        "t": "South",
        "d": "Llucmajor, airport area, Son Antem"
      },
      {
        "v": "unbooked",
        "t": "Not booked yet",
        "d": "Suggest an area for the courses I want"
      }
    ]
  },
  {
    "key": "dayStyle",
    "label": "Step 2 of 8 · Day style",
    "title": "What kind of day are you after?",
    "sub": "Pick the one that sounds most like you.",
    "multi": false,
    "opts": [
      {
        "v": "serious",
        "t": "Golf only",
        "d": "An 18-hole round with time to warm up"
      },
      {
        "v": "relaxed",
        "t": "Relaxed golf",
        "d": "Wider fairways and less emphasis on score"
      },
      {
        "v": "luxury",
        "t": "Premium clubs",
        "d": "Prioritise course condition and club facilities"
      },
      {
        "v": "family",
        "t": "Family day",
        "d": "Include time for activities away from golf"
      },
      {
        "v": "scenic",
        "t": "Course views",
        "d": "Sea views or Tramuntana mountains"
      },
      {
        "v": "food",
        "t": "Golf and lunch",
        "d": "Include a restaurant stop"
      }
    ]
  },
  {
    "key": "level",
    "label": "Step 3 of 8 · Golf level",
    "title": "How would you describe your golf?",
    "sub": "This helps match the course to the group.",
    "multi": false,
    "opts": [
      {
        "v": "beginner",
        "t": "Beginner",
        "d": "New to the game or returning to it"
      },
      {
        "v": "casual",
        "t": "Casual",
        "d": "A few rounds a year"
      },
      {
        "v": "confident",
        "t": "Confident",
        "d": "Regular golfer, mid handicap"
      },
      {
        "v": "low",
        "t": "Low handicap",
        "d": "Single-figure handicap"
      }
    ]
  },
  {
    "key": "handicap",
    "label": "Handicap",
    "title": "What is the highest handicap in your group?",
    "sub": "Use the highest handicap in your group. Choose a number only if every player can show a current handicap certificate. Otherwise, select one of the last two options.",
    "multi": false,
    "opts": [
      {
        "v": "low",
        "t": "Up to 28",
        "d": ""
      },
      {
        "v": "mid",
        "t": "29 to 36",
        "d": ""
      },
      {
        "v": "high",
        "t": "37 to 54",
        "d": ""
      },
      {
        "v": "none",
        "t": "Missing a certificate",
        "d": "One or more players cannot show a current handicap certificate"
      },
      {
        "v": "unknown",
        "t": "Not confirmed yet",
        "d": "I do not know everyone’s handicap or certificate status"
      }
    ]
  },
  {
    "key": "start",
    "label": "Step 4 of 8 · Start time",
    "title": "When do you like to start?",
    "sub": "",
    "multi": false,
    "opts": [
      {
        "v": "early",
        "t": "Early morning",
        "d": "More time for lunch or activities after golf"
      },
      {
        "v": "mid",
        "t": "Mid-morning",
        "d": "Start after breakfast"
      },
      {
        "v": "pm",
        "t": "Afternoon",
        "d": "Leave the morning free; daylight must be checked"
      }
    ]
  },
  {
    "key": "courseType",
    "label": "Step 5 of 8 · Course type",
    "title": "What matters most in the course?",
    "sub": "",
    "multi": false,
    "opts": [
      {
        "v": "famous",
        "t": "A known name",
        "d": "Prioritise the island’s better-known clubs"
      },
      {
        "v": "scenic",
        "t": "Scenery",
        "d": "Sea views, mountains, elevation"
      },
      {
        "v": "challenging",
        "t": "More difficult golf",
        "d": "Longer holes, water hazards or narrow landing areas"
      },
      {
        "v": "forgiving",
        "t": "Wider fairways",
        "d": "More room for tee shots"
      },
      {
        "v": "close",
        "t": "In my area",
        "d": "A course in the area selected above"
      }
    ]
  },
  {
    "key": "addons",
    "label": "Step 6 of 8 · Beyond the golf",
    "title": "What would round out the day?",
    "sub": "Choose up to two extras, or none",
    "multi": true,
    "opts": [
      {
        "v": "lunch",
        "t": "Lunch",
        "d": "A restaurant stop near the course"
      },
      {
        "v": "beach",
        "t": "Beach",
        "d": "A swim or time by the sea"
      },
      {
        "v": "spa",
        "t": "Spa",
        "d": "A spa visit near the course"
      },
      {
        "v": "village",
        "t": "Local village",
        "d": "Coffee or a walk through town"
      },
      {
        "v": "wine",
        "t": "Wine",
        "d": "A bodega visit or tasting"
      },
      {
        "v": "family",
        "t": "Family activity",
        "d": "An activity for players and non-golfers"
      },
      {
        "v": "coaching",
        "t": "Play With A Pro",
        "d": "18 holes with me, plus video and written notes"
      }
    ]
  },
  {
    "key": "transport",
    "label": "Step 7 of 8 · Transport",
    "title": "Do you need transport arranged?",
    "sub": "",
    "multi": false,
    "opts": [
      {
        "v": "yes",
        "t": "Ask about transfers",
        "d": "Arranged through a local travel partner"
      },
      {
        "v": "no",
        "t": "We will drive",
        "d": "Own car or hire car"
      }
    ]
  },
  {
    "key": "group",
    "label": "Step 8 of 8 · Your group",
    "title": "Who is coming?",
    "sub": "",
    "multi": false,
    "opts": [
      {
        "v": "solo",
        "t": "Just me",
        "d": "One player"
      },
      {
        "v": "couple",
        "t": "A couple",
        "d": "Two of you"
      },
      {
        "v": "friends",
        "t": "Friends",
        "d": "A small group trip"
      },
      {
        "v": "family",
        "t": "Family",
        "d": "Mixed ages and interests"
      },
      {
        "v": "vip",
        "t": "VIP or corporate",
        "d": "Hosting clients or marking an occasion"
      }
    ]
  }
]

export const LEVEL_RANK = { beginner:0, casual:1, confident:2, low:3 }
export const LEVEL_REQ  = { 'beginner+':0, 'casual+':1, 'confident+':2 }
export const GROUP_LABEL = { solo:'a solo golfer', couple:'a couple', friends:'a group of friends', family:'a family', vip:'a VIP or corporate group' }
export const REGION_LABEL = { southwest:'in the southwest', palma:'in or near Palma', north:'in the north', east:'in the east', south:'in the south', unbooked:'wherever suits the golf best' }

// A band is usable only when every player has a current certificate.
export const HANDICAP_BANDS = { low: 28, mid: 36, high: 54 }
export function isCourseEligible(course, answers) {
  const canonical = getCanonicalCourseDataByName(course.name)
  const access = canonical?.access
  if (!canonical || !access || access.accessType !== 'public') return false
  if (LEVEL_RANK[answers.level] < LEVEL_REQ[course.level]) return false
  if (canonical.holeCount < 18 && (answers.addons?.includes('coaching') || answers.level !== 'beginner')) return false
  if (access.handicapRequired || access.certificateRequired) {
    const highest = HANDICAP_BANDS[answers.handicap]
    const limits = [access.handicapMen, access.handicapWomen].filter(Number.isFinite)
    if (!highest || !limits.length || highest > Math.min(...limits)) return false
  }
  // A broad area answer cannot support a cross-island "close to my hotel" claim.
  if (answers.courseType === 'close' && answers.region !== 'unbooked' && course.region !== answers.region) return false
  return true
}

export function scoreAllCourses(answers) {
  const region = answers.region === 'unbooked' ? null : answers.region
  return COURSES.filter(c => isCourseEligible(c, answers)).map(c => {
    let s = 0
    if (c.tags.includes(answers.courseType)) s += 5
    if (c.tags.includes(answers.dayStyle)) s += 3
    if (region && c.region === region) s += 10
    if (answers.group === 'vip' && c.tags.includes('luxury')) s += 8
    if (answers.group === 'family' && c.tags.includes('family')) s += 2
    if (answers.dayStyle === 'family' && c.tags.includes('family')) s += 2
    if (LEVEL_RANK[answers.level] >= LEVEL_REQ[c.level]) s += 2
    else s -= 4
    return { c, s }
  }).sort((a,b) => b.s-a.s || a.c.name.localeCompare(b.c.name))
}

export function lunchFor(region, answers, premium, restaurants = RESTAURANTS) {
  const r = restaurants[region] || restaurants.palma
  if (answers.addons?.includes('village')) return r.village
  if (answers.dayStyle === 'luxury' || answers.dayStyle === 'food') return r.michelin || r.premium
  return premium ? r.premium : r.casual
}

export function whyCourseChosen(course, answers, text = EN_WHY) {
  const canonical = getCanonicalCourseDataByName(course.name)
  if (!canonical) return text.fallback
  const facts = text.facts.replace('{holes}', canonical.holeCount).replace('{par}', canonical.par)
  return course.region === answers.region ? facts + ' ' + text.area : facts
}
