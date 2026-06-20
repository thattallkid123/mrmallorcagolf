export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca golfbana-väljare | Gratis',
  description: 'Åtta frågor. Ett personligt urval av Mallorca golfbanor anpassat till ditt handicap, budget och stil. Gratis, direkt, ingen registrering krävs.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'

export default function CourseSelectorSv() {
  return (
    <PageLayout lang="sv" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="sv" />
    </PageLayout>
  )
}
