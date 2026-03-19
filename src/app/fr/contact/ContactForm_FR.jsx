'use client'
import { useState } from 'react'

export default function ContactForm_FR() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Prendre contact</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Dites-moi ce que vous cherchez. Je m'occupe du reste.</h1>
          <p className="contact-left__intro">Pas de systemes de reservation. Dites-moi vos dates, votre handicap et ce que vous voulez de la journee. Je vous repondrai personnellement.</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail__label">Reponse</span><span className="contact-detail__value">Sous 24 heures - personnellement d'Andy</span></div>
          <div className="contact-detail"><span className="contact-detail__label">WhatsApp</span><span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp Andy &rarr;</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Email</span><span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Base</span><span className="contact-detail__value">Majorque, Espagne</span></div>
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
                <label>Quelle experience vous interesse ?</label>
                <div className="radio-group">
                    <label className="radio-option"><input type="radio" name="experience" value="mallorca-round" checked={form.experience === "mallorca-round"} onChange={handleChange} /><span className="radio-option-label">Le Tour de Majorque</span><span className="radio-option-price">A partir de 500 EUR</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="signature-day" checked={form.experience === "signature-day"} onChange={handleChange} /><span className="radio-option-label">La Journee Signature</span><span className="radio-option-price">A partir de 650 EUR</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="full-experience" checked={form.experience === "full-experience"} onChange={handleChange} /><span className="radio-option-label">L'Experience Complete</span><span className="radio-option-price">Sur devis</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="not-sure" checked={form.experience === "not-sure"} onChange={handleChange} /><span className="radio-option-label">Pas encore sur(e) - conseillez-moi</span></label>
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">Autre chose que je devrais savoir</label><textarea id="message" name="message" className="form-control" placeholder="Objectifs pour la journee, parcours, groupe mixte, demandes specifiques." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">Envoyer la demande &rarr;</button>
                <p className="form-note">Je reponds personnellement a chaque demande sous 24 heures.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
