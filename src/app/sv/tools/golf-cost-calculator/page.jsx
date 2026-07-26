export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-cost-calculator', 'sv', {

  title: 'Mallorca golfresa kostnadskalkylator',
  description: 'Tre steg. En kostnadsuppskattning för din resa med föreslagna banor.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from '../../../(en)/tools/golf-cost-calculator/GolfCostCalculatorClient'

export default function GolfCostCalculatorToolSV() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient lang="sv" />
    </PageLayout>
  )
}
