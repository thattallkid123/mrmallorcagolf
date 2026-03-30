import PageLayout from '../../../components/PageLayout'
import ContactFormDE from './ContactFormDE'
import { buildContactMetadata } from '../../../lib/page-metadata'

export const metadata = buildContactMetadata('de')

export default function ContactDE() {
  return (
    <PageLayout lang="de" navTransparent={false}>
      <ContactFormDE />
    </PageLayout>
  )
}

