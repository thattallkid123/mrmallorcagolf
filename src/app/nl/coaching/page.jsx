import { buildCoachingMetadata } from '../../../lib/page-metadata'
import { getCoachingContent } from '../../../lib/coaching-content'
import CoachingView from '../../coaching/CoachingView'

export const metadata = buildCoachingMetadata('nl')

export default function CoachingNL() {
  return <CoachingView locale="nl" content={getCoachingContent('nl')} />
}
