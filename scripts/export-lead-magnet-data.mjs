import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { CANONICAL_COURSE_DATA } from '../src/lib/course-catalog.js'
import { getCoursePricingByName } from '../src/lib/course-pricing-data.js'
import { findCourseByName } from '../src/lib/golf-courses-helpers.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
// This generated module's list is JSON, even though its lookup helpers are JS.
const logisticsSource = readFileSync(resolve(root, 'src/lib/course-logistics-data.js'), 'utf8')
const listStart = logisticsSource.indexOf('[', logisticsSource.indexOf('export const COURSE_LOGISTICS_LIST'))
const listEnd = logisticsSource.indexOf('\n]', listStart) + 2
const logistics = JSON.parse(logisticsSource.slice(listStart, listEnd).replace(/,\s*]$/, ']'))

export function getLeadMagnetData() {
  const courses = CANONICAL_COURSE_DATA.map(course => {
    const price = getCoursePricingByName(course.canonicalName)
    const travel = logistics.find(row => row.name === course.canonicalName)
    const publicRate = course.access?.accessType === 'public'
    return {
      name: course.publicName, canonicalName: course.canonicalName,
      holes: course.holeCount, par: course.par,
      low: publicRate ? price?.low : null, peak: publicRate ? price?.peak : null,
      dynamic: publicRate && Boolean(price?.dynamic), feeMode: price?.feeMode || '',
      licence: publicRate ? price?.licenceFee || 0 : null,
      buggy: publicRate ? travel?.buggy : null, buggyIncludedAtPeak: publicRate && Boolean(travel?.buggyIncl),
      walk: travel?.walkAllowed === true ? 'Yes' : 'Buggy required / restricted',
      fromPalma: travel?.travelFromPalmaMinutes || null,
      access: course.access?.accessType === 'members_arranged' ? 'Member arrangement' : course.access?.accessType === 'hotel_guests' ? 'Hotel guests only' : 'Public',
      certificate: Boolean(course.access?.certificateRequired),
      handicap: course.access?.handicapRequired ? `M ${course.access.handicapMen} / W ${course.access.handicapWomen}` : 'No handicap limit',
      difficulty: findCourseByName(course.canonicalName)?.diffScore || '-',
      note: findCourseByName(course.canonicalName)?.footer || '',
    }
  })
  const data = { reviewed: '16 October 2026', courses }
  return { ...data, fingerprint: createHash('sha256').update(JSON.stringify(data)).digest('hex') }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) console.log(JSON.stringify(getLeadMagnetData()))
