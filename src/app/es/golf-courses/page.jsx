import { buildGolfCoursesMetadata } from '../../../lib/page-metadata'
import { getGolfCoursesContent } from '../../../lib/golf-courses-content'
import GolfCoursesView from '../../golf-courses/GolfCoursesView'

export const metadata = buildGolfCoursesMetadata('es')

export default function GolfCourses() {
  return <GolfCoursesView locale="es" content={getGolfCoursesContent('es')} />
}
