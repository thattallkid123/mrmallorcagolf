// Applies a language overlay from src/lib/tool-data/golf-day-builder.<lang>.js onto
// the English data in golf-day-builder-logic.js and the plan templates below.
// Course scoring and ranking always run on the English data; only what the visitor
// reads is swapped. With no overlay (English) every function returns the English.

// English plan text. {braces} are filled by fmt(). Keep these in step with the
// keys every overlay must supply (scripts/check-tool-data-localized.mjs checks it).
export const EN_PLAN = {
  "names": {
    "efficient": "Efficient golf day",
    "lunch": "Golf & long lunch",
    "experience": "Full experience"
  },
  "taglines": {
    "efficient": "Golf with time to check in, play and return.",
    "lunch": "Golf and a suggested lunch stop near the course.",
    "experience": "Golf and the extra activities you selected."
  },
  "time": {
    "depart": "{depart} (estimate)",
    "onArrival": "On arrival",
    "beforeRound": "Before the round",
    "teeWindow": "Tee time window {tee} (estimate)",
    "afterRound": "After the round",
    "earlyAfternoon": "Early afternoon",
    "lateAfternoon": "Late afternoon",
    "lunch": "Lunch",
    "afternoon": "Afternoon",
    "evening": "Evening",
    "earlyStart": "Morning golf",
    "midStart": "Mid-morning golf",
    "pmStart": "Afternoon golf",
    "afterActivities": "After the activities"
  },
  "title": {
    "depart": "Depart your accommodation",
    "unhurried": "An unhurried departure",
    "clubhouse": "A drink at the clubhouse",
    "return": "Return",
    "longLunch": "Suggested lunch",
    "relaxedReturn": "A relaxed return",
    "lunchBooked": "Suggested lunch",
    "beachOrVillage": "Beach or village hour",
    "lastLight": "Return in the last of the light",
    "warmupCoach": "Coaching warm-up with me",
    "warmupCoffee": "Warm-up and coffee",
    "holes18": "18 holes at {course}",
    "holes9": "9 holes at {course}"
  },
  "desc": {
    "transfer": "A local travel partner can arrange and invoice the transfer once the route and timings are agreed.",
    "selfDrive": "Confirm the hotel and route before choosing a departure time.",
    "warmupCoach": "A warm-up or coaching session with me, subject to the date and course facilities.",
    "warmupCoffee": "Time to check in, warm up and prepare for the round. Facilities depend on the course.",
    "holeNote": " Note: {note}",
    "clubhouse": "A relaxed drink on the terrace while the scorecards are disputed.",
    "returnEfficient": "Return to your accommodation after the activities. The route and travel time depend on your hotel.",
    "longLunch": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "relaxedReturn": "Return to your accommodation after the activities. The route and travel time depend on your hotel.",
    "lunchBooked": "A table near the course, chosen around your tee time. A local travel partner checks opening hours, availability and travel before booking.",
    "beachOrVillage": "An optional stop near the course. Venue, opening hours and travel time are checked when the plan is agreed.",
    "lastLight": "Return to your accommodation after the activities. The route and travel time depend on your hotel.",
    "round18": "Allow roughly 4–5 hours for 18 holes, plus check-in and warm-up. Pace and daylight need checking for your date.",
    "round9": "Allow roughly 1½–2 hours for 9 holes, plus check-in and warm-up.",
    "shortNote": "This is a short golf session. A full golf day needs a suitable longer course and confirmed access.",
    "pmNote": "Afternoon golf leaves limited time afterwards. Extra activities and lunch come before the round; I check daylight before confirming a tee time.",
    "accessNote": "Course-specific handicap limits, availability and the route are checked before booking."
  },
  "why": {
    "efficient": "{course}",
    "lunch": "{course}",
    "experienceAddons": "{course}",
    "experiencePlain": "{course}"
  },
  "whyCourse": {
    "courseType": {
      "famous": "it is one of the island's best-known courses",
      "scenic": "it has the views you asked for",
      "challenging": "it offers a more demanding round",
      "forgiving": "the layout is wide and forgiving",
      "close": "it is in the area you selected"
    },
    "dayStyle": {
      "serious": "it delivers a serious round",
      "relaxed": "the pace and layout suit a relaxed day",
      "luxury": "it offers a premium club experience",
      "family": "it suits the golf level you selected",
      "scenic": "the setting is the highlight",
      "food": "it suits the golf level you selected"
    },
    "matched": "it suits the golf level you selected",
    "fallback": "The best available match for your answers in this area.",
    "separator": ", ",
    "end": ".",
    "capitalise": true
  },
  "handles": {
    "tee": "I confirm and book the golf",
    "table": "Restaurants booked and invoiced by a local travel partner",
    "transportYes": "Transfers booked and invoiced by a local travel partner",
    "transportNo": "Route checked with your hotel address",
    "buggies": "Club and buggy hire checked with the course",
    "coachingYes": "Coaching with me, subject to availability",
    "coachingNo": "Coaching with me, subject to availability",
    "whatsapp": "Contact me to agree the golf plan"
  }
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
