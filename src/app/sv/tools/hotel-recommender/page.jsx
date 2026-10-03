export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'sv', {

  title: 'Var bör du stanna för din golfresa?',
  description: 'Sex frågor. En personlig lista anpassad till din golfitinerär.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'
import hotelData from '../../../../lib/tool-data/hotel-recommender.sv'

export default function HotelRecommenderToolSV() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="sv" localData={hotelData} />
    </PageLayout>
  )
}
