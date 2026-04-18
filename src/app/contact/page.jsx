import HomeNav from '../../components/HomeNav'
import HomeFooter from '../../components/HomeFooter'
import ContactForm from './ContactForm'
import { buildContactMetadata } from '../../lib/page-metadata'

export const metadata = buildContactMetadata('en')

export default function Contact() {
  return (
    <>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <HomeNav lang="en" solid basePath="/contact" />
      <main>
        <ContactForm />
      </main>
      <HomeFooter lang="en" basePath="/contact" />
    </>
  )
}


