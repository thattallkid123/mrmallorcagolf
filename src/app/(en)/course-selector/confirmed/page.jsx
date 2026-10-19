import { DEFAULT_SOCIAL_IMAGE } from '../../../../lib/page-metadata'
import { SITE_ORIGIN } from '../../../../lib/site'
import LeadCaptureStatusPage from '../../../../components/LeadCaptureStatusPage'

export const metadata = {
  title: 'Your Golf Planning Emails Are Confirmed',
  description: 'Your email is confirmed. You are now on the list for Mallorca golf planning notes.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: `${SITE_ORIGIN}/course-selector/confirmed` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/course-selector/confirmed`,
    title: 'Your golf planning emails are confirmed',
    description: 'Your email is confirmed. You will receive occasional Mallorca golf planning notes.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your golf planning emails are confirmed',
    description: 'Your email is confirmed. You will receive occasional Mallorca golf planning notes.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function CourseSelectorConfirmedPage() {
  return (
    <LeadCaptureStatusPage
      eyebrow="Email confirmed"
      title="You are on the list"
      intro="Thanks for signing up. I will send occasional notes on courses, green fees and planning a Mallorca golf trip."
      bullets={[
        {
          title: 'Your welcome',
          text: 'A practical tip and links to the free tools and PDF guides for planning your rounds.',
        },
        {
          title: 'Occasional updates',
          text: 'Seasonal changes and advice on choosing courses around your hotel, handicap and budget.',
        },
        {
          title: 'Reply if you want help',
          text: 'Reply with your dates, group size and where you are staying if you want help choosing your rounds.',
        },
      ]}
      primaryHref="/tools/course-selector"
      primaryLabel="Use the course selector"
      secondaryHref="/plan-your-trip"
      secondaryLabel="Plan your trip"
      asideTitle="While you plan"
      asideBody="The course selector matches options to your group, handicap and hotel area. You can use it without making a booking."
    />
  )
}
