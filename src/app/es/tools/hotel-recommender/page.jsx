export const dynamic = 'force-dynamic'

export const metadata = {
  title: '¿Dónde deberías quedarte para tu viaje de golf?',
  description: 'Seis preguntas. Una lista personalizada que se ajusta a tu itinerario de golf.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolES() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="es" />
    </PageLayout>
  )
}
