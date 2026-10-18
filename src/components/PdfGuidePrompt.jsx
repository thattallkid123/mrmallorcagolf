import Link from 'next/link'
import { LEAD_MAGNETS } from '../lib/signup-config'

export const PDF_GUIDE_ORDER = ['course-comparison', 'cost-guide', 'trip-planner', 'beginners-guide']

// The PDFs are currently English-only. Render these offers on English pages.
export default function PdfGuidePrompt({ slug, compact = false }) {
  const guide = LEAD_MAGNETS[slug]
  if (!guide) return null
  const Heading = compact ? 'h3' : 'h2'

  return (
    <aside className={`pdf-guide-prompt${compact ? ' pdf-guide-prompt--compact' : ''}`}>
      <div className="pdf-guide-prompt__copy">
        <p className="pdf-guide-prompt__eyebrow">Free PDF in English</p>
        <Heading className="pdf-guide-prompt__title">{guide.title}</Heading>
        <p className="pdf-guide-prompt__description">{guide.description}</p>
      </div>
      <Link href={`/guides/${slug}`} className="btn btn--pine pdf-guide-prompt__button">
        Get the PDF by email
      </Link>
    </aside>
  )
}
