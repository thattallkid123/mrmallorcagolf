export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/course-selector', 'es', {

  title: 'Selector de campos en Mallorca | Gratis',
  description: 'Ocho preguntas. Una selección personalizada de campos de golf en Mallorca adaptada a tu hándicap, presupuesto y estilo. Gratis, instantáneo, sin registro.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'

export default function CourseSelectorEs() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="es" />
    </PageLayout>
  )
}
