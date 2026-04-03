import { buildAboutMetadata } from '../../../lib/page-metadata'
import { getAboutContent } from '../../../lib/about-content'
import AboutView from '../../about/AboutView'

export const metadata = buildAboutMetadata('sv')

export default function AboutSV() {
  return <AboutView content={getAboutContent('sv')} locale="sv" />
}
