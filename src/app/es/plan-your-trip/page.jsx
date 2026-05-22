import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('es')

export default function PlanYourTripES() {
  return (
    <PageLayout lang="es" navTransparent={false}>
      <PlanYourTripView locale="es" content={getPlanYourTripContent('es')} />
    </PageLayout>
  )
}
