export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Où devriez-vous rester pour votre voyage au golf?',
  description: 'Six questions. Une liste personnalisée adaptée à votre itinéraire de golf.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolFR() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="fr" />
    </PageLayout>
  )
}
