import PageLayout from '../../../components/PageLayout'
import ContactForm_SV from './ContactForm_SV'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('sv')

export default function Contact_SV() {
  return (
    <PageLayout lang="sv" navTransparent={false}>
      <ContactForm_SV />
    </PageLayout>
  )
}

