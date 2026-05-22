import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('sv')

export default function PlanYourTripSV() {
  return (
    <PageLayout lang="sv" navTransparent={false}>
      <PlanYourTripView locale="sv" content={getPlanYourTripContent('sv')} />
    </PageLayout>
  )
}
