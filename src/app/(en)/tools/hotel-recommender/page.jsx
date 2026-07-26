export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'en', {

  title: 'Mallorca Golf Hotel Recommender',
  description: 'Six questions. A personalised hotel shortlist matched to your golf trip.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient />
    </PageLayout>
  )
}
