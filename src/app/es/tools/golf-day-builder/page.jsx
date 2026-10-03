export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/golf-day-builder', 'es', {

  title: 'Planifique su día de golf en Mallorca',
  description: 'Ocho preguntas. Un plan de día completo con campo, almuerzo y complementos, diseñado para su grupo.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GolfDayBuilderClient from '../../../(en)/golf-day-builder/GolfDayBuilderClient'
import dayData from '../../../../lib/tool-data/golf-day-builder.es'

export default function Page() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <GolfDayBuilderClient lang="es" localData={dayData} />
    </PageLayout>
  )
}
