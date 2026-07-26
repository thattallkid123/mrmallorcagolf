export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-cost-calculator', 'de', {

  title: 'Mallorca-Golftrip-Kostenrechner',
  description: 'Drei Schritte. Eine Kostenschätzung für Ihre Reise mit empfohlener Kursauswahl.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from '../../../(en)/tools/golf-cost-calculator/GolfCostCalculatorClient'

export default function GolfCostCalculatorToolDE() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient lang="de" />
    </PageLayout>
  )
}
