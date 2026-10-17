import { describe, expect, test } from 'vitest'
import { HOTELS, QUESTIONS_DATA, rankHotels } from '../../src/lib/hotel-recommender-logic'
import { TOOL_RECOVERY_T } from '../../src/lib/tool-recovery-content'

describe('hotel result recovery', () => {
  test('every questionnaire combination returns hotels or can recover by editing only the offered preferences', () => {
    const questions = QUESTIONS_DATA.filter(q => !q.multi)
    const priority = QUESTIONS_DATA.find(q => q.multi).opts.map(o => o.val)
    let checked = 0
    let empty = 0
    function visit(index, answers) {
      if (index < questions.length) {
        for (const option of questions[index].opts) visit(index + 1, { ...answers, [questions[index].key]: option.val })
        return
      }
      for (let mask = 0; mask < 32; mask++) {
        const a = { ...answers, priority: priority.filter((_, i) => mask & (1 << i)) }
        checked++
        const hotels = rankHotels(HOTELS, a)
        if (hotels.length) {
          if (hotels.some(item => item.hotel.area !== a.area || item.score <= 0)) throw Error('Ranking changed a preference or returned a non-match')
        } else {
          empty++
          const offered = questions.filter(q => ['area','style','budget'].includes(q.key))
          function canRecover(current, start = 0) {
            if (rankHotels(HOTELS, current).length) return true
            for (let i = start; i < offered.length; i++) {
              if (offered[i].opts.some(o => o.val !== current[offered[i].key] && canRecover({ ...current, [offered[i].key]: o.val }, i + 1))) return true
            }
            return false
          }
          const recoverable = canRecover(a)
          expect(recoverable, JSON.stringify(a)).toBe(true)
        }
      }
    }
    visit(0, {})
    expect(checked).toBe(64000)
    expect(empty).toBeGreaterThan(0)
  }, 60000)

  test('an empty catalogue stays empty rather than manufacturing a hotel match', () => {
    expect(rankHotels([], {area:'palma'})).toEqual([])
  })

  test('every recovery instruction exists in all seven languages', () => {
    for (const lang of ['en','de','es','fr','nl','sv','zh']) {
      expect(Object.keys(TOOL_RECOVERY_T[lang])).toEqual(Object.keys(TOOL_RECOVERY_T.en))
      expect(Object.values(TOOL_RECOVERY_T[lang]).every(v=>typeof v==='string' && v.length>0)).toBe(true)
    }
  })
})
