export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/course-selector', 'en', {

  title: 'Find Your Mallorca Golf Course | Free Course Selector',
  description: 'A few quick questions. A personalised shortlist of Mallorca golf courses matched to your handicap, budget, group and style. Free, instant, no sign-up.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from './CourseSelectorToolClient'

export default function CourseSelectorTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient />
    </PageLayout>
  )
}
