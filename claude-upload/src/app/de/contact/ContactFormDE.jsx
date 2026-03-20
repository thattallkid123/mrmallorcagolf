'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactFormDE() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Kontakt aufnehmen</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Sagen Sie mir, was Sie suchen.<br />Ich kümmere mich um den Rest.</h1>
          <p className="contact-left__intro">Kein Buchungssystem. Teilen Sie mir Ihre Daten, Ihr Handicap und Ihre Wünsche mit. Ich melde mich persönlich — meist innerhalb weniger Stunden, immer innerhalb von 24.</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail__label">Antwortzeit</span><span className="contact-detail__value">Innerhalb von 24 Stunden — persönlich von Andy</span></div>
          <div className="contact-detail"><span className="contact-detail__label">WhatsApp</span><span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp Andy &rarr;</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">E-Mail</span><span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Standort</span><span className="contact-detail__value">Mallorca, Spanien</span></div>
        </div>
        <div className="promise-block">
          <p>&ldquo;Melden Sie sich. Teilen Sie mir Ihre Daten und Wünsche mit — ich antworte persönlich innerhalb von 24 Stunden.&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>

      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>Anfrage erhalten.</h3>
            <p>Ich melde mich persönlich — meist innerhalb weniger Stunden, immer innerhalb von 24. Für direkten Kontakt ist WhatsApp der schnellste Weg.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Anfrage</p>
              <h2>Planen Sie Ihren Tag.</h2>
              <p>Je mehr Details Sie mir geben, desto besser kann ich den Tag auf Sie abstimmen.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">Vorname</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Andreas" required value={form.fname} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="lname">Nachname</label><input type="text" id="lname" name="lname" className="form-control" placeholder="Schmidt" required value={form.lname} onChange={handleChange} /></div>
              </div>
              <div className="form-group"><label htmlFor="email">E-Mail-Adresse</label><input type="email" id="email" name="email" className="form-control" placeholder="andreas@beispiel.com" required value={form.email} onChange={handleChange} /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="dates">Gewünschte Daten</label><input type="text" id="dates" name="dates" className="form-control" placeholder="z.B. 15.–22. Oktober 2026" value={form.dates} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="handicap">Ihr Handicap</label><input type="text" id="handicap" name="handicap" className="form-control" placeholder="z.B. 14 · oder 'Anfänger'" value={form.handicap} onChange={handleChange} /></div>
              </div>
              <div className="form-group">
                <label htmlFor="groupsize">Gruppengröße</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value="">Bitte wählen</option>
                  <option>1 — allein</option>
                  <option>2 — zu zweit</option>
                  <option>3–4 — kleine Gruppe</option>
                  <option>5+ — größere Gruppe / Unternehmen</option>
                </select>
              </div>
              <div className="form-group">
                <label>Welches Erlebnis interessiert Sie?</label>
                <div className="radio-group">
                  {[
                    ['mallorca-round', 'Die Mallorca-Runde', 'Ab €500'],
                    ['signature-day', 'Der Signature-Tag', 'Ab €650'],
                    ['full-experience', 'Das Gesamterlebnis', 'Auf Anfrage'],
                    ['not-sure', 'Noch unsicher — bitte beraten', ''],
                  ].map(([val, label, price]) => (
                    <label key={val} className="radio-option">
                      <input type="radio" name="experience" value={val} checked={form.experience === val} onChange={handleChange} />
                      <span className="radio-option-label">{label}</span>
                      {price && <span className="radio-option-price">{price}</span>}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">Sonstiges, das ich wissen sollte</label><textarea id="message" name="message" className="form-control" placeholder="Ziele für den Tag, Plätze, von denen Sie gehört haben, gemischte Gruppe, besondere Wünsche — alles hilft mir, den richtigen Tag für Sie zu gestalten." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">Anfrage senden &rarr;</button>
                <p className="form-note">Ich antworte persönlich auf jede Anfrage innerhalb von 24 Stunden. Ihre Daten werden ausschließlich zur Organisation Ihres Erlebnisses verwendet.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
