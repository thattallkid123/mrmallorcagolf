export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'de', {

  title: 'Golftag auf Mallorca planen',
  description: "Neun Fragen. Vorschläge für einen Golftag, abgestimmt auf Ihre Gruppe.",
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.de'

export default function Page() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="de" localData={dayData} />
    </PageLayout>
  )
}
