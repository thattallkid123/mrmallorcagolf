export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca green fee comparison',
  description: 'Comparativa de green fees en Mallorca',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function GreenFeesEs() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang="es" />
    </PageLayout>
  )
}
