import { buildCoachingMetadata } from '../../../lib/page-metadata'
import { getCoachingContent } from '../../../lib/coaching-content'
import CoachingView from '../../coaching/CoachingView'

export const metadata = buildCoachingMetadata('fr')

export default function CoachingFR() {
  return <CoachingView locale="fr" content={getCoachingContent('fr')} />
}
