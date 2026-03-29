import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Jugar con un Profesional â€” DÃ­as de Golf Privados en Mallorca',
  description: 'Una vuelta de golf privada en Mallorca junto al UK PGA Advanced Professional Andy Griffiths. Coaching en campo, dÃ­a completo organizado. Desde â‚¬350 por persona.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/play-with-a-pro' },
}

export default function PlayWithAPro_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/es" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Inicio</Link> &nbsp;/&nbsp; <span>Jugar con un Profesional</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>DÃ­as de Golf Privados Â· Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Un DÃ­a de Golf Privado en Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>No es una lecciÃ³n. No es una vuelta estÃ¡ndar. Un dia privado en uno de los mejores campos de la isla, con un UK PGA profesional que ha entrenado con dos dÃ©cadas de experiencia en tres continentes.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>â‚¬350 p.p. + tarifa green</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/es/contact" className="btn btn--gold">Reserve su dÃ­a &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Ver paquetes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">QuÃ© incluye el dÃ­a</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Antes de que llegue, ya sÃ© lo que debo observar.</h2>
          <p>Antes de su llegada, rellena un breve cuestionario. QuÃ© le frustra, dÃ³nde estÃ¡ la brecha. Al llegar al primer tee, ya sÃ© lo que debo observar.</p>
          <p>Durante la vuelta, el coaching se integra de forma natural â€” no un comentario continuo, sino la observaciÃ³n correcta en el momento correcto.</p>
          <p>He entrenado en entornos donde se esperaba una mejora seria y medible â€” jugadores de la selecciÃ³n nacional en China, entusiastas del golf por toda Asia.</p>
          <div className="pull-quote"><p>&ldquo;Lo que la mayorÃ­a de los golfistas descubre es que se van jugando notablemente mejor y con mÃ¡s confianza â€” y entendiendo por quÃ©, que es la parte que permanece.&rdquo;</p></div>
          <p>El anÃ¡lisis en el almuerzo no es un resumen. Es la conversacion que hace que todo el dia tenga sentido.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Â¿Ya reservado?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Completa tu cuestionario pre-ronda &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Solo 3 minutos. Me ayuda a personalizar el dÃ­a para ti antes de llegar al primer tee.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>QuÃ© estÃ¡ incluido</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>ElecciÃ³n del campo</strong>Adaptada a su juego, handicap y expectativas</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Hora de salida</strong>Reservada y completamente gestionada</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing previo</strong>QuÃ© esperar del campo</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 hoyos junto a Andy</strong>Jugando, como su compaÃ±ero</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching en campo</strong>GestiÃ³n del campo, elecciÃ³n de palos</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>AnÃ¡lisis posterior</strong>Que mejoro, en que trabajar</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Almuerzo</strong>En el restaurante del campo o local (Dia Signature)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>QuÃ© campo?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>El campo siempre se elige con usted.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Un grupo con principiantes, una tarde corta â€” hay campos que funcionan mejor, y le dirÃ© honestamente cual. Algunos son solo para socios â€” ese acceso puede organizarse.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Para quiÃ©n es</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>La experiencia se adapta a su juego.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>El golfista en visita</h3><p>Un golfista con handicap que quiere que su vuelta en Mallorca sea realmente memorable.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>La brecha prÃ¡ctica/campo</h3><p>Golfistas cuyo juego de prÃ¡ctica nunca se transfiere. El problema casi siempre es la gestiÃ³n del campo.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>El grupo de ejecutivos</h3><p>Grupos de empresa, directivos de visita, dia premium totalmente organizado.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>El principiante</h3><p>Golfistas ocasionales que quieren compania experta sin intimidacion.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>El golfista residente</h3><p>Basado en la isla, buscando trabajo regular con un profesional.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Quien quiere mÃ¡s</h3><p>El Ãºnico requisito es querer una experiencia de golf genuinamente diferente.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Lo que dicen los golfistas</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>En sus propias palabras.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jugar al golf con Andy fue una experiencia extraordinaria. Tiene un nivel de percepciÃ³n sin igual y lo transmite de una manera sutil y empÃ¡tica. Tras solo 18 hoyos, descubrÃ­ un nuevo techo a mi potencial.&rdquo;</p><span className="testimonial__author">â€” Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;La comprensiÃ³n de los cÃ¡lculos detras de cada golpe ha mejorado enormemente mi toma de decisiÃ³nes. El momento que mas me impacto fue ver a Andy golpear un hierro 3 a 220 metros por encima de un dogleg y colocarlo en el green.&rdquo;</p><span className="testimonial__author">â€” Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy cambio completamente como pienso sobre la gestiÃ³n del campo. Despues de 18 hoyos con el en Son Gual, jugue mi mejor resultado y entendi por que.&rdquo;</p><span className="testimonial__author">â€” Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Experiencias & Paquetes</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Tres niveles. Todos privados. Todos con aacompaÃ±amiento personal.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>La diferencia es lo completo que es el dÃ­a. Los tres incluyen el mismo nivel de experiencia en campo.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">La Vuelta de Mallorca</p>
            <h3 className="tier__name">Jugar con un Profesional</h3>
            <p className="tier__price">â‚¬350 p.p. + tarifa green</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Campo adaptado a su juego</li>
              <li>Hora de salida gestionada</li>
              <li>Briefing y calentamiento</li>
              <li>18 hoyos junto a Andy</li>
              <li>Coaching en campo</li>
              <li>AnÃ¡lisis posterior</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">El DÃ­a Signature</p>
            <h3 className="tier__name">DÃ­a de Golf con AnfitriÃ³n</h3>
            <p className="tier__price">Desde â‚¬450 p.p. + tarifa green</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Todo de La Vuelta de Mallorca</li>
              <li>Son Gual o Alcanada</li>
              <li>Almuerzo largo en el restaurante</li>
              <li>Regalo sorpresa</li>
              <li>Ritmo pausado â€” un dÃ­a completo</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">La Experiencia Completa</p>
            <h3 className="tier__name">Viaje de Golf a Medida</h3>
            <p className="tier__price">A consultar</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>DÃ­a en varios campos o itinerario</li>
              <li>Transporte privado desde Palma</li>
              <li>Cena en restaurante selecciÃ³nado</li>
              <li>SesiÃ³n spa o recuperacion</li>
              <li>Coordinacion concierge completa</li>
              <li>Para grupos, empresas & solicitudes a medida</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Listo para jugar Mallorca como merece?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>ContÃ¡cteme y organicemos su dia.</h2>
          <p>DÃ­game sus fechas, su handicap y lo que espera. Le responderÃ© con una recomendacion â€” personalmente, en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Reserve su dÃ­a &rarr;</Link>
          <Link href="/es/golf-courses" className="btn btn--outline-white">Explorar los campos</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Cuestionario pre-ronda &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

