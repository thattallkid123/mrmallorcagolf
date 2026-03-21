'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Get in touch</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Tell me what you&apos;re looking for.<br />I&apos;ll sort the rest.</h1>
          <p className="contact-left__intro">No booking systems. Tell me your dates, your handicap, and what you want from the day. I&apos;ll come back to you personally — usually within a few hours, always within 24.</p>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-detail__label">Response</span>
            <span className="contact-detail__value">Within 24 hours — usually sooner</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Email</span>
            <a href="mailto:andy@mrmallorcagolf.com" className="contact-detail__value" style={{color:'inherit',textDecoration:'none'}}>andy@mrmallorcagolf.com</a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">WhatsApp</span>
            <a href="https://wa.me/34624466702" className="contact-detail__value contact-detail__whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14,marginRight:6,flexShrink:0}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Location</span>
            <a href="https://maps.google.com/?q=Mallorca,Spain" target="_blank" rel="noopener noreferrer" className="contact-detail__value" style={{color:'inherit',textDecoration:'none'}}>Mallorca, Spain ↗</a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        {submitted ? (
          <div className="contact-success">
            <div className="contact-success__icon">✓</div>
            <h2>Message sent.</h2>
            <p>I&apos;ll get back to you personally — usually within a few hours. In the meantime, take a look at <Link href="/guides/a-day-at-son-gual" style={{color:'var(--pine)'}}>what a day at Son Gual looks like</Link>.</p>
            <Link href="/" className="btn btn--dark" style={{marginTop:'2rem'}}>Back to home</Link>
          </div>
        ) : (
          <>
            <div style={{marginBottom:'2rem'}}>
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
                <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dates">Dates you&apos;re visiting Mallorca</label>
                  <input type="text" id="dates" name="dates" className="form-control" placeholder="e.g. 12–18 April 2026" value={form.dates} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="handicap">Handicap (if applicable)</label>
                  <input type="text" id="handicap" name="handicap" className="form-control" placeholder="e.g. 14 or Beginner" value={form.handicap} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="groupsize">Group size</label>
                  <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                    <option value="">Select</option>
                    <option>1 — solo</option>
                    <option>2 — pair</option>
                    <option>3–4 — small group</option>
                    <option>5+ — larger group or corporate</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Which experience interests you?</label>
                  <select name="experience" className="form-control" value={form.experience} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="mallorca-round">The Mallorca Round — €350 pp + green fee</option>
                    <option value="signature-day">The Signature Day — from €450 pp + green fee</option>
                    <option value="full-experience">The Full Experience — custom itinerary</option>
                    <option value="not-sure">Not sure yet — I&apos;d like a recommendation</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Anything else I should know?</label>
                <textarea id="message" name="message" className="form-control" rows={4} placeholder="Courses you have in mind, specific goals, anything that helps me build the right day for you." value={form.message} onChange={handleChange} />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">Send Enquiry →</button>
                <p className="form-note">No booking systems. No automated replies. I read every message personally.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
