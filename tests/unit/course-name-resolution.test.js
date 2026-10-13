import { describe, expect, test } from 'vitest'
import { findCourseByName, getCourseReviewSlug } from '../../src/lib/golf-courses-helpers'
import { getScorecardByCourseName } from '../../src/lib/scorecard-data'
import fs from 'node:fs'
import path from 'node:path'

describe('comparison course identity', () => {
  test.each(['T Golf Palma Puntiró','T Golf Palma (Puntiró)','T Golf Palma Puntiro','T Golf Palma (Puntiro)'])('%s resolves to the same photographed course and scorecard', name => {
    const course = findCourseByName(name)
    expect(course?.name).toBe('T Golf Palma (Puntiró)')
    expect(course?.img).toBe('/images/courses/t-golf-palma.jpg')
    expect(fs.existsSync(path.join(process.cwd(),'public',course.img))).toBe(true)
    expect(getScorecardByCourseName(course.name).par).toBe(71)
    expect(course.diffScore).toBe('7/10')
    expect(getCourseReviewSlug(name)).toBe('t-golf-palma-review')
  })
})
