import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import { getGuidesContent } from '../../../lib/guides-content'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('es')

export default function GuidesIndexES() {
  return <GuidesIndexView locale="es" pageLang="es" content={getGuidesContent('es')} />
}
