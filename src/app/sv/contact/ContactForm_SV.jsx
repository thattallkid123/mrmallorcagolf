'use client'
import { useContactFormSubmission } from '../../../lib/contact-form'

export default function ContactForm_SV() {
  const { error, form, handleChange, handleSubmit, submitted, submitting } = useContactFormSubmission('sv')

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.6)',marginBottom:'1.5rem'}}>Hör av dig</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Berätta vad du söker. Jag ordnar resten.</h1>
          <p className="contact-left__intro">Inga bokningssystem. Berätta om dina datum, ditt handicap och vad du vill ha ut av dagen.</p>
        </div>
        <div className="contact-cards">
          <a href="mailto:andy@mrmallorcagolf.com" className="contact-card">
            <span className="contact-card__icon">✉</span>
            <div>
              <p className="contact-card__label">E-post</p>
              <p className="contact-card__value">andy@mrmallorcagolf.com</p>
            </div>
          </a>
          <a href="https://wa.me/34624466702" className="contact-card contact-card--whatsapp" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon"><svg viewBox="0 0 24 24" fill="currentColor" style={{width:22,height:22}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg></span>
            <div>
              <p className="contact-card__label">WhatsApp</p>
              <p className="contact-card__value">Message on WhatsApp →</p>
            </div>
          </a>
          <div className="contact-card contact-card--info">
            <span className="contact-card__icon">⏱</span>
            <div>
              <p className="contact-card__label">Svarstid</p>
              <p className="contact-card__value">Inom 24 timmar — vanligtvis snabbare</p>
            </div>
          </div>
          <a href="https://maps.google.com/?q=Mallorca,Spain" className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon">📍</span>
            <div>
              <p className="contact-card__label">Baserad i</p>
              <p className="contact-card__value">Mallorca, Spanien</p>
            </div>
          </a>
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
              <h2>Börja planera din dag.</h2>
              <p>Ju mer detaljer du ger mig, desto bättre kan jag anpassa dagen till dig.</p>
            </div>
            <form onSubmit={handleSubmit} aria-busy={submitting}>
              <input type="text" name="website" className="form-control--hidden-honeypot" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">Förnamn</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Erik" required value={form.fname} onChange={handleChange} /></div>
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
                    <label className="radio-option"><input type="radio" name="experience" value="mallorca-round" checked={form.experience === "mallorca-round"} onChange={handleChange} /><span className="radio-option-label">Mallorca-rundan</span><span className="radio-option-price">€350 per person + green fee</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="signature-day" checked={form.experience === "signature-day"} onChange={handleChange} /><span className="radio-option-label">Signature-dagen</span><span className="radio-option-price">Från €450 per person + green fee</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="full-experience" checked={form.experience === "full-experience"} onChange={handleChange} /><span className="radio-option-label">Den Kompletta Upplevelsen</span><span className="radio-option-price">På förfrågan</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="not-sure" checked={form.experience === "not-sure"} onChange={handleChange} /><span className="radio-option-label">Inte säker än — ge mig råd</span></label>
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">Annat jag bör veta</label><textarea id="message" name="message" className="form-control" placeholder="Mål för dagen, banor, blandad grupp, specifika önskningar." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit" disabled={submitting}>Skicka förfrågan &rarr;</button>
                {error && <p className="form-error" role="alert">{error}</p>}
                <p className="form-note">Jag svarar personligen på varje förfrågan inom 24 timmar.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
