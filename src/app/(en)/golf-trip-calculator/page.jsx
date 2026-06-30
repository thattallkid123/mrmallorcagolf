import { permanentRedirect } from 'next/navigation'

export const metadata = {
  robots: { index: false, follow: true },
}

export default function GolfTripCalculator() {
  permanentRedirect('/tools/golf-cost-calculator')
}
