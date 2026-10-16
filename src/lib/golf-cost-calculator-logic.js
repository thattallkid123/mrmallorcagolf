import { getCoursePricingByName } from './course-pricing-data.js'
import { getCourseLogisticsByName } from './course-logistics-data.js'

// Golf uses the same published course masters as the comparison tool. Off-course
// figures remain broad planning allowances, not partner quotes or bookable rates.
export const COSTS = {
  buggyPerRound: [35, 55],
  clubHirePerRound: [25, 40],
  transportPerDay: [80, 140],
  dining: { casual: [35, 55], local: [55, 85], premium: [85, 150] },
  accommodation: { self: [0, 0], '3star': [70, 130], '4star': [120, 200], '5star': [200, 350], villa: [180, 350] },
}

export const COURSE_MIX = {
  value: ['Golf Maioris', 'Golf Santa Ponsa 1', 'Golf Son Termes', 'Pula Golf'],
  balanced: ['Real Golf de Bendinat', 'Golf Santa Ponsa 1', 'Golf Son Antem East', 'Golf Son Antem West', 'Golf Son Quint'],
  premium: ['Golf Son Gual', 'Golf Son Vida', 'T Golf Palma (Puntiró)', 'T Golf Calvià (Poniente)', 'Golf de Andratx'],
  luxury: ['Son Muntaner', 'Club de Golf Alcanada', 'T Golf Calvià (Poniente)'],
}

const LOCAL_COURSES = {
  palma: ['Golf Son Gual', 'Golf Son Vida', 'Golf Son Quint', 'Son Muntaner', 'T Golf Palma (Puntiró)', 'Real Golf de Bendinat', 'Golf Son Termes', 'Golf Maioris', 'Golf Son Antem East', 'Golf Son Antem West', 'Golf Santa Ponsa 1'],
  southwest: ['Golf Santa Ponsa 1', 'Real Golf de Bendinat', 'T Golf Calvià (Poniente)', 'Golf de Andratx', 'Golf Son Vida', 'Golf Son Quint', 'Son Muntaner'],
  south: ['Golf Maioris', 'Golf Son Antem East', 'Golf Son Antem West', 'Golf Son Gual', 'T Golf Palma (Puntiró)'],
  east: ['Capdepera Golf', 'Canyamel Golf', 'Pula Golf', 'Golf Club Son Servera', "Vall d'Or Golf"],
  north: ['Club de Golf Alcanada'],
}

// North has one public 18-hole course. Never quietly replace a local 18-hole
// request with a nine-hole round or a drive to the other side of the island.
export const AREA_COURSE_MIX = Object.fromEntries(Object.entries(LOCAL_COURSES).map(([area, courses]) => [area,
  Object.fromEntries(Object.entries(COURSE_MIX).map(([budget, preferred]) => {
    const localPreferred = preferred.filter(name => courses.includes(name))
    const remaining = courses.filter(name => !localPreferred.includes(name)).sort((a, b) => {
      const x = getCoursePricingByName(a), y = getCoursePricingByName(b)
      return (x.low + x.peak - y.low - y.peak) * (['premium', 'luxury'].includes(budget) ? -1 : 1)
    })
    return [budget, [...localPreferred, ...remaining]]
  }))
]))

export const AREA_NAMES = { southwest: 'the Southwest', palma: 'the Palma area', north: 'the North', east: 'the East', south: 'the South' }
export function range(pair, units) { return pair.map(value => value * units) }
export function addR(a, b) { return a.map((value, index) => value + b[index]) }
export function fmt(n) { return '€' + Math.round(n).toLocaleString('en-GB') }
export function fmtR(pair) { return fmt(pair[0]) + ' – ' + fmt(pair[1]) }
export function mid(pair) { return (pair[0] + pair[1]) / 2 }
export function getSuggestedCourses(s) { return AREA_COURSE_MIX[s.area]?.[s.budget] || COURSE_MIX[s.budget] }

export function calculate(state) {
  const s = state
  const names = getSuggestedCourses(s)
  if (!names?.length) throw new Error('Unknown course mix')
  const nights = Math.max(0, s.days - 1)
  const buggyRounds = s.buggy === 'yes' ? s.rounds : s.buggy === 'some' ? Math.ceil(s.rounds / 2) : 0
  const buggyCount = Math.ceil(s.golfers / 2)
  let greenFees = [0, 0], buggy = [0, 0], licences = [0, 0]
  for (let round = 0; round < s.rounds; round++) {
    const name = names[round % names.length]
    const price = getCoursePricingByName(name)
    const logistics = getCourseLogisticsByName(name)
    greenFees = addR(greenFees, range([price.low, price.peak], s.golfers))
    licences = addR(licences, range([price.licenceFee || 0, price.licenceFee || 0], s.golfers))
    // Essential buggies remain in the estimate even when 'no' was selected.
    if (round < buggyRounds || logistics?.walkAllowed === false) {
      const hire = logistics?.buggy ?? COSTS.buggyPerRound[1]
      // Son Muntaner's low rate is walking; its peak rate includes the buggy.
      buggy = addR(buggy, range([hire, logistics?.buggyIncl ? 0 : hire], buggyCount))
    }
  }
  const clubs = s.clubs === 'yes' ? range(COSTS.clubHirePerRound, s.rounds * s.golfers) : [0, 0]
  const transport = s.transport === 'yes' ? range(COSTS.transportPerDay, s.days * Math.ceil(s.golfers / 4)) : [0, 0]
  const dining = range(COSTS.dining[s.dining], s.days * s.golfers)
  const accom = range(COSTS.accommodation[s.accommodation], nights * s.golfers)
  const golfOnly = addR(addR(addR(greenFees, buggy), clubs), licences)
  const total = addR(addR(addR(golfOnly, transport), dining), accom)
  return { greenFees, buggy, clubs, licences, transport, dining, accom, golfOnly, total, nights, buggyCount,
    perGolfer: range(total, 1 / s.golfers), perRound: range(golfOnly, 1 / (s.rounds * s.golfers)) }
}

export const DEFAULT_STATE = { days: 4, golfers: 2, rounds: 3, budget: 'balanced', preference: 'none', area: 'flexible', buggy: 'yes', clubs: 'no', transport: 'yes', accommodation: '4star', dining: 'local' }
