'use client'
import { useState } from 'react'

export default function ContactForm_ES() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>Ponerse en contacto</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>Digame lo que busca. Yo me encargo del resto.</h1>
          <p className="contact-left__intro">Sin sistemas de reserva. Digame sus fechas, su handicap y lo que quiere del dia. Le respondere personalmente.</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail__label">Respuesta</span><span className="contact-detail__value">En 24 horas - personalmente de Andy</span></div>
          <div className="contact-detail"><span className="contact-detail__label">WhatsApp</span><span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp Andy &rarr;</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Email</span><span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">Ubicacion</span><span className="contact-detail__value">Mallorca, Espana</span></div>
        </div>
        <div className="promise-block">
          <p>&ldquo;Contacteme. Digame sus fechas y lo que busca - le respondo personalmente en 24 horas.&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>Consulta recibida.</h3>
            <p>Le respondre personalmente en 24 horas. WhatsApp es la via mas rapida.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>Formulario de consulta</p>
              <h2>Empiece a planificar su dia.</h2>
              <p>Cuantos mas detalles me de, mejor podre adaptar el dia a usted.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">Nombre</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Juan" required value={form.fname} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="lname">Apellido</label><input type="text" id="lname" name="lname" className="form-control" placeholder="Garcia" required value={form.lname} onChange={handleChange} /></div>
              </div>
              <div className="form-group"><label htmlFor="email">Correo electronico</label><input type="email" id="email" name="email" className="form-control" placeholder="juan@ejemplo.com" required value={form.email} onChange={handleChange} /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="dates">Fechas preferidas</label><input type="text" id="dates" name="dates" className="form-control" placeholder="ej. 15-22 de octubre de 2026" value={form.dates} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="handicap">Su handicap</label><input type="text" id="handicap" name="handicap" className="form-control" placeholder="ej. 14 o principiante" value={form.handicap} onChange={handleChange} /></div>
              </div>
              <div className="form-group">
                <label htmlFor="groupsize">Tamano del grupo</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value=""></option>
                  <option>1 — solo/a</option>
                  <option>2 — pareja</option>
                  <option>3-4 — grupo pequeno</option>
                  <option>5+ — grupo grande / empresa</option>
                </select>
              </div>
              <div className="form-group">
                <label>Que experiencia le interesa?</label>
                <div className="radio-group">
                    <label className="radio-option"><input type="radio" name="experience" value="mallorca-round" checked={form.experience === "mallorca-round"} onChange={handleChange} /><span className="radio-option-label">La Vuelta de Mallorca</span><span className="radio-option-price">Desde 500 EUR</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="signature-day" checked={form.experience === "signature-day"} onChange={handleChange} /><span className="radio-option-label">El Dia Signature</span><span className="radio-option-price">Desde 650 EUR</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="full-experience" checked={form.experience === "full-experience"} onChange={handleChange} /><span className="radio-option-label">La Experiencia Completa</span><span className="radio-option-price">A consultar</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="not-sure" checked={form.experience === "not-sure"} onChange={handleChange} /><span className="radio-option-label">Aun no se - aconsejerme</span></label>
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">Cualquier otra cosa que deba saber</label><textarea id="message" name="message" className="form-control" placeholder="Objetivos para el dia, campos, grupo mixto, peticiones especiales." value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">Enviar consulta &rarr;</button>
                <p className="form-note">Respondo personalmente a cada consulta en 24 horas.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
