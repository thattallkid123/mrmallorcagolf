export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Find Your Mallorca Golf Course | Free Course Selector',
  description: 'Eight questions. A personalised shortlist of Mallorca golf courses matched to your handicap, budget, group and style. Free, instant, no sign-up.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from './CourseSelectorToolClient'

export default function CourseSelectorTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient />
    </PageLayout>
  )
}
