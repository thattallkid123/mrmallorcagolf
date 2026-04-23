import { SITE_ORIGIN } from '../../lib/site'
import SubscribeClient from './SubscribeClient'

export const metadata = {
  title: 'Golf Insights from Mallorca - Newsletter | Mr Mallorca Golf',
  description:
    'Join the mailing list for honest Mallorca golf insights every two weeks. Course observations, condition notes, and planning logic from a PGA Professional on the island.',
  keywords:
    'golf Mallorca newsletter, Mallorca golf courses, Son Gual, Alcanada, PGA professional Mallorca',
  alternates: { canonical: `${SITE_ORIGIN}/subscribe` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/subscribe`,
    title: 'Golf Insights from Mallorca - Newsletter | Mr Mallorca Golf',
    description:
      'Join the mailing list for honest Mallorca golf insights every two weeks. Course observations, condition notes, and planning logic from a PGA Professional on the island.',
    images: [{ url: `${SITE_ORIGIN}/images/hero-main.webp`, width: 1600, height: 660 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golf Insights from Mallorca - Newsletter | Mr Mallorca Golf',
    description:
      'Join the mailing list for honest Mallorca golf insights every two weeks.',
    images: [`${SITE_ORIGIN}/images/hero-main.webp`],
  },
}

export default function SubscribePage() {
  return <SubscribeClient />
}
