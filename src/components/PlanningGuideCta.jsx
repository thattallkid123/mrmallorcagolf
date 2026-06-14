import Link from 'next/link'

export default function PlanningGuideCta({ compact = false }) {
  return (
    <aside className={`planning-guide-cta${compact ? ' planning-guide-cta--compact' : ''}`}>
      <div className="planning-guide-cta__copy">
        <p className="planning-guide-cta__eyebrow">Free Mallorca golf shortlist</p>
        <h2>Take the course selector before you book</h2>
        <p>
          Answer five quick questions and get a first shortlist matched to your group, budget, timing, and trip style. It is the simplest way to narrow the island down before you start comparing tee times.
        </p>
      </div>
      <div className="planning-guide-cta__form">
        <Link href="/course-selector" className="planning-guide-cta__button">
          Get my shortlist
        </Link>
        <p className="planning-guide-cta__fineprint">Free. Five questions. Useful before you enquire.</p>
        <p className="planning-guide-cta__contact">
          Already comparing a few options? <Link href="/contact">Tell Andy what you are weighing up</Link>.
        </p>
      </div>
    </aside>
  )
}
