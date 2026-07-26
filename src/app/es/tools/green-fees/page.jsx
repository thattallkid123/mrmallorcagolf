export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'es', {

  title: 'Mallorca green fee comparison',
  description: 'Comparativa de green fees en Mallorca',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function GreenFeesEs() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="es" />
    </PageLayout>
  )
}
