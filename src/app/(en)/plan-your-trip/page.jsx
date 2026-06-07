import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('en')

export default function PlanYourTripPage() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <PlanYourTripView locale="en" content={getPlanYourTripContent('en')} />
    </PageLayout>
  )
}
