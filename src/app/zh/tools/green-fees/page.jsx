export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'zh', {

  title: '马略卡果岭费比较',
  description: '比较马略卡全部 24 座球场的果岭费，按季节、差点和球车选项筛选。',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function GreenFeesZh() {
  return (
    <PageLayout lang="zh" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="zh" />
    </PageLayout>
  )
}
