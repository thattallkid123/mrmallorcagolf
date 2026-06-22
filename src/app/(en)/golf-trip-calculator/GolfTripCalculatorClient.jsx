'use client'

import { useState } from 'react'

const COSTS = {
  greenFees: {
    value: [55, 85],
    balanced: [74, 126],
    premium: [80, 165],
    luxury: [96, 220],
  },
  buggyPerRound: [30, 42],
  clubHirePerRound: [25, 40],
  transportPerDay: [80, 140],
  dining: {
    casual: [35, 55],
    local: [55, 85],
    premium: [85, 150],
  },
  accommodation: {
    self: [0, 0],
    '3star': [70, 130],
    '4star': [120, 200],
    '5star': [200, 350],
    villa: [180, 350],
  },
  proPackage: [200, 400],
}

const COURSE_MIX = {
  value: ['Golf Pollença', 'Golf Maioris', 'Capdepera Golf'],
  balanced: ['Golf de Bendinat', 'Canyamel Golf', 'Pula Golf', "Vall d'Or Golf", 'Son Servera'],
  premium: ['Son Gual', 'T Golf Calvià', 'Golf de Andratx', 'Son Muntaner', 'T Golf Palma'],
  luxury: ['Son Muntaner', 'Club de Golf Alcanada', 'T Golf Calvià', 'Son Gual'],
}

const PREF_NOTES = {
  scenic: 'You asked for scenic. Andy will weight the mix toward courses with the best views and settings.',
  famous: "You asked for famous names. Andy will prioritise the island's best-known courses in this tier.",
  challenging: 'You asked for a challenge. Andy will pick the courses in this tier that ask the most questions of your game.',
  relaxed: 'You asked for relaxed golf. Andy will favour friendlier layouts and gentler pacing.',
  near: "You want courses near your hotel. Once Andy knows where you're staying, he'll tighten the mix around it.",
  none: 'A balanced mix from this tier. Andy will tailor it once he knows your group.',
}

const PACKAGES = {
  value: 'Course Picks & Booking Help: Andy confirms your course mix, books tee times at the right rates, and shares his course notes for each round.',
  balanced: 'Trip Planning + One Coached Round: Andy plans the trip end to end and joins you for a Play With A Pro round at one of your courses.',
  premium: 'Signature Golf Day + Full Trip Planning: a hosted Signature Day with Andy plus full planning of courses, tee times, and transport.',
  luxury: 'Full Concierge Trip: every round, transfer, table, and tee time arranged, with Andy hosting your marquee golf day.',
}

function range(perUnit, units) {
  return [Math.round(perUnit[0] * units), Math.round(perUnit[1] * units)]
}

function addR(a, b) {
  return [a[0] + b[0], a[1] + b[1]]
}

function mid(r) {
  return (r[0] + r[1]) / 2
}

function fmt(n) {
  return '€' + Math.round(n).toLocaleString('en-GB')
}

function fmtR(r) {
  return fmt(r[0]) + ' – ' + fmt(r[1])
}

function track(event, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params)
  }
  console.log('[calc]', event, params)
}

export default function GolfTripCalculatorClient() {
  const [step, setStep] = useState(1)
  const [started, setStarted] = useState(false)
  const [state, setState] = useState({
    days: 4,
    golfers: 2,
    rounds: 3,
    budget: 'balanced',
    preference: 'none',
    area: 'flexible',
    buggy: 'yes',
    clubs: 'no',
    transport: 'yes',
    accommodation: '4star',
    dining: 'local',
  })
  const [result, setResult] = useState(null)

  const markStart = () => {
    if (!started) {
      setStarted(true)
      track('calculator_start')
    }
  }

  const handleStepper = (key, delta) => {
    markStart()
    const min = key === 'days' ? 1 : key === 'golfers' ? 1 : 1
    const max = key === 'days' ? 7 : key === 'golfers' ? 8 : 6
    setState(prev => ({
      ...prev,
      [key]: Math.max(min, Math.min(max, prev[key] + delta)),
    }))
  }

  const handleOption = (key, value) => {
    markStart()
    if (key === 'budget') {
      track('budget_selected', { budget: value })
    }
    setState(prev => ({ ...prev, [key]: value }))
  }

  const calculate = () => {
    const buggyRounds = state.buggy === 'yes' ? state.rounds : state.buggy === 'some' ? Math.ceil(state.rounds / 2) : 0
    const nights = Math.max(0, state.days - 1)

    const greenFees = range(COSTS.greenFees[state.budget], state.rounds * state.golfers)
    const buggy = range(COSTS.buggyPerRound, buggyRounds * state.golfers)
    const clubs = state.clubs === 'yes' ? range(COSTS.clubHirePerRound, state.rounds * state.golfers) : [0, 0]
    const transport = state.transport === 'yes' ? range(COSTS.transportPerDay, state.days) : [0, 0]
    const dining = range(COSTS.dining[state.dining], state.days * state.golfers)
    const accom = range(COSTS.accommodation[state.accommodation], nights * state.golfers)

    const golfOnly = addR(addR(greenFees, buggy), clubs)
    const total = addR(addR(addR(golfOnly, transport), dining), accom)

    return {
      greenFees,
      buggy,
      clubs,
      transport,
      dining,
      accom,
      golfOnly,
      total,
      perGolfer: [Math.round(total[0] / state.golfers), Math.round(total[1] / state.golfers)],
      perRound: [Math.round(golfOnly[0] / (state.rounds * state.golfers)), Math.round(golfOnly[1] / (state.rounds * state.golfers))],
      buggyRounds,
      nights,
    }
  }

  const showResults = () => {
    const r = calculate()
    setResult(r)
    track('cost_estimate_generated', {
      budget: state.budget,
      total_mid: Math.round(mid(r.total)),
      golfers: state.golfers,
      rounds: state.rounds,
    })
    setStep(4)
  }

  const goTo = (nextStep) => {
    setStep(nextStep)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const Stepper = ({ label, value, min, max, onChange }) => (
    <div className="calc-field">
      <label className="calc-label">{label}</label>
      <div className="calc-stepper">
        <button
          onClick={() => onChange(-1)}
          className="calc-stepper__btn"
          type="button"
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="calc-stepper__val">{value}</span>
        <button
          onClick={() => onChange(1)}
          className="calc-stepper__btn"
          type="button"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )

  const OptionGroup = ({ label, options, value, onChange, details }) => (
    <div className="calc-field">
      <label className="calc-label">{label}</label>
      <div className="calc-opts">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`calc-opt ${value === opt ? 'calc-opt--sel' : ''}`}
            type="button"
          >
            {opt}
            {details?.[opt] && <span className="calc-opt__sub">{details[opt]}</span>}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="calc-wrapper">
      <style jsx>{`
        .calc-wrapper {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 clamp(16px, 5vw, 40px) 60px;
        }

        .calc-progress {
          display: flex;
          gap: 6px;
          margin: 28px 0 32px;
        }

        .calc-progress span {
          flex: 1;
          height: 4px;
          border-radius: 2px;
          background: var(--accent-mute);
          transition: background 0.3s;
        }

        .calc-progress span.on {
          background: var(--gold);
        }

        .calc-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: clamp(24px, 5vw, 32px);
          margin-bottom: 24px;
        }

        .calc-card h2 {
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--text);
          margin-bottom: 6px;
          font-weight: 500;
        }

        .calc-card .sub {
          font-size: 15px;
          color: var(--text-mute);
          margin-bottom: 24px;
        }

        .calc-field {
          margin-bottom: 24px;
        }

        .calc-label {
          display: block;
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 10px;
          font-weight: 500;
        }

        .calc-stepper {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .calc-stepper__btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--gold);
          background: var(--bg);
          color: var(--text);
          font-size: 22px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .calc-stepper__btn:hover {
          background: var(--accent-mute);
        }

        .calc-stepper__val {
          font-size: 26px;
          color: var(--text);
          min-width: 48px;
          text-align: center;
          font-weight: 600;
        }

        .calc-opts {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .calc-opt {
          border: 1.5px solid var(--border);
          background: var(--bg);
          border-radius: 10px;
          padding: 10px 14px;
          cursor: pointer;
          font-size: 14px;
          color: var(--text);
          transition: all 0.2s;
          flex: 1 1 auto;
          min-width: 70px;
          text-align: center;
          font-family: var(--font-sans);
        }

        .calc-opt:hover {
          border-color: var(--gold);
        }

        .calc-opt--sel {
          border-color: var(--gold);
          background: var(--text);
          color: var(--bg);
        }

        .calc-opt__sub {
          display: block;
          font-size: 11px;
          color: var(--text-mute);
          margin-top: 2px;
        }

        .calc-opt--sel .calc-opt__sub {
          color: var(--bg-alt);
        }

        .calc-nav {
          display: flex;
          gap: 10px;
          margin-top: 28px;
        }

        .calc-btn {
          border: none;
          border-radius: 10px;
          padding: 14px 20px;
          font-size: 15px;
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 500;
          transition: all 0.2s;
          flex: 1;
        }

        .calc-btn-primary {
          background: var(--text);
          color: var(--bg);
        }

        .calc-btn-primary:hover {
          opacity: 0.9;
        }

        .calc-btn-ghost {
          background: transparent;
          color: var(--text-mute);
          border: 1.5px solid var(--border);
        }

        .calc-btn-ghost:hover {
          border-color: var(--text);
        }

        .calc-hidden {
          display: none;
        }

        /* Results */
        .calc-hero {
          background: var(--text);
          color: var(--bg);
          border-radius: 12px;
          padding: 28px 24px;
          text-align: center;
          margin-bottom: 18px;
        }

        .calc-hero__lab {
          font-family: var(--font-sans);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .calc-hero__big {
          font-size: clamp(32px, 7vw, 44px);
          font-weight: 700;
          margin: 8px 0 4px;
        }

        .calc-hero__per {
          font-size: 15px;
          opacity: 0.8;
        }

        .calc-approx {
          font-size: 12px;
          opacity: 0.6;
          margin-top: 8px;
          font-style: italic;
        }

        .calc-grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 18px;
        }

        .calc-mini {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px;
          text-align: center;
        }

        .calc-mini__lab {
          font-family: var(--font-sans);
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-mute);
        }

        .calc-mini__num {
          font-size: 20px;
          color: var(--text);
          font-weight: 700;
          margin-top: 6px;
        }

        .calc-rcard {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 22px 20px;
          margin-bottom: 18px;
        }

        .calc-rcard h3 {
          font-size: 17px;
          color: var(--text);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .calc-rcard__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
        }

        .calc-rcard ul {
          list-style: none;
        }

        .calc-rcard li {
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .calc-rcard li:last-child {
          border-bottom: none;
        }

        .calc-rcard li strong {
          color: var(--text);
          white-space: nowrap;
          font-weight: 600;
        }

        .calc-rcard p {
          font-size: 14px;
          margin: 12px 0 0;
        }

        .calc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 12px 0 0;
        }

        .calc-tag {
          display: inline-block;
          background: var(--accent-mute);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 20px;
          padding: 5px 12px;
          font-size: 13px;
        }

        .calc-bar {
          height: 10px;
          border-radius: 5px;
          background: var(--accent-mute);
          overflow: hidden;
          margin: 6px 0 12px;
        }

        .calc-bar i {
          display: block;
          height: 100%;
          background: var(--gold);
          border-radius: 5px;
        }

        .calc-cta-box {
          background: var(--text);
          color: var(--bg);
          border-radius: 12px;
          padding: 26px 24px;
          margin-top: 18px;
        }

        .calc-cta-box h3 {
          font-size: 19px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .calc-cta-box p {
          font-size: 14px;
          opacity: 0.85;
          margin-bottom: 18px;
        }

        .calc-cta-box .calc-btn {
          width: 100%;
          margin-bottom: 10px;
          display: block;
          text-align: center;
        }

        .calc-cta-box .calc-btn-primary {
          background: var(--gold);
          color: var(--text);
        }

        .calc-cta-link {
          display: block;
          text-align: center;
          color: var(--gold);
          font-size: 14px;
          margin-top: 10px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .calc-cta-link:hover {
          opacity: 0.8;
        }

        .calc-disclaimer {
          font-size: 12px;
          color: var(--text-mute);
          text-align: center;
          margin-top: 20px;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .calc-opts {
            gap: 6px;
          }

          .calc-opt {
            flex: 1 1 calc(50% - 3px);
          }

          .calc-grid2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="calc-progress" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4}>
        {[1, 2, 3, 4].map(i => (
          <span key={i} className={i <= step ? 'on' : ''} />
        ))}
      </div>

      {/* Step 1 */}
      <section className={`calc-card ${step !== 1 ? 'calc-hidden' : ''}`}>
        <h2>Your trip basics</h2>
        <p className="sub">Tell us about the group and how much golf you want.</p>
        <Stepper label="Trip length (days)" value={state.days} onChange={delta => handleStepper('days', delta)} />
        <Stepper label="Number of golfers" value={state.golfers} onChange={delta => handleStepper('golfers', delta)} />
        <Stepper label="Rounds of golf" value={state.rounds} onChange={delta => handleStepper('rounds', delta)} />
        <div className="calc-nav">
          <button onClick={() => goTo(2)} className="calc-btn calc-btn-primary">
            Continue
          </button>
        </div>
      </section>

      {/* Step 2 */}
      <section className={`calc-card ${step !== 2 ? 'calc-hidden' : ''}`}>
        <h2>Your golf style</h2>
        <p className="sub">This shapes the course mix we suggest.</p>
        <OptionGroup
          label="Budget style"
          options={['Value', 'Balanced', 'Premium', 'Luxury']}
          value={state.budget.charAt(0).toUpperCase() + state.budget.slice(1)}
          onChange={v => handleOption('budget', v.toLowerCase())}
        />
        <OptionGroup
          label="Course preference"
          options={['Scenic', 'Famous', 'Challenging', 'Relaxed', 'Near hotel', 'No preference']}
          value={state.preference.charAt(0).toUpperCase() + state.preference.slice(1)}
          onChange={v => handleOption('preference', v.toLowerCase().replace(' ', '_').replace('_hotel', ''))}
        />
        <OptionGroup
          label="Which area of Mallorca?"
          options={['Southwest', 'Palma', 'North', 'Flexible']}
          value={state.area.charAt(0).toUpperCase() + state.area.slice(1)}
          onChange={v => handleOption('area', v.toLowerCase())}
        />
        <div className="calc-nav">
          <button onClick={() => goTo(1)} className="calc-btn calc-btn-ghost">
            Back
          </button>
          <button onClick={() => goTo(3)} className="calc-btn calc-btn-primary">
            Continue
          </button>
        </div>
      </section>

      {/* Step 3 */}
      <section className={`calc-card ${step !== 3 ? 'calc-hidden' : ''}`}>
        <h2>Extras & off-course</h2>
        <p className="sub">Buggies, clubs, transport, where you stay and eat.</p>
        <OptionGroup label="Buggy?" options={['Yes', 'Some rounds', 'No']} value={state.buggy === 'yes' ? 'Yes' : state.buggy === 'some' ? 'Some rounds' : 'No'} onChange={v => handleOption('buggy', v.toLowerCase().replace(' rounds', '').replace(' ', '_'))} />
        <OptionGroup label="Club hire?" options={['Yes', 'No']} value={state.clubs === 'yes' ? 'Yes' : 'No'} onChange={v => handleOption('clubs', v.toLowerCase())} />
        <OptionGroup label="Transport help?" options={['Yes', 'No']} value={state.transport === 'yes' ? 'Yes' : 'No'} onChange={v => handleOption('transport', v.toLowerCase())} />
        <OptionGroup label="Accommodation style" options={['Self-arranged', '3-star', '4-star', '5-star', 'Villa']} value={state.accommodation === 'self' ? 'Self-arranged' : state.accommodation + '-star' === '3-3-star' ? '3-star' : state.accommodation === 'villa' ? 'Villa' : state.accommodation + '-star'} onChange={v => handleOption('accommodation', v.toLowerCase().replace('-star', '').replace('self-arranged', 'self'))} />
        <OptionGroup label="Restaurant level" options={['Casual', 'Good local', 'Premium']} value={state.dining === 'casual' ? 'Casual' : state.dining === 'local' ? 'Good local' : 'Premium'} onChange={v => handleOption('dining', v.toLowerCase().replace('good ', ''))} />
        <div className="calc-nav">
          <button onClick={() => goTo(2)} className="calc-btn calc-btn-ghost">
            Back
          </button>
          <button onClick={showResults} className="calc-btn calc-btn-primary">
            See my estimate
          </button>
        </div>
      </section>

      {/* Step 4: Results */}
      {result && step === 4 && (
        <section className={`${step !== 4 ? 'calc-hidden' : ''}`}>
          <div className="calc-hero">
            <div className="calc-hero__lab">Estimated total trip cost</div>
            <div className="calc-hero__big">{fmtR(result.total)}</div>
            <div className="calc-hero__per">
              {state.golfers} golfer{state.golfers > 1 ? 's' : ''} · {state.days} day{state.days > 1 ? 's' : ''} · {state.rounds} round{state.rounds > 1 ? 's' : ''} · {state.budget} style
            </div>
            <div className="calc-approx">Approximate planning estimate, not a quote.</div>
          </div>

          <div className="calc-grid2">
            <div className="calc-mini">
              <div className="calc-mini__lab">Per golfer</div>
              <div className="calc-mini__num">{fmtR(result.perGolfer)}</div>
            </div>
            <div className="calc-mini">
              <div className="calc-mini__lab">Golf only</div>
              <div className="calc-mini__num">{fmtR(result.golfOnly)}</div>
            </div>
            <div className="calc-mini">
              <div className="calc-mini__lab">Full trip</div>
              <div className="calc-mini__num">{fmtR(result.total)}</div>
            </div>
            <div className="calc-mini">
              <div className="calc-mini__lab">Golf / round / golfer</div>
              <div className="calc-mini__num">{fmtR(result.perRound)}</div>
            </div>
          </div>

          <div className="calc-rcard">
            <h3>
              <span className="calc-rcard__dot" />
              Suggested course mix
            </h3>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--text-mute)' }}>
              {PREF_NOTES[state.preference]}
              {state.area !== 'flexible' && ` Since you're based around the ${state.area === 'southwest' ? 'Southwest' : state.area === 'palma' ? 'Palma area' : 'North'}, Andy will adjust for drive times.`}
            </p>
            <div className="calc-tags">
              {COURSE_MIX[state.budget]
                .slice(0, Math.min(state.rounds, COURSE_MIX[state.budget].length))
                .map(c => (
                  <span key={c} className="calc-tag">
                    {c}
                  </span>
                ))}
              {state.rounds > COURSE_MIX[state.budget].length && <span className="calc-tag">+ repeat a favourite</span>}
            </div>
          </div>

          <div className="calc-rcard">
            <h3>
              <span className="calc-rcard__dot" />
              Where your budget is going
            </h3>
            {[['Green fees', result.greenFees], ['Accommodation', result.accom], ['Restaurants', result.dining], ['Buggies', result.buggy], ['Club hire', result.clubs], ['Transport', result.transport]]
              .filter(([, r]) => mid(r) > 0)
              .sort(([, a], [, b]) => mid(b) - mid(a))
              .map(([name, rng]) => {
                const pct = Math.round((mid(rng) / (mid(result.total) || 1)) * 100)
                return (
                  <div key={name}>
                    <div style={{ fontSize: '13px', display: 'flex', justifyContent: 'space-between', color: 'var(--text)' }}>
                      <span>{name}</span>
                      <span>
                        {fmtR(rng)} · ~{pct}%
                      </span>
                    </div>
                    <div className="calc-bar">
                      <i style={{ width: pct + '%' }} />
                    </div>
                  </div>
                )
              })}
          </div>

          {state.budget !== 'luxury' && state.budget !== 'Luxury' && <div className="calc-rcard">
            <h3>
              <span className="calc-rcard__dot" />
              Ways to reduce cost
            </h3>
            <ul>
              {[
                state.budget !== 'value' && 'Mix in one or two value-tier rounds (Golf Pollença, Golf Maioris, Capdepera). Often the biggest single saving.',
                'Play afternoon or twilight tee times. Many courses discount later slots.',
                state.buggy === 'yes' && 'Walk the flatter courses and save buggies for the hilly ones.',
                state.clubs === 'yes' && "Bringing your own clubs usually beats hiring for 3+ rounds. Check your airline's bag fee.",
                (state.accommodation === '5star' || state.accommodation === 'villa') && 'A good 4-star near your courses can free up budget for an extra round.',
                state.dining === 'premium' && 'Save premium dining for one or two standout nights and go good-local the rest.',
                'Travel outside peak spring/autumn weeks. Green fees and hotels both drop.',
              ]
                .filter(Boolean)
                .slice(0, 5)
                .map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
            </ul>
          </div>}

          <div className="calc-rcard">
            <h3>
              <span className="calc-rcard__dot" />
              Recommended Andy package
            </h3>
            <p>{PACKAGES[state.budget]}</p>
          </div>

          <div className="calc-cta-box">
            <h3>Make this estimate real</h3>
            <p>This is a planning estimate. Andy can refine the courses, timing, transport, and bookings around your group.</p>
            <button
              onClick={() => track('email_estimate')}
              className="calc-btn calc-btn-primary"
            >
              Email this estimate
            </button>
            <button
              onClick={() => track('booking_enquiry_click')}
              className="calc-btn calc-btn-primary"
              style={{ backgroundColor: 'var(--text-mute)', color: 'var(--bg)' }}
            >
              Ask Andy to refine this trip
            </button>
            <button
              onClick={() => track('booking_enquiry_click')}
              className="calc-btn calc-btn-primary"
              style={{ backgroundColor: 'var(--text-mute)', color: 'var(--bg)' }}
            >
              Book a golf day with Andy
            </button>
            <a href="#" className="calc-cta-link">
              Read the full Mallorca golf cost guide →
            </a>
          </div>

          <div className="calc-nav">
            <button onClick={() => goTo(3)} className="calc-btn calc-btn-ghost" style={{ flex: 1 }}>
              Adjust my answers
            </button>
            <button
              onClick={() => {
                setStep(1)
                setResult(null)
              }}
              className="calc-btn calc-btn-ghost"
              style={{ flex: 1 }}
            >
              Start over
            </button>
          </div>

          <p className="calc-disclaimer">Green fees, hotel rates, and dining prices in Mallorca vary by season and availability. All figures here are approximate ranges for planning only.</p>
        </section>
      )}
    </div>
  )
}
