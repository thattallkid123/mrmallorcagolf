export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Compare Mallorca Golf Courses — All 24, Fees, Par & Difficulty',
  description: 'Compare all 24 Mallorca golf courses: green fees, buggy costs, walking rules, par, difficulty and handicap limits. Browse the full table or put two or three head to head.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from './GreenFeesClient'

export default function GreenFeesTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient />
    </PageLayout>
  )
}
