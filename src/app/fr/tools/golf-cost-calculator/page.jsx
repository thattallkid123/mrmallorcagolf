export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-cost-calculator', 'fr', {

  title: 'Calculatrice de coûts de voyage au golf Mallorca',
  description: 'Trois étapes. Une estimation de coût pour votre voyage.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from '../../../(en)/tools/golf-cost-calculator/GolfCostCalculatorClient'

export default function GolfCostCalculatorToolFR() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient lang="fr" />
    </PageLayout>
  )
}
