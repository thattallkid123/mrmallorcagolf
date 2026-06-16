'use client'

import { useContactFormSubmission } from '../../../lib/contact-form'

export default function ContactFormPanel({ locale = 'en', content }) {
  const { error, form, handleChange, handleSubmit, setForm, submitted, submitting } = useContactFormSubmission(locale)

  if (submitted) {
    return (
      <div className="form-success visible">
        <div className="form-success__icon">&#10003;</div>
        <h3>{content.success.title}</h3>
        <p>{content.success.body}</p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--taupe)', lineHeight: 1.7 }}>
          {content.success.fasterReplyText || 'Want a faster reply?'}{' '}
          <a
            href={content.success.fasterReplyCta_href || 'https://wa.me/34624466702'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}
          >
            {content.success.fasterReplyCta || 'Message Andy on WhatsApp →'}
          </a>
        </p>
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

      {content.form.experienceHelp ? (
        <div style={{ background: 'rgba(255,255,255,0.76)', border: '1px solid rgba(184,151,90,0.18)', borderLeft: '3px solid var(--gold)', padding: '16px 18px', marginBottom: '1.35rem' }}>
          <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--charcoal)' }}>
            <strong style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--deep)' }}>{content.form.experienceHelpTitle}</strong>
            {content.form.experienceHelp}
          </p>
        </div>
      ) : null}

      {content.form.sendPrompt ? (
        <div style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(184,151,90,0.14)', padding: '14px 16px', marginBottom: '1.35rem' }}>
          <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.7, color: 'var(--charcoal)' }}>
            <strong style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--deep)' }}>{content.form.sendPromptLabel || 'What to send'}</strong>
            {content.form.sendPrompt}
          </p>
        </div>
      ) : null}

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

        <div className="form-group">
          <label htmlFor="dates">{content.form.labels.dates}</label>
          <textarea
            id="dates"
            name="dates"
            className="form-control"
            placeholder={content.form.placeholders.dates}
            value={form.dates}
            onChange={handleChange}
            style={{ minHeight: '100px' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="handicap">{content.form.labels.handicap} <span style={{ fontSize: '0.85em', color: 'var(--taupe)' }}>{content.form.handicapOptional || '(optional)'}</span></label>
          <input
            type="text"
            id="handicap"
            name="handicap"
            className="form-control"
            placeholder={content.form.placeholders.handicap}
            value={form.handicap}
            onChange={handleChange}
            style={{ height: '42px' }}
          />
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
            <strong>{content.gift.heading}</strong> {content.gift.body}
          </p>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn-submit" disabled={submitting}>
            {content.form.submit}
          </button>
          {error && <p className="form-error" role="alert">{error}</p>}
          <p className="form-note">{content.form.note}</p>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--deep)' }}>{content.whatNext.heading}</h3>
          <p style={{ margin: 0 }}>
            {content.whatNext.body}
          </p>
        </div>
      </form>
    </>
  )
}
