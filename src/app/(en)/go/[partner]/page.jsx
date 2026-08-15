import { notFound } from 'next/navigation'
import GoPartnerClient from './GoPartnerClient'

const PARTNERS = {
  'club-rentals-mallorca': {
    name: 'Club Rentals Mallorca',
    benefit: 'Quote ANDYGOLF10 when booking for priority delivery and a small discount on balls.',
    target: 'https://www.clubrentalsmallorca.com/?utm_source=mrmallorcagolf&utm_medium=go&utm_campaign=club-hire',
  },
  rent2play: {
    name: 'Rent2Play Golf',
    benefit: 'Use MRMALLORCAGOLF for a complimentary gift and MRMALLORCAGOLFBALLS for 10% off new balls. The codes stack.',
    target: 'https://rent2play.golf/?utm_source=mrmallorcagolf&utm_medium=go&utm_campaign=club-hire',
  },
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(PARTNERS).map(partner => ({ partner }))
}

export async function generateMetadata({ params }) {
  const { partner } = await params
  const record = PARTNERS[partner]
  if (!record) return {}

  return {
    title: `Heading to ${record.name} | Mr Mallorca Golf`,
    description: `Affiliate disclosure and reader benefit before continuing to ${record.name}.`,
    robots: { index: false, follow: true },
  }
}

export default async function GoPartnerPage({ params }) {
  const { partner } = await params
  const record = PARTNERS[partner]
  if (!record) notFound()

  return <GoPartnerClient partner={record} />
}
