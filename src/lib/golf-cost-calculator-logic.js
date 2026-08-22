/* =====================================================================
   COST DATA. Real 2026 Mallorca pricing ranges (EUR).
   Source: MMG_COURSE_PRICING_MASTER (May 2026) + market research.
   [lo, hi] = low season to peak season per unit.
===================================================================== */
export const COSTS = {
  greenFees: {
    value:    [55, 85],
    balanced: [74, 126],
    premium:  [80, 165],
    luxury:   [96, 220],
  },
  buggyPerRound:    [30, 42],
  clubHirePerRound: [25, 40],
  transportPerDay:  [80, 140],
  dining: {
    casual:  [35, 55],
    local:   [55, 85],
    premium: [85, 150],
  },
  accommodation: {
    self:    [0, 0],
    '3star': [70, 130],
    '4star': [120, 200],
    '5star': [200, 350],
    villa:   [180, 350],
  },
}

export const COURSE_MIX = {
  value:    ['Golf Pollença', 'Golf Maioris', 'Son Antem East', 'Capdepera Golf'],
  balanced: ['Golf de Bendinat', 'Canyamel Golf', 'Pula Golf', 'Golf Son Antem West', 'Vall d\'Or Golf', 'Son Servera'],
  premium:  ['Son Gual', 'Son Vida', 'T Golf Palma', 'T Golf Calvià (Poniente)', 'Golf de Andratx'],
  luxury:   ['Club de Golf Alcanada', 'Son Muntaner', 'T Golf Calvià (Poniente)'],
}

export const AREA_COURSE_MIX = {
  north: {
    value: ['Golf Pollença', 'Club de Golf Alcanada', 'Pula Golf', 'Son Servera'],
    balanced: ['Club de Golf Alcanada', 'Golf Pollença', 'Pula Golf', 'Son Servera'],
    premium: ['Club de Golf Alcanada', 'Son Muntaner', 'Son Gual', 'T Golf Palma'],
    luxury: ['Club de Golf Alcanada', 'Son Muntaner', 'Son Gual'],
  },
  east: {
    value: ['Capdepera Golf', 'Son Servera', 'Golf Pollença', 'Golf Maioris'],
    balanced: ['Canyamel Golf', 'Pula Golf', 'Capdepera Golf', 'Son Servera'],
    premium: ['Pula Golf', 'Club de Golf Alcanada', 'Son Gual', 'T Golf Palma'],
    luxury: ['Club de Golf Alcanada', 'Son Muntaner', 'Son Gual'],
  },
  south: {
    value: ['Golf Maioris', 'Son Antem East', 'Son Antem West', 'Golf Pollença'],
    balanced: ['Son Antem West', 'Golf Maioris', 'Golf de Bendinat', 'Canyamel Golf'],
    premium: ['Son Gual', 'T Golf Palma', 'T Golf Calvià (Poniente)', 'Son Vida'],
    luxury: ['Son Muntaner', 'Son Gual', 'Club de Golf Alcanada'],
  },
  palma: {
    value: ['Golf Maioris', 'Son Antem East', 'Golf Pollença', 'Capdepera Golf'],
    balanced: ['Golf de Bendinat', 'Golf Son Antem West', 'Son Servera', 'Canyamel Golf'],
    premium: ['Son Gual', 'Son Vida', 'T Golf Palma', 'Son Muntaner'],
    luxury: ['Son Muntaner', 'Son Gual', 'Club de Golf Alcanada'],
  },
  southwest: {
    value: ['Golf Maioris', 'Son Antem East', 'Golf Pollença', 'Capdepera Golf'],
    balanced: ['Golf de Bendinat', 'Golf Son Antem West', 'Canyamel Golf', 'Pula Golf'],
    premium: ['T Golf Calvià (Poniente)', 'Golf de Andratx', 'Son Gual', 'Son Vida'],
    luxury: ['Son Muntaner', 'T Golf Calvià (Poniente)', 'Club de Golf Alcanada'],
  },
}

export const PREF_NOTES = {
  scenic:      'You asked for scenic. Andy will weight the mix toward courses with the best views and settings.',
  famous:      'You asked for famous names. Andy will prioritise the island\'s best-known courses in this tier.',
  challenging: 'You asked for a challenge. Andy will pick the courses in this tier that ask the most questions of your game.',
  relaxed:     'You asked for relaxed golf. Andy will favour friendlier layouts and gentler pacing.',
  near:        'You want courses near your hotel. Once Andy knows where you\'re staying, he\'ll tighten the mix around it.',
  none:        'A balanced mix from this tier. Andy will tailor it once he knows your group.',
}

export const PACKAGES = {
  value:    'Course Picks &amp; Booking Help. Andy confirms your course mix, books tee times at the right rates, and shares his course notes for each round.',
  balanced: 'Trip Planning + One Coached Round. Andy plans the trip end to end and joins you for a Play With A Pro round at one of your courses.',
  premium:  'Signature Golf Day + Full Trip Planning. A hosted Signature Day with Andy plus full planning of courses, tee times, and transport.',
  luxury:   'Full Concierge Trip. Every round, transfer, table, and tee time arranged, with Andy hosting your marquee golf day.',
}

export const AREA_NAMES = {
  southwest: 'the Southwest',
  palma: 'the Palma area',
  north: 'the North',
  east: 'the East',
  south: 'the South',
}

export function range(perUnit, units) { return [perUnit[0] * units, perUnit[1] * units] }
export function addR(a, b) { return [a[0] + b[0], a[1] + b[1]] }
export function fmt(n) { return '€' + Math.round(n).toLocaleString('en-GB') }
export function fmtR(r) { return fmt(r[0]) + ' – ' + fmt(r[1]) }
export function mid(r) { return (r[0] + r[1]) / 2 }

export function getSuggestedCourses(s) {
  return AREA_COURSE_MIX[s.area]?.[s.budget] || COURSE_MIX[s.budget]
}

export function calculate(state) {
  const s = state
  const buggyRounds = s.buggy === 'yes' ? s.rounds : s.buggy === 'some' ? Math.ceil(s.rounds / 2) : 0
  const nights = Math.max(0, s.days - 1)

  const greenFees = range(COSTS.greenFees[s.budget], s.rounds * s.golfers)
  const buggy     = range(COSTS.buggyPerRound, buggyRounds * s.golfers)
  const clubs     = s.clubs === 'yes' ? range(COSTS.clubHirePerRound, s.rounds * s.golfers) : [0, 0]
  const transport = s.transport === 'yes' ? range(COSTS.transportPerDay, s.days) : [0, 0]
  const dining    = range(COSTS.dining[s.dining], s.days * s.golfers)
  const accom     = range(COSTS.accommodation[s.accommodation], nights * s.golfers)

  const golfOnly = addR(addR(greenFees, buggy), clubs)
  const total    = addR(addR(addR(golfOnly, transport), dining), accom)

  return {
    greenFees, buggy, clubs, transport, dining, accom, golfOnly, total,
    perGolfer: [total[0] / s.golfers, total[1] / s.golfers],
    perRound:  [golfOnly[0] / (s.rounds * s.golfers), golfOnly[1] / (s.rounds * s.golfers)],
  }
}

export const DEFAULT_STATE = {
  days: 4, golfers: 2, rounds: 3,
  budget: 'balanced', preference: 'none', area: 'flexible',
  buggy: 'yes', clubs: 'no', transport: 'yes',
  accommodation: '4star', dining: 'local',
}
