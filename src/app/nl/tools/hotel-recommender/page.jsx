export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'nl', {

  title: 'Waar zou je moeten verblijven voor je golftrip?',
  description: 'Zes vragen. Een gepersonaliseerde shortlist die aansluit bij je golfroute.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolNL() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="nl" />
    </PageLayout>
  )
}
