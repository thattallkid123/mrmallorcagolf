import { buildAboutMetadata } from '../../../lib/page-metadata'
import { getAboutContent } from '../../../lib/about-content'
import AboutView from '../../about/AboutView'

export const metadata = buildAboutMetadata('nl')

export default function AboutNL() {
  return <AboutView content={getAboutContent('nl')} locale="nl" />
}
