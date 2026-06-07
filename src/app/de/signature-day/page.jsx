import LocalizedSignatureDayPage from '../../../components/LocalizedSignatureDayPage'
import { buildSignatureDayMetadata, getSignatureDayContent } from '../../../lib/signature-day-content'

export const metadata = buildSignatureDayMetadata('de')

export default function DESignatureDayPage() {
  return <LocalizedSignatureDayPage locale="de" content={getSignatureDayContent('de')} />
}
