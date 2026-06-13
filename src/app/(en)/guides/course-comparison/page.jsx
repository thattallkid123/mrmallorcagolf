import PageLayout from '../../../../components/PageLayout'
import LeadMagnetPage from '../../../../components/LeadMagnetPage'
import { LEAD_MAGNETS } from '../../../../lib/signup-config'
import { buildPageMetadata } from '../../../../lib/page-metadata'

const guide = LEAD_MAGNETS['course-comparison']

export const metadata = buildPageMetadata('/guides/course-comparison', 'en', {
  title: guide.metaTitle,
  description: guide.metaDescription,
})

export default function CourseComparisonPage() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <LeadMagnetPage guide={guide} />
    </PageLayout>
  )
}
