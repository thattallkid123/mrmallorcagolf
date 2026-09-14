export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/course-selector', 'fr', {

  title: 'Sélecteur de Parcours à Majorque',
  description: 'Huit questions. Une sélection de parcours de golf à Majorque adaptée à votre handicap et budget. Gratuit et instantané.',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'

export default function CourseSelectorFr() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="fr" />
    </PageLayout>
  )
}
