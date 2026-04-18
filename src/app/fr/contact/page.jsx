import HomeNav from '../../../components/HomeNav'
import HomeFooter from '../../../components/HomeFooter'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('fr')

export default function Contact_FR() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="fr" solid basePath="/contact" />
      <main>
        <ContactForm locale="fr" />
      </main>
      <HomeFooter lang="fr" basePath="/contact" />
    </>
  )
}
