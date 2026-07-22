'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import ToolTrustLine from '../../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../../lib/analytics'
import { getCourseAccessByName, getCourseAccessTypeLabel } from '../../../../lib/course-access-data'
import { getCoursePricingByName } from '../../../../lib/course-pricing-data'
import { getCourseLogisticsByName } from '../../../../lib/course-logistics-data'
import { getCourseShortName, findCourseByName } from '../../../../lib/golf-courses-helpers'
import { getScorecardByCourseName } from '../../../../lib/scorecard-data'

const WA_MESSAGE = 'Hi Andy, I was comparing green fees on your site and I’d like help planning a Mallorca golf trip and tee times.'
const WA_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_MESSAGE)}`

function WhatsAppCta({ label = 'Message Andy on WhatsApp' }) {
  function handleClick() {
    trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'green-fees' })
    trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'green-fees' })
  }
  return (
    <a className="btn-wa" data-analytics-manual="true" href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17, flexShrink: 0 }} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

/* =====================================================================
   EDITORIAL COURSE DATA — verdicts and guide links may stay local here.
   Prices, access, handicap/certificate rules, buggy guidance and walking
   rules are overlaid from the generated MMG masters below.
   ===================================================================== */
const BASE_COURSES = [
  { name: 'Son Gual',           area: 'Palma',     peak: 165, low: 115, buggy: '€45',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '28M / 36L', certRequired: true, nineHoles: false, verdict: 'My most-played course on the island. The wind is fickle, the greens are quick, and the closing stretch is as good as anything in Mallorca.', guideUrl: '/guides/son-gual-review' },
  { name: 'Alcanada',           area: 'North',     peak: 220, low: 115, buggy: '€48 with GPS',                  walking: 'restricted', walkingNote: 'Hilly',                      handicap: 'yes', handicapNote: '33M / 35L', certRequired: true, nineHoles: false, verdict: 'The lighthouse is visible from 16 of the 18 holes. The course I take people to when I want them to remember one round in particular.', guideUrl: '/guides/alcanada-review' },
  { name: 'T Golf Calvià',      area: 'Southwest', peak: 210, low: 80,  buggy: '€40',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '28M / 34L', certRequired: true, nineHoles: false, verdict: 'One of the best-conditioned courses I have played in Mallorca. Fifteen lakes keep water in play mentally all day.', guideUrl: '/guides/t-golf-calvia-review' },
  { name: 'Son Muntaner',       area: 'Palma',     peak: 260, low: 110, buggy: 'Included',                      walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'Named Best Golf Course in Spain 2025, and the conditioning backs the title up. One of the premium Palma rounds, with daily licence on top.', guideUrl: '/guides/son-muntaner-review' },
  { name: 'Son Vida',           area: 'Palma',     peak: 190, low: 85,  buggy: '€48–€60',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: "The island's oldest course. Short and tight rather than long, ten minutes from the city.", guideUrl: null },
  { name: 'Son Quint',          area: 'Palma',     peak: 172, low: 70,  buggy: '€48–€60',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'The 8th tee faces straight at Palma Cathedral. Wide, forgiving fairways suit a relaxed round.', guideUrl: null },
  { name: 'T Golf Palma Puntiró', area: 'Palma',   peak: 150, low: 105, buggy: '€40',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '28M / 34L', certRequired: true, nineHoles: false, verdict: "The only Nicklaus design in Mallorca, with a 42-bay range that makes it the island's best practice hub.", guideUrl: null },
  { name: 'Palma Pitch & Putt', area: 'Palma',     peak: 30,  low: 20,  buggy: 'Not needed',                    walking: 'yes',        walkingNote: '',                            handicap: 'no',  handicapNote: 'None', certRequired: false, nineHoles: true,  verdict: 'The natural starting point for beginners and juniors, a useful warm-up, or a low-pressure way for a non-golfer to try the game.', guideUrl: null },
  { name: 'Santa Ponsa I',      area: 'Southwest', peak: 126, low: 77,  buggy: '€43',                          walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '28M / 36L', certRequired: true, nineHoles: false, verdict: 'The open fairways here helped me get my own driving confidence back. The 590m 10th is one of the longest par 5s in Europe.', guideUrl: '/guides/santa-ponsa-1-review' },
  { name: 'Santa Ponsa II',     area: 'Southwest', peak: 88, low: 65, buggy: '€38 · Optional', walking: 'yes', walkingNote: '', handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'Quieter and more strategic than Santa Ponsa 1. The 18th green is shaped like Mallorca itself.', guideUrl: null },
  { name: 'Santa Ponsa III',    area: 'Southwest', peak: 30, low: 25, buggy: '€38 · Optional', walking: 'yes', walkingNote: '', handicap: 'no', handicapNote: 'None', certRequired: false, nineHoles: true, verdict: 'Most holes are short, but the second still asks for a precise tee shot. Best for beginners, approach practice, or a quick extra nine.', guideUrl: null },
  { name: 'Golf de Andratx',    area: 'Southwest', peak: 140, low: 90,  buggy: '€45 (morning)',                 walking: 'restricted', walkingNote: 'Walkable afternoon',         handicap: 'yes', handicapNote: '28M / 36L', certRequired: true, nineHoles: false, verdict: 'Home to the longest par 5 in Spain and the best sea views on the island. Bring plenty of golf balls.', guideUrl: '/guides/golf-andratx-review' },
  { name: 'Bendinat',           area: 'Southwest', peak: 123, low: 74,  buggy: '€33–€43',                       walking: 'restricted', walkingNote: 'Hilly',                     handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'Castle views and real hills. Take the buggy and enjoy it.', guideUrl: null },
  { name: 'Maioris',            area: 'Palma',     peak: 110, low: 91,  buggy: '€36–€47',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'Less crowded than many Palma courses, with two significant climbs waiting in the closing holes.', guideUrl: null },
  { name: 'Son Antem East',     area: 'Palma',     peak: 140, low: 105, buggy: '€48',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '54', certRequired: false, nineHoles: false, verdict: 'Wide, generous fairways make this the friendlier Antem course, while five lakes keep the round interesting.', guideUrl: null },
  { name: 'Son Antem West',     area: 'Palma',     peak: 145, low: 109, buggy: '€48',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '27M / 35L', certRequired: true, nineHoles: false, verdict: 'Flat and forgiving, and the tree-lined 16th is worth the round alone. Expect queues at busy times.', guideUrl: '/guides/son-antem-west-review' },
  { name: 'Son Termes',         area: 'Palma',     peak: 100, low: 80,  buggy: 'Bundled',                       walking: 'restricted', walkingNote: 'Front flat, back steep', handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'The back nine has the best mountain views this close to Palma, but the climbs make it a much tougher walk than the front.', guideUrl: '/guides/son-termes-review' },
  { name: 'Pollensa',           area: 'North',     peak: 65,  low: 55,  buggy: '€25–€35',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: true,  verdict: 'A compact nine-hole option under the Tramuntana mountains, with a few proper climbs despite the short format.', guideUrl: null },
  { name: 'Capdepera',          area: 'East',      peak: 125, low: 79,  buggy: '€35–€45',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'The 15th is stroke index 1 and was voted the best hole on the island. Rafa Nadal plays here regularly.', guideUrl: null },
  { name: 'Canyamel',           area: 'East',      peak: 145, low: 85,  buggy: '€30–€45',                       walking: 'restricted', walkingNote: 'Front hilly', handicap: 'yes', handicapNote: '36M / 45L', certRequired: true, nineHoles: false, verdict: 'A José Gancedo design with lakes throughout. Tee off before 8:50am and the early-bird rate saves a decent amount.', guideUrl: null },
  { name: 'Pula',               area: 'East',      peak: 145, low: 69,  buggy: '€45',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '34M / 36L', certRequired: true, nineHoles: false, verdict: 'An Olazábal redesign with a two-level range and strong short-game facilities. A good choice for a practice-heavy golf day.', guideUrl: null },
  { name: 'Son Servera',        area: 'East',      peak: 145, low: 80,  buggy: '€38–€49',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: "The island's second oldest club. Flat, walkable, and the €21 menu del día is honest value.", guideUrl: null },
  { name: "Vall d'Or",          area: 'East',      peak: 132, low: 99,  buggy: '€35–€50',                       walking: 'restricted', walkingNote: 'Hilly',                      handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'Two different nines: wooded and uphill going out, sea views coming home.', guideUrl: null },
  { name: 'La Reserva Rotana',  area: 'East',      peakText: 'Hotel', lowText: 'Incl.', buggy: 'Not needed', walking: 'yes', walkingNote: '',                    handicap: 'yes', handicapNote: 'Cert req.', certRequired: true, nineHoles: true,  verdict: 'A quiet nine-hole estate course. More of a relaxed hotel round than a course to build the trip around.', guideUrl: null },
]

// Buggy guidance text comes straight from the master (course-logistics-data.js,
// synced from the pricing sheet + course-logistics.json). Reduce it to a short
// tag rather than showing the full sentence in a table cell.
function buggyTag(guidance) {
  if (!guidance) return null
  const g = guidance.toLowerCase()
  // Check 'recommended' first: some guidance reads "recommended... but not
  // essential", where a plain essential-substring match would invert the meaning.
  if (g.includes('recommended') || g.includes('required if')) return 'Recommended'
  if (g.includes('essential')) return 'Essential'
  if (g.includes('optional')) return 'Optional'
  if (g.includes('no buggy needed')) return 'Not needed'
  return null
}

function formatBuggyDisplay(logistics, fallback) {
  if (!logistics) return fallback
  if (logistics.buggyIncl) return 'Included'
  const tag = buggyTag(logistics.buggyGuidance)
  if (!logistics.buggy) return tag || 'Not needed'
  return tag ? `€${logistics.buggy} · ${tag}` : `€${logistics.buggy}`
}

const COURSES = BASE_COURSES.map((course) => {
  const access = getCourseAccessByName(course.name)
  const pricing = getCoursePricingByName(course.name)
  const logistics = getCourseLogisticsByName(course.name)

  return {
    ...course,
    peak: pricing?.peak ?? course.peak,
    low: pricing?.low ?? course.low,
    feeMode: pricing?.feeMode || null,
    dynamicPricing: Boolean(pricing?.dynamic),
    handicap: access?.handicapRequired || access?.certificateRequired ? 'yes' : 'no',
    handicapMen: access?.handicapMen ?? null,
    handicapWomen: access?.handicapWomen ?? null,
    handicapRequired: access ? Boolean(access.handicapRequired) : course.handicap === 'yes',
    nineHoles: access ? access.holes === 9 : course.nineHoles,
    certRequired: access ? Boolean(access.certificateRequired) : course.certRequired,
    accessType: access?.accessType || 'public',
    buggy: formatBuggyDisplay(logistics, course.buggy),
    walking: typeof logistics?.walkAllowed === 'boolean' ? (logistics.walkAllowed ? 'yes' : 'no') : course.walking,
    walkingNote: '',
  }
})

function displayCourseName(name) {
  return getCourseShortName(name)
}

const fmtFee = (num, text) => (text ? text : num ? `€${num}` : '-')

function budgetBand(c) {
  if (!c.peak) return null
  if (c.peak < 80) return 'low'
  if (c.peak <= 130) return 'mid'
  return 'high'
}

function walkableLabel(c) {
  if (c.walking === 'yes') return { text: 'Yes', cls: '' }
  if (c.walking === 'no') return { text: 'No', cls: 'no' }
  return { text: c.walkingNote || 'Restricted', cls: 'gold' }
}

function handicapDisplay(c) {
  if (!c.handicapRequired) return { text: 'No handicap limit', certificate: false, cls: '' }
  const sameLimit = Number.isFinite(c.handicapMen) && c.handicapMen === c.handicapWomen
  let text = 'Handicap required'
  if (sameLimit) text = `Max ${c.handicapMen}`
  else if (Number.isFinite(c.handicapMen) && Number.isFinite(c.handicapWomen)) text = `Max ${c.handicapMen} men / ${c.handicapWomen} women`
  else if (Number.isFinite(c.handicapMen)) text = `Max ${c.handicapMen} men`
  else if (Number.isFinite(c.handicapWomen)) text = `Max ${c.handicapWomen} women`
  return { text, certificate: c.certRequired, cls: '' }
}

function accessDisplay(c) {
  return {
    text: getCourseAccessTypeLabel(c),
    cls: c.accessType === 'public' ? '' : 'gold',
  }
}

function feeDisplay(c, season) {
  if (c.feeMode === 'pitch_putt') {
    return season === 'peak'
      ? { text: fmtFee(c.peak), note: '18 holes, not seasonal' }
      : { text: fmtFee(c.low), note: '9 holes, not seasonal' }
  }
  if (c.feeMode === 'hotel_only') return { text: 'Included', note: 'Hotel guests' }
  return {
    text: fmtFee(c[season], Number.isFinite(c[season]) ? null : (season === 'peak' ? c.peakText : c.lowText)),
    note: c.dynamicPricing ? 'Variable rate' : '',
  }
}

function FeeCell({ course, season }) {
  const fee = feeDisplay(course, season)
  return <>{fee.text}{fee.note && <span className="approx">{fee.note}</span>}</>
}

export default function GreenFeesClient() {
  const [area, setArea] = useState('')
  const [budget, setBudget] = useState('')
  const [walking, setWalking] = useState('')
  const [sort, setSort] = useState('name')
  const [dir, setDir] = useState(1)
  const [mode, setMode] = useState('table')
  const [cmp, setCmp] = useState(['Son Gual', 'Alcanada', '', '', ''])

  // findCourseByName is fuzzy but can't bridge Roman-vs-Arabic numerals or the
  // Pollensa/Pollença spelling. Map those few to their canonical data names.
  const COMPARE_NAME_FIX = {
    'Santa Ponsa I': 'Golf Santa Ponsa 1',
    'Santa Ponsa II': 'Golf Santa Ponsa 2',
    'Santa Ponsa III': 'Golf Santa Ponsa 3',
    Pollensa: 'Golf Pollença',
  }

  const compareData = useMemo(() => {
    const byName = {}
    COURSES.forEach((c) => {
      const listing = findCourseByName(COMPARE_NAME_FIX[c.name] || c.name)
      const scorecard = listing ? getScorecardByCourseName(listing.name) : null
      byName[c.name] = {
        ...c,
        location: listing?.location || c.area,
        par: scorecard?.par ?? null,
        diffScore: listing?.diffScore ?? null,
      }
    })
    return byName
  }, [])

  const compared = useMemo(
    () => cmp.map((n) => compareData[n]).filter(Boolean),
    [cmp, compareData],
  )

  function changeCompare(index, name) {
    setCmp((prev) => {
      const next = [...prev]
      next[index] = name
      return next
    })
  }

  const compareRows = [
    { label: "Location", get: (c) => c.location || "-" },
    { label: "Par", get: (c) => (c.par ? `Par ${c.par}` : "-") },
    { label: "Difficulty", get: (c) => c.diffScore || "-" },
    { label: "Holes", get: (c) => (c.nineHoles ? "9" : "18") },
    { label: "Peak-season fee", get: (c) => `${feeDisplay(c, 'peak').text}${feeDisplay(c, 'peak').note ? ` · ${feeDisplay(c, 'peak').note}` : ''}` },
    { label: "Low-season fee", get: (c) => `${feeDisplay(c, 'low').text}${feeDisplay(c, 'low').note ? ` · ${feeDisplay(c, 'low').note}` : ''}` },
    { label: "Access", get: (c) => accessDisplay(c).text },
    { label: "Buggy", get: (c) => c.buggy || "-" },
    { label: "Walkable", get: (c) => walkableLabel(c).text },
    { label: "Handicap limit", get: (c) => `${handicapDisplay(c).text}${handicapDisplay(c).certificate ? '*' : ''}` },
    { label: "Andy’s verdict", get: (c) => c.verdict || "-" },
    { label: "Course guide", get: (c) => c.guideUrl ? <Link className="gf-guide" href={c.guideUrl}>View full guide →</Link> : <span style={{ color: 'var(--muted)' }}>Coming soon</span> },
  ]

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
      if (sort === 'name') r = displayCourseName(a.name).localeCompare(displayCourseName(b.name))
      else if (sort === 'area') r = a.area.localeCompare(b.area) || displayCourseName(a.name).localeCompare(displayCourseName(b.name))
      else if (sort === 'peak' || sort === 'low') {
        const av = Number.isFinite(a[sort]) ? a[sort] : null
        const bv = Number.isFinite(b[sort]) ? b[sort] : null
        if (av === null && bv !== null) return 1
        if (av !== null && bv === null) return -1
        r = (av - bv) || displayCourseName(a.name).localeCompare(displayCourseName(b.name))
      }
      return r * dir
    })
    return list
  }, [area, budget, walking, sort, dir])

  function headerSort(key) {
    if (sort === key) setDir((d) => d * -1)
    else { setSort(key); setDir(1) }
  }
  function sortSelect(v) {
    setDir(v.endsWith('-desc') ? -1 : 1)
    setSort(v.replace(/-(asc|desc)$/, ''))
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
        .gf-table-wrap { background:#fff; border-radius:6px; overflow:visible; box-shadow:0 2px 12px rgba(45,74,62,.08); }
        .gf table { width:100%; table-layout:fixed; border-collapse:collapse; font-size:.88rem; }
        .gf thead th { position:sticky; top:var(--nav-h); z-index:5; background:var(--pine); color:#fff; font-weight:400; letter-spacing:.05em; text-transform:uppercase; font-size:.72rem; text-align:left; padding:0; }
        .gf thead th:nth-child(1) { width:15%; } .gf thead th:nth-child(2) { width:7%; } .gf thead th:nth-child(3), .gf thead th:nth-child(4) { width:8%; }
        .gf thead th:nth-child(5) { width:11%; } .gf thead th:nth-child(6) { width:9%; } .gf thead th:nth-child(7) { width:8%; } .gf thead th:nth-child(8) { width:14%; } .gf thead th:nth-child(9) { width:20%; }
        .gf thead th:not(.is-sortable) { padding:12px 10px; }
        .gf-sort { width:100%; min-height:42px; display:flex; align-items:center; border:0; background:transparent; color:inherit; font:inherit; letter-spacing:inherit; text-transform:inherit; padding:10px; cursor:pointer; text-align:left; }
        .gf-sort:focus-visible { outline:2px solid var(--gold); outline-offset:-3px; }
        .gf thead th .arw { color:var(--gold); font-size:.75rem; margin-left:4px; }
        .gf thead th:hover { background:var(--pine-dark); }
        .gf tbody td { padding:11px 10px; vertical-align:top; line-height:1.5; }
        .gf tbody tr:nth-child(odd) { background:var(--cream); }
        .gf tbody tr:nth-child(even) { background:var(--row-alt); }
        .gf tbody tr:hover { background:#F1EBDD; }
        .gf td.gf-course { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.08rem; font-weight:500; color:var(--pine); }
        .gf-9h { display:block; font-family:'Jost',sans-serif; font-size:.66rem; letter-spacing:.05em; text-transform:uppercase; color:var(--muted); margin-top:3px; }
        .gf-guide { display:block; font-family:'Jost',sans-serif; font-size:.75rem; margin-top:3px; color:var(--gold); text-decoration:none; letter-spacing:.03em; }
        a.gf-guide:hover { text-decoration:underline; }
        .gf .approx { color:var(--muted); font-size:.72rem; display:block; }
        .gf td.gf-verdict { font-style:italic; color:#4a463f; max-width:240px; min-width:180px; padding-right:16px; }
        .gf-pill { display:inline-block; box-sizing:border-box; max-width:100%; font-size:.72rem; line-height:1.35; padding:2px 8px; border-radius:10px; background:rgba(45,74,62,.1); color:var(--pine); white-space:normal; overflow-wrap:anywhere; }
        .gf-pill.no { background:rgba(160,60,40,.1); color:#8a3a26; }
        .gf-pill.gold { background:rgba(184,151,60,.15); color:#8a6f26; }
        .gf-footnote { font-size:.76rem; color:var(--muted); line-height:1.5; margin:12px 2px 0; }
        .gf-reset { min-height:40px; border:1px solid rgba(45,74,62,.3); border-radius:4px; background:transparent; color:var(--pine); padding:8px 12px; font-family:'Jost',sans-serif; font-size:.82rem; cursor:pointer; }
        .gf-reset:hover { background:#fff; }
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
        .gf-contact { margin-top:16px; background:var(--pine-dark); color:#fff; border-radius:6px; padding:28px; text-align:center; }
        .gf-contact h2 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:400; font-size:1.5rem; margin-bottom:8px; }
        .gf-contact p { font-size:.9rem; color:rgba(255,255,255,.82); margin-bottom:18px; line-height:1.6; }
        .gf-cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .gf-contact a.btn-gold { display:inline-block; background:var(--gold); color:#fff; text-decoration:none; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:12px 22px; border-radius:4px; transition:background .2s; }
        .gf-contact a.btn-gold:hover { background:#a5862f; }
        .btn-wa { display:inline-flex; align-items:center; gap:9px; background:#25D366; color:#fff; text-decoration:none; font-family:'Jost',sans-serif; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:12px 22px; border-radius:4px; transition:background .2s; }
        .btn-wa:hover { background:#1eb858; }
        .gf-foot { text-align:center; font-size:.78rem; color:var(--muted); margin-top:36px; line-height:1.6; }
        .gf-foot a { color:var(--gold); text-decoration:none; }
        .gf-modebar { background:var(--cream); padding:18px 20px 0; }
        .gf-modebar__inner { max-width:1100px; margin:0 auto; display:flex; gap:6px; border-bottom:1px solid rgba(45,74,62,.15); }
        .gf-mode { font-family:'Jost',sans-serif; font-size:.85rem; letter-spacing:.04em; padding:12px 20px; background:none; border:none; border-bottom:2px solid transparent; color:var(--muted); cursor:pointer; margin-bottom:-1px; }
        .gf-mode.is-active { color:var(--pine); border-bottom-color:var(--gold); font-weight:500; }
        .gf-mode:hover { color:var(--pine); }
        .gf-compare__intro { font-size:.9rem; color:var(--muted); line-height:1.6; margin-bottom:20px; }
        .gf-compare__pickers { display:flex; flex-wrap:wrap; gap:14px; margin-bottom:24px; }
        .gf-compare__pickers .gf-fg select { min-width:200px; }
        .gf-compare__table { overflow-x:auto; }
        .gf-compare__table table { table-layout:fixed; }
        .gf-compare__table thead th { position:sticky; top:var(--nav-h); z-index:3; width:auto; }
        .gf-compare__table thead th:first-child { left:0; z-index:4; width:130px; }
        .gf-compare__label { position:sticky; left:0; z-index:2; width:130px; font-weight:500; color:var(--pine); background:var(--cream); white-space:nowrap; box-shadow:1px 0 rgba(45,74,62,.12); }
        @media (max-width:820px){ .gf-table-wrap { display:none; } .gf-cards { display:block; } .gf-count { width:100%; margin-left:0; } .gf-fg select { min-width:130px; } .gf-compare .gf-table-wrap { display:block; } .gf-compare__pickers .gf-fg select { min-width:140px; } }
      `}</style>

      <section className="gf-hero">
        <span className="gf-eyebrow">Free tool</span>
        <h1>Compare Mallorca Golf Courses</h1>
        <p className="sub">All 24 courses on the island: green fees, buggy costs, walking rules, access, difficulty and handicap limits, plus a one-line verdict from Andy, a UK PGA Advanced Professional based in Mallorca. Browse the full guide or compare up to five courses side by side.</p>
        <div><span className="gf-updated">Last updated: July 2026</span></div>
      </section>

      <div className="gf-modebar">
        <div className="gf-modebar__inner" role="tablist" aria-label="Comparison mode">
          <button type="button" role="tab" aria-selected={mode === 'table'} className={`gf-mode${mode === 'table' ? ' is-active' : ''}`} onClick={() => setMode('table')}>
            All 24 courses
          </button>
          <button type="button" role="tab" aria-selected={mode === 'compare'} className={`gf-mode${mode === 'compare' ? ' is-active' : ''}`} onClick={() => setMode('compare')}>
            Head-to-head (up to 5)
          </button>
        </div>
      </div>

      <ToolTrustLine />

      <main className="gf-main">
        <div className="gf-disclaimer">
          <strong>Planning prices:</strong> Peak season is generally March–May and September–November; low season is usually midsummer and midwinter. <strong>Variable rate</strong> means the course changes its price by demand, tee time, availability and how early you book, much like flights or hotels. Confirm the exact rate for your date before booking.
        </div>

        {mode === 'table' && (
        <>
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
            <label htmlFor="f-budget">Peak-season budget</label>
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
            <select id="f-sort" value={sort === 'peak' || sort === 'low' ? `${sort}-${dir === -1 ? 'desc' : 'asc'}` : sort} onChange={(e) => sortSelect(e.target.value)}>
              <option value="name">Course name (A–Z)</option>
              <option value="peak-asc">Peak-season fee (low to high)</option>
              <option value="peak-desc">Peak-season fee (high to low)</option>
              <option value="low-asc">Low-season fee (low to high)</option>
              <option value="low-desc">Low-season fee (high to low)</option>
              <option value="area">Area</option>
            </select>
          </div>
          {(area || budget || walking || sort !== 'name' || dir !== 1) && (
            <button type="button" className="gf-reset" onClick={() => { setArea(''); setBudget(''); setWalking(''); setSort('name'); setDir(1) }}>Reset filters</button>
          )}
          <span className="gf-count">Showing {rows.length} of {COURSES.length} courses</span>
        </div>

        <div className="gf-table-wrap">
          <table aria-label="Mallorca green fee comparison">
            <thead>
              <tr>
                <th className="is-sortable" aria-sort={sort === 'name' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('name')}>Course<span className="arw">{arrow('name')}</span></button></th>
                <th className="is-sortable" aria-sort={sort === 'area' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('area')}>Area<span className="arw">{arrow('area')}</span></button></th>
                <th className="is-sortable" aria-sort={sort === 'peak' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('peak')}>Peak-season fee<span className="arw">{arrow('peak')}</span></button></th>
                <th className="is-sortable" aria-sort={sort === 'low' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('low')}>Low-season fee<span className="arw">{arrow('low')}</span></button></th>
                <th>Access</th>
                <th>Buggy</th>
                <th>Walkable</th>
                <th>Handicap limit</th>
                <th>Andy&rsquo;s verdict</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => {
                const w = walkableLabel(c)
                const h = handicapDisplay(c)
                const a = accessDisplay(c)
                return (
                  <tr key={c.name}>
                    <td className="gf-course">{displayCourseName(c.name)}{c.nineHoles && <span className="gf-9h">9-hole course</span>}{guideCell(c)}</td>
                    <td>{c.area}</td>
                    <td><FeeCell course={c} season="peak" /></td>
                    <td><FeeCell course={c} season="low" /></td>
                    <td><span className={`gf-pill ${a.cls}`}>{a.text}</span></td>
                    <td>{c.buggy}</td>
                    <td><span className={`gf-pill ${w.cls}`}>{w.text}</span></td>
                    <td><span className={`gf-pill ${h.cls}`}>{h.text}{h.certificate && <sup>*</sup>}</span></td>
                    <td className="gf-verdict">{c.verdict}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="gf-cards">
          {rows.map((c) => {
            const w = walkableLabel(c)
            const h = handicapDisplay(c)
            const a = accessDisplay(c)
            return (
              <div className="gf-card" key={c.name}>
                <h3>{displayCourseName(c.name)}</h3>
                <div className="area-tag">{c.area}{c.nineHoles ? ' · 9-hole course' : ''}</div>
                <div className="grid">
                  <div><span className="k">Peak-season fee</span><FeeCell course={c} season="peak" /></div>
                  <div><span className="k">Low-season fee</span><FeeCell course={c} season="low" /></div>
                  <div><span className="k">Access</span>{a.text}</div>
                  <div><span className="k">Buggy</span>{c.buggy}</div>
                  <div><span className="k">Walkable</span>{w.text}</div>
                  <div><span className="k">Handicap limit</span>{h.text}{h.certificate && <sup>*</sup>}</div>
                </div>
                <div className="v-line">&ldquo;{c.verdict}&rdquo;</div>
                {c.guideUrl && <Link className="gf-guide" href={c.guideUrl}>View full guide →</Link>}
              </div>
            )
          })}
        </div>
        <p className="gf-footnote">* Valid handicap certificate required.</p>
        </>
        )}

        {mode === 'compare' && (
          <div className="gf-compare">
            <p className="gf-compare__intro">Choose two to five courses for a direct side-by-side check. On a phone, scroll the table sideways; the row labels stay visible.</p>
            <div className="gf-compare__pickers">
              {[0, 1, 2, 3, 4].map((i) => (
                <div className="gf-fg" key={i}>
                  <label htmlFor={`cmp-${i}`}>Course {i + 1}{i > 1 ? ' (optional)' : ''}</label>
                  <select id={`cmp-${i}`} value={cmp[i] || ''} onChange={(e) => changeCompare(i, e.target.value)}>
                    <option value="">{i > 1 ? `Add course ${i + 1}…` : 'Select a course…'}</option>
                    {COURSES.map((c) => (
                      <option key={c.name} value={c.name} disabled={cmp.includes(c.name) && cmp[i] !== c.name}>{displayCourseName(c.name)}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {compared.length > 0 && (
              <div className="gf-table-wrap gf-compare__table" role="region" aria-label="Scrollable course comparison" tabIndex="0">
                <table aria-label="Head-to-head course comparison" aria-describedby="gf-compare-note" style={{ minWidth: Math.max(760, 130 + compared.length * 200) }}>
                  <thead>
                    <tr>
                      <th />
                      {compared.map((c, i) => (
                        <th key={`ch-${i}`}>{displayCourseName(c.name)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row) => (
                      <tr key={row.label}>
                        <td className="gf-compare__label">{row.label}</td>
                        {compared.map((c, i) => (
                          <td key={`${row.label}-${i}`} className={row.label === 'Andy’s verdict' ? 'gf-verdict' : ''}>{row.get(c)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="gf-footnote" id="gf-compare-note">* Valid handicap certificate required.</p>
          </div>
        )}

        <div className="gf-selcta">
          <h2>Not sure which course fits your group?</h2>
          <p>Answer a few quick questions and get a shortlist matched to your handicap, budget and travel plans.</p>
          <Link href="/tools/course-selector">Try the course selector →</Link>
        </div>

        <div className="gf-contact">
          <h2>Want Andy to sort the tee times?</h2>
          <p>Confirmed rates change by season and day. Tell me your dates and group and I&rsquo;ll get you real prices and book it around your golf — or just message me if that&rsquo;s easier.</p>
          <div className="gf-cta-btns">
            <Link className="btn-gold" href="/contact">Enquire</Link>
            <WhatsAppCta />
          </div>
        </div>

        <footer className="gf-foot">
          Green fee ranges are indicative only and are updated periodically from course rate cards.<br />
          For confirmed rates, tee time availability, or help planning a full golf trip, <Link href="/contact">get in touch with Andy</Link>.
        </footer>
      </main>
    </div>
  )
}
