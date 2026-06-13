import PageLayout from '../../../../components/PageLayout'
import LeadMagnetPage from '../../../../components/LeadMagnetPage'
import { LEAD_MAGNETS } from '../../../../lib/signup-config'
import { buildPageMetadata } from '../../../../lib/page-metadata'

const guide = LEAD_MAGNETS['beginners-guide']

export const metadata = buildPageMetadata('/guides/beginners-guide', 'en', {
  title: guide.metaTitle,
  description: guide.metaDescription,
})

export default function BeginnersGuidePage() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <LeadMagnetPage guide={guide} />
    </PageLayout>
  )
}
