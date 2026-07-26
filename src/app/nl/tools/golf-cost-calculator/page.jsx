export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-cost-calculator', 'nl', {

  title: 'Mallorca golftrip kostencalculator',
  description: 'Drie stappen. Een kostenraming voor uw reis met een voorgestelde baanmix.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from '../../../(en)/tools/golf-cost-calculator/GolfCostCalculatorClient'

export default function GolfCostCalculatorToolNL() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient lang="nl" />
    </PageLayout>
  )
}
