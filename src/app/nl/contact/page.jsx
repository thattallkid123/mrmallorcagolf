import PageLayout from '../../../components/PageLayout'
import ContactForm_NL from './ContactForm_NL'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('nl')

export default function Contact_NL() {
  return (
    <PageLayout lang="nl" navTransparent={false}>
      <ContactForm_NL />
    </PageLayout>
  )
}

