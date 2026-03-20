'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: POST to /api/contact or use Formspree/Resend
    setSubmitted(true)
  }

  return (
    <div className="contact-wrap">

      {/* LEFT */}
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Get in touch</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Tell me what you&apos;re looking for.<br />I&apos;ll sort the rest.</h1>
          <p className="contact-left__intro">There are no booking systems here. Tell me your dates, your handicap, and what you want from the day. I&apos;ll come back to you personally — usually within a few hours, always within 24.</p>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-detail__label">Response</span>
            <span className="contact-detail__value">Within 24 hours — usually sooner</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Email</span>
            <span className="contact-detail__value">andy@mrmallorcagolf.com</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">WhatsApp</span>
            <a href="https://wa.me/34624466702" className="contact-detail__value" style={{color:'inherit',textDecoration:'none'}}>+34 624 466 702</a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Location</span>
            <span className="contact-detail__value">Mallorca, Spain</span>
          </div>
        </div>

        <div className="contact-packages">
          <p style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.25)',marginBottom:'1rem'}}>Pricing overview</p>
          <div className="contact-pkg">
            <span className="contact-pkg__name">The Mallorca Round</span>
            <span className="contact-pkg__price">€350 pp + green fee</span>
          </div>
          <div className="contact-pkg">
            <span className="contact-pkg__name">The Signature Day</span>
            <span className="contact-pkg__price">From €450 pp + green fee</span>
          </div>
          <div className="contact-pkg">
            <span className="contact-pkg__name">The Full Experience</span>
            <span className="contact-pkg__price">Custom itinerary</span>
          </div>
        </div>
      </div>

      {/* RIGHT — FORM */}
      <div className="contact-right">
        {submitted ? (
          <div className="contact-success">
            <div className="contact-success__icon">✓</div>
            <h2>Message sent.</h2>
            <p>I&apos;ll get back to you personally — usually within a few hours.</p>
            <Link href="/" className="btn btn--dark" style={{marginTop:'2rem'}}>Back to home</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Enquiry form</p>

            <div className="form-row">
              <div className="form-field">
                <label>First name</label>
                <input type="text" name="fname" value={form.fname} onChange={handleChange} required placeholder="Andy" />
              </div>
              <div className="form-field">
                <label>Last name</label>
                <input type="text" name="lname" value={form.lname} onChange={handleChange} required placeholder="Griffiths" />
              </div>
            </div>

            <div className="form-field">
              <label>Email address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
            </div>

            <div className="form-field">
              <label>Dates you&apos;re visiting Mallorca</label>
              <input type="text" name="dates" value={form.dates} onChange={handleChange} placeholder="e.g. 12–18 April 2026" />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Handicap (if applicable)</label>
                <input type="text" name="handicap" value={form.handicap} onChange={handleChange} placeholder="e.g. 14 or Beginner" />
              </div>
              <div className="form-field">
                <label>Group size</label>
                <input type="text" name="groupsize" value={form.groupsize} onChange={handleChange} placeholder="e.g. 2 people" />
              </div>
            </div>

            <div className="form-field">
              <label>Which experience interests you?</label>
              <div className="radio-options">
                {[
                  ['mallorca-round', 'The Mallorca Round', '€350 pp + green fee'],
                  ['signature-day', 'The Signature Day', 'From €450 pp + green fee'],
                  ['full-experience', 'The Full Experience', 'Custom itinerary'],
                  ['not-sure', "Not sure yet — I'd like a recommendation", null],
                ].map(([val, label, price]) => (
                  <label key={val} className={`radio-option${form.experience === val ? ' selected' : ''}`}>
                    <input type="radio" name="experience" value={val} checked={form.experience === val} onChange={handleChange} />
                    <span className="radio-option-label">{label}</span>
                    {price && <span className="radio-option-price">{price}</span>}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label>Anything else I should know?</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Courses you have in mind, specific goals, dietary requirements for lunch, anything that helps me build the right day for you..." />
            </div>

            <button type="submit" className="btn btn--gold" style={{width:'100%',padding:'16px',fontSize:'10px',letterSpacing:'.18em'}}>
              Send Enquiry &rarr;
            </button>
            <p style={{fontSize:'11px',color:'var(--taupe)',textAlign:'center',marginTop:'1rem',lineHeight:1.6}}>No booking systems. No automated replies. I read every message personally.</p>
          </form>
        )}
      </div>

    </div>
  )
}
