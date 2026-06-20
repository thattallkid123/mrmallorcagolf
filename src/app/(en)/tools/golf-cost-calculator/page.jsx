export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca Golf Trip Cost Calculator',
  description: 'Three steps. A cost estimate for your trip with a suggested course mix.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from './GolfCostCalculatorClient'

export default function GolfCostCalculatorTool() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient />
    </PageLayout>
  )
}
