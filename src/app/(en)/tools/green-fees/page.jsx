export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'en', {

  title: 'Compare Mallorca Golf Courses — All 24, Fees, Par & Difficulty',
  description: 'Compare all 24 Mallorca golf courses: green fees, buggy costs, walking rules, par, difficulty and handicap limits. Browse every course or build a head-to-head comparison of up to five.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from './GreenFeesClient'

export default function GreenFeesTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient />
    </PageLayout>
  )
}
