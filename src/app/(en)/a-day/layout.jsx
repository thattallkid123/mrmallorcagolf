import { DEFAULT_SOCIAL_IMAGE } from '../../../lib/page-metadata.js'
import { SITE_ORIGIN } from '../../../lib/site.js'

export const metadata = {
  title: 'A Day at Son Gual | Mallorca Golf Day with Andy Griffiths',
  description:
    "See what a full day at Son Gual looks like with Andy Griffiths: Mallorca's standout course, real on-course coaching, and the rhythm of a proper golf day.",
  alternates: {
    canonical: `${SITE_ORIGIN}/a-day`,
  },
  openGraph: {
    type: 'article',
    url: `${SITE_ORIGIN}/a-day`,
    title: 'A Day at Son Gual | Mallorca Golf Day with Andy Griffiths',
    description:
      "See what a full day at Son Gual looks like with Andy Griffiths: Mallorca's standout course, real on-course coaching, and the rhythm of a proper golf day.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Day at Son Gual | Mallorca Golf Day with Andy Griffiths',
    description:
      "See what a full day at Son Gual looks like with Andy Griffiths on Mallorca's standout course.",
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function Layout({ children }) {
  return children
}
