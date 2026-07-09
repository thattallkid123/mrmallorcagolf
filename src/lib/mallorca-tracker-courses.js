import { CANONICAL_COURSE_DATA } from './course-catalog.js'

const PRIORITY_COURSE_NAMES = new Set([
  'Club de Golf Alcanada',
  'Golf Santa Ponsa 1',
  'Golf Santa Ponsa 2',
  'Golf Son Gual',
  'Golf Son Termes',
  'Son Muntaner',
])

const COURSE_THEMES = {
  'Club de Golf Alcanada': { accent: '#2b5f73', fairway: '#76a99e', sky: '#d7ecf0' },
  'Golf Santa Ponsa 1': { accent: '#365f4a', fairway: '#7faf88', sky: '#ddede6' },
  'Golf Santa Ponsa 2': { accent: '#285364', fairway: '#74a1a2', sky: '#d8edf2' },
  'Golf Santa Ponsa 3': { accent: '#5d5f2d', fairway: '#a3ad67', sky: '#ecedda' },
  'Golf Son Gual': { accent: '#496f5f', fairway: '#6f977f', sky: '#d9ebe6' },
  'Golf Son Quint': { accent: '#2f5d59', fairway: '#77a49e', sky: '#dff0ec' },
  'Golf Son Termes': { accent: '#715f41', fairway: '#97a26e', sky: '#ebe5cf' },
  'Golf Son Vida': { accent: '#4c5840', fairway: '#8ea171', sky: '#e6ead7' },
  'Golf de Andratx': { accent: '#6f4e3c', fairway: '#9c8764', sky: '#f0e2d8' },
  'Son Muntaner': { accent: '#405f35', fairway: '#7ea56a', sky: '#e2efd4' },
  'T Golf Palma (Puntiró)': { accent: '#57513a', fairway: '#9b976b', sky: '#eeebdd' },
}

const PRIORITY_VARIANTS = {
  'Club de Golf Alcanada': ['soft-right', 'dogleg-left', 'straight', 'soft-left', 'dogleg-right', 'double-bend', 'straight', 'soft-right', 'dogleg-left', 'straight', 'soft-left', 'straight', 'dogleg-right', 'soft-left', 'double-bend', 'straight', 'soft-right', 'dogleg-left'],
  'Golf Santa Ponsa 1': ['straight', 'dogleg-right', 'straight', 'dogleg-left', 'soft-right', 'double-bend', 'straight', 'soft-left', 'dogleg-right', 'straight', 'dogleg-left', 'straight', 'soft-right', 'soft-left', 'double-bend', 'straight', 'dogleg-right', 'soft-left'],
  'Golf Santa Ponsa 2': ['soft-right', 'straight', 'dogleg-left', 'soft-left', 'dogleg-right', 'double-bend', 'straight', 'soft-right', 'straight', 'dogleg-left', 'soft-left', 'straight', 'dogleg-right', 'soft-right', 'double-bend', 'straight', 'dogleg-left', 'soft-left'],
  'Golf Son Gual': ['straight', 'dogleg-right', 'straight', 'soft-left', 'dogleg-left', 'double-bend', 'soft-right', 'straight', 'dogleg-left', 'straight', 'dogleg-right', 'soft-left', 'straight', 'soft-right', 'double-bend', 'straight', 'dogleg-left', 'soft-right'],
  'Golf Son Termes': ['soft-left', 'dogleg-right', 'straight', 'dogleg-left', 'soft-right', 'double-bend', 'straight', 'soft-left', 'straight', 'dogleg-right', 'soft-right', 'straight', 'dogleg-left', 'soft-left', 'double-bend', 'straight', 'soft-right', 'dogleg-left'],
  'Son Muntaner': ['straight', 'soft-left', 'straight', 'dogleg-right', 'soft-right', 'double-bend', 'straight', 'soft-left', 'dogleg-left', 'straight', 'dogleg-right', 'soft-right', 'straight', 'soft-left', 'double-bend', 'straight', 'dogleg-right', 'soft-left'],
}

const PRIORITY_GUIDANCE = {
  'Club de Golf Alcanada': [
    'Sea breeze can make one more club the calm option.',
    'Position beats aggression when the bunkers narrow the landing.',
    'The green movement is often the real defence.',
    'Leave the approach from the side that opens the flag.',
  ],
  'Golf Santa Ponsa 1': [
    'Tour-style visuals reward commitment, not steering.',
    'This is frequently a three-shot design even for good players.',
    'Choose the widest usable section of fairway first.',
    'Long holes here reward discipline more than heroism.',
  ],
  'Golf Santa Ponsa 2': [
    'Driver is often optional; position is not.',
    'Play the hole backwards from a favourite yardage.',
    'Tree trouble compounds quickly, so favour the clean angle.',
    'Pick a landing number, then build the hole from there.',
  ],
  'Golf Son Gual': [
    'Start on the wider side and play for the better angle.',
    'Second-shot placement matters more than forcing length.',
    'Take enough club; short leaves the wrong test.',
    'Raised target means trajectory control matters.',
  ],
  'Golf Son Termes': [
    'Use the terrain; not every hole wants a high ball.',
    'Trust the line even when the valley framing feels narrow.',
    'Lay back to a full number when in doubt.',
    'One extra club uphill is often the smart play.',
  ],
  'Son Muntaner': [
    'Think one shot ahead and leave the right angle.',
    'Misses on the safe side still need to be planned.',
    'This is more of a placement hole than it first looks.',
    'Below the hole is almost always worth something here.',
  ],
}

const PRIORITY_HAZARDS = {
  'Club de Golf Alcanada': ['Sea breeze', 'Bunker shelf', 'Run-out right', 'Tiered green'],
  'Golf Santa Ponsa 1': ['Fairway bunker', 'Water pressure', 'Long carry', 'Tour green complex'],
  'Golf Santa Ponsa 2': ['Tree chute', 'Position bunker', 'Narrow neck', 'Shaped green'],
  'Golf Son Gual': ['Bunker right', 'Run-off left', 'Raised green', 'Cross bunker'],
  'Golf Son Termes': ['Slope assist', 'Hillside lie', 'Shallow green', 'Valley wind'],
  'Son Muntaner': ['Trees both sides', 'Bunker front left', 'Fast green', 'Narrow angle'],
}

function pickReferenceTee(scorecard) {
  const preferredNames = ['white', 'yellow', 'black', 'tee62', 'tee58', 'tee52', 'tee48', 'green', 'red']
  for (const teeName of preferredNames) {
    const match = scorecard.tees.find((tee) => tee.name === teeName)
    if (match) return match
  }

  return scorecard.tees[0]
}

function getHoleLengthFromTee(tee, index, fallbackLength) {
  const value = tee?.holeLengthsMeters?.[index]
  return Number.isFinite(value) ? value : fallbackLength
}

function buildHolePack(courseName, scorecard) {
  const referenceTee = pickReferenceTee(scorecard)
  const guidanceSet = PRIORITY_GUIDANCE[courseName] || [
    'Favour the centre and keep the next shot simple.',
    'Play the hole to the biggest safe space first.',
    'Leave the approach from the correct side.',
    'Miss where the next shot stays easiest.',
  ]
  const hazardSet = PRIORITY_HAZARDS[courseName] || ['Bunker pinch', 'Miss side matters', 'Tiered target', 'Angle hole']
  const variants = PRIORITY_VARIANTS[courseName] || scorecard.holes.map((_, index) => ['straight', 'soft-left', 'soft-right', 'dogleg-left', 'dogleg-right', 'double-bend'][index % 6])

  return scorecard.holes.map(([par, strokeIndex], index) => {
    const holeNumber = index + 1
    const referenceLength = getHoleLengthFromTee(referenceTee, index, 140)
    const targetCarryMeters = par === 5
      ? Math.round(referenceLength * 0.46)
      : par === 3
        ? Math.round(referenceLength * 0.84)
        : Math.round(referenceLength * 0.53)
    const idealLeaveMeters = par === 3 ? 0 : par === 5 ? 92 + ((holeNumber * 4) % 18) : 108 + ((holeNumber * 5) % 22)
    const greenDepthMeters = 24 + (holeNumber % 5) * 2
    const fairwayWidthMeters = par === 5 ? 34 - (holeNumber % 3) : 30 - (holeNumber % 4)

    const tees = Object.fromEntries(
      scorecard.tees.map((tee) => [tee.name, { lengthMeters: getHoleLengthFromTee(tee, index, referenceLength) }])
    )

    return {
      holeNumber,
      par,
      strokeIndex,
      overviewStatus: PRIORITY_COURSE_NAMES.has(courseName) ? 'priority-concept' : 'official-scorecard-concept',
      overviewVariant: variants[index % variants.length],
      targetCarryMeters,
      idealLeaveMeters,
      greenDepthMeters,
      fairwayWidthMeters,
      targetZone: par === 5 ? 'Lay-up shelf' : par === 3 ? 'Green target' : 'Preferred landing',
      hazardNote: hazardSet[index % hazardSet.length],
      guidance: guidanceSet[index % guidanceSet.length],
      tees,
      summary:
        holeNumber === 1
          ? `${courseName} opener using official scorecard par, SI, and tee distances.`
          : `${courseName} hole ${holeNumber} concept overview built on official scorecard structure.`,
    }
  })
}

function buildTrackerTees(scorecard) {
  return scorecard.tees.map((tee) => ({
    name: tee.name,
    label: tee.label,
    totalLengthMeters: tee.totalLengthMeters,
    courseRating: tee.courseRating,
    slope: tee.slope,
  }))
}

function buildCourse(courseEntry) {
  const {
    access,
    canonicalName,
    footer,
    location,
    scorecard,
    shortId,
    summary,
  } = courseEntry

  return {
    id: shortId,
    name: courseEntry.publicName,
    canonicalName,
    region: location,
    summary,
    footer,
    priority: PRIORITY_COURSE_NAMES.has(canonicalName),
    scorecardSource: 'Official scorecard master',
    access,
    theme: COURSE_THEMES[canonicalName] || { accent: '#365f4a', fairway: '#7faf88', sky: '#ddede6' },
    tees: buildTrackerTees(scorecard),
    holes: buildHolePack(canonicalName, scorecard),
  }
}

export const MALLORCA_TRACKER_COURSES = CANONICAL_COURSE_DATA.map((courseEntry) => buildCourse(courseEntry))

export function getTrackerCourseById(id) {
  return MALLORCA_TRACKER_COURSES.find((course) => course.id === id) || MALLORCA_TRACKER_COURSES[0]
}
