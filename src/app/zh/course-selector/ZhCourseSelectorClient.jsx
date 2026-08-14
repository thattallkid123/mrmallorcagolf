'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ZH_COURSE_EDITORIAL, getZhGuideHref } from '@lib/zh-course-editorial'
import { COURSE_PRICING_BY_NAME } from '@lib/course-pricing-data'

const COURSE_IMGS = {
  'son-gual':         '/images/courses/son-gual.webp',
  'alcanada':         '/images/courses/alcanada.webp',
  't-golf-palma':     '/images/courses/t-golf-palma.webp',
  'son-muntaner':     '/images/courses/son-muntaner.webp',
  'santa-ponsa':      '/images/courses/santa-ponsa-1.webp',
  'andratx':          '/images/courses/golf-andratx.webp',
  'son-vida':         '/images/courses/son-vida.webp',
  'son-quint':        '/images/courses/son-quint.webp',
  'bendinat':         '/images/courses/bendinat.webp',
  'capdepera':        '/images/courses/capdepera.webp',
  'canyamel':         '/images/courses/canyamel.webp',
  'pula':             '/images/courses/pula.webp',
  'son-servera':      '/images/courses/son-servera.webp',
  'maioris':          '/images/courses/maioris.webp',
  'son-antem-west':   '/images/courses/son-antem-west.webp',
  'son-termes':       '/images/courses/son-termes.webp',
  't-golf-calvia':    '/images/courses/t-golf-calvia.webp',
  'son-antem-east':   '/images/courses/son-antem-east.webp',
  'pollensa':         '/images/courses/pollensa.webp',
  'santa-ponsa-2':    '/images/courses/santa-ponsa-2.webp',
  'santa-ponsa-3':    '/images/courses/santa-ponsa-3.webp',
  'palma-pitch-putt': '/images/courses/palma-pitch-putt.webp',
  'rotana':           '/images/courses/rotana.webp',
  'vall-dor':         '/images/courses/vall-dor.webp',
}

// Course rows are derived, not hardcoded. Editorial comes from the shared
// Chinese editorial library so other tools can reuse it; green fees come from
// the canonical pricing data so they follow the pricing sync. An earlier
// version inlined both and the prices drifted badly.
const EUR_TO_CNY = 7.8

function formatZhPrice(pricing) {
  if (!pricing) return '价格待确认'
  const { low, peak, dynamic } = pricing
  const cnyLow = Math.round((low * EUR_TO_CNY) / 10) * 10
  const cnyPeak = Math.round((peak * EUR_TO_CNY) / 10) * 10
  const suffix = dynamic ? '，动态定价' : ''
  return `参考范围 €${low}–€${peak}（约 ¥${cnyLow.toLocaleString()}–¥${cnyPeak.toLocaleString()}${suffix}）`
}

const COURSES = Object.entries(ZH_COURSE_EDITORIAL).map(([en, ed]) => ({
  id: ed.id,
  en,
  zhDesc: ed.zhTagline,
  region: ed.region,
  regionZh: ed.regionZh,
  level: ed.level,
  budget: ed.budget,
  difficulty: ed.difficulty,
  tags: ed.tags,
  forWho: ed.forWho,
  why: ed.why,
  photo: ed.photoNote,
  andy: ed.andy,
  price: formatZhPrice(COURSE_PRICING_BY_NAME[en]),
  article: getZhGuideHref(en),
}))

function tagScore(course, tag, pts) {
  return course.tags.includes(tag) ? pts : 0
}

const QUESTIONS = [
  {
    id:'level', title:'您目前的球技水平？', sub:'诚实选择，推荐会更准确，选错球场是最常见的遗憾',
    options:[
      { label:'初学者', note:'打球不到一年', value:1 },
      { label:'休闲球手', note:'偶尔下场，享受为主', value:2 },
      { label:'稳定球手', note:'能稳定打完 18 洞', value:3 },
      { label:'低差点球手', note:'差点 18 以内', value:4 },
    ],
    score(c, v) {
      if (v >= c.level) return 8
      if (v === c.level - 1) return 2
      return -20
    },
  },
  {
    id:'style', title:'这次旅行的风格更接近？', sub:'',
    options:[
      { label:'高端度假', value:'luxury' },
      { label:'亲子轻松', value:'family' },
      { label:'风景优先', value:'scenic' },
      { label:'挑战球场', value:'challenge' },
      { label:'名气球场', value:'famous' },
    ],
    score(c, v) { return tagScore(c, v, 10) },
  },
  {
    id:'pref', title:'选球场时，您最看重？', sub:'',
    options:[
      { label:'最有名气', value:'famous' },
      { label:'最漂亮', value:'scenic' },
      { label:'最适合拍照', value:'photo' },
      { label:'最有挑战', value:'challenge' },
      { label:'最轻松', value:'easy' },
    ],
    score(c, v) { return tagScore(c, v, 8) },
  },
  {
    id:'budget', title:'果岭费预算大概在？', sub:'价格均为参考范围，随季节浮动，以预订时确认为准',
    options:[
      { label:'性价比优先', note:'约 €70–110 / ¥550–860', value:1 },
      { label:'中高端', note:'约 €100–150 / ¥780–1,170', value:2 },
      { label:'高端', note:'约 €150 以上 / ¥1,170 以上', value:3 },
      { label:'不太考虑预算', value:4 },
    ],
    score(c, v) {
      if (v === 4) return c.budget === 3 ? 4 : 2
      if (v === c.budget) return 6
      if (Math.abs(v - c.budget) === 1) return 2
      return -6
    },
  },
  {
    id:'region', title:'您住在岛上哪个区域？', sub:'马略卡开车横跨全岛约 1 小时，好球场值得专程去',
    options:[
      { label:'西南部', note:'圣彭萨 / 安德拉特斯一带', value:'southwest' },
      { label:'帕尔马附近', note:'首府及周边', value:'palma' },
      { label:'北部', note:'阿尔库迪亚 / 波伦萨一带', value:'north' },
      { label:'都可以', note:'愿意为好球场开车', value:'any' },
    ],
    score(c, v) {
      if (v === 'any') return 0
      if (c.region === v) return 6
      if (c.region === 'palma') return 2
      return -2
    },
  },
  {
    id:'pro', title:'需要 Andy 教练陪打或下场指导吗？', sub:'陪打 = 同组下场，指导发生在球场上，而不是打完以后',
    options:[
      { label:'是，想安排', value:'yes' },
      { label:'想了解一下', value:'maybe' },
      { label:'暂时不需要', value:'no' },
    ],
    score(c, v) {
      if (v === 'yes' || v === 'maybe') return tagScore(c, 'challenge', 2) + (c.id === 'pula' ? 3 : 0)
      return 0
    },
  },
  {
    id:'concierge', title:'需要帮您安排餐厅、酒店或接送吗？', sub:'全程中文沟通，到场前一切都已安排好',
    options:[
      { label:'是，需要', value:'yes' },
      { label:'可能需要', value:'maybe' },
      { label:'不需要', value:'no' },
    ],
    score(c, v) { return v !== 'no' ? tagScore(c, 'luxury', 1) : 0 },
  },
]

const RANK_LABELS = ['首选推荐', '第二推荐', '第三推荐']
const TAG_ZH = {
  famous:'最有名气', scenic:'风景出色', photo:'适合拍照', challenge:'有挑战',
  easy:'轻松友好', family:'适合亲子', business:'适合商务接待',
  luxury:'高端体验', value:'性价比', firsttime:'适合第一次来马略卡',
}

function recommend(answers) {
  return COURSES
    .map(c => {
      let total = 0
      QUESTIONS.forEach(q => {
        const v = answers[q.id]
        if (v !== undefined) total += q.score(c, v)
      })
      return { course: c, total }
    })
    .sort((a, b) => b.total - a.total)
    .slice(0, 3)
}

export default function ZhCourseSelectorClient() {
  const [phase, setPhase] = useState('quiz') // 'intro' | 'quiz' | 'results'
  const [stepIdx, setStepIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSending, setEmailSending] = useState(false)

  const q = QUESTIONS[stepIdx]
  const progress = ((stepIdx) / QUESTIONS.length) * 100

  function startQuiz() {
    setPhase('quiz')
    window.scrollTo({ top: 0 })
  }

  function selectOption(qId, val) {
    const newAnswers = { ...answers, [qId]: val }
    setAnswers(newAnswers)
    setTimeout(() => {
      if (stepIdx < QUESTIONS.length - 1) {
        setStepIdx(s => s + 1)
        window.scrollTo({ top: 0 })
      } else {
        const picks = recommend(newAnswers)
        setResults(picks)
        setPhase('results')
        window.scrollTo({ top: 0 })
      }
    }, 220)
  }

  function goBack() {
    if (stepIdx > 0) {
      setStepIdx(s => s - 1)
      window.scrollTo({ top: 0 })
    }
  }

  function restart() {
    setPhase('quiz')
    setStepIdx(0)
    setAnswers({})
    setResults(null)
    setEmail('')
    setEmailSent(false)
    setEmailError(false)
    window.scrollTo({ top: 0 })
  }

  async function sendEmail() {
    if (!email || !email.includes('@')) return
    setEmailSending(true)
    try {
      const res = await fetch('/api/zh-selector-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          courses: results.map(p => ({ id: p.course.id, en: p.course.en, zh: p.course.zhDesc })),
          source: 'zh-course-selector',
          timestamp: new Date().toISOString(),
        }),
      })
      setEmailSending(false)
      if (res.ok) { setEmailSent(true) }
      else { setEmailError(true) }
    } catch {
      setEmailSending(false)
      setEmailError(true)
    }
  }

  const wantsPro = answers.pro === 'yes' || answers.pro === 'maybe'

  return (
    <>
      <style jsx>{`
        .zh-wrap { max-width: 720px; margin: 0 auto; padding: 48px 24px 120px; }
        /* Hero */
        .zh-hero { background: #2D4A3E; color: #F7F4EF; padding: 52px 24px 48px; text-align: center; }
        .zh-eyebrow-wrap { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 16px; }
        .zh-eyebrow-line { width: 28px; height: 1px; background: #B8973C; flex-shrink: 0; }
        .zh-eyebrow-text { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #CBA968; }
        .zh-hero h1 { font-family: var(--font-serif); font-weight: 500; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.1; color: #F7F4EF; max-width: 600px; margin: 0 auto; }
        .zh-hero p { font-weight: 300; font-size: 1rem; line-height: 1.6; color: rgba(247,244,239,0.78); max-width: 480px; margin: 16px auto 0; }
        /* Intro card */
        .intro-card { background: #fff; padding: 52px 48px; margin-top: 40px; box-shadow: 0 22px 60px rgba(18,17,15,0.08); text-align: center; border-top: 3px solid #B8973C; }
        .intro-card h2 { font-family: var(--font-serif); font-weight: 500; font-size: clamp(1.5rem, 3.5vw, 2rem); color: #1A1916; margin-bottom: 14px; line-height: 1.1; }
        .intro-card p { font-size: 15px; color: #2C2A27; margin-bottom: 0; line-height: 1.72; }
        .intro-trust { display: flex; flex-direction: column; gap: 6px; align-items: center; margin: 28px 0 32px; padding: 20px 0; border-top: 1px solid rgba(184,151,60,0.25); border-bottom: 1px solid rgba(184,151,60,0.25); }
        .intro-trust-label { font-size: 9px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: #B8973C; margin-bottom: 6px; }
        .intro-trust span { font-size: 12px; font-weight: 300; color: #8A7F74; letter-spacing: 0.03em; }
        .intro-trust span::before { content: ''; }
        /* Progress */
        .progress-row { display: flex; align-items: center; gap: 14px; padding: 32px 0 20px; }
        .progress-track { flex: 1; height: 1px; background: #E0D8CB; overflow: hidden; }
        .progress-fill { height: 100%; background: #B8973C; transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
        .progress-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; color: #8A7F74; white-space: nowrap; text-transform: uppercase; }
        /* Question card */
        .q-card { background: #fff; border: 1px solid rgba(26,25,22,0.08); padding: 48px 42px; box-shadow: 0 22px 60px rgba(18,17,15,0.08); }
        .q-num { font-size: 10px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #B8973C; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .q-num::before { content: ''; display: block; width: 20px; height: 1px; background: #B8973C; }
        .q-card h3 { font-family: var(--font-serif); font-weight: 500; font-size: clamp(1.35rem, 3vw, 1.65rem); line-height: 1.15; color: #1A1916; margin-bottom: 6px; }
        .q-sub { font-size: 13px; font-weight: 300; color: #8A7F74; margin-bottom: 26px; line-height: 1.6; }
        .opt-list { display: flex; flex-direction: column; gap: 8px; }
        .zh-opt { display: flex; justify-content: space-between; align-items: center; gap: 16px; border: 1px solid #E0D8CB; background: #F7F4EF; padding: 16px 20px; cursor: pointer; font-size: 15px; font-weight: 300; text-align: left; color: #2C2A27; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, background 0.3s; width: 100%; font-family: inherit; }
        .zh-opt:hover { transform: translateY(-3px); border-color: rgba(184,151,60,0.5); }
        .zh-opt.selected { border-color: #2D4A3E; background: #2D4A3E; color: #F7F4EF; }
        .opt-note { font-size: 11px; font-weight: 400; letter-spacing: 0.04em; color: #8A7F74; text-align: right; flex-shrink: 0; }
        .zh-opt.selected .opt-note { color: rgba(212,176,104,0.82); }
        .q-back { margin-top: 12px; padding: 8px 0; background: none; border: none; color: #8A7F74; font-size: 11px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; font-family: inherit; }
        .q-back:hover { color: #2D4A3E; }
        /* Results */
        .results-header { text-align: center; padding: 40px 0 28px; }
        .results-header h2 { font-family: var(--font-serif); font-weight: 500; font-size: clamp(1.8rem, 4vw, 2.6rem); line-height: 1.08; color: #1A1916; margin-bottom: 10px; }
        .results-header p { font-size: 14px; color: #8A7F74; }
        .eyebrow-result { display: inline-flex; align-items: center; gap: 12px; font-size: 10px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #B8973C; margin-bottom: 16px; }
        .eyebrow-result::before { content: ''; display: block; flex-shrink: 0; width: 28px; height: 1px; background: #B8973C; }
        /* Course card */
        .result-card { background: #fff; border: 1px solid rgba(26,25,22,0.08); box-shadow: 0 22px 60px rgba(18,17,15,0.08); margin-bottom: 42px; overflow: hidden; }
        .cc-photo { width: 100%; height: 240px; background: linear-gradient(135deg, #2D4A3E 0%, #1A1916 100%); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
        .cc-photo-label { position: absolute; text-align: center; padding: 0 24px; font-family: var(--font-serif); font-weight: 500; font-size: 1.5rem; color: rgba(247,244,239,0.92); }
        .cc-photo img { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: cover; }
        .cc-head { background: #2D4A3E; padding: 36px 36px 0; }
        .cc-head-inner { border-bottom: 1px solid rgba(212,176,104,0.28); padding-bottom: 28px; }
        .cc-rank { display: inline-block; font-size: 8px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; background: #B8973C; color: #1A1916; padding: 5px 10px; margin-bottom: 14px; }
        .cc-head h3 { font-family: var(--font-serif); font-weight: 500; font-size: clamp(1.5rem, 4vw, 2rem); line-height: 1.1; color: #fff; }
        .cc-zh { font-size: 12px; font-weight: 400; letter-spacing: 0.06em; color: rgba(247,244,239,0.68); margin-top: 6px; }
        .cc-tags { display: flex; flex-wrap: wrap; gap: 0; padding: 12px 0 0; }
        .cc-tags span { font-size: 8px; font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.62); padding: 0 8px 0 0; line-height: 1.2; }
        .cc-tags span::after { content: ' ·'; margin-left: 6px; color: rgba(255,255,255,0.4); }
        .cc-tags span:last-child::after { content: ''; }
        .cc-body { padding: 36px 36px 42px; }
        .cc-row { display: flex; gap: 16px; margin-bottom: 20px; font-size: 14px; font-weight: 300; line-height: 1.72; }
        .cc-label { flex: 0 0 76px; padding-top: 1px; font-size: 9px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: #B8973C; }
        .cc-val { flex: 1; color: #2C2A27; }
        .cc-andy { background: #F4EDD8; border-left: 2px solid #B8973C; padding: 22px 24px; margin: 26px 0; font-family: var(--font-serif); font-style: italic; font-size: 1.05rem; line-height: 1.55; color: #2D4A3E; }
        .cc-andy strong { font-style: normal; font-weight: 500; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; display: block; margin-bottom: 8px; color: #B8973C; font-family: var(--font-sans); }
        .cc-links { display: flex; gap: 10px; flex-wrap: wrap; padding-top: 4px; }
        .cc-btn { flex: 1; min-width: 140px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none; padding: 14px 20px; border-radius: 999px; cursor: pointer; transition: background 0.3s, color 0.3s, transform 0.3s; font-family: inherit; border: 1px solid currentColor; }
        .cc-btn-outline { color: #1A1916; border-color: rgba(26,25,22,0.24); background: transparent; }
        .cc-btn-outline:hover { background: #1A1916; color: #F7F4EF; transform: translateY(-2px); }
        .cc-btn-gold { color: #1A1916; background: #B8973C; border-color: #B8973C; }
        .cc-btn-gold:hover { background: #D4B068; border-color: #D4B068; transform: translateY(-2px); }
        /* Final block */
        .final-card { background: #1A1916; padding: 48px; color: #F7F4EF; box-shadow: 0 30px 80px rgba(18,17,15,0.16); margin-top: 28px; }
        .final-card h3 { font-family: var(--font-serif); font-weight: 500; font-size: clamp(1.5rem, 3.5vw, 2rem); line-height: 1.1; color: #fff; text-align: center; margin-bottom: 10px; }
        .final-card > p { font-size: 14px; line-height: 1.72; color: rgba(247,244,239,0.75); text-align: center; margin-bottom: 32px; max-width: 460px; margin-left: auto; margin-right: auto; }
        .wechat-box { background: #2D4A3E; border: 1px solid rgba(212,176,104,0.35); padding: 36px 32px; text-align: center; margin-bottom: 24px; cursor: pointer; transition: border-color 0.3s; }
        .wechat-box:hover { border-color: rgba(212,176,104,0.7); }
        .qr-wrap { width: 132px; height: 132px; background: #F7F4EF; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; border: 1px dashed rgba(184,151,60,0.5); overflow: hidden; }
        .qr-wrap img { width: 100%; height: 100%; object-fit: contain; }
        .qr-label { font-size: 14px; color: #F7F4EF; margin-bottom: 4px; }
        .wechat-id { font-size: 15px; font-weight: 400; letter-spacing: 0.06em; color: #D4B068; margin-bottom: 4px; }
        .wechat-sub { font-size: 11px; letter-spacing: 0.04em; color: rgba(247,244,239,0.55); }
        .final-actions { display: flex; flex-direction: column; gap: 10px; }
        .email-row { display: flex; gap: 8px; }
        .email-input { flex: 1; min-width: 0; border: 1px solid rgba(247,244,239,0.22); background: rgba(247,244,239,0.07); padding: 0 18px; height: 46px; font-size: 13px; font-weight: 300; color: #F7F4EF; border-radius: 999px; transition: border-color 0.25s; font-family: inherit; }
        .email-input::placeholder { color: rgba(247,244,239,0.42); }
        .email-input:focus { outline: none; border-color: rgba(212,176,104,0.7); }
        .email-success { font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #D4B068; text-align: center; padding: 4px 0; }
        .email-error { font-size: 12px; color: #D4B068; text-align: center; }
        .btn-action { display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none; padding: 14px 30px; min-height: 46px; border: 1px solid currentColor; border-radius: 999px; cursor: pointer; transition: background 0.3s, color 0.3s, transform 0.3s; font-family: inherit; }
        .btn-gold-solid { color: #1A1916; background: #B8973C; border-color: #B8973C; }
        .btn-gold-solid:hover { background: #D4B068; }
        .btn-outline-light { color: #fff; border-color: rgba(255,255,255,0.34); background: transparent; }
        .btn-outline-light:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.68); }
        .whatsapp-row { text-align: center; margin-top: 20px; font-size: 12px; color: rgba(247,244,239,0.55); }
        .whatsapp-row a { color: #D4B068; text-underline-offset: 3px; }
        .restart { text-align: center; padding: 28px 0 0; }
        .restart button { background: none; border: none; cursor: pointer; font-size: 11px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7F74; text-decoration: underline; text-underline-offset: 4px; font-family: inherit; }
        .restart button:hover { color: #2D4A3E; }
        @media (min-width: 860px) {
          .results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
          .results-grid .result-card { margin-bottom: 0; }
        }
        @media (max-width: 520px) {
          .zh-wrap { padding: 0 16px 80px; }
          .intro-card, .final-card { padding: 48px 24px; }
          .q-card { padding: 32px 24px; }
          .cc-head { padding: 24px 24px 0; }
          .cc-body { padding: 24px 24px 28px; }
          .cc-row { flex-direction: column; gap: 3px; }
          .cc-label { flex: none; }
          .cc-links { flex-direction: column; }
          .email-row { flex-direction: column; }
        }
      `}</style>

      {/* HERO */}
      <section className="zh-hero">
        <div className="zh-eyebrow-wrap">
          <span className="zh-eyebrow-line" />
          <span className="zh-eyebrow-text">免费工具 · Andy 教练</span>
        </div>
        <h1>马略卡高尔夫球场智能推荐</h1>
        <p>回答 7 个问题，根据您的球技、预算和行程，为您匹配最值得打的 3 座球场。</p>
      </section>

      <div className="zh-wrap">

        {/* INTRO */}
        {phase === 'intro' && (
          <div className="intro-card">
            <h2>来马略卡打球，先选对球场。</h2>
            <p>岛上 24 座球场，难度与价格差异极大。回答 7 个问题，Andy 教练为您精准匹配最合适的 3 座。</p>
            <div className="intro-trust">
              <div className="intro-trust-label">Andy 教练资历</div>
              <span>上海执教 11 年 · 普通话流利</span>
              <span>中国国家队球员教练</span>
              <span>PGA 高级职业教练 · Trackman 大师认证</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button className="btn-action btn-gold-solid" onClick={startQuiz}>开始选球场</button>
            </div>
          </div>
        )}

        {/* QUIZ */}
        {phase === 'quiz' && q && (
          <div>
            <div className="progress-row">
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-label">{stepIdx + 1} / {QUESTIONS.length}</span>
            </div>
            <div className="q-card">
              <div className="q-num">问题 {stepIdx + 1} / {QUESTIONS.length}</div>
              <h3>{q.title}</h3>
              {q.sub && <p className="q-sub">{q.sub}</p>}
              <div className="opt-list">
                {q.options.map(opt => (
                  <button
                    key={String(opt.value)}
                    className={`zh-opt${answers[q.id] === opt.value ? ' selected' : ''}`}
                    onClick={() => selectOption(q.id, opt.value)}
                  >
                    <span>{opt.label}</span>
                    {opt.note && <span className="opt-note">{opt.note}</span>}
                  </button>
                ))}
              </div>
              {stepIdx > 0 && (
                <button className="q-back" onClick={goBack}>← 上一题</button>
              )}
            </div>
          </div>
        )}

        {/* RESULTS */}
        {phase === 'results' && results && (
          <div>
            <div className="results-header">
              <div className="eyebrow-result">为您匹配的结果</div>
              <h2>这 3 座球场，最适合您这次行程。</h2>
              <p>由 Andy 教练的实地打球经验匹配，按适合程度排序。</p>
            </div>

            <div className="results-grid">
              {results.map((p, i) => {
                const c = p.course
                return (
                  <article key={c.id} className="result-card">
                    <div className="cc-photo">
                      <span className="cc-photo-label">{c.en}</span>
                      <img src={COURSE_IMGS[c.id] || c.photoUrl} alt={c.photoAlt} loading="lazy" onError={e => { e.target.style.display = 'none' }} />
                    </div>
                    <div className="cc-head">
                      <div className="cc-head-inner">
                        <div className="cc-rank">{RANK_LABELS[i]} · No.{i + 1}</div>
                        <h3>{c.en}</h3>
                        <div className="cc-zh">{c.zhDesc}</div>
                        <div className="cc-tags">
                          {c.tags.map(t => <span key={t}>{TAG_ZH[t] || t}</span>)}
                        </div>
                      </div>
                    </div>
                    <div className="cc-body">
                      <div className="cc-row"><span className="cc-label">适合谁</span><span className="cc-val">{c.forWho}</span></div>
                      <div className="cc-row"><span className="cc-label">推荐理由</span><span className="cc-val">{c.why}</span></div>
                      <div className="cc-row"><span className="cc-label">难度</span><span className="cc-val">{c.difficulty}</span></div>
                      <div className="cc-row"><span className="cc-label">地区</span><span className="cc-val">{c.regionZh}</span></div>
                      <div className="cc-row"><span className="cc-label">价格参考</span><span className="cc-val">{c.price}，以预订时确认为准</span></div>
                      <div className="cc-row"><span className="cc-label">场景标签</span><span className="cc-val">{c.photo}</span></div>
                      <div className="cc-andy">
                        <strong>Andy 教练建议：</strong>
                        {c.andy}
                        {wantsPro && ' 您提到想了解陪打，这座球场我可以全程同组陪同，指导就发生在球场上。'}
                      </div>
                      <div className="cc-links">
                        {c.article ? (
                          <a className="cc-btn cc-btn-outline" href={c.article}>中文球场攻略 →</a>
                        ) : null}
                        <a className="cc-btn cc-btn-gold" href="/zh/contact">预约咨询</a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Final conversion */}
            <div className="final-card">
              <h3>下一步：让这次行程真正落地。</h3>
              <p>球场只是开始。开球时间、陪打、餐厅、酒店和接送，都可以由我亲自安排，全程中文沟通。</p>

              <div className="wechat-box">
                <div className="qr-wrap">
                  <img src="/images/wechat-qr.png" alt="Andy 教练微信二维码" onError={e => { e.target.style.display = 'none' }} />
                </div>
                <p className="qr-label">微信扫码，直接和 Andy 教练沟通</p>
                <p className="wechat-id">微信号：andygriffiths1</p>
                <p className="wechat-sub">中国客人的首选联系方式 · 24 小时内回复，通常更快</p>
              </div>

              <div className="final-actions">
                {emailSent ? (
                  <p className="email-success">✓ 推荐结果将发送到您的邮箱（中文版，附英文球场名，方便预订时使用）</p>
                ) : (
                  <>
                    <div className="email-row">
                      <input
                        type="email"
                        className="email-input"
                        placeholder="输入邮箱，接收这份中文推荐结果"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        aria-label="邮箱"
                      />
                      <button className="btn-action btn-gold-solid" onClick={sendEmail} disabled={emailSending}>
                        {emailSending ? '发送中…' : '发送'}
                      </button>
                    </div>
                    {emailError && <p className="email-error">发送失败，请检查邮箱后重试</p>}
                    <p className="email-privacy-note" style={{ fontSize:'11px', color:'rgba(247,244,239,0.55)', marginTop:'8px' }}>
                      <a href="/privacy-policy" style={{ color:'inherit' }}>隐私政策</a>
                    </p>
                  </>
                )}
                <a className="btn-action btn-gold-solid" href="/zh/contact">联系 Andy 教练规划行程</a>
                <a className="btn-action btn-outline-light" href="/zh/play-with-a-pro">预约陪打 / 下场指导体验</a>
                <Link className="btn-action btn-outline-light" href="/zh/guides">查看中文球场攻略</Link>
              </div>

              <p className="whatsapp-row">
                人在海外，习惯用 WhatsApp？<a href="https://wa.me/34624466702" target="_blank" rel="noopener noreferrer">点这里联系</a>
              </p>
            </div>

            <div className="restart">
              <button onClick={restart}>重新选择 / 修改答案</button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}
