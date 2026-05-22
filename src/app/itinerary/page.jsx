import PageLayout from '../../components/PageLayout'
import { buildItineraryMetadata } from '../../lib/page-metadata'
import ItineraryPlanner from './ItineraryPlanner'

export const metadata = buildItineraryMetadata()

export default function ItineraryPage() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <ItineraryPlanner />
    </PageLayout>
  )
}
