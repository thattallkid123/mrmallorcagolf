// Applies a language overlay from src/lib/tool-data/golf-day-builder.<lang>.js onto
// the English data in golf-day-builder-logic.js and the plan templates below.
// Course scoring and ranking always run on the English data; only what the visitor
// reads is swapped. With no overlay (English) every function returns the English.

// English plan text. {braces} are filled by fmt(). Keep these in step with the
// keys every overlay must supply (scripts/check-tool-data-localized.mjs checks it).
export const EN_PLAN = {
  names: { efficient: 'Efficient golf day', lunch: 'Golf & long lunch', experience: 'Full experience' },
  taglines: {
    efficient: 'The round is the day. Played well, back with the afternoon free.',
    lunch: 'A serious round followed by a serious table.',
    experience: 'The golf is the centrepiece. The island fills the rest of the schedule.',
  },
  time: {
    depart: '{depart} (estimate)',
    onArrival: 'On arrival',
    beforeRound: 'Before the round',
    teeWindow: 'Tee time window {tee} (estimate)',
    afterRound: 'After the round',
    earlyAfternoon: 'Early afternoon',
    lateAfternoon: 'Late afternoon',
    lunch: 'Lunch',
    afternoon: 'Afternoon',
    evening: 'Evening',
  },
  title: {
    depart: 'Depart your accommodation',
    unhurried: 'An unhurried departure',
    clubhouse: 'A drink at the clubhouse',
    return: 'Return',
    longLunch: 'A long Mallorcan lunch',
    relaxedReturn: 'A relaxed return',
    lunchBooked: 'Lunch, booked and timed',
    beachOrVillage: 'Beach or village hour',
    lastLight: 'Return in the last of the light',
    warmupCoach: 'Coaching warm-up with me',
    warmupCoffee: 'Warm-up and coffee',
    holes18: '18 holes at {course}',
    holes9: '9 holes at {course}',
  },
  desc: {
    transfer: 'A private transfer collects you from your accommodation. Around {drive} minutes to the course (estimate).',
    selfDrive: 'Self-drive to the course, around {drive} minutes (estimate). Parking notes come with the confirmed plan.',
    warmupCoach: 'A 45-minute session with me: range warm-up, short game, and a plan for the holes ahead.',
    warmupCoffee: 'Range balls, the putting green, and a coffee on the terrace. Arrive 45 minutes before your tee time.',
    holeNote: ' Note: {note}',
    clubhouse: 'A relaxed drink on the terrace while the scorecards are disputed.',
    returnEfficient: 'Back at your base with the rest of the day untouched. Around {drive} minutes (estimate).',
    longLunch: '{lunch}. The table is booked and timed so you walk off the last hole and sit straight down.',
    relaxedReturn: 'A slow drive back, around {drive} minutes (estimate).',
    lunchBooked: '{lunch}. I book the right table for your group.',
    beachOrVillage: 'A nearby cove or a historic town, chosen by region when the plan is confirmed.',
    lastLight: 'Back to your base, around {drive} minutes (estimate), with a full Mallorca day behind you.',
  },
  why: {
    efficient: 'The golf comes first and the timings stay tight. {course} Nothing in the schedule you did not ask for.',
    lunch: 'Good golf and good food are the two things this island does most reliably. {course} This day gives proper time to both.',
    experienceAddons: '{course} The add-ons you chose deserve real time in the schedule, so this plan builds the full day around them.',
    experiencePlain: '{course} This plan adds the island around the round without crowding it.',
  },
  whyCourse: {
    courseType: {
      famous: "it is one of the island's best-known courses",
      scenic: 'it has the views you asked for',
      challenging: 'it is the most demanding course within reach of your base',
      forgiving: 'the layout is wide and forgiving',
      close: 'it is the closest quality course to where you are staying',
    },
    dayStyle: {
      serious: 'it delivers a serious round',
      relaxed: 'the pace and layout suit a relaxed day',
      luxury: 'it is the premium option in your area',
      family: 'it works for all abilities in the group',
      scenic: 'the setting is the highlight',
      food: 'it sits close to the best restaurant options in the area',
    },
    matched: 'it is well-matched to your game',
    fallback: 'The best available match for your answers in this area.',
    separator: ', ',
    end: '.',
    capitalise: true,
  },
  handles: {
    tee: 'Tee time secured at the right rate',
    table: 'Restaurant table booked and timed around your round',
    transportYes: 'Door-to-door transport arranged',
    transportNo: 'Route and parking guidance for your drive',
    buggies: 'Buggies, clubs, and rentals organised if needed',
    coachingYes: 'Your coaching session with me confirmed',
    coachingNo: 'Optional warm-up or on-course coaching with me',
    whatsapp: 'One WhatsApp contact for the whole day',
  },
}

export function fmt(template, vars = {}) {
  return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] === undefined ? `{${k}}` : vars[k]))
}

export function planText(data) {
  return data?.plan || EN_PLAN
}

export function localizeQuestions(questions, data) {
  const copy = data?.questions
  if (!copy) return questions
  const total = questions.length
  return questions.map((q, i) => {
    const c = copy[q.key]
    if (!c) return q
    return {
      ...q,
      label: fmt(data.stepFmt, { n: i + 1, total, section: data.sections[q.key] }),
      title: c.title,
      sub: c.sub,
      opts: q.opts.map((o) => ({ ...o, ...(c.opts[o.v] ? { t: c.opts[o.v][0], d: c.opts[o.v][1] } : {}) })),
    }
  })
}

export function localizeCourse(course, data) {
  const c = data?.courses?.[course.id]
  if (!c) return course
  // isNine: the English note is how the builder recognises a nine-hole course, so keep that fact
  // before the note is replaced by its translation.
  return { ...course, blurb: c.blurb, facts: c.facts, isNine: /9 holes/.test(course.note || ''), ...(c.note ? { note: c.note } : {}) }
}

export function getRestaurants(restaurants, data) {
  return data?.restaurants || restaurants
}

export function getAddons(addons, data) {
  const copy = data?.addons
  if (!copy) return addons
  return Object.fromEntries(Object.entries(addons).map(([k, v]) => [k, copy[k] ? { title: copy[k][0], desc: copy[k][1] } : v]))
}

export function applyPhrases(text, phrases) {
  if (!text || !phrases) return text
  return Object.entries(phrases).reduce((t, [en, tr]) => t.replace(en, tr), text)
}

export function localizeFact(text, F, phrases) {
  if (!F) return text
  text = applyPhrases(text, phrases)
  if (text === 'Hotel guests only') return F.hotelOnly
  if (text === 'No handicap required') return F.noHandicap
  if (text === 'Handicap required') return F.handicapRequired
  const par = text.match(/^Par (\d+)(?: · 9 holes)?$/)
  if (par) return `${F.par} ${par[1]}${text.endsWith('· 9 holes') ? ` · ${F.nineHoles}` : ''}`
  return text.replace(/ \+ certificate$/, F.certificate)
}

export function builtLine(answers, data, English) {
  if (!data) return English
  return fmt(data.built.line, { group: data.built.groups[answers.group], region: data.built.regions[answers.region] })
}
