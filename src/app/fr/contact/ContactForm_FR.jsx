'use client'
import { useState } from 'react'

export default function ContactForm_FR() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang: 'FR' }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please email andy@mrmallorcagolf.com directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Prendre contact</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Dites-moi ce que vous cherchez. Je m'occupe du reste.</h1>
          <p className="contact-left__intro">Pas de systemes de reservation. Dites-moi vos dates, votre handicap et ce que vous voulez de la journee. Je vous repondrai personnellement.</p>
        </div>
        <div className="contact-cards">
          <a href="mailto:andy@mrmallorcagolf.com" className="contact-card">
            <span className="contact-card__icon">✉</span>
            <div>
              <p className="contact-card__label">E-mail</p>
              <p className="contact-card__value">andy@mrmallorcagolf.com</p>
            </div>
          </a>
          <a href="https://wa.me/34624466702" className="contact-card contact-card--whatsapp" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon"><svg viewBox="0 0 24 24" fill="currentColor" style={{width:22,height:22}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg></span>
            <div>
              <p className="contact-card__label">WhatsApp</p>
              <p className="contact-card__value"><a href="https://wa.me/34624466702" style={{color:"inherit",textDecoration:"none"}}>Message on WhatsApp →</a></p>
            </div>
          </a>
          <div className="contact-card contact-card--info">
            <span className="contact-card__icon">⏱</span>
            <div>
              <p className="contact-card__label">Temps de réponse</p>
              <p className="contact-card__value">Dans les 24 heures — souvent plus tôt</p>
            </div>
          </div>
          <a href="https://maps.google.com/?q=Mallorca,Spain" className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon">📍</span>
            <div>
              <p className="contact-card__label">Localisation</p>
              <p className="contact-card__value">Majorque, Espagne</p>
            </div>
          </a>
        </div>
        <div className="promise-block">
          <p>&ldquo;Prenez contact. Dites-moi vos dates et ce que vous cherchez - je reviens personnellement sous 24 heures.&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>Demande recue.</h3>
            <p>Je vous repondrai personnellement sous 24 heures. WhatsApp est le moyen le plus rapide.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Formulaire de contact</p>
              <h2>Commencez a planifier votre journee.</h2>
              <p>Plus vous me donnez de details, mieux je peux adapter la journee a vous.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">Prenom</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Jean" required value={form.fname} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="lname">Nom</label><input type="text" id="lname" name="lname" className="form-control" placeholder="Dupont" required value={form.lname} onChange={handleChange} /></div>
              </div>
              <div className="form-group"><label htmlFor="email">Adresse email</label><input type="email" id="email" name="email" className="form-control" placeholder="jean@exemple.com" required value={form.email} onChange={handleChange} /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="dates">Dates souhaitees</label><input type="text" id="dates" name="dates" className="form-control" placeholder="ex. 15-22 octobre 2026" value={form.dates} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="handicap">Votre handicap</label><input type="text" id="handicap" name="handicap" className="form-control" placeholder="ex. 14 ou debutant" value={form.handicap} onChange={handleChange} /></div>
              </div>
              <div className="form-group">
                <label htmlFor="groupsize">Taille du groupe</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value=""></option>
                  <option>1 — seul(e)</option>
                  <option>2 — en duo</option>
                  <option>3-4 — petit groupe</option>
                  <option>5+ — grand groupe / entreprise</option>
                </select>
              </div>
                            <div className="form-group">
                <label htmlFor="experience">Quelle expérience vous intéresse ?</label>
                <select id="experience" name="experience" className="form-control" value={form.experience} onChange={handleChange}>
                  <option value="">Choisir une expérience</option>
                  <option value="mallorca-round">Le Tour de Majorque — €350 p.p. + green fee</option>
                  <option value="signature-day">La Journée Signature — À partir de €450 p.p. + green fee</option>
                  <option value="full-experience">L'Expérience Complète — Sur devis</option>
                  <option value="not-sure">Pas encore sûr(e) — conseillez-moi</option>
                </select>
              </div>
              <div className="form-group"><label htmlFor="message">Autre chose que je devrais savoir</label><textarea id="message" name="message" className="form-control" placeholder="Objectifs pour la journee, parcours, groupe mixte, demandes specifiques." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit" disabled={loading}>{loading ? 'Envoi…' : 'Envoyer la demande &rarr;'}</button>
                <p className="form-note">Je reponds personnellement a chaque demande sous 24 heures.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
