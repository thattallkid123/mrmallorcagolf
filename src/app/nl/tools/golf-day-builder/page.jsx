export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'nl', {

  title: 'Plan uw golfdag op Mallorca',
  description: "Acht vragen. Een compleet dagplan met baan, lunch en extra's, gebouwd rond uw groep.",
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.nl'

export default function Page() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="nl" localData={dayData} />
    </PageLayout>
  )
}
