import { buildCoachingMetadata } from '../../../lib/page-metadata'
import { getCoachingContent } from '../../../lib/coaching-content'
import CoachingView from '../../coaching/CoachingView'

export const metadata = buildCoachingMetadata('es')

export default function CoachingES() {
  return <CoachingView locale="es" content={getCoachingContent('es')} />
}
