import { scoreAllCourses, ADDONS, whyCourseChosen, QUESTIONS } from './golf-day-builder-logic.js'
import { getCanonicalCourseDataByName } from './course-catalog.js'
import { getCourseShortName } from './golf-courses-helpers.js'
import { localizeCourse, localizeQuestions, getAddons, planText, fmt, applyPhrases } from './golf-day-builder-localize.js'

import { LUNCH_VENUES } from './golf-day-lunch-venues.js'


export function buildItineraries(answers, data = null) {
  const matches = scoreAllCourses(answers)
  const best = matches[0]
  if (!best) return []
  // Keep the alternative in the same area and within the leading eligible
  // matches. Dining never overrides the existing course-access checks.
  const lunchMatch = answers.group === 'vip' ? best : matches.slice(0, 3).find(match => match.c.id !== best.c.id && match.c.region === best.c.region && LUNCH_VENUES[match.c.id]) || best
  const P = planText(data)
  const pm = answers.start === 'pm'
  const addons = getAddons(ADDONS, data)
  const chosen = [...new Set(answers.addons || [])].slice(0, 2)
  const extras = chosen.filter(key => !['coaching','lunch'].includes(key))
  function plan(key, match) {
    const course = localizeCourse(match.c, data)
    const short = getCanonicalCourseDataByName(course.name).holeCount === 9
    const name = applyPhrases(getCourseShortName(course.name), data?.phrases)
    const venue = LUNCH_VENUES[course.id]
    const departure = { kind: 'arrival', time:P.time.beforeRound, title:P.title.depart, desc:answers.transport === 'yes' ? P.desc.transfer : P.desc.selfDrive }
    const warmup = { kind: 'arrival', time:P.time.onArrival, title:P.title.warmupCoffee, desc:P.desc.warmupCoffee }
    const round = { time:P.time[answers.start === 'early' ? 'earlyStart' : pm ? 'pmStart' : 'midStart'], title:fmt(short ? P.title.holes9 : P.title.holes18,{course:name}), desc:(short ? P.desc.round9 : P.desc.round18) + (chosen.includes('coaching') ? ' ' + P.desc.pwap : '') }
    const meal = { time:pm ? P.time.beforeRound : P.time.afterRound, title:venue ? fmt(P.title.lunchAt,{venue:venue.name}) : P.title.lunchBooked, desc:venue ? fmt(P.desc.namedLunch,{venue:venue.name}) : P.desc.lunchBooked }
    const finish = { time:P.time.afterActivities, title:P.title.return, desc:pm ? P.desc.returnGolfOnly : key === 'experience' ? P.desc.returnAfterStop : P.desc.returnAfterLunch }
    const extraSteps = extras.filter(extra => addons[extra]).map(extra => ({time:pm ? P.time.beforeRound : P.time.afterRound,title:addons[extra].title,desc:addons[extra].desc}))
    const steps = key === 'efficient'
      ? [departure,warmup,round,{time:P.time.afterRound,title:P.title.return,desc:P.desc.returnGolfOnly}]
      : pm ? [departure,...(key === 'experience' ? extraSteps : []),meal,warmup,round,finish]
        : [departure,warmup,round,meal,...(key === 'experience' ? extraSteps : []),finish]
    return { key, name:P.names[key], tagline:key === 'lunch' && !venue ? P.desc.lunchBooked : fmt(P.taglines[key],{venue:venue?.name}), course, steps, why:whyCourseChosen(course,answers,P.whyCourse), note:short ? P.desc.shortNote : pm ? P.desc.pmNote : P.desc.accessNote }
  }
  const options = [plan('efficient',best),plan('lunch',lunchMatch)]
  if (getCanonicalCourseDataByName(lunchMatch.c.name).holeCount !== 9 && extras.length) options.push(plan('experience',lunchMatch))
  return options
}

export function buildDayEnquiryBrief(answers, plan, data = null) {
  const selections = localizeQuestions(QUESTIONS, data).map(question => {
    const values = Array.isArray(answers[question.key]) ? answers[question.key] : [answers[question.key]]
    const labels = question.opts.filter(option => values.includes(option.v)).map(option => option.t)
    return labels.length ? question.title + ': ' + labels.join(', ') : ''
  }).filter(Boolean)
  return [plan?.name, plan?.course?.name, ...selections, plan?.steps.map(step => step.title).join(' → ')].filter(Boolean).join('\n')
}
