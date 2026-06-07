import LocalizedSignatureDayPage from '../../../components/LocalizedSignatureDayPage'
import { buildSignatureDayMetadata, getSignatureDayContent } from '../../../lib/signature-day-content'

export const metadata = buildSignatureDayMetadata('es')

export default function ESSignatureDayPage() {
  return <LocalizedSignatureDayPage locale="es" content={getSignatureDayContent('es')} />
}
