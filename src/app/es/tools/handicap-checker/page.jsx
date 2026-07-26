export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/handicap-checker', 'es', {

  title: '¿Puedo jugar?',
  description: 'Introduce tu handicap y ve cuáles de los campos de Mallorca puedes reservar.',
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
