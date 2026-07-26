export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'nl', {

  title: 'Build your golf day',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'

export default function Page() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="nl" />
    </PageLayout>
  )
}
