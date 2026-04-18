import HomeNav from '../../../components/HomeNav'
import HomeFooter from '../../../components/HomeFooter'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('zh')

export default function Contact_ZH() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="zh" solid basePath="/contact" />
      <main>
        <ContactForm locale="zh" />
      </main>
      <HomeFooter lang="zh" basePath="/contact" />
    </>
  )
}
