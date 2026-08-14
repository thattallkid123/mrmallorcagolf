'use client'

import { Fragment, useRef, useState } from 'react'
import Link from 'next/link'
import ToolTrustLine from '../../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../../lib/analytics'
import { COURSE_ACCESS_LIST } from '../../../../lib/course-access-data'
import { getCourseShortName } from '../../../../lib/golf-courses-helpers'
import { getHandicapCheckerT } from '../../../../lib/handicap-checker-translations'
import { getLegalPath } from '@lib/site'
import { getPrivacyLinkLabel } from '@lib/legal-note-content'

const WA_MESSAGE = 'Hi Andy, I used the handicap checker on your site and I’d like help planning which Mallorca courses I can play.'
const WA_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_MESSAGE)}`

function WhatsAppCta({ label }) {
  function handleClick() {
    trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'handicap-checker' })
    trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'handicap-checker' })
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

const COURSE_REGIONS = {
  'Golf Son Gual': 'palma',
  'Golf Son Vida': 'palma',
  'Son Muntaner': 'palma',
  'Golf Son Quint': 'palma',
  'T Golf Palma (Puntir\u00f3)': 'palma',
  'Palma Pitch & Putt': 'palma',
  'Golf Son Termes': 'palma',
  'Golf Santa Ponsa 1': 'southwest',
  'Golf Santa Ponsa 2': 'southwest',
  'Golf Santa Ponsa 3': 'southwest',
  'Real Golf de Bendinat': 'southwest',
  'T Golf Calvi\u00e0 (Poniente)': 'southwest',
  'Golf de Andratx': 'southwest',
  'Golf Maioris': 'south',
  'Golf Son Antem East': 'south',
  'Golf Son Antem West': 'south',
  'Capdepera Golf': 'east',
  'Canyamel Golf': 'east',
  'Pula Golf': 'east',
  'Golf Club Son Servera': 'east',
  "Vall d'Or Golf": 'east',
  'Reserva Rotana': 'east',
  'Club de Golf Alcanada': 'north',
  'Golf Pollen\u00e7a': 'north',
}

const COURSE_PLAYING_OVERRIDES = {
  'Golf de Andratx': { strict: true, pairing: true },
  'Golf Son Gual': { pairing: true },
  'Golf Son Quint': { pairing: true },
  'Golf Son Antem East': { pairing: true },
  'Golf Son Antem West': { pairing: true },
  'Golf Son Termes': { pairing: true },
  'Capdepera Golf': { pairing: true },
  'Canyamel Golf': { pairing: true },
  'Club de Golf Alcanada': { pairing: true },
  'Golf Club Son Servera': { pairing: true },
  'Pula Golf': { pairing: true },
  'Real Golf de Bendinat': { pairing: true },
  'Son Muntaner': { pairing: true },
  'T Golf Calvi\u00e0 (Poniente)': { pairing: true },
  'T Golf Palma (Puntir\u00f3)': { pairing: true },
  "Vall d'Or Golf": { pairing: true },
}

const COURSES = COURSE_ACCESS_LIST
  .map((entry) => {
    const region = COURSE_REGIONS[entry.name]
    if (!region) return null

    // Sentinel key only \u2014 never rendered. The user-facing copy comes from `t.verdicts`.
    const restrictedType =
      entry.accessType === 'hotel_guests'
        ? 'hotel'
        : entry.accessType === 'members_arranged'
          ? 'members'
          : null

    return {
      name: getCourseShortName(entry.name),
      region,
      M: entry.handicapMen,
      F: entry.handicapWomen,
      cert: entry.certificateRequired,
      handicapRequired: entry.handicapRequired,
      publicAccess: entry.accessType === 'public',
      restrictedType,
      ...COURSE_PLAYING_OVERRIDES[entry.name],
    }
  })
  .filter(Boolean)

const BORDERLINE_MARGIN = 8

const AREA_KEYS = ['any', 'palma', 'southwest', 'south', 'east', 'north']
const GROUP_KEYS = ['ok', 'warn', 'info', 'no']

// Locale strings carry {placeholder} markers. `fill` returns a plain string;
// `fillNodes` returns an array of nodes so React elements (e.g. <strong>) can be
// substituted in without putting JSX in the translation file.
function fill(template, values) {
  return String(template).replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match))
}

function fillNodes(template, values) {
  return String(template)
    .split(/(\{\w+\})/g)
    .map((part, index) => {
      const match = /^\{(\w+)\}$/.exec(part)
      if (!match || !(match[1] in values)) return part
      return <Fragment key={index}>{values[match[1]]}</Fragment>
    })
}

// Strips the leading status emoji (\u2705 \u26a0\ufe0f \u274c \u2139\ufe0f) before a label goes into the
// email summary. The range stops well short of U+4E00 so CJK labels survive intact.
function stripStatusIcon(label) {
  return String(label).replace(/^[\u2000-\u27bf\ufe0f\s]+/, '')
}

function tierFromHcp(hcp, noHcp, t) {
  if (noHcp) return { key: 'new', label: t.tiers.new }
  if (hcp <= 9) return { key: 'low', label: t.tiers.low }
  if (hcp <= 18) return { key: 'mid', label: t.tiers.mid }
  if (hcp <= 28) return { key: 'improver', label: t.tiers.improver }
  return { key: 'relaxed', label: t.tiers.relaxed }
}

function evaluate(course, hcp, hasHcp, hasCert, groupSize, gender, t) {
  const v = t.verdicts
  const limit = gender === 'M' ? course.M : course.F

  if (course.restrictedType) {
    // Hotel-only courses genuinely cannot be arranged for a standalone round.
    if (course.restrictedType === 'hotel') {
      return { status: 'no', label: v.hotelOnly, detail: v.hotelOnlyDetail }
    }
    return { status: 'warn', label: v.membersOnly, detail: v.membersOnlyDetail }
  }

  if (!course.handicapRequired && !course.cert) {
    return {
      status: 'ok',
      label: v.canBook,
      detail: course.publicAccess ? v.noCertNeeded : v.noHandicapVenueRules,
    }
  }

  if (course.publicAccess && !course.cert) {
    return { status: 'ok', label: v.canBook, detail: v.payAndPlay }
  }

  if (!hasHcp) {
    if (course.cert) {
      return { status: 'info', label: v.certRequired, detail: v.certRequiredNoHandicap }
    }
    return { status: 'warn', label: v.worthEnquiry, detail: v.worthEnquiryDetail }
  }

  if (hcp > limit) {
    if (!course.strict && hcp <= limit + BORDERLINE_MARGIN) {
      return {
        status: 'warn',
        label: v.justOver,
        detail: v.justOverDetail(limit, gender, hcp),
        borderline: true,
      }
    }
    return {
      status: 'no',
      label: v.limitTooHigh,
      detail: v.limitTooHighDetail(limit, gender, Boolean(course.strict)),
    }
  }

  if (course.cert && !hasCert) {
    return { status: 'info', label: v.certRequired, detail: v.certRequiredQualifies }
  }

  // Handicap qualifies. Small groups may be paired in peak season \u2014 flagged and
  // rolled into a single shared note rather than repeated on every card.
  if (course.pairing && groupSize <= 2) {
    return { status: 'ok', label: v.canBook, pairs: true, detail: v.qualifies }
  }

  if (course.cert) {
    return { status: 'ok', label: v.canBook, detail: v.certCovered }
  }
  return { status: 'ok', label: v.canBook, detail: v.withinLimit }
}

export default function HandicapCheckerClient({ lang = 'en' }) {
  const t = getHandicapCheckerT(lang)
  const [hcp, setHcp] = useState('')
  const [noHcp, setNoHcp] = useState(false)
  const [gender, setGender] = useState('M')
  const [cert, setCert] = useState('yes')
  const [group, setGroup] = useState('2')
  const [area, setArea] = useState('any')
  const [result, setResult] = useState(null)
  const [email, setEmail] = useState('')
  const [emailState, setEmailState] = useState('idle') // idle | sending | ok | err
  const [emailMsg, setEmailMsg] = useState('')
  const resultsRef = useRef(null)

  function runCheck() {
    if (!noHcp && hcp === '') return
    const hcpVal = noHcp ? null : Math.min(54, Math.max(0, parseFloat(hcp)))
    const hasCert = cert === 'yes' || cert === 'digital'
    const groupSize = parseInt(group, 10)
    const results = COURSES.map((c) => ({ course: c, r: evaluate(c, hcpVal, !noHcp, hasCert, groupSize, gender, t) }))

    const tier = tierFromHcp(hcpVal, noHcp, t)
    const bookable = results.filter((x) => x.r.status === 'ok')
    const areaBookable = area === 'any' ? bookable : bookable.filter((x) => x.course.region === area)
    const recPool = (areaBookable.length ? areaBookable : bookable).slice(0, 3).map((x) => x.course.name)

    const pairNames = results.filter((x) => x.r.pairs).map((x) => x.course.name)
    setResult({ hcp: noHcp ? 'none' : hcpVal, tier, results, recPool, area, group, pairNames })
    setEmailState('idle')
    setEmailMsg('')
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40)
  }

  async function sendEmail() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailState('err')
      setEmailMsg(t.errors.invalidEmail)
      return
    }
    if (!result) {
      setEmailState('err')
      setEmailMsg(t.errors.noResults)
      return
    }
    setEmailState('sending')
    setEmailMsg('')
    const summary = result.results.map(({ course, r }) => `${course.name}: ${stripStatusIcon(r.label)}`)
    try {
      const res = await fetch('/api/handicap-checker-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          handicap: result.hcp,
          gender: gender === 'M' ? t.inputs.male : t.inputs.female,
          area: t.areas[result.area],
          tier: result.tier.label,
          recommendations: result.recPool,
          summary,
        }),
      })
      if (res.ok) {
        setEmailState('ok')
        setEmailMsg(t.email.sent)
        setEmail('')
      } else {
        setEmailState('err')
        setEmailMsg(t.errors.generic)
      }
    } catch (e) {
      setEmailState('err')
      setEmailMsg(t.errors.generic)
    }
  }

  const okCount = result ? result.results.filter((x) => x.r.status === 'ok').length : 0
  const warnCount = result ? result.results.filter((x) => x.r.status === 'warn').length : 0
  const hasBorderline = result ? result.results.some((x) => x.r.borderline) : false

  return (
    <div className="hc">
      <style>{`
        .hc { --pine:#2D4A3E; --pine-dark:#223A30; --gold:#B8973C; --cream:#F7F4EF;
          --deep:#1A1916; --muted:#6B6862; --ok:#2D6A44; --ok-bg:#EAF3EC; --warn:#8a6f26;
          --warn-bg:#F6EFDD; --no:#8a3a26; --no-bg:#F5E7E2; --info:#3B5A72; --info-bg:#E8EFF4;
          background:var(--cream); color:var(--deep); }
        .hc-hero { background:var(--pine); padding:52px 24px 44px; text-align:center; color:#fff; }
        .hc-eyebrow { font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.18em;
          text-transform:uppercase; color:var(--gold); }
        .hc-hero h1 { font-family:var(--font-serif); font-weight:500;
          font-size:clamp(1.9rem,4vw,2.8rem); margin:10px 0; }
        .hc-hero .sub { font-family:var(--font-sans); font-weight:300; font-size:.95rem;
          color:rgba(255,255,255,.85); max-width:620px; margin:0 auto; line-height:1.6; }
        .hc-updated { display:inline-block; margin-top:18px; border:1px solid var(--gold); color:var(--gold);
          font-family:var(--font-sans); font-size:.75rem; letter-spacing:.14em; text-transform:uppercase;
          padding:6px 14px; border-radius:2px; }
        .hc-main { max-width:860px; margin:0 auto; padding:28px 20px 80px; font-family:var(--font-sans); }
        .hc-panel { background:#fff; border-radius:6px; padding:26px 24px; box-shadow:0 2px 12px rgba(45,74,62,.08); margin-bottom:26px; }
        .hc-panel h2 { font-family:var(--font-serif); font-weight:500; color:var(--pine); font-size:1.4rem; margin-bottom:18px; }
        .hc-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px 22px; }
        @media (max-width:560px){ .hc-grid { grid-template-columns:1fr; } }
        .hc-field .top { display:block; font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); margin-bottom:7px; }
        .hc-field input[type=number], .hc-field select { font-family:var(--font-sans); font-size:.95rem; width:100%;
          padding:11px 14px; border:1px solid rgba(45,74,62,.18); border-radius:999px; background:#fff; color:var(--deep); }
        .hc-field input:focus, .hc-field select:focus { outline:2px solid var(--gold); outline-offset:1px; }
        .hc-seg { display:flex; flex-wrap:wrap; gap:8px; }
        .hc-seg button { font-family:var(--font-sans); font-size:.82rem; letter-spacing:.12em; text-transform:uppercase; cursor:pointer; padding:9px 16px;
          border:1px solid rgba(45,74,62,.3); border-radius:999px; background:#fff; color:var(--deep); transition:all .15s; }
        .hc-seg button.active { background:var(--pine); color:#fff; border-color:var(--pine); }
        .hc-nohcp { display:flex; align-items:center; gap:8px; margin-top:9px; font-size:.85rem; color:var(--muted); cursor:pointer; }
        .hc-nohcp input { accent-color:var(--pine); width:16px; height:16px; cursor:pointer; }
        .hc-field-full { grid-column:1 / -1; }
        .hc-check { margin-top:22px; width:100%; background:var(--gold); color:#fff; border:none; cursor:pointer;
          font-family:var(--font-sans); font-size:.82rem; letter-spacing:.18em; text-transform:uppercase; padding:14px 20px; border-radius:999px; transition:background .2s; }
        .hc-check:hover { background:#a5862f; }
        .hc-summary { background:var(--pine); color:#fff; border-radius:6px; padding:20px 24px; margin-bottom:22px; line-height:1.6; font-size:.95rem; }
        .hc-summary strong { color:var(--gold); font-weight:500; }
        .hc-rec { background:#fff; border-left:4px solid var(--gold); border-radius:6px; padding:18px 20px; margin-bottom:22px; box-shadow:0 2px 8px rgba(45,74,62,.07); }
        .hc-rec .lbl { font-size:.68rem; letter-spacing:.16em; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
        .hc-rec p { font-family:var(--font-serif); font-size:1.12rem; color:#2C2A27; line-height:1.6; }
        .hc-pairnote { background:#fff; border-left:4px solid var(--pine); border-radius:6px; padding:16px 20px; margin:22px 0; box-shadow:0 2px 8px rgba(45,74,62,.07); }
        .hc-pairnote .lbl { font-size:.68rem; letter-spacing:.16em; text-transform:uppercase; color:var(--pine); margin-bottom:6px; }
        .hc-pairnote p { font-family:var(--font-sans); font-size:.9rem; color:#4a463f; line-height:1.6; }
        .hc-group-head { font-family:var(--font-serif); font-size:1.35rem; font-weight:500; color:var(--pine);
          margin:26px 0 12px; display:flex; align-items:baseline; gap:10px; }
        .hc-group-head .count { font-family:var(--font-sans); font-size:.8rem; color:var(--muted); }
        .hc-cards { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media (max-width:640px){ .hc-cards { grid-template-columns:1fr; } }
        .hc-card { background:#fff; border-radius:6px; padding:16px 18px; box-shadow:0 2px 8px rgba(45,74,62,.07); border-left:4px solid var(--muted); }
        .hc-card.ok { border-left-color:var(--ok); } .hc-card.warn { border-left-color:var(--gold); }
        .hc-card.no { border-left-color:var(--no); } .hc-card.info { border-left-color:var(--info); }
        .hc-card .name { font-family:var(--font-serif); font-size:1.15rem; font-weight:500; color:var(--pine); margin-bottom:6px; }
        .hc-badge { display:inline-block; font-size:.72rem; letter-spacing:.04em; padding:3px 10px; border-radius:10px; margin-bottom:8px; }
        .hc-badge.ok { background:var(--ok-bg); color:var(--ok); } .hc-badge.warn { background:var(--warn-bg); color:var(--warn); }
        .hc-badge.no { background:var(--no-bg); color:var(--no); } .hc-badge.info { background:var(--info-bg); color:var(--info); }
        .hc-card .detail { font-size:.84rem; color:var(--muted); line-height:1.55; }
        .hc-card a.enquire { display:inline-block; margin-top:8px; font-size:.8rem; color:var(--gold); text-decoration:none; letter-spacing:.04em; }
        .hc-card a.enquire:hover { text-decoration:underline; }
        .hc-cta { background:var(--pine-dark); color:#fff; border-radius:6px; padding:24px; margin-top:30px; text-align:center; }
        .hc-cta h3 { font-family:var(--font-serif); font-weight:400; font-size:1.4rem; margin-bottom:8px; }
        .hc-cta p { font-size:.9rem; color:rgba(255,255,255,.85); margin-bottom:16px; line-height:1.6; }
        .hc-cta a.btn { display:inline-block; background:var(--gold); color:#fff; text-decoration:none; font-size:.85rem;
          letter-spacing:.06em; text-transform:uppercase; padding:12px 24px; border-radius:4px; transition:background .2s; }
        .hc-cta a.btn:hover { background:#a5862f; }
        .hc-cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .btn-wa { display:inline-flex; align-items:center; gap:9px; background:#25D366; color:#fff; text-decoration:none;
          font-family:var(--font-sans); font-size:.8rem; letter-spacing:.18em; text-transform:uppercase; padding:12px 22px; border-radius:999px; transition:background .2s; }
        .btn-wa:hover { background:#1eb858; }
        .hc-email { background:#fff; border-radius:6px; padding:24px; box-shadow:0 2px 12px rgba(45,74,62,.08); margin-top:26px; }
        .hc-email h3 { font-family:var(--font-serif); font-weight:500; color:var(--pine); font-size:1.3rem; margin-bottom:6px; }
        .hc-email p { font-size:.86rem; color:var(--muted); margin-bottom:14px; line-height:1.55; }
        .hc-email-row { display:flex; gap:10px; flex-wrap:wrap; }
        .hc-email-row input { flex:1; min-width:220px; font-family:var(--font-sans); font-size:.95rem; padding:11px 14px; border:1px solid rgba(45,74,62,.3); border-radius:999px; }
        .hc-email-row input:focus { outline:2px solid var(--gold); outline-offset:1px; }
        .hc-email-row button { background:var(--pine); color:#fff; border:none; cursor:pointer; font-family:var(--font-sans);
          font-size:.8rem; letter-spacing:.18em; text-transform:uppercase; padding:11px 20px; border-radius:999px; transition:background .2s; }
        .hc-email-row button:hover { background:var(--pine-dark); }
        .hc-email-row button:disabled { opacity:.6; cursor:default; }
        .hc-email-msg { font-size:.85rem; margin-top:10px; }
        .hc-email-msg.ok { color:var(--ok); } .hc-email-msg.err { color:var(--no); }
        .hc-selector { text-align:center; margin-top:22px; font-size:.95rem; }
        .hc-selector a { color:var(--pine); text-decoration:none; border-bottom:1px solid var(--gold); }
        .hc-selector a:hover { color:var(--gold); }
        .hc-foot { font-size:.78rem; color:var(--muted); margin-top:34px; line-height:1.6; border-top:1px solid rgba(45,74,62,.15); padding-top:16px; }
      `}</style>

      <section className="hc-hero">
        <span className="hc-eyebrow">{t.hero.eyebrow}</span>
        <h1>{t.hero.title}</h1>
        <p className="sub">{t.hero.sub}</p>
        <div><span className="hc-updated">{t.hero.updated}</span></div>
      </section>

      {lang === 'en' && <ToolTrustLine locale={lang} />}

      <main className="hc-main">
        <section className="hc-panel">
          <h2>{t.panel.title}</h2>
          <div className="hc-grid">
            <div className="hc-field">
              <label className="top" htmlFor="hcp">{t.inputs.handicap}</label>
              <input type="number" id="hcp" min="0" max="54" step="0.1" placeholder={t.inputs.handicapPlaceholder}
                value={hcp} disabled={noHcp} onChange={(e) => setHcp(e.target.value)} />
              <label className="hc-nohcp">
                <input type="checkbox" checked={noHcp} onChange={(e) => setNoHcp(e.target.checked)} />
                {t.inputs.noHandicap}
              </label>
            </div>
            <div className="hc-field">
              <span className="top">{t.inputs.gender}</span>
              <div className="hc-seg">
                {[['M', t.inputs.male], ['F', t.inputs.female]].map(([v, l]) => (
                  <button key={v} type="button" className={gender === v ? 'active' : ''} onClick={() => setGender(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="hc-field">
              <span className="top">{t.inputs.cert}</span>
              <div className="hc-seg">
                {[['yes', t.inputs.yes], ['digital', t.inputs.digital], ['no', t.inputs.no]].map(([v, l]) => (
                  <button key={v} type="button" className={cert === v ? 'active' : ''} onClick={() => setCert(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="hc-field">
              <span className="top">{t.inputs.groupSize}</span>
              <div className="hc-seg">
                {[['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '4+']].map(([v, l]) => (
                  <button key={v} type="button" className={group === v ? 'active' : ''} onClick={() => setGroup(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="hc-field hc-field-full">
              <label className="top" htmlFor="area">{t.inputs.area} <span style={{ textTransform: 'none', letterSpacing: 0 }}>{t.inputs.areaHint}</span></label>
              <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
                {AREA_KEYS.map((v) => (
                  <option key={v} value={v}>{t.areas[v]}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="hc-check" onClick={runCheck}>{t.inputs.check}</button>
        </section>

        {result && (
          <section ref={resultsRef}>
            <div className="hc-summary">
              {result.hcp === 'none'
                ? fillNodes(t.results.summaryNoHandicap, { ok: <strong>{okCount}</strong>, warn: <strong>{warnCount}</strong> })
                : fillNodes(warnCount ? t.results.summaryHandicapWarn : t.results.summaryHandicap, {
                    hcp: <strong>{result.hcp}</strong>,
                    ok: <strong>{okCount}</strong>,
                    warn: <strong>{warnCount}</strong>,
                  })}
            </div>

            {result.recPool.length > 0 && (
              <div className="hc-rec">
                <div className="lbl">{t.results.recLabel}</div>
                <p>
                  {result.area !== 'any'
                    ? fill(t.results.recTextArea, {
                        tier: result.tier.label,
                        area: t.areasShort[result.area],
                        courses: result.recPool.slice(0, 3).join(', '),
                      })
                    : fill(t.results.recText, {
                        tier: result.tier.label,
                        courses: result.recPool.slice(0, 3).join(', '),
                      })}
                </p>
              </div>
            )}

            {GROUP_KEYS.map((key) => {
              const items = result.results.filter((x) => x.r.status === key)
              if (!items.length) return null
              return (
                <div key={key}>
                  <h3 className="hc-group-head">{t.groups[key]} <span className="count">{t.results.courseCount(items.length)}</span></h3>
                  <div className="hc-cards">
                    {items.map(({ course, r }) => (
                      <div key={course.name} className={`hc-card ${r.status}`}>
                        <div className="name">{course.name}</div>
                        <span className={`hc-badge ${r.status}`}>{r.label}</span>
                        <div className="detail">{r.detail}</div>
                        {r.borderline && <Link className="enquire" href="/contact">{t.results.askIfPossible}</Link>}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {result.pairNames.length > 0 && (
              <div className="hc-pairnote">
                <div className="lbl">{t.results.pairingLabel}</div>
                <p>
                  {fill(t.results.pairingText, {
                    who: result.group === '1' ? t.results.pairingSingle : t.results.pairingTwoBall,
                    courses: result.pairNames.join(', '),
                  })}
                </p>
              </div>
            )}

            {hasBorderline && (
              <div className="hc-cta">
                <h3>{t.cta.borderline}</h3>
                <p>{t.cta.borderlineDesc}</p>
                <div className="hc-cta-btns">
                  <Link className="btn" href="/contact">{t.cta.enquireAccess}</Link>
                  <WhatsAppCta label={t.cta.whatsappShort} />
                </div>
              </div>
            )}

            <div className="hc-email">
              <h3>{t.email.title}</h3>
              <p>{t.email.sub}</p>
              <div className="hc-email-row">
                <input type="email" placeholder={t.email.placeholder} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={sendEmail} disabled={emailState === 'sending'}>{emailState === 'sending' ? t.email.sending : t.email.button}</button>
              </div>
              {emailMsg && <div className={`hc-email-msg ${emailState === 'ok' ? 'ok' : 'err'}`}>{emailMsg}</div>}
            </div>

            {!hasBorderline && (
              <div className="hc-cta">
                <h3>{t.cta.ready}</h3>
                <p>{t.cta.readyDesc}</p>
                <div className="hc-cta-btns">
                  <Link className="btn" href="/contact">{t.cta.enquire}</Link>
                  <WhatsAppCta label={t.cta.whatsapp} />
                </div>
              </div>
            )}

            <p className="hc-selector">{t.selector} <Link href="/tools/course-selector">{t.selectorLink}</Link></p>

            <p className="hc-foot">{t.disclaimer} <a href={getLegalPath('privacy-policy', lang)} style={{ color:'inherit' }}>{getPrivacyLinkLabel(lang)}</a></p>
          </section>
        )}
      </main>
    </div>
  )
}
