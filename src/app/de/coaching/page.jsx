import { buildCoachingMetadata } from '../../../lib/page-metadata'
import { getCoachingContent } from '../../../lib/coaching-content'
import CoachingView from '../../coaching/CoachingView'

export const metadata = buildCoachingMetadata('de')

export default function CoachingDE() {
  return <CoachingView locale="de" content={getCoachingContent('de')} />
}
