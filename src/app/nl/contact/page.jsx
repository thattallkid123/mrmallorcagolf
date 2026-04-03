import PageLayout from '../../../components/PageLayout'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('nl')

export default function Contact_NL() {
  return (
    <PageLayout lang="nl" navTransparent={false}>
      <ContactForm locale="nl" />
    </PageLayout>
  )
}
