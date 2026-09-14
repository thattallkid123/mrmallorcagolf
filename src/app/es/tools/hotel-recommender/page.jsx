export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/hotel-recommender', 'es', {

  title: 'Recomendador de Hoteles Golf Mallorca',
  description: 'Seis preguntas. Una lista personalizada que se ajusta a tu itinerario de golf.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HotelRecommenderClient from '../../../(en)/hotel-recommender/HotelRecommenderClient'

export default function HotelRecommenderToolES() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient lang="es" />
    </PageLayout>
  )
}
