import BeehiivEmbed from './BeehiivEmbed'

export default function PlanningGuideCta({ compact = false }) {
  return (
    <aside className={`planning-guide-cta${compact ? ' planning-guide-cta--compact' : ''}`}>
      <div className="planning-guide-cta__copy">
        <p className="planning-guide-cta__eyebrow">Free planning notes</p>
        <h2>Before you book tee times, get the Mallorca course guide.</h2>
        <p>
          Course fit, price ranges, timing, and the courses I would put first for different groups. Useful if you are still comparing options and not ready to enquire yet.
        </p>
      </div>
      <div className="planning-guide-cta__form">
        <BeehiivEmbed
          placeholder="Email address"
          buttonLabel="Send guide"
          successMessage="You're on the list. I'll send the guide by email."
        />
        <p className="planning-guide-cta__fineprint">Free. No spam. Unsubscribe any time.</p>
      </div>
    </aside>
  )
}
