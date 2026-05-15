'use client'

import { useMemo, useState } from 'react'

const OPTIONS = {
  nights: [
    { value: '3', label: '3 nights' },
    { value: '4', label: '4 nights' },
    { value: '5', label: '5 nights' },
    { value: '7', label: '7 nights' },
  ],
  group: [
    { value: 'solo', label: 'Solo / pair' },
    { value: 'friends', label: 'Friends trip' },
    { value: 'family', label: 'Family / mixed' },
    { value: 'corporate', label: 'Corporate' },
  ],
  golf: [
    { value: 'relaxed', label: '2-3 relaxed rounds' },
    { value: 'balanced', label: '3-4 strong rounds' },
    { value: 'serious', label: 'Play the best available' },
  ],
  base: [
    { value: 'palma', label: 'Palma / Son Vida' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'north', label: 'North / Alcudia' },
    { value: 'unsure', label: 'Not sure yet' },
  ],
  season: [
    { value: 'spring', label: 'Mar-May' },
    { value: 'summer', label: 'Jun-Aug' },
    { value: 'autumn', label: 'Sep-Nov' },
    { value: 'winter', label: 'Dec-Feb' },
  ],
  budget: [
    { value: 'value', label: 'Value-aware' },
    { value: 'balanced', label: 'Balanced' },
    { value: 'premium', label: 'Premium' },
  ],
}

const PRIORITIES = [
  { value: 'championship', label: 'Championship courses' },
  { value: 'scenery', label: 'Sea views / scenery' },
  { value: 'lowTravel', label: 'Lower travel time' },
  { value: 'restaurants', label: 'Good lunch / restaurants' },
  { value: 'pwap', label: 'Play With A Pro add-on' },
  { value: 'clubHire', label: 'Club hire / transfers' },
]

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
  return `For ${form.nights} nights, I would build around ${rounds}. ${rest}`
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
  if (form.priorities.includes('pwap') || form.golf === 'serious') {
    addOns.push('I would consider one Play With A Pro day on the course where local judgment will change the score most.')
  }
  if (form.priorities.includes('clubHire')) {
    addOns.push('I would sort club hire and transfers before tee times become tight, especially for a group.')
  }
  if (form.priorities.includes('restaurants')) {
    addOns.push('I would plan one proper lunch rather than trying to make every golf day feel like a big event.')
  }
  if (!addOns.length) {
    addOns.push('I would keep extras light at first: course choice, base, and tee-time rhythm matter more than adding things for the sake of it.')
  }
  return addOns
}

function buildMessage(form, courses) {
  return encodeURIComponent(
    `Hi Andy, I built a first draft itinerary on the site.\n\nNights: ${form.nights}\nGroup: ${form.group}\nGolf appetite: ${form.golf}\nBase idea: ${form.base}\nSeason: ${form.season}\nBudget: ${form.budget}\nCourses: ${courses.join(', ')}\nPriorities: ${form.priorities.join(', ') || 'not sure yet'}\n\nCan you sanity-check the plan?`,
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
  })

  const courses = useMemo(() => getCourseMix(form), [form])
  const addOns = useMemo(() => getAddOns(form), [form])
  const whatsappHref = `https://wa.me/34624466702?text=${buildMessage(form, courses)}`

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
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
      <div className="itinerary-page__intro">
        <p className="eyebrow">Mallorca golf itinerary planner</p>
        <h1 className="serif-display">Build a first draft of your trip.</h1>
        <p>
          This is the public version of how I start planning: dates, group, course appetite, base, budget,
          and the extras that might genuinely improve the trip. It will not replace a proper sanity-check,
          but it gives us a much better place to begin.
        </p>
      </div>

      <div className="itinerary-tool">
        <div className="itinerary-controls" aria-label="Trip inputs">
          <div className="itinerary-control-grid">
            {Object.entries(OPTIONS).map(([key, options]) => (
              <label className="itinerary-field" key={key}>
                <span>{key === 'nights' ? 'Trip length' : key}</span>
                <select value={form[key]} onChange={(event) => update(key, event.target.value)}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="itinerary-priorities">
            <p className="itinerary-label">Priorities</p>
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
              <ol className="itinerary-course-list">
                {courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="itinerary-result">
            <h3>Rhythm</h3>
            <div className="itinerary-result__body">
              <p>{getRhythm(form)}</p>
              <p>{getSeasonAdvice(form)}</p>
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
