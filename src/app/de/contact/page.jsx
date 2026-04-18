import HomeNav from '../../../components/HomeNav'
import HomeFooter from '../../../components/HomeFooter'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('de')

export default function ContactDE() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="de" solid basePath="/contact" />
      <main>
        <ContactForm locale="de" />
      </main>
      <HomeFooter lang="de" basePath="/contact" />
    </>
  )
}
