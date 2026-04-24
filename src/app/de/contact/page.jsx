import PageLayout from '../../../components/PageLayout'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('de')

export default function ContactDE() {
  return (
    <PageLayout lang="de" navTransparent={false}>
      <ContactForm locale="de" />
    </PageLayout>
  )
}
