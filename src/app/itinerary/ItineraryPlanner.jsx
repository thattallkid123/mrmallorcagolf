'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

const OPTIONS = {
  nights: [
    { value: '3', label: '3 nights' },
    { value: '4', label: '4 nights' },
    { value: '5', label: '5 nights' },
    { value: '7', label: '7 nights' },
    { value: 'other', label: 'Something else', freeText: true },
  ],
  group: [
    { value: 'solo', label: 'Solo or pair' },
    { value: 'friends', label: 'Friends trip' },
    { value: 'family', label: 'Family or mixed group' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'other', label: 'Something else', freeText: true },
  ],
  golf: [
    { value: 'relaxed', label: 'A couple of relaxed rounds' },
    { value: 'balanced', label: 'Three or four good rounds' },
    { value: 'serious', label: 'Play the best courses available' },
    { value: 'other', label: 'Tell me more', freeText: true },
  ],
  base: [
    { value: 'palma', label: 'Palma / Son Vida' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'north', label: 'North / Alcudia' },
    { value: 'unsure', label: 'Not sure yet' },
    { value: 'other', label: 'Somewhere else', freeText: true },
  ],
  season: [
    { value: 'spring', label: 'Spring (Mar-May)' },
    { value: 'summer', label: 'Summer (Jun-Aug)' },
    { value: 'autumn', label: 'Autumn (Sep-Nov)' },
    { value: 'winter', label: 'Winter (Dec-Feb)' },
  ],
  budget: [
    { value: 'value', label: 'Good value matters' },
    { value: 'balanced', label: 'Balanced - spend where it counts' },
    { value: 'premium', label: 'Premium - best available' },
  ],
}

const FIELD_LABELS = {
  nights: 'Trip length',
  group: 'Who is travelling',
  golf: 'How much golf',
  base: 'Where to base',
  season: 'When',
  budget: 'Budget style',
}

const PRIORITIES = [
  { value: 'championship', label: 'The best courses on the island' },
  { value: 'scenery', label: 'Sea views and scenery' },
  { value: 'lowTravel', label: 'Minimal driving between rounds' },
  { value: 'restaurants', label: 'Good lunch and dining' },
  { value: 'pwap', label: 'A day with Andy on course' },
  { value: 'coaching', label: 'On-course coaching' },
  { value: 'clubHire', label: 'Club hire and transfer options' },
]

const COURSE_DETAILS = {
  Alcanada: {
    image: '/images/alcanada-card.webp',
    region: 'North coast',
    note: 'The scenic anchor if the north makes sense.',
  },
  'Pula or Son Servera': {
    image: '/images/courses/son-servera.webp',
    region: 'Northeast',
    note: 'A calmer second round after Alcanada.',
  },
  'Capdepera or Canyamel': {
    image: '/images/courses/capdepera.webp',
    region: 'Northeast',
    note: 'Good scenery without making the trip too heavy.',
  },
  'T Golf Calvia': {
    image: '/images/t-golf-calvia-card.webp',
    region: 'Southwest',
    note: 'A strong holiday round with resort rhythm.',
  },
  'Santa Ponsa 1': {
    image: '/images/santa-ponsa-card.webp',
    region: 'Southwest',
    note: 'Classic tournament history and easy logistics.',
  },
  'Golf de Andratx': {
    image: '/images/andratx-card.webp',
    region: 'Southwest',
    note: 'Big views, big elevation, and a proper test.',
  },
  'Son Gual': {
    image: '/images/son-gual-card.webp',
    region: 'Palma east',
    note: 'The premium benchmark when the group can handle it.',
  },
  'Son Muntaner': {
    image: '/images/son-muntaner-card.webp',
    region: 'Son Vida',
    note: 'Polished, central, and ideal for a serious Palma base.',
  },
  'Son Quint': {
    image: '/images/courses/son-quint.webp',
    region: 'Son Vida',
    note: 'Friendly, close to Palma, and good for mixed groups.',
  },
  'T Golf Palma': {
    image: '/images/courses/t-golf-palma.webp',
    region: 'Palma',
    note: 'Useful for a lighter day without losing the golf feel.',
  },
  'Son Antem East or West': {
    image: '/images/courses/son-antem-east.webp',
    region: 'South',
    note: 'Good value and forgiving enough for mixed handicaps.',
  },
}

const BASE_DETAILS = {
  palma: {
    label: 'Palma / Son Vida',
    image: '/images/blog-trip-planning/Old Town Palma.webp',
    transfer: 'Airport 15-25 min. Most first drafts start here.',
  },
  southwest: {
    label: 'Southwest',
    image: '/images/t-golf-calvia-card.webp',
    transfer: 'Beach hotels, short resort transfers, easy golf days.',
  },
  north: {
    label: 'North / Alcudia',
    image: '/images/alcanada-card.webp',
    transfer: 'Best if Alcanada and quieter scenery are priorities.',
  },
  unsure: {
    label: 'Base flexible for now',
    image: '/images/son-gual-card.webp',
    transfer: 'Keep the base flexible until the course route is clear.',
  },
  other: {
    label: 'Custom base',
    image: '/images/golf-courses.webp',
    transfer: 'I will sanity-check whether the driving makes sense.',
  },
}

function getCourseMix(form) {
  if (form.base === 'north') {
    return ['Alcanada', 'Pula or Son Servera', 'Capdepera or Canyamel']
  }

  if (form.base === 'southwest') {
    return ['T Golf Calvia', 'Santa Ponsa 1', 'Golf de Andratx']
  }

  if (form.golf === 'serious' || form.budget === 'premium') {
    return ['Son Gual', 'Son Muntaner', 'Alcanada']
  }

  if (form.golf === 'relaxed' || form.group === 'family') {
    return ['Son Quint', 'T Golf Palma', 'Son Antem East or West']
  }

  return ['Son Gual', 'T Golf Calvia', 'Son Muntaner']
}

function getOptionLabel(key, value, freeText = {}) {
  if (value === 'other' && freeText[key]) return freeText[key]
  return OPTIONS[key]?.find((option) => option.value === value)?.label || value
}

function getPriorityLabels(form) {
  const labels = form.priorities.map((value) => PRIORITIES.find((priority) => priority.value === value)?.label || value)
  return labels.length ? labels : ['Not sure yet']
}

function getRoundCount(form) {
  const nights = Number(form.nights)
  if (form.golf === 'relaxed') return nights >= 5 ? 3 : 2
  if (form.golf === 'serious') return nights >= 5 ? 4 : 3
  if (Number.isFinite(nights) && nights >= 7) return 4
  return 3
}

function getTripSnapshot(form) {
  const rounds = getRoundCount(form)
  const base = BASE_DETAILS[form.base] || BASE_DETAILS.unsure
  const pace = form.priorities.includes('lowTravel')
    ? 'Low-transfer route'
    : form.golf === 'serious'
      ? 'Premium-course route'
      : 'Balanced holiday rhythm'

  return {
    rounds,
    base,
    pace,
    budget: form.budget === 'balanced' ? 'Balanced' : getOptionLabel('budget', form.budget, form.freeText),
  }
}

function getTripDays(form, courses) {
  const rounds = getRoundCount(form)
  const days = courses.slice(0, rounds).map((course, index) => ({
    label: `Day ${index + 1}`,
    title: course,
    detail: getDayRhythmDetail(form, course, index),
  }))

  if (form.priorities.includes('pwap') || form.priorities.includes('coaching')) {
    days.splice(Math.min(1, days.length), 0, {
      label: 'Hosted add-on',
      title: 'A day with Andy',
      detail: 'Course management, local decisions, and coaching folded into the round.',
    })
  }

  if (Number(form.nights) >= 5 || form.priorities.includes('restaurants')) {
    days.push({
      label: 'Breathing space',
      title: form.priorities.includes('restaurants') ? 'Long lunch or Palma evening' : 'Rest afternoon',
      detail: 'This is where the trip starts to feel planned, not crammed.',
    })
  }

  return days.slice(0, 5)
}

function getDayRhythmDetail(form, course, index) {
  if (index === 0) {
    if (course === 'Son Gual') return 'Start with the premium test while everyone is fresh, then let the rest of the trip breathe.'
    if (course === 'Alcanada') return 'Put the scenic anchor early so the north has a clear reason to be in the plan.'
    return 'Begin with a round that settles the group in without making day one feel like hard work.'
  }

  if (index === 1) {
    if (form.priorities.includes('lowTravel')) return 'Keep the second golf day logistically simple so the trip does not become a transfer exercise.'
    return 'Use the middle round to balance the trip: enough quality, less pressure, better rhythm.'
  }

  if (form.golf === 'serious') return 'Finish with a course that still feels worth the tee time after two strong golf days.'
  return 'End with a polished round that leaves room for lunch, travel, or a slower final evening.'
}

function getWatchouts(form, courses) {
  const watchouts = []

  if (form.base === 'north' && !courses.includes('Alcanada')) {
    watchouts.push('I would not base you in the north unless Alcanada or the quieter coast is genuinely part of the reason for the trip.')
  }

  if (form.base === 'north' && form.priorities.includes('lowTravel')) {
    watchouts.push('The north can be beautiful, but it is not the low-driving answer for every group. I would keep the course route tight.')
  }

  if (form.golf === 'serious' && form.budget === 'value') {
    watchouts.push('The best-course version and the value version of the trip are different. I would decide where the premium green fee is actually worth it.')
  }

  if (form.group === 'family' || form.group === 'corporate') {
    watchouts.push('Mixed groups need one forgiving day. Three hard courses in a row usually looks better online than it feels on the island.')
  }

  if (form.season === 'summer') {
    watchouts.push('In summer, tee time matters as much as course choice. I would avoid building the day around a late premium slot in the heat.')
  }

  if (form.priorities.includes('clubHire')) {
    watchouts.push('For club hire and transfers, I would sort the practical route early: course hire where it makes sense, trusted rental options, or the right contact before tee times tighten.')
  }

  if (!watchouts.length) {
    watchouts.push('Before booking, I would check the course order, tee-time rhythm, and travel time together. That is where most expensive mistakes happen.')
  }

  return watchouts.slice(0, 3)
}

function getBaseAdvice(form) {
  if (form.base === 'palma') return 'I would base you around Palma or Son Vida for easy dinners, airport access, and a strong first course mix.'
  if (form.base === 'southwest') return 'I would keep you in the southwest if beach hotels, short transfers, and T Golf / Santa Ponsa / Andratx are the pull.'
  if (form.base === 'north') return 'I would only base you in the north if Alcanada is a must-play and you want a quieter, more scenic trip.'
  if (form.priorities.includes('lowTravel')) return 'I would start near Palma or Son Vida until the course list proves you need a different base.'
  return 'I would choose the base after the course mix, not before. Palma is the safest first draft for most visiting golfers.'
}

function getRhythm(form) {
  const rounds = form.golf === 'relaxed' ? 'two or three rounds' : form.golf === 'serious' ? 'four strong rounds if the dates allow' : 'three good rounds with one lighter day'
  const rest = Number(form.nights) >= 5 ? 'I would protect one non-golf afternoon so the trip does not become a run of early starts.' : 'I would avoid overloading a short trip with too much driving.'
  return `For ${getOptionLabel('nights', form.nights, form.freeText)}, I would build around ${rounds}. ${rest}`
}

function getSeasonAdvice(form) {
  const advice = {
    spring: 'Spring is premium for conditions, so tee times and the best-value slots need sorting early.',
    summer: 'Summer can be excellent value if you are sensible with tee times, buggies, water, and recovery time.',
    autumn: 'Autumn is one of the best windows, but it is no longer a cheap secret. Book the key rounds early.',
    winter: 'Winter is usually the best value window, with good golf possible if you stay flexible on weather and wind.',
  }
  return advice[form.season]
}

function getAddOns(form) {
  const addOns = []
  if (form.priorities.includes('pwap') || form.priorities.includes('coaching') || form.golf === 'serious') {
    addOns.push('A day with me on course: proper course management, coaching woven into the round, and local knowledge that changes how you approach each hole. This is the most personal thing I offer.')
  }
  if (form.priorities.includes('clubHire')) {
    addOns.push('I can arrange club hire as part of the booking where it makes sense, or put you in touch with the right rental option before tee times become tight.')
  }
  if (form.priorities.includes('restaurants')) {
    addOns.push('I would plan one proper lunch rather than trying to make every golf day feel like a big event.')
  }
  if (!addOns.length) {
    addOns.push('Keep extras light at first: course choice, base, and tee-time rhythm matter more than adding things for the sake of it. Once the outline is right, the right extras become obvious.')
  }
  return addOns
}

function buildMessage(form, courses) {
  const snapshot = getTripSnapshot(form)
  return encodeURIComponent(
    `Hi Andy, I built a first draft itinerary on the site.\n\nTrip length: ${getOptionLabel('nights', form.nights, form.freeText)}\nGroup: ${getOptionLabel('group', form.group, form.freeText)}\nGolf appetite: ${getOptionLabel('golf', form.golf, form.freeText)}\nBase idea: ${getOptionLabel('base', form.base, form.freeText)}\nSeason: ${getOptionLabel('season', form.season, form.freeText)}\nBudget: ${snapshot.budget}\nDraft rounds: ${snapshot.rounds}\nCourses: ${courses.join(', ')}\nPriorities: ${getPriorityLabels(form).join(', ')}\n\nCan you sanity-check the plan and tell me what you would change before I book anything?`,
  )
}

export default function ItineraryPlanner() {
  const [form, setForm] = useState({
    nights: '4',
    group: 'friends',
    golf: 'balanced',
    base: 'unsure',
    season: 'autumn',
    budget: 'balanced',
    priorities: ['championship', 'lowTravel'],
    freeText: {},
  })

  const courses = useMemo(() => getCourseMix(form), [form])
  const addOns = useMemo(() => getAddOns(form), [form])
  const snapshot = useMemo(() => getTripSnapshot(form), [form])
  const tripDays = useMemo(() => getTripDays(form, courses), [form, courses])
  const watchouts = useMemo(() => getWatchouts(form, courses), [form, courses])
  const whatsappHref = `https://wa.me/34624466702?text=${buildMessage(form, courses)}`

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const updateFreeText = (key, value) => setForm((current) => ({ ...current, freeText: { ...current.freeText, [key]: value } }))
  const togglePriority = (value) => {
    setForm((current) => ({
      ...current,
      priorities: current.priorities.includes(value)
        ? current.priorities.filter((item) => item !== value)
        : [...current.priorities, value],
    }))
  }

  return (
    <section className="itinerary-page">
      <div className="itinerary-hero-media" aria-hidden="true">
        <Image
          src={snapshot.base.image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        />
        <div className="itinerary-hero-media__scrim" />
      </div>

      <div className="itinerary-page__intro">
        <p className="eyebrow">Mallorca golf itinerary planner</p>
        <h1 className="serif-display">Build a first draft of your Mallorca golf trip.</h1>
        <p>
          Answer a few quick questions and I&apos;ll show you where I&apos;d start: which courses,
          which base, what rhythm, and whether a day with me on course belongs in the plan.
          It&apos;s a first draft, not a commitment. Send it over and I&apos;ll tell you what I&apos;d change.
        </p>
        <div className="itinerary-proof" aria-label="Why this planner helps">
          <span>24 island courses</span>
          <span>PGA Advanced Professional</span>
          <span>Trip logic before you book</span>
        </div>
      </div>

      <div className="itinerary-tool">
        <div className="itinerary-controls" aria-label="Trip inputs">
          <div className="itinerary-control-grid">
            {Object.entries(OPTIONS).map(([key, options]) => (
              <label className="itinerary-field" key={key}>
                <span>{FIELD_LABELS[key] || key}</span>
                <select value={form[key]} onChange={(event) => update(key, event.target.value)}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {form[key] === 'other' && options.find((o) => o.value === 'other')?.freeText && (
                  <input
                    type="text"
                    className="itinerary-freetext"
                    placeholder="Tell me more..."
                    value={form.freeText[key] || ''}
                    onChange={(event) => updateFreeText(key, event.target.value)}
                  />
                )}
              </label>
            ))}
          </div>

          <div className="itinerary-priorities">
            <p className="itinerary-label">What matters most to you?</p>
            <div className="itinerary-chip-grid">
              {PRIORITIES.map((priority) => (
                <button
                  key={priority.value}
                  type="button"
                  className={`itinerary-chip${form.priorities.includes(priority.value) ? ' is-active' : ''}`}
                  onClick={() => togglePriority(priority.value)}
                >
                  {priority.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="itinerary-output" aria-live="polite">
          <div className="itinerary-snapshot">
            <div className="itinerary-snapshot__image">
              <Image
                src={snapshot.base.image}
                alt={snapshot.base.label}
                fill
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </div>
            <div className="itinerary-snapshot__content">
              <p className="eyebrow">Your trip shape</p>
              <h2 className="serif-display">{snapshot.base.label}</h2>
              <div className="itinerary-metrics" aria-label="Trip summary">
                <div>
                  <span>{snapshot.rounds}</span>
                  <p>draft rounds</p>
                </div>
                <div>
                  <span>{snapshot.pace}</span>
                  <p>route style</p>
                </div>
                <div>
                  <span>{snapshot.budget}</span>
                  <p>budget style</p>
                </div>
              </div>
              <p>{snapshot.base.transfer}</p>
            </div>
          </div>

          <div className="itinerary-output__header">
            <p className="eyebrow">First draft</p>
            <h2 className="serif-display">What I would start with</h2>
          </div>

          <div className="itinerary-result">
            <h3>Base</h3>
            <div className="itinerary-result__body">
              <p>{getBaseAdvice(form)}</p>
            </div>
          </div>

          <div className="itinerary-result">
            <h3>Course mix</h3>
            <div className="itinerary-result__body">
              <div className="itinerary-course-cards">
                {courses.map((course) => {
                  const detail = COURSE_DETAILS[course]
                  return (
                    <article className="itinerary-course-card" key={course}>
                      <div className="itinerary-course-card__image">
                        {detail?.image ? (
                          <Image
                            src={detail.image}
                            alt={course}
                            fill
                            sizes="(max-width: 640px) 100vw, 180px"
                            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                          />
                        ) : null}
                      </div>
                      <div>
                        <p>{detail?.region || 'Mallorca'}</p>
                        <h4>{course}</h4>
                        <span>{detail?.note || 'A course I would consider for this draft.'}</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="itinerary-result">
            <h3>Trip rhythm</h3>
            <div className="itinerary-result__body">
              <p>{getRhythm(form)}</p>
              <p>{getSeasonAdvice(form)}</p>
              <div className="itinerary-day-plan">
                {tripDays.map((day) => (
                  <div className="itinerary-day" key={`${day.label}-${day.title}`}>
                    <span>{day.label}</span>
                    <h4>{day.title}</h4>
                    <p>{day.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="itinerary-result itinerary-result--watchouts">
            <h3>Before booking</h3>
            <div className="itinerary-result__body">
              <ul className="itinerary-watchouts">
                {watchouts.map((watchout) => (
                  <li key={watchout}>{watchout}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="itinerary-result">
            <h3>Add-ons</h3>
            <div className="itinerary-result__body">
              <ul className="itinerary-addons">
                {addOns.map((addOn) => (
                  <li key={addOn}>{addOn}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="itinerary-next">
            <p>
              If this feels close, send me the draft. I will tell you what I would change before you spend
              money on green fees, hotels, transfers, or a hosted day.
            </p>
            <div className="itinerary-actions">
              <a href={whatsappHref} className="btn btn--gold" target="_blank" rel="noopener noreferrer">Send draft</a>
              <a href="/contact" className="btn btn--dark">Use enquiry form</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
