import PageLayout from '../../../components/PageLayout'
import ContactForm_ES from './ContactForm_ES'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('es')

export default function Contact_ES() {
  return (
    <PageLayout lang="es" navTransparent={false}>
      <ContactForm_ES />
    </PageLayout>
  )
}

