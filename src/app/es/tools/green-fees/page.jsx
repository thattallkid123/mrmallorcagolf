export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'es', {

  title: 'Comparador de green fees en Mallorca',
  description: 'Compare los green fees de los 24 campos de Mallorca por temporada, hándicap y opciones de buggy.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'
import feesData from '../../../../lib/tool-data/green-fees.es'

export default function GreenFeesEs() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="es" localData={feesData} />
    </PageLayout>
  )
}
