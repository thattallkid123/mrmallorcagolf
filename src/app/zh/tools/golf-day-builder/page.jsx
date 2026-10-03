export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'zh', {

  title: '规划您的马略卡高尔夫日',
  description: '八个问题。一个完整的日计划，包括球场、午餐和附加选项，围绕您的团队定制。',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.zh'

export default function Page() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="zh" localData={dayData} />
    </PageLayout>
  )
}
