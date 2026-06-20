'use client'

import { useState } from 'react'

/* =====================================================================
   COST DATA — real 2026 Mallorca pricing ranges (EUR).
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

export default function GolfCostCalculatorClient() {
  const [step, setStep] = useState(1)
  const [state, setState] = useState({ ...DEFAULT_STATE })
  const [results, setResults] = useState(null)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSending, setEmailSending] = useState(false)

  function set(key, val) {
    setState(prev => ({ ...prev, [key]: val }))
  }

  function goTo(n) {
    if (n === 4) {
      setResults(calculate(state))
    }
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function restart() {
    setState({ ...DEFAULT_STATE })
    setResults(null)
    setEmail('')
    setEmailSent(false)
    setEmailError(false)
    goTo(1)
  }

  async function emailEstimate() {
    if (!email || !email.includes('@')) return
    setEmailSending(true)
    setEmailError(false)
    const r = results || calculate(state)
    const s = state

    const row = (label, val) =>
      `<tr><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#8A7F74;border-bottom:1px solid #EDE9E1;">${label}</td><td style="padding:8px 0;font-family:'Jost',Arial,sans-serif;font-size:15px;color:#1A1916;text-align:right;border-bottom:1px solid #EDE9E1;">${val}</td></tr>`

    const bodyHtml = `
      <p style="margin:0 0 20px;font-family:'Jost',Arial,sans-serif;font-size:15px;line-height:1.7;color:#2C2A27;">Here is your planning estimate for a ${s.days}-day trip with ${s.golfers} golfer${s.golfers > 1 ? 's' : ''}, ${s.rounds} round${s.rounds > 1 ? 's' : ''} of golf.</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        ${row('Green fees', fmtR(r.greenFees))}
        ${s.buggy !== 'no' ? row('Buggy hire', fmtR(r.buggy)) : ''}
        ${s.clubs === 'yes' ? row('Club hire', fmtR(r.clubs)) : ''}
        ${s.transport === 'yes' ? row('Transport', fmtR(r.transport)) : ''}
        ${row('Dining', fmtR(r.dining))}
        ${row('Accommodation', fmtR(r.accom))}
      </table>
      <div style="background:#2D4A3E;border-radius:4px;padding:20px 24px;margin-bottom:20px;">
        <p style="margin:0 0 4px;font-family:'Jost',Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(247,244,239,0.6);">Total estimate</p>
        <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:26px;color:#F7F4EF;">${fmtR(r.total)}</p>
        <p style="margin:6px 0 0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:rgba(247,244,239,0.6);">${fmtR(r.perGolfer)} per golfer</p>
      </div>
      <p style="margin:0;font-family:'Jost',Arial,sans-serif;font-size:12px;color:#8A7F74;">These are planning estimates. Tee times, bookings, and exact pricing are confirmed when you book with Andy.</p>`

    try {
      const res = await fetch('/api/send-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tool: 'tools-golf-cost-calculator',
          subject: 'Your Mallorca golf trip cost estimate',
          bodyHtml,
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

  function Stepper({ label, stateKey, min, max, unit }) {
    const btnStyle = { width:44, height:44, borderRadius:'50%', border:'1.5px solid #B8973C', background:'#fff', color:'#2D4A3E', fontSize:22, cursor:'pointer', lineHeight:1, fontFamily:'inherit', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }
    return (
      <div className="gcc-field">
        <label className="gcc-flabel">{label}</label>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <button type="button" style={btnStyle} onClick={() => set(stateKey, Math.max(min, state[stateKey] - 1))}>−</button>
          <span className="gcc-val">{state[stateKey]}</span>
          <span className="gcc-unit">{unit}</span>
          <button type="button" style={btnStyle} onClick={() => set(stateKey, Math.min(max, state[stateKey] + 1))}>+</button>
        </div>
      </div>
    )
  }

  function OptGroup({ label, stateKey, opts }) {
    return (
      <div className="gcc-field">
        <label className="gcc-flabel">{label}</label>
        <div className="gcc-opts">
          {opts.map(o => (
            <button
              key={o.val}
              className={`gcc-opt${state[stateKey] === o.val ? ' sel' : ''}`}
              onClick={() => set(stateKey, o.val)}
            >
              {o.label}
              {o.small && <small>{o.small}</small>}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const r = results

  return (
    <>
      <style jsx>{`
        .gcc-hero { background:#2D4A3E; color:#F7F4EF; padding:52px 24px 48px; text-align:center; }
        .gcc-eyebrow { display:inline-block; font-family:'Jost',sans-serif; font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#CBA968; margin-bottom:16px; }
        .gcc-h1 { font-family:'Cormorant Garamond',Georgia,serif; font-weight:500; font-size:clamp(2.1rem,5vw,3.2rem); line-height:1.1; color:#F7F4EF; max-width:600px; margin:0 auto; }
        .gcc-sub { font-family:'Jost',sans-serif; font-weight:300; font-size:1rem; line-height:1.6; color:rgba(247,244,239,0.78); max-width:480px; margin:16px auto 0; }
        .gcc-wrap { max-width:680px; margin:0 auto; padding:20px 16px 64px; }
        .gcc-progress { display:flex; gap:6px; margin:22px 0 18px; }
        .gcc-progress span { flex:1; height:4px; border-radius:2px; background:#ddd4c0; transition:background .3s; }
        .gcc-progress span.on { background:#B8973C; }
        .gcc-step-label { font-family:'Jost',sans-serif; font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:#8A7F74; margin-bottom:6px; }
        .gcc-card { background:#fff; border:1px solid #e6ddc9; border-radius:14px; padding:22px 18px; box-shadow:0 2px 10px rgba(21,57,43,.06); }
        .gcc-card h2 { font-family:'Cormorant Garamond',Georgia,serif; font-size:26px; color:#2D4A3E; margin-bottom:6px; font-weight:500; line-height:1.15; }
        .gcc-card .sub { font-size:13px; color:#8A7F74; margin-bottom:20px; line-height:1.6; font-weight:300; }
        .gcc-field { margin-bottom:18px; }
        .gcc-flabel { display:block; font-family:'Jost',sans-serif; font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:#2D4A3E; margin-bottom:12px; font-weight:600; }
        .gcc-opts { display:flex; flex-wrap:wrap; gap:8px; }
        .gcc-opt { border:1px solid #d9cfb8; background:#F7F4EF; border-radius:10px; padding:12px 14px; cursor:pointer; font-size:13px; font-family:inherit; color:#2C2A27; transition:all .15s; flex:1 1 auto; min-width:72px; text-align:center; font-weight:400; }
        .gcc-opt small { display:block; font-size:10px; color:#8A7F74; margin-top:3px; font-weight:300; }
        .gcc-opt.sel { border-color:#B8973C; background:#2D4A3E; color:#F7F4EF; }
        .gcc-opt.sel small { color:#D4B068; }
        .gcc-opt:hover { border-color:#B8973C; }
        .gcc-stepper { display:flex; align-items:center; gap:14px; }
        .gcc-stepper button { width:44px; height:44px; border-radius:50%; border:1.5px solid #B8973C; background:#fff; color:#2D4A3E; font-size:22px; cursor:pointer; line-height:1; font-family:inherit; }
        .gcc-stepper button:active { background:#EDE9E1; }
        .gcc-val { font-family:'Jost',sans-serif; font-size:26px; color:#2D4A3E; min-width:48px; text-align:center; font-weight:400; }
        .gcc-unit { font-family:'Jost',sans-serif; font-size:12px; color:#8A7F74; font-weight:300; }
        .gcc-nav { display:flex; gap:10px; margin-top:22px; }
        .gcc-btn { border:none; border-radius:10px; padding:14px 20px; font-size:15px; cursor:pointer; font-family:inherit; transition:opacity .15s; }
        .gcc-btn.primary { background:#2D4A3E; color:#F7F4EF; flex:1; }
        .gcc-btn.primary:hover { background:#3D6455; }
        .gcc-btn.ghost { background:transparent; color:#8A7F74; border:1.5px solid #d9cfb8; }
        .gcc-btn.gold { background:#B8973C; color:#fff; flex:1; }
        .gcc-btn.gold:hover { opacity:.9; }
        /* Results */
        .gcc-hero-est { background:#2D4A3E; color:#F7F4EF; border-radius:14px; padding:26px 20px; text-align:center; margin-bottom:14px; }
        .gcc-hero-est .lab { font-family:'Jost',sans-serif; font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:#D4B068; font-weight:500; }
        .gcc-hero-est .big { font-family:'Jost',sans-serif; font-size:clamp(32px,8vw,44px); font-weight:400; margin:10px 0 4px; letter-spacing:-0.02em; }
        .gcc-hero-est .per { font-family:'Jost',sans-serif; font-size:14px; color:#cfdad2; font-weight:300; }
        .gcc-approx { font-size:12px; color:#D4B068; margin-top:10px; font-style:italic; }
        .gcc-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:14px; }
        .gcc-mini { background:#fff; border:1px solid #e6ddc9; border-radius:14px; padding:16px; text-align:center; }
        .gcc-mini .lab { font-family:'Jost',sans-serif; font-size:9px; letter-spacing:.12em; text-transform:uppercase; color:#8A7F74; font-weight:500; }
        .gcc-mini .num { font-family:'Jost',sans-serif; font-size:20px; color:#2D4A3E; font-weight:400; margin-top:6px; }
        .gcc-rcard { background:#fff; border:1px solid #e6ddc9; border-radius:14px; padding:20px 18px; margin-bottom:14px; }
        .gcc-rcard h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:20px; color:#2D4A3E; margin-bottom:12px; display:flex; align-items:center; gap:8px; font-weight:500; line-height:1.2; }
        .gcc-rcard h3 .dot { width:8px; height:8px; border-radius:50%; background:#B8973C; display:inline-block; flex-shrink:0; }
        .gcc-rcard ul { list-style:none; }
        .gcc-rcard li { padding:8px 0; border-bottom:1px solid #f1ead9; font-size:13px; display:flex; justify-content:space-between; gap:10px; font-weight:300; color:#2C2A27; }
        .gcc-rcard li:last-child { border-bottom:none; }
        .gcc-rcard li .amt { color:#2D4A3E; font-weight:400; white-space:nowrap; font-family:'Jost',sans-serif; }
        .gcc-rcard p { font-family:'Jost',sans-serif; font-size:13px; font-weight:300; line-height:1.6; color:#8A7F74; }
        .gcc-tag { display:inline-block; background:#EDE9E1; border:1px solid #D4B068; color:#2D4A3E; border-radius:20px; padding:4px 12px; font-size:13px; margin:3px 4px 3px 0; }
        .gcc-bar { height:10px; border-radius:5px; background:#EDE9E1; overflow:hidden; margin:4px 0 10px; }
        .gcc-bar i { display:block; height:100%; background:#B8973C; border-radius:5px; }
        .gcc-bar-row { font-family:'Jost',sans-serif; font-size:12px; display:flex; justify-content:space-between; color:#2C2A27; font-weight:400; margin-bottom:4px; }
        .gcc-cta-box { background:#1A1916; color:#F7F4EF; border-radius:14px; padding:24px 20px; margin-top:8px; }
        .gcc-cta-box h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:24px; margin-bottom:8px; color:#fff; font-weight:500; line-height:1.2; }
        .gcc-cta-box p { font-family:'Jost',sans-serif; font-size:13px; color:#cfdad2; margin-bottom:18px; font-weight:300; line-height:1.6; }
        .gcc-cta-box a { display:block; text-align:center; text-decoration:none; width:100%; margin-bottom:10px; padding:14px 20px; border:none; border-radius:10px; font-size:15px; font-family:inherit; cursor:pointer; }
        .gcc-email-capture { display:flex; gap:8px; margin-bottom:6px; flex-wrap:wrap; }
        .gcc-email-capture input { flex:1 1 160px; min-width:0; border:none; border-radius:10px; padding:14px 16px; font-size:15px; font-family:inherit; }
        .gcc-disclaimer { font-family:'Jost',sans-serif; font-size:11px; color:#8A7F74; text-align:center; margin-top:20px; font-weight:300; line-height:1.5; }
      `}</style>

      {/* HERO */}
      <section className="gcc-hero">
        <span className="gcc-eyebrow">Free tool</span>
        <h1 className="gcc-h1">Mallorca golf trip cost calculator</h1>
        <p className="gcc-sub">Three steps. A cost estimate for your trip with a suggested course mix.</p>
      </section>

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
          save.push('Travel outside peak spring/autumn weeks — green fees and hotels both drop.')

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

              <div className="gcc-cta-box">
                <h3>Email yourself this breakdown</h3>
                <p>We'll send the full cost breakdown and suggested course mix — handy for sharing with the group or setting a budget before you book. Then Andy can refine the real numbers around your dates.</p>

                {emailSent ? (
                  <p style={{ fontSize:'13px', color:'#D4B068', marginBottom:'10px' }}>&#10003; Done. Your estimate is on its way.</p>
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
                >Book a golf day with Andy</a>
                <a
                  href="https://www.mrmallorcagolf.com/guides"
                  target="_blank"
                  rel="noopener"
                  style={{ display:'block', textAlign:'center', color:'#D4B068', fontFamily:"'Jost',sans-serif", fontSize:'13px', marginTop:'12px', fontWeight:'400' }}
                >Read the full Mallorca golf course guides →</a>
              </div>

              <div className="gcc-nav">
                <button className="gcc-btn ghost" style={{ flex:1 }} onClick={() => goTo(3)}>Adjust my answers</button>
                <button className="gcc-btn ghost" style={{ flex:1 }} onClick={restart}>Start over</button>
              </div>

              <div style={{ background:'#f4f1eb', borderRadius:'12px', padding:'18px 20px', margin:'20px 0', textAlign:'center' }}>
                <div style={{ fontSize:'11px', textTransform:'uppercase', letterSpacing:'.14em', color:'#8a7f74', marginBottom:'12px' }}>More planning tools</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
                  <a href="/tools/course-selector" style={{ display:'inline-block', padding:'10px 18px', fontSize:'12px', border:'1px solid #2d4a3e', color:'#2d4a3e', textDecoration:'none', borderRadius:'6px' }}>Find your courses</a>
                  <a href="/tools/hotel-recommender" style={{ display:'inline-block', padding:'10px 18px', fontSize:'12px', border:'1px solid #2d4a3e', color:'#2d4a3e', textDecoration:'none', borderRadius:'6px' }}>Find hotels</a>
                  <a href="/tools/golf-day-builder" style={{ display:'inline-block', padding:'10px 18px', fontSize:'12px', border:'1px solid #2d4a3e', color:'#2d4a3e', textDecoration:'none', borderRadius:'6px' }}>Build a golf day</a>
                </div>
              </div>

              <p className="gcc-disclaimer">Green fees, hotel rates, and dining prices in Mallorca vary by season and availability. All figures here are approximate ranges for planning only.</p>
            </div>
          )
        })()}
      </div>
    </>
  )
}
