'use client'
import { useState } from 'react'
import Link from 'next/link'

const REGIONS = [
  { key: 'all', label: 'All Courses' },
  { key: 'palma', label: 'Palma' },
  { key: 'southwest', label: 'Southwest' },
  { key: 'south', label: 'South' },
  { key: 'east', label: 'East' },
  { key: 'north', label: 'North' },
  { key: 'expert', label: '★ Expert Picks Only' },
]

const COURSE_DATA = [
  {
    region: 'palma',
    courses: [
      { expert: true, full: true, badges: ['★ Expert Pick', 'Most Recommended'], name: 'Golf Son Gual', img: '/images/courses/son-gual.jpg', location: 'Palma · 11km from city centre', pills: ['€80–165', 'Par 72 · Championship', 'Handicap required', 'Buggies available', 'Designed by Thomas Himmel, 2007'], difficulty: 90, diffScore: '9/10', text: "Thomas Himmel's 2007 design sits in its own wind ecosystem — its elevated position and tree coverage mean the wind can behave differently on every hole. The greens are fast and raised; where you miss matters more than how you swing. The closing stretch — holes 15 to 18 — is among the finest four holes in European golf. Rafa Nadal has said this is his favourite course on the island.", note: '"The wind on 16 is a different challenge to the wind on 7. Thats what makes the course so re-playable."', footer: 'Rafas favourite · Must-play', link: 'https://son-gual.com', linkText: 'son-gual.com' },
      { expert: false, badges: [], name: 'Golf Son Vida', img: '/images/courses/son-vida.webp', location: 'Arabella · Son Vida, Palma', pills: ['From €95', 'Par 72 · Est. 1964', 'Buggies available', 'Seve won here in 1990'], difficulty: 80, diffScore: '8/10', text: 'The oldest course in Mallorca, opened 1964. Seve Ballesteros won here in a European Tour playoff in 1990. The layout winds through the residential Son Vida neighbourhood with tight routing and elevation changes. The 18th hole is a par 5 with a water carry on the second shot that tempts many into a decision they later regret.', footer: 'Oldest course on the island · Seve won here', link: 'https://arabellagolfmallorca.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Son Muntaner', img: '/images/courses/son-muntaner.jpg', location: 'Son Vida · Palma', pills: ['Dynamic pricing', 'DP World Tour', 'Par 72', 'Best in Spain 2025'], difficulty: 70, diffScore: '7/10', text: 'Named Best Golf Course in Spain at the 2025 World Golf Awards. The original course at the Castillo Hotel Son Vida estate, redesigned by Severiano Ballesteros. Views across the Bay of Palma from the higher holes. A thousand-year-old olive tree sits on the 15th — in play, not decoration. Hosts the Mallorca Golf Open on the DP World Tour.', footer: 'Best in Spain 2025 · DP World Tour', link: 'https://arabellagolfmallorca.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Golf Son Quint', img: '/images/courses/son-quint.jpg', location: 'Arabella · Son Vida, Palma', pills: ['Dynamic pricing', 'Par 72 · Opened 2007', 'All levels welcome'], difficulty: 50, diffScore: '5/10', text: 'The most approachable of the Arabella courses. Long, open fairways and four different tee positions make it genuinely suited to any level. From hole 8, the highest point on the course, you tee off facing directly toward Palma Cathedral. Tiger Woods played here with his son Charlie in July 2022. The stone walls are in play — not just decoration.', footer: 'Best for beginners · Tiger Woods played here', link: 'https://arabellagolfmallorca.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'T Golf Palma Puntiró', img: '/images/courses/t-golf-palma.jpg', location: 'Palma · 10km from city centre', pills: ['Dynamic pricing', 'Par 71 · 6,027m', 'Jack Nicklaus Design'], difficulty: 70, diffScore: '7/10', text: 'The only Jack Nicklaus-designed course in Mallorca, opened 2006 and completely renovated in 2022. Nicklaus designed it to follow the existing land without modification — no artificially flattened fairways. Native pines, wild olives, and carob trees form the rough throughout with no buildings visible from any hole.', footer: 'Only Nicklaus design on the island', link: 'https://t-golf.club/palma', linkText: 't-golf.club' },
      { expert: false, badges: [], name: 'Palma Pitch & Putt', img: '/images/courses/palma-pitch-putt.jpg', location: 'Arabella · Central Palma', pills: ['€20–35', '9 holes · All par 3', '45 minutes'], difficulty: 20, diffScore: '2/10', text: "Nine holes, par 27, 638 metres total. The only official pitch & putt course in Mallorca. All nine holes are par 3s ranging from 50–100m, demanding accuracy rather than power. The natural starting point for beginners and juniors, a good warm-up before a full round elsewhere, or a useful option for a non-golfing partner who wants to try the game.", footer: 'Perfect for beginners & juniors', link: 'https://arabellagolfmallorca.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Golf Son Termes', img: '/images/courses/son-termes.webp', location: 'Bunyola · 10km from Palma', pills: ['Dynamic pricing', 'Par 70 · 5,285m', 'Tramuntana valley'], difficulty: 60, diffScore: '6/10', text: "Probably the course on the island that feels most integrated with its surroundings — it sits in a valley in the Tramuntana with the mountains forming a backdrop on every hole. Short at par 70 and 5,285m, but the terrain compensates with constant elevation changes and narrow fairways — buggy recommended. The restaurant overlooks the 18th green and the Bay of Palma.", footer: 'Tramuntana valley · 10 mins from Palma', link: 'https://golfsontermens.com', linkText: 'Book' },
    ]
  },
  {
    region: 'southwest',
    courses: [
      { expert: true, badges: ['★ Expert Pick', 'DP World Tour Host'], name: 'Golf Santa Ponsa 1', img: '/images/courses/santa-ponsa-1.webp', location: 'Santa Ponsa · 20km from Palma', pills: ['€77–126', 'Par 72 · Longest on island', 'Public access'], difficulty: 80, diffScore: '8/10', text: "The only public course in the Santa Ponsa group with genuine European Tour pedigree — it hosted the 2021 DP World Tour Mallorca Golf Open. One of the longest courses on the island; the 10th hole at 590m is one of Europe's longest par-5s. Several partially blind tee shots and water hazards. Holes 5, 6 and 7 offer some of the best Tramuntana mountain views on the island.", footer: 'Public access · DP World Tour venue', link: 'https://golf-santaponsa.com', linkText: 'golf-santaponsa.com' },
      { expert: true, badges: ['★ Expert Pick', 'Members + Arranged Access'], name: 'Golf Santa Ponsa 2', img: '/images/courses/santa-ponsa-2.webp', location: 'Santa Ponsa · 20km from Palma', pills: ['Members only', 'Access via arrangement', 'Opened 1991'], difficulty: 70, diffScore: '7/10', text: "Members-only and usually quiet. Many tee shots make the driver a poor choice — a hybrid to control position is often the smarter call. The tree-lining is heavy and a ball in the wrong place usually means chipping back out. The 18th: a par-3 with a green shaped like the island of Mallorca itself — a detail worth knowing before you get there.", note: '"The 18th green is shaped like Mallorca itself. One of those details you want to know before you get there."', footer: 'Access arrangeable for clients', link: '/contact', linkText: 'Arrange access' },
      { expert: true, badges: ['★ Expert Pick', 'Members + Arranged Access'], name: 'Golf Santa Ponsa 3', img: '/images/courses/santa-ponsa-3.webp', location: 'Santa Ponsa · 20km from Palma', pills: ['Members only', '9 holes', 'Shorter course'], difficulty: 40, diffScore: '4/10', text: "Nine holes winding through a residential community. Most holes are short — well-suited to beginners or to anyone who wants to work on approach play without committing to a full round. The second hole is my favourite: requires a precise tee shot despite the short distance, which is exactly the kind of deceptive test a course like this should include.", footer: 'Good for approach practice · Access arrangeable', link: '/contact', linkText: 'Arrange access' },
      { expert: false, badges: [], name: 'Real Golf de Bendinat', img: '/images/courses/bendinat.jpg', location: 'Bendinat · 7km from Palma', pills: ['€74–123', 'Par 69 · 5,660m', 'Martin Hawtree, 1986'], difficulty: 60, diffScore: '6/10', text: "Seven kilometres from Palma in a wooded valley — genuinely peaceful for a course so close to the city. Views of the Bay of Palma, Cabrera Island, and the old Bendinat Castle. Note: the main clubhouse is currently under renovation, with full reopening planned May/June 2026. Limited visitor green fees per day — book ahead.", footer: 'Clubhouse renovation until May/June 2026', link: 'https://realgolfbendinat.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'T Golf Calvià (Poniente)', img: '/images/courses/t-golf-calvia.webp', location: 'Calvià · 12km from Palma', pills: ['Dynamic pricing', 'Par 72 · 15 lakes', '€10M renovation'], difficulty: 70, diffScore: '7/10', text: "Originally designed by John Harris in 1978 and completely rebuilt following a €10 million renovation — new course, new clubhouse, entirely different proposition. Fifteen lakes, open fairways encouraging driver, large undulating greens. The sea on one side and the Tramuntana on the other. Has hosted the Mallorca Open.", footer: 'Mallorca Open host', link: 'https://t-golf.club', linkText: 't-golf.club' },
      { expert: false, badges: [], name: 'Golf de Andratx', img: '/images/courses/golf-andratx.webp', location: 'Camp de Mar · 40km from Palma', pills: ['€96–140', 'Par 70 · Handicap max 28', 'Coastal Hills'], difficulty: 90, diffScore: '9/10', text: "The 6th is the longest par 5 in Spain at 609 metres. Built into the hills above Camp de Mar without compromise. Bring extra balls and no ego — the rough is genuine and the fairways narrow. Not suitable for beginners without a handicap certificate. The experience, views, and difficulty make it one of the most memorable rounds on the island.", footer: 'Most challenging course on the island', link: 'https://golfdeandratx.com', linkText: 'Book' },
    ]
  },
  {
    region: 'south',
    courses: [
      { expert: false, badges: [], name: 'Golf Maioris', img: '/images/courses/maioris.webp', location: 'Llucmajor · 20km from Palma', pills: ['Dynamic pricing', 'Par 72 · 6,300m', 'Opened 2006'], difficulty: 70, diffScore: '7/10', text: "An interesting course in that the front nine and back nine feel like two unique design philosophies — the front nine Scottish and bumpy, the back nine more American in style, flatter. Fifteen minutes from the airport and less crowded than the courses closer to Palma — an underrated option for a first-day or last-day round. Has one of the island's few public grass driving ranges.", footer: '15 mins from airport · Public grass driving range', link: 'https://golfmaioris.es', linkText: 'Book' },
      { expert: false, badges: [], name: 'Golf Son Antem East', img: '/images/courses/son-antem-east.webp', location: 'Llucmajor · 15km from Palma', pills: ['Dynamic pricing', 'Par 72 · 5 lakes', 'Marriott Resort'], difficulty: 60, diffScore: '6/10', text: "Wide, generous fairways welcoming for players still building confidence from the tee, while the length and five lakes keep better players honest. Built on a former hunting estate near Llucmajor, ten minutes from the airport. Designed by Francisco Lopez-Segalés, opened 1994.", footer: 'Good for beginners · Marriott resort', link: 'https://sonantemgolf.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Golf Son Antem West', img: '/images/courses/son-antem-west.webp', location: 'Llucmajor · 15km from Palma', pills: ['Dynamic pricing', 'Par 72 · Tournament course'], difficulty: 70, diffScore: '7/10', text: "The more testing of the two Son Antem courses and where most of the resort's tournaments are held. Narrower fairways, fewer forgiving rough areas, undulating greens surrounded by bunkers. Threads through a traditional Mallorcan finca with views of Randa Mountain.", footer: 'More challenging than East · Tournament venue', link: 'https://sonantemgolf.com', linkText: 'Book' },
    ]
  },
  {
    region: 'east',
    courses: [
      { expert: false, badges: [], name: 'Capdepera Golf', img: '/images/courses/capdepera.jpg', location: 'Artà · 65km from Palma', pills: ['Dynamic pricing', 'Par 72', 'Dan Maples design'], difficulty: 70, diffScore: '7/10', text: "Dan Maples designed this to follow the existing landscape. The first half runs through a wide valley — open, relatively gentle. The back nine climbs into the Levant hills and becomes a much more technical test. Hole 15, up in the mountains with views across the whole valley to the coast, was chosen as the best hole on the island by Mallorca Magazin.", footer: 'Best paired with Canyamel', link: 'https://golfcapdepera.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Canyamel Golf', img: '/images/courses/canyamel.jpg', location: 'Capdepera · 65km from Palma', pills: ['€85–145', 'Par 73 · 6,198m', 'José Gancedo, 1988'], difficulty: 60, diffScore: '6/10', text: "Each of the first nine holes has its own distinct character. Hole 4 has views across to Menorca on a clear day. Hole 9 has a traditional stone hut in the middle of the fairway — a hazard unique to Mallorca. Hole 18 ends with a triple-wave undulation on the green visible from the clubhouse terrace.", footer: 'Views to Menorca on clear days', link: 'https://canyamelgolf.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Pula Golf', img: '/images/courses/pula.jpg', location: 'Son Servera · 55km from Palma', pills: ['Dynamic pricing', 'Par 72 · Olazábal redesign', '8 European Tour events'], difficulty: 70, diffScore: '7/10', text: "Completely redesigned by Olazábal between 2004–2006, subsequently hosting eight European Tour events. Excellent practice facilities including Trackman Range technology. Federer and Nadal played a round here in July 2025. Pep Guardiola is a regular.", footer: 'Olazábal design · European Tour host', link: 'https://pulagolf.com', linkText: 'Book' },
      { expert: false, badges: [], name: 'Golf Club Son Servera', img: '/images/courses/son-servera.jpg', location: 'Son Servera · 55km from Palma', pills: ['€80–145', 'Par 72 · Est. 1967', 'Coastal parkland'], difficulty: 60, diffScore: '6/10', text: "Founded in 1967, one of the oldest courses on the island. A parkland course along the Costa de los Pinos with generous fairways and relaxed rough. Holes 3 to 7 are the exception: narrow tree-lined fairways that climb into the hills and weave between lakes. Water on six holes.", footer: 'One of the oldest courses on the island', link: 'https://golfsonservera.com', linkText: 'Book' },
    ]
  },
  {
    region: 'north',
    courses: [
      { expert: true, full: true, badges: ['★ Expert Pick', 'Rolex Challenge Tour Grand Final'], name: 'Club de Golf Alcanada', img: '/images/courses/alcanada.jpg', location: "Port d'Alcúdia · 55km from Palma", pills: ['€115–220', 'Par 72 · Robert Trent Jones Jr.', '58 bunkers', 'Championship greens'], difficulty: 70, diffScore: '7/10', text: "My second anchor course and arguably Mallorca's most scenic. Robert Trent Jones Jr. design. The Alcanada lighthouse, visible from 16 of the 18 holes, is one of Europe's most photographed golf landmarks. Fifty-eight bunkers are placed strategically across the layout — they demand attention on every approach.", text2: "The course hosts the Rolex Challenge Tour Grand Final, returning for its sixth edition in October 2026. The greens are severely undulating and extremely fast. The restaurant terrace after the round is one of the best places on the island. Allow 50 minutes from Palma — it's worth every minute.", note: '"One of the most beautiful rounds you\'ll play anywhere in Europe. The lighthouse on 17 is unforgettable."', footer: 'Rolex Challenge Tour Grand Final Oct 2026 · Allow 50 mins from Palma', link: 'https://golf-alcanada.com', linkText: 'golf-alcanada.com' },
      { expert: false, badges: [], name: 'Golf Pollensa', img: '/images/courses/pollensa.jpg', location: 'Pollença · 60km from Palma', pills: ['€30–60', '9 holes · 90 minutes', 'Tramuntana views'], difficulty: 40, diffScore: '4/10', text: "Nine holes at the entrance to Pollença town, integrated into the hillside with views of the Tramuntana and the bays of Pollença and Alcúdia. Designed by José Gancedo in 1986. A round takes around 90 minutes — an easy warm-up or good option on a day when you want golf without full commitment.", footer: 'Good warm-up round · 90 minutes', link: 'https://golfpollensa.com', linkText: 'Book' },
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
  const isExternalLink = c.link.startsWith('http')
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
        {isExternalLink
          ? <a href={c.link} className="course__link" target="_blank" rel="noopener noreferrer">{c.linkText}</a>
          : <Link href={c.link} className="course__link">{c.linkText}</Link>
        }
      </div>
    </div>
  )
}

export default function GolfCoursesClient() {
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
          <p>Mallorca — or Majorca, as it's commonly spelled in the UK — has more outstanding golf than most visitors realise. All reviews are well-researched and accurate, with my personal thoughts and first-hand notes for the courses I've played. I'm working through every course on the island and will have visited them all before long.</p>
          <p>Son Muntaner was named Best Golf Course in Spain at the 2025 World Golf Awards. The island has hosted the DP World Tour, the Rolex Challenge Tour Grand Final, and produced course designs by Robert Trent Jones Jr., Jack Nicklaus, and Seve Ballesteros.</p>
        </div>
        <div className="intro-bar__expert reveal">
          <p className="expert-label">Your guide</p>
          <p className="expert-name">Andy Griffiths</p>
          <p className="expert-credentials">PGA Advanced Professional<br />Trackman Master · TPI Level 3<br />11 years coaching in Shanghai<br />Based in Mallorca since 2025</p>
          <Link href="/play-with-a-pro" className="expert-cta">Play with Andy</Link>
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
            <h3>Want to play one of these courses with a PGA professional alongside you?</h3>
            <p>Private round, everything arranged, on-course coaching throughout. Son Gual and Alcanada are the primary venues.</p>
            <Link href="/contact" className="sidebar-btn">Get in touch &rarr;</Link>
          </div>
          <div className="sidebar-card sidebar-card--cream">
            <h3 style={{fontSize:'1rem'}}>Quick picks</h3>
            <ul className="sidebar-quick">
              <li>Best overall: Son Gual</li>
              <li>Most scenic: Alcanada</li>
              <li>Best in Spain: Son Muntaner</li>
              <li>Most challenging: Golf de Andratx</li>
              <li>Best for beginners: Son Quint</li>
              <li>Best value: Golf Pollensa</li>
              <li>Best East coast: Pula or Canyamel</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FINAL CTA */}
      <section className="guide-cta">
        <div>
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'0.75rem'}}>Want to play one of these courses?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem',marginBottom:'1.25rem'}}>Private round, everything arranged, PGA professional throughout.</h2>
          <p>Tell me which course interests you, your dates, and your handicap. I&apos;ll come back with a recommendation within 24 hours.</p>
        </div>
        <div className="guide-cta__actions">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 32px'}}>See the Experiences &rarr;</Link>
          <Link href="/contact" className="btn btn--outline-white">Get in touch</Link>
        </div>
      </section>
    </>
  )
}

