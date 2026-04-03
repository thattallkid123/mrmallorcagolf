import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import { getGuidesContent } from '../../../lib/guides-content'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('sv')

export default function GuidesIndexSV() {
  return <GuidesIndexView locale="sv" pageLang="sv" content={getGuidesContent('sv')} />
}
