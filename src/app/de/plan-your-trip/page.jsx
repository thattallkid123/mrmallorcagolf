import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('de')

export default function PlanYourTripDE() {
  return (
    <PageLayout lang="de" navTransparent={false}>
      <PlanYourTripView locale="de" content={getPlanYourTripContent('de')} />
    </PageLayout>
  )
}
