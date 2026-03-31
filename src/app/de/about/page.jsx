import { buildAboutMetadata } from '../../../lib/page-metadata'
import { getAboutContent } from '../../../lib/about-content'
import AboutView from '../../about/AboutView'

export const metadata = buildAboutMetadata('de')

export default function AboutDE() {
  return <AboutView content={getAboutContent('de')} locale="de" />
}
