import { DEFAULT_SOCIAL_IMAGE } from '../../../lib/page-metadata'
import { SITE_ORIGIN } from '../../../lib/site'
import LeadCaptureStatusPage from '../../../components/LeadCaptureStatusPage'

export const metadata = {
  title: 'Check Your Email | Mallorca Course Selector',
  description: 'Confirm your email to receive your Mallorca golf shortlist and follow-up planning notes from Andy Griffiths.',
  alternates: { canonical: `${SITE_ORIGIN}/course-selector/check-email` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/course-selector/check-email`,
    title: 'Check your email | Mallorca course selector',
    description: 'One more step. Confirm your email and I will send the shortlist and planning notes.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Check your email | Mallorca course selector',
    description: 'Confirm your email and I will send the shortlist and planning notes.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function CourseSelectorCheckEmailPage() {
  return (
    <LeadCaptureStatusPage
      eyebrow="Course selector"
      title="Check your email"
      intro="I have sent a confirmation email. Click the link in that email and I will send the saved shortlist and the follow-up planning notes."
      bullets={[
        {
          title: 'Open the confirmation email',
          text: 'It should arrive from Mr Mallorca Golf. If it is not in your inbox, check promotions, spam, or search for info@mrmallorcagolf.com.',
        },
        {
          title: 'Click the confirmation button',
          text: 'That proves it is really your address and keeps the list clean. Without that click, nothing else will send.',
        },
        {
          title: 'Then the planning notes start',
          text: 'You will get the shortlist first, then the follow-up emails on timing, course fit, and how to build a sensible Mallorca trip.',
        },
      ]}
      primaryHref="/golf-courses"
      primaryLabel="View the courses"
      secondaryHref="/course-selector"
      secondaryLabel="Back to selector"
      asideTitle="While you wait"
      asideBody="If you want to compare courses before the shortlist lands, the full course guide is already on the site."
    />
  )
}
