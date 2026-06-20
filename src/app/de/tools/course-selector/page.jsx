export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Mallorca Golfplatz-Finder | Kostenlos',
  description: 'Acht Fragen. Eine persönliche Auswahl von Mallorca-Golfplätzen, abgestimmt auf Ihr Handicap, Budget und Ihren Stil. Kostenlos, sofort, keine Anmeldung.',
  robots: { index: true, follow: true },
}

import PageLayout from '../../../../components/PageLayout'
import CourseSelectorToolClient from '../../../(en)/tools/course-selector/CourseSelectorToolClient'

export default function CourseSelectorDe() {
  return (
    <PageLayout lang="de" navTransparent={false} showWhatsAppButton={false}>
      <CourseSelectorToolClient lang="de" />
    </PageLayout>
  )
}
