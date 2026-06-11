import SignatureDayView from '../signature-day/SignatureDayView'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const metadata = buildPageMetadata('/signature-day', 'en', {
  title: 'Signature Day Mallorca | Private Golf, Physio & Dinner with Andy Griffiths',
  description:
    'A private Mallorca golf day built around the round, the body, and the evening. PGA pro Andy Griffiths, golf physio with John Brazier, private transfers, and dinner at a partner hotel. From €3,000.',
  robots: { index: true, follow: true },
})

export default function SignatureDay() {
  return <SignatureDayView />
}
