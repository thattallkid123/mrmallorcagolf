import { buildGolfCoursesMetadata } from '../../lib/page-metadata'
import { getGolfCoursesContent } from '../../lib/golf-courses-content'
import GolfCoursesView from './GolfCoursesView'

export const metadata = buildGolfCoursesMetadata('en')

export default function GolfCourses() {
  return <GolfCoursesView locale="en" content={getGolfCoursesContent('en')} />
}
