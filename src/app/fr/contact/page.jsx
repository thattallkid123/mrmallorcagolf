import PageLayout from '../../../components/PageLayout'
import ContactForm_FR from './ContactForm_FR'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('fr')

export default function Contact_FR() {
  return (
    <PageLayout lang="fr" navTransparent={false}>
      <ContactForm_FR />
    </PageLayout>
  )
}

