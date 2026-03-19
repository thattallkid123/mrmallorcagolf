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
            <span className="contact-detail__value">Within 24 hours — personally from Andy</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">WhatsApp</span>
            <span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp Andy �</a></span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Email</span>
            <span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Based</span>
            <span className="contact-detail__value">Mallorca, Spain</span>
          </div>
        </div>

        <div className="promise-block">
          <p>&ldquo;Get in touch. Tell me your dates and what you&apos;re looking for — I come back personally within 24 hours.&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>Enquiry received.</h3>
            <p>I&apos;ll come back to you personally — usually within a few hours, always within 24. If you&apos;d prefer to speak directly, WhatsApp is the fastest route.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Enquiry form</p>
              <h2>Start planning your day.</h2>
              <p>The more detail you give me, the better I can match the day to you.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First name</label>
                  <input type="text" id="fname" name="fname" className="form-control" placeholder="Andy" required value={form.fname} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last name</label>
                  <input type="text" id="lname" name="lname" className="form-control" placeholder="Smith" required value={form.lname} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="andy@example.com" required value={form.email} onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dates">Preferred dates</label>
                  <input type="text" id="dates" name="dates" className="form-control" placeholder="e.g. 15–22 October 2026" value={form.dates} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="handicap">Your handicap</label>
                  <input type="text" id="handicap" name="handicap" className="form-control" placeholder="e.g. 14 · or 'beginner'" value={form.handicap} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="groupsize">Group size</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value="">Select group size</option>
                  <option>1 — solo</option>
                  <option>2 — pair</option>
                  <option>3–4 — small group</option>
                  <option>5+ — larger group / corporate</option>
                </select>
              </div>

              <div className="form-group">
                <label>Which experience interests you?</label>
                <div className="radio-group">
                  {[
                    ['mallorca-round', 'The Mallorca Round', 'From €500'],
                    ['signature-day', 'The Signature Day', 'From €650'],
                    ['full-experience', 'The Full Experience', 'On enquiry'],
                    ['not-sure', 'Not sure yet — advise me', ''],
                  ].map(([val, label, price]) => (
                    <label key={val} className="radio-option">
                      <input type="radio" name="experience" value={val} checked={form.experience === val} onChange={handleChange} />
                      <span className="radio-option-label">{label}</span>
                      {price && <span className="radio-option-price">{price}</span>}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Anything else I should know</label>
                <textarea id="message" name="message" className="form-control" placeholder="Goals for the day, courses you've heard of, mixed group, specific requests — anything helps me build the right day for you." value={form.message} onChange={handleChange} />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">Send Enquiry &rarr;</button>
                <p className="form-note">I respond personally to every enquiry within 24 hours. Your details are used only to arrange your experience.</p>
              </div>
            </form>
          </>
        )}
      </div>

    </div>
  )
}

