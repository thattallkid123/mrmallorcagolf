'use client'

import { useContactFormSubmission } from '../../lib/contact-form'
import BeehiivEmbed from '../../components/BeehiivEmbed'

export default function ContactFormPanel({ locale = 'en', content }) {
  const { error, form, handleChange, handleSubmit, setForm, submitted, submitting } = useContactFormSubmission(locale)

  if (submitted) {
    return (
      <div className="form-success visible">
        <div className="form-success__icon">&#10003;</div>
        <h3>{content.success.title}</h3>
        <p>{content.success.body}</p>
      </div>
    )
  }

  return (
    <>
      <div className="form-header">
        <p className="form-header__eyebrow">
          {content.form.eyebrow}
        </p>
        <h2>{content.form.title}</h2>
        <p>{content.form.intro}</p>
      </div>

      <form onSubmit={handleSubmit} aria-busy={submitting}>
        <input
          type="text"
          name="website"
          className="form-control--hidden-honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">{content.form.labels.fname}</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="form-control"
              placeholder={content.form.placeholders.fname}
              required
              value={form.fname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">{content.form.labels.lname}</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="form-control"
              placeholder={content.form.placeholders.lname}
              required
              value={form.lname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">{content.form.labels.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder={content.form.placeholders.email}
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dates">{content.form.labels.dates}</label>
            <input
              type="text"
              id="dates"
              name="dates"
              className="form-control"
              placeholder={content.form.placeholders.dates}
              value={form.dates}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="handicap">{content.form.labels.handicap}</label>
            <input
              type="text"
              id="handicap"
              name="handicap"
              className="form-control"
              placeholder={content.form.placeholders.handicap}
              value={form.handicap}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="groupsize">{content.form.labels.groupsize}</label>
          <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
            {content.form.groupsizeOptions.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>{content.form.labels.experience}</label>
          <div className="radio-group">
            {content.form.experiences.map(([val, label, price]) => (
              <div
                key={val}
                onClick={() => setForm((f) => ({ ...f, experience: val }))}
                className={`radio-option${form.experience === val ? ' radio-option--selected' : ''}`}
              >
                <span className={`radio-option-label${form.experience === val ? ' radio-option-label--selected' : ''}`}>
                  {label}
                </span>
                {price && <span className="radio-option-price">{price}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">{content.form.labels.message}</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder={content.form.placeholders.message}
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <div style={{ background: 'var(--cream)', borderRadius: 2, padding: '1.25rem 1.5rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--gold)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--deep)', lineHeight: 1.7, margin: 0 }}>
            <strong>Buying this as a gift?</strong> Let me know in the message above and I&apos;ll prepare a certificate and keep the day details private until you&apos;re ready to share them.
          </p>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn-submit" disabled={submitting}>
            {content.form.submit}
          </button>
          {error && <p className="form-error" role="alert">{error}</p>}
          <p className="form-note">{content.form.note}</p>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', background: 'var(--cream)', borderRadius: 2 }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--deep)', marginBottom: '0.4rem', fontFamily: "'Jost',sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>What happens next</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--taupe)', lineHeight: 1.7, margin: 0, fontFamily: "'Jost',sans-serif" }}>
            I read every enquiry personally. You&apos;ll hear from me within 24 hours with a course recommendation and next steps — usually sooner. If you prefer to talk directly, WhatsApp is the fastest route.
          </p>
        </div>
      </form>

      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--linen)' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--deep)', marginBottom: '0.4rem', fontFamily: "'Jost',sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>Stay in touch</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--taupe)', marginBottom: '1.5rem', lineHeight: 1.7, fontFamily: "'Jost',sans-serif" }}>Course notes and Mallorca golf insights every two weeks — straight to your inbox.</p>
        <BeehiivEmbed />
      </div>
    </>
  )
}
