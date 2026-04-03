import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import { getGuidesContent } from '../../../lib/guides-content'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('nl')

export default function GuidesIndexNL() {
  return <GuidesIndexView locale="nl" pageLang="nl" content={getGuidesContent('nl')} />
}
