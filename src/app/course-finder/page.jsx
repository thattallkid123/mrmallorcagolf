'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import reviewsData from '../../data/course-reviews.json'

// ─── COURSE DATA ─────────────────────────────────────────────────────────────

const ALL_COURSES = [
  // ── PALMA ──
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'Golf Son Gual',
    img: '/images/courses/son-gual.jpg',
    location: 'Palma · 11km from city centre',
    fee: '€80–165', feeMin: 80,
    holes: 18, par: 72,
    difficulty: 9,
    architect: 'Thomas Himmel, 2007',
    tags: ['Expert Pick', 'Most Recommended'],
    description: "Thomas Himmel's 2007 design sits in its own wind ecosystem — its elevated position and tree coverage mean the wind can behave differently on every hole. The greens are fast and raised; where you miss matters more than how you swing. The closing stretch — holes 15 to 18 — is among the finest four holes in European golf. Rafa Nadal has said this is his favourite course on the island.",
    pullQuote: '"The wind on 16 is a different challenge to the wind on 7. That is what makes the course so replayable."',
    notable: "Rafa's favourite · Must-play",
    extras: 'Handicap required · Buggies available',
    seasonPricing: 'Peak €165 · Shoulder €120 · Low €80',
  },
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'Golf Son Vida',
    img: '/images/courses/son-vida.webp',
    location: 'Arabella · Son Vida, Palma',
    fee: 'From €95', feeMin: 95,
    holes: 18, par: 72,
    difficulty: 8,
    architect: 'F.W. Hawtree, 1964',
    tags: [],
    description: 'The oldest course in Mallorca, opened 1964. Seve Ballesteros won here in a European Tour playoff in 1990. The layout winds through the residential Son Vida neighbourhood with tight routing and elevation changes. The 18th hole is a par 5 with a water carry on the second shot that tempts many into a decision they later regret.',
    pullQuote: null,
    notable: 'Oldest course on the island · Seve won here',
    extras: 'Buggies available',
    seasonPricing: 'From €95 (dynamic)',
  },
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'Son Muntaner',
    img: '/images/courses/son-muntaner.jpg',
    location: 'Son Vida · Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'Severiano Ballesteros (redesign)',
    tags: ['DP World Tour', 'Best in Spain 2025'],
    description: 'Named Best Golf Course in Spain at the 2025 World Golf Awards. The original course at the Castillo Hotel Son Vida estate, redesigned by Severiano Ballesteros. Views across the Bay of Palma from the higher holes. A thousand-year-old olive tree sits on the 15th — in play, not decoration. Hosts the Mallorca Golf Open on the DP World Tour.',
    pullQuote: null,
    notable: 'Best in Spain 2025 · DP World Tour',
    extras: 'Dynamic pricing applies',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'Golf Son Quint',
    img: '/images/courses/son-quint.jpg',
    location: 'Arabella · Son Vida, Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 5,
    architect: 'Unknown',
    tags: ['Good for beginners'],
    description: 'The most approachable of the Arabella courses. Long, open fairways and four different tee positions make it genuinely suited to any level. From hole 8, the highest point on the course, you tee off facing directly toward Palma Cathedral. Tiger Woods played here with his son Charlie in July 2022. The stone walls are in play — not just decoration.',
    pullQuote: null,
    notable: 'Best for beginners · Tiger Woods played here',
    extras: 'Four tee positions · All levels welcome',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'T Golf Palma Puntiró',
    img: '/images/courses/t-golf-palma.jpg',
    location: 'Palma · 10km from city centre',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 71,
    difficulty: 7,
    architect: 'Jack Nicklaus, 2006 (renovated 2022)',
    tags: ['Jack Nicklaus Design'],
    description: 'The only Jack Nicklaus-designed course in Mallorca, opened 2006 and completely renovated in 2022. Nicklaus designed it to follow the existing land without modification — no artificially flattened fairways. Native pines, wild olives, and carob trees form the rough throughout with no buildings visible from any hole.',
    pullQuote: null,
    notable: 'Only Nicklaus design on the island',
    extras: 'Renovated 2022',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'Palma Pitch & Putt',
    img: '/images/courses/palma-pitch-putt.jpg',
    location: 'Arabella · Central Palma',
    fee: '€20–35', feeMin: 20,
    holes: 9, par: 27,
    difficulty: 2,
    architect: 'Unknown',
    tags: ['Beginner Friendly', '9 holes'],
    description: 'Nine holes, par 27, 638 metres total. The only official pitch & putt course in Mallorca. All nine holes are par 3s ranging from 50–100m, demanding accuracy rather than power. The natural starting point for beginners and juniors, a good warm-up before a full round elsewhere, or a useful option for a non-golfing partner who wants to try the game.',
    pullQuote: null,
    notable: 'Perfect for beginners & juniors',
    extras: 'All par 3s · Takes ~45 minutes',
    seasonPricing: 'Peak €35 · Low €20',
  },
  {
    region: 'palma', regionLabel: 'Palma',
    name: 'Golf Son Termes',
    img: '/images/courses/son-termes.webp',
    location: 'Bunyola · 10km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 70,
    difficulty: 6,
    architect: 'Unknown',
    tags: ['Tramuntana Views'],
    description: "Probably the course on the island that feels most integrated with its surroundings — it sits in a valley in the Tramuntana with the mountains forming a backdrop on every hole. Short at par 70 and 5,285m, but the terrain compensates with constant elevation changes and narrow fairways — buggy recommended. The restaurant overlooks the 18th green and the Bay of Palma.",
    pullQuote: null,
    notable: 'Tramuntana valley · 10 mins from Palma',
    extras: 'Buggy recommended',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },

  // ── SOUTHWEST ──
  {
    region: 'southwest', regionLabel: 'Southwest',
    name: 'Golf Santa Ponsa 1',
    img: '/images/courses/santa-ponsa-1.webp',
    location: 'Santa Ponsa · 20km from Palma',
    fee: '€77–126', feeMin: 77,
    holes: 18, par: 72,
    difficulty: 8,
    architect: 'Unknown',
    tags: ['Expert Pick', 'European Tour Host', 'Public Access'],
    description: "The only public course in the Santa Ponsa group capable of hosting a European Tour event — it hosted the 2021 European Tour Mallorca Golf Open. One of the longest courses on the island; the 10th hole at 590m is one of Europe's longest par-5s. Several partially blind tee shots and water hazards. Holes 5, 6 and 7 offer some of the best Tramuntana mountain views on the island.",
    pullQuote: null,
    notable: 'Public access · European Tour venue',
    extras: 'Public access · Book ahead',
    seasonPricing: 'Peak €126 · Low €77',
  },
  {
    region: 'southwest', regionLabel: 'Southwest',
    name: 'Golf Santa Ponsa 2',
    img: '/images/courses/santa-ponsa-2.webp',
    location: 'Santa Ponsa · 20km from Palma',
    fee: 'Members only', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'Unknown, 1991',
    tags: ['Members only'],
    description: "Members-only and usually quiet. Many tee shots make the driver a poor choice — a hybrid to control position is often the smarter call. The tree-lining is heavy and a ball in the wrong place usually means chipping back out. The 18th: a par-3 with a green shaped like the island of Mallorca itself — a detail worth knowing before you get there.",
    pullQuote: '"The 18th green is shaped like Mallorca itself. One of those details you want to know before you get there."',
    notable: 'Opened 1991 · Members only',
    extras: 'Members only',
    seasonPricing: 'Members only',
  },
  {
    region: 'southwest', regionLabel: 'Southwest',
    name: 'Golf Santa Ponsa 3',
    img: '/images/courses/santa-ponsa-3.webp',
    location: 'Santa Ponsa · 20km from Palma',
    fee: 'Members only', feeMin: 0,
    holes: 9, par: 36,
    difficulty: 4,
    architect: 'Unknown',
    tags: ['Members only', '9 holes'],
    description: "Nine holes winding through a residential community. Most holes are short — well-suited to beginners or to anyone who wants to work on approach play without committing to a full round. The second hole is a highlight: requires a precise tee shot despite the short distance, exactly the kind of deceptive test a course like this should include.",
    pullQuote: null,
    notable: 'Good for approach practice · Members only',
    extras: 'Members only · 9 holes',
    seasonPricing: 'Members only',
  },
  {
    region: 'southwest', regionLabel: 'Southwest',
    name: 'Real Golf de Bendinat',
    img: '/images/courses/bendinat.jpg',
    location: 'Bendinat · 7km from Palma',
    fee: '€74–123', feeMin: 74,
    holes: 18, par: 69,
    difficulty: 6,
    architect: 'Martin Hawtree, 1986',
    tags: [],
    description: "Seven kilometres from Palma in a wooded valley — genuinely peaceful for a course so close to the city. Views of the Bay of Palma, Cabrera Island, and the old Bendinat Castle. Note: the main clubhouse is currently under renovation, with full reopening planned May/June 2026. Limited visitor green fees per day — book ahead.",
    pullQuote: null,
    notable: 'Clubhouse renovation until May/June 2026',
    extras: 'Limited visitor spots — book ahead',
    seasonPricing: 'Peak €123 · Low €74',
  },
  {
    region: 'southwest', regionLabel: 'Southwest',
    name: 'T Golf Calvià (Poniente)',
    img: '/images/courses/t-golf-calvia.webp',
    location: 'Calvià · 12km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'John Harris, 1978 (rebuilt)',
    tags: ['Mallorca Open Host'],
    description: "Originally designed by John Harris in 1978 and completely rebuilt following a €10 million renovation — new course, new clubhouse, entirely different proposition. Fifteen lakes, open fairways encouraging driver, large undulating greens. The sea on one side and the Tramuntana on the other. Has hosted the Mallorca Open.",
    pullQuote: null,
    notable: 'Mallorca Open host · €10M renovation',
    extras: '15 lakes',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'southwest', regionLabel: 'Southwest',
    name: 'Golf de Andratx',
    img: '/images/courses/golf-andratx.webp',
    location: 'Camp de Mar · 40km from Palma',
    fee: '€96–140', feeMin: 96,
    holes: 18, par: 70,
    difficulty: 9,
    architect: 'Unknown',
    tags: ['Most Challenging', 'Handicap Required'],
    description: "The 6th is the longest par 5 in Spain at 609 metres. Built into the hills above Camp de Mar without compromise. Bring extra balls and no ego — the rough is genuine and the fairways narrow. Not suitable for beginners without a handicap certificate. The experience, views, and difficulty make it one of the most memorable rounds on the island.",
    pullQuote: null,
    notable: 'Most challenging course on the island',
    extras: 'Handicap max 28 required',
    seasonPricing: 'Peak €140 · Low €96',
  },

  // ── SOUTH ──
  {
    region: 'south', regionLabel: 'South',
    name: 'Golf Maioris',
    img: '/images/courses/maioris.webp',
    location: 'Llucmajor · 20km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'Unknown, 2006',
    tags: ['Near Airport'],
    description: "An interesting course in that the front nine and back nine feel like two unique design philosophies — the front nine Scottish and bumpy, the back nine more American in style, flatter. Fifteen minutes from the airport and less crowded than the courses closer to Palma — an underrated option for a first-day or last-day round. Has one of the island's few public grass driving ranges.",
    pullQuote: null,
    notable: '15 mins from airport · Public driving range',
    extras: 'Public grass driving range',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'south', regionLabel: 'South',
    name: 'Golf Son Antem East',
    img: '/images/courses/son-antem-east.webp',
    location: 'Llucmajor · 15km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 6,
    architect: 'Francisco Lopez-Segalés, 1994',
    tags: ['Good for beginners', 'Marriott Resort'],
    description: "Wide, generous fairways welcoming for players still building confidence from the tee, while the length and five lakes keep better players honest. Built on a former hunting estate near Llucmajor, ten minutes from the airport. Designed by Francisco Lopez-Segalés, opened 1994.",
    pullQuote: null,
    notable: 'Good for beginners · Marriott resort',
    extras: '5 lakes · 10 mins from airport',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'south', regionLabel: 'South',
    name: 'Golf Son Antem West',
    img: '/images/courses/son-antem-west.webp',
    location: 'Llucmajor · 15km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'Francisco Lopez-Segalés',
    tags: ['Tournament Course'],
    description: "The more testing of the two Son Antem courses and where most of the resort's tournaments are held. Narrower fairways, fewer forgiving rough areas, undulating greens surrounded by bunkers. Threads through a traditional Mallorcan finca with views of Randa Mountain.",
    pullQuote: null,
    notable: 'More challenging than East · Tournament venue',
    extras: 'Tournament venue',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },

  // ── EAST ──
  {
    region: 'east', regionLabel: 'East',
    name: 'Capdepera Golf',
    img: '/images/courses/capdepera.jpg',
    location: 'Artà · 65km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'Dan Maples',
    tags: [],
    description: "Dan Maples designed this to follow the existing landscape. The first half runs through a wide valley — open, relatively gentle. The back nine climbs into the Levant hills and becomes a much more technical test. Hole 15, up in the mountains with views across the whole valley to the coast, was chosen as the best hole on the island by Mallorca Magazin.",
    pullQuote: null,
    notable: 'Best paired with Canyamel',
    extras: 'Best hole on island (Mallorca Magazin)',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'east', regionLabel: 'East',
    name: 'Canyamel Golf',
    img: '/images/courses/canyamel.jpg',
    location: 'Capdepera · 65km from Palma',
    fee: '€85–145', feeMin: 85,
    holes: 18, par: 73,
    difficulty: 6,
    architect: 'José Gancedo, 1988',
    tags: [],
    description: "Each of the first nine holes has its own distinct character. Hole 4 has views across to Menorca on a clear day. Hole 9 has a traditional stone hut in the middle of the fairway — a hazard unique to Mallorca. Hole 18 ends with a triple-wave undulation on the green visible from the clubhouse terrace.",
    pullQuote: null,
    notable: 'Views to Menorca on clear days',
    extras: 'Stone hut in play on hole 9',
    seasonPricing: 'Peak €145 · Low €85',
  },
  {
    region: 'east', regionLabel: 'East',
    name: 'Pula Golf',
    img: '/images/courses/pula.jpg',
    location: 'Son Servera · 55km from Palma',
    fee: 'Dynamic pricing', feeMin: 0,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'José María Olazábal, 2004–2006',
    tags: ['European Tour Host'],
    description: "Completely redesigned by Olazábal between 2004–2006, subsequently hosting eight European Tour events. Excellent practice facilities including Trackman Range technology. Federer and Nadal played a round here in July 2025. Pep Guardiola is a regular.",
    pullQuote: null,
    notable: 'Olazábal design · European Tour host',
    extras: 'Trackman Range technology',
    seasonPricing: 'Dynamic (check teetimes.es)',
  },
  {
    region: 'east', regionLabel: 'East',
    name: 'Golf Club Son Servera',
    img: '/images/courses/son-servera.jpg',
    location: 'Son Servera · 55km from Palma',
    fee: '€80–145', feeMin: 80,
    holes: 18, par: 72,
    difficulty: 6,
    architect: 'Unknown, est. 1967',
    tags: [],
    description: "Founded in 1967, one of the oldest courses on the island. A parkland course along the Costa de los Pinos with generous fairways and relaxed rough. Holes 3 to 7 are the exception: narrow tree-lined fairways that climb into the hills and weave between lakes. Water on six holes.",
    pullQuote: null,
    notable: 'One of the oldest courses on the island',
    extras: 'Water on 6 holes',
    seasonPricing: 'Peak €145 · Low €80',
  },
  {
    region: 'east', regionLabel: 'East',
    name: "Vall d'Or Golf",
    img: '/images/courses/vall-dor.webp',
    location: "S'Horta · 60km from Palma",
    fee: '€99–132', feeMin: 99,
    holes: 18, par: 71,
    difficulty: 6,
    architect: 'Unknown',
    tags: ['East Coast Views'],
    description: "The front nine feels older, tighter, and more traditional. Then the back nine opens out and changes character completely, with broader corridors, more air around the holes, and sea views that make it stand out from the rest of the east coast. If you like a course that improves as the round goes on, Vall d'Or is a very good day out.",
    pullQuote: null,
    notable: 'East coast views · Strong back nine',
    extras: 'Cliffside finish',
    seasonPricing: 'Peak €132 · Low €99',
  },

  // ── NORTH ──
  {
    region: 'north', regionLabel: 'North',
    name: 'Club de Golf Alcanada',
    img: '/images/courses/alcanada.jpg',
    location: "Port d'Alcúdia · 55km from Palma",
    fee: '€115–220', feeMin: 115,
    holes: 18, par: 72,
    difficulty: 7,
    architect: 'Robert Trent Jones Jr.',
    tags: ['Expert Pick', 'Rolex Challenge Tour'],
    description: "Robert Trent Jones Jr. design. The Alcanada lighthouse, visible from 16 of the 18 holes, is one of Europe's most photographed golf landmarks. Fifty-eight bunkers are placed strategically across the layout — they demand attention on every approach. The course hosts the Rolex Challenge Tour Grand Final, returning for its sixth edition in October 2026. The greens are severely undulating and extremely fast. The restaurant terrace after the round is one of the best places on the island.",
    pullQuote: '"One of the most beautiful rounds you\'ll play anywhere in Europe. The lighthouse on 17 is unforgettable."',
    notable: 'Rolex Challenge Tour Grand Final Oct 2026',
    extras: '58 bunkers · Championship greens',
    seasonPricing: 'Peak €220 · Low €115',
  },
  {
    region: 'north', regionLabel: 'North',
    name: 'Golf Pollensa',
    img: '/images/courses/pollensa.jpg',
    location: 'Pollença · 60km from Palma',
    fee: '€30–60', feeMin: 30,
    holes: 9, par: 36,
    difficulty: 4,
    architect: 'José Gancedo, 1986',
    tags: ['9 holes', 'Beginner Friendly'],
    description: "Nine holes at the entrance to Pollença town, integrated into the hillside with views of the Tramuntana and the bays of Pollença and Alcúdia. Designed by José Gancedo in 1986. A round takes around 90 minutes — an easy warm-up or good option on a day when you want golf without full commitment.",
    pullQuote: null,
    notable: 'Good warm-up round · 90 minutes',
    extras: 'Takes ~90 minutes',
    seasonPricing: 'Peak €60 · Low €30',
  },
]

const REGION_ORDER = ['palma', 'southwest', 'south', 'east', 'north']

const REGION_META = {
  palma:     { label: 'Palma & Surrounds', subtitle: 'Seven courses within 15km of the city', count: '7 courses' },
  southwest: { label: 'Southwest', subtitle: 'Six courses between Palma and Andratx', count: '6 courses' },
  south:     { label: 'South', subtitle: 'Three courses near Llucmajor and the airport', count: '3 courses' },
  east:      { label: 'East', subtitle: 'Five courses along the east coast', count: '5 courses' },
  north:     { label: 'North', subtitle: 'Two courses around Alcúdia and Pollença', count: '2 courses' },
}

const REGION_FILTERS = [
  { key: 'all', label: 'All courses' },
  { key: 'palma', label: 'Palma' },
  { key: 'southwest', label: 'Southwest' },
  { key: 'south', label: 'South' },
  { key: 'east', label: 'East' },
  { key: 'north', label: 'North' },
]

// ─── DIFFICULTY BAR ──────────────────────────────────────────────────────────

function DifficultyBar({ score }) {
  const colour = score >= 8 ? 'var(--gold)' : score >= 6 ? 'var(--pine-mid)' : 'var(--stone)'
  return (
    <div className="course__difficulty">
      <div className="course__difficulty-bar">
        <div className="course__difficulty-fill" style={{ width: `${score * 10}%`, background: colour }} />
      </div>
      <span className="course__difficulty-note">{score}/10 difficulty</span>
    </div>
  )
}

// ─── COURSE CARD ─────────────────────────────────────────────────────────────

function CourseCard({ course }) {
  const [open, setOpen] = useState(false)
  const reviews = reviewsData[course.name] || []
  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null
  const isExpert = course.tags.includes('Expert Pick')

  return (
    <article className={`course${isExpert ? ' course--expert' : ''}`} style={{ marginBottom: 2 }}>

      {/* Mobile image */}
      <div className="course__img-mobile">
        <Image src={course.img} alt={course.name} fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>

      {/* Badges */}
      {(course.tags.length > 0 || avgRating) && (
        <div className="course__badges">
          {course.tags.map(tag => {
            const cls = tag === 'Expert Pick' ? 'badge--expert'
              : tag === 'Members only' ? 'badge--members'
              : 'badge--award'
            return (
              <span key={tag} className={`badge ${cls}`}>
                {tag === 'Expert Pick' ? '★ Expert Pick' : tag}
              </span>
            )
          })}
          {avgRating && (
            <span className="badge badge--award course__badge--rating">
              ★ {avgRating} avg · {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
            </span>
          )}
        </div>
      )}

      {/* Inner: text + desktop image */}
      <div className="course__inner">
        <div className="course__text-wrap">
          <h3 className="course__name">
            {course.name}
          </h3>
          <p className="course__location">{course.location}</p>

          {/* Stat pills */}
          <div className="course__stats">
            <span className="stat-pill stat-pill--gold">{course.fee}</span>
            <span className="stat-pill">{course.holes} holes · Par {course.par}</span>
          </div>

          {/* Difficulty */}
          <DifficultyBar score={course.difficulty} />

          {/* Description snippet */}
          {!open && (
            <p className="course__text">
              {course.description.slice(0, 160)}{course.description.length > 160 ? '…' : ''}
            </p>
          )}
        </div>

        {/* Desktop image */}
        <div className="course__img-wrap">
          <Image src={course.img} alt={course.name} fill sizes="240px" style={{ objectFit: 'cover' }} />
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'none', border: 'none', borderTop: '1px solid var(--linen)',
          padding: '10px 28px', display: 'flex', alignItems: 'center', gap: 8,
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: open ? 'var(--pine)' : 'var(--taupe)', fontFamily: 'var(--font-sans)',
        }}>
          {open ? 'Less detail' : 'Full detail'}
        </span>
        <span style={{
          color: open ? 'var(--pine)' : 'var(--stone)', fontSize: 16,
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s', display: 'inline-block', lineHeight: 1,
        }}>›</span>
      </button>

      {/* Expanded section */}
      {open && (
        <div style={{ borderTop: '1px solid var(--linen)', background: 'var(--cream)' }}>

          {/* Full description */}
          <div style={{ padding: '28px 28px 0' }}>
            <p className="course__text">{course.description}</p>
          </div>

          {/* Pull quote */}
          {course.pullQuote && (
            <div style={{ padding: '20px 28px 0' }}>
              <div className="course__note">{course.pullQuote}</div>
            </div>
          )}

          {/* Detail grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1px',
            margin: '24px 28px 0',
            background: 'var(--linen)',
            border: '1px solid var(--linen)',
          }}>
            {[
              { label: 'Architect', value: course.architect },
              { label: 'Green fees', value: course.seasonPricing },
              { label: 'Extras', value: course.extras },
              { label: 'Notable', value: course.notable },
            ].filter(d => d.value).map(({ label, value }) => (
              <div key={label} style={{ background: 'var(--white)', padding: '16px 20px' }}>
                <p style={{
                  fontSize: 9, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--taupe)', fontFamily: 'var(--font-sans)', margin: '0 0 4px',
                }}>
                  {label}
                </p>
                <p style={{
                  fontSize: '0.85rem', color: 'var(--charcoal)', fontFamily: 'var(--font-sans)',
                  fontWeight: 300, margin: 0, lineHeight: 1.55,
                }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ padding: '20px 28px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20playing%20${encodeURIComponent(course.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--pine"
              style={{ fontSize: 10, padding: '11px 22px', gap: 8 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ask about {course.name}
            </a>
            <button
              onClick={() => {
                const text = `${course.name}\n${course.location}\n${course.holes} holes · Par ${course.par}\nFee: ${course.fee}\nDifficulty: ${course.difficulty}/10\n\nvia mrmallorcagolf.com`
                navigator.clipboard?.writeText(text)
              }}
              className="btn btn--outline-dark"
              style={{ fontSize: 10, padding: '11px 22px' }}
            >
              Copy course info
            </button>
          </div>

          {/* Reviews */}
          {reviews.length > 0 && (
            <div style={{ borderTop: '1px solid var(--linen)', padding: '24px 28px' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>
                {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
              </p>
              {reviews.map((r, i) => (
                <div key={i} style={{
                  paddingBottom: 20, marginBottom: 20,
                  borderBottom: i < reviews.length - 1 ? '1px solid var(--linen)' : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.88rem', color: 'var(--deep)' }}>
                        {r.name}
                      </span>
                      <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold)', fontSize: '0.95rem' }}>
                        {'★'.repeat(Math.round(r.rating / 2))}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--taupe)', fontFamily: 'var(--font-sans)' }}>
                        {r.rating}/10
                      </span>
                    </div>
                    <span style={{ fontSize: 10, color: 'var(--stone)', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em' }}>
                      {r.date}
                    </span>
                  </div>
                  <p className="course__text" style={{ margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Footer bar */}
      <div className="course__footer">
        <span className="course__footer-info">{course.notable}</span>
        <span className="course__region-tag">
          {course.region.charAt(0).toUpperCase() + course.region.slice(1)}
        </span>
      </div>
    </article>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CourseFinderPage() {
  const [search, setSearch]       = useState('')
  const [sortBy, setSortBy]       = useState('region')
  const [regionFilter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    let list = ALL_COURSES

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      )
    }

    if (regionFilter !== 'all') {
      list = list.filter(c => c.region === regionFilter)
    }

    if (sortBy === 'name')       return [...list].sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === 'fee-low')    return [...list].sort((a, b) => a.feeMin - b.feeMin)
    if (sortBy === 'fee-high')   return [...list].sort((a, b) => b.feeMin - a.feeMin)
    if (sortBy === 'difficulty') return [...list].sort((a, b) => b.difficulty - a.difficulty)
    return list
  }, [search, sortBy, regionFilter])

  const grouped = useMemo(() => {
    if (sortBy !== 'region') return null
    const map = {}
    for (const c of filtered) {
      if (!map[c.region]) map[c.region] = []
      map[c.region].push(c)
    }
    return REGION_ORDER.filter(r => map[r]).map(r => ({ region: r, courses: map[r] }))
  }, [filtered, sortBy])

  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <section className="hero course-finder-hero">
        <Image
          src="/images/hero-panoramic.webp"
          alt="Golf courses in Mallorca"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div className="hero__overlay" />
        <div className="course-finder-hero__topfade" />
        <div className="hero__content course-finder-hero__content">
          <p className="hero__eyebrow">Mr Mallorca Golf</p>
          <h1 className="course-finder-hero__title">
            Golf Courses<br />in Mallorca
          </h1>
          <span className="gold-rule" />
          <p className="hero__lead">
            Twenty-three courses across the island — reviewed, rated, and mapped by region.
            Search by name, fee, or difficulty to find the right course for your round.
          </p>
        </div>
      </section>

      {/* ─── PINE CTA BAR ─── */}
      <div className="course-finder-bar">
        <p className="course-finder-bar__text">
          Want to play one of these courses with a PGA professional?
        </p>
        <a
          href="https://wa.me/34624466702"
          target="_blank" rel="noopener noreferrer"
          className="btn btn--gold"
          style={{ fontSize: 10, padding: '11px 24px', gap: 8, minHeight: 40 }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Message Andy on WhatsApp
        </a>
      </div>

      {/* ─── SEARCH BAR ─── */}
      <div className="course-finder-search">
        <div className="course-finder-search__inner">
          <div className="course-finder-search__field">
            <svg
              className="course-finder-search__icon"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, region, feature…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="course-finder-search__input"
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="course-finder-search__select"
          >
            <option value="region">By region</option>
            <option value="name">Name A–Z</option>
            <option value="fee-low">Fee: low → high</option>
            <option value="fee-high">Fee: high → low</option>
            <option value="difficulty">Most difficult first</option>
          </select>
        </div>
      </div>

      {/* ─── REGION FILTER TABS ─── */}
      <div className="filter-tabs">
        {REGION_FILTERS.map(f => (
          <button
            key={f.key}
            className={`filter-tab${regionFilter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
        <span className="filter-tabs__count">
          {filtered.length} {filtered.length === 1 ? 'course' : 'courses'}
        </span>
      </div>

      {/* ─── COURSE LIST ─── */}
      <div className="page-layout">
        <div className="page-main">
          {filtered.length === 0 ? (
            <div className="course__empty">
              No courses match your search.
            </div>
          ) : grouped ? (
            grouped.map((group, i) => {
              const meta = REGION_META[group.region]
              return (
                <div key={group.region}>
                  {i > 0 && <div className="course-finder-divider" />}
                  <div className="region-section">
                    <div className="region-header">
                      <h2 className="region-title">{meta.label}</h2>
                      <p className="region-subtitle">{meta.subtitle}</p>
                      <span className="region-count">{meta.count}</span>
                    </div>
                    {group.courses.map(c => <CourseCard key={c.name} course={c} />)}
                  </div>
                </div>
              )
            })
          ) : (
            filtered.map(c => <CourseCard key={c.name} course={c} />)
          )}
        </div>

        {/* ─── SIDEBAR ─── */}
        <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>Want to play one of these courses?</h3>
            <p>Tell me which courses interest you. I will recommend the right one and arrange the day.</p>
            <a href="https://wa.me/34624466702" target="_blank" rel="noopener noreferrer" className="sidebar-btn">
              Message on WhatsApp
            </a>
          </div>
          <div className="sidebar-card sidebar-card--cream">
            <h3 className="sidebar-card__title-sm">Quick picks by type</h3>
            <ul className="sidebar-quick">
              <li>Best overall: Son Gual or Alcanada</li>
              <li>Best scenery: Alcanada (lighthouse views)</li>
              <li>Best for beginners: Son Quint or Son Antem East</li>
              <li>Best value: Santa Ponsa 1</li>
              <li>Most dramatic: Golf de Andratx</li>
              <li>Best for a quick round: Golf Pollensa (9 holes)</li>
              <li>Closest to Palma: Real Golf de Bendinat</li>
              <li>European Tour: Son Muntaner (DP World Tour)</li>
            </ul>
          </div>
          <div className="sidebar-card sidebar-card--accent">
            <h3 className="sidebar-card__title-sm">Expert picks</h3>
            <ul className="sidebar-quick">
              <li>Golf Son Gual</li>
              <li>Golf Santa Ponsa 1</li>
              <li>Club de Golf Alcanada</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container--narrow">
          <p className="eyebrow eyebrow--light" style={{ marginBottom: '1rem' }}>Play with a PGA Professional</p>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.25rem' }}>
            Ready to play one of these courses?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: '2rem' }}>
            Tell me which course interests you and what you are looking for.
            I will recommend the right one and arrange the day.
          </p>
          <div className="hero__ctas" style={{ justifyContent: 'center' }}>
            <a href="https://wa.me/34624466702" target="_blank" rel="noopener noreferrer" className="btn btn--gold">
              Message on WhatsApp
            </a>
            <a href="/contact" className="btn btn--outline-white">
              Send a message
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
