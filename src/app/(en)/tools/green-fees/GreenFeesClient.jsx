'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import ToolTrustLine from '../../../../components/ToolTrustLine'

/* =====================================================================
   COURSE DATA — sourced from MMG_ENCYCLOPAEDIA_DATA_MASTER.md.
   Cross-check against the pricing master Sheet (mmg.ps1 pricing) when
   green fees change. Approximate, seasonal — always confirm at booking.
   ===================================================================== */
const COURSES = [
  { name: 'Son Gual',           area: 'Palma',     peak: 165, low: 110, buggy: '€45 (optional)',                walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '33M / 35L + certificate', nineHoles: false, verdict: 'My most-played course in Mallorca and the one I recommend most consistently. Not a soft holiday round.', guideUrl: '/guides/son-gual-review' },
  { name: 'Alcanada',           area: 'North',     peak: 220, low: 115, buggy: '€48 with GPS',                  walking: 'restricted', walkingNote: 'Hilly, most take a buggy',     handicap: 'yes', handicapNote: '33M / 35L',               nineHoles: false, verdict: 'The lighthouse is visible from 16 of the 18 holes. The course I take people to when I want them to remember one round in particular.', guideUrl: '/guides/alcanada-review' },
  { name: 'T Golf Calvià',      area: 'Southwest', peak: 210, low: 80,  buggy: '€40 (recommended)',             walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '28M / 34L',               nineHoles: false, verdict: 'One of the best-conditioned courses I have played in Mallorca. Fifteen lakes keep water in play mentally all day.', guideUrl: '/guides/t-golf-calvia-review' },
  { name: 'Son Muntaner',       area: 'Palma',     peak: 250, low: 125, buggy: 'Included Mar–late Nov',         walking: 'yes',        walkingNote: 'Long but flat',               handicap: 'yes', handicapNote: '36',                      nineHoles: false, verdict: 'Named Best Golf Course in Spain 2025, and the conditioning backs the title up.', guideUrl: '/guides/son-muntaner-review' },
  { name: 'Son Vida',           area: 'Palma',     peak: 250, low: 115, buggy: 'Available (dynamic pricing)',   walking: 'yes',        walkingNote: 'Undulating',                  handicap: 'yes', handicapNote: '36 + certificate',        nineHoles: false, verdict: "The island's oldest course. Short and tight rather than long, ten minutes from the city.", guideUrl: null },
  { name: 'Son Quint',          area: 'Palma',     peak: 200, low: 110, buggy: 'Available (dynamic pricing)',   walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36',                      nineHoles: false, verdict: 'The 8th tee faces straight at Palma Cathedral. Wide, forgiving fairways suit a relaxed round.', guideUrl: null },
  { name: 'T Golf Palma Puntiró', area: 'Palma',   peak: 180, low: 80,  buggy: '€40',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '34M / 36L',               nineHoles: false, verdict: "The only Nicklaus design in Mallorca, with a 42-bay range that makes it the island's best practice hub.", guideUrl: null },
  { name: 'Palma Pitch & Putt', area: 'Palma',     peak: 22,  low: 14,  buggy: 'Not needed',                    walking: 'yes',        walkingNote: '',                            handicap: 'no',  handicapNote: 'None required',           nineHoles: true,  verdict: 'No handicap needed and club hire from €5. The right first golf experience on the island.', guideUrl: null },
  { name: 'Santa Ponsa I',      area: 'Southwest', peak: 126, low: 77,  buggy: '€43 (18 holes)',                walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '28M / 36L + certificate', nineHoles: false, verdict: 'The open fairways here helped me get my own driving confidence back. The 590m 10th is one of the longest par 5s in Europe.', guideUrl: '/guides/santa-ponsa-1-review' },
  { name: 'Santa Ponsa II',     area: 'Southwest', peakText: 'Via pro access', lowText: 'Members only', buggy: 'Member facilities', walking: 'yes', walkingNote: 'Flat',           handicap: 'yes', handicapNote: '28M / 36L',               nineHoles: false, verdict: 'Members only, quiet, and more strategic than people expect. The 18th green is shaped like Mallorca itself.', guideUrl: null },
  { name: 'Santa Ponsa III',    area: 'Southwest', peakText: 'Via pro access', lowText: 'Members only', buggy: 'Not needed',        walking: 'yes', walkingNote: 'Flat',           handicap: 'yes', handicapNote: '28M / 36L',               nineHoles: true,  verdict: 'A nine-hole scoring loop. I use it for wedge and approach work rather than a serious test.', guideUrl: null },
  { name: 'Golf de Andratx',    area: 'Southwest', peak: 135, low: 110, buggy: '€45, mandatory before 2pm',     walking: 'restricted', walkingNote: 'After 2pm only',              handicap: 'yes', handicapNote: '28M / 36L + certificate', nineHoles: false, verdict: 'Home to the longest par 5 in Spain and the best sea views on the island. Bring plenty of golf balls.', guideUrl: '/guides/golf-andratx-review' },
  { name: 'Bendinat',           area: 'Southwest', peak: 123, low: 74,  buggy: '€33–€43 (essential)',           walking: 'no',         walkingNote: 'Hilly, long green-to-tee walks', handicap: 'yes', handicapNote: '36',                   nineHoles: false, verdict: 'Castle views and real hills. Take the buggy and enjoy it.', guideUrl: null },
  { name: 'Maioris',            area: 'Palma',     peak: 81,  low: 69,  buggy: '€36–€47',                       walking: 'yes',        walkingNote: 'Some later slopes',           handicap: 'yes', handicapNote: '36',                      nineHoles: false, verdict: 'The most sensible spend this close to Palma, fifteen minutes from the city.', guideUrl: null },
  { name: 'Son Antem East',     area: 'Palma',     peak: 140, low: 80,  buggy: '€48',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '54',                      nineHoles: false, verdict: "Handicap 54 welcome and one of Europe's largest golf academies on site. The friendlier of the two Antem courses.", guideUrl: null },
  { name: 'Son Antem West',     area: 'Palma',     peak: 135, low: 90,  buggy: '€48',                           walking: 'yes',        walkingNote: 'Flat',                        handicap: 'yes', handicapNote: '27M / 35L',               nineHoles: false, verdict: 'Flat and forgiving, and the tree-lined 16th is worth the round alone. Expect queues at busy times.', guideUrl: '/guides/son-antem-west-review' },
  { name: 'Son Termes',         area: 'Palma',     peak: 110, low: null, buggy: 'Green fee + buggy bundles',     walking: 'restricted', walkingNote: 'Front 9 flat, back 9 steep',  handicap: 'yes', handicapNote: '36 + certificate',        nineHoles: false, verdict: 'More character than most courses at this price. The views from the back nine are the best this close to Palma.', guideUrl: '/guides/son-termes-review' },
  { name: 'Pollensa',           area: 'North',     peak: 75,  low: 40,  buggy: '€25–€35',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36',                      nineHoles: true,  verdict: 'Nine holes under the Tramuntana mountains at the friendliest prices on the island.', guideUrl: null },
  { name: 'Capdepera',          area: 'East',      peak: 125, low: 75,  buggy: '€35–€45 (optional)',            walking: 'yes',        walkingNote: 'Flat until the last 6',       handicap: 'yes', handicapNote: '36 + certificate',        nineHoles: false, verdict: 'The 15th is stroke index 1 and was voted the best hole on the island. Rafa Nadal plays here regularly.', guideUrl: null },
  { name: 'Canyamel',           area: 'East',      peak: 145, low: 85,  buggy: '€30–€45',                       walking: 'restricted', walkingNote: 'Front 9 hilly, back 9 level', handicap: 'yes', handicapNote: '36M / 45L',               nineHoles: false, verdict: 'A José Gancedo design with lakes throughout. Tee off before 8:50am and the early-bird rate saves a decent amount.', guideUrl: null },
  { name: 'Pula',               area: 'East',      peak: 163, low: 68,  buggy: '€45',                           walking: 'yes',        walkingNote: 'One notable hill',            handicap: 'yes', handicapNote: '34M / 36L',               nineHoles: false, verdict: 'An Olazábal redesign with the only TrackMan range in Mallorca.', guideUrl: null },
  { name: 'Son Servera',        area: 'East',      peak: 125, low: 75,  buggy: '€38–€49',                       walking: 'yes',        walkingNote: 'Flat',                        handicap: 'yes', handicapNote: '36 + certificate',        nineHoles: false, verdict: "The island's second oldest club. Flat, walkable, and the €21 menu del día is honest value.", guideUrl: null },
  { name: "Vall d'Or",          area: 'East',      peak: 130, low: 80,  buggy: '€35–€50 (sensible)',            walking: 'restricted', walkingNote: 'Hilly',                       handicap: 'yes', handicapNote: '36',                      nineHoles: false, verdict: 'Two different nines: wooded and uphill going out, sea views coming home.', guideUrl: null },
  { name: 'La Reserva Rotana',  area: 'East',      peakText: 'Hotel guests', lowText: 'Included in stay', buggy: 'Not needed', walking: 'yes', walkingNote: '',                    handicap: 'yes', handicapNote: 'Certificate required',     nineHoles: true,  verdict: 'A private estate course for hotel guests. More escape than examination.', guideUrl: null },
]

const fmtFee = (num, text) => (text ? text : num ? `approx. €${num}` : 'approx. €XX')

function budgetBand(c) {
  if (!c.peak) return null
  if (c.peak < 80) return 'low'
  if (c.peak <= 130) return 'mid'
  return 'high'
}

function walkingLabel(c) {
  if (c.walking === 'yes') return { text: 'Yes', cls: '' }
  if (c.walking === 'no') return { text: 'Buggy only', cls: 'no' }
  return { text: c.walkingNote || 'Restricted', cls: 'gold' }
}

export default function GreenFeesClient() {
  const [area, setArea] = useState('')
  const [budget, setBudget] = useState('')
  const [walking, setWalking] = useState('')
  const [sort, setSort] = useState('name')
  const [dir, setDir] = useState(1)

  const rows = useMemo(() => {
    const list = COURSES.filter((c) => {
      if (area && c.area !== area) return false
      if (budget && budgetBand(c) !== budget) return false
      if (walking === 'yes' && c.walking !== 'yes') return false
      if (walking === 'buggy' && c.walking === 'yes') return false
      return true
    })
    list.sort((a, b) => {
      let r = 0
      if (sort === 'name') r = a.name.localeCompare(b.name)
      else if (sort === 'area') r = a.area.localeCompare(b.area) || a.name.localeCompare(b.name)
      else r = ((a.peak || 9999) - (b.peak || 9999)) || a.name.localeCompare(b.name)
      return r * dir
    })
    return list
  }, [area, budget, walking, sort, dir])

  function headerSort(key) {
    if (sort === key) setDir((d) => d * -1)
    else { setSort(key); setDir(1) }
  }
  function sortSelect(v) {
    setDir(v === 'price-desc' ? -1 : 1)
    setSort(v.startsWith('price') ? 'price' : v)
  }
  const arrow = (k) => (sort === k ? (dir === 1 ? '▲' : '▼') : '')

  const guideCell = (c) => c.guideUrl
    ? <Link className="gf-guide" href={c.guideUrl}>View full guide →</Link>
    : <span className="gf-guide" style={{ opacity: 0.45 }}>Guide coming soon</span>

  return (
    <div className="gf">
      <style>{`
        .gf { --pine:#2D4A3E; --pine-dark:#223A30; --gold:#B8973C; --cream:#F7F4EF; --row-alt:#EFEDE8;
          --deep:#1A1916; --muted:#6B6862; background:var(--cream); color:var(--deep); font-family:'Jost',sans-serif; }
        .gf-hero { background:var(--pine); padding:52px 24px 44px; text-align:center; color:#fff; }
        .gf-eyebrow { font-family:'Jost',sans-serif; font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:var(--gold); }
        .gf-hero h1 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500; font-size:clamp(1.9rem,4vw,2.8rem); margin:10px 0; }
        .gf-hero .sub { font-family:'Jost',sans-serif; font-weight:300; font-size:.95rem; color:rgba(255,255,255,.85); max-width:640px; margin:0 auto; line-height:1.6; }
        .gf-updated { display:inline-block; margin-top:18px; border:1px solid var(--gold); color:var(--gold); font-size:.75rem; letter-spacing:.1em; text-transform:uppercase; padding:6px 14px; border-radius:2px; }
        .gf-main { max-width:1100px; margin:0 auto; padding:32px 20px 80px; }
        .gf-disclaimer { background:#fff; border-left:3px solid var(--gold); padding:14px 18px; font-size:.88rem; color:var(--muted); line-height:1.6; margin-bottom:28px; border-radius:0 3px 3px 0; }
        .gf-filters { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end; margin-bottom:24px; }
        .gf-fg { display:flex; flex-direction:column; gap:5px; }
        .gf-fg label { font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); }
        .gf-fg select { font-family:'Jost',sans-serif; font-size:.9rem; padding:9px 12px; border:1px solid rgba(45,74,62,.3); border-radius:4px; background:#fff; color:var(--deep); min-width:150px; cursor:pointer; }
        .gf-fg select:focus { outline:2px solid var(--gold); outline-offset:1px; }
        .gf-count { font-size:.85rem; color:var(--muted); margin-left:auto; align-self:center; }
        .gf-table-wrap { background:#fff; border-radius:6px; overflow:hidden; box-shadow:0 2px 12px rgba(45,74,62,.08); }
        .gf table { width:100%; border-collapse:collapse; font-size:.88rem; }
        .gf thead th { background:var(--pine); color:#fff; font-weight:400; letter-spacing:.05em; text-transform:uppercase; font-size:.72rem; text-align:left; padding:14px 12px; cursor:pointer; user-select:none; white-space:nowrap; }
        .gf thead th .arw { color:var(--gold); font-size:.75rem; margin-left:4px; }
        .gf thead th:hover { background:var(--pine-dark); }
        .gf tbody td { padding:13px 12px; vertical-align:top; line-height:1.5; }
        .gf tbody tr:nth-child(odd) { background:var(--cream); }
        .gf tbody tr:nth-child(even) { background:var(--row-alt); }
        .gf tbody tr:hover { background:#F1EBDD; }
        .gf td.gf-course { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.08rem; font-weight:500; color:var(--pine); white-space:nowrap; }
        .gf-guide { display:block; font-family:'Jost',sans-serif; font-size:.75rem; margin-top:3px; color:var(--gold); text-decoration:none; letter-spacing:.03em; }
        a.gf-guide:hover { text-decoration:underline; }
        .gf .approx { color:var(--muted); font-size:.72rem; display:block; }
        .gf td.gf-verdict { font-style:italic; color:#4a463f; max-width:260px; min-width:200px; }
        .gf-pill { display:inline-block; font-size:.72rem; padding:2px 8px; border-radius:10px; background:rgba(45,74,62,.1); color:var(--pine); white-space:nowrap; }
        .gf-pill.no { background:rgba(160,60,40,.1); color:#8a3a26; }
        .gf-pill.gold { background:rgba(184,151,60,.15); color:#8a6f26; }
        .gf-cards { display:none; }
        .gf-card { background:#fff; border-radius:6px; padding:18px 18px 16px; margin-bottom:14px; box-shadow:0 2px 8px rgba(45,74,62,.08); border-top:3px solid var(--pine); }
        .gf-card h3 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500; font-size:1.25rem; color:var(--pine); margin-bottom:2px; }
        .gf-card .area-tag { font-size:.75rem; letter-spacing:.06em; text-transform:uppercase; color:var(--gold); margin-bottom:10px; }
        .gf-card .grid { display:grid; grid-template-columns:1fr 1fr; gap:8px 14px; font-size:.85rem; margin-bottom:10px; }
        .gf-card .grid .k { font-size:.68rem; letter-spacing:.06em; text-transform:uppercase; color:var(--muted); display:block; }
        .gf-card .v-line { font-style:italic; font-size:.87rem; color:#4a463f; border-top:1px solid rgba(45,74,62,.12); padding-top:10px; line-height:1.55; }
        .gf-card .gf-guide { display:inline-block; margin-top:8px; font-size:.8rem; }
        .gf-selcta { margin-top:40px; background:var(--pine); color:#fff; border-radius:6px; padding:32px 28px; text-align:center; }
        .gf-selcta h2 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:400; font-size:1.6rem; margin-bottom:8px; }
        .gf-selcta p { font-size:.9rem; color:rgba(255,255,255,.8); margin-bottom:18px; }
        .gf-selcta a { display:inline-block; background:var(--gold); color:#fff; text-decoration:none; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:11px 22px; border-radius:4px; transition:background .2s; }
        .gf-selcta a:hover { background:#a5862f; }
        .gf-foot { text-align:center; font-size:.78rem; color:var(--muted); margin-top:36px; line-height:1.6; }
        .gf-foot a { color:var(--gold); text-decoration:none; }
        @media (max-width:820px){ .gf-table-wrap { display:none; } .gf-cards { display:block; } .gf-count { width:100%; margin-left:0; } .gf-fg select { min-width:130px; } }
      `}</style>

      <section className="gf-hero">
        <span className="gf-eyebrow">Free tool</span>
        <h1>Mallorca Green Fee Comparison</h1>
        <p className="sub">All 24 courses on the island in one honest table: approximate green fees, buggy costs, walking rules and handicap requirements, with a one-line verdict from Andy, a UK PGA Advanced Professional based in Mallorca.</p>
        <div><span className="gf-updated">Last updated: July 2026</span></div>
      </section>

      <ToolTrustLine />

      <main className="gf-main">
        <div className="gf-disclaimer">
          <strong>Please note:</strong> Prices are approximate and change seasonally. Always confirm directly with the course before booking. Peak season on Mallorca generally runs March–May and September–November; low season is midsummer and midwinter.
        </div>

        <div className="gf-filters">
          <div className="gf-fg">
            <label htmlFor="f-area">Area</label>
            <select id="f-area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">All areas</option>
              <option value="Southwest">Southwest</option>
              <option value="Palma">Palma</option>
              <option value="North">North</option>
              <option value="East">East</option>
            </select>
          </div>
          <div className="gf-fg">
            <label htmlFor="f-budget">Peak budget</label>
            <select id="f-budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">Any budget</option>
              <option value="low">Under €80</option>
              <option value="mid">€80–€130</option>
              <option value="high">€130+</option>
            </select>
          </div>
          <div className="gf-fg">
            <label htmlFor="f-walking">Walking</label>
            <select id="f-walking" value={walking} onChange={(e) => setWalking(e.target.value)}>
              <option value="">Walking or buggy</option>
              <option value="yes">Walking allowed</option>
              <option value="buggy">Buggy only / restricted</option>
            </select>
          </div>
          <div className="gf-fg">
            <label htmlFor="f-sort">Sort by</label>
            <select id="f-sort" value={sort === 'price' ? (dir === -1 ? 'price-desc' : 'price-asc') : sort} onChange={(e) => sortSelect(e.target.value)}>
              <option value="name">Course name (A–Z)</option>
              <option value="price-asc">Peak price (low to high)</option>
              <option value="price-desc">Peak price (high to low)</option>
              <option value="area">Area</option>
            </select>
          </div>
          <span className="gf-count">Showing {rows.length} of {COURSES.length} courses</span>
        </div>

        <div className="gf-table-wrap">
          <table aria-label="Mallorca green fee comparison">
            <thead>
              <tr>
                <th onClick={() => headerSort('name')}>Course<span className="arw">{arrow('name')}</span></th>
                <th onClick={() => headerSort('area')}>Area<span className="arw">{arrow('area')}</span></th>
                <th onClick={() => headerSort('price')}>Peak fee<span className="arw">{arrow('price')}</span></th>
                <th>Low season</th>
                <th>Buggy</th>
                <th>Walking</th>
                <th>Handicap req.</th>
                <th>9 holes</th>
                <th>Andy&rsquo;s verdict</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => {
                const w = walkingLabel(c)
                return (
                  <tr key={c.name}>
                    <td className="gf-course">{c.name}{guideCell(c)}</td>
                    <td>{c.area}</td>
                    <td>{fmtFee(c.peak, c.peakText)}<span className="approx">peak season</span></td>
                    <td>{fmtFee(c.low, c.lowText)}<span className="approx">low season</span></td>
                    <td>{c.buggy}</td>
                    <td><span className={`gf-pill ${w.cls}`}>{w.text}</span></td>
                    <td>{c.handicap === 'yes'
                      ? <span className="gf-pill gold">{c.handicapNote || 'Yes'}</span>
                      : <span className="gf-pill">{c.handicapNote || 'No'}</span>}</td>
                    <td>{c.nineHoles ? <span className="gf-pill">Yes</span> : <span className="gf-pill no">No</span>}</td>
                    <td className="gf-verdict">{c.verdict}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="gf-cards">
          {rows.map((c) => {
            const w = walkingLabel(c)
            return (
              <div className="gf-card" key={c.name}>
                <h3>{c.name}</h3>
                <div className="area-tag">{c.area}</div>
                <div className="grid">
                  <div><span className="k">Peak fee</span>{fmtFee(c.peak, c.peakText)}</div>
                  <div><span className="k">Low season</span>{fmtFee(c.low, c.lowText)}</div>
                  <div><span className="k">Buggy</span>{c.buggy}</div>
                  <div><span className="k">Walking</span>{w.text}</div>
                  <div><span className="k">Handicap req.</span>{c.handicap === 'yes' ? (c.handicapNote || 'Yes') : (c.handicapNote || 'No')}</div>
                  <div><span className="k">9 holes</span>{c.nineHoles ? 'Yes' : 'No'}</div>
                </div>
                <div className="v-line">&ldquo;{c.verdict}&rdquo;</div>
                {c.guideUrl && <Link className="gf-guide" href={c.guideUrl}>View full guide →</Link>}
              </div>
            )
          })}
        </div>

        <div className="gf-selcta">
          <h2>Not sure which course fits your group?</h2>
          <p>Answer a few quick questions and get a shortlist matched to your handicap, budget and travel plans.</p>
          <Link href="/tools/course-selector">Try the course selector →</Link>
        </div>

        <footer className="gf-foot">
          Green fee ranges are indicative only and are updated periodically from course rate cards.<br />
          For confirmed rates, tee time availability, or help planning a full golf trip, <Link href="/contact">get in touch with Andy</Link>.
        </footer>
      </main>
    </div>
  )
}
