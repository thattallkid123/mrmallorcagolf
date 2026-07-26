export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/course-selector', 'nl', {

  title: 'Mallorca golfbaan-kiezer | Gratis',
  description: 'Acht vragen. Een persoonlijke selectie van Mallorca golfbanen afgestemd op jouw handicap, budget en stijl. Gratis, direct, geen aanmelding vereist.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'

export default function CourseSelectorNl() {
  return (
    <PageLayout lang="nl" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="nl" />
    </PageLayout>
  )
}
