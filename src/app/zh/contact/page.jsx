import PageLayout from '../../../components/PageLayout'
import ContactForm from '../../contact/ContactForm'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('zh')

export default function Contact_ZH() {
  return (
    <PageLayout lang="zh" navTransparent={false}>
      <link rel="preload" as="image" href="/images/contact.webp" />
      <ContactForm locale="zh" />
    </PageLayout>
  )
}
