// Applies a language overlay from src/lib/tool-data/course-selector.<lang>.js
// onto the English course data used by the Course Selector. Scoring always runs
// on the English data; only what the visitor reads is swapped.
//
// The fee and access strings come from shared helpers (course-pricing-data.js is
// generated, course-access-data.js is shared) that produce English text, so they
// are translated here from their known English forms rather than edited at the
// source. An unknown form is left as English instead of being guessed.

function applyPhrases(text, phrases) {
  if (!text || !phrases) return text
  return Object.entries(phrases).reduce((t, [en, tr]) => t.replace(en, tr), text)
}

function localizeFee(fee, L) {
  if (!fee || !L) return fee
  if (fee === 'Included for hotel guests · Not available to the public') return L.hotelOnly
  if (fee === 'Pricing on request' || fee === 'Price on request') return L.onRequest
  return fee
    .replace(/^Peak /, `${L.peak} `)
    .replace(/ \/ Low /, ` / ${L.low} `)
    .replace('9 holes', L.nineHoles)
    .replace('dynamic', L.dynamic)
}

function localizeAccessRequirement(text, A) {
  if (!text || !A) return text
  if (text === 'No handicap required') return A.noHandicap
  if (text === 'Handicap required') return A.handicapRequired
  if (text === 'Unknown') return A.unknown
  return text.replace(/ \+ certificate$/, A.certificate)
}

function localizeAccessType(text, A) {
  if (!text || !A) return text
  if (text === 'Public access') return A.public
  if (text === 'Members only · guests must play with a member') return A.members
  if (text === 'Hotel guests only') return A.hotelGuests
  return text
}

export function localizeCourse(course, data) {
  const copy = data?.courses?.[course.id]
  if (!copy) return course
  const L = data.labels
  return {
    ...course,
    ...copy,
    greenFee: localizeFee(course.greenFee, L.fee),
    accessRequirement: localizeAccessRequirement(course.accessRequirement, L.access),
    accessType: localizeAccessType(course.accessType, L.access),
    designer: applyPhrases(course.designer, data.phrases),
  }
}
