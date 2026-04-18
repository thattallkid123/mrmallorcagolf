import HomeNav from '../../../components/HomeNav'
import HomeFooter from '../../../components/HomeFooter'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('es')

export default function Contact_ES() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="es" solid basePath="/contact" />
      <main>
        <ContactForm locale="es" />
      </main>
      <HomeFooter lang="es" basePath="/contact" />
    </>
  )
}
