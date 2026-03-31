import { buildCoachingMetadata } from '../../../lib/page-metadata'
import { getCoachingContent } from '../../../lib/coaching-content'
import CoachingView from '../../coaching/CoachingView'

export const metadata = buildCoachingMetadata('zh')

export default function CoachingZH() {
  return <CoachingView locale="zh" content={getCoachingContent('zh')} />
}
