'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import ToolTrustLine from '../../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../../lib/analytics'

const WA_MESSAGE = 'Hi Andy, I used the handicap checker on your site and I’d like help planning which Mallorca courses I can play.'
const WA_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_MESSAGE)}`

function WhatsAppCta({ label = 'Message Andy on WhatsApp' }) {
  function handleClick() {
    trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'handicap-checker' })
    trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'handicap-checker' })
  }
  return (
    <a className="btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17, flexShrink: 0 }} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

/* =====================================================================
   Course access data — from MMG_ENCYCLOPAEDIA_DATA_MASTER.md
   M/F: max handicap (men/women); cert: certificate required at booking;
   strict: club enforces limits rigidly; publicAccess: pay-and-play;
   restricted: members/guests/hotel-only; pairing: club commonly pairs
   solo/duo bookings with other guests in season; region: island area.
   ===================================================================== */
const COURSES = [
  // PALMA REGION
  { name: 'Golf Son Gual',          region: 'palma',     M: 33, F: 35, cert: true,  pairing: true },
  { name: 'Golf Son Vida',          region: 'palma',     M: 36, F: 36, cert: true },
  { name: 'Son Muntaner',           region: 'palma',     M: 36, F: 36, pairing: true },
  { name: 'Golf Son Quint',         region: 'palma',     M: 36, F: 36, pairing: true },
  { name: 'T Golf Palma',           region: 'palma',     M: 34, F: 36, pairing: true },
  { name: 'Palma Pitch & Putt',     region: 'palma',     M: 54, F: 54, publicAccess: true },
  { name: 'Golf Son Termes',        region: 'palma',     M: 36, F: 36, cert: true,  pairing: true },

  // SOUTHWEST REGION
  { name: 'Golf Santa Ponsa 1',     region: 'southwest', M: 28, F: 36, cert: true, publicAccess: true },
  { name: 'Golf Santa Ponsa 2',     region: 'southwest', M: 28, F: 36, cert: true, restricted: 'Members/guests only — contact Andy' },
  { name: 'Golf Santa Ponsa 3',     region: 'southwest', M: 28, F: 36, cert: true, restricted: 'Members/guests only — contact Andy' },
  { name: 'Real Golf de Bendinat',  region: 'southwest', M: 36, F: 36, pairing: true },
  { name: 'T Golf Calvià',          region: 'southwest', M: 28, F: 34, pairing: true },
  { name: 'Golf de Andratx',        region: 'southwest', M: 28, F: 36, cert: true, strict: true, pairing: true },

  // SOUTH REGION
  { name: 'Golf Maioris',           region: 'south',     M: 36, F: 36, publicAccess: true },
  { name: 'Golf Son Antem East',    region: 'south',     M: 54, F: 54, pairing: true },
  { name: 'Golf Son Antem West',    region: 'south',     M: 27, F: 35, pairing: true },

  // EAST REGION
  { name: 'Capdepera Golf',         region: 'east',      M: 36, F: 36, cert: true,  pairing: true },
  { name: 'Canyamel Golf',          region: 'east',      M: 36, F: 45, pairing: true },
  { name: 'Pula Golf',              region: 'east',      M: 34, F: 36, pairing: true },
  { name: 'Golf Club Son Servera',  region: 'east',      M: 36, F: 36, cert: true, publicAccess: true },
  { name: "Vall d'Or Golf",         region: 'east',      M: 36, F: 36, pairing: true },
  { name: 'Reserva Rotana',         region: 'east',      M: 36, F: 36, cert: true, restricted: 'Hotel guests only — cannot arrange' },

  // NORTH REGION
  { name: 'Club de Golf Alcanada',  region: 'north',     M: 33, F: 35, cert: true,  pairing: true },
  { name: 'Golf Pollença',          region: 'north',     M: 36, F: 36, publicAccess: true },
]

const BORDERLINE_MARGIN = 8

const AREA_LABELS = {
  any: 'Anywhere on the island',
  palma: 'Palma & around',
  southwest: 'Southwest (Calvià, Santa Ponsa, Andratx)',
  south: 'South (Llucmajor, Son Antem)',
  east: 'East (Capdepera, Canyamel, Pula)',
  north: 'North (Alcúdia, Pollença)',
}

function tierFromHcp(hcp, noHcp) {
  if (noHcp) return { key: 'new', label: 'a newer golfer' }
  if (hcp <= 9) return { key: 'low', label: 'a low-handicap golfer' }
  if (hcp <= 18) return { key: 'mid', label: 'a solid club golfer' }
  if (hcp <= 28) return { key: 'improver', label: 'an improving golfer' }
  return { key: 'relaxed', label: 'a relaxed, higher-handicap golfer' }
}

function evaluate(course, hcp, hasHcp, hasCert, groupSize, gender) {
  const limit = gender === 'M' ? course.M : course.F

  if (course.restricted) {
    // Hotel-only courses genuinely cannot be arranged for a standalone round.
    if (course.restricted === 'Hotel guests only — cannot arrange') {
      return {
        status: 'no',
        label: '❌ Hotel guests only',
        detail: 'A private hotel course — access needs a stay at the property, so I cannot arrange a standalone round here.',
      }
    }
    return {
      status: 'warn',
      label: '⚠️ Members & guests only',
      detail: 'Normally members and their guests only. I can enquire on your behalf, but access here is the club’s decision and is not guaranteed.',
    }
  }

  if (course.publicAccess && !course.cert) {
    return {
      status: 'ok',
      label: '✅ You can book',
      detail: 'Pay-and-play access. No handicap certificate needed here.',
    }
  }

  if (!hasHcp) {
    if (course.cert) {
      return {
        status: 'info',
        label: 'ℹ️ Certificate required',
        detail: `This club asks for a valid WHS/EGA handicap certificate at booking. You'll need to obtain one first — or ask me about playing here as part of a coached round.`,
      }
    }
    return {
      status: 'warn',
      label: '⚠️ Worth an enquiry',
      detail: `No official handicap is usually fine here for competent players, but it's the club's call. I'm happy to enquire — I can't promise it, but it's often possible.`,
    }
  }

  if (hcp > limit) {
    if (!course.strict && hcp <= limit + BORDERLINE_MARGIN) {
      return {
        status: 'warn',
        label: '⚠️ Just over the limit',
        detail: `The published limit is ${limit} for ${gender === 'M' ? 'men' : 'women'} and you're at ${hcp}. I'm happy to enquire, but access over the limit is the club's decision — I can't promise it.`,
        borderline: true,
      }
    }
    return {
      status: 'no',
      label: '❌ Handicap limit',
      detail: `This course requires ${limit} or lower for ${gender === 'M' ? 'men' : 'women'}${course.strict ? ' and enforces it strictly' : ''}. Worth revisiting once your handicap comes down.`,
    }
  }

  if (course.cert && !hasCert) {
    return {
      status: 'info',
      label: 'ℹ️ Certificate required',
      detail: `Your handicap qualifies, but this club asks for a valid WHS/EGA certificate at booking. You'll need to obtain one first — a digital app certificate is accepted.`,
    }
  }

  // Handicap qualifies. Small groups may be paired in peak season — flagged and
  // rolled into a single shared note rather than repeated on every card.
  if (course.pairing && groupSize <= 2) {
    return { status: 'ok', label: '✅ You can book', pairs: true, detail: 'Your handicap qualifies here.' }
  }

  if (course.cert) {
    return {
      status: 'ok',
      label: '✅ You can book',
      detail: `Your handicap qualifies and your certificate covers the club's requirement. Bring it (or the app) on the day.`,
    }
  }
  return {
    status: 'ok',
    label: '✅ You can book',
    detail: `Your handicap is comfortably within this course's limit.`,
  }
}

const GROUP_ORDER = [
  { key: 'ok',   title: 'You can book' },
  { key: 'warn', title: 'Worth an enquiry' },
  { key: 'info', title: 'Certificate needed first' },
  { key: 'no',   title: 'Out of reach for now' },
]

export default function HandicapCheckerClient() {
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
    const results = COURSES.map((c) => ({ course: c, r: evaluate(c, hcpVal, !noHcp, hasCert, groupSize, gender) }))

    const tier = tierFromHcp(hcpVal, noHcp)
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
      setEmailMsg('Please enter a valid email address.')
      return
    }
    if (!result) {
      setEmailState('err')
      setEmailMsg('Run the checker first so we have results to send.')
      return
    }
    setEmailState('sending')
    setEmailMsg('')
    const summary = result.results.map(({ course, r }) => `${course.name}: ${r.label.replace(/^[^\w]+\s*/, '')}`)
    try {
      const res = await fetch('/api/handicap-checker-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          handicap: result.hcp,
          gender: gender === 'M' ? 'Male' : 'Female',
          area: AREA_LABELS[result.area],
          tier: result.tier.label,
          recommendations: result.recPool,
          summary,
        }),
      })
      if (res.ok) {
        setEmailState('ok')
        setEmailMsg('Done — your access list is on its way to your inbox.')
        setEmail('')
      } else {
        setEmailState('err')
        setEmailMsg('Something went wrong — please try again in a moment.')
      }
    } catch (e) {
      setEmailState('err')
      setEmailMsg('Something went wrong — please try again in a moment.')
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
        .hc-eyebrow { font-family:'Jost',sans-serif; font-size:11px; font-weight:500; letter-spacing:.18em;
          text-transform:uppercase; color:var(--gold); }
        .hc-hero h1 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500;
          font-size:clamp(1.9rem,4vw,2.8rem); margin:10px 0; }
        .hc-hero .sub { font-family:'Jost',sans-serif; font-weight:300; font-size:.95rem;
          color:rgba(255,255,255,.85); max-width:620px; margin:0 auto; line-height:1.6; }
        .hc-updated { display:inline-block; margin-top:18px; border:1px solid var(--gold); color:var(--gold);
          font-family:'Jost',sans-serif; font-size:.75rem; letter-spacing:.1em; text-transform:uppercase;
          padding:6px 14px; border-radius:2px; }
        .hc-main { max-width:860px; margin:0 auto; padding:28px 20px 80px; font-family:'Jost',sans-serif; }
        .hc-panel { background:#fff; border-radius:6px; padding:26px 24px; box-shadow:0 2px 12px rgba(45,74,62,.08); margin-bottom:26px; }
        .hc-panel h2 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500; color:var(--pine); font-size:1.4rem; margin-bottom:18px; }
        .hc-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px 22px; }
        @media (max-width:560px){ .hc-grid { grid-template-columns:1fr; } }
        .hc-field .top { display:block; font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); margin-bottom:7px; }
        .hc-field input[type=number], .hc-field select { font-family:'Jost',sans-serif; font-size:.95rem; width:100%;
          padding:10px 12px; border:1px solid rgba(45,74,62,.3); border-radius:4px; background:#fff; color:var(--deep); }
        .hc-field input:focus, .hc-field select:focus { outline:2px solid var(--gold); outline-offset:1px; }
        .hc-seg { display:flex; flex-wrap:wrap; gap:8px; }
        .hc-seg button { font-family:'Jost',sans-serif; font-size:.88rem; cursor:pointer; padding:9px 16px;
          border:1px solid rgba(45,74,62,.3); border-radius:4px; background:#fff; color:var(--deep); transition:all .15s; }
        .hc-seg button.active { background:var(--pine); color:#fff; border-color:var(--pine); }
        .hc-nohcp { display:flex; align-items:center; gap:8px; margin-top:9px; font-size:.85rem; color:var(--muted); cursor:pointer; }
        .hc-nohcp input { accent-color:var(--pine); width:16px; height:16px; cursor:pointer; }
        .hc-field-full { grid-column:1 / -1; }
        .hc-check { margin-top:22px; width:100%; background:var(--gold); color:#fff; border:none; cursor:pointer;
          font-family:'Jost',sans-serif; font-size:.95rem; letter-spacing:.08em; text-transform:uppercase; padding:14px 20px; border-radius:4px; transition:background .2s; }
        .hc-check:hover { background:#a5862f; }
        .hc-summary { background:var(--pine); color:#fff; border-radius:6px; padding:20px 24px; margin-bottom:22px; line-height:1.6; font-size:.95rem; }
        .hc-summary strong { color:var(--gold); font-weight:500; }
        .hc-rec { background:#fff; border-left:4px solid var(--gold); border-radius:6px; padding:18px 20px; margin-bottom:22px; box-shadow:0 2px 8px rgba(45,74,62,.07); }
        .hc-rec .lbl { font-size:.68rem; letter-spacing:.16em; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
        .hc-rec p { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.12rem; color:#2C2A27; line-height:1.6; }
        .hc-pairnote { background:#fff; border-left:4px solid var(--pine); border-radius:6px; padding:16px 20px; margin:22px 0; box-shadow:0 2px 8px rgba(45,74,62,.07); }
        .hc-pairnote .lbl { font-size:.68rem; letter-spacing:.16em; text-transform:uppercase; color:var(--pine); margin-bottom:6px; }
        .hc-pairnote p { font-family:'Jost',sans-serif; font-size:.9rem; color:#4a463f; line-height:1.6; }
        .hc-group-head { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.35rem; font-weight:500; color:var(--pine);
          margin:26px 0 12px; display:flex; align-items:baseline; gap:10px; }
        .hc-group-head .count { font-family:'Jost',sans-serif; font-size:.8rem; color:var(--muted); }
        .hc-cards { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media (max-width:640px){ .hc-cards { grid-template-columns:1fr; } }
        .hc-card { background:#fff; border-radius:6px; padding:16px 18px; box-shadow:0 2px 8px rgba(45,74,62,.07); border-left:4px solid var(--muted); }
        .hc-card.ok { border-left-color:var(--ok); } .hc-card.warn { border-left-color:var(--gold); }
        .hc-card.no { border-left-color:var(--no); } .hc-card.info { border-left-color:var(--info); }
        .hc-card .name { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.15rem; font-weight:500; color:var(--pine); margin-bottom:6px; }
        .hc-badge { display:inline-block; font-size:.72rem; letter-spacing:.04em; padding:3px 10px; border-radius:10px; margin-bottom:8px; }
        .hc-badge.ok { background:var(--ok-bg); color:var(--ok); } .hc-badge.warn { background:var(--warn-bg); color:var(--warn); }
        .hc-badge.no { background:var(--no-bg); color:var(--no); } .hc-badge.info { background:var(--info-bg); color:var(--info); }
        .hc-card .detail { font-size:.84rem; color:var(--muted); line-height:1.55; }
        .hc-card a.enquire { display:inline-block; margin-top:8px; font-size:.8rem; color:var(--gold); text-decoration:none; letter-spacing:.04em; }
        .hc-card a.enquire:hover { text-decoration:underline; }
        .hc-cta { background:var(--pine-dark); color:#fff; border-radius:6px; padding:24px; margin-top:30px; text-align:center; }
        .hc-cta h3 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:400; font-size:1.4rem; margin-bottom:8px; }
        .hc-cta p { font-size:.9rem; color:rgba(255,255,255,.85); margin-bottom:16px; line-height:1.6; }
        .hc-cta a.btn { display:inline-block; background:var(--gold); color:#fff; text-decoration:none; font-size:.85rem;
          letter-spacing:.06em; text-transform:uppercase; padding:12px 24px; border-radius:4px; transition:background .2s; }
        .hc-cta a.btn:hover { background:#a5862f; }
        .hc-cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .btn-wa { display:inline-flex; align-items:center; gap:9px; background:#25D366; color:#fff; text-decoration:none;
          font-family:'Jost',sans-serif; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:12px 22px; border-radius:4px; transition:background .2s; }
        .btn-wa:hover { background:#1eb858; }
        .hc-email { background:#fff; border-radius:6px; padding:24px; box-shadow:0 2px 12px rgba(45,74,62,.08); margin-top:26px; }
        .hc-email h3 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500; color:var(--pine); font-size:1.3rem; margin-bottom:6px; }
        .hc-email p { font-size:.86rem; color:var(--muted); margin-bottom:14px; line-height:1.55; }
        .hc-email-row { display:flex; gap:10px; flex-wrap:wrap; }
        .hc-email-row input { flex:1; min-width:220px; font-family:'Jost',sans-serif; font-size:.95rem; padding:11px 12px; border:1px solid rgba(45,74,62,.3); border-radius:4px; }
        .hc-email-row input:focus { outline:2px solid var(--gold); outline-offset:1px; }
        .hc-email-row button { background:var(--pine); color:#fff; border:none; cursor:pointer; font-family:'Jost',sans-serif;
          font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; padding:11px 20px; border-radius:4px; transition:background .2s; }
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
        <span className="hc-eyebrow">Free tool</span>
        <h1>Can I Play It?</h1>
        <p className="sub">Enter your handicap and see instantly which of Mallorca&rsquo;s courses you can book, which need a certificate, and where I can arrange access for you.</p>
        <div><span className="hc-updated">Updated July 2026</span></div>
      </section>

      <ToolTrustLine />

      <main className="hc-main">
        <section className="hc-panel">
          <h2>Your details</h2>
          <div className="hc-grid">
            <div className="hc-field">
              <label className="top" htmlFor="hcp">Handicap index</label>
              <input type="number" id="hcp" min="0" max="54" step="0.1" placeholder="e.g. 18.4"
                value={hcp} disabled={noHcp} onChange={(e) => setHcp(e.target.value)} />
              <label className="hc-nohcp">
                <input type="checkbox" checked={noHcp} onChange={(e) => setNoHcp(e.target.checked)} />
                I don&rsquo;t have an official handicap
              </label>
            </div>
            <div className="hc-field">
              <span className="top">Gender</span>
              <div className="hc-seg">
                {[['M', 'Male'], ['F', 'Female']].map(([v, l]) => (
                  <button key={v} type="button" className={gender === v ? 'active' : ''} onClick={() => setGender(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="hc-field">
              <span className="top">Handicap certificate</span>
              <div className="hc-seg">
                {[['yes', 'Yes'], ['digital', 'Digital (app)'], ['no', 'No']].map(([v, l]) => (
                  <button key={v} type="button" className={cert === v ? 'active' : ''} onClick={() => setCert(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="hc-field">
              <span className="top">Group size</span>
              <div className="hc-seg">
                {[['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '4+']].map(([v, l]) => (
                  <button key={v} type="button" className={group === v ? 'active' : ''} onClick={() => setGroup(v)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="hc-field hc-field-full">
              <label className="top" htmlFor="area">Where are you based or staying? <span style={{ textTransform: 'none', letterSpacing: 0 }}>(optional — tailors your recommendation)</span></label>
              <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
                {Object.entries(AREA_LABELS).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="hc-check" onClick={runCheck}>Check my access</button>
        </section>

        {result && (
          <section ref={resultsRef}>
            <div className="hc-summary">
              {result.hcp === 'none'
                ? <>Without an official handicap you can still book <strong>{okCount}</strong> of Mallorca&rsquo;s courses outright, and <strong>{warnCount}</strong> more are worth an enquiry. The premium member clubs will want a certificate first.</>
                : <>Playing off <strong>{result.hcp}</strong>, you can book <strong>{okCount}</strong> of Mallorca&rsquo;s courses{warnCount ? <>, with <strong>{warnCount}</strong> more worth an enquiry</> : ''}.</>}
            </div>

            {result.recPool.length > 0 && (
              <div className="hc-rec">
                <div className="lbl">Andy&rsquo;s pick for you</div>
                <p>
                  As {result.tier.label}{result.area !== 'any' ? ` around ${AREA_LABELS[result.area].replace(/ \(.*\)/, '')}` : ''}, I&rsquo;d start with {result.recPool.slice(0, 3).join(', ')}. Tell me your dates and I&rsquo;ll build the round order and tee times around your golf.
                </p>
              </div>
            )}

            {GROUP_ORDER.map((g) => {
              const items = result.results.filter((x) => x.r.status === g.key)
              if (!items.length) return null
              return (
                <div key={g.key}>
                  <h3 className="hc-group-head">{g.title} <span className="count">{items.length} course{items.length > 1 ? 's' : ''}</span></h3>
                  <div className="hc-cards">
                    {items.map(({ course, r }) => (
                      <div key={course.name} className={`hc-card ${r.status}`}>
                        <div className="name">{course.name}</div>
                        <span className={`hc-badge ${r.status}`}>{r.label}</span>
                        <div className="detail">{r.detail}</div>
                        {r.borderline && <Link className="enquire" href="/contact">Ask if it&rsquo;s possible →</Link>}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {result.pairNames.length > 0 && (
              <div className="hc-pairnote">
                <div className="lbl">Peak-season pairing</div>
                <p>
                  Playing as {result.group === '1' ? 'a single golfer' : 'a two-ball'}, most Mallorca clubs pair small bookings with other players in peak season — you can usually reserve the whole tee time as a private group instead. Likely at: {result.pairNames.join(', ')}. I know the exact private-tee costs for the Arabella estate courses and Alcanada; for the others I&rsquo;ll confirm when you enquire.
                </p>
              </div>
            )}

            {hasBorderline && (
              <div className="hc-cta">
                <h3>A few shots over a limit?</h3>
                <p>Published limits are sometimes more flexible than they look, especially midweek and outside peak season. I&rsquo;m happy to enquire on your behalf — but the club always has the final say, so I can&rsquo;t promise access.</p>
                <div className="hc-cta-btns">
                  <Link className="btn" href="/contact">Enquire About Access</Link>
                  <WhatsAppCta label="Ask on WhatsApp" />
                </div>
              </div>
            )}

            <div className="hc-email">
              <h3>Email my access list</h3>
              <p>Get your personal course access list and Andy&rsquo;s pick sent to your inbox, plus occasional Mallorca golf planning notes. No spam, unsubscribe any time.</p>
              <div className="hc-email-row">
                <input type="email" placeholder="you@example.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={sendEmail} disabled={emailState === 'sending'}>{emailState === 'sending' ? 'Sending…' : 'Send my list'}</button>
              </div>
              {emailMsg && <div className={`hc-email-msg ${emailState === 'ok' ? 'ok' : 'err'}`}>{emailMsg}</div>}
            </div>

            {!hasBorderline && (
              <div className="hc-cta">
                <h3>Ready to plan your golf?</h3>
                <p>Tell me your dates and group and I&rsquo;ll sort the tee times, round order and anything the checker flagged. No form to fill if you&rsquo;d rather just message me.</p>
                <div className="hc-cta-btns">
                  <Link className="btn" href="/contact">Enquire</Link>
                  <WhatsAppCta />
                </div>
              </div>
            )}

            <p className="hc-selector">Not sure which of these to play? <Link href="/tools/course-selector">Try the course selector →</Link></p>

            <p className="hc-foot">
              Handicap limits and certificate rules are set by each club and can change without notice — always confirmed at the time of booking. A daily Spanish Golf Federation licence (€3) applies at most member clubs for non-federated visitors. This checker is a planning guide, not a booking guarantee.
            </p>
          </section>
        )}
      </main>
    </div>
  )
}
