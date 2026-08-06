'use client'

import { useContactFormSubmission } from '../../../lib/contact-form'

export default function ContactFormPanel({ locale = 'en', content }) {
  const { error, form, handleChange, handleSubmit, setForm, submitted, submitting } = useContactFormSubmission(locale)
  const serviceTypes = content.form.serviceTypes || [
    ['pwap', 'Play With A Pro'],
    ['trip-planning', 'Plan my golf trip'],
    ['both', 'Both'],
    ['not-sure', 'Not sure yet'],
  ]
  const pwapFormats = content.form.pwapFormats || [
    ['pwap-solo', 'Solo', '€695'],
    ['pwap-group', 'Group', '€950 total'],
    ['signature-day', 'Signature Day', 'From €3,000+'],
    ['pwap-not-sure', 'Not sure yet', ''],
  ]
  const showPwapFormats = form.serviceType === 'pwap' || form.serviceType === 'both'

  const formNoteStyle = {
    background: 'rgba(45,74,62,0.05)',
    borderLeft: '3px solid var(--gold)',
    borderTop: '1px solid rgba(45,74,62,0.1)',
    padding: '1.25rem 1.5rem',
  }
  const formNoteHeadingStyle = {
    margin: '0 0 0.45rem',
    color: '#2D4A3E',
    fontFamily: 'var(--font-serif)',
    fontSize: '1.02rem',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 1.25,
  }
  const formNoteBodyStyle = {
    margin: 0,
    color: '#2C2A27',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    fontWeight: 300,
    lineHeight: 1.7,
  }

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
        <fieldset className="form-group" style={{ border: 'none', padding: 0, margin: 0, marginBottom: '20px' }}>
          <legend style={{ display: 'block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: '8px', padding: 0 }}>
            {content.form.labels.serviceType || 'What would you like help with?'}
          </legend>
          <div className="radio-group">
            {serviceTypes.map(([val, label]) => (
              <label
                key={val}
                className={`radio-option${form.serviceType === val ? ' radio-option--selected' : ''}`}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={val}
                  checked={form.serviceType === val}
                  onChange={(event) => {
                    handleChange(event)
                    setForm((current) => ({
                      ...current,
                      serviceType: val,
                      experience: val,
                      pwapFormat: val === 'pwap' || val === 'both' ? current.pwapFormat : '',
                    }))
                  }}
                  required
                />
                <span className={`radio-option-label${form.serviceType === val ? ' radio-option-label--selected' : ''}`}>
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {showPwapFormats ? (
          <fieldset className="form-group" style={{ border: 'none', padding: 0, margin: 0, marginBottom: '20px' }}>
            <legend style={{ display: 'block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: '8px', padding: 0 }}>
              {content.form.labels.pwapFormat || 'If Play With A Pro is part of it, which format sounds closest?'}
            </legend>
            <div className="radio-group">
              {pwapFormats.map(([val, label, price]) => (
                <label
                  key={val}
                  className={`radio-option${form.pwapFormat === val ? ' radio-option--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="pwapFormat"
                    value={val}
                    checked={form.pwapFormat === val}
                    onChange={(event) => {
                      handleChange(event)
                      setForm((current) => ({ ...current, pwapFormat: val, experience: val }))
                    }}
                    required
                  />
                  <span className={`radio-option-label${form.pwapFormat === val ? ' radio-option-label--selected' : ''}`}>
                    {label}
                  </span>
                  {price && <span className="radio-option-price">{price}</span>}
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

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

        {showPwapFormats ? (
          <div style={{ ...formNoteStyle, marginBottom: '1.5rem' }}>
            <h3 style={formNoteHeadingStyle}>{content.gift.heading}</h3>
            <p style={formNoteBodyStyle}>{content.gift.body}</p>
          </div>
        ) : null}

        {content.form.sendPrompt ? (
          <div style={{ ...formNoteStyle, marginBottom: '1.5rem' }}>
            <h3 style={formNoteHeadingStyle}>{content.form.sendPromptLabel || 'What to send'}</h3>
            <p style={formNoteBodyStyle}>{content.form.sendPrompt}</p>
          </div>
        ) : null}

        <div className="form-submit">
          <button type="submit" className="btn-submit" disabled={submitting}>
            {content.form.submit}
          </button>
          {error && <p className="form-error" role="alert">{error}</p>}
        </div>

        <div style={{ ...formNoteStyle, marginTop: '1.75rem' }}>
          <h3 style={formNoteHeadingStyle}>{content.whatNext.heading}</h3>
          <p style={formNoteBodyStyle}>{content.whatNext.body}</p>
        </div>
      </form>
    </>
  )
}
