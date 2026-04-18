import HomeNav from '../../../components/HomeNav'
import HomeFooter from '../../../components/HomeFooter'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('sv')

export default function Contact_SV() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="sv" solid basePath="/contact" />
      <main>
        <ContactForm locale="sv" />
      </main>
      <HomeFooter lang="sv" basePath="/contact" />
    </>
  )
}
