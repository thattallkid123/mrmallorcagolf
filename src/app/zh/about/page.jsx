import { buildAboutMetadata } from '../../../lib/page-metadata'
import { getAboutContent } from '../../../lib/about-content'
import AboutView from '../../about/AboutView'

export const metadata = buildAboutMetadata('zh')

export default function AboutZH() {
  return <AboutView content={getAboutContent('zh')} locale="zh" />
}
