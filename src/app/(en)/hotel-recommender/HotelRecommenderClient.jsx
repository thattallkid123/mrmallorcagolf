'use client'

import { useRef, useState } from 'react'
import ToolTrustLine from '../../../components/ToolTrustLine'
import { trackEvent, trackLead, currentPagePath } from '../../../lib/analytics'
import { getHotelRecommenderT } from '../../../lib/hotel-recommender-translations'
import { getLegalPath } from '@lib/site'
import { getPrivacyLinkLabel } from '@lib/legal-note-content'
import { HOTELS, QUESTIONS_DATA, scoreHotel, pillClass } from '../../../lib/hotel-recommender-logic'

const WA_HOTEL_MESSAGE = 'Hi Andy, I used the hotel recommender on your site and I’d like help matching where I stay to the courses I want to play.'
const WA_HOTEL_HREF = `https://wa.me/34624466702?text=${encodeURIComponent(WA_HOTEL_MESSAGE)}`

function trackHotelWhatsApp() {
  trackEvent('whatsapp_click', { channel: 'whatsapp', page_path: currentPagePath(), tool: 'hotel-recommender' })
  trackLead('message_intent', { contact_method: 'whatsapp', page_path: currentPagePath(), tool: 'hotel-recommender' })
}


// Note: AREA_LABELS, GROUP_LABEL, PRIORITY_LABEL, TIER_LABELS, AREA_SHORT now come from translations

export default function HotelRecommenderClient({ lang = 'en' }) {
  const t = getHotelRecommenderT(lang)
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const containerRef = useRef(null)

  function scrollToTop() {
    const el = containerRef.current
    if (!el) return
    window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 70), behavior: 'smooth' })
  }

  const TOTAL = QUESTIONS_DATA.length
  const currentQ = QUESTIONS_DATA[step - 1]
  const progress = ((step - 1) / TOTAL) * 100

  function selectAnswer(key, val) {
    if (currentQ && currentQ.multi) {
      setAnswers(prev => {
        const curr = Array.isArray(prev[key]) ? prev[key] : []
        const idx = curr.indexOf(val)
        return { ...prev, [key]: idx >= 0 ? curr.filter(v => v !== val) : [...curr, val] }
      })
    } else {
      const newAnswers = { ...answers, [key]: val }
      setAnswers(newAnswers)
      setTimeout(() => {
        if (step === TOTAL) {
          const allScored = HOTELS.map(h => ({ hotel: h, score: scoreHotel(h, newAnswers) }))
            .filter(x => x.score > -999)
            .sort((a, b) => b.score - a.score)
          setResults(allScored.slice(0, 3).filter(x => x.score > 0))
          scrollToTop()
        } else {
          setStep(s => s + 1)
          scrollToTop()
        }
      }, 220)
    }
  }

  function next() {
    if (step === TOTAL) {
      buildResults()
    } else {
      setStep(s => s + 1)
      scrollToTop()
    }
  }

  function back() {
    setStep(s => s - 1)
    scrollToTop()
  }

  function buildResults() {
    const allScored = HOTELS.map(h => ({ hotel: h, score: scoreHotel(h, answers) }))
      .filter(x => x.score > -999)
      .sort((a, b) => b.score - a.score)
    const top = allScored.slice(0, 3).filter(x => x.score > 0)
    setResults(top)
    scrollToTop()
  }

  function restart() {
    setStep(1)
    setAnswers({})
    setResults(null)
    setEmail('')
    setNewsletter(false)
    setEmailSent(false)
    setEmailError(false)
    scrollToTop()
  }

  async function sendEmail() {
    if (!email || !email.includes('@')) return

    const answerSummary = (() => {
      const parts = []
      const priorityMapForEmail = { 'golf-focused':'Close to courses', beach:'Beach & pool', spa:'Spa & wellness', dining:'Food & evenings', privacy:'Private villa / own space' }
      const sizeMap = { '1-2':'1–2 people', '3-5':'3–5 people', '6-9':'6–9 people', '10+':'10+ people' }
      const styleMap = { boutique:'Boutique', resort:'Full resort', classic:'Classic hotel', villa:'Private villa', countryside:'Countryside finca' }
      const budgetMap = { mid:'Up to €250/room', premium:'€250–€500/room', ultra:'€500+/room', flexible:'Flexible budget' }
      if (answers.area) parts.push(`Area: ${t.areaLabels[answers.area] || answers.area}`)
      const pArr = Array.isArray(answers.priority) ? answers.priority : (answers.priority ? [answers.priority] : [])
      if (pArr.length) parts.push(`Priorities: ${pArr.map(p => priorityMapForEmail[p] || p).join(', ')}`)
      if (answers.group) parts.push(`Group: ${t.groupLabel[answers.group] ? t.groupLabel[answers.group].charAt(0).toUpperCase() + t.groupLabel[answers.group].slice(1) : answers.group}`)
      if (answers.size) parts.push(`Size: ${sizeMap[answers.size] || answers.size}`)
      if (answers.style) parts.push(`Style: ${styleMap[answers.style] || answers.style}`)
      if (answers.budget) parts.push(`Budget: ${budgetMap[answers.budget] || answers.budget}`)
      return parts.join(' | ')
    })()

    const hotelResults = results.map(x => ({
      name: x.hotel.name,
      subname: x.hotel.subname,
      why: x.hotel.why,
      golf: x.hotel.golf,
    }))

    // Fire-and-forget: add to MailerLite
    const mlBody = new URLSearchParams()
    mlBody.set('fields[email]', email)
    mlBody.set('fields[hotel_answers]', answerSummary)
    mlBody.set('ml-submit', '1')
    mlBody.set('anticsrf', 'true')
    fetch('https://assets.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: mlBody.toString(),
    }).catch(() => {})

    try {
      const response = await fetch('/api/send-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tool: 'hotel-recommender',
          subject: 'Your Mallorca golf hotel shortlist',
          data: { answerSummary, results: hotelResults },
          subscribeNewsletter: newsletter,
        }),
      })
      if (!response.ok) throw new Error('Email failed')
      setEmailSent(true)
    } catch {
      setEmailError(true)
    }
  }

  const canContinue = currentQ && (Array.isArray(answers[currentQ.key]) ? answers[currentQ.key].length > 0 : !!answers[currentQ.key])
  const isLastStep = step === TOTAL

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .hr-hero { background:#2D4A3E; color:#F7F4EF; padding:52px 24px 48px; text-align:center; }
        .hr-eyebrow { font-family:var(--font-sans); font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#CBA968; margin-bottom:16px; display:block; }
        .hr-h1 { font-family:var(--font-serif); font-weight:500; font-size:clamp(2.1rem,5vw,3.2rem); line-height:1.1; color:#F7F4EF; max-width:600px; margin:0 auto; }
        .hr-sub { font-family:var(--font-sans); font-weight:300; font-size:1rem; line-height:1.6; color:rgba(247,244,239,0.78); max-width:480px; margin:16px auto 0; }
        .hr-trust-wrap { background:#2D4A3E; padding:0 24px 24px; display:flex; justify-content:center; }
        .hr-trust-wrap :global(.tool-trust-line) { margin:0; color:rgba(247,244,239,0.76); }
        .hr-trust-wrap :global(.review-text__line) { color:rgba(247,244,239,0.76); }
        .hr-trust-wrap :global(.review-text__score) { color:#F7F4EF; }
        .hr-progress-wrap { background:#2D4A3E; padding:0 32px 28px; }
        .hr-progress-bar { height:2px; background:rgba(247,244,239,0.15); max-width:480px; margin:0 auto; border-radius:2px; overflow:hidden; }
        .hr-progress-fill { height:100%; background:#B8973C; border-radius:2px; transition:width 0.4s ease; }
        .hr-quiz-wrap { max-width:640px; margin:0 auto; padding:48px 24px 60px; }
        .hr-step-num { font-size:0.72rem; font-weight:500; letter-spacing:.14em; text-transform:uppercase; color:#B8973C; margin-bottom:10px; }
        .hr-step h2 { font-family:var(--font-serif); font-size:clamp(1.5rem,3.5vw,2rem); font-weight:400; color:#1A1916; line-height:1.25; margin-bottom:8px; text-align:center; }
        .hr-step-sub { font-size:0.88rem; color:#8A7F74; line-height:1.65; margin-bottom:28px; text-align:center; }
        .hr-options { display:flex; flex-direction:column; gap:14px; }
        .hr-options-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .hr-options-grid > button:last-child:nth-child(odd) { grid-column:1 / -1; }
        .hr-opt { background:#fff; border:1.5px solid #E0D8CB; border-radius:3px; padding:18px 22px; cursor:pointer; transition:border-color 0.18s, background 0.18s; display:flex; align-items:flex-start; gap:14px; font-family:inherit; font-size:inherit; text-align:left; width:100%; min-height:92px; }
        .hr-opt:hover { border-color:#2D4A3E; background:rgba(45,74,62,0.03); }
        .hr-opt.selected { border-color:#2D4A3E; background:rgba(45,74,62,0.06); }
        .hr-opt-body { flex:1; }
        .hr-opt-label { font-weight:500; font-size:0.98rem; color:#1A1916; margin-bottom:6px; line-height:1.25; }
        .hr-opt-desc { font-size:0.84rem; color:#8A7F74; line-height:1.65; max-width:54ch; }
        .hr-nav { display:flex; gap:12px; margin-top:28px; align-items:center; }
        .hr-btn-next { background:#2D4A3E; color:#F7F4EF; border:none; padding:13px 32px; font-family:var(--font-sans); font-size:0.8rem; font-weight:500; letter-spacing:.18em; text-transform:uppercase; cursor:pointer; border-radius:999px; transition:background 0.18s, transform 0.18s; }
        .hr-btn-next:hover { background:#3a5f50; transform:translateY(-1px); }
        .hr-btn-next:disabled { opacity:0.4; cursor:default; }
        .hr-btn-back { background:none; border:none; color:#8A7F74; font-family:var(--font-sans); font-size:0.8rem; letter-spacing:.12em; text-transform:uppercase; cursor:pointer; padding:8px 0; transition:color 0.18s; }
        .hr-btn-back:hover { color:#1A1916; }
        .hr-results-hero { background:#2D4A3E; padding:48px 32px 40px; text-align:center; color:#F7F4EF; }
        .hr-results-hero h2 { font-family:var(--font-serif); font-size:clamp(1.8rem,4vw,2.4rem); font-weight:300; margin-bottom:10px; }
        .hr-results-hero p { font-size:0.9rem; color:rgba(247,244,239,0.7); max-width:480px; margin:0 auto; line-height:1.7; }
        .hr-results-wrap { max-width:720px; margin:0 auto; padding:44px 24px 60px; }
        .hr-results-label { font-size:0.72rem; font-weight:500; letter-spacing:.16em; text-transform:uppercase; color:#8A7F74; margin-bottom:24px; }
        .hr-area-warning { background:#FFF8E6; border:1px solid #E8D06A; border-left:4px solid #B8973C; padding:14px 16px; border-radius:2px; margin-bottom:20px; font-size:0.85rem; color:#5a4a1a; line-height:1.65; }
        .hr-hotel-card { background:#fff; border:1px solid #E0D8CB; border-radius:3px; margin-bottom:20px; overflow:hidden; }
        .hr-hotel-card.top { border-color:#2D4A3E; border-width:2px; }
        .hr-card-rank { background:#2D4A3E; color:#F7F4EF; font-size:0.7rem; font-weight:500; letter-spacing:.14em; text-transform:uppercase; padding:6px 16px; }
        .hr-card-rank.gold { background:#B8973C; }
        .hr-card-body { padding:22px 22px 18px; }
        .hr-card-meta { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:10px; }
        .hr-card-area { font-size:0.72rem; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#B8973C; }
        .hr-card-sep { color:#C8B89A; }
        .hr-card-tier { font-size:0.78rem; color:#8A7F74; }
        .hr-hotel-card h3 { font-family:var(--font-serif); font-size:1.35rem; font-weight:400; color:#1A1916; margin-bottom:8px; line-height:1.2; }
        .hr-pills { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px; }
        .pill { font-size:0.72rem; font-weight:500; padding:3px 9px; border-radius:20px; letter-spacing:.05em; background:#eee; color:#555; }
        .pill--beach { background:#E8F0F5; color:#2a5a7a; }
        .pill--spa { background:#F0EDF7; color:#4a3070; }
        .pill--golf { background:#E8F0EC; color:#2D4A3E; }
        .pill--adults { background:#FAF0E6; color:#7a4a2a; }
        .pill--family { background:#FFF3E0; color:#7a5a0a; }
        .hr-card-why { font-size:0.88rem; color:#2C2A27; line-height:1.7; margin-bottom:10px; }
        .hr-card-andy { background:#F7F4EF; border-left:3px solid #B8973C; padding:12px 14px; margin-bottom:12px; }
        .hr-card-andy-label { font-size:0.7rem; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#B8973C; margin-bottom:4px; }
        .hr-card-andy p { font-size:0.85rem; color:#2C2A27; line-height:1.65; font-style:italic; }
        .hr-card-golf { font-size:0.82rem; color:#8A7F74; margin-bottom:14px; line-height:1.55; }
        .hr-card-golf strong { color:#2D4A3E; font-weight:500; }
        .hr-email-section { background:#2D4A3E; padding:36px 28px; text-align:center; color:#F7F4EF; border-radius:3px; margin-top:36px; }
        .hr-email-section h3 { font-family:var(--font-serif); font-size:1.4rem; font-weight:300; margin-bottom:8px; }
        .hr-email-section p { font-size:0.85rem; color:rgba(247,244,239,0.7); margin-bottom:20px; line-height:1.65; }
        .hr-email-row { display:flex; flex-direction:column; gap:10px; max-width:420px; margin:0 auto 12px; align-items:center; }
        .hr-email-row .hr-btn-email { width:100%; }
        .hr-email-input { width:100%; padding:11px 14px; border:1px solid rgba(247,244,239,0.3); background:rgba(247,244,239,0.1); color:#F7F4EF; font-family:var(--font-sans); font-size:0.88rem; border-radius:999px; outline:none; text-align:center; }
        .hr-email-input::placeholder { color:rgba(247,244,239,0.4); }
        .hr-email-input:focus { border-color:#B8973C; }
        .hr-btn-email { background:#B8973C; color:#1A1916; border:none; padding:11px 22px; font-family:var(--font-sans); font-size:0.8rem; font-weight:500; letter-spacing:.18em; text-transform:uppercase; cursor:pointer; border-radius:999px; white-space:nowrap; transition:background 0.18s, transform 0.18s; }
        .hr-btn-email:hover { background:#c9a84c; transform:translateY(-1px); }
        .hr-newsletter-opt { display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.78rem; color:rgba(247,244,239,0.55); cursor:pointer; }
        .hr-email-success { font-size:0.88rem; color:#B8973C; padding:8px 0; }
        .hr-andy-cta { background:#fff; border:1px solid #E0D8CB; border-radius:3px; padding:28px 24px; text-align:center; margin-top:20px; }
        .hr-andy-cta h3 { font-family:var(--font-serif); font-size:1.3rem; font-weight:400; color:#1A1916; margin-bottom:8px; }
        .hr-andy-cta p { font-size:0.85rem; color:#8A7F74; line-height:1.65; margin-bottom:18px; max-width:440px; margin-left:auto; margin-right:auto; }
        .hr-cta-links { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .hr-cta-link { display:inline-block; padding:11px 24px; font-size:0.85rem; font-weight:500; border-radius:2px; text-decoration:none; letter-spacing:.05em; transition:background 0.18s, color 0.18s; }
        .hr-cta-link-primary { background:#2D4A3E; color:#F7F4EF; }
        .hr-cta-link-primary:hover { background:#3a5f50; }
        .hr-cta-link-secondary { background:transparent; border:1.5px solid #2D4A3E; color:#2D4A3E; }
        .hr-cta-link-secondary:hover { background:rgba(45,74,62,0.06); }
        .hr-btn-retry { background:none; border:1.5px solid rgba(247,244,239,0.3); color:rgba(247,244,239,0.7); padding:10px 24px; font-family:var(--font-sans); font-size:0.78rem; font-weight:500; cursor:pointer; border-radius:999px; margin-top:20px; letter-spacing:.16em; text-transform:uppercase; transition:border-color 0.18s, color 0.18s; }
        .hr-btn-retry:hover { border-color:rgba(247,244,239,0.6); color:#F7F4EF; }
        .hr-retry-wrap { text-align:center; padding-bottom:40px; display:flex; flex-direction:column; align-items:center; gap:10px; }
        @media (max-width:520px) {
          .hr-options-grid { grid-template-columns:1fr; }
          .hr-opt { padding:17px 18px; min-height:0; }
        }
      `}</style>

      {/* HERO */}
      <section className="hr-hero">
        <span className="hr-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="hr-h1">{t.hero.title}</h1>
        <p className="hr-sub">{t.hero.sub}</p>
      </section>

      {lang === 'en' && (
        <div className="hr-trust-wrap">
          <ToolTrustLine locale={lang} />
        </div>
      )}

      {/* PROGRESS */}
      <div className="hr-progress-wrap">
        <div className="hr-progress-bar">
          <div className="hr-progress-fill" style={{ width: results ? '100%' : `${progress}%` }} />
        </div>
      </div>

      {/* QUIZ */}
      {!results && currentQ && (
        <div className="hr-quiz-wrap">
          <div className="hr-step">
            <p className="hr-step-num">{t.quiz.stepOf(currentQ.qNum, currentQ.total)}</p>
            <h2>{currentQ.title}</h2>
            <p className="hr-step-sub">{currentQ.sub}</p>

            <div className={currentQ.grid ? 'hr-options-grid' : 'hr-options'}>
              {currentQ.opts.map(opt => (
                <button
                  key={opt.val}
                  className={`hr-opt${(Array.isArray(answers[currentQ.key]) ? answers[currentQ.key].includes(opt.val) : answers[currentQ.key] === opt.val) ? ' selected' : ''}`}
                  onClick={() => selectAnswer(currentQ.key, opt.val)}
                >
                  <div className="hr-opt-body">
                    <div className="hr-opt-label">{opt.label}</div>
                    {opt.desc && <div className="hr-opt-desc">{opt.desc}</div>}
                  </div>
                </button>
              ))}
            </div>

            <div className="hr-nav">
              <button className="hr-btn-next" onClick={next} disabled={!canContinue}>
                {isLastStep ? t.buttons.seeRecommendations : t.buttons.continue}
              </button>
              {step > 1 && (
                <button className="hr-btn-back" onClick={back}>{t.buttons.back}</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {results && (
        <>
          <div className="hr-results-hero">
            <h2>{t.results.hero}</h2>
            <p>{t.results.heroSub
              .replace('{group}', t.groupLabel[answers.group] || 'your group')
              .replace('{priority}', t.priorityLabel[answers.priority] || '')
              .replace('{area}', t.areaLabels[answers.area] || answers.area)}
            </p>
          </div>

          <div className="hr-results-wrap">
            {answers.area === 'northwest' && (
              <div className="hr-area-warning">
                <strong>{t.results.nwWarningTitle}</strong> {t.results.nwWarning}
              </div>
            )}

            <p className="hr-results-label">{t.results.label.replace('{area}', t.areaLabels[answers.area] || answers.area)}</p>

            {results.length === 0 ? (
              <p style={{ color:'#8A7F74', lineHeight:'1.7', fontSize:'0.9rem' }}>{t.results.noMatches}</p>
            ) : (
              results.map((x, i) => {
                const h = x.hotel
                const rankLabels = t.results.rankLabels
                const typeLabel = h.type === 'villa' ? 'Private villa' : (t.tierLabels[h.luxury] || '')
                return (
                  <div key={h.id} className={`hr-hotel-card${i === 0 ? ' top' : ''}`}>
                    <div className={`hr-card-rank${i === 0 ? ' gold' : ''}`}>{rankLabels[i]}</div>
                    <div className="hr-card-body">
                      <div className="hr-card-meta">
                        <span className="hr-card-area">{t.areaShort[h.area] || h.area}</span>
                        <span className="hr-card-sep">·</span>
                        <span className="hr-card-tier">{typeLabel}</span>
                        {h.travelTime && (
                          <>
                            <span className="hr-card-sep">·</span>
                            <span className="hr-card-tier">{h.travelTime.replace(/-/g, '–')}</span>
                          </>
                        )}
                      </div>
                      <h3>{h.name}</h3>
                      {h.subname && <p style={{ fontSize:'0.8rem', color:'#8A7F74', marginBottom:'10px' }}>{h.subname}</p>}
                      <div className="hr-pills">
                        {h.pills.map(p => (
                          <span key={p} className={`pill ${pillClass(p)}`}>{p}</span>
                        ))}
                      </div>
                      <p className="hr-card-why">{h.why}</p>
                      <div className="hr-card-andy">
                        <div className="hr-card-andy-label">{t.results.andysNote}</div>
                        <p>{h.andy}</p>
                      </div>
                      <p className="hr-card-golf"><strong>{t.results.nearbyGolf}</strong> {h.golf}</p>
                    </div>
                  </div>
                )
              })
            )}

            {/* EMAIL */}
            <div className="hr-email-section">
              <h3>{t.email.title}</h3>
              <p>{t.email.sub}</p>
              {emailSent ? (
                <p className="hr-email-success">{t.email.success}</p>
              ) : (
                <>
                  <div className="hr-email-row">
                    <input
                      className="hr-email-input"
                      type="email"
                      placeholder={t.email.placeholder}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button className="hr-btn-email" onClick={sendEmail}>{t.email.button}</button>
                  </div>
                  <label className="hr-newsletter-opt">
                    <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} style={{ accentColor:'#B8973C' }} />
                    {t.email.newsletter}
                  </label>
                  <p style={{ fontSize:'11px', color:'#8A7F74', marginTop:'8px' }}>{t.email.disclaimer} <a href={getLegalPath('privacy-policy', lang)} style={{ color:'inherit' }}>{getPrivacyLinkLabel(lang)}</a></p>
                  {emailError && <p className="hr-email-success">{t.email.error}</p>}
                </>
              )}
            </div>

            {/* ANDY CTA */}
            <div className="hr-andy-cta">
              <h3>{t.cta.title}</h3>
              <p>{t.cta.body}</p>
              <div className="hr-cta-links">
                <a href="https://www.mrmallorcagolf.com/contact" className="hr-cta-link hr-cta-link-primary">{t.cta.enquire}</a>
                <a href={WA_HOTEL_HREF} data-analytics-manual="true" target="_blank" rel="noopener noreferrer" className="hr-cta-link hr-cta-link-secondary" onClick={trackHotelWhatsApp}>{t.cta.whatsapp}</a>
              </div>
            </div>

            <div className="hr-retry-wrap">
              <button className="hr-btn-retry" onClick={() => { setResults(null); setStep(1); setAnswers({}); scrollToTop() }}>{t.buttons.reset}</button>
              <button className="hr-btn-retry" onClick={restart} style={{ fontSize:'.78rem', opacity:.7 }}>{t.buttons.retry}</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
