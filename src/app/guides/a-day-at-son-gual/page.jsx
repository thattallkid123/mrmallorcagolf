import GuideArticleView from '../GuideArticleView'
import { getGuideArticleContent } from '../../../lib/guide-article-content'

const content = getGuideArticleContent('a-day-at-son-gual')

export const metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: content.metadata.canonical,
    languages: { en: content.metadata.canonical, 'x-default': content.metadata.canonical },
  },
  robots: { index: false, follow: false },
  openGraph: {
    type: 'article',
    url: content.metadata.canonical,
    title: content.metadata.title,
    description: content.metadata.description,
    publishedTime: '2026-03-01',
    authors: ['Andy Griffiths'],
    images: [{ url: content.metadata.image, width: 1200, height: 630, alt: content.metadata.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.metadata.title,
    description: content.metadata.description,
    images: [content.metadata.image],
  },
}

export default function Post() {
  return <GuideArticleView meta={content.meta} blocks={content.blocks} />
}
