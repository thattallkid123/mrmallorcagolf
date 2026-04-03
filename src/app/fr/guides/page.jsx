import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import { getGuidesContent } from '../../../lib/guides-content'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('fr')

export default function GuidesIndexFR() {
  return <GuidesIndexView locale="fr" pageLang="fr" content={getGuidesContent('fr')} />
}
