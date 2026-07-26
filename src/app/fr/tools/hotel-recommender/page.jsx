export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'fr', {

  title: 'Où devriez-vous rester pour votre voyage au golf?',
  description: 'Six questions. Une liste personnalisée adaptée à votre itinéraire de golf.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolFR() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="fr" />
    </PageLayout>
  )
}
