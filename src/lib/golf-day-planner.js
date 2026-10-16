import { scoreAllCourses, ADDONS, whyCourseChosen } from './golf-day-builder-logic.js'
import { getCanonicalCourseDataByName } from './course-catalog.js'
import { getCourseShortName } from './golf-courses-helpers.js'
import { localizeCourse, getAddons, planText, fmt, applyPhrases } from './golf-day-builder-localize.js'

export function buildItineraries(answers, data = null) {
  const best = scoreAllCourses(answers)[0]
  if (!best) return []
  const course = localizeCourse(best.c, data)
  const canonical = getCanonicalCourseDataByName(course.name)
  const P = planText(data)
  const short = canonical.holeCount === 9
  const pm = answers.start === 'pm'
  const addons = getAddons(ADDONS, data)
  const chosen = [...new Set(answers.addons || [])].slice(0, 2)
  const extras = chosen.filter(k => !['coaching','lunch'].includes(k))
  const name = applyPhrases(getCourseShortName(course.name), data?.phrases)
  const departure = { time: P.time.beforeRound, title: P.title.depart, desc: answers.transport === 'yes' ? P.desc.transfer : P.desc.selfDrive }
  const warmup = { time: P.time.onArrival, title: P.title.warmupCoffee, desc: P.desc.warmupCoffee }
  const round = { time: P.time[answers.start === 'early' ? 'earlyStart' : pm ? 'pmStart' : 'midStart'], title: fmt(short ? P.title.holes9 : P.title.holes18, {course:name}), desc: (short ? P.desc.round9 : P.desc.round18) + (chosen.includes('coaching') ? ' ' + P.desc.pwap : '') }
  const meal = { time: pm ? P.time.beforeRound : P.time.afterRound, title: P.title.lunchBooked, desc: P.desc.lunchBooked }
  const finish = { time: P.time.afterActivities, title: P.title.return, desc: P.desc.returnEfficient }
  const extraSteps = extras.map(key => ({ time: pm ? P.time.beforeRound : P.time.afterRound, title:addons[key].title, desc:addons[key].desc }))
  const why = whyCourseChosen(course, answers, P.whyCourse)
  function plan(key, steps) { return { key, name:P.names[key], tagline:P.taglines[key], course, steps, why, note: short ? P.desc.shortNote : pm ? P.desc.pmNote : P.desc.accessNote } }
  const options = [
    plan('efficient', [departure,warmup,round,{time:P.time.afterRound,title:P.title.return,desc:P.desc.returnEfficient}]),
    plan('lunch', pm ? [departure,meal,warmup,round,finish] : [departure,warmup,round,meal,finish]),
  ]
  // Short-course plans stay shorter than a full golf day.
  if (!short && extras.length) options.push(plan('experience', pm ? [departure,...extraSteps,meal,warmup,round,finish] : [departure,warmup,round,meal,...extraSteps,finish]))
  return options
}
