export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'es', {

  title: '¿Puedo jugar?',
  description: 'Introduzca su hándicap y vea qué campos de Mallorca puede reservar.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import HandicapCheckerClient from '../../../(en)/tools/handicap-checker/HandicapCheckerClient'

export default function HandicapCheckerToolES() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <HandicapCheckerClient lang="es" />
    </PageLayout>
  )
}
