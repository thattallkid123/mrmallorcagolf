'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import EmailSignup from '../../../components/EmailSignup'
import { formatCourseFeeLabel, getCoursePricingByName } from '../../../lib/course-pricing-data'
import { COURSE_SELECTOR_MAILERLITE_ACTION } from '../../../lib/signup-config'

const QUESTIONS = [
  {
    id: 'handicap',
    label: "What's your handicap?",
    options: [
      { value: 'beginner', label: 'Beginner or high handicap' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced or low handicap' },
    ],
  },
  {
    id: 'priority',
    label: 'What matters most?',
    options: [
      { value: 'difficulty', label: 'A proper test' },
      { value: 'scenery', label: 'Scenery and setting' },
      { value: 'value', label: 'Value' },
      { value: 'walkability', label: 'Walkability' },
    ],
  },
  {
    id: 'length',
    label: 'Trip length?',
    options: [
      { value: 'one', label: 'One round' },
      { value: 'weekend', label: 'Weekend' },
      { value: 'week', label: 'Full week' },
    ],
  },
  {
    id: 'budget',
    label: 'Budget preference?',
    options: [
      { value: 'low', label: '€50-150' },
      { value: 'mid', label: '€150-250' },
      { value: 'premium', label: '€250+' },
    ],
  },
  {
    id: 'season',
    label: 'When are you visiting?',
    options: [
      { value: 'peak', label: 'Peak season' },
      { value: 'value', label: 'Value window' },
      { value: 'not-sure', label: 'Not sure yet' },
    ],
  },
]

const COURSES = [
  {
    name: 'Golf Son Gual',
    location: 'Palma',
    fees: 'Peak €165 / Low €115',
    href: '/guides/son-gual-review',
    bestFor: ['advanced', 'difficulty', 'premium', 'one', 'week'],
    take: 'The serious anchor course. Fast raised greens, a strong closing stretch, and enough wind variation to make course management matter.',
  },
  {
    name: 'Club de Golf Alcanada',
    location: "Port d'Alcudia",
    fees: 'Peak €230 / Low €115',
    href: '/guides/alcanada-review',
    bestFor: ['advanced', 'intermediate', 'scenery', 'premium', 'one', 'week'],
    take: 'The scenic anchor course. The lighthouse is visible for most of the round, but the bunkering and greens still need proper attention.',
  },
  {
    name: 'T Golf Calvia',
    location: 'Calvia',
    fees: 'Peak €210 / Low €80 (dynamic)',
    href: '/guides/t-golf-calvia-review',
    bestFor: ['intermediate', 'advanced', 'scenery', 'premium', 'weekend'],
    take: 'A polished southwest option with strong conditioning, wide driving lines, and enough water to keep the round honest.',
  },
  {
    name: 'Son Muntaner',
    location: 'Son Vida, Palma',
    fees: 'Peak €260 / Low €99 (dynamic)',
    href: '/guides/son-muntaner-review',
    bestFor: ['intermediate', 'advanced', 'premium', 'scenery', 'weekend'],
    take: 'Top-end Palma golf with excellent conditioning and a strong setting. Good when you want a premium round close to the city.',
  },
  {
    name: 'Golf de Andratx',
    location: 'Camp de Mar',
    fees: 'Peak €140 / Low €115 (dynamic)',
    href: '/guides/golf-andratx-review',
    bestFor: ['advanced', 'difficulty', 'weekend'],
    take: 'The hardest recommendation on the list. Bring extra balls and no ego, especially if this is your first Mallorca round.',
  },
  {
    name: 'Golf Son Termes',
    location: 'Bunyola',
    fees: 'Peak €110 / Low €90',
    href: '/guides/son-termes-review',
    bestFor: ['intermediate', 'scenery', 'value', 'week'],
    take: 'Shorter and more rugged, with Tramuntana mountain context on every hole. Buggy recommended, but the setting does a lot of work.',
  },
  {
    name: 'Golf Son Quint',
    location: 'Son Vida, Palma',
    fees: 'Peak €172 / Low €76 (dynamic)',
    href: '/golf-courses',
    bestFor: ['beginner', 'walkability', 'value', 'one'],
    take: 'One of the more approachable full courses near Palma. A sensible first round for newer golfers or mixed-ability groups.',
  },
  {
    name: 'Golf Pollensa',
    location: 'Pollensa',
    fees: 'Peak €75 / Low €65 (9 holes)',
    href: '/golf-courses',
    bestFor: ['beginner', 'value', 'walkability', 'one'],
    take: 'Nine holes, lighter commitment, and good value. Useful when you want golf without building the whole day around it.',
  },
]

const SELECTOR_COURSES = COURSES.map((course) => {
  const pricing = getCoursePricingByName(course.name)
  return {
    ...course,
    fees: pricing ? formatCourseFeeLabel(course.name, { pricing, fallback: course.fees }) : course.fees,
  }
})

const INITIAL_ANSWERS = QUESTIONS.reduce((acc, question) => {
  acc[question.id] = question.options[0].value
  return acc
}, {})

function scoreCourse(course, answers) {
  return Object.values(answers).reduce((score, value) => (
    course.bestFor.includes(value) ? score + 1 : score
  ), 0)
}

function getRecommendations(answers) {
  return SELECTOR_COURSES
    .map((course) => ({ ...course, score: scoreCourse(course, answers) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, 5)
}

function getAnswerSummary(answers) {
  return QUESTIONS.map((question) => {
    const option = question.options.find((item) => item.value === answers[question.id])
    return `${question.label} ${option?.label || ''}`.trim()
  }).join(' | ')
}

function getShortlistSummary(recommendations) {
  return recommendations
    .map((course, index) => `${index + 1}. ${course.name} - ${course.location} - ${course.fees}`)
    .join(' | ')
}

function getShortlistNames(recommendations) {
  return recommendations.map((course) => course.name).join(', ')
}

export default function CourseSelectorClient() {
  const [answers, setAnswers] = useState(INITIAL_ANSWERS)
  const [showResults, setShowResults] = useState(false)
  const recommendations = useMemo(() => getRecommendations(answers), [answers])
  const selectorAnswerSummary = useMemo(() => getAnswerSummary(answers), [answers])
  const shortlistSummary = useMemo(() => getShortlistSummary(recommendations), [recommendations])
  const shortlistNames = useMemo(() => getShortlistNames(recommendations), [recommendations])

  return (
    <main className="course-selector">
      <section className="course-selector__hero">
        <p className="course-selector__eyebrow">Free course selector</p>
        <h1>Which Mallorca course is right for you?</h1>
        <p>
          Answer five quick questions and get a first shortlist. It is not a replacement for a proper trip plan, but it will help you avoid choosing courses by name alone.
        </p>
      </section>

      <section className="course-selector__body">
        <div className="course-selector__panel">
          <div className="course-selector__questions">
            {QUESTIONS.map((question, index) => (
              <fieldset key={question.id} className="course-selector__question">
                <legend>
                  <span>0{index + 1}</span>
                  {question.label}
                </legend>
                <div className="course-selector__options">
                  {question.options.map((option) => (
                    <label key={option.value} className={answers[question.id] === option.value ? 'is-selected' : ''}>
                      <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={answers[question.id] === option.value}
                        onChange={() => setAnswers((current) => ({ ...current, [question.id]: option.value }))}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <button className="course-selector__submit" type="button" onClick={() => setShowResults(true)}>
            Get my recommendations
          </button>
        </div>

        <aside className="course-selector__result-panel">
          <p className="course-selector__eyebrow">Your shortlist</p>
          {showResults ? (
            <>
              <div className="course-selector__results">
                {recommendations.map((course, index) => (
                  <article key={course.name} className="course-selector__result">
                    <span>{index + 1}</span>
                    <div>
                      <h2>{course.name}</h2>
                      <p className="course-selector__meta">{course.location} · {course.fees}</p>
                      <p>{course.take}</p>
                      <Link href={course.href}>Read more</Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="course-selector__email">
                <h2>Want the follow-up notes by email?</h2>
                <p>
                  You can use the page without signing up. Add your email if you want the follow-up notes on
                  timing, course fit, and how to build the trip properly after using the selector.
                </p>
                <EmailSignup
                  placeholder="Email address"
                  buttonLabel="Send notes"
                  successMessage="Done. Check your inbox. I'll send the notes by email."
                  title="Send Mallorca course selector results"
                  mailerliteFormAction={COURSE_SELECTOR_MAILERLITE_ACTION}
                  extraFields={{
                    selector_answers: selectorAnswerSummary,
                    selector_shortlist: shortlistSummary,
                    selector_shortlist_names: shortlistNames,
                  }}
                />
                <p className="course-selector__fineprint">
                  Free. Useful before you book. Unsubscribe any time.
                </p>
              </div>
            </>
          ) : (
            <p className="course-selector__empty">
              Complete the five questions, then press the button to see a first set of recommendations.
            </p>
          )}
        </aside>
      </section>
    </main>
  )
}
