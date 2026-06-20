export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Find Your Mallorca Golf Course',
  description: 'Five questions. A shortlist matched to your handicap, budget, and what you want from a round.',
  robots: { index: false, follow: false },
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
