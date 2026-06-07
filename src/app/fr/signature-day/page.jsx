import LocalizedSignatureDayPage from '../../../components/LocalizedSignatureDayPage'
import { buildSignatureDayMetadata, getSignatureDayContent } from '../../../lib/signature-day-content'

export const metadata = buildSignatureDayMetadata('fr')

export default function FRSignatureDayPage() {
  return <LocalizedSignatureDayPage locale="fr" content={getSignatureDayContent('fr')} />
}
