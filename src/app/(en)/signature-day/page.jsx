import SignatureDayView from '../signature-day/SignatureDayView'
import PageLayout from '../../../components/PageLayout'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const metadata = buildPageMetadata('/signature-day', 'en', {
  title: 'Signature Day Mallorca | Private Golf, Recovery & Dinner',
  socialImage: '/images/andy-walking-course.jpg',
  description:
    'A privately arranged Mallorca golf day with Andy Griffiths, a post-round recovery and sports-performance session with John Brazier, private transfers, and a coordinated evening.',
  robots: { index: true, follow: true },
})

export default function SignatureDay() {
  return (
    <PageLayout lang="en">
      <SignatureDayView />
    </PageLayout>
  )
}
