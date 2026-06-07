import SignatureDayView from '../signature-day/SignatureDayView'

export const metadata = {
  title: 'Signature Day Mallorca | Private Golf, Physio & Dinner with Andy Griffiths',
  description:
    'The complete Mallorca golf day. A private round with PGA pro Andy Griffiths, golf physio with John Brazier, private transfers, and dinner at a partner hotel. From €3,000.',
  robots: { index: false, follow: false },
}

export default function SignatureDay() {
  return <SignatureDayView />
}
