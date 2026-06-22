import Link from 'next/link'

export default function PlanningGuideCta({ compact = false }) {
  return (
    <aside className={`planning-guide-cta${compact ? ' planning-guide-cta--compact' : ''}`}>
      <p className="planning-guide-cta__eyebrow">Free Mallorca golf shortlist</p>
      <h2>Find the right courses before you book</h2>
      <p className="planning-guide-cta__body">
        Answer a few quick questions and get a shortlist matched to your group, budget, and trip style. Takes under two minutes.
      </p>
      <Link href="/tools/course-selector" className="planning-guide-cta__button">
        Find my courses
      </Link>
      <p className="planning-guide-cta__fineprint">Free. No sign-up to use the tool.</p>
      <p className="planning-guide-cta__contact">
        Already comparing options? <Link href="/contact">Tell Andy what you are weighing up</Link>.
      </p>
    </aside>
  )
}
