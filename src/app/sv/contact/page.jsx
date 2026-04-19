import PageLayout from '../../../components/PageLayout'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('sv')

export default function Contact_SV() {
  return (
    <PageLayout lang="sv" navTransparent={false}>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <ContactForm locale="sv" />
    </PageLayout>
  )
}
