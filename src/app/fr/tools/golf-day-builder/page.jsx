export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'fr', {

  title: 'Organisez votre journée golf à Majorque',
  description: "Neuf questions. Des propositions de journées de golf adaptées à votre groupe.",
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.fr'

export default function Page() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="fr" localData={dayData} />
    </PageLayout>
  )
}
