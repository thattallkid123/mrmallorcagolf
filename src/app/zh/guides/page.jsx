import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import { getGuidesContent } from '../../../lib/guides-content'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('zh')

export default function GuidesIndexZH() {
  return <GuidesIndexView locale="zh" pageLang="zh" content={getGuidesContent('zh')} />
}
