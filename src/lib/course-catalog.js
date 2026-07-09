import {
  formatCourseAccessRequirement,
  getCourseAccessByName,
  getCourseAccessTypeLabel,
} from './course-access-data.js'
import {
  findCourseByName,
  getCourseShortName,
  getShortCourseId,
} from './golf-courses-helpers.js'
import { SCORECARD_DATA } from './scorecard-data.js'

function compareByPublicName(a, b) {
  return a.publicName.localeCompare(b.publicName, 'en', { sensitivity: 'base' })
}

export const CANONICAL_COURSE_DATA = Object.entries(SCORECARD_DATA)
  .map(([canonicalName, scorecard]) => {
    const siteCourse = findCourseByName(canonicalName)
    const access = getCourseAccessByName(canonicalName)

    return {
      canonicalName,
      publicName: getCourseShortName(canonicalName),
      shortId: getShortCourseId(canonicalName),
      location: siteCourse?.location || 'Mallorca',
      summary: siteCourse?.text || 'Mallorca course entry sourced from the scorecard master.',
      footer: siteCourse?.footer || 'Official course data',
      reviewSlug: siteCourse?.reviewSlug || null,
      par: scorecard.par,
      holeCount: scorecard.holes.length,
      scorecard,
      access: access
        ? {
            ...access,
            requirementLabel: formatCourseAccessRequirement(access),
            accessTypeLabel: getCourseAccessTypeLabel(access),
          }
        : null,
    }
  })
  .sort(compareByPublicName)

export const CANONICAL_COURSE_DATA_BY_NAME = Object.fromEntries(
  CANONICAL_COURSE_DATA.map((course) => [course.canonicalName, course])
)

export function getCanonicalCourseDataByName(name) {
  return CANONICAL_COURSE_DATA_BY_NAME[name] || null
}
