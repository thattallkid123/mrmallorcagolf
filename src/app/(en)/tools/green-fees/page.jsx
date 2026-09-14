export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'en', {

  title: 'Compare 24 Courses - Fees & Difficulty',
  description: 'Compare all 24 Mallorca golf courses: green fees, buggy costs, par, difficulty and handicap limits side by side.',
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
