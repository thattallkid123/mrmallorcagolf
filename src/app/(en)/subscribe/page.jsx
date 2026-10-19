import { DEFAULT_SOCIAL_IMAGE } from '../../../lib/page-metadata'
import { SITE_ORIGIN } from '../../../lib/site'
import SubscribeClient from '../subscribe/SubscribeClient'

export const metadata = {
  title: 'Mallorca Golf Planning Emails',
  description:
    'Get occasional Mallorca golf planning emails from Andy Griffiths: course advice, green fees and practical trip notes. Free, with email confirmation.',
  keywords:
    'Mallorca golf newsletter, Mallorca golf planning, Mallorca golf courses, PGA professional Mallorca',
  alternates: { canonical: `${SITE_ORIGIN}/subscribe` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/subscribe`,
    title: 'Mallorca Golf Planning Emails',
    description:
      'Get Mallorca golf planning notes from Andy Griffiths, PGA Advanced Professional on the island.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallorca Golf Planning Emails',
    description:
      'Get Mallorca golf planning notes from a PGA Professional on the island.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function SubscribePage() {
  return <SubscribeClient />
}
