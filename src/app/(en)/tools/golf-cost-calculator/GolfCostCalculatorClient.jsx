'use client'

import { useRef, useState } from 'react'
import ToolTrustLine from '../../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../../lib/analytics'
import { getGolfCostCalculatorT } from '../../../../lib/golf-cost-calculator-translations'

const WA_MESSAGE = 'Hi Andy, I used the trip cost calculator on your site and I’d like a real quote for my Mallorca golf trip.'
const WA_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_MESSAGE)}`

function WhatsAppQuoteLink() {
  function handleClick() {
    trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'golf-cost-calculator' })
    trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'golf-cost-calculator' })
  }
  return (
    <a
      href={WA_HREF}
      data-analytics-manual="true"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, color: '#cfe9d6', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 13.5, letterSpacing: '.02em', marginTop: 4 }}
    >
      <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: 18, height: 18, flexShrink: 0 }} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Prefer to message? WhatsApp Andy
    </a>
  )
}

/* =====================================================================
   COST DATA. Real 2026 Mallorca pricing ranges (EUR).
   Source: MMG_COURSE_PRICING_MASTER (May 2026) + market research.
   [lo, hi] = low season to peak season per unit.
===================================================================== */
const COSTS = {
  greenFees: {
    value:    [55, 85],
    balanced: [74, 126],
    premium:  [80, 165],
    luxury:   [96, 220],
  },
  buggyPerRound:    [30, 42],
  clubHirePerRound: [25, 40],
  transportPerDay:  [80, 140],
  dining: {
    casual:  [35, 55],
    local:   [55, 85],
    premium: [85, 150],
  },
  accommodation: {
    self:    [0, 0],
    '3star': [70, 130],
    '4star': [120, 200],
    '5star': [200, 350],
    villa:   [180, 350],
  },
}

const COURSE_MIX = {
  value:    ['Golf Pollença', 'Golf Maioris', 'Son Antem East', 'Capdepera Golf'],
  balanced: ['Golf de Bendinat', 'Canyamel Golf', 'Pula Golf', 'Golf Son Antem West', 'Vall d\'Or Golf', 'Son Servera'],
  premium:  ['Son Gual', 'Son Vida', 'T Golf Palma', 'T Golf Calvià (Poniente)', 'Golf de Andratx'],
  luxury:   ['Club de Golf Alcanada', 'Son Muntaner', 'T Golf Calvià (Poniente)'],
}

const PREF_NOTES = {
  scenic:      'You asked for scenic. Andy will weight the mix toward courses with the best views and settings.',
  famous:      'You asked for famous names. Andy will prioritise the island\'s best-known courses in this tier.',
  challenging: 'You asked for a challenge. Andy will pick the courses in this tier that ask the most questions of your game.',
  relaxed:     'You asked for relaxed golf. Andy will favour friendlier layouts and gentler pacing.',
  near:        'You want courses near your hotel. Once Andy knows where you\'re staying, he\'ll tighten the mix around it.',
  none:        'A balanced mix from this tier. Andy will tailor it once he knows your group.',
}

const PACKAGES = {
  value:    'Course Picks &amp; Booking Help. Andy confirms your course mix, books tee times at the right rates, and shares his course notes for each round.',
  balanced: 'Trip Planning + One Coached Round. Andy plans the trip end to end and joins you for a Play With A Pro round at one of your courses.',
  premium:  'Signature Golf Day + Full Trip Planning. A hosted Signature Day with Andy plus full planning of courses, tee times, and transport.',
  luxury:   'Full Concierge Trip. Every round, transfer, table, and tee time arranged, with Andy hosting your marquee golf day.',
}

const AREA_NAMES = {
  southwest: 'the Southwest',
  palma: 'the Palma area',
  north: 'the North',
  east: 'the East',
  south: 'the South',
}

function range(perUnit, units) { return [perUnit[0] * units, perUnit[1] * units] }
function addR(a, b) { return [a[0] + b[0], a[1] + b[1]] }
function fmt(n) { return '€' + Math.round(n).toLocaleString('en-GB') }
function fmtR(r) { return fmt(r[0]) + ' – ' + fmt(r[1]) }
function mid(r) { return (r[0] + r[1]) / 2 }

function calculate(state) {
  const s = state
  const buggyRounds = s.buggy === 'yes' ? s.rounds : s.buggy === 'some' ? Math.ceil(s.rounds / 2) : 0
  const nights = Math.max(0, s.days - 1)

  const greenFees = range(COSTS.greenFees[s.budget], s.rounds * s.golfers)
  const buggy     = range(COSTS.buggyPerRound, buggyRounds * s.golfers)
  const clubs     = s.clubs === 'yes' ? range(COSTS.clubHirePerRound, s.rounds * s.golfers) : [0, 0]
  const transport = s.transport === 'yes' ? range(COSTS.transportPerDay, s.days) : [0, 0]
  const dining    = range(COSTS.dining[s.dining], s.days * s.golfers)
  const accom     = range(COSTS.accommodation[s.accommodation], nights * s.golfers)

  const golfOnly = addR(addR(greenFees, buggy), clubs)
  const total    = addR(addR(addR(golfOnly, transport), dining), accom)

  return {
    greenFees, buggy, clubs, transport, dining, accom, golfOnly, total,
    perGolfer: [total[0] / s.golfers, total[1] / s.golfers],
    perRound:  [golfOnly[0] / (s.rounds * s.golfers), golfOnly[1] / (s.rounds * s.golfers)],
  }
}

const DEFAULT_STATE = {
  days: 4, golfers: 2, rounds: 3,
  budget: 'balanced', preference: 'none', area: 'flexible',
  buggy: 'yes', clubs: 'no', transport: 'yes',
  accommodation: '4star', dining: 'local',
}

const MAILERLITE_COURSE_SELECTOR = 'https://assets.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe'
const COST_GUIDE_PDF_URL = '/downloads/cost-guide.pdf'

export default function GolfCostCalculatorClient({ lang = 'en' }) {
  const t = getGolfCostCalculatorT(lang)
  const [step, setStep] = useState(1)
  const [state, setState] = useState({ ...DEFAULT_STATE })
  const [results, setResults] = useState(null)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSending, setEmailSending] = useState(false)
  const [pdfSent, setPdfSent] = useState(false)
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false)
  const [quoteBuilderOpen, setQuoteBuilderOpen] = useState(false)
  const [quoteEmail, setQuoteEmail] = useState('')
  const [quoteDates, setQuoteDates] = useState('')
  const [quoteNotes, setQuoteNotes] = useState('')
  const [quoteSubmitting, setQuoteSubmitting] = useState(false)
  const [quoteSuccess, setQuoteSuccess] = useState(false)
  const [quoteError, setQuoteError] = useState(false)
  const containerRef = useRef(null)

  function scrollToTop() {
    const el = containerRef.current
    if (!el) return
    window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 70), behavior: 'smooth' })
  }

  function set(key, val) {
    setState(prev => ({ ...prev, [key]: val }))
  }

  function goTo(n) {
    if (n === 4) {
      setResults(calculate(state))
    }
    setStep(n)
    scrollToTop()
  }

  function restart() {
    setState({ ...DEFAULT_STATE })
    setResults(null)
    setEmail('')
    setEmailSent(false)
    setEmailError(false)
    setPdfSent(false)
    setSubscribeNewsletter(false)
    goTo(1)
  }

  async function requestCostPdf() {
    if (!email) return
    setPdfSent(true)
    try {
      await fetch('/api/lead-magnet-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, guide: 'cost-guide', subscribeNewsletter }),
      })
    } catch { /* fire and forget */ }
  }

  async function emailEstimate() {
    if (!email || !email.includes('@')) return
    setEmailSending(true)
    setEmailError(false)

    // Fire-and-forget: add to MailerLite Course Selector Leads
    const mlBody = new URLSearchParams()
    mlBody.set('fields[email]', email)
    mlBody.set('ml-submit', '1')
    mlBody.set('anticsrf', 'true')
    fetch(MAILERLITE_COURSE_SELECTOR, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: mlBody.toString(),
    }).catch(() => {})
    const r = results || calculate(state)
    const s = state

    try {
      const res = await fetch('/api/send-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tool: 'golf-cost-calculator',
          subject: 'Your Mallorca golf trip cost estimate',
          data: {
            days: s.days,
            golfers: s.golfers,
            rounds: s.rounds,
            buggy: s.buggy !== 'no',
            clubs: s.clubs === 'yes',
            transport: s.transport === 'yes',
            greenFees: r.greenFees,
            buggyRange: r.buggy,
            clubsRange: r.clubs,
            transportRange: r.transport,
            dining: r.dining,
            accommodation: r.accom,
            total: r.total,
            perGolfer: r.perGolfer,
          },
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

  async function submitQuote(e) {
    e.preventDefault()
    if (!quoteEmail || !quoteEmail.includes('@')) {
      setQuoteError(true)
      return
    }
    setQuoteError(false)
    setQuoteSubmitting(true)

    const r = results || calculate(state)
    const s = state
    const courses = COURSE_MIX[s.budget].slice(0, Math.min(s.rounds, COURSE_MIX[s.budget].length))

    try {
      const res = await fetch('/api/trip-quote-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: quoteEmail,
          golfers: s.golfers,
          days: s.days,
          rounds: s.rounds,
          budget: s.budget,
          courses: courses.join(', '),
          estimate: fmtR(r.total),
          perGolfer: fmtR(r.perGolfer),
          dates: quoteDates || null,
          notes: quoteNotes || null,
        }),
      })

      setQuoteSubmitting(false)
      if (res.ok) {
        setQuoteSuccess(true)
      } else {
        setQuoteError(true)
      }
    } catch {
      setQuoteSubmitting(false)
      setQuoteError(true)
    }
  }

  const fieldStyle = { marginBottom: 18 }
  const labelStyle = { display:'block', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'#2D4A3E', marginBottom:12, fontWeight:600 }
  const circleBtn = { width:44, height:44, borderRadius:'50%', border:'1.5px solid #B8973C', background:'#fff', color:'#2D4A3E', fontSize:22, cursor:'pointer', lineHeight:1, fontFamily:'inherit', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }

  function Stepper({ label, stateKey, min, max, unit }) {
    return (
      <div style={fieldStyle}>
        <label style={labelStyle}>{label}</label>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <button type="button" style={circleBtn} onClick={() => set(stateKey, Math.max(min, state[stateKey] - 1))}>−</button>
          <span style={{ fontFamily:'var(--font-sans)', fontSize:26, color:'#2D4A3E', minWidth:48, textAlign:'center', fontWeight:400 }}>{state[stateKey]}</span>
          <button type="button" style={circleBtn} onClick={() => set(stateKey, Math.min(max, state[stateKey] + 1))}>+</button>
          <span style={{ fontFamily:'var(--font-sans)', fontSize:12, color:'#8A7F74', fontWeight:300 }}>{unit}</span>
        </div>
      </div>
    )
  }

  function OptGroup({ label, stateKey, opts, cols }) {
    const colCount = cols || 2
    return (
      <div style={fieldStyle}>
        <label style={labelStyle}>{label}</label>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${colCount}, 1fr)`, gap:8 }}>
          {opts.map(o => {
            const sel = state[stateKey] === o.val
            return (
              <button
                key={o.val}
                style={{ border:`1.5px solid ${sel ? '#B8973C' : '#d9cfb8'}`, background: sel ? '#2D4A3E' : '#F7F4EF', borderRadius:10, padding:'13px 10px', cursor:'pointer', fontSize:13, fontFamily:'inherit', color: sel ? '#F7F4EF' : '#2C2A27', transition:'all .15s', textAlign:'center', fontWeight:500, lineHeight:1.3 }}
                onClick={() => set(stateKey, o.val)}
              >
                {o.label}
                {o.small && <span style={{ display:'block', fontSize:10, color: sel ? '#D4B068' : '#8A7F74', marginTop:3, fontWeight:300 }}>{o.small}</span>}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  const r = results

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .gcc-hero { background:#2D4A3E; color:#F7F4EF; padding:52px 24px 48px; text-align:center; }
        .gcc-eyebrow { display:inline-block; font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#CBA968; margin-bottom:16px; }
        .gcc-h1 { font-family:var(--font-serif); font-weight:500; font-size:clamp(2.1rem,5vw,3.2rem); line-height:1.1; color:#F7F4EF; max-width:600px; margin:0 auto; }
        .gcc-sub { font-family:var(--font-sans); font-weight:300; font-size:1rem; line-height:1.6; color:rgba(247,244,239,0.78); max-width:480px; margin:16px auto 0; }
        .gcc-wrap { max-width:680px; margin:0 auto; padding:20px 16px 64px; }
        .gcc-progress { display:flex; gap:6px; margin:22px 0 18px; }
        .gcc-progress span { flex:1; height:4px; border-radius:2px; background:#ddd4c0; transition:background .3s; }
        .gcc-progress span.on { background:#B8973C; }
        .gcc-step-label { font-family:var(--font-sans); font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:#8A7F74; margin-bottom:6px; }
        .gcc-card { background:#fff; border:1px solid #e6ddc9; border-radius:14px; padding:22px 18px; box-shadow:0 2px 10px rgba(21,57,43,.06); }
        .gcc-card h2 { font-family:var(--font-serif); font-size:26px; color:#2D4A3E; margin-bottom:6px; font-weight:500; line-height:1.15; }
        .gcc-card .sub { font-size:13px; color:#8A7F74; margin-bottom:20px; line-height:1.6; font-weight:300; }
        .gcc-field { margin-bottom:18px; }
        .gcc-flabel { display:block; font-family:var(--font-sans); font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:#2D4A3E; margin-bottom:12px; font-weight:600; }
        .gcc-opts { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .gcc-opts.three { grid-template-columns:1fr 1fr 1fr; }
        .gcc-opt { border:1.5px solid #d9cfb8; background:#F7F4EF; border-radius:10px; padding:13px 12px; cursor:pointer; font-size:13px; font-family:inherit; color:#2C2A27; transition:all .15s; text-align:center; font-weight:500; line-height:1.3; }
        .gcc-opt.sel { border-color:#B8973C; background:#2D4A3E; color:#F7F4EF; }
        .gcc-opt:hover:not(.sel) { border-color:#B8973C; background:#faf7f0; }
        .gcc-stepper { display:flex; align-items:center; gap:14px; }
        .gcc-stepper button { width:44px; height:44px; border-radius:50%; border:1.5px solid #B8973C; background:#fff; color:#2D4A3E; font-size:22px; cursor:pointer; line-height:1; font-family:inherit; }
        .gcc-stepper button:active { background:#EDE9E1; }
        .gcc-val { font-family:var(--font-sans); font-size:26px; color:#2D4A3E; min-width:48px; text-align:center; font-weight:400; }
        .gcc-unit { font-family:var(--font-sans); font-size:12px; color:#8A7F74; font-weight:300; }
        .gcc-nav { display:flex; gap:10px; margin-top:22px; }
        .gcc-btn { border:none; border-radius:999px; padding:16px 24px; font-size:11px; cursor:pointer; font-family:var(--font-sans); font-weight:500; letter-spacing:.16em; line-height:1.25; text-transform:uppercase; transition:opacity .15s, transform .15s; }
        .gcc-btn:hover { transform:translateY(-1px); }
        .gcc-btn.primary { background:#2D4A3E; color:#F7F4EF; flex:1; }
        .gcc-btn.primary:hover { background:#3D6455; }
        .gcc-btn.ghost { background:transparent; color:#8A7F74; border:1.5px solid #d9cfb8; }
        .gcc-btn.gold { background:#B8973C; color:#fff; flex:1; }
        .gcc-btn.gold:hover { opacity:.9; }
        /* Results */
        .gcc-hero-est { background:#2D4A3E; color:#F7F4EF; border-radius:14px; padding:26px 20px; text-align:center; margin-bottom:14px; }
        .gcc-hero-est .lab { font-family:var(--font-sans); font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:#D4B068; font-weight:500; }
        .gcc-hero-est .big { font-family:var(--font-serif); font-size:clamp(32px,8vw,44px); font-weight:500; margin:10px 0 4px; letter-spacing:-0.02em; line-height:1.02; }
        .gcc-hero-est .per { font-family:var(--font-sans); font-size:14px; color:#cfdad2; font-weight:300; }
        .gcc-approx { font-size:12px; color:#D4B068; margin-top:10px; font-style:italic; }
        .gcc-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:14px; }
        .gcc-mini { background:#fff; border:1px solid #e6ddc9; border-radius:14px; padding:16px; text-align:center; }
        .gcc-mini .lab { font-family:var(--font-sans); font-size:9px; letter-spacing:.12em; text-transform:uppercase; color:#8A7F74; font-weight:500; }
        .gcc-mini .num { font-family:var(--font-serif); font-size:20px; color:#2D4A3E; font-weight:500; margin-top:6px; line-height:1.1; }
        .gcc-rcard { background:#fff; border:1px solid #e6ddc9; border-radius:14px; padding:20px 18px; margin-bottom:14px; }
        .gcc-rcard h3 { font-family:var(--font-serif); font-size:20px; color:#2D4A3E; margin-bottom:12px; display:flex; align-items:center; gap:8px; font-weight:500; line-height:1.2; }
        .gcc-rcard h3 .dot { width:8px; height:8px; border-radius:50%; background:#B8973C; display:inline-block; flex-shrink:0; }
        .gcc-rcard ul { list-style:none; }
        .gcc-rcard li { padding:8px 0; border-bottom:1px solid #f1ead9; font-size:13px; display:flex; justify-content:space-between; gap:10px; font-weight:300; color:#2C2A27; }
        .gcc-rcard li:last-child { border-bottom:none; }
        .gcc-rcard li .amt { color:#2D4A3E; font-weight:400; white-space:nowrap; font-family:var(--font-sans); }
        .gcc-rcard p { font-family:var(--font-sans); font-size:13px; font-weight:300; line-height:1.6; color:#8A7F74; }
        .gcc-tag { display:inline-flex; align-items:center; min-height:34px; background:#F7F4EF; border:1px solid #D4B068; color:#2D4A3E; border-radius:999px; padding:6px 14px; font-size:11px; font-family:var(--font-sans); font-weight:500; letter-spacing:.12em; text-transform:uppercase; margin:4px 6px 4px 0; }
        .gcc-bar { height:10px; border-radius:5px; background:#EDE9E1; overflow:hidden; margin:4px 0 10px; }
        .gcc-bar i { display:block; height:100%; background:#B8973C; border-radius:5px; }
        .gcc-bar-row { font-family:var(--font-sans); font-size:12px; display:flex; justify-content:space-between; color:#2C2A27; font-weight:400; margin-bottom:4px; }
        .gcc-quote-cta { position:relative; background:linear-gradient(150deg, #0e2a1f 0%, #15392b 60%, #1f4a38 100%); border:1px solid #b59a5f; border-radius:14px; padding:28px 22px; margin-top:18px; margin-bottom:14px; text-align:center; color:#f7f2e7; overflow:hidden; }
        .gcc-quote-cta::before { content:''; position:absolute; inset:6px; border:1px solid rgba(205,185,138,.35); border-radius:9px; pointer-events:none; }
        .gcc-quote-cta__inner { position:relative; z-index:1; }
        .gcc-quote-cta__eyebrow { font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.24em; text-transform:uppercase; color:#cdb98a; margin-bottom:8px; }
        .gcc-quote-cta__title { font-family:var(--font-serif); font-size:clamp(2rem, 3.6vw, 2.45rem); color:#fff; font-weight:500; margin:0 0 10px; line-height:1.08; text-wrap:balance; }
        .gcc-quote-cta__body { font-family:var(--font-sans); font-size:14px; color:#cfdad2; max-width:420px; margin:0 auto 18px; line-height:1.65; }
        .gcc-quote-cta__note { font-family:var(--font-serif); font-size:18px; color:#cdb98a; margin-top:10px; font-style:italic; line-height:1.35; }
        .gcc-cta-box { background:#1A1916; color:#F7F4EF; border-radius:14px; padding:24px 20px; margin-top:8px; }
        .gcc-cta-box h3 { font-family:var(--font-serif); font-size:24px; margin-bottom:8px; color:#fff; font-weight:500; line-height:1.2; }
        .gcc-cta-box p { font-family:var(--font-sans); font-size:13px; color:#cfdad2; margin-bottom:18px; font-weight:300; line-height:1.6; }
        .gcc-cta-box a { display:block; text-align:center; text-decoration:none; width:100%; margin-bottom:10px; padding:14px 20px; border:none; border-radius:10px; font-size:15px; font-family:inherit; cursor:pointer; }
        .gcc-email-capture { display:flex; flex-direction:column; gap:8px; margin-bottom:6px; align-items:center; }
        .gcc-email-capture input { width:100%; border:none; border-radius:10px; padding:14px 16px; font-size:15px; font-family:inherit; text-align:center; }
        .gcc-email-capture button { width:100%; }
        .gcc-disclaimer { font-family:var(--font-sans); font-size:11px; color:#8A7F74; text-align:center; margin-top:20px; font-weight:300; line-height:1.5; }
        .gcc-tools-panel { background:#f4f1eb; border:1px solid #e0d8cb; border-radius:14px; padding:18px 20px; margin:20px 0; text-align:center; }
        .gcc-tools-panel__label { font-family:var(--font-sans); font-size:10px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#8a7f74; margin-bottom:12px; }
        .gcc-tools-panel__links { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; }
        .gcc-tools-panel__link { display:inline-flex; align-items:center; justify-content:center; min-height:42px; padding:10px 18px; font-size:10px; font-family:var(--font-sans); font-weight:500; letter-spacing:.14em; text-transform:uppercase; border:1px solid rgba(45,74,62,.18); color:#2d4a3e; text-decoration:none; border-radius:999px; background:#fff; transition:border-color .2s, color .2s, transform .2s; }
        .gcc-tools-panel__link:hover { border-color:#B8973C; color:#1A1916; transform:translateY(-1px); }
        .gcc-sheet-head { background:#15392b; color:#f7f2e7; padding:20px 22px 18px; position:sticky; top:0; border-radius:18px 18px 0 0; z-index:2; }
        .gcc-sheet-head__eyebrow { font-family:var(--font-sans); font-size:10px; font-weight:500; letter-spacing:.22em; text-transform:uppercase; color:#cdb98a; margin-bottom:4px; }
        .gcc-sheet-head__title { font-family:var(--font-serif); font-size:24px; color:#fff; font-weight:500; padding-right:36px; line-height:1.08; }
        .gcc-sheet-head__close { position:absolute; top:16px; right:16px; width:34px; height:34px; border-radius:50%; border:1px solid rgba(205,185,138,.5); background:transparent; color:#f7f2e7; font-size:17px; line-height:1; cursor:pointer; font-family:var(--font-sans); }
        .gcc-sheet-summary__label { font-family:var(--font-sans); font-size:10px; font-weight:500; letter-spacing:.16em; text-transform:uppercase; color:#8a7f74; margin-bottom:8px; }
        .gcc-sheet-success__icon { width:54px; height:54px; border-radius:50%; background:#15392b; color:#cdb98a; display:flex; align-items:center; justify-content:center; font-size:24px; margin:0 auto 16px; }
        .gcc-sheet-success__title { font-family:var(--font-serif); font-size:24px; color:#15392b; margin-bottom:8px; line-height:1.08; }
        .gcc-sheet-success__body { font-family:var(--font-sans); font-size:15px; color:#2c2a27; max-width:320px; margin:0 auto 18px; line-height:1.65; }
      `}</style>

      {/* HERO */}
      <section className="gcc-hero">
        <h1 className="gcc-h1">Mallorca golf trip cost calculator</h1>
        <p className="gcc-sub">Three steps. A cost estimate for your trip with a suggested course mix.</p>
      </section>

      <ToolTrustLine />

      <div className="gcc-wrap">
        {/* PROGRESS */}
        <div className="gcc-progress">
          {[1,2,3,4].map(i => (
            <span key={i} className={i <= step ? 'on' : ''} />
          ))}
        </div>

        {/* STEP 1: TRIP BASICS */}
        {step === 1 && (
          <div className="gcc-card">
            <div className="gcc-step-label">Step 1 of 4</div>
            <h2>Your trip basics</h2>
            <p className="sub">Tell us about the group and how much golf you want.</p>
            <Stepper label="Trip length (days)" stateKey="days" min={1} max={7} unit="days" />
            <Stepper label="Number of golfers" stateKey="golfers" min={1} max={8} unit="golfers" />
            <Stepper label="Rounds of golf" stateKey="rounds" min={1} max={6} unit="rounds" />
            <div className="gcc-nav">
              <button className="gcc-btn primary" onClick={() => goTo(2)}>Continue</button>
            </div>
          </div>
        )}

        {/* STEP 2: GOLF STYLE */}
        {step === 2 && (
          <div className="gcc-card">
            <div className="gcc-step-label">Step 2 of 4</div>
            <h2>Your golf style</h2>
            <p className="sub">This shapes the course mix we suggest.</p>
            <OptGroup
              label="Budget style"
              stateKey="budget"
              opts={[
                {val:'value',    label:'Value',   small:'Smart spending'},
                {val:'balanced', label:'Balanced', small:'Quality & value'},
                {val:'premium',  label:'Premium',  small:'Top-tier courses'},
                {val:'luxury',   label:'Luxury',   small:'Bucket-list trip'},
              ]}
            />
            <OptGroup
              label="Course preference"
              stateKey="preference"
              cols={3}
              opts={[
                {val:'scenic',      label:'Scenic'},
                {val:'famous',      label:'Famous'},
                {val:'challenging', label:'Challenging'},
                {val:'relaxed',     label:'Relaxed'},
                {val:'near',        label:'Near hotel'},
                {val:'none',        label:'No preference'},
              ]}
            />
            <OptGroup
              label="Which area of Mallorca?"
              stateKey="area"
              cols={3}
              opts={[
                {val:'southwest', label:'Southwest'},
                {val:'palma',     label:'Palma'},
                {val:'north',     label:'North'},
                {val:'east',      label:'East'},
                {val:'south',     label:'South'},
                {val:'flexible',  label:'Flexible'},
              ]}
            />
            <div className="gcc-nav">
              <button className="gcc-btn ghost" onClick={() => goTo(1)}>Back</button>
              <button className="gcc-btn primary" onClick={() => goTo(3)}>Continue</button>
            </div>
          </div>
        )}

        {/* STEP 3: EXTRAS */}
        {step === 3 && (
          <div className="gcc-card">
            <div className="gcc-step-label">Step 3 of 4</div>
            <h2>Extras &amp; off-course</h2>
            <p className="sub">Buggies, clubs, transport, where you stay and eat.</p>
            <OptGroup
              label="Buggy?"
              stateKey="buggy"
              opts={[
                {val:'yes',  label:'Yes'},
                {val:'some', label:'Some rounds'},
                {val:'no',   label:'No'},
              ]}
            />
            <OptGroup
              label="Club hire?"
              stateKey="clubs"
              opts={[
                {val:'yes', label:'Yes'},
                {val:'no',  label:'No, bringing our own'},
              ]}
            />
            <OptGroup
              label="Transport help (transfers / driver)?"
              stateKey="transport"
              opts={[
                {val:'yes', label:'Yes'},
                {val:'no',  label:'No, we\'ll self-drive'},
              ]}
            />
            <OptGroup
              label="Accommodation style"
              stateKey="accommodation"
              opts={[
                {val:'self',   label:'Self-arranged'},
                {val:'3star',  label:'3-star'},
                {val:'4star',  label:'4-star'},
                {val:'5star',  label:'5-star'},
                {val:'villa',  label:'Luxury villa'},
              ]}
            />
            <OptGroup
              label="Restaurant level"
              stateKey="dining"
              opts={[
                {val:'casual',  label:'Casual'},
                {val:'local',   label:'Good local'},
                {val:'premium', label:'Premium'},
              ]}
            />
            <div className="gcc-nav">
              <button className="gcc-btn ghost" onClick={() => goTo(2)}>Back</button>
              <button className="gcc-btn gold" onClick={() => goTo(4)}>See my estimate</button>
            </div>
          </div>
        )}

        {/* STEP 4: RESULTS */}
        {step === 4 && r && (() => {
          const s = state
          const courses = COURSE_MIX[s.budget].slice(0, Math.min(s.rounds, COURSE_MIX[s.budget].length))
          let note = PREF_NOTES[s.preference] || ''
          if (s.area !== 'flexible') {
            const areaName = AREA_NAMES[s.area] || 'your chosen area'
            note += ` Since you're based around ${areaName}, Andy will adjust for drive times.`
          }

          const parts = [
            ['Green fees', r.greenFees],
            ['Accommodation', r.accom],
            ['Restaurants', r.dining],
            ['Buggies', r.buggy],
            ['Club hire', r.clubs],
            ['Transport', r.transport],
          ].filter(p => mid(p[1]) > 0).sort((a, b) => mid(b[1]) - mid(a[1]))
          const totalMid = mid(r.total) || 1

          const save = []
          if (s.budget !== 'value') save.push('Mix in one or two value-tier rounds (Son Servera, Maioris, Capdepera). Often the biggest single saving.')
          save.push('Play afternoon or twilight tee times. Many courses discount later slots.')
          if (s.buggy === 'yes') save.push('Walk the flatter courses and save buggies for the hilly ones.')
          if (s.clubs === 'yes') save.push('Bringing your own clubs usually beats hiring for 3+ rounds. Check your airline\'s bag fee.')
          if (s.accommodation === '5star' || s.accommodation === 'villa') save.push('A good 4-star near your courses can free up budget for an extra round.')
          save.push('Travel outside peak spring/autumn weeks. Green fees and hotels both drop.')

          const up = []
          if (s.budget === 'value' || s.budget === 'balanced') up.push('If this is a once-in-a-while trip, one bucket-list round (Son Gual, Alcanada, or Andratx) is usually worth the stretch.')
          if (s.buggy === 'no') up.push('Several Mallorca courses are seriously hilly. A buggy on those days protects your energy and your score.')
          if (s.transport === 'no') up.push(`With ${s.golfers} golfer${s.golfers > 1 ? 's' : ''} and clubs, arranged transport often costs little more than taxis and removes all the friction.`)
          up.push('A Play With A Pro round with Andy turns one round into course strategy you\'ll use all trip.')
          if (s.dining !== 'premium') up.push('One premium dinner makes a strong final-night centrepiece. Andy knows the tables worth booking.')

          return (
            <div>
              <div className="gcc-step-label">Step 4 of 4: Your planning estimate</div>

              <div className="gcc-hero-est">
                <div className="lab">Estimated total trip cost</div>
                <div className="big">{fmtR(r.total)}</div>
                <div className="per">{s.golfers} golfer{s.golfers > 1 ? 's' : ''} · {s.days} day{s.days > 1 ? 's' : ''} · {s.rounds} round{s.rounds > 1 ? 's' : ''} · {s.budget} style</div>
                <div className="gcc-approx">Approximate planning estimate, not a quote.</div>
              </div>

              <div className="gcc-grid2">
                <div className="gcc-mini"><div className="lab">Per golfer</div><div className="num">{fmtR(r.perGolfer)}</div></div>
                <div className="gcc-mini"><div className="lab">Golf only</div><div className="num">{fmtR(r.golfOnly)}</div></div>
                <div className="gcc-mini"><div className="lab">Full trip</div><div className="num">{fmtR(r.total)}</div></div>
                <div className="gcc-mini"><div className="lab">Golf cost / round / golfer</div><div className="num">{fmtR(r.perRound)}</div></div>
              </div>

              <div className="gcc-rcard">
                <h3><span className="dot"></span>Suggested course mix</h3>
                <p style={{ marginBottom:'10px' }}>{note}</p>
                <div>
                  {courses.map(c => <span key={c} className="gcc-tag">{c}</span>)}
                  {s.rounds > courses.length && <span className="gcc-tag">+ repeat a favourite</span>}
                </div>
              </div>

              <div className="gcc-rcard">
                <h3><span className="dot"></span>Where your budget is going</h3>
                {parts.map(([name, rng]) => {
                  const pct = Math.round(mid(rng) / totalMid * 100)
                  return (
                    <div key={name}>
                      <div className="gcc-bar-row"><span>{name}</span><span>{fmtR(rng)} · ~{pct}%</span></div>
                      <div className="gcc-bar"><i style={{ width: `${pct}%` }} /></div>
                    </div>
                  )
                })}
              </div>

              <div className="gcc-rcard">
                <h3><span className="dot"></span>Ways to reduce cost</h3>
                <ul>{save.slice(0, 5).map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>

              <div className="gcc-rcard">
                <h3><span className="dot"></span>When it's worth upgrading</h3>
                <ul>{up.slice(0, 4).map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>

              <div className="gcc-rcard" style={{ borderColor:'#B8973C' }}>
                <h3><span className="dot"></span>Recommended Andy package</h3>
                <p dangerouslySetInnerHTML={{ __html: PACKAGES[s.budget] }} />
                <p style={{ marginTop:'8px' }}>Play With A Pro is €695 solo or €950 total for 2–3 golfers. Trip planning is quoted separately once Andy sees your dates, group, and routing needs.</p>
              </div>

              {/* QUOTE BUILDER CTA */}
              <div className="gcc-quote-cta">
                <div className="gcc-quote-cta__inner">
                  <div className="gcc-quote-cta__eyebrow">Trip Quote Builder</div>
                  <h3 className="gcc-quote-cta__title">Get a real quote from Andy</h3>
                  <p className="gcc-quote-cta__body">Your answers are already filled in. Add your email and dates, and Andy will turn this estimate into a real, bookable trip quote.</p>
                  <button
                    className="gcc-btn gold"
                    style={{ width:'100%', maxWidth:340, marginBottom:10 }}
                    onClick={() => {
                      setQuoteEmail('')
                      setQuoteDates('')
                      setQuoteNotes('')
                      setQuoteSuccess(false)
                      setQuoteError(false)
                      setQuoteBuilderOpen(true)
                    }}
                  >Get my personal quote</button>
                  <div style={{ marginTop:6, marginBottom:2 }}><WhatsAppQuoteLink /></div>
                  <div className="gcc-quote-cta__note">No obligation. One email, from Andy himself.</div>
                </div>
              </div>

              <div className="gcc-cta-box">
                <h3>Email yourself this breakdown</h3>
                <p>We'll send the full cost breakdown and suggested course mix. Handy for sharing with the group or setting a budget before you book. Then Andy can refine the real numbers around your dates.</p>

                {emailSent ? (
                  <div style={{ marginBottom:'14px' }}>
                    <p style={{ fontSize:'13px', color:'#D4B068', marginBottom:'14px' }}>&#10003; Done. Your estimate is on its way.</p>
                    {!pdfSent ? (
                      <div style={{ background:'rgba(247,244,239,0.08)', border:'1px solid rgba(184,151,60,0.3)', borderRadius:'10px', padding:'14px 16px', marginBottom:'10px' }}>
                        <p style={{ fontSize:'11px', color:'#D4B068', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'6px', fontFamily:'var(--font-sans)' }}>Also free</p>
                        <p style={{ fontSize:'13px', color:'rgba(247,244,239,0.78)', marginBottom:'10px', lineHeight:'1.5' }}>The full Mallorca Golf Cost Breakdown PDF. Every green fee, buggy hire and hidden cost, course by course.</p>
                        <a
                          href={COST_GUIDE_PDF_URL}
                          target="_blank"
                          rel="noopener"
                          className="gcc-btn gold"
                          style={{ fontSize:'13px', display:'inline-block', padding:'10px 20px' }}
                          onClick={requestCostPdf}
                        >Download free PDF</a>
                      </div>
                    ) : (
                      <p style={{ fontSize:'12px', color:'#D4B068' }}>PDF on its way too.</p>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="gcc-email-capture">
                      <input
                        type="email"
                        placeholder="you@email.com"
                        aria-label="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <button
                        className="gcc-btn gold"
                        style={{ flex:'0 0 auto' }}
                        onClick={emailEstimate}
                        disabled={emailSending}
                      >
                        {emailSending ? 'Sending…' : 'Email me the breakdown'}
                      </button>
                    </div>
                    <label style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', color:'rgba(247,244,239,0.62)', fontSize:'12px', margin:'10px 0 12px', cursor:'pointer', fontFamily:'var(--font-sans)' }}>
                      <input
                        type="checkbox"
                        checked={subscribeNewsletter}
                        onChange={e => setSubscribeNewsletter(e.target.checked)}
                        style={{ accentColor:'#D4B068' }}
                      />
                      Also send me Andy's occasional Mallorca golf planning notes
                    </label>
                    {emailError && <p style={{ fontSize:'13px', color:'#e8b4a8', marginBottom:'10px' }}>That didn't go through. Check the address and try again.</p>}
                  </>
                )}

                <p style={{ fontSize:'11px', color:'rgba(247,244,239,0.45)', marginBottom:'12px' }}>No spam. Andy replies to every enquiry personally, usually within a day.</p>
                <a
                  className="gcc-btn primary"
                  style={{ background:'#3D6455' }}
                  href="https://www.mrmallorcagolf.com/contact"
                  target="_blank"
                  rel="noopener"
                >Ask Andy to refine this trip</a>
                <a
                  className="gcc-btn primary"
                  style={{ background:'#3D6455' }}
                  href="https://www.mrmallorcagolf.com/play-with-a-pro"
                  target="_blank"
                  rel="noopener"
                >Explore a golf day with Andy</a>
                <a
                  href="https://www.mrmallorcagolf.com/guides"
                  target="_blank"
                  rel="noopener"
                  style={{ display:'block', textAlign:'center', color:'#D4B068', fontFamily:'var(--font-sans)', fontSize:'13px', marginTop:'12px', fontWeight:'400' }}
                >Read the full Mallorca golf course guides →</a>
              </div>

              <div className="gcc-nav">
                <button className="gcc-btn ghost" style={{ flex:1 }} onClick={() => goTo(3)}>Adjust my answers</button>
                <button className="gcc-btn ghost" style={{ flex:1 }} onClick={restart}>Start over</button>
              </div>

              <div className="gcc-tools-panel">
                <div className="gcc-tools-panel__label">More planning tools</div>
                <div className="gcc-tools-panel__links">
                  <a href="/tools/course-selector" className="gcc-tools-panel__link">Find your courses</a>
                  <a href="/tools/hotel-recommender" className="gcc-tools-panel__link">Find hotels</a>
                  <a href="/tools/golf-day-builder" className="gcc-tools-panel__link">Build a golf day</a>
                </div>
              </div>

              <p className="gcc-disclaimer">Green fees, hotel rates, and dining prices in Mallorca vary by season and availability. All figures here are approximate ranges for planning only.</p>
            </div>
          )
        })()}
      </div>

      {/* QUOTE BUILDER OVERLAY & PANEL */}
      {quoteBuilderOpen && (
        <>
          <div
            style={{
              position:'fixed',
              inset:0,
              background:'rgba(14,42,31,.55)',
              backdropFilter:'blur(2px)',
              zIndex:60,
              opacity:1,
              cursor:'pointer',
            }}
            onClick={() => !quoteSuccess && setQuoteBuilderOpen(false)}
          />
          <aside
            style={{
              position:'fixed',
              zIndex:61,
              background:'#f7f2e7',
              left:0,
              right:0,
              bottom:0,
              top:'auto',
              maxHeight:'92dvh',
              borderRadius:'18px 18px 0 0',
              overflow:'hidden',
              boxShadow:'0 -12px 40px rgba(14,42,31,.35)',
              display:'flex',
              flexDirection:'column',
            }}
          >
            {/* Header */}
            <div className="gcc-sheet-head">
              <div className="gcc-sheet-head__eyebrow">Trip Quote Builder</div>
              <h3 className="gcc-sheet-head__title">Get a real quote from Andy</h3>
              <button
                onClick={() => !quoteSuccess && setQuoteBuilderOpen(false)}
                className="gcc-sheet-head__close"
              >×</button>
            </div>

            {/* Content */}
            <div style={{ padding:'20px 22px 30px', overflowY:'auto', flex:1 }}>
              {!quoteSuccess ? (
                <>
                  {/* Summary */}
                  <div style={{ background:'#fff', border:'1px solid #cdb98a', borderRadius:12, padding:'14px 16px', marginBottom:18 }}>
                    <div className="gcc-sheet-summary__label">Your trip, as calculated</div>
                    <ul style={{ listStyle:'none', margin:0, padding:0 }}>
                      <li style={{ display:'flex', justifyContent:'space-between', gap:12, fontSize:14, padding:'5px 0', borderBottom:'1px solid #f1ead9' }}>
                        <span>Golfers</span>
                        <b style={{ color:'#15392b', fontWeight:600 }}>{state.golfers}</b>
                      </li>
                      <li style={{ display:'flex', justifyContent:'space-between', gap:12, fontSize:14, padding:'5px 0', borderBottom:'1px solid #f1ead9' }}>
                        <span>Trip length</span>
                        <b style={{ color:'#15392b', fontWeight:600 }}>{state.days} day{state.days > 1 ? 's' : ''}</b>
                      </li>
                      <li style={{ display:'flex', justifyContent:'space-between', gap:12, fontSize:14, padding:'5px 0', borderBottom:'1px solid #f1ead9' }}>
                        <span>Rounds</span>
                        <b style={{ color:'#15392b', fontWeight:600 }}>{state.rounds}</b>
                      </li>
                      <li style={{ display:'flex', justifyContent:'space-between', gap:12, fontSize:14, padding:'5px 0', borderBottom:'1px solid #f1ead9' }}>
                        <span>Budget style</span>
                        <b style={{ color:'#15392b', fontWeight:600, textTransform:'capitalize' }}>{state.budget}</b>
                      </li>
                      <li style={{ display:'flex', justifyContent:'space-between', gap:12, fontSize:14, padding:'5px 0', borderBottom:'1px solid #f1ead9' }}>
                        <span>Suggested courses</span>
                        <b style={{ color:'#15392b', fontWeight:600, textAlign:'right' }}>{COURSE_MIX[state.budget].slice(0, Math.min(state.rounds, COURSE_MIX[state.budget].length)).join(', ')}</b>
                      </li>
                      <li style={{ display:'flex', justifyContent:'space-between', gap:12, fontSize:14, padding:'5px 0' }}>
                        <span>Estimated total</span>
                        <b style={{ color:'#15392b', fontWeight:600 }}>{results ? fmtR(results.total) : '—'}</b>
                      </li>
                    </ul>
                  </div>

                  {/* Form */}
                  <form onSubmit={submitQuote}>
                    <div style={{ marginBottom:16 }}>
                      <label style={labelStyle}>Email address</label>
                      <input
                        type="email"
                        value={quoteEmail}
                        onChange={e => setQuoteEmail(e.target.value)}
                        placeholder="you@email.com"
                        style={{
                          width:'100%',
                          border:'1.5px solid #d9cfb8',
                          borderRadius:10,
                          background:'#fff',
                          padding:'13px 14px',
                          fontSize:15,
                          fontFamily:'inherit',
                          color:'#2c2a27',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom:16 }}>
                      <label style={labelStyle}>Preferred dates <span style={{ textTransform:'none', fontWeight:'normal' }}>(optional)</span></label>
                      <input
                        type="text"
                        value={quoteDates}
                        onChange={e => setQuoteDates(e.target.value)}
                        placeholder="e.g. First week of October, flexible"
                        style={{
                          width:'100%',
                          border:'1.5px solid #d9cfb8',
                          borderRadius:10,
                          background:'#fff',
                          padding:'13px 14px',
                          fontSize:15,
                          fontFamily:'inherit',
                          color:'#2c2a27',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom:16 }}>
                      <label style={labelStyle}>Anything else Andy should know about your trip?</label>
                      <textarea
                        value={quoteNotes}
                        onChange={e => setQuoteNotes(e.target.value)}
                        placeholder="Handicaps, occasions, non-golfers in the group, must-play courses…"
                        style={{
                          width:'100%',
                          border:'1.5px solid #d9cfb8',
                          borderRadius:10,
                          background:'#fff',
                          padding:'13px 14px',
                          fontSize:15,
                          fontFamily:'inherit',
                          color:'#2c2a27',
                          minHeight:96,
                          resize:'vertical',
                        }}
                      />
                    </div>

                    {quoteError && <p style={{ fontSize:13, color:'#a4432f', margin:'-8px 0 12px' }}>Please add a valid email address so Andy can reply.</p>}

                    <button
                      type="submit"
                      className="gcc-btn gold"
                      style={{ width:'100%', marginBottom:12 }}
                      disabled={quoteSubmitting}
                    >
                      {quoteSubmitting ? 'Sending…' : 'Send to Andy'}
                    </button>

                    <p style={{ fontSize:12, color:'#8a7f74', textAlign:'center', marginTop:12, fontStyle:'italic' }}>Your details go straight to Andy — no lists, no spam.</p>
                  </form>
                </>
              ) : (
                <div style={{ textAlign:'center', padding:'26px 6px 12px' }}>
                  <div style={{ width:54, height:54, borderRadius:'50%', background:'#15392b', color:'#cdb98a', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, margin:'0 auto 16px' }}>✓</div>
                  <h4 className="gcc-sheet-success__title">Sent to Andy</h4>
                  <p style={{ fontSize:15, color:'#2c2a27', maxWidth:320, margin:'0 auto 18px' }}>Andy will come back to you personally — usually within a few hours.</p>
                  <button
                    className="gcc-btn primary"
                    style={{ width:'100%' }}
                    onClick={() => setQuoteBuilderOpen(false)}
                  >Back to my estimate</button>
                </div>
              )}
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
