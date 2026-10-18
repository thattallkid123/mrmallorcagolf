import { describe, expect, test } from 'vitest'
import { calculate, getSuggestedCourses, DEFAULT_STATE, COURSE_MIX } from '../../src/lib/golf-cost-calculator-logic'
import { getCoursePricingByName } from '../../src/lib/course-pricing-data'
describe('trip estimates use the selected course itinerary', () => {
  test('daily licences reflect the courses and scale by golfers and rounds', () => {
    expect(calculate(DEFAULT_STATE).licences).toEqual([0, 0])
    // Son Gual (0), Son Vida (3), T Golf Palma (3), for two golfers.
    expect(calculate({ ...DEFAULT_STATE, budget: 'premium', rounds: 3 }).licences).toEqual([12, 12])
    // Five Alcanada rounds, each with a 3 EUR daily licence per golfer.
    expect(calculate({ ...DEFAULT_STATE, area: 'north', rounds: 5 }).licences).toEqual([30, 30])
  })
  test('two golfers sharing a buggy at Son Gual pay for one vehicle', () => {
    const r = calculate({ ...DEFAULT_STATE, budget: 'premium', rounds: 1 })
    const p = getCoursePricingByName('Golf Son Gual')
    expect(r.greenFees).toEqual([p.low * 2, p.peak * 2])
    expect(r.buggy).toEqual([45, 45])
    expect(r.licences).toEqual([(p.licenceFee || 0) * 2, (p.licenceFee || 0) * 2])
  })
  test('an odd group needs a second buggy', () => {
    expect(calculate({ ...DEFAULT_STATE, budget: 'premium', rounds: 1, golfers: 3 }).buggy).toEqual([90, 90])
  })
  test('essential buggies remain included when no is selected', () => {
    expect(calculate({ ...DEFAULT_STATE, rounds: 1, buggy: 'no' }).buggy).toEqual([43, 43])
  })
  test('walking round adds no optional buggy', () => {
    expect(calculate({ ...DEFAULT_STATE, budget: 'premium', rounds: 1, buggy: 'no' }).buggy).toEqual([0, 0])
  })
  test('Muntaner peak rate does not charge twice for its included buggy', () => {
    expect(calculate({ ...DEFAULT_STATE, budget: 'luxury', rounds: 1 }).buggy).toEqual([45, 0])
  })
  test('north itinerary repeats Alcanada rather than leaving the selected area', () => {
    const s = { ...DEFAULT_STATE, area: 'north', rounds: 5 }
    expect(getSuggestedCourses(s)).toEqual(['Club de Golf Alcanada'])
    const p = getCoursePricingByName('Club de Golf Alcanada')
    expect(calculate(s).greenFees).toEqual([p.low * 10, p.peak * 10])
  })
  test('Palma choices exclude the east coast', () => {
    for (const budget of Object.keys(COURSE_MIX)) {
      expect(getSuggestedCourses({ area: 'palma', budget })).not.toContain('Golf Club Son Servera')
      expect(getSuggestedCourses({ area: 'palma', budget })).not.toContain('Pula Golf')
    }
  })
  test('one day has no nights; transport scales beyond four people', () => {
    const r = calculate({ ...DEFAULT_STATE, days: 1, golfers: 5 })
    expect(r.accom).toEqual([0, 0])
    expect(r.transport).toEqual([160, 280])
  })
  test('breakdown sums to totals across areas, tiers and optional extras', () => {
    for (const area of ['flexible', 'palma', 'southwest', 'south', 'east', 'north']) {
      for (const budget of Object.keys(COURSE_MIX)) {
        for (const buggy of ['yes', 'some', 'no']) {
          const r = calculate({ ...DEFAULT_STATE, area, budget, buggy, golfers: 3, rounds: 7, clubs: 'yes' })
          for (let i = 0; i < 2; i++) {
            expect(r.total[i]).toBe(r.greenFees[i] + r.buggy[i] + r.clubs[i] + r.licences[i] + r.transport[i] + r.dining[i] + r.accom[i])
            expect(r.perGolfer[i]).toBeCloseTo(r.total[i] / 3)
          }
          expect(r.total[1]).toBeGreaterThanOrEqual(r.total[0])
        }
      }
    }
  })
})
