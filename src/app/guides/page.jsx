import { buildGuidesIndexMetadata } from '../../lib/page-metadata'
import { getGuidesContent } from '../../lib/guides-content'
import GuidesIndexView from './GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('en')

export default function GuidesIndex() {
  return <GuidesIndexView locale="en" content={getGuidesContent('en')} />
}
