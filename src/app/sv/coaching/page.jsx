import { buildCoachingMetadata } from '../../../lib/page-metadata'
import { getCoachingContent } from '../../../lib/coaching-content'
import CoachingView from '../../coaching/CoachingView'

export const metadata = buildCoachingMetadata('sv')

export default function CoachingSV() {
  return <CoachingView locale="sv" content={getCoachingContent('sv')} />
}
