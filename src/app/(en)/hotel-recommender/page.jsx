import PageLayout from '../../../components/PageLayout'
import HotelRecommenderClient from './HotelRecommenderClient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca Golf Hotel Recommender',
  description: 'Six questions. A personalised shortlist of hotels and villas matched to your golf itinerary, group, and style.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function HotelRecommender() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <HotelRecommenderClient />
    </PageLayout>
  )
}
