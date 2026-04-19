import PageLayout from '../../components/PageLayout'
import ContactForm from './ContactForm'
import { buildContactMetadata } from '../../lib/page-metadata'

export const metadata = buildContactMetadata('en')

export default function Contact() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <ContactForm />
    </PageLayout>
  )
}
