import { buildAboutMetadata } from '../../lib/page-metadata'
import { getAboutContent } from '../../lib/about-content'
import AboutView from './AboutView'

export const metadata = buildAboutMetadata('en')

export default function About() {
  const content = getAboutContent('en')
  return <AboutView content={content} locale="en" />
}
