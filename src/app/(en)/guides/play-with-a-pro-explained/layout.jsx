import { DEFAULT_SOCIAL_IMAGE } from '../../../../lib/page-metadata.js'
import { SITE_ORIGIN } from '../../../../lib/site.js'

export const metadata = {
  title: 'What "Play with a Pro" Actually Looks Like | Mr Mallorca Golf',
  description:
    "A PGA pro joins your group for a full round — reading greens, managing wind, and improving your decisions in real time. Here is exactly what the day looks like.",
  alternates: {
    canonical: `${SITE_ORIGIN}/guides/play-with-a-pro-explained`,
  },
  openGraph: {
    type: 'article',
    url: `${SITE_ORIGIN}/guides/play-with-a-pro-explained`,
    title: 'What "Play with a Pro" Actually Looks Like | Mr Mallorca Golf',
    description:
      "A PGA pro joins your group for a full round — reading greens, managing wind, and improving your decisions in real time.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What "Play with a Pro" Actually Looks Like | Mr Mallorca Golf',
    description:
      "A PGA pro joins your group for a full round — reading greens, managing wind, and improving your decisions in real time.",
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
}

export default function Layout({ children }) {
  return children
}
