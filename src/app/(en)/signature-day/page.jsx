import SignatureDayView from '../signature-day/SignatureDayView'
import PageLayout from '../../../components/PageLayout'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const metadata = buildPageMetadata('/signature-day', 'en', {
  title: 'Signature Day Mallorca | Golf & Recovery',
  socialImage: '/images/andy-walking-course.jpg',
  description:
    'A private Mallorca golf day from €3,000: round with Andy, recovery session with John Brazier, transfers, evening arranged.',
  robots: { index: true, follow: true },
})

export default function SignatureDay() {
  return (
    <PageLayout lang="en">
      <SignatureDayView />
    </PageLayout>
  )
}
