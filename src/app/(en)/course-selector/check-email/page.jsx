import { DEFAULT_SOCIAL_IMAGE } from '../../../../lib/page-metadata'
import { SITE_ORIGIN } from '../../../../lib/site'
import LeadCaptureStatusPage from '../../../../components/LeadCaptureStatusPage'

export const metadata = {
  title: 'Confirm Your Golf Planning Emails',
  description: 'Confirm your email to join Andy Griffiths\' occasional Mallorca golf planning notes.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: `${SITE_ORIGIN}/course-selector/check-email` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/course-selector/check-email`,
    title: 'Confirm your golf planning emails',
    description: 'One more step. Confirm your email and I will send the planning notes.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confirm your golf planning emails',
    description: 'Confirm your email and I will send the planning notes.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function CourseSelectorCheckEmailPage() {
  return (
    <LeadCaptureStatusPage
      eyebrow="Planning notes"
      title="Check your email"
      intro="Confirm your address to join my occasional Mallorca golf emails."
      bullets={[
        {
          title: 'Find my message',
          text: 'Look for Mr Mallorca Golf in your inbox. If it has not arrived, check promotions or spam.',
        },
        {
          title: 'Complete your signup',
          text: 'Click the link inside. Updates only start after this step.',
        },
        {
          title: 'Your welcome email',
          text: 'I will send a tip and links to the free tools and PDF guides, then occasional notes on courses, green fees and trip planning.',
        },
      ]}
      primaryHref="/golf-courses"
      primaryLabel="View the courses"
      secondaryHref="/tools/course-selector"
      secondaryLabel="Use the course selector"
      asideTitle="While you wait"
      asideBody="If you want to compare courses while you wait, the full course guide is already on the site."
    />
  )
}
