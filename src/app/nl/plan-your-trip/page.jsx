import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('nl')

export default function PlanYourTripNL() {
  return (
    <PageLayout lang="nl" navTransparent={false}>
      <PlanYourTripView locale="nl" content={getPlanYourTripContent('nl')} />
    </PageLayout>
  )
}
