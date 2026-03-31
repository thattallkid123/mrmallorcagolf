import PageLayout from '../../../components/PageLayout'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('fr')

export default function Contact_FR() {
  return (
    <PageLayout lang="fr" navTransparent={false}>
      <ContactForm locale="fr" />
    </PageLayout>
  )
}
