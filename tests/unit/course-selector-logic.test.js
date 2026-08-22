import { describe, expect, test } from 'vitest'
import {
  QUESTIONS,
  optionLabels,
  selectorAnswerSummary,
  selectorShortlistSummary,
  selectorShortlistNames,
  scoreCourse,
  DIFF_LABEL,
  getCourseFactsLine,
} from '../../src/lib/course-selector-logic'

function makeCourse(overrides = {}) {
  return {
    name: 'Test Course',
    area: 'Palma',
    diff10: 6,
    walkability: 3,
    prestige: 3,
    tags: { ability: ['casual'], style: ['relaxed'], budget: ['mid'], group: ['couple'] },
    ...overrides,
  }
}

describe('optionLabels', () => {
  const abilityQuestion = QUESTIONS.find(q => q.id === 'ability')

  test('resolves a single value to its label', () => {
    expect(optionLabels(abilityQuestion, 'beginner')).toEqual(['Beginner'])
  })

  test('resolves an array of values to their labels, in order', () => {
    const styleQuestion = QUESTIONS.find(q => q.id === 'style')
    expect(optionLabels(styleQuestion, ['scenic', 'relaxed'])).toEqual(['Scenic', 'Relaxed'])
  })

  test('returns empty array for null/undefined value', () => {
    expect(optionLabels(abilityQuestion, null)).toEqual([])
    expect(optionLabels(abilityQuestion, undefined)).toEqual([])
  })

  test('falls back to the raw value for an unknown option', () => {
    expect(optionLabels(abilityQuestion, 'made-up')).toEqual(['made-up'])
  })
})

describe('selectorAnswerSummary', () => {
  test('joins only answered questions, in QUESTIONS order', () => {
    const summary = selectorAnswerSummary({ ability: 'confident', walking: 'walk' })
    expect(summary).toContain('How would you describe your golf? Confident player')
    expect(summary).toContain('Walk or ride? I like to walk')
    expect(summary.indexOf('golf?')).toBeLessThan(summary.indexOf('Walk or ride?'))
  })

  test('produces an empty string when nothing was answered', () => {
    expect(selectorAnswerSummary({})).toBe('')
  })
})

describe('selectorShortlistSummary / selectorShortlistNames', () => {
  const courses = [
    { displayName: 'Son Gual', areaLabel: 'Palma', greenFee: 'Peak €165 / Low €115' },
    { name: 'Alcanada', areaLabel: 'North', greenFee: 'Peak €230 / Low €115' },
  ]

  test('numbers the shortlist and prefers displayName over name', () => {
    expect(selectorShortlistSummary(courses)).toBe(
      '1. Son Gual - Palma - Peak €165 / Low €115 | 2. Alcanada - North - Peak €230 / Low €115'
    )
  })

  test('joins just the names, comma-separated', () => {
    expect(selectorShortlistNames(courses)).toBe('Son Gual, Alcanada')
  })
})

describe('DIFF_LABEL', () => {
  test('buckets difficulty into Gentle/Fair/Testing/Hard', () => {
    expect(DIFF_LABEL(2)).toBe('Gentle · 2/10')
    expect(DIFF_LABEL(5)).toBe('Fair · 5/10')
    expect(DIFF_LABEL(7)).toBe('Testing · 7/10')
    expect(DIFF_LABEL(9)).toBe('Hard · 9/10')
  })
})

describe('getCourseFactsLine', () => {
  test('joins only the facts that are present', () => {
    expect(getCourseFactsLine({ coursePar: 72, holeCount: 18 })).toBe('Par 72 · 18 holes')
  })

  test('returns an empty string when no facts are known', () => {
    expect(getCourseFactsLine({})).toBe('')
  })

  test('includes access requirement/type when present', () => {
    expect(getCourseFactsLine({ accessRequirement: 'Handicap certificate required', accessType: 'Public' }))
      .toBe('Handicap certificate required · Public')
  })
})

describe('scoreCourse', () => {
  test('rewards an ability match and heavily penalises a beginner on a hard course', () => {
    const hardCourse = makeCourse({ diff10: 9, tags: { ability: ['confident', 'low'], style: [], budget: [], group: [] } })
    const score = scoreCourse(hardCourse, { ability: 'beginner', style: [], area: 'flexible', budget: 'value', difficulty: 'forgiving', walking: 'either', group: 'solo' })
    // no ability match (-25) plus the beginner/diff>=8 penalty (-100)
    expect(score).toBeLessThan(-100)
  })

  test('an ability match scores strictly higher than a mismatch, all else equal', () => {
    const answers = { ability: 'casual', style: [], area: 'flexible', budget: 'value', difficulty: 'balanced', walking: 'either', group: 'solo' }
    const matching = makeCourse({ tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const mismatched = makeCourse({ tags: { ability: ['low'], style: [], budget: [], group: [] } })
    expect(scoreCourse(matching, answers)).toBeGreaterThan(scoreCourse(mismatched, answers))
  })

  test('flexible area gives a flat bonus regardless of course area', () => {
    const answers = { ability: 'casual', style: [], area: 'flexible', budget: 'value', difficulty: 'balanced', walking: 'either', group: 'solo' }
    const palmaCourse = makeCourse({ area: 'Palma', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const northCourse = makeCourse({ area: 'North', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    expect(scoreCourse(palmaCourse, answers)).toBe(scoreCourse(northCourse, answers))
  })

  test('North and East are treated as the same zone', () => {
    const answers = { ability: 'casual', style: [], area: 'North', budget: 'value', difficulty: 'balanced', walking: 'either', group: 'solo' }
    const eastCourse = makeCourse({ area: 'East', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const palmaCourse = makeCourse({ area: 'Palma', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    // East scores the same as an exact North match; Palma (a real mismatch) scores lower
    const answersExactNorth = { ...answers }
    const northCourse = makeCourse({ area: 'North', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    expect(scoreCourse(eastCourse, answers)).toBe(scoreCourse(northCourse, answersExactNorth))
    expect(scoreCourse(eastCourse, answers)).toBeGreaterThan(scoreCourse(palmaCourse, answers))
  })

  test('South/Palma cross-bonus is smaller than an exact area match', () => {
    const answers = { ability: 'casual', style: [], area: 'South', budget: 'value', difficulty: 'balanced', walking: 'either', group: 'solo' }
    const exactSouth = makeCourse({ area: 'South', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const palmaAdjacent = makeCourse({ area: 'Palma', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const unrelated = makeCourse({ area: 'North', tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    expect(scoreCourse(exactSouth, answers)).toBeGreaterThan(scoreCourse(palmaAdjacent, answers))
    expect(scoreCourse(palmaAdjacent, answers)).toBeGreaterThan(scoreCourse(unrelated, answers))
  })

  test('premium budget answer still gets a small bonus on a non-premium course', () => {
    const answers = { ability: 'casual', style: [], area: 'flexible', budget: 'premium', difficulty: 'balanced', walking: 'either', group: 'solo' }
    const midCourse = makeCourse({ tags: { ability: ['casual'], style: [], budget: ['mid'], group: [] } })
    const valueCourse = makeCourse({ tags: { ability: ['casual'], style: [], budget: ['value'], group: [] } })
    // neither matches 'premium' in tags.budget, but the premium-answer bonus (+4) applies to both equally
    expect(scoreCourse(midCourse, answers)).toBe(scoreCourse(valueCourse, answers))
  })

  test('difficulty scoring peaks when course diff10 matches the requested band', () => {
    const answers = { ability: 'casual', style: [], area: 'flexible', budget: 'value', difficulty: 'challenging', walking: 'either', group: 'solo' }
    const closeMatch = makeCourse({ diff10: 8.5, tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const farOff = makeCourse({ diff10: 2, tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    expect(scoreCourse(closeMatch, answers)).toBeGreaterThan(scoreCourse(farOff, answers))
  })

  test('walking preference rewards high walkability, buggy preference rewards low', () => {
    const walkAnswers = { ability: 'casual', style: [], area: 'flexible', budget: 'value', difficulty: 'balanced', walking: 'walk', group: 'solo' }
    const veryWalkable = makeCourse({ walkability: 5, tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const notWalkable = makeCourse({ walkability: 1, tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    expect(scoreCourse(veryWalkable, walkAnswers)).toBeGreaterThan(scoreCourse(notWalkable, walkAnswers))

    const buggyAnswers = { ...walkAnswers, walking: 'buggy' }
    const buggyOnly = makeCourse({ walkability: 1, tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    const walkableToo = makeCourse({ walkability: 5, tags: { ability: ['casual'], style: [], budget: [], group: [] } })
    expect(scoreCourse(buggyOnly, buggyAnswers)).toBeGreaterThan(scoreCourse(walkableToo, buggyAnswers))
  })

  test('corporate group with a high-prestige course gets an extra bonus', () => {
    const answers = { ability: 'casual', style: [], area: 'flexible', budget: 'value', difficulty: 'balanced', walking: 'either', group: 'corporate' }
    const prestigious = makeCourse({ prestige: 5, tags: { ability: ['casual'], style: [], budget: [], group: ['corporate'] } })
    const modest = makeCourse({ prestige: 2, tags: { ability: ['casual'], style: [], budget: [], group: ['corporate'] } })
    expect(scoreCourse(prestigious, answers)).toBeGreaterThan(scoreCourse(modest, answers))
  })

  test('style score caps at 22 regardless of how many styles match', () => {
    const answers = { ability: 'casual', style: ['scenic', 'relaxed', 'serious', 'luxury'], area: 'flexible', budget: 'value', difficulty: 'balanced', walking: 'either', group: 'solo' }
    const allStyles = makeCourse({ tags: { ability: ['casual'], style: ['scenic', 'relaxed', 'serious', 'luxury'], budget: [], group: [] } })
    const twoStyles = makeCourse({ tags: { ability: ['casual'], style: ['scenic', 'relaxed'], budget: [], group: [] } })
    const noAreaBonus = scoreCourse(allStyles, answers)
    // 14 + 4*8 = 46 uncapped, but capped at 22 - so the 4-style course shouldn't wildly outscore fewer matches
    expect(noAreaBonus - scoreCourse(twoStyles, answers)).toBeLessThanOrEqual(8)
  })
})
