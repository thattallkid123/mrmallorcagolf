import { buildCoachingMetadata } from '../../lib/page-metadata'
import { getCoachingContent } from '../../lib/coaching-content'
import CoachingView from './CoachingView'

export const metadata = buildCoachingMetadata('en')

export default function Coaching() {
  return <CoachingView locale="en" content={getCoachingContent('en')} />
}
