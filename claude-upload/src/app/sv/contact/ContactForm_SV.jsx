'use client'
import { useState } from 'react'

export default function ContactForm_SV() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Hor av dig</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Berätta vad du söker. Jag ordnar resten.</h1>
          <p className="contact-left__intro">Inga bokningssystem. Berätta om dina datum, ditt handicap och vad du vill ha ut av dagen.</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail__label">Svar</span><span className="contact-detail__value">Inom 24 timmar — personligen från Andy</span></div>
          <div className="contact-detail"><span className="contact-detail__label">WhatsApp</span><span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp Andy &rarr;</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">E-post</span><span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Baserad</span><span className="contact-detail__value">Mallorca, Spanien</span></div>
        </div>
        <div className="promise-block">
          <p>&ldquo;Hör av dig. Berätta om dina datum och vad du söker — jag återkommer personligen inom 24 timmar.&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>Förfrågan mottagen.</h3>
            <p>Jag återkommer personligen inom 24 timmar. WhatsApp är snabbaste vägen.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Förfrågan</p>
              <h2>Borja planera din dag.</h2>
              <p>Ju mer detaljer du ger mig, desto battre kan jag anpassa dagen till dig.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">Fornamn</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Erik" required value={form.fname} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="lname">Efternamn</label><input type="text" id="lname" name="lname" className="form-control" placeholder="Svensson" required value={form.lname} onChange={handleChange} /></div>
              </div>
              <div className="form-group"><label htmlFor="email">E-postadress</label><input type="email" id="email" name="email" className="form-control" placeholder="erik@exempel.com" required value={form.email} onChange={handleChange} /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="dates">Önskade datum</label><input type="text" id="dates" name="dates" className="form-control" placeholder="t.ex. 15-22 oktober 2026" value={form.dates} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="handicap">Ditt handicap</label><input type="text" id="handicap" name="handicap" className="form-control" placeholder="t.ex. 14 eller nybörjare" value={form.handicap} onChange={handleChange} /></div>
              </div>
              <div className="form-group">
                <label htmlFor="groupsize">Gruppstorlek</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value=""></option>
                  <option>1 — solo</option>
                  <option>2 — par</option>
                  <option>3–4 — liten grupp</option>
                  <option>5+ — större grupp / företag</option>
                </select>
              </div>
              <div className="form-group">
                <label>Vilken upplevelse intresserar dig?</label>
                <div className="radio-group">
                    <label className="radio-option"><input type="radio" name="experience" value="mallorca-round" checked={form.experience === "mallorca-round"} onChange={handleChange} /><span className="radio-option-label">Mallorca-rundan</span><span className="radio-option-price">Från 500 €</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="signature-day" checked={form.experience === "signature-day"} onChange={handleChange} /><span className="radio-option-label">Signature-dagen</span><span className="radio-option-price">Från 650 €</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="full-experience" checked={form.experience === "full-experience"} onChange={handleChange} /><span className="radio-option-label">Den Kompletta Upplevelsen</span><span className="radio-option-price">På förfrågan</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="not-sure" checked={form.experience === "not-sure"} onChange={handleChange} /><span className="radio-option-label">Inte säker än — ge mig råd</span></label>
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">Annat jag bor veta</label><textarea id="message" name="message" className="form-control" placeholder="Mal for dagen, banor, blandad grupp, specifika onskningar." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">Skicka förfrågan &rarr;</button>
                <p className="form-note">Jag svarar personligen på varje förfrågan inom 24 timmar.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
