import { DEFAULT_SOCIAL_IMAGE } from '../../lib/page-metadata'
import { SITE_ORIGIN } from '../../lib/site'
import SubscribeClient from './SubscribeClient'

export const metadata = {
  title: 'Mallorca Golf Course Guide and Planning Notes',
  description:
    'Get Andy Griffiths\' Mallorca golf course guide and planning notes: course fit, timing, price context, and honest recommendations from a PGA Professional on the island.',
  keywords:
    'Mallorca golf course guide, Mallorca golf courses, Son Gual, Alcanada, PGA professional Mallorca',
  alternates: { canonical: `${SITE_ORIGIN}/subscribe` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/subscribe`,
    title: 'Mallorca Golf Course Guide and Planning Notes',
    description:
      'Get Mallorca golf planning notes from Andy Griffiths, PGA Advanced Professional on the island.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallorca Golf Course Guide and Planning Notes',
    description:
      'Get Mallorca golf planning notes from a PGA Professional on the island.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function SubscribePage() {
  return <SubscribeClient />
}
