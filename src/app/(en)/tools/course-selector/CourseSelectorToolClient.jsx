'use client'

import { useRef, useState } from 'react'
import { getCanonicalCourseDataByName } from '@lib/course-catalog'
import { resolveCourseAccessName } from '@lib/course-access-data'
import { formatCourseFeeLabel, getCoursePricingByName } from '@lib/course-pricing-data'
import { COURSE_SELECTOR_T } from '@lib/course-selector-translations'
import { getLegalPath } from '@lib/site'
import { getPrivacyLinkLabel } from '@lib/legal-note-content'
import ToolTrustLine from '../../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../../lib/analytics'

const WA_MESSAGE = 'Hi Andy, I used the course selector on your site and I’d like help planning my Mallorca golf trip.'
const WA_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_MESSAGE)}`

function WhatsAppCta({ label }) {
  function handleClick() {
    trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'course-selector' })
    trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'course-selector' })
  }
  return (
    <a className="cst-btn wa" data-analytics-manual="true" href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17, flexShrink: 0 }} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

const MAILERLITE_COURSE_SELECTOR = 'https://assets.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe'
const COURSE_COMPARISON_PDF_URL = '/downloads/course-comparison.pdf'

/* =====================================================================
   COURSE DATA. Ported faithfully from prototypes/course-selector/index.html
   Facts verified from src/lib/golf-courses-data.js. Green fees are
   peak/low season indications, not live rates.
   walkability (1–5) is a placeholder estimate (verify before launch).
   played: true only where Andy has a published review.
===================================================================== */
const SITE = 'https://www.mrmallorcagolf.com'

const COURSE_IMGS = {
  'son-gual':         '/images/courses/son-gual.webp',
  'alcanada':         '/images/courses/alcanada.webp',
  't-golf-palma':     '/images/courses/t-golf-palma.webp',
  'son-muntaner':     '/images/courses/son-muntaner.webp',
  'santa-ponsa-1':    '/images/courses/santa-ponsa-1.webp',
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
  {
    id:'son-gual', name:'Golf Son Gual',
    area:'Palma', areaLabel:'Palma',
    diff10:9, scenery:4, prestige:5, value:2, walkability:3,
    greenFee:'Peak €165 / Low €115',
    buggyNote:'Buggies available; walkable for the fit',
    bestFor:'A serious round on the island\'s most complete test',
    why:'Thomas Himmel\'s 2007 design sits in its own wind ecosystem: the elevated position means the wind behaves differently on every hole. Greens are fast and raised, so where you miss matters more than how you swing. The closing stretch from 15 to 18 is among the finest four holes in European golf. It is priced accordingly.',
    andy:'The wind on 16 is a different challenge to the wind on 7. That is what makes the course so replayable.',
    played:true, reviewSlug:'son-gual-review',
    bestPlayer:'Confident to low handicap',
    handicapReq:true,
    designer:'Thomas Himmel, 2007',
    signatureHole:'Closing four holes (15–18) are among Europe\'s finest. Hole 2 plays past one of the continent\'s largest bunkers.',
    michelin:'Good restaurants nearby: DINS Santi Taura, Marc Fosh and Zaranda are all in Palma, about 15 minutes away.',
    pairsWith:'Pair with T Golf Calvià on consecutive days for a contrast in Southwest challenge and conditioning.',
    tags:{ability:['confident','low'],style:['serious','bucket-list','luxury'],budget:['premium'],group:['solo','friends','corporate']}
  },
  {
    id:'alcanada', name:'Club de Golf Alcanada',
    area:'North', areaLabel:'Port d\'Alcúdia · North',
    diff10:7, scenery:5, prestige:5, value:3, walkability:3,
    greenFee:'Peak €230 / Low €115',
    buggyNote:'Buggy popular; hilly in places',
    bestFor:'The most scenic championship round in Mallorca',
    why:'Robert Trent Jones Jr. design, host of the Rolex Challenge Tour Grand Final. The Alcanada lighthouse is visible from 16 of the 18 holes and the 58 bunkers demand attention on every approach. The greens are severely undulating and extremely fast, which catches out holiday golfers who have not putted on anything similar. The restaurant terrace after the round is one of the best on the island.',
    andy:'One of the most beautiful rounds you\'ll play anywhere in Europe. The lighthouse view on 17 stays with you long after the scorecard is binned.',
    played:true, reviewSlug:'alcanada-review',
    bestPlayer:'Casual to low handicap',
    designer:'Robert Trent Jones Jr., 2003',
    signatureHole:'Holes 7 and 13 frame the Alcanada lighthouse (visible from 16 of 18 holes). Host of the Rolex Challenge Tour Grand Final.',
    michelin:'Maca de Castro in Port d\'Alcúdia has excellent seasonal menus, about 10 minutes away.',
    pairsWith:'Pair with Golf Pollença for a north double: Alcanada in the morning, nine holes at Pollença in the afternoon. Back before 6pm.',
    tags:{ability:['casual','confident','low'],style:['scenic','bucket-list','luxury','serious'],budget:['premium','mid'],group:['couple','friends','solo','corporate']}
  },
  {
    id:'t-golf-palma', name:'T Golf Palma (Puntiró)',
    area:'Palma', areaLabel:'Palma',
    diff10:7, scenery:4, prestige:4, value:3, walkability:3,
    greenFee:'Peak €150 / Low €105 (dynamic)',
    buggyNote:'Walkable; buggies available',
    bestFor:'Natural-terrain golf with no buildings in sight',
    why:'The only Jack Nicklaus-designed course in Mallorca, opened 2006 and completely renovated in 2022. Nicklaus followed the existing land without modification, so there are no artificially flattened fairways. Native pines, wild olives and carob trees form the rough, and no buildings are visible from any hole. Pricing is dynamic, so the rate you see depends on when you book.',
    andy:'Andy rates this as the course to play when you want to feel away from everything: 15 minutes from Palma, and you cannot see a single building.',
    played:false,
    bestPlayer:'Casual to low handicap',
    designer:'Jack Nicklaus, 2006 (only Nicklaus design in Mallorca)',
    michelin:'DINS Santi Taura (1★), Marc Fosh (1★) and Zaranda (1★) are all in Palma, about 15 minutes away. The natural evening after a Puntiró round.',
    tags:{ability:['casual','confident','low'],style:['scenic','serious','relaxed'],budget:['mid','premium'],group:['friends','solo','couple','corporate']}
  },
  {
    id:'son-muntaner', name:'Son Muntaner',
    area:'Palma', areaLabel:'Son Vida · Palma',
    diff10:7, scenery:4, prestige:5, value:2, walkability:3,
    greenFee:'Peak €260 / Low €110 (dynamic)',
    buggyNote:'Buggies widely used on the rolling terrain',
    bestFor:'The best-conditioned course in Spain, officially',
    why:'Named Best Golf Course in Spain at the 2025 World Golf Awards. Designed by Kurt Rossknecht against the Na Burguesa hills with views over Palma Bay, and a thousand-year-old olive tree beside the 15th. Conditioning is consistently at the top end on the island. Two things to know before booking: pricing is dynamic, and a daily licence applies on top of the green fee.',
    andy:'Conditioning here is as good as anywhere on the island. Budget for the daily licence on top of the green fee.',
    played:true, reviewSlug:'son-muntaner-review',
    bestPlayer:'Casual to low handicap',
    designer:'Kurt Rossknecht, 2000',
    signatureHole:'Hole 15: Sa Capitana (a thousand-year-old olive tree declared a natural monument stands beside the fairway). Course record 63 by Marcus Armitage.',
    michelin:'Palma dining nearby: DINS Santi Taura, Marc Fosh and Zaranda within 20 minutes.',
    tags:{ability:['casual','confident','low'],style:['luxury','serious','bucket-list'],budget:['premium'],group:['couple','corporate','solo','friends']}
  },
  {
    id:'santa-ponsa-1', name:'Golf Santa Ponsa 1',
    area:'Southwest', areaLabel:'Santa Ponsa · Southwest',
    diff10:8, scenery:4, prestige:4, value:4, walkability:4,
    greenFee:'Peak €126 / Low €77',
    buggyNote:'Mostly walkable; buggies available',
    bestFor:'European Tour golf at a public-access price',
    why:'Host of the 2021 European Tour Mallorca Golf Open and the only public course in the Santa Ponsa group. One of the longest courses on the island: the 10th at 590m is one of Europe\'s longest par 5s. Holes 5, 6 and 7 offer some of the best Tramuntana views on the island. Several tee shots are partially blind, so a course planner earns its keep here.',
    andy:'Long hitters get to open the shoulders here, and the green fee is fair for a course with this pedigree. Expect to lose a ball or two on the blind tee shots first time round.',
    played:true, reviewSlug:'santa-ponsa-1-review',
    bestPlayer:'Casual to low handicap',
    designer:'Folco Nardi & Pepe Gancedo, 1977',
    signatureHole:'Hole 10: 590m par-5, one of the longest individual holes in Europe. Holes 5–7 have the best Tramuntana mountain views on the island.',
    tags:{ability:['casual','confident','low'],style:['serious','relaxed','scenic'],budget:['mid','value'],group:['friends','family','couple','corporate']}
  },
  {
    id:'andratx', name:'Golf de Andratx',
    area:'Southwest', areaLabel:'Camp de Mar · Southwest',
    diff10:9, scenery:5, prestige:4, value:3, walkability:1,
    greenFee:'Peak €140 / Low €90 (dynamic)',
    buggyNote:'Buggy essential; serious elevation throughout',
    bestFor:'The hardest, most dramatic round on the island',
    why:'Built into the hills above Camp de Mar without compromise. The 6th is the longest par 5 in Spain at 609 metres. The rough is genuine and the fairways narrow, so bring extra balls and no ego. It is not suitable for beginners, and the views and difficulty together make it one of the most memorable rounds in Mallorca.',
    andy:'Bring double the balls you think you need. The course will take some of them, and the views are the compensation.',
    played:true, reviewSlug:'golf-andratx-review',
    bestPlayer:'Confident to low handicap',
    handicapReq:true,
    designer:'David Kidd, 1999',
    signatureHole:'Hole 6: 609m par-5. The longest hole in Spain, known as the Green Monster. Plays downhill toward Camp de Mar with sea views.',
    michelin:'Sa Clastra (1★) at Castell Son Claret is about 15 minutes away. Chef Jordi Cantó, one of two restaurants inside the estate.',
    pairsWith:'Pair with Golf Santa Ponsa 1 on consecutive days. Andratx for the challenge, Santa Ponsa 1 for the European Tour experience at a lower cost.',
    tags:{ability:['confident','low'],style:['scenic','bucket-list','serious'],budget:['mid','premium'],group:['friends','solo','couple']}
  },
  {
    id:'son-vida', name:'Golf Son Vida',
    area:'Palma', areaLabel:'Son Vida · Palma',
    diff10:8, scenery:4, prestige:4, value:3, walkability:3,
    greenFee:'Peak €190 / Low €85 (dynamic)',
    buggyNote:'Buggies available; tight routing with elevation',
    bestFor:'History and character ten minutes from Palma',
    why:'The oldest course in Mallorca, opened 1964. Seve Ballesteros won here in a European Tour playoff in 1990. The layout winds through the Son Vida neighbourhood with tight routing and constant elevation changes. The 18th is a par 5 with a water carry on the second shot that tempts many players into a decision they later regret.',
    andy:'Andy\'s view: shorter than the modern courses on paper, but the tight doglegs make you think on every tee. Take one club less and stay in play.',
    played:false,
    bestPlayer:'Casual to low handicap',
    designer:'Historic layout (oldest course in Mallorca, opened 1964). Seve Ballesteros won a European Tour playoff here in 1990.',
    signatureHole:'Hole 18: par-5 with a water carry on the second shot that tempts the wrong decision from many players.',
    michelin:'Palma restaurants nearby, 10 minutes away.',
    tags:{ability:['casual','confident','low'],style:['relaxed','luxury','scenic','bucket-list'],budget:['mid','premium'],group:['couple','family','solo','friends']}
  },
  {
    id:'son-quint', name:'Golf Son Quint',
    area:'Palma', areaLabel:'Son Vida · Palma',
    diff10:5, scenery:3, prestige:3, value:4, walkability:4,
    greenFee:'Peak €172 / Low €70 (dynamic)',
    buggyNote:'Gentle enough to walk; buggies available',
    bestFor:'The most approachable course in the Palma area',
    why:'Long, open fairways and four tee positions make it suited to any level. From hole 8, the highest point on the course, you tee off facing directly toward Palma Cathedral. Tiger Woods played here with his son Charlie in July 2022. One warning: the old stone walls are in play, not decoration, and they do not give friendly bounces.',
    andy:'Andy uses Son Quint for coaching days: wide enough to swing freely, with enough shape to practise real course strategy.',
    played:false,
    bestPlayer:'Beginner to confident',
    designer:'Ramón Espinosa & Kurt Rossknecht',
    signatureHole:'Hole 8: from the highest point on the course, the tee shot aims directly toward Palma Cathedral. Tiger Woods played here with his son Charlie in July 2022.',
    michelin:'DINS Santi Taura (1★), Marc Fosh (1★) and Zaranda (1★) are in Palma, about 15 minutes away.',
    tags:{ability:['beginner','casual','confident'],style:['relaxed','family','scenic'],budget:['mid','value'],group:['family','couple','solo','friends']}
  },
  {
    id:'bendinat', name:'Real Golf de Bendinat',
    area:'Southwest', areaLabel:'Bendinat · Southwest',
    diff10:6, scenery:4, prestige:3, value:4, walkability:3,
    greenFee:'Peak €123 / Low €74',
    buggyNote:'Walkable with a trolley; some climbs',
    bestFor:'A peaceful wooded round near Portals',
    why:'A Martin Hawtree wooded valley course from 1986 that feels peaceful despite its built-up surroundings, with views of the Bay of Palma, Cabrera Island and Bendinat Castle. One thing to know: visitor green fees are limited per day, so book ahead.',
    andy:'Andy\'s view: the scorecard says short, the trees say accurate. A good half-day round with Puerto Portals ten minutes away for lunch after.',
    played:false,
    bestPlayer:'Casual to confident',
    designer:'Martin Hawtree, 1986',
    michelin:'Es Fum at the St. Regis Mardavall is nearby (5 minutes), good for a nice dinner.',
    tags:{ability:['casual','confident','beginner'],style:['relaxed','scenic','luxury'],budget:['mid','value'],group:['couple','solo','friends']}
  },
  {
    id:'capdepera', name:'Capdepera Golf',
    area:'East', areaLabel:'Artà · East',
    diff10:7, scenery:4, prestige:3, value:4, walkability:3,
    greenFee:'Peak €125 / Low €79 (dynamic)',
    buggyNote:'Buggy advised for the hillier back nine',
    bestFor:'Two courses in one out east',
    why:'Dan Maples designed this to follow the existing landscape. The front half runs through a wide valley: open and relatively gentle. The back nine climbs into the Levant hills and becomes a much more technical test. Hole 15, up in the mountains with views across the valley to the coast, was chosen as the best hole on the island by Mallorca Magazin.',
    andy:'Andy\'s pairing tip: Capdepera and Canyamel are 15 minutes apart and make a strong two-round day in the east.',
    played:false,
    bestPlayer:'Casual to low handicap',
    designer:'Dan Maples',
    signatureHole:'Hole 15: voted best hole in Mallorca by Mallorca Magazin. Rafa Nadal plays Capdepera regularly. SI 1 (the island\'s hardest-rated hole).',
    michelin:'Cap Vermell Grand Hotel has fine dining (15 minutes), good for a special evening.',
    pairsWith:'Pair with Canyamel Golf, 15 minutes away, for the best two-round day on the east coast.',
    tags:{ability:['casual','confident','low'],style:['relaxed','scenic','serious'],budget:['value','mid'],group:['family','friends','couple']}
  },
  {
    id:'pula', name:'Pula Golf',
    area:'East', areaLabel:'Son Servera · East',
    diff10:7, scenery:3, prestige:4, value:3, walkability:3,
    greenFee:'Peak €145 / Low €69 (dynamic)',
    buggyNote:'Walkable with a trolley; buggies available',
    bestFor:'Tour pedigree without tour-venue crowds',
    why:'Completely redesigned by Olazábal between 2004 and 2006, then host to eight European Tour events. The practice facilities are excellent and include a Trackman Range. Federer and Nadal played a round here in July 2025. Quieter than the big-name courses around Palma.',
    andy:'Andy\'s view: a course manager\'s course. The Olazábal redesign rewards thinking your way round rather than overpowering it.',
    played:false,
    bestPlayer:'Casual to low handicap',
    designer:'Olazábal redesign, 2004–06. Hosted eight European Tour events.',
    michelin:'Cap Vermell Grand Hotel (20 minutes) has good dining options.',
    tags:{ability:['casual','confident','low'],style:['serious','relaxed','bucket-list'],budget:['mid'],group:['friends','solo','corporate']}
  },
  {
    id:'canyamel', name:'Canyamel Golf',
    area:'East', areaLabel:'Capdepera · East',
    diff10:6, scenery:4, prestige:3, value:4, walkability:2,
    greenFee:'Peak €145 / Low €85',
    buggyNote:'Hilly; buggy recommended',
    bestFor:'Character holes you will talk about after the round',
    why:'A José Gancedo design from 1988 where each of the first nine holes has its own distinct character. Hole 4 has views across to Menorca on a clear day. Hole 9 has a traditional stone hut in the middle of the fairway, a hazard unique to Mallorca. The 18th green has a triple-wave undulation visible from the clubhouse terrace.',
    andy:'Andy\'s pairing tip: combine it with the Caves of Artà and Canyamel beach for a full day in the east.',
    played:false,
    bestPlayer:'Casual to confident',
    designer:'José Gancedo (\'Picasso of Golf\'), 1988',
    signatureHole:'Hole 9: a traditional stone hut sits in the middle of the fairway. The only hole in Mallorca with a built structure as a hazard. Hole 4 has views to Menorca on a clear day.',
    michelin:'Cap Vermell Grand Hotel (10 minutes) for dining.',
    pairsWith:'Pair with Capdepera Golf for a full east coast day. Two contrasting courses 15 minutes apart.',
    tags:{ability:['casual','confident','low'],style:['scenic','relaxed','family'],budget:['value','mid'],group:['couple','friends','solo']}
  },
  {
    id:'son-servera', name:'Golf Club Son Servera',
    area:'East', areaLabel:'Costa de los Pinos · East',
    diff10:6, scenery:4, prestige:3, value:4, walkability:4,
    greenFee:'Peak €145 / Low €80',
    buggyNote:'Mostly flat and walkable',
    bestFor:'Old-school coastal parkland golf',
    why:'Founded in 1967, one of the oldest courses on the island. A parkland layout along the Costa de los Pinos with generous fairways and relaxed rough. Holes 3 to 7 are the exception: narrow, tree-lined, climbing into the hills and weaving between lakes. Water comes into play on six holes, so it is not quite the pushover the opening holes suggest.',
    andy:'Andy\'s view: the generous fairways suit a relaxed holiday round, but treat holes 3 to 7 with respect.',
    played:false,
    bestPlayer:'Beginner to confident',
    designer:'Historic (founded 1967, second oldest club in Mallorca). Expanded to 18 holes in 2012.',
    signatureHole:'Hole 18 \'Pine Trap\': water on six holes keeps the relaxed front nine from being a pushover. Menu del día at the Costa de los Pinos restaurant is genuinely good value.',
    tags:{ability:['beginner','casual','confident'],style:['relaxed','family','scenic'],budget:['value','mid'],group:['family','couple','friends','solo']}
  },
  {
    id:'maioris', name:'Golf Maioris',
    area:'South', areaLabel:'Llucmajor · South',
    diff10:7, scenery:3, prestige:3, value:5, walkability:4,
    greenFee:'Peak €110 / Low €91',
    buggyNote:'Mostly flat; easy walking',
    bestFor:'First-day or last-day rounds near the airport',
    why:'The front nine and back nine feel like two different design philosophies: the front Scottish and bumpy, the back more American and flatter. Less crowded than the courses around Palma and an underrated option for an arrival-day or departure-day round. It also has one of the island\'s few public grass driving ranges.',
    andy:'Andy\'s tip for the day you land: clubs off the carousel and on the tee within the hour. The grass range is a rarity on the island.',
    played:false,
    bestPlayer:'Casual to low handicap',
    michelin:'Andreu Genestra (1★ + Green Star) is about 10 minutes away near Llucmajor. Seasonal tasting menus, sustainability-led cooking, one of Mallorca\'s most interesting chef-driven restaurants. Book well ahead.',
    tags:{ability:['beginner','casual','confident','low'],style:['relaxed','family','serious'],budget:['value'],group:['friends','family','solo','couple']}
  },
  {
    id:'vall-dor', name:'Vall d\'Or Golf',
    area:'East', areaLabel:'S\'Horta · Southeast',
    diff10:6, scenery:4, prestige:3, value:4, walkability:2,
    greenFee:'Peak €132 / Low €99',
    buggyNote:'Two contrasting nines with climbs; buggy advised',
    bestFor:'A round that gets better as it goes on',
    why:'The front nine feels older, tighter and more traditional. Then the back nine opens out and changes character completely, with broader corridors, more air around the holes, and sea views that set it apart from the rest of the east coast. The cliffside finish is the reason people come back.',
    andy:'Andy\'s view: if you like a course that improves as the round goes on, this is a very good day out. Keep the driver in the bag on the front nine.',
    played:false,
    bestPlayer:'Casual to confident',
    designer:'Historic layout, 1986. Two nines built at different times. Contrasting characters is the story.',
    signatureHole:'Back nine opens toward the coast with sea views and a cliffside finish. Friday barbecues with live music at Maxime Restaurant, May–October.',
    tags:{ability:['casual','confident','beginner'],style:['scenic','relaxed','family'],budget:['value','mid'],group:['couple','family','friends']}
  },
  {
    id:'son-antem-west', name:'Golf Son Antem West',
    area:'South', areaLabel:'Llucmajor · South',
    diff10:7, scenery:3, prestige:3, value:4, walkability:4,
    greenFee:'Peak €145 / Low €109 (dynamic)',
    buggyNote:'Flat terrain; easy walking, though most use buggies for pace',
    bestFor:'A well-run resort course close to Palma with forgiving fairways and one memorable hole',
    why:'An open countryside layout near Llucmajor, 15 minutes from Palma and 25 from the airport. Generous fairways and light rough make it accessible for most abilities. The tree-lined holes are where the round comes alive. Hole 16, an uphill dogleg-right par-5 finishing at a protected green, is the standout. Flat terrain suits walking.',
    andy:'The 16th is worth the round alone. Book early to manage pace, and use a running chip on the raised greens rather than trying to land it soft.',
    played:true, reviewSlug:null,
    bestPlayer:'Beginner to confident',
    designer:'Francisco Lopez Segales, 1995',
    signatureHole:'Hole 16: uphill dogleg-right par-5 through trees, finishing at a protected green. One of the most satisfying holes near Palma.',
    michelin:'Andreu Genestra (1★ + Green Star) is about 10 minutes near Llucmajor. Sustainability-led tasting menus, one of Mallorca\'s most interesting restaurants. Book well ahead for evenings.',
    pairsWith:'Play Son Antem East the day before as a gentler warm-up, or pair with Golf Maioris for a south-of-Palma double day.',
    tags:{ability:['beginner','casual','confident'],style:['relaxed','family','serious'],budget:['value','mid'],group:['family','friends','couple','solo']}
  },
  {
    id:'son-termes', name:'Golf Son Termes',
    area:'Palma', areaLabel:'Na Burguesa · Palma',
    diff10:6, scenery:5, prestige:3, value:5, walkability:2,
    greenFee:'Peak €110 / Low €90',
    buggyNote:'Front nine walkable; back nine steep. Buggy advised unless very fit',
    bestFor:'The best views closest to Palma, at a sensible price',
    why:'Located in the Na Burguesa mountains, 20 minutes from Palma but feeling entirely removed from the city. On a clear day the Castell de Bellver and Palma Cathedral are visible from the upper holes, with the Mediterranean behind. Not a long course, but blind tee shots, sharp doglegs, and elevation swings keep every hole interesting.',
    andy:'More character than most courses at this price level. The views from the back nine are the best available this close to Palma. Walk the front nine and take the buggy for the back if you value your knees.',
    played:true, reviewSlug:null,
    bestPlayer:'Casual to confident',
    designer:'Grupo Harris, 1998',
    signatureHole:'Hole 12: a short par-3 from an elevated tee with the best views on the course. Hole 13 plays differently than the card suggests. A 9-iron tee shot is the correct play.',
    michelin:'DINS Santi Taura (1★), Marc Fosh (1★) and Zaranda (1★) are all in Palma, about 20 minutes from the course.',
    pairsWith:'Pair with Golf Son Gual on consecutive days. Son Termes at the value end, Son Gual the benchmark.',
    tags:{ability:['casual','confident','low'],style:['scenic','relaxed','value'],budget:['value','mid'],group:['friends','couple','solo','family']}
  },
  {
    id:'t-golf-calvia', name:'T Golf Calvià (Poniente)',
    area:'Southwest', areaLabel:'Calvià · Southwest',
    diff10:7, scenery:4, prestige:5, value:2, walkability:3,
    greenFee:'Peak €210 / Low €80 (dynamic)',
    buggyNote:'Buggies widely used; walkable but most opt to ride',
    bestFor:'One of the strongest all-round golf experiences on the island',
    why:'Originally designed by John Harris in 1978 and completely rebuilt after a €10 million renovation, T Golf Calvià now feels polished from arrival to finish. Fifteen lakes, wide driving lines, and large undulating greens make it playable without being bland. The sea sits on one side, the Tramuntana on the other. Host of the Mallorca Open.',
    andy:'Conditioning and service are both at the very top here. The lake system means you need to think on about half the holes. But the lines are generous enough that it plays fair for most levels. One of the courses I recommend most in the Southwest.',
    played:true, reviewSlug:'t-golf-calvia-review',
    bestPlayer:'Casual to low handicap',
    designer:'John Harris (1978); completely rebuilt, €10m renovation. Host of the Mallorca Open.',
    signatureHole:'Fifteen lakes throughout the layout, several coming into play on approach shots. Views of the Mediterranean and Tramuntana mountains visible simultaneously from the course.',
    michelin:'Sa Clastra and Es Fum both within 15 minutes for a nice dinner.',
    pairsWith:'Pair with Golf de Andratx for a demanding Southwest double, or Real Golf de Bendinat for a shorter afternoon round.',
    tags:{ability:['casual','confident','low'],style:['luxury','serious','relaxed','bucket-list'],budget:['premium'],group:['friends','couple','corporate','solo']}
  },
  {
    id:'son-antem-east', name:'Golf Son Antem East',
    area:'South', areaLabel:'Llucmajor · South',
    diff10:6, scenery:3, prestige:3, value:4, walkability:4,
    greenFee:'Peak €140 / Low €105 (dynamic)',
    buggyNote:'Wide, flat terrain. Comfortable walking with a trolley',
    bestFor:'A forgiving, family-friendly resort round near Palma',
    why:'The more accessible of the two Son Antem courses. Wide, generous fairways and five lakes keep better players honest without punishing beginners. Designed by Francisco Lopez-Segalés, opened 1994 on a former hunting estate near Llucmajor. Part of the Marriott resort complex. Within 25 minutes of Palma airport.',
    andy:'Start here if your group has mixed abilities. The East course builds confidence and pairs naturally with the West course the following morning for those who want the step up.',
    played:false,
    bestPlayer:'Beginner to casual',
    designer:'Francisco Lopez-Segalés, 1994. Part of the Marriott Son Antem resort.',
    michelin:'Andreu Genestra (1★ + Green Star) is about 10 minutes near Llucmajor. Sustainability-led tasting menus. Book well ahead.',
    pairsWith:'Play Son Antem East on day one, then Golf Son Antem West the following morning. A satisfying step up in difficulty on the same estate.',
    tags:{ability:['beginner','casual'],style:['relaxed','family'],budget:['value','mid'],group:['family','couple','friends','solo']}
  },
  {
    id:'golf-pollenca', name:'Golf Pollença',
    area:'North', areaLabel:'Pollença · North',
    diff10:4, scenery:4, prestige:2, value:5, walkability:4,
    greenFee:'Peak €75 / Low €65 (9 holes)',
    buggyNote:'Gentle hillside layout. Walkable throughout',
    bestFor:'A scenic afternoon nine near Pollença with Tramuntana views',
    why:'Nine holes at the entrance to Pollença town, designed by José Gancedo in 1986 and integrated into the hillside. Views of the Tramuntana, the Bay of Pollença, and the Bay of Alcúdia from the higher holes. Compact enough to complete in 90 minutes. Ideal as a late-afternoon round, a warm-up, or a first introduction to the game.',
    andy:'Play Alcanada in the morning and Pollença in the late afternoon. Back at the hotel by 6pm, nine holes of proper scenery, and one of the best values on the island.',
    played:false,
    bestPlayer:'Beginner to confident',
    designer:'José Gancedo, 1986',
    signatureHole:'Nine holes with views of the Tramuntana, Bay of Pollença, and Bay of Alcúdia from the hillside layout. Pairs perfectly with Alcanada for a full north day.',
    michelin:'Maca de Castro in Port d\'Alcúdia (20 minutes) has excellent local menus.',
    pairsWith:'Pair with Club de Golf Alcanada as a morning-afternoon combination. The strongest full golf day in the north.',
    tags:{ability:['beginner','casual','confident'],style:['scenic','relaxed','family'],budget:['value'],group:['family','couple','friends','solo']}
  },
  {
    id:'santa-ponsa-2', name:'Golf Santa Ponsa 2', membersOnly:true,
    area:'Southwest', areaLabel:'Santa Ponsa · Southwest',
    diff10:7, scenery:3, prestige:3, value:5, walkability:3,
    greenFee:'Peak €88 / Low €65',
    buggyNote:'Buggies available; quiet course. Rarely congested',
    bestFor:'A quiet members-quality round in Santa Ponsa (access arrangeable for Andy\'s clients)',
    why:'Members-only and usually the least-crowded course in the Southwest cluster. Many tee shots reward a hybrid over a driver: tree-lining is heavy and a ball in the wrong place means chipping back to the fairway. The 18th green is shaped like the island of Mallorca. A detail worth knowing before you play.',
    andy:'The 18th green is shaped like Mallorca itself. One of those details you want to know before you arrive. I arrange access for clients. Mention it when you enquire.',
    played:true, reviewSlug:null,
    bestPlayer:'Casual to confident',
    designer:'Opened 1991 · Members and arranged-access only',
    signatureHole:'Hole 18: par-3 with a green shaped like the island of Mallorca. Unique in Mallorca. The 2nd hole rewards a hybrid off the tee.',
    pairsWith:'Pair with Golf Santa Ponsa 1 for a full estate day. Two very different courses at very different price points.',
    tags:{ability:['casual','confident','low'],style:['relaxed','serious'],budget:['value','mid'],group:['friends','couple','solo']}
  },
  {
    id:'santa-ponsa-3', name:'Golf Santa Ponsa 3', membersOnly:true,
    area:'Southwest', areaLabel:'Santa Ponsa · Southwest',
    diff10:4, scenery:3, prestige:2, value:5, walkability:4,
    greenFee:'Peak €30 / Low €25 (9 holes)',
    buggyNote:'Compact and flat. Walkable throughout',
    bestFor:'A quick nine for beginners or as an affordable add-on round',
    why:'Nine holes winding through the Santa Ponsa residential community. Most holes are short and well-suited to beginners, juniors, or anyone wanting to practise approach play without the commitment of a full round. Access is members-only, with guests playing alongside a member.',
    andy:'A good choice for the beginner in the group who wants to try the game without pressure. It is not public access: guests play with a member.',
    played:true, reviewSlug:null,
    bestPlayer:'Beginner to casual',
    designer:'Nine holes · Residential estate · Members and arranged-access only',
    tags:{ability:['beginner','casual'],style:['relaxed','family'],budget:['value'],group:['family','couple','friends','solo']}
  },
  {
    id:'palma-pitch-putt', name:'Palma Pitch & Putt',
    area:'Palma', areaLabel:'Central Palma',
    diff10:2, scenery:2, prestige:1, value:5, walkability:5,
    greenFee:'9 holes €20 · 18 holes €30',
    buggyNote:'Walking only (compact par-3 layout)',
    bestFor:'Beginners, juniors, and anyone who wants a quick accurate round in the city',
    why:'The only official pitch & putt in Mallorca. Nine holes, par 27, all par 3s ranging from 50–100m. Demands accuracy rather than power. A genuinely useful test for anyone working on their short game or new to the game entirely. Club hire available. Central Palma location.',
    andy:'I use this for coaching introductions. Wide enough to swing freely, short enough to focus on technique rather than distance.',
    played:false,
    bestPlayer:'Beginner to casual',
    designer:'Par 27 · 9 holes · The only pitch & putt in Mallorca',
    tags:{ability:['beginner','casual'],style:['relaxed','family'],budget:['value'],group:['family','couple','solo','friends']}
  },
  {
    id:'reserva-rotana', name:'Rotana Greens (Reserva Rotana)',
    area:'East', areaLabel:'Manacor · East',
    diff10:5, scenery:4, prestige:2, value:4, walkability:3,
    greenFee:'Included for hotel guests · Not available to the public',
    buggyNote:'Calm estate course. Walkable with a trolley',
    bestFor:'Guests of Reserva Rotana who want golf on the estate between rounds at Capdepera or Pula',
    why:'A private 9-hole course at Reserva Rotana near Manacor, available exclusively for hotel guests as part of the stay experience. Gently rolling estate terrain with a driving range, chipping green, practice bunkers, and a par-3 training area. Not a course you can book independently.',
    andy:'Rotana is a beautiful property and the estate course is a good morning warm-up before heading east. Not a standalone round.',
    played:false,
    bestPlayer:'Beginner to confident',
    designer:'Private 9-hole estate course · Hotel guests only',
    michelin:'VORO (2★) at Cap Vermell Grand Hotel is about 25 minutes. Mallorca\'s only two-star restaurant.',
    pairsWith:'Use the estate course for warm-up or coaching work, then head to Capdepera or Pula for the main round.',
    tags:{ability:['beginner','casual','confident'],style:['relaxed','luxury'],budget:['value','mid'],group:['couple','solo','friends']}
  },
]

const SELECTOR_CANONICAL_NAME_BY_ID = {
  'reserva-rotana': 'Reserva Rotana',
  'vall-dor': "Vall d'Or Golf",
}

function getCanonicalCourseInfo(course) {
  const canonicalName =
    SELECTOR_CANONICAL_NAME_BY_ID[course.id] ||
    resolveCourseAccessName(course.name) ||
    course.name
  return getCanonicalCourseDataByName(canonicalName)
}

const SELECTOR_COURSES = COURSES.map((course) => {
  const canonical = getCanonicalCourseInfo(course)
  const pricingName = canonical?.canonicalName || course.name
  const pricing = getCoursePricingByName(pricingName)
  const greenFee =
    pricing
      ? formatCourseFeeLabel(pricingName, { pricing, fallback: course.greenFee })
      : course.greenFee

  return {
    ...course,
    canonicalName: canonical?.canonicalName || course.name,
    displayName: canonical?.publicName || course.name,
    coursePar: canonical?.par ?? null,
    holeCount: canonical?.holeCount ?? null,
    accessRequirement: canonical?.access?.requirementLabel || null,
    accessType: canonical?.access?.accessTypeLabel || null,
    handicapRequired: canonical?.access?.handicapRequired ?? !!course.handicapReq,
    designer: canonical?.facts?.designer
      ? `${canonical.facts.designer}${canonical.facts.opened ? `, ${canonical.facts.opened}` : ''}`
      : course.designer,
    signatureHole: canonical?.facts?.signatureHole || course.signatureHole,
    practiceFacilities: canonical?.facts?.practiceFacilities || null,
    greenFee,
  }
})

/* =====================================================================
   QUESTIONS + BRANCHING LOGIC
===================================================================== */
const QUESTIONS = [
  {
    id:'ability', title:'How would you describe your golf?',
    sub:'Honest answers get better recommendations.', cols:true,
    options:[
      {value:'beginner',label:'Beginner',desc:'New to the game, or play rarely'},
      {value:'casual',label:'Casual golfer',desc:'A few rounds a year, here to enjoy it'},
      {value:'confident',label:'Confident player',desc:'Regular golfer, mid handicap'},
      {value:'low',label:'Low handicap',desc:'Single figures, want a proper test'},
    ]
  },
  {
    id:'group', title:'Who is coming on the trip?',
    sub:'', cols:true,
    options:[
      {value:'solo',label:'Just me',desc:'Solo golf trip'},
      {value:'couple',label:'A couple',desc:'Golf plus time together'},
      {value:'friends',label:'Friends group',desc:'3 to 8 players'},
      {value:'family',label:'Family',desc:'Mixed ages and abilities'},
      {value:'corporate',label:'Corporate or VIP',desc:'Client golf, done properly'},
    ]
  },
  {
    id:'style', title:'What kind of trip is this?',
    sub:'Pick all that apply.', cols:true, multi:true,
    options:[
      {value:'luxury',label:'Luxury',desc:'The best of everything'},
      {value:'scenic',label:'Scenic',desc:'Views first, score second'},
      {value:'relaxed',label:'Relaxed',desc:'Easy-going holiday golf'},
      {value:'serious',label:'Serious golf',desc:'The golf is the point'},
      {value:'family',label:'Family-friendly',desc:'Everyone gets a good day'},
      {value:'bucket-list',label:'Bucket list',desc:'The famous ones, played properly'},
    ]
  },
  {
    id:'area', title:'Where are you staying, or hoping to?',
    sub:'', cols:true,
    options:[
      {value:'Southwest',label:'Southwest',desc:'Santa Ponsa, Portals, Camp de Mar'},
      {value:'Palma',label:'Palma and around',desc:'City, Son Vida, airport side'},
      {value:'North',label:'North and east',desc:'Alcúdia, Pollença, Artà, Cala Millor'},
      {value:'South',label:'South',desc:'Llucmajor, Son Antem, near airport'},
      {value:'flexible',label:'Flexible',desc:'Happy to travel for the right course'},
    ]
  },
  {
    id:'budget', title:'How do you think about green fees?',
    sub:'Fees shown later are seasonal indications, confirmed at booking.', cols:false,
    skipIf:(a) => Array.isArray(a.style) ? a.style.includes('luxury') : a.style === 'luxury',
    autoValue:'premium',
    options:[
      {value:'value',label:'Best value',desc:'Good golf at sensible money'},
      {value:'mid',label:'Mid-range',desc:'Happy to pay for quality'},
      {value:'premium',label:'Premium',desc:'The best courses, whatever the fee'},
    ]
  },
  {
    id:'difficulty', title:'How tough do you want the courses?',
    sub:'', cols:false,
    skipIf:(a) => a.ability === 'beginner',
    autoValue:'forgiving',
    options:[
      {value:'forgiving',label:'Forgiving',desc:'Wide fairways, keep the ball in play'},
      {value:'balanced',label:'Balanced',desc:'A fair test without punishment'},
      {value:'challenging',label:'Challenging',desc:'Bring it on'},
    ]
  },
  {
    id:'walking', title:'Walk or ride?',
    sub:'Some Mallorca courses are seriously hilly. Andratx is buggy-only territory.', cols:false,
    options:[
      {value:'walk',label:'I like to walk',desc:'Prefer walkable courses'},
      {value:'buggy',label:'Buggy please',desc:'Happy riding, hills welcome'},
      {value:'either',label:'No preference',desc:'Whatever suits the course'},
    ]
  },
  {
    id:'extras', title:'Anything else Andy should arrange?',
    sub:'Choose any that apply. This shapes the trip plan, not the course match.', cols:true, multi:true,
    options:[
      {value:'coaching',label:'Coaching with Andy',desc:'Lessons or a Play With A Pro round'},
      {value:'dining',label:'Restaurants',desc:'Where to eat near your courses'},
      {value:'hotel',label:'Hotel',desc:'Stay matched to your courses'},
      {value:'transport',label:'Transport',desc:'Transfers and logistics'},
      {value:'nongolf',label:'Non-golf days',desc:'Beaches, towns, Tramuntana'},
    ]
  },
]

function optionLabels(question, value) {
  if (!question || value == null) return []
  const values = Array.isArray(value) ? value : [value]
  return values
    .map(v => question.options.find(option => option.value === v)?.label || String(v))
    .filter(Boolean)
}

function selectorAnswerSummary(answers) {
  return QUESTIONS
    .map(question => {
      const labels = optionLabels(question, answers[question.id])
      if (!labels.length) return null
      return `${question.title} ${labels.join(', ')}`
    })
    .filter(Boolean)
    .join(' | ')
}

function selectorShortlistSummary(courses) {
  return courses
    .map((course, index) => `${index + 1}. ${course.displayName || course.name} - ${course.areaLabel} - ${course.greenFee}`)
    .join(' | ')
}

function selectorShortlistNames(courses) {
  return courses.map(course => course.displayName || course.name).join(', ')
}

/* =====================================================================
   SCORING ENGINE
===================================================================== */
function scoreCourse(c, answers) {
  let s = 0
  if (c.tags.ability.includes(answers.ability)) s += 30; else s -= 25
  if (answers.ability === 'beginner' && c.diff10 >= 8) s -= 100
  const styles = Array.isArray(answers.style) ? answers.style : (answers.style ? [answers.style] : [])
  const styleMatches = styles.filter(st => c.tags.style.includes(st)).length
  s += styleMatches > 0 ? Math.min(22, 14 + styleMatches * 8) : 0
  const zone = a => (a === 'North' || a === 'East') ? 'NE' : a
  if (answers.area === 'flexible') s += 8
  else if (zone(c.area) === zone(answers.area)) s += 20
  else if (answers.area === 'South' && c.area === 'Palma') s += 8
  else if (answers.area === 'Palma' && c.area === 'South') s += 8
  else s -= 12
  if (c.tags.budget.includes(answers.budget)) s += 16
  else if (answers.budget === 'premium') s += 4
  else s -= 10
  const wantDiff = {forgiving:5, balanced:6.5, challenging:8.5}[answers.difficulty] || 6.5
  s += Math.max(0, 12 - Math.abs(c.diff10 - wantDiff) * 3)
  if (answers.walking === 'walk') s += (c.walkability - 3) * 5
  if (answers.walking === 'buggy' && c.walkability <= 2) s += 3
  if (c.tags.group.includes(answers.group)) s += 6
  if (answers.group === 'corporate' && c.prestige >= 4) s += 8
  return s
}

const DIFF_LABEL = d => d >= 9 ? `Hard · ${d}/10` : d >= 7 ? `Testing · ${d}/10` : d >= 5 ? `Fair · ${d}/10` : `Gentle · ${d}/10`

function personalMatchLine(c, rank, answers, t) {
  const ml = t.matchLines
  const reasons = []
  if (c.tags.ability.includes(answers.ability)) {
    const p = ml.ability[answers.ability]
    if (p) reasons.push(p)
  }
  if (c.tags.style.includes(answers.style)) {
    const p = ml.style[answers.style]
    if (p) reasons.push(p)
  }
  if (answers.area !== 'flexible' && c.area === answers.area) reasons.push(ml.location)
  if (c.tags.budget.includes(answers.budget)) {
    const p = ml.budget[answers.budget]
    if (p) reasons.push(p)
  }
  const prefix = ml.prefix[rank] || 'Recommended'
  if (!reasons.length) return `${prefix}: ${ml.fallback}`
  return `${prefix}: ${reasons.join(', ')}.`
}

function getCourseFactsLine(course) {
  const facts = []
  if (Number.isFinite(course.coursePar)) facts.push(`Par ${course.coursePar}`)
  if (Number.isFinite(course.holeCount)) facts.push(`${course.holeCount} holes`)
  if (course.accessRequirement) facts.push(course.accessRequirement)
  if (course.accessType) facts.push(course.accessType)
  return facts.join(' · ')
}

export default function CourseSelectorToolClient({ lang = 'en', heroHeadingLevel = 1 }) {
  const t = COURSE_SELECTOR_T[lang] || COURSE_SELECTOR_T.en
  const HeroHeading = heroHeadingLevel === 2 ? 'h2' : 'h1'
  const [phase, setPhase] = useState('quiz')
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [topCourses, setTopCourses] = useState([])
  const [compareSelection, setCompareSelection] = useState([])
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSending, setEmailSending] = useState(false)
  const [pdfSent, setPdfSent] = useState(false)
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false)
  const containerRef = useRef(null)

  function scrollToTop() {
    const el = containerRef.current
    if (!el) return
    window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 70), behavior: 'smooth' })
  }

  function visibleQuestions(ans) {
    return QUESTIONS.filter(q => {
      if (q.skipIf && q.skipIf(ans)) return false
      return true
    })
  }

  function currentQuestions() {
    return visibleQuestions(answers)
  }

  const activeQs = currentQuestions()
  const q = activeQs[qIndex]

  function startQuiz() {
    setPhase('quiz')
    setQIndex(0)
    setAnswers({})
    scrollToTop()
  }

  function selectOption(qId, value, multi) {
    const newAnswers = { ...answers }
    // apply auto-values for skipped questions
    QUESTIONS.forEach(ques => {
      if (ques.skipIf && ques.skipIf(newAnswers) && ques.autoValue) {
        newAnswers[ques.id] = ques.autoValue
      }
    })
    if (multi) {
      const curr = newAnswers[qId] || []
      const idx = curr.indexOf(value)
      newAnswers[qId] = idx >= 0 ? curr.filter(v => v !== value) : [...curr, value]
      setAnswers(newAnswers)
    } else {
      newAnswers[qId] = value
      setAnswers(newAnswers)
      // auto-advance after brief delay
      setTimeout(() => advance(newAnswers), 220)
    }
  }

  function advance(ans) {
    const qs = visibleQuestions(ans)
    if (qIndex < qs.length - 1) {
      setQIndex(i => i + 1)
      scrollToTop()
    } else {
      showResults(ans)
    }
  }

  function goBack() {
    if (qIndex > 0) {
      setQIndex(i => i - 1)
      scrollToTop()
    }
  }

  function continueMulti() {
    advance(answers)
  }

  function showResults(ans) {
    const finalAns = { ...ans }
    QUESTIONS.forEach(ques => {
      if (ques.skipIf && ques.skipIf(finalAns) && ques.autoValue) {
        finalAns[ques.id] = ques.autoValue
      }
    })
    const ranked = SELECTOR_COURSES
      .map(c => ({ c, s: scoreCourse(c, finalAns) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 3)
      .map(x => x.c)
    setTopCourses(ranked)
    setAnswers(finalAns)
    setPhase('results')
    scrollToTop()
  }

  function toggleCompare(id) {
    setCompareSelection(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id)
      if (prev.length >= 2) return prev
      return [...prev, id]
    })
  }

  function dots(n) {
    let out = ''
    for (let i = 1; i <= 5; i++) out += `<span style="color:${i <= n ? '#B8973C' : '#E0D8CB'}">●</span>`
    return out
  }

  async function emailResults() {
    if (!email || !email.includes('@')) return
    setEmailSending(true)
    setEmailError(false)

    // Fire-and-forget: add to MailerLite Course Selector Leads group
    const mlBody = new URLSearchParams()
    mlBody.set('fields[email]', email)
    mlBody.set('fields[selector_answers]', selectorAnswerSummary(answers))
    mlBody.set('fields[selector_shortlist]', selectorShortlistSummary(topCourses))
    mlBody.set('fields[selector_shortlist_names]', selectorShortlistNames(topCourses))
    mlBody.set('ml-submit', '1')
    mlBody.set('anticsrf', 'true')
    fetch(MAILERLITE_COURSE_SELECTOR, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: mlBody.toString(),
    }).catch(() => {})

    const topCoursesForEmail = topCourses.map(c => ({
      name: c.displayName || c.name,
      bestFor: c.bestFor,
      areaLabel: c.areaLabel,
      diff10: c.diff10,
      greenFee: c.greenFee,
      membersOnly: !!c.membersOnly,
    }))

    try {
      const res = await fetch('/api/send-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tool: 'course-selector',
          subject: 'Your Mallorca course recommendations',
          data: { topCourses: topCoursesForEmail },
          subscribeNewsletter,
        }),
      })
      setEmailSending(false)
      if (res.ok) {
        setEmailSent(true)
      } else {
        setEmailError(true)
      }
    } catch {
      setEmailSending(false)
      setEmailError(true)
    }
  }

  async function requestPdf() {
    if (!email) return
    setPdfSent(true)
    try {
      await fetch('/api/lead-magnet-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, guide: 'course-comparison', subscribeNewsletter }),
      })
    } catch { /* fire and forget */ }
  }

  function restart() {
    setPhase('quiz')
    setQIndex(0)
    setAnswers({})
    setTopCourses([])
    setCompareSelection([])
    setEmail('')
    setEmailSent(false)
    setEmailError(false)
    setPdfSent(false)
    setSubscribeNewsletter(false)
    scrollToTop()
  }

  const compareA = compareSelection.length >= 1 ? SELECTOR_COURSES.find(c => c.id === compareSelection[0]) : null
  const compareB = compareSelection.length >= 2 ? SELECTOR_COURSES.find(c => c.id === compareSelection[1]) : null

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .cst-hero { background:#2D4A3E; color:#F7F4EF; padding:52px 24px 48px; text-align:center; }
        .cst-eyebrow { font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#CBA968; margin-bottom:16px; display:block; }
        .cst-h1 { font-family:var(--font-serif); font-weight:500; font-size:clamp(2.1rem,5vw,3.2rem); line-height:1.1; color:#F7F4EF; max-width:600px; margin:0 auto; }
        .cst-sub { font-family:var(--font-sans); font-weight:300; font-size:1rem; line-height:1.6; color:rgba(247,244,239,0.78); max-width:480px; margin:16px auto 0; }
        .cst-wrap { max-width:680px; margin:0 auto; padding:0 18px 90px; }
        /* Progress */
        .cst-progress { margin:32px auto 28px; max-width:560px; }
        .cst-progress-track { height:3px; background:#EDE9E1; border-radius:99px; overflow:hidden; }
        .cst-progress-fill { height:100%; background:linear-gradient(90deg,#B8973C,#D4B068); transition:width .5s cubic-bezier(0.22,1,0.36,1); border-radius:99px; }
        .cst-progress-label { display:flex; justify-content:space-between; font-size:.7rem; color:#8A7F74; margin-top:9px; letter-spacing:.12em; text-transform:uppercase; }
        /* Question */
        .cst-q-title { font-family:var(--font-serif); font-size:clamp(1.55rem,4vw,2.1rem); color:#1A1916; text-align:center; margin-bottom:6px; font-weight:500; }
        .cst-q-sub { text-align:center; color:#8A7F74; font-size:.9rem; margin-bottom:28px; }
        .cst-opts { display:grid; gap:12px; max-width:560px; margin:0 auto; }
        .cst-opts.cols-2 { grid-template-columns:1fr; }
        @media(min-width:560px) {
          .cst-opts.cols-2 { grid-template-columns:1fr 1fr; }
          .cst-opts.cols-2 > button:last-child:nth-child(odd) { grid-column:1/-1; max-width:calc(50% - 5px); justify-self:center; }
        }
        .cst-opt { background:#fff; border:1px solid rgba(26,25,22,0.08); border-radius:14px; padding:17px 20px; cursor:pointer; text-align:left; font-family:inherit; font-size:.95rem; width:100%; transition:transform .3s cubic-bezier(0.22,1,0.36,1),border-color .3s,box-shadow .3s; }
        .cst-opt:hover { border-color:#D4B068; transform:translateY(-2px); box-shadow:0 22px 60px rgba(18,17,15,0.08); }
        .cst-opt.selected { border-color:#2D4A3E; background:#EBF2EF; }
        .cst-opt-label { font-weight:500; color:#2D4A3E; display:block; font-size:1rem; letter-spacing:.01em; }
        .cst-opt-desc { font-size:.82rem; color:#8A7F74; margin-top:3px; display:block; font-weight:300; }
        .cst-nav-row { display:flex; justify-content:space-between; max-width:560px; margin:26px auto 0; }
        .cst-btn-ghost { background:none; border:none; color:#8A7F74; cursor:pointer; font-size:.85rem; padding:10px 14px; font-family:inherit; letter-spacing:.04em; }
        .cst-btn-ghost:hover { color:#2D4A3E; }
        .cst-btn { display:inline-block; background:#2D4A3E; color:#F7F4EF; border:1px solid #2D4A3E; cursor:pointer; padding:14px 30px; border-radius:99px; font-weight:500; font-size:.8rem; font-family:var(--font-sans); letter-spacing:.18em; text-transform:uppercase; transition:all .3s; text-decoration:none; text-align:center; }
        .cst-btn:hover { background:#3D6455; border-color:#3D6455; transform:translateY(-2px); box-shadow:0 14px 30px rgba(45,74,62,0.22); }
        .cst-btn.gold { background:#B8973C; border-color:#B8973C; color:#fff; }
        .cst-btn.gold:hover { background:#D4B068; border-color:#D4B068; }
        .cst-btn.outline { background:transparent; border:1px solid #2D4A3E; color:#2D4A3E; }
        .cst-btn.outline:hover { background:#2D4A3E; color:#F7F4EF; }
        .cst-btn.wa { background:#25D366; border-color:#25D366; color:#fff; display:inline-flex; align-items:center; justify-content:center; gap:9px; }
        .cst-btn.wa:hover { background:#1eb858; border-color:#1eb858; }
        /* Results */
        .cst-results-head { text-align:center; margin:10px 0 32px; }
        .cst-results-head h2 { font-family:var(--font-serif); font-size:clamp(1.7rem,4.5vw,2.4rem); color:#1A1916; font-weight:500; }
        .cst-results-head p { color:#8A7F74; margin-top:10px; font-size:.92rem; max-width:540px; margin-inline:auto; line-height:1.65; }
        .cst-eyebrow-sm { display:inline-block; letter-spacing:.22em; text-transform:uppercase; font-size:.7rem; font-weight:500; color:#B8973C; margin-bottom:14px; font-family:var(--font-sans); }
        /* Course cards */
        .cst-course-card { background:#fff; border-radius:18px; overflow:hidden; box-shadow:0 22px 60px rgba(18,17,15,0.08); margin-bottom:24px; border:1px solid rgba(26,25,22,0.08); }
        .cst-cc-banner { background:linear-gradient(120deg,#1A1916,#2D4A3E); padding:42px 24px 20px; position:relative; }
        .cst-cc-rank { position:absolute; top:12px; left:12px; background:#B8973C; color:#fff; font-size:.65rem; font-weight:500; letter-spacing:.16em; text-transform:uppercase; padding:5px 13px; border-radius:99px; font-family:var(--font-sans); }
        .cst-cc-banner h3 { font-family:var(--font-serif); color:#F7F4EF; font-size:1.7rem; margin-bottom:10px; line-height:1.1; font-weight:500; }
        .cst-cc-match-line { font-family:var(--font-sans); font-size:.8rem; color:rgba(247,244,239,0.78); line-height:1.55; border-top:1px solid rgba(255,255,255,.14); padding-top:10px; }
        .cst-cc-body { padding:22px 24px 26px; }
        .cst-cc-bestfor { font-size:.74rem; letter-spacing:.14em; text-transform:uppercase; color:#B8973C; font-weight:500; margin-bottom:10px; font-family:var(--font-sans); }
        .cst-cc-why { font-size:.93rem; line-height:1.7; color:#2C2A27; margin-bottom:12px; }
        .cst-cc-facts { font-size:.78rem; line-height:1.6; color:#8A7F74; margin-bottom:18px; font-family:var(--font-sans); letter-spacing:.03em; }
        .cst-cc-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px 18px; margin-bottom:18px; border-top:1px solid #EDE9E1; border-bottom:1px solid #EDE9E1; padding:14px 0; }
        @media(min-width:560px) { .cst-cc-grid { grid-template-columns:1fr 1fr 1fr 1fr; } }
        .cst-cc-stat .k { font-size:.66rem; text-transform:uppercase; letter-spacing:.12em; color:#8A7F74; font-family:var(--font-sans); }
        .cst-cc-stat .v { font-size:.86rem; font-weight:400; color:#2D4A3E; margin-top:3px; line-height:1.4; }
        .cst-cc-andy { background:#F7F4EF; border-left:3px solid #B8973C; border-radius:0 10px 10px 0; padding:13px 17px; font-size:.9rem; line-height:1.65; color:#2C2A27; margin-bottom:18px; font-family:var(--font-serif); font-style:italic; }
        .cst-cc-andy strong { font-style:normal; font-family:var(--font-sans); font-size:.72rem; letter-spacing:.12em; text-transform:uppercase; color:#2D4A3E; display:block; margin-bottom:4px; }
        .cst-cc-hcap { background:#fff8ee; border-left:3px solid #e8860a; border-radius:0 10px 10px 0; padding:9px 17px; font-size:.82rem; line-height:1.5; color:#7a4300; margin-bottom:18px; font-weight:400; }
        .cst-cc-members { background:#f0f4ff; border-left:3px solid #4a6fa5; border-radius:0 10px 10px 0; padding:9px 17px; font-size:.82rem; line-height:1.5; color:#2a3f6f; margin-bottom:18px; font-weight:400; }
        .cst-cc-actions { display:flex; flex-wrap:wrap; gap:10px; align-items:stretch; flex-direction:column; }
        .cst-cc-review { font-size:.83rem; color:#2D4A3E; text-decoration:underline; text-underline-offset:3px; cursor:pointer; background:none; border:none; font-family:inherit; }
        .cst-compare-check { display:flex; align-items:center; gap:8px; font-size:.83rem; color:#8A7F74; cursor:pointer; margin-left:auto; letter-spacing:.03em; font-family:var(--font-sans); }
        /* Compare table */
        .cst-compare-wrap { overflow-x:auto; margin:20px 0; border-radius:14px; border:1px solid rgba(26,25,22,0.08); box-shadow:0 22px 60px rgba(18,17,15,0.08); }
        table.cst-compare { width:100%; border-collapse:collapse; background:#fff; min-width:560px; }
        table.cst-compare th, table.cst-compare td { padding:13px 18px; text-align:left; font-size:.88rem; border-bottom:1px solid #EDE9E1; font-weight:300; line-height:1.5; }
        table.cst-compare th { background:#2D4A3E; color:#F7F4EF; font-family:var(--font-serif); font-size:1.15rem; font-weight:500; }
        table.cst-compare td:first-child { font-weight:400; color:#8A7F74; font-size:.7rem; text-transform:uppercase; letter-spacing:.12em; width:140px; }
        table.cst-compare tr:last-child td { border-bottom:none; }
        /* Final CTA */
        .cst-final-cta { background:#2D4A3E; border-radius:20px; padding:42px 30px; text-align:center; color:#F7F4EF; margin-top:40px; box-shadow:0 30px 80px rgba(18,17,15,0.16); }
        .cst-final-cta h2 { font-family:var(--font-serif); font-size:clamp(1.5rem,4vw,2rem); margin-bottom:12px; font-weight:500; }
        .cst-final-cta p { color:rgba(247,244,239,0.78); font-size:.92rem; max-width:470px; margin:0 auto 26px; line-height:1.7; font-weight:300; }
        .cst-email-row { display:flex; flex-direction:column; gap:10px; max-width:400px; margin:0 auto 16px; align-items:center; }
        .cst-email-row input { width:100%; padding:13px 18px; border-radius:99px; border:none; font-family:inherit; font-size:.9rem; background:rgba(247,244,239,0.95); color:#2C2A27; text-align:center; }
        .cst-email-row input:focus { outline:2px solid #D4B068; }
        .cst-email-row .cst-btn { width:100%; }
        .cst-cta-stack { display:flex; flex-direction:column; gap:12px; max-width:400px; margin:0 auto; }
        .cst-fee-note { text-align:center; font-size:.74rem; color:#8A7F74; margin-top:4px; }
        .cst-restart { display:block; text-align:center; margin:20px auto 0; padding:14px 18px; color:#8A7F74; background:none; border:none; cursor:pointer; font-size:.85rem; text-decoration:underline; text-underline-offset:3px; font-family:inherit; }
        .cst-restart:hover { color:#2D4A3E; }
        /* Compare bar */
        .cst-compare-bar { position:fixed; bottom:0; left:0; right:0; background:#1A1916; color:#F7F4EF; padding:14px 18px; justify-content:center; align-items:center; gap:16px; box-shadow:0 -10px 30px rgba(0,0,0,.2); z-index:50; font-size:.88rem; letter-spacing:.03em; font-family:var(--font-sans); }
      `}</style>

      {/* HERO */}
      <section className="cst-hero">
        <span className="cst-eyebrow">{t.hero.eyebrow}</span>
        <HeroHeading className="cst-h1">{t.hero.h1}</HeroHeading>
        <p className="cst-sub">{phase === 'intro' ? t.intro.p : t.hero.sub}</p>
        {phase === 'intro' && (
          <button className="cst-btn gold" onClick={startQuiz} style={{ marginTop:'26px' }}>{t.intro.cta}</button>
        )}
      </section>

      {lang === 'en' && <ToolTrustLine locale={lang} />}

      <div className="cst-wrap">


        {/* QUIZ */}
        {phase === 'quiz' && q && (
          <div>
            <div className="cst-progress">
              <div className="cst-progress-track">
                <div className="cst-progress-fill" style={{ width: `${(qIndex / activeQs.length) * 100}%` }} />
              </div>
              <div className="cst-progress-label">
                <span>{t.progress.label(qIndex + 1, activeQs.length)}</span>
                <span>{t.progress.pct(Math.round((qIndex / activeQs.length) * 100))}</span>
              </div>
            </div>

            <h2 className="cst-q-title">{t.questions[q.id]?.title || q.title}</h2>
            {(t.questions[q.id]?.sub || q.sub) && <p className="cst-q-sub">{t.questions[q.id]?.sub || q.sub}</p>}

            <div className={`cst-opts${q.cols ? ' cols-2' : ''}`}>
              {q.options.map(opt => {
                const isSelected = q.multi
                  ? (answers[q.id] || []).includes(opt.value)
                  : answers[q.id] === opt.value
                return (
                  <button
                    key={opt.value}
                    className={`cst-opt${isSelected ? ' selected' : ''}`}
                    onClick={() => selectOption(q.id, opt.value, q.multi)}
                  >
                    <span className="cst-opt-label">{t.questions[q.id]?.options?.[opt.value]?.label || opt.label}</span>
                    {(t.questions[q.id]?.options?.[opt.value]?.desc || opt.desc) && (
                      <span className="cst-opt-desc">{t.questions[q.id]?.options?.[opt.value]?.desc || opt.desc}</span>
                    )}
                  </button>
                )
              })}
              {q.multi && (
                <button
                  className="cst-btn gold"
                  style={{ gridColumn:'1 / -1', marginTop:'14px', justifySelf:'center', minWidth:'240px' }}
                  onClick={continueMulti}
                >
                  {t.progress.showCourses}
                </button>
              )}
            </div>

            <div className="cst-nav-row">
              <button
                className="cst-btn-ghost"
                onClick={goBack}
                style={{ visibility: qIndex === 0 ? 'hidden' : 'visible' }}
              >
                {t.progress.back}
              </button>
              <span />
            </div>
          </div>
        )}

        {/* RESULTS */}
        {phase === 'results' && topCourses.length > 0 && (
          <div>
            <div className="cst-results-head">
              <span className="cst-eyebrow-sm">{t.results.eyebrow}</span>
              <h2>{t.results.h2}</h2>
              <p>{t.results.intro(answers.style, answers.area)}</p>
            </div>

            {topCourses.map((c, i) => (
              <div key={c.id} className="cst-course-card">
                <div className="cst-cc-banner" style={COURSE_IMGS[c.id] ? { backgroundImage: `linear-gradient(120deg, rgba(26,25,22,0.82), rgba(45,74,62,0.75)), url(${COURSE_IMGS[c.id]})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
                  <div className="cst-cc-rank">{t.results.ranks[i]}</div>
                  <h3>{c.displayName || c.name}</h3>
                  <div className="cst-cc-match-line">{personalMatchLine(c, i, answers, t)}</div>
                </div>
                <div className="cst-cc-body">
                  <div className="cst-cc-bestfor">{t.results.bestFor} {c.bestFor}</div>
                  <p className="cst-cc-why">{c.why}</p>
                  {getCourseFactsLine(c) && (
                    <div className="cst-cc-facts">{getCourseFactsLine(c)}</div>
                  )}
                  <div className="cst-cc-grid">
                    <div className="cst-cc-stat"><div className="k">{t.results.stats.difficulty}</div><div className="v">{DIFF_LABEL(c.diff10)}</div></div>
                    <div className="cst-cc-stat"><div className="k">{t.results.stats.location}</div><div className="v">{c.areaLabel}</div></div>
                    <div className="cst-cc-stat"><div className="k">{t.results.stats.greenFee}</div><div className="v">{c.greenFee}</div></div>
                    <div className="cst-cc-stat"><div className="k">{t.results.stats.walkRide}</div><div className="v">{c.buggyNote}</div></div>
                  </div>
                  {c.membersOnly && (
                    <div className="cst-cc-members">Members-only course. Andy arranges access for clients — mention it when you enquire.</div>
                  )}
                  {c.handicapRequired && (
                    <div className="cst-cc-hcap">
                      {t.results.handicapNote}
                      {c.accessRequirement ? ` (${c.accessRequirement})` : ''}
                    </div>
                  )}
                  <div className="cst-cc-andy">
                    <strong>{t.results.andySays}</strong>
                    {c.andy}
                  </div>
                  <div className="cst-cc-actions">
                    <a className="cst-btn gold" href={`${SITE}/contact`} style={{ padding:'11px 22px', fontSize:'.82rem' }}>
                      {t.results.enquire}
                    </a>
                    {c.reviewSlug && (
                      <a className="cst-cc-review" href={`${SITE}/guides/${c.reviewSlug}`}>
                        {t.results.readReview}
                      </a>
                    )}
                    <label className="cst-compare-check">
                      <input
                        type="checkbox"
                        checked={compareSelection.includes(c.id)}
                        onChange={() => toggleCompare(c.id)}
                        disabled={!compareSelection.includes(c.id) && compareSelection.length >= 2}
                        style={{ accentColor:'#2D4A3E', width:'16px', height:'16px' }}
                      />
                      {t.results.compare}
                    </label>
                  </div>
                </div>
              </div>
            ))}

            <p className="cst-fee-note">{t.results.feesNote}</p>

            {/* COMPARE TABLE */}
            {compareA && compareB && (
              <div style={{ marginTop:'42px' }}>
                <div className="cst-results-head">
                  <span className="cst-eyebrow-sm">{t.results.compareSection.eyebrow}</span>
                  <h2 style={{ fontSize:'1.6rem' }}>{compareA.displayName || compareA.name} / {compareB.displayName || compareB.name}</h2>
                </div>
                <div className="cst-compare-wrap">
                  <table className="cst-compare">
                    <tbody>
                      <tr><th></th><th>{compareA.displayName || compareA.name}</th><th>{compareB.displayName || compareB.name}</th></tr>
                      <tr><td>{t.results.stats.difficulty}</td><td>{DIFF_LABEL(compareA.diff10)}</td><td>{DIFF_LABEL(compareB.diff10)}</td></tr>
                      <tr><td>{t.results.stats.location}</td><td>{compareA.areaLabel}</td><td>{compareB.areaLabel}</td></tr>
                      <tr><td>Holes</td><td>{compareA.holeCount || '–'}</td><td>{compareB.holeCount || '–'}</td></tr>
                      <tr><td>Par</td><td>{compareA.coursePar || '–'}</td><td>{compareB.coursePar || '–'}</td></tr>
                      <tr><td>Access</td><td>{compareA.accessRequirement || compareA.accessType || '–'}</td><td>{compareB.accessRequirement || compareB.accessType || '–'}</td></tr>
                      <tr><td>{t.results.stats.greenFee}</td><td>{compareA.greenFee}</td><td>{compareB.greenFee}</td></tr>
                      <tr><td>Designer</td><td>{compareA.designer || '–'}</td><td>{compareB.designer || '–'}</td></tr>
                      <tr><td>{t.results.compareSection.bestPlayer}</td><td>{compareA.bestPlayer}</td><td>{compareB.bestPlayer}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* EXTRAS-DRIVEN CTAs */}
            {(() => {
              const extras = answers.extras || []
              const items = []
              if (extras.includes('hotel')) items.push(
                <a key="hotel" href="/tools/hotel-recommender" className="cst-btn gold" style={{ padding:'12px 22px', fontSize:'.82rem', display:'block', textAlign:'center', marginBottom:'8px' }}>{t.results.hotelCta}</a>
              )
              if (extras.includes('coaching')) items.push(
                <a key="coaching" href={`${SITE}/play-with-a-pro`} target="_blank" rel="noopener" className="cst-btn" style={{ padding:'12px 22px', fontSize:'.82rem', display:'block', textAlign:'center', marginBottom:'8px' }}>{t.results.coachingCta}</a>
              )
              if (!items.length) return null
              return (
                <div style={{ background:'#EDE9E1', borderRadius:'14px', padding:'18px 20px', marginTop:'16px' }}>
                  <div style={{ fontFamily:'var(--font-sans)', fontSize:'.68rem', textTransform:'uppercase', letterSpacing:'.18em', color:'#8A7F74', marginBottom:'12px' }}>{t.results.extrasHeader}</div>
                  {items}
                </div>
              )
            })()}

            {/* FINAL CTA / EMAIL */}
            <div className="cst-final-cta">
              <span className="cst-eyebrow-sm" style={{ color:'#D4B068', display:'block', marginBottom:'10px' }}>{t.results.email.eyebrow}</span>
              <h2>{t.results.email.h2}</h2>
              <p>{t.results.email.p}</p>

              {emailSent ? (
                <div style={{ marginBottom:'20px' }}>
                  <p style={{ color:'#D4B068', fontSize:'.88rem', marginBottom:'18px' }}>{t.results.email.sent}</p>
                  {/* PDF offer on success */}
                  <div style={{ background:'rgba(247,244,239,0.1)', border:'1px solid rgba(184,151,60,0.35)', borderRadius:'12px', padding:'18px 20px', maxWidth:'400px', margin:'0 auto' }}>
                    <p style={{ color:'#D4B068', fontSize:'.74rem', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:'6px', fontFamily:'var(--font-sans)' }}>{t.results.email.pdfLabel}</p>
                    <p style={{ fontSize:'.82rem', color:'rgba(247,244,239,0.78)', marginBottom:'14px', lineHeight:'1.55' }}>{t.results.email.pdfDesc}</p>
                    {pdfSent ? (
                      <div style={{ padding:'12px 0 4px' }}>
                        <p style={{ color:'#D4B068', fontSize:'1.1rem', marginBottom:'4px' }}>✓</p>
                        <p style={{ color:'#F7F4EF', fontSize:'.88rem', lineHeight:'1.5', margin:0 }}>{t.results.email.pdfSent}</p>
                      </div>
                    ) : (
                      <button
                        className="cst-btn gold"
                        style={{ padding:'10px 22px', fontSize:'.82rem' }}
                        onClick={requestPdf}
                      >
                        {t.results.email.pdfButton}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="cst-email-row">
                    <input
                      type="email"
                      placeholder="you@email.com"
                      aria-label="Email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button className="cst-btn gold" onClick={emailResults} disabled={emailSending} style={{ padding:'12px 26px', flexShrink:'0' }}>
                      {emailSending ? t.results.email.sending : t.results.email.button}
                    </button>
                  </div>
                  <label style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', color:'rgba(247,244,239,0.62)', fontSize:'.78rem', margin:'10px 0 12px', cursor:'pointer', fontFamily:'var(--font-sans)' }}>
                    <input
                      type="checkbox"
                      checked={subscribeNewsletter}
                      onChange={e => setSubscribeNewsletter(e.target.checked)}
                      style={{ accentColor:'#D4B068' }}
                    />
                    Also send me Andy&apos;s occasional Mallorca golf planning notes
                  </label>
                  {emailError && <p style={{ color:'#e8b4a8', fontSize:'.88rem', marginBottom:'14px' }}>{t.results.email.error}</p>}
                </>
              )}

              <p style={{ fontSize:'11px', color:'rgba(247,244,239,0.55)', marginTop:'8px', textAlign:'center' }}>{t.results.email.spam} <a href={getLegalPath('privacy-policy', lang)} style={{ color:'inherit' }}>{getPrivacyLinkLabel(lang)}</a></p>
            </div>

            <div style={{ background:'#fff', border:'1px solid #EDE9E1', borderRadius:'20px', padding:'32px 24px', textAlign:'center', marginTop:'16px' }}>
              <p style={{ color:'#2C2A27', fontSize:'.95rem', marginBottom:'20px', maxWidth:'470px', marginLeft:'auto', marginRight:'auto', lineHeight:'1.7' }}>{t.results.email.planText}</p>

              <div className="cst-cta-stack">
                <a className="cst-btn gold" href={`${SITE}/contact`}>{t.results.email.planCta}</a>
                {lang !== 'zh' && <WhatsAppCta label={t.results.email.whatsappCta} />}
                <a className="cst-btn" style={{ background:'transparent', border:'1px solid #2D4A3E', color:'#2D4A3E' }} href={`${SITE}/play-with-a-pro`}>{t.results.email.pwapCta}</a>
              </div>

              <div style={{ marginTop:'20px', fontSize:'.8rem', letterSpacing:'.04em' }}>
                <a href={`${SITE}/golf-courses`} style={{ color:'#B8973C', textDecoration:'underline', textUnderlineOffset:'3px' }}>{t.results.email.allCourses}</a>
              </div>
            </div>

            <div style={{ display:'flex', gap:'10px', maxWidth:'400px', margin:'20px auto 0', justifyContent:'center' }}>
              <button className="cst-restart" style={{ flex:1 }} onClick={() => { setPhase('quiz'); setQIndex(activeQs.length - 1); scrollToTop() }}>{t.results.adjust}</button>
              <button className="cst-restart" style={{ flex:1 }} onClick={restart}>{t.results.restart}</button>
            </div>

            {/* Floating compare bar */}
            {compareSelection.length > 0 && (
              <div className="cst-compare-bar" style={{ display:'flex' }}>
                <span>
                  {compareSelection.length === 1 ? t.results.compare1 : t.results.compare2}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
