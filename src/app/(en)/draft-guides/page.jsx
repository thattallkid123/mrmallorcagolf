import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { DRAFT_GUIDE_CONTENT, DRAFT_GUIDE_SLUGS } from '../../../lib/draft-guide-content'

export const metadata = {
  title: 'Draft Guide Previews',
  description: 'Hidden English draft guide previews for Mr Mallorca Golf.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function DraftGuideIndex() {
  return (
    <PageLayout>
      <main className="section section--cream">
        <div className="draft-guides__inner">
          <p className="eyebrow">Hidden review area</p>
          <h1>Draft guide previews</h1>
          <p className="lede">
            English-only draft pages for layout, metadata and social-card checks. These pages are not linked from the public guide hub and are blocked from indexing.
          </p>
          <div className="card-grid draft-guides__grid">
            {DRAFT_GUIDE_SLUGS.map((slug) => {
              const guide = DRAFT_GUIDE_CONTENT[slug]
              return (
                <article key={slug} className="card">
                  <p className="eyebrow">{guide.meta.badge}</p>
                  <h2>{guide.meta.title}</h2>
                  <p>{guide.meta.intro}</p>
                  <Link href={`/draft-guides/${slug}`} className="btn btn--gold">
                    Review draft
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
