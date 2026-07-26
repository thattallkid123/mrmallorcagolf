export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'zh', {

  title: 'Mallorca green fee comparison',
  description: '马略卡果岭费比较',
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
