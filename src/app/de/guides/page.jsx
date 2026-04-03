import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import { getGuidesContent } from '../../../lib/guides-content'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('de')

export default function GuidesIndexDE() {
  return <GuidesIndexView locale="de" pageLang="de" content={getGuidesContent('de')} />
}
