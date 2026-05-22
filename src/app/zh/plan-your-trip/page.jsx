import PageLayout from '../../../components/PageLayout'
import PlanYourTripView from '../../plan-your-trip/PlanYourTripView'
import { buildPlanYourTripMetadata } from '../../../lib/page-metadata'
import { getPlanYourTripContent } from '../../../lib/plan-your-trip-content'

export const metadata = buildPlanYourTripMetadata('zh')

export default function PlanYourTripZH() {
  return (
    <PageLayout lang="zh" navTransparent={false}>
      <PlanYourTripView locale="zh" content={getPlanYourTripContent('zh')} />
    </PageLayout>
  )
}
