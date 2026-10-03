export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/course-selector', 'es', {

  title: 'Selector de campos en Mallorca | Gratis',
  description: 'Ocho preguntas. Una selección personalizada de campos de golf en Mallorca adaptada a su hándicap, presupuesto y estilo. Gratis, instantáneo, sin registro.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'
import courseData from '../../../../lib/tool-data/course-selector.es'

export default function CourseSelectorEs() {
  return (
    <PageLayout lang="es" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="es" localData={courseData} />
    </PageLayout>
  )
}
