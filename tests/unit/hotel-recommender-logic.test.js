import { describe, expect, test } from 'vitest'
import { HOTELS, scoreHotel, pillClass } from '../../src/lib/hotel-recommender-logic'

function makeHotel(overrides = {}) {
  return {
    id: 'test-hotel',
    area: 'southwest',
    type: 'hotel',
    groups: ['couple'],
    sizes: ['1-2'],
    styles: ['boutique'],
    budgets: ['premium'],
    priority: [],
    beach: false,
    spa: false,
    golfProximity: 1,
    luxury: 3,
    ...overrides,
  }
}

const baseAnswers = { area: 'southwest', group: 'couple', size: '1-2', style: 'boutique', budget: 'premium', priority: [] }

describe('scoreHotel', () => {
  test('a hotel outside the requested area is disqualified with -999, regardless of every other match', () => {
    const perfectMatchWrongArea = makeHotel({ area: 'north' })
    expect(scoreHotel(perfectMatchWrongArea, baseAnswers)).toBe(-999)
  })

  test('matching group/size/style/budget all add positive score over a hotel matching none', () => {
    const fullMatch = makeHotel()
    const noMatch = makeHotel({ groups: ['family'], sizes: ['10+'], styles: ['resort'], budgets: ['ultra'] })
    expect(scoreHotel(fullMatch, baseAnswers)).toBeGreaterThan(scoreHotel(noMatch, baseAnswers))
  })

  test('family group with a "secrets" or "vicenc" id is penalised', () => {
    const secretsHotel = makeHotel({ id: 'secrets-something', groups: ['family'] })
    const familyAnswers = { ...baseAnswers, group: 'family' }
    const ordinaryFamilyHotel = makeHotel({ id: 'ordinary', groups: ['family'] })
    expect(scoreHotel(secretsHotel, familyAnswers)).toBeLessThan(scoreHotel(ordinaryFamilyHotel, familyAnswers))
  })

  test('villa type gets a bonus for large groups (6-9, 10+) and a penalty for a couple (1-2)', () => {
    const villa = makeHotel({ type: 'villa', sizes: ['6-9'] })
    const largeGroupAnswers = { ...baseAnswers, size: '6-9' }
    const withBonus = scoreHotel(villa, largeGroupAnswers)

    const villaSmall = makeHotel({ type: 'villa', sizes: ['1-2'] })
    const withPenalty = scoreHotel(villaSmall, baseAnswers)
    // the 6-9 bonus (+20) should clearly outscore the 1-2 penalty (-15) for an otherwise identical hotel
    expect(withBonus).toBeGreaterThan(withPenalty)
  })

  test('style "villa" answer penalises a non-villa hotel and non-villa answer penalises a villa hotel', () => {
    const nonVillaHotel = makeHotel({ type: 'hotel' })
    const villaAnswers = { ...baseAnswers, style: 'villa' }
    const villaHotel = makeHotel({ type: 'villa', styles: ['villa'] })
    const nonVillaAnswers = { ...baseAnswers, style: 'boutique' }

    expect(scoreHotel(nonVillaHotel, villaAnswers)).toBeLessThan(scoreHotel(villaHotel, villaAnswers))
    expect(scoreHotel(villaHotel, nonVillaAnswers)).toBeLessThan(scoreHotel(nonVillaHotel, nonVillaAnswers))
  })

  test('budget mismatch: mid answer penalises a luxury:4 hotel', () => {
    const luxuryHotel = makeHotel({ luxury: 4, budgets: ['ultra'] })
    const midAnswers = { ...baseAnswers, budget: 'mid' }
    const moderateHotel = makeHotel({ luxury: 3, budgets: ['mid'] })
    expect(scoreHotel(luxuryHotel, midAnswers)).toBeLessThan(scoreHotel(moderateHotel, midAnswers))
  })

  test('priority matches (beach, spa, golf-focused, privacy) each add score when the hotel has the feature', () => {
    const beachHotel = makeHotel({ beach: true })
    const noBeachHotel = makeHotel({ beach: false })
    const beachAnswers = { ...baseAnswers, priority: ['beach'] }
    expect(scoreHotel(beachHotel, beachAnswers)).toBeGreaterThan(scoreHotel(noBeachHotel, beachAnswers))

    const golfHotel = makeHotel({ golfProximity: 3 })
    const farHotel = makeHotel({ golfProximity: 1 })
    const golfAnswers = { ...baseAnswers, priority: ['golf-focused'] }
    expect(scoreHotel(golfHotel, golfAnswers)).toBeGreaterThan(scoreHotel(farHotel, golfAnswers))

    const privacyVilla = makeHotel({ type: 'villa', styles: ['villa'] })
    const privacyHotel = makeHotel({ type: 'hotel' })
    const privacyAnswers = { ...baseAnswers, style: 'villa', priority: ['privacy'] }
    expect(scoreHotel(privacyVilla, privacyAnswers)).toBeGreaterThan(scoreHotel(privacyHotel, privacyAnswers))
  })

  test('northwest area hotels are penalised when golf-focused is a priority', () => {
    const northwestHotel = makeHotel({ area: 'northwest' })
    const answers = { ...baseAnswers, area: 'northwest', priority: ['golf-focused'] }
    const northwestNoPriority = scoreHotel(northwestHotel, { ...baseAnswers, area: 'northwest', priority: [] })
    const northwestWithPriority = scoreHotel(northwestHotel, answers)
    expect(northwestWithPriority).toBeLessThan(northwestNoPriority)
  })

  test('flexible budget always adds a small flat bonus', () => {
    const hotel = makeHotel({ budgets: ['premium'] }) // doesn't include 'flexible'
    const flexibleAnswers = { ...baseAnswers, budget: 'flexible' }
    const midAnswers = { ...baseAnswers, budget: 'mid' } // also not in hotel.budgets, no flexible bonus
    expect(scoreHotel(hotel, flexibleAnswers)).toBeGreaterThan(scoreHotel(hotel, midAnswers))
  })
})

describe('pillClass', () => {
  test('maps known pill text to the right CSS class, case-insensitively', () => {
    expect(pillClass('Beach nearby')).toBe('pill--beach')
    expect(pillClass('Spa & Wellness')).toBe('pill--spa')
    expect(pillClass('On course')).toBe('pill--golf')
    expect(pillClass('Golf focused')).toBe('pill--golf')
    expect(pillClass('Adults only')).toBe('pill--adults')
    expect(pillClass('Family friendly')).toBe('pill--family')
  })

  test('returns an empty string for unrecognised pill text', () => {
    expect(pillClass('Michelin dining')).toBe('')
  })
})

describe('HOTELS data sanity', () => {
  test('every hotel has the fields scoreHotel depends on', () => {
    for (const h of HOTELS) {
      expect(h.area).toBeTruthy()
      expect(Array.isArray(h.groups)).toBe(true)
      expect(Array.isArray(h.sizes)).toBe(true)
      expect(Array.isArray(h.styles)).toBe(true)
      expect(Array.isArray(h.budgets)).toBe(true)
      expect(Array.isArray(h.priority)).toBe(true)
    }
  })

  test('scoreHotel never throws for any real hotel against a plausible answer set', () => {
    for (const h of HOTELS) {
      expect(() => scoreHotel(h, { ...baseAnswers, area: h.area })).not.toThrow()
    }
  })
})
