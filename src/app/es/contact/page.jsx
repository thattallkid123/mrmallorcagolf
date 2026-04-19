import PageLayout from '../../../components/PageLayout'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('es')

export default function Contact_ES() {
  return (
    <PageLayout lang="es" navTransparent={false}>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <ContactForm locale="es" />
    </PageLayout>
  )
}
