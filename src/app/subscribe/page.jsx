import SubscribeClient from './SubscribeClient'

export const metadata = {
  title: 'Golf Insights from Mallorca - Newsletter | Mr Mallorca Golf',
  description:
    'Join the mailing list for honest Mallorca golf insights every two weeks. Course observations, condition notes, and planning logic from a PGA Professional on the island.',
  keywords:
    'golf Mallorca newsletter, Mallorca golf courses, Son Gual, Alcanada, PGA professional Mallorca',
  alternates: { canonical: 'https://www.mrmallorcagolf.com/subscribe' },
}

export default function SubscribePage() {
  return <SubscribeClient />
}