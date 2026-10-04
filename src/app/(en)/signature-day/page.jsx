import LocalizedSignatureDayPage from '../../../components/LocalizedSignatureDayPage'
import ScrollDepthTracker from '../../../components/ScrollDepthTracker'
import { buildPageMetadata } from '../../../lib/page-metadata'
import { getSignatureDayContent } from '../../../lib/signature-day-content'

const content = getSignatureDayContent('en')

export const metadata = buildPageMetadata('/signature-day', 'en', {
  ...content.metadata,
  socialImage: '/images/andy-walking-course.jpg',
  robots: { index: true, follow: true },
})

const SIGNATURE_DAY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Signature Day Mallorca',
  description:
    'A private Mallorca golf day: 18 holes with Andy Griffiths, a recovery session with John Brazier, private transfers and a coordinated evening.',
  url: 'https://www.mrmallorcagolf.com/signature-day',
  provider: {
    '@type': 'Organization',
    name: 'Mr Mallorca Golf',
    url: 'https://www.mrmallorcagolf.com',
  },
  areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
  serviceType: 'Premium private golf day',
}

export default function SignatureDay() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SIGNATURE_DAY_SCHEMA) }} />
      <ScrollDepthTracker />
      {/* English copy lives in signature-day-content.js (en) like every other language, so the
          translation sync check can fingerprint it. */}
      <LocalizedSignatureDayPage locale="en" content={content} />
    </>
  )
}
