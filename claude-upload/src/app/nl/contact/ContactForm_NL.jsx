'use client'
import { useState } from 'react'

export default function ContactForm_NL() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Neem contact op</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Vertel me wat u zoekt. Ik regel de rest.</h1>
          <p className="contact-left__intro">Geen reserveringssystemen. Vertel me uw data, uw handicap en wat u van de dag wilt.</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail__label">Reactie</span><span className="contact-detail__value">Binnen 24 uur - persoonlijk van Andy</span></div>
          <div className="contact-detail"><span className="contact-detail__label">WhatsApp</span><span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp Andy &rarr;</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">E-mail</span><span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Gevestigd</span><span className="contact-detail__value">Mallorca, Spanje</span></div>
        </div>
        <div className="promise-block">
          <p>&ldquo;Neem contact op. Vertel me uw data en wat u zoekt - ik reageer persoonlijk binnen 24 uur.&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>Aanvraag ontvangen.</h3>
            <p>Ik reageer persoonlijk binnen 24 uur. WhatsApp is de snelste route.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Aanvraagformulier</p>
              <h2>Begin met het plannen van uw dag.</h2>
              <p>Hoe meer details u me geeft, hoe beter ik de dag op u kan afstemmen.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">Voornaam</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Jan" required value={form.fname} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="lname">Achternaam</label><input type="text" id="lname" name="lname" className="form-control" placeholder="de Vries" required value={form.lname} onChange={handleChange} /></div>
              </div>
              <div className="form-group"><label htmlFor="email">E-mailadres</label><input type="email" id="email" name="email" className="form-control" placeholder="jan@voorbeeld.com" required value={form.email} onChange={handleChange} /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="dates">Gewenste data</label><input type="text" id="dates" name="dates" className="form-control" placeholder="bijv. 15-22 oktober 2026" value={form.dates} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="handicap">Uw handicap</label><input type="text" id="handicap" name="handicap" className="form-control" placeholder="bijv. 14 of beginner" value={form.handicap} onChange={handleChange} /></div>
              </div>
              <div className="form-group">
                <label htmlFor="groupsize">Groepsgrootte</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value=""></option>
                  <option>1 — solo</option>
                  <option>2 — tweetje</option>
                  <option>3-4 — kleine groep</option>
                  <option>5+ — grotere groep / bedrijf</option>
                </select>
              </div>
              <div className="form-group">
                <label>Welke ervaring interesseert u?</label>
                <div className="radio-group">
                    <label className="radio-option"><input type="radio" name="experience" value="mallorca-round" checked={form.experience === "mallorca-round"} onChange={handleChange} /><span className="radio-option-label">De Mallorca Ronde</span><span className="radio-option-price">Vanaf 500 EUR</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="signature-day" checked={form.experience === "signature-day"} onChange={handleChange} /><span className="radio-option-label">De Signature Dag</span><span className="radio-option-price">Vanaf 650 EUR</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="full-experience" checked={form.experience === "full-experience"} onChange={handleChange} /><span className="radio-option-label">De Volledige Ervaring</span><span className="radio-option-price">Op aanvraag</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="not-sure" checked={form.experience === "not-sure"} onChange={handleChange} /><span className="radio-option-label">Nog niet zeker - adviseer me</span></label>
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">Iets anders wat ik moet weten</label><textarea id="message" name="message" className="form-control" placeholder="Doelen voor de dag, banen, gemengde groep, specifieke wensen." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">Aanvraag versturen &rarr;</button>
                <p className="form-note">Ik reageer persoonlijk op elke aanvraag binnen 24 uur.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
