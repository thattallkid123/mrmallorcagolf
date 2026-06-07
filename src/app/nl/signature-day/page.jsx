import LocalizedSignatureDayPage from '../../../components/LocalizedSignatureDayPage'
import { buildSignatureDayMetadata, getSignatureDayContent } from '../../../lib/signature-day-content'

export const metadata = buildSignatureDayMetadata('nl')

export default function NLSignatureDayPage() {
  return <LocalizedSignatureDayPage locale="nl" content={getSignatureDayContent('nl')} />
}
