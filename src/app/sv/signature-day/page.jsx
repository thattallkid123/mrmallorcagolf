import LocalizedSignatureDayPage from '../../../components/LocalizedSignatureDayPage'
import { buildSignatureDayMetadata, getSignatureDayContent } from '../../../lib/signature-day-content'

export const metadata = buildSignatureDayMetadata('sv')

export default function SVSignatureDayPage() {
  return <LocalizedSignatureDayPage locale="sv" content={getSignatureDayContent('sv')} />
}
