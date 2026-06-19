import { DEFAULT_SOCIAL_IMAGE } from '../../../../lib/page-metadata'
import { SITE_ORIGIN } from '../../../../lib/site'
import LeadCaptureStatusPage from '../../../../components/LeadCaptureStatusPage'

export const metadata = {
  title: 'You Are In | Mallorca Course Selector',
  description: 'Your email is confirmed. You are now on the list for Mallorca golf planning notes.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: `${SITE_ORIGIN}/course-selector/confirmed` },
  openGraph: {
    type: 'website',
    url: `${SITE_ORIGIN}/course-selector/confirmed`,
    title: 'You are in | Mallorca course selector',
    description: 'Your email is confirmed and the planning notes will now reach you properly.',
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'You are in | Mallorca course selector',
    description: 'Your email is confirmed and the planning notes will now reach you properly.',
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function CourseSelectorConfirmedPage() {
  return (
    <LeadCaptureStatusPage
      eyebrow="Email confirmed"
      title="You are on the list"
      intro="That confirmation is done. You will now receive the follow-up planning notes properly."
      bullets={[
        {
          title: 'Useful first email',
          text: 'The first email gives you a practical starting point rather than a generic Mallorca course roundup.',
        },
        {
          title: 'Then the useful planning notes',
          text: 'Expect follow-up emails on timing, course fit, and the mistakes golfers make when they book by reputation alone.',
        },
        {
          title: 'Reply if you want help',
          text: 'If you are already deep into planning and want a more tailored steer, you can reply and I will point you in the right direction.',
        },
      ]}
      primaryHref="/course-selector"
      primaryLabel="Use the selector again"
      secondaryHref="/plan-your-trip"
      secondaryLabel="Plan your trip"
      asideTitle="Best next step"
      asideBody="If your group has mixed handicaps or only a few rounds to play, the selector is still the quickest way to sense-check the shortlist before you book anything."
    />
  )
}
