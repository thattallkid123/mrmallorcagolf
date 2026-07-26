export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-cost-calculator', 'zh', {

  title: '马略卡高尔夫旅行成本计算器',
  description: '三个步骤。对您的旅行进行成本估计。',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfCostCalculatorClient from '../../../(en)/tools/golf-cost-calculator/GolfCostCalculatorClient'

export default function GolfCostCalculatorToolZH() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <GolfCostCalculatorClient lang="zh" />
    </PageLayout>
  )
}
