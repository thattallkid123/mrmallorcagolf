export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Sélecteur de parcours à Majorque | Gratuit',
  description: 'Huit questions. Une sélection personnalisée de parcours de golf à Majorque adaptée à votre handicap, budget et style. Gratuit, instantané, sans inscription.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'

export default function CourseSelectorFr() {
  return (
    <PageLayout lang="fr" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="fr" />
    </PageLayout>
  )
}
