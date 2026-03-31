import { buildAboutMetadata } from '../../../lib/page-metadata'
import { getAboutContent } from '../../../lib/about-content'
import AboutView from '../../about/AboutView'

export const metadata = buildAboutMetadata('fr')

export default function AboutFR() {
  return <AboutView content={getAboutContent('fr')} locale="fr" />
}
