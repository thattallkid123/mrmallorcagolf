'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import ToolTrustLine from '../../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../../lib/analytics'
import { getCourseAccessByName } from '../../../../lib/course-access-data'
import { getCoursePricingByName } from '../../../../lib/course-pricing-data'
import { getCourseLogisticsByName } from '../../../../lib/course-logistics-data'
import { getCourseShortName, findCourseByName } from '../../../../lib/golf-courses-helpers'
import { getScorecardByCourseName } from '../../../../lib/scorecard-data'
import { getGreenFeesT } from '../../../../lib/green-fees-translations'

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
  { name: 'Alcanada',           area: 'North',     peak: 230, low: 115, buggy: '€48 with GPS',                  walking: 'restricted', walkingNote: 'Hilly',                      handicap: 'yes', handicapNote: '33M / 35L', certRequired: true, nineHoles: false, verdict: 'The lighthouse is visible from 16 of the 18 holes. The course I take people to when I want them to remember one round in particular.', guideUrl: '/guides/alcanada-review' },
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
  { name: 'Son Termes',         area: 'Palma',     peak: 110, low: 90,  buggy: 'Bundled',                       walking: 'restricted', walkingNote: 'Front flat, back steep', handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'The back nine has the best mountain views this close to Palma, but the climbs make it a much tougher walk than the front.', guideUrl: '/guides/son-termes-review' },
  { name: 'Pollensa',           area: 'North',     peak: 75,  low: 65,  buggy: '€25–€35',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: true,  verdict: 'A compact nine-hole option under the Tramuntana mountains, with a few proper climbs despite the short format.', guideUrl: null },
  { name: 'Capdepera',          area: 'East',      peak: 125, low: 79,  buggy: '€35–€45',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'The 15th is stroke index 1 and was voted the best hole on the island. Rafa Nadal plays here regularly.', guideUrl: null },
  { name: 'Canyamel',           area: 'East',      peak: 145, low: 85,  buggy: '€30–€45',                       walking: 'restricted', walkingNote: 'Front hilly', handicap: 'yes', handicapNote: '36M / 45L', certRequired: true, nineHoles: false, verdict: 'A José Gancedo design with lakes throughout. Tee off before 8:50am and the early-bird rate saves a decent amount.', guideUrl: null },
  { name: 'Pula',               area: 'East',      peak: 145, low: 69,  buggy: '€45',                           walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '34M / 36L', certRequired: true, nineHoles: false, verdict: 'An Olazábal redesign with a two-level range and strong short-game facilities. A good choice for a practice-heavy golf day.', guideUrl: null },
  { name: 'Son Servera',        area: 'East',      peak: 145, low: 80,  buggy: '€38–€49',                       walking: 'yes',        walkingNote: '',                            handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: "The island's second oldest club. Flat, walkable, and the €21 menu del día is honest value.", guideUrl: null },
  { name: "Vall d'Or",          area: 'East',      peak: 132, low: 99,  buggy: '€35–€50',                       walking: 'restricted', walkingNote: 'Hilly',                      handicap: 'yes', handicapNote: '36', certRequired: true, nineHoles: false, verdict: 'Two different nines: wooded and uphill going out, sea views coming home.', guideUrl: null },
  { name: 'La Reserva Rotana',  area: 'East',      peakText: 'Hotel', lowText: 'Incl.', buggy: 'Not needed', walking: 'yes', walkingNote: '',                    handicap: 'yes', handicapNote: 'Cert req.', certRequired: true, nineHoles: true,  verdict: 'A quiet nine-hole estate course. More of a relaxed hotel round than a course to build the trip around.', guideUrl: null },
]

// Buggy guidance text comes straight from the master (course-logistics-data.js,
// synced from the pricing sheet + course-logistics.json). Reduce it to a short
// tag key (translated at render time) rather than showing the full sentence.
function buggyTagKey(guidance) {
  if (!guidance) return null
  const g = guidance.toLowerCase()
  // Check 'recommended' first: some guidance reads "recommended... but not
  // essential", where a plain essential-substring match would invert the meaning.
  if (g.includes('recommended') || g.includes('required if')) return 'recommended'
  if (g.includes('essential')) return 'essential'
  if (g.includes('optional')) return 'optional'
  if (g.includes('no buggy needed')) return 'notNeeded'
  return null
}

// Returns a structured descriptor rather than a formatted string, since the
// tag words need translating at render time (this runs at module load,
// before a locale's `t` exists).
function buggyData(logistics, fallbackText) {
  if (!logistics) return { mode: 'fallback', fallbackText }
  if (logistics.buggyIncl) return { mode: 'included' }
  const tagKey = buggyTagKey(logistics.buggyGuidance)
  if (!logistics.buggy) return { mode: 'notNeeded', tagKey }
  return { mode: 'priced', price: logistics.buggy, tagKey }
}

function buggyDisplay(data, t) {
  if (!data) return '-'
  if (data.mode === 'fallback') return data.fallbackText
  if (data.mode === 'included') return t.buggyLabels.included
  if (data.mode === 'notNeeded') return data.tagKey ? t.buggyLabels[data.tagKey] : t.buggyLabels.notNeeded
  return data.tagKey ? `€${data.price} · ${t.buggyLabels[data.tagKey]}` : `€${data.price}`
}

// findCourseByName is fuzzy but can't bridge Roman-vs-Arabic numerals or the
// Pollensa/Pollença spelling. Map those few to their canonical data names.
const COMPARE_NAME_FIX = {
  'Santa Ponsa I': 'Golf Santa Ponsa 1',
  'Santa Ponsa II': 'Golf Santa Ponsa 2',
  'Santa Ponsa III': 'Golf Santa Ponsa 3',
  Pollensa: 'Golf Pollença',
}

const AREA_KEY_MAP = { Southwest: 'southwest', Palma: 'palma', North: 'north', East: 'east' }
function areaDisplay(area, t) {
  const key = AREA_KEY_MAP[area]
  return key ? t.filters[key] : area
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
    buggy: buggyData(logistics, course.buggy),
    walking: typeof logistics?.walkAllowed === 'boolean' ? (logistics.walkAllowed ? 'yes' : 'no') : course.walking,
    walkingNote: '',
  }
})

function displayCourseName(name) {
  return getCourseShortName(name)
}

const fmtFee = (num, text) => (text ? text : num ? `€${num}` : '-')

function hidesPublicPricing(c) {
  return c.accessType === 'members_arranged'
}

function budgetBand(c) {
  if (hidesPublicPricing(c)) return null
  if (!c.peak) return null
  if (c.peak < 80) return 'low'
  if (c.peak <= 130) return 'mid'
  return 'high'
}

function walkableLabel(c, t) {
  if (c.walking === 'yes') return { text: t.walkingLabels.yes, cls: '' }
  if (c.walking === 'no') return { text: t.walkingLabels.no, cls: 'no' }
  return { text: c.walkingNote || t.walkingLabels.restricted, cls: 'gold' }
}

function handicapDisplay(c, t) {
  if (!c.handicapRequired) return { text: t.handicapLabels.noHandicapLimit, certificate: false, cls: '' }
  const sameLimit = Number.isFinite(c.handicapMen) && c.handicapMen === c.handicapWomen
  let text = t.handicapLabels.handicapRequired
  if (sameLimit) text = `Max ${c.handicapMen}`
  else if (Number.isFinite(c.handicapMen) && Number.isFinite(c.handicapWomen)) text = `M ${c.handicapMen} / W ${c.handicapWomen}`
  else if (Number.isFinite(c.handicapMen)) text = `M ${c.handicapMen}`
  else if (Number.isFinite(c.handicapWomen)) text = `W ${c.handicapWomen}`
  return { text, certificate: c.certRequired, cls: '' }
}

function accessDisplay(c, t) {
  const map = {
    public: t.accessLabels.public,
    members_arranged: t.accessLabels.memberArrangement,
    hotel_guests: t.accessLabels.hotelGuests,
  }
  return {
    text: map[c.accessType] || t.accessLabels.public,
    cls: c.accessType === 'public' ? '' : 'gold',
  }
}

function publicFeeSortValue(c, season) {
  if (hidesPublicPricing(c)) return null
  return Number.isFinite(c[season]) ? c[season] : null
}

function feeDisplay(c, season, t) {
  if (hidesPublicPricing(c)) {
    return { text: t.accessLabels.memberArrangement, note: t.accessLabels.notPublic }
  }
  if (c.feeMode === 'pitch_putt') {
    return season === 'peak'
      ? { text: fmtFee(c.peak), note: t.feeNotes.holes18NotSeasonal }
      : { text: fmtFee(c.low), note: t.feeNotes.holes9NotSeasonal }
  }
  if (c.feeMode === 'hotel_only') return { text: t.buggyLabels.included, note: t.accessLabels.hotelGuests }
  return {
    text: fmtFee(c[season], Number.isFinite(c[season]) ? null : (season === 'peak' ? c.peakText : c.lowText)),
    note: c.dynamicPricing ? t.feeNotes.variableRate : '',
  }
}

function FeeCell({ course, season, t }) {
  const fee = feeDisplay(course, season, t)
  return <>{fee.text}{fee.note && <span className="approx">{fee.note}</span>}</>
}

export default function GreenFeesClient({ lang = 'en' }) {
  const t = getGreenFeesT(lang)
  const [area, setArea] = useState('')
  const [budget, setBudget] = useState('')
  const [walking, setWalking] = useState('')
  const [sort, setSort] = useState('name')
  const [dir, setDir] = useState(1)
  const [mode, setMode] = useState('table')
  const [cmp, setCmp] = useState(['Son Gual', 'Alcanada', '', '', ''])

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
    { label: t.compare.location, get: (c) => c.location || "-" },
    { label: t.compare.par, get: (c) => (c.par ? `${t.compare.par} ${c.par}` : "-") },
    { label: t.compare.difficulty, get: (c) => c.diffScore || "-" },
    { label: t.compare.holes, get: (c) => (c.nineHoles ? "9" : "18") },
    { label: t.table.peakSeasonFee, get: (c) => `${feeDisplay(c, 'peak', t).text}${feeDisplay(c, 'peak', t).note ? ` · ${feeDisplay(c, 'peak', t).note}` : ''}` },
    { label: t.table.lowSeasonFee, get: (c) => `${feeDisplay(c, 'low', t).text}${feeDisplay(c, 'low', t).note ? ` · ${feeDisplay(c, 'low', t).note}` : ''}` },
    { label: t.table.access, get: (c) => accessDisplay(c, t).text },
    { label: t.table.buggy, get: (c) => buggyDisplay(c.buggy, t) },
    { label: t.table.walkable, get: (c) => walkableLabel(c, t).text },
    { label: t.table.handicapLimit, get: (c) => `${handicapDisplay(c, t).text}${handicapDisplay(c, t).certificate ? '*' : ''}` },
    { label: t.table.andyVerdic, get: (c) => c.verdict || "-" },
    { label: t.compare.courseGuide, get: (c) => c.guideUrl ? <Link className="gf-guide" href={c.guideUrl}>{t.table.viewFullGuide}</Link> : <span style={{ color: 'var(--muted)' }}>{t.table.guideComing}</span> },
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
        const av = publicFeeSortValue(a, sort)
        const bv = publicFeeSortValue(b, sort)
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
    ? <Link className="gf-guide" href={c.guideUrl}>{t.table.viewFullGuide}</Link>
    : <span className="gf-guide" style={{ opacity: 0.45 }}>{t.table.guideComing}</span>

  return (
    <div className="gf">
      <style>{`
        .gf { --pine:#2D4A3E; --pine-dark:#223A30; --gold:#B8973C; --cream:#F7F4EF; --row-alt:#EFEDE8;
          --deep:#1A1916; --muted:#6B6862; background:var(--cream); color:var(--deep); font-family:var(--font-sans); }
        .gf-hero { background:var(--pine); padding:52px 24px 44px; text-align:center; color:#fff; }
        .gf-eyebrow { font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:var(--gold); }
        .gf-hero h1 { font-family:var(--font-serif); font-weight:500; font-size:clamp(1.9rem,4vw,2.8rem); margin:10px 0; }
        .gf-hero .sub { font-family:var(--font-sans); font-weight:300; font-size:.95rem; color:rgba(255,255,255,.85); max-width:640px; margin:0 auto; line-height:1.6; }
        .gf-updated { display:inline-block; margin-top:18px; border:1px solid var(--gold); color:var(--gold); font-size:.75rem; letter-spacing:.1em; text-transform:uppercase; padding:6px 14px; border-radius:2px; }
        .gf-main { max-width:1100px; margin:0 auto; padding:32px 20px 80px; }
        .gf-disclaimer { background:#fff; border-left:3px solid var(--gold); padding:14px 18px; font-size:.88rem; color:var(--muted); line-height:1.6; margin-bottom:28px; border-radius:0 3px 3px 0; }
        .gf-filters { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end; margin-bottom:24px; }
        .gf-fg { display:flex; flex-direction:column; gap:5px; }
        .gf-fg label { font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); }
        .gf-fg select { font-family:var(--font-sans); font-size:.9rem; padding:11px 14px; border:1px solid rgba(45,74,62,.18); border-radius:999px; background:#fff; color:var(--deep); min-width:150px; cursor:pointer; }
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
        .gf td.gf-course { font-family:var(--font-serif); font-size:1.08rem; font-weight:500; color:var(--pine); }
        .gf-9h { display:block; font-family:var(--font-sans); font-size:.66rem; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:3px; }
        .gf-guide { display:block; font-family:var(--font-sans); font-size:.75rem; margin-top:3px; color:var(--gold); text-decoration:none; letter-spacing:.08em; text-transform:uppercase; }
        a.gf-guide:hover { text-decoration:underline; }
        .gf .approx { color:var(--muted); font-size:.72rem; display:block; }
        .gf td.gf-verdict { font-style:italic; color:#4a463f; max-width:240px; min-width:180px; padding-right:16px; }
        .gf-pill { display:inline-block; box-sizing:border-box; max-width:100%; font-size:.72rem; line-height:1.35; padding:2px 8px; border-radius:10px; background:rgba(45,74,62,.1); color:var(--pine); white-space:normal; overflow-wrap:anywhere; }
        .gf-pill.no { background:rgba(160,60,40,.1); color:#8a3a26; }
        .gf-pill.gold { background:rgba(184,151,60,.15); color:#8a6f26; }
        .gf-footnote { font-size:.76rem; color:var(--muted); line-height:1.5; margin:12px 2px 0; }
        .gf-reset { min-height:40px; border:1px solid rgba(45,74,62,.18); border-radius:999px; background:transparent; color:var(--pine); padding:10px 16px; font-family:var(--font-sans); font-size:.78rem; letter-spacing:.14em; text-transform:uppercase; cursor:pointer; }
        .gf-reset:hover { background:#fff; }
        .gf-cards { display:none; }
        .gf-card { background:#fff; border-radius:6px; padding:18px 18px 16px; margin-bottom:14px; box-shadow:0 2px 8px rgba(45,74,62,.08); border-top:3px solid var(--pine); }
        .gf-card h3 { font-family:var(--font-serif); font-weight:500; font-size:1.25rem; color:var(--pine); margin-bottom:2px; }
        .gf-card .area-tag { font-size:.75rem; letter-spacing:.06em; text-transform:uppercase; color:var(--gold); margin-bottom:10px; }
        .gf-card .grid { display:grid; grid-template-columns:1fr 1fr; gap:8px 14px; font-size:.85rem; margin-bottom:10px; }
        .gf-card .grid .k { font-size:.68rem; letter-spacing:.06em; text-transform:uppercase; color:var(--muted); display:block; }
        .gf-card .v-line { font-style:italic; font-size:.87rem; color:#4a463f; border-top:1px solid rgba(45,74,62,.12); padding-top:10px; line-height:1.55; }
        .gf-card .gf-guide { display:inline-block; margin-top:8px; font-size:.8rem; }
        .gf-selcta { margin-top:40px; background:var(--pine); color:#fff; border-radius:6px; padding:32px 28px; text-align:center; }
        .gf-selcta h2 { font-family:var(--font-serif); font-weight:400; font-size:1.6rem; margin-bottom:8px; }
        .gf-selcta p { font-size:.9rem; color:rgba(255,255,255,.8); margin-bottom:18px; }
        .gf-selcta a { display:inline-block; background:var(--gold); color:#fff; text-decoration:none; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:11px 22px; border-radius:4px; transition:background .2s; }
        .gf-selcta a:hover { background:#a5862f; }
        .gf-contact { margin-top:16px; background:var(--pine-dark); color:#fff; border-radius:6px; padding:28px; text-align:center; }
        .gf-contact h2 { font-family:var(--font-serif); font-weight:400; font-size:1.5rem; margin-bottom:8px; }
        .gf-contact p { font-size:.9rem; color:rgba(255,255,255,.82); margin-bottom:18px; line-height:1.6; }
        .gf-cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .gf-contact a.btn-gold { display:inline-block; background:var(--gold); color:#fff; text-decoration:none; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:12px 22px; border-radius:4px; transition:background .2s; }
        .gf-contact a.btn-gold:hover { background:#a5862f; }
        .btn-wa { display:inline-flex; align-items:center; gap:9px; background:#25D366; color:#fff; text-decoration:none; font-family:var(--font-sans); font-size:.8rem; letter-spacing:.18em; text-transform:uppercase; padding:12px 22px; border-radius:999px; transition:background .2s, transform .2s; }
        .btn-wa:hover { background:#1eb858; }
        .gf-foot { text-align:center; font-size:.78rem; color:var(--muted); margin-top:36px; line-height:1.6; }
        .gf-foot a { color:var(--gold); text-decoration:none; }
        .gf-modebar { background:var(--cream); padding:18px 20px 0; }
        .gf-modebar__inner { max-width:1100px; margin:0 auto; display:flex; gap:6px; border-bottom:1px solid rgba(45,74,62,.15); }
        .gf-mode { font-family:var(--font-sans); font-size:.82rem; letter-spacing:.12em; text-transform:uppercase; padding:12px 20px; background:none; border:none; border-bottom:2px solid transparent; color:var(--muted); cursor:pointer; margin-bottom:-1px; }
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
        <span className="gf-eyebrow">{t.hero.eyebrow}</span>
        <h1>{t.hero.title}</h1>
        <p className="sub">{t.hero.sub}</p>
        <div><span className="gf-updated">{t.hero.updated}</span></div>
      </section>

      <div className="gf-modebar">
        <div className="gf-modebar__inner" role="tablist" aria-label={t.modebar.headToHead}>
          <button type="button" role="tab" aria-selected={mode === 'table'} className={`gf-mode${mode === 'table' ? ' is-active' : ''}`} onClick={() => setMode('table')}>
            {t.modebar.all24}
          </button>
          <button type="button" role="tab" aria-selected={mode === 'compare'} className={`gf-mode${mode === 'compare' ? ' is-active' : ''}`} onClick={() => setMode('compare')}>
            {t.modebar.headToHead}
          </button>
        </div>
      </div>

      {lang === 'en' && <ToolTrustLine locale={lang} />}

      <main className="gf-main">
        <div className="gf-disclaimer">
          <strong>{t.disclaimer.title}</strong> {t.disclaimer.text}
        </div>

        {mode === 'table' && (
        <>
        <div className="gf-filters">
          <div className="gf-fg">
            <label htmlFor="f-area">{t.filters.area}</label>
            <select id="f-area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">{t.filters.allAreas}</option>
              <option value="Southwest">{t.filters.southwest}</option>
              <option value="Palma">{t.filters.palma}</option>
              <option value="North">{t.filters.north}</option>
              <option value="East">{t.filters.east}</option>
            </select>
          </div>
          <div className="gf-fg">
            <label htmlFor="f-budget">{t.filters.budget}</label>
            <select id="f-budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">{t.filters.anyBudget}</option>
              <option value="low">{t.filters.underEighty}</option>
              <option value="mid">{t.filters.eightToThirty}</option>
              <option value="high">{t.filters.overThirty}</option>
            </select>
          </div>
          <div className="gf-fg">
            <label htmlFor="f-walking">{t.filters.walking}</label>
            <select id="f-walking" value={walking} onChange={(e) => setWalking(e.target.value)}>
              <option value="">{t.filters.walkingOrBuggy}</option>
              <option value="yes">{t.filters.walkingAllowed}</option>
              <option value="buggy">{t.filters.buggyOnly}</option>
            </select>
          </div>
          <div className="gf-fg">
            <label htmlFor="f-sort">{t.filters.sort}</label>
            <select id="f-sort" value={sort === 'peak' || sort === 'low' ? `${sort}-${dir === -1 ? 'desc' : 'asc'}` : sort} onChange={(e) => sortSelect(e.target.value)}>
              <option value="name">{t.filters.courseName}</option>
              <option value="peak-asc">{t.filters.peakAsc}</option>
              <option value="peak-desc">{t.filters.peakDesc}</option>
              <option value="low-asc">{t.filters.lowAsc}</option>
              <option value="low-desc">{t.filters.lowDesc}</option>
              <option value="area">{t.filters.byArea}</option>
            </select>
          </div>
          {(area || budget || walking || sort !== 'name' || dir !== 1) && (
            <button type="button" className="gf-reset" onClick={() => { setArea(''); setBudget(''); setWalking(''); setSort('name'); setDir(1) }}>{t.filters.reset}</button>
          )}
          <span className="gf-count">{t.filters.showing} {rows.length} {t.filters.of} {COURSES.length} {t.filters.courses}</span>
        </div>

        <div className="gf-table-wrap">
          <table aria-label={t.table.course}>
            <thead>
              <tr>
                <th className="is-sortable" aria-sort={sort === 'name' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('name')}>{t.table.course}<span className="arw">{arrow('name')}</span></button></th>
                <th className="is-sortable" aria-sort={sort === 'area' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('area')}>{t.table.area}<span className="arw">{arrow('area')}</span></button></th>
                <th className="is-sortable" aria-sort={sort === 'peak' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('peak')}>{t.table.peakSeasonFee}<span className="arw">{arrow('peak')}</span></button></th>
                <th className="is-sortable" aria-sort={sort === 'low' ? (dir === 1 ? 'ascending' : 'descending') : 'none'}><button type="button" className="gf-sort" onClick={() => headerSort('low')}>{t.table.lowSeasonFee}<span className="arw">{arrow('low')}</span></button></th>
                <th>{t.table.access}</th>
                <th>{t.table.buggy}</th>
                <th>{t.table.walkable}</th>
                <th>{t.table.handicapLimit}</th>
                <th>{t.table.andyVerdic}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => {
                const w = walkableLabel(c, t)
                const h = handicapDisplay(c, t)
                const a = accessDisplay(c, t)
                return (
                  <tr key={c.name}>
                    <td className="gf-course">{displayCourseName(c.name)}{c.nineHoles && <span className="gf-9h">{t.table.nineHoleCourse}</span>}{guideCell(c)}</td>
                    <td>{areaDisplay(c.area, t)}</td>
                    <td><FeeCell course={c} season="peak" t={t} /></td>
                    <td><FeeCell course={c} season="low" t={t} /></td>
                    <td><span className={`gf-pill ${a.cls}`}>{a.text}</span></td>
                    <td>{buggyDisplay(c.buggy, t)}</td>
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
            const w = walkableLabel(c, t)
            const h = handicapDisplay(c, t)
            const a = accessDisplay(c, t)
            return (
              <div className="gf-card" key={c.name}>
                <h3>{displayCourseName(c.name)}</h3>
                <div className="area-tag">{areaDisplay(c.area, t)}{c.nineHoles ? ` · ${t.table.nineHoleCourse}` : ''}</div>
                <div className="grid">
                  <div><span className="k">{t.table.peakSeasonFee}</span><FeeCell course={c} season="peak" t={t} /></div>
                  <div><span className="k">{t.table.lowSeasonFee}</span><FeeCell course={c} season="low" t={t} /></div>
                  <div><span className="k">{t.table.access}</span>{a.text}</div>
                  <div><span className="k">{t.table.buggy}</span>{buggyDisplay(c.buggy, t)}</div>
                  <div><span className="k">{t.table.walkable}</span>{w.text}</div>
                  <div><span className="k">{t.table.handicapLimit}</span>{h.text}{h.certificate && <sup>*</sup>}</div>
                </div>
                <div className="v-line">&ldquo;{c.verdict}&rdquo;</div>
                {c.guideUrl && <Link className="gf-guide" href={c.guideUrl}>{t.table.viewFullGuide}</Link>}
              </div>
            )
          })}
        </div>
        <p className="gf-footnote">{t.table.certificateNote}</p>
        </>
        )}

        {mode === 'compare' && (
          <div className="gf-compare">
            <p className="gf-compare__intro">{t.compare.intro}</p>
            <div className="gf-compare__pickers">
              {[0, 1, 2, 3, 4].map((i) => (
                <div className="gf-fg" key={i}>
                  <label htmlFor={`cmp-${i}`}>{t.compare.course} {i + 1}{i > 1 ? ` ${t.compare.optional}` : ''}</label>
                  <select id={`cmp-${i}`} value={cmp[i] || ''} onChange={(e) => changeCompare(i, e.target.value)}>
                    <option value="">{i > 1 ? `${t.compare.addCourse} ${i + 1}…` : t.compare.selectCourse}</option>
                    {COURSES.map((c) => (
                      <option key={c.name} value={c.name} disabled={cmp.includes(c.name) && cmp[i] !== c.name}>{displayCourseName(c.name)}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {compared.length > 0 && (
              <div className="gf-table-wrap gf-compare__table" role="region" aria-label={t.compare.intro} tabIndex="0">
                <table aria-label={t.modebar.headToHead} aria-describedby="gf-compare-note" style={{ minWidth: Math.max(760, 130 + compared.length * 200) }}>
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
                          <td key={`${row.label}-${i}`} className={row.label === t.table.andyVerdic ? 'gf-verdict' : ''}>{row.get(c)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="gf-footnote" id="gf-compare-note">{t.compare.certificateNote}</p>
          </div>
        )}

        <div className="gf-selcta">
          <h2>{t.cta.courseSelector.title}</h2>
          <p>{t.cta.courseSelector.desc}</p>
          <Link href="/tools/course-selector">{t.cta.courseSelector.link}</Link>
        </div>

        <div className="gf-contact">
          <h2>{t.cta.contact.title}</h2>
          <p>{t.cta.contact.desc}</p>
          <div className="gf-cta-btns">
            <Link className="btn-gold" href="/contact">{t.cta.contact.enquire}</Link>
            <WhatsAppCta label={t.cta.contact.whatsapp} />
          </div>
        </div>

        <footer className="gf-foot">
          {t.footer.text} <Link href="/contact">{t.footer.linkText}</Link>.
        </footer>
      </main>
    </div>
  )
}
