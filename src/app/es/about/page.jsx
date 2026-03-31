import { buildAboutMetadata } from '../../../lib/page-metadata'
import { getAboutContent } from '../../../lib/about-content'
import AboutView from '../../about/AboutView'

export const metadata = buildAboutMetadata('es')

export default function AboutES() {
  return <AboutView content={getAboutContent('es')} locale="es" />
}
