import { describe, expect, test } from 'vitest'
import { COURSES, scoreAllCourses } from '../../src/lib/golf-day-builder-logic'
import { buildItineraries } from '../../src/lib/golf-day-planner'
import { getCanonicalCourseDataByName } from '../../src/lib/course-catalog'

const answers = { region:'palma', dayStyle:'relaxed', level:'casual', handicap:'low', start:'pm', courseType:'close', addons:['village'], transport:'no', group:'vip' }

describe('golf day planning rules', () => {
  test('the reported VIP example gets a full public course across every day option', () => {
    const plans = buildItineraries(answers)
    expect(plans).toHaveLength(3)
    expect(new Set(plans.map(p => p.course.id)).size).toBe(1)
    expect(plans.some(p => p.course.id === 'palma-pitch-putt')).toBe(false)
    expect(plans.every(p => getCanonicalCourseDataByName(p.course.name).holeCount === 18)).toBe(true)
  })

  test('member and hotel courses cannot enter an automatic plan', () => {
    for (const region of ['southwest','palma','north','east','south','unbooked']) {
      for (const level of ['beginner','casual','confident','low']) {
        const ranked = scoreAllCourses({...answers, region, level, courseType:'forgiving'})
        expect(ranked.every(p => getCanonicalCourseDataByName(p.c.name).access.accessType === 'public')).toBe(true)
      }
    }
  })

  test('37–54 handicaps are not recommended courses whose limit is 36 or below', () => {
    const ranked = scoreAllCourses({...answers, handicap:'high', region:'unbooked', courseType:'scenic'})
    expect(ranked.length).toBeGreaterThan(0)
    expect(ranked.every(p => {
      const a = getCanonicalCourseDataByName(p.c.name).access
      return !a.handicapRequired || (a.handicapMen >= 54 && a.handicapWomen >= 54)
    })).toBe(true)
  })

  test('missing and uncertain certificates never unlock a restricted course', () => {
    for (const handicap of ['none','unknown',undefined]) {
      const ranked = scoreAllCourses({...answers, handicap, addons:['coaching'], courseType:'forgiving'})
      expect(ranked.every(p => !getCanonicalCourseDataByName(p.c.name).access.handicapRequired)).toBe(true)
    }
  })

  test('a beginner introduction stays short and has no full-experience plan', () => {
    const plans = buildItineraries({...answers, level:'beginner', handicap:'none', addons:[]})
    expect(plans).toHaveLength(2)
    expect(plans.every(p => p.course.id === 'palma-pitch-putt')).toBe(true)
    expect(plans.some(p => p.key === 'experience')).toBe(false)
  })

  test('no eligible local course produces a handoff, not fabricated access', () => {
    expect(buildItineraries({...answers,region:'north',level:'beginner',handicap:'none'})).toEqual([])
  })

  test('VIP preference affects the eligible ranking', () => {
    const vip = scoreAllCourses(answers)[0].c
    const solo = scoreAllCourses({...answers,group:'solo'})[0].c
    expect(vip.tags).toContain('luxury')
    expect(vip.id).not.toBe(solo.id)
  })

  test('an afternoon plan puts lunch and extras before golf, and returns afterwards', () => {
    for (const plan of buildItineraries(answers)) {
      const golf = plan.steps.findIndex(s => s.title.startsWith('18 holes'))
      const lunch = plan.steps.findIndex(s => s.title === 'Suggested lunch')
      expect(golf).toBeGreaterThan(0)
      if (lunch >= 0) expect(lunch).toBeLessThan(golf)
      expect(plan.steps.at(-1).title).toBe('Return')
      expect(plan.steps.at(-1).time).not.toMatch(/early afternoon/i)
      expect(plan.note).toMatch(/daylight/i)
    }
  })

  test('morning plans put lunch after golf', () => {
    for (const plan of buildItineraries({...answers,start:'early'})) {
      const golf = plan.steps.findIndex(s => s.title.startsWith('18 holes'))
      const lunch = plan.steps.findIndex(s => s.title === 'Suggested lunch')
      if (lunch >= 0) expect(lunch).toBeGreaterThan(golf)
    }
  })

  test('plans cannot invent a hotel journey or claim an existing reservation', () => {
    for (const plan of buildItineraries(answers)) {
      expect(plan).not.toHaveProperty('drive')
      const text = plan.steps.map(s => `${s.title} ${s.desc}`).join(' ')
      expect(text).not.toMatch(/\d+ minutes|table is booked|sit straight down|closest quality/i)
      if (plan.key !== 'efficient') expect(text).toMatch(/local travel partner/i)
    }
  })

  test('no extra selections means two useful options, without a duplicate third plan', () => {
    expect(buildItineraries({...answers,addons:[]}).map(p => p.key)).toEqual(['efficient','lunch'])
  })

  test('all displayed round lengths come from the confirmed scorecards', () => {
    const publicCourses = COURSES.filter(c => getCanonicalCourseDataByName(c.name)?.access.accessType === 'public')
    expect(publicCourses.length).toBeGreaterThan(15)
    for (const start of ['early','mid','pm']) for (const handicap of ['low','mid','high','none','unknown']) {
      for (const plan of buildItineraries({...answers,region:'unbooked',courseType:'scenic',start,handicap,level:'beginner'})) {
        const holes = getCanonicalCourseDataByName(plan.course.name).holeCount
        expect(plan.steps.some(s => s.title.startsWith(`${holes} holes`))).toBe(true)
      }
    }
  })
})
