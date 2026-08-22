import { describe, expect, test } from 'vitest'
import {
  calculate,
  getSuggestedCourses,
  fmt,
  fmtR,
  mid,
  range,
  addR,
  DEFAULT_STATE,
  COSTS,
  COURSE_MIX,
  AREA_COURSE_MIX,
} from '../../src/lib/golf-cost-calculator-logic'

describe('range/addR/fmt helpers', () => {
  test('range multiplies both ends of a [lo, hi] pair', () => {
    expect(range([10, 20], 3)).toEqual([30, 60])
  })

  test('addR sums two ranges element-wise', () => {
    expect(addR([10, 20], [1, 2])).toEqual([11, 22])
  })

  test('fmt formats a euro amount with thousands separator, no decimals', () => {
    expect(fmt(1234.6)).toBe('€1,235')
    expect(fmt(99)).toBe('€99')
  })

  test('fmtR formats a range as "€lo – €hi"', () => {
    expect(fmtR([100, 250])).toBe('€100 – €250')
  })

  test('mid returns the midpoint of a range', () => {
    expect(mid([100, 300])).toBe(200)
  })
})

describe('getSuggestedCourses', () => {
  test('returns the area-specific mix when area and budget both match', () => {
    const result = getSuggestedCourses({ area: 'north', budget: 'luxury' })
    expect(result).toEqual(AREA_COURSE_MIX.north.luxury)
  })

  test('falls back to the flat COURSE_MIX when area is unrecognised (e.g. "flexible")', () => {
    const result = getSuggestedCourses({ area: 'flexible', budget: 'balanced' })
    expect(result).toEqual(COURSE_MIX.balanced)
  })

  test('falls back to COURSE_MIX when the area exists but the budget tier does not', () => {
    const result = getSuggestedCourses({ area: 'north', budget: 'nonsense' })
    expect(result).toEqual(COURSE_MIX.nonsense)
  })
})

describe('calculate', () => {
  test('matches a hand-computed total for the default state', () => {
    const result = calculate(DEFAULT_STATE)
    // days:4 golfers:2 rounds:3 budget:balanced buggy:yes clubs:no transport:yes accommodation:4star dining:local
    const expectedGreenFees = range(COSTS.greenFees.balanced, 3 * 2) // rounds * golfers
    const expectedBuggy = range(COSTS.buggyPerRound, 3 * 2) // buggy:'yes' -> all rounds
    const expectedClubs = [0, 0] // clubs:'no'
    const expectedTransport = range(COSTS.transportPerDay, 4) // days
    const expectedDining = range(COSTS.dining.local, 4 * 2) // days * golfers
    const expectedAccom = range(COSTS.accommodation['4star'], 3 * 2) // nights(days-1) * golfers

    expect(result.greenFees).toEqual(expectedGreenFees)
    expect(result.buggy).toEqual(expectedBuggy)
    expect(result.clubs).toEqual(expectedClubs)
    expect(result.transport).toEqual(expectedTransport)
    expect(result.dining).toEqual(expectedDining)
    expect(result.accom).toEqual(expectedAccom)

    const expectedGolfOnly = addR(addR(expectedGreenFees, expectedBuggy), expectedClubs)
    const expectedTotal = addR(addR(expectedGolfOnly, expectedTransport), expectedDining)
    const expectedTotalWithAccom = addR(expectedTotal, expectedAccom)
    expect(result.golfOnly).toEqual(expectedGolfOnly)
    expect(result.total).toEqual(expectedTotalWithAccom)
  })

  test('buggy "some" charges roughly half the rounds, rounded up', () => {
    const state = { ...DEFAULT_STATE, buggy: 'some', rounds: 3 }
    const result = calculate(state)
    // ceil(3/2) = 2 buggy rounds, golfers: 2 -> 4 buggy-units
    expect(result.buggy).toEqual(range(COSTS.buggyPerRound, 4))
  })

  test('buggy "no" charges nothing for buggies', () => {
    const result = calculate({ ...DEFAULT_STATE, buggy: 'no' })
    expect(result.buggy).toEqual([0, 0])
  })

  test('clubs "yes" adds club hire per round per golfer', () => {
    const result = calculate({ ...DEFAULT_STATE, clubs: 'yes' })
    expect(result.clubs).toEqual(range(COSTS.clubHirePerRound, DEFAULT_STATE.rounds * DEFAULT_STATE.golfers))
  })

  test('transport "no" removes the transport line entirely', () => {
    const result = calculate({ ...DEFAULT_STATE, transport: 'no' })
    expect(result.transport).toEqual([0, 0])
  })

  test('a single-day trip (days: 1) has zero accommodation nights', () => {
    const result = calculate({ ...DEFAULT_STATE, days: 1 })
    expect(result.accom).toEqual([0, 0])
  })

  test('self-catering accommodation costs nothing regardless of nights', () => {
    const result = calculate({ ...DEFAULT_STATE, accommodation: 'self', days: 7 })
    expect(result.accom).toEqual([0, 0])
  })

  test('perGolfer divides the total evenly across golfers', () => {
    const result = calculate({ ...DEFAULT_STATE, golfers: 4 })
    expect(result.perGolfer).toEqual([result.total[0] / 4, result.total[1] / 4])
  })

  test('perRound divides golf-only cost across rounds and golfers', () => {
    const result = calculate({ ...DEFAULT_STATE, rounds: 5, golfers: 3 })
    expect(result.perRound).toEqual([result.golfOnly[0] / (5 * 3), result.golfOnly[1] / (5 * 3)])
  })

  test('every budget tier produces a positive, well-ordered total range', () => {
    for (const budget of Object.keys(COSTS.greenFees)) {
      const result = calculate({ ...DEFAULT_STATE, budget })
      expect(result.total[0]).toBeGreaterThan(0)
      expect(result.total[1]).toBeGreaterThanOrEqual(result.total[0])
    }
  })
})
