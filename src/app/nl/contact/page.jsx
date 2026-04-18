import HomeNav from '../../../components/HomeNav'
import HomeFooter from '../../../components/HomeFooter'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('nl')

export default function Contact_NL() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="nl" solid basePath="/contact" />
      <main>
        <ContactForm locale="nl" />
      </main>
      <HomeFooter lang="nl" basePath="/contact" />
    </>
  )
}
