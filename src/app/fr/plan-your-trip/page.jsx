import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('fr')

export default function PlanYourTripFR() {
  return (
    <PageLayout lang="fr" navTransparent={false}>
      <PlanYourTripView locale="fr" content={getPlanYourTripContent('fr')} />
    </PageLayout>
  )
}
