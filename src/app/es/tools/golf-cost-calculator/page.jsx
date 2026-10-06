export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-cost-calculator', 'es', {

  title: 'Calculadora de Costos de Golf Mallorca',
  description: 'Cuatro pasos. Una estimación de costos para su viaje con una mezcla de campos sugerida.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from '../../../(en)/tools/golf-cost-calculator/GolfCostCalculatorClient'

export default function GolfCostCalculatorToolES() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient lang="es" />
    </PageLayout>
  )
}
