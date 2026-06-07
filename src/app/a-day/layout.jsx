import { DEFAULT_SOCIAL_IMAGE } from '../../lib/page-metadata.js'
import { SITE_ORIGIN } from '../../lib/site.js'

export const metadata = {
  title: 'A Day at Son Gual with Andy',
  description:
    "What actually happens when you spend a full day on Mallorca's finest course with a PGA Advanced Professional who plays it most weeks. From the drive up to the last green.",
  alternates: {
    canonical: `${SITE_ORIGIN}/a-day`,
  },
  openGraph: {
    type: 'article',
    url: `${SITE_ORIGIN}/a-day`,
    title: 'A Day at Son Gual with Andy',
    description:
      "What actually happens when you spend a full day on Mallorca's finest course with a PGA Advanced Professional who plays it most weeks. From the drive up to the last green.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Day at Son Gual with Andy',
    description:
      "What actually happens when you spend a full day on Mallorca's finest course with a PGA Advanced Professional who plays it most weeks.",
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function Layout({ children }) {
  return children
}
