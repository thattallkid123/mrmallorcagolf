export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca-Golfhotel-Empfehlung',
  description: 'Sechs Fragen. Eine personalisierte Shortlist, die Ihrem Golfplan entspricht.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolDE() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="de" />
    </PageLayout>
  )
}
