import { permanentRedirect } from 'next/navigation'

export const metadata = {
  robots: { index: false, follow: true },
}

export default function ItineraryPage() {
  permanentRedirect('/tools/golf-day-builder')
}
