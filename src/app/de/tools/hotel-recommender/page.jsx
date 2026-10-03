export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'de', {

  title: 'Mallorca-Golfhotel-Empfehlung',
  description: 'Sechs Fragen. Eine personalisierte Shortlist, die Ihrem Golfplan entspricht.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'
import hotelData from '../../../../lib/tool-data/hotel-recommender.de'

export default function HotelRecommenderToolDE() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="de" localData={hotelData} />
    </PageLayout>
  )
}
