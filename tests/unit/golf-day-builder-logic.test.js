import { describe, expect, test } from 'vitest'
import {
  scoreAllCourses,
  lunchFor,
  whyCourseChosen,
  COURSES,
  RESTAURANTS,
} from '../../src/lib/golf-day-builder-logic'

const baseAnswers = {
  region: 'southwest',
  dayStyle: 'relaxed',
  level: 'confident',
  handicap: 'low',
  courseType: 'forgiving',
  addons: [],
}

describe('scoreAllCourses', () => {
  test('excludes hotel-only courses entirely', () => {
    const ranked = scoreAllCourses(baseAnswers)
    expect(ranked.some(r => r.c.id === 'reserva-rotana')).toBe(false)
    expect(ranked.some(r => r.c.id.startsWith('santa-ponsa-2') || r.c.id.startsWith('santa-ponsa-3'))).toBe(false)
  })

  test('unbooked does not silently force a southwest base', () => {
    const ranked = scoreAllCourses({ ...baseAnswers, region: 'unbooked', dayStyle:'scenic', courseType:'scenic' })
    expect(ranked.some(r => r.c.region === 'north')).toBe(true)
    expect(ranked.some(r => r.c.region === 'east')).toBe(true)
  })

  test('a course in the requested region scores higher than one that is not, all else equal', () => {
    const ranked = scoreAllCourses(baseAnswers)
    const inRegion = ranked.find(r => r.c.id === 'santa-ponsa') // southwest
    const outOfRegion = ranked.find(r => r.c.id === 'alcanada') // north
    expect(inRegion.s).toBeGreaterThan(outOfRegion.s)
  })

  test('results are sorted descending by score', () => {
    const ranked = scoreAllCourses(baseAnswers)
    for (let i = 1; i < ranked.length; i++) {
      expect(ranked[i - 1].s).toBeGreaterThanOrEqual(ranked[i].s)
    }
  })

  test('close only recommends the selected area', () => {
    const ranked = scoreAllCourses({ ...baseAnswers, courseType:'close' })
    expect(ranked.length).toBeGreaterThan(0)
    expect(ranked.every(r => r.c.region === 'southwest')).toBe(true)
  })

  test('a beginner is not sent to a course requiring a more advanced level', () => {
    const ranked = scoreAllCourses({ ...baseAnswers, level:'beginner' })
    expect(ranked.some(r => r.c.id === 'son-gual')).toBe(false)
  })

  test('dayStyle "family" gives an extra bonus to courses tagged family', () => {
    const familyAnswers = { ...baseAnswers, dayStyle: 'family', courseType: 'nomatch' }
    const nonFamilyAnswers = { ...baseAnswers, dayStyle: 'nomatch', courseType: 'nomatch' }
    const familyCourse = scoreAllCourses(familyAnswers).find(r => r.c.id === 'santa-ponsa') // tagged family
    const familyCourseNoBonus = scoreAllCourses(nonFamilyAnswers).find(r => r.c.id === 'santa-ponsa')
    expect(familyCourse.s).toBeGreaterThan(familyCourseNoBonus.s)
  })
})

describe('lunchFor', () => {
  test('returns the village restaurant when "village" is in addons', () => {
    const result = lunchFor('palma', { ...baseAnswers, addons: ['village'] }, false)
    expect(result).toBe(RESTAURANTS.palma.village)
  })

  test('luxury or food dayStyle returns the michelin pick (or premium fallback)', () => {
    const luxury = lunchFor('east', { ...baseAnswers, dayStyle: 'luxury' }, false)
    expect(luxury).toBe(RESTAURANTS.east.michelin)
    const food = lunchFor('east', { ...baseAnswers, dayStyle: 'food' }, false)
    expect(food).toBe(RESTAURANTS.east.michelin)
  })

  test('falls back to premium/casual based on the premium flag when no special dayStyle/addon applies', () => {
    expect(lunchFor('south', baseAnswers, true)).toBe(RESTAURANTS.south.premium)
    expect(lunchFor('south', baseAnswers, false)).toBe(RESTAURANTS.south.casual)
  })

  test('unknown region falls back to palma restaurants', () => {
    expect(lunchFor('made-up-region', baseAnswers, true)).toBe(RESTAURANTS.palma.premium)
  })
})

describe('whyCourseChosen', () => {
  const course = COURSES.find(c => c.id === 'santa-ponsa') // tags: forgiving, relaxed, family; level: beginner+

  test('cites the courseType match reason when tags include it', () => {
    const line = whyCourseChosen(course, { ...baseAnswers, courseType: 'forgiving' })
    expect(line).toMatch(/wide and forgiving/i)
  })

  test('does not duplicate the reason when dayStyle equals courseType', () => {
    const line = whyCourseChosen(course, { ...baseAnswers, courseType: 'relaxed', dayStyle: 'relaxed' })
    // relaxed reason should appear once, from courseType's branch, not twice
    const occurrences = (line.match(/relaxed/gi) || []).length
    expect(occurrences).toBeLessThanOrEqual(1)
  })

  test('falls back to a generic line when nothing matches, including the level requirement', () => {
    // son-gual requires 'confident+' (rank 2); a 'beginner' (rank 0) answer misses every branch
    const hardCourse = COURSES.find(c => c.id === 'son-gual')
    const line = whyCourseChosen(hardCourse, { ...baseAnswers, courseType: 'nomatch', dayStyle: 'nomatch', level: 'beginner' })
    expect(line).toBe('The best available match for your answers in this area.')
  })

  test('adds "well-matched to your game" when the level requirement is met', () => {
    const line = whyCourseChosen(course, { ...baseAnswers, courseType: 'nomatch', dayStyle: 'nomatch', level: 'confident' })
    expect(line).toMatch(/golf level you selected/i)
  })
})
