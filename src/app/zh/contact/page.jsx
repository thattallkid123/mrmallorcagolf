import PageLayout from '../../../components/PageLayout'
import ContactForm_ZH from './ContactForm_ZH'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('zh')

export default function Contact_ZH() {
  return (
    <PageLayout lang="zh" navTransparent={false}>
      <ContactForm_ZH />
    </PageLayout>
  )
}

