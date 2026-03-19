import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Jugar con un Profesional — Dias de Golf Privados en Mallorca',
  description: 'Una vuelta de golf privada en Mallorca junto al PGA Advanced Professional Andy Griffiths. Coaching en campo, dia completo organizado. Desde 500 EUR por persona.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/play-with-a-pro' },
}

export default function PlayWithAPro_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg"></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/es" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Inicio</Link> &nbsp;/&nbsp; <span>Jugar con un Profesional</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Dias de Golf Privados · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Un Dia de Golf Privado en Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>No es una leccion. No es una vuelta estandar. Un dia privado en uno de los mejores campos de la isla, con un PGA profesional que ha entrenado al mas alto nivel en tres continentes.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>Desde &euro;500 por persona</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/es/contact" className="btn btn--gold">Reserve su dia &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Ver paquetes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Que incluye el dia</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Antes de que llegue, ya se lo que debo observar.</h2>
          <p>Antes de su llegada, rellena un breve cuestionario. Que le frustra, donde esta la brecha. Al llegar al primer tee, ya se lo que debo observar.</p>
          <p>Durante la vuelta, el coaching se integra de forma natural — no un comentario continuo, sino la observacion correcta en el momento correcto.</p>
          <p>He entrenado en entornos donde se esperaba una mejora seria y medible — jugadores de la seleccion nacional en China, entusiastas del golf por toda Asia.</p>
          <div className="pull-quote"><p>&ldquo;Lo que la mayoria de los golfistas descubre es que se van jugando notablemente mejor y con mas confianza — y entendiendo por que, que es la parte que permanece.&rdquo;</p></div>
          <p>El analisis en el almuerzo no es un resumen. Es la conversacion que hace que todo el dia tenga sentido.</p>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Que esta incluido</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Eleccion del campo</strong>Adaptada a su juego, handicap y expectativas</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Hora de salida</strong>Reservada y completamente gestionada</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing previo</strong>Que esperar del campo</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 hoyos junto a Andy</strong>Jugando, como su companero</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching en campo</strong>Gestion del campo, eleccion de palos</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Analisis posterior</strong>Que mejoro, en que trabajar</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Almuerzo</strong>En el restaurante del campo o local (Dia Signature)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Que campo?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Son Gual y Alcanada son los campos principales. Pero la eleccion siempre se hace con usted.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Un grupo con principiantes, una tarde corta — hay campos que funcionan mejor, y le dire honestamente cual. Algunos son solo para socios — ese acceso puede organizarse.</p>
        </div>
        <div className="courses-grid">
          <div className="course-choice reveal">
            <p className="region">Palma · 11km · Championship</p>
            <h3>Son Gual</h3>
            <p>Mi campo mas jugado en la isla. Diseno de Thomas Himmel (2007) con su propio ecosistema de viento. El tramo final — hoyos 15 a 18 — entre los cuatro mejores hoyos del golf europeo. El campo favorito declarado de Rafa Nadal.</p>
          </div>
          <div className="course-choice reveal">
            <p className="region">Alcudia · 55km · Costero</p>
            <h3>Alcanada</h3>
            <p>Probablemente el mas escenico de Mallorca. Diseno de Robert Trent Jones Jr. El faro visible desde 16 de los 18 hoyos. La terraza del restaurante es uno de los mejores lugares de la isla.</p>
          </div>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Para quien es</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>La experiencia se adapta a su juego.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>El golfista en visita</h3><p>Un golfista con handicap que quiere que su vuelta en Mallorca sea realmente memorable.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>La brecha practica/campo</h3><p>Golfistas cuyo juego de practica nunca se transfiere. El problema casi siempre es la gestion del campo.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>El grupo de ejecutivos</h3><p>Grupos de empresa, directivos de visita, dia premium totalmente organizado.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>El principiante</h3><p>Golfistas ocasionales que quieren compania experta sin intimidacion.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>El golfista residente</h3><p>Basado en la isla, buscando trabajo regular con un profesional.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Quien quiere mas</h3><p>El unico requisito es querer una experiencia de golf genuinamente diferente.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Lo que dicen los golfistas</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>En sus propias palabras.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jugar al golf con Andy fue una experiencia extraordinaria. Tiene un nivel de percepcion sin igual y lo transmite de una manera sutil y empatica. Tras solo 18 hoyos, descubri un nuevo techo a mi potencial.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;La comprension de los calculos detras de cada golpe ha mejorado enormemente mi toma de decisiones. El momento que mas me impacto fue ver a Andy golpear un hierro 3 a 220 metros por encima de un dogleg y colocarlo en el green.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy cambio completamente como pienso sobre la gestion del campo. Despues de 18 hoyos con el en Son Gual, jugue mi mejor resultado y entendi por que.&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Experiencias & Paquetes</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Tres niveles. Todos privados. Todos con acompanamiento personal.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>La diferencia es lo completo que es el dia. Los tres incluyen el mismo nivel de experiencia en campo.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">La Vuelta de Mallorca</p>
            <h3 className="tier__name">Jugar con un Profesional</h3>
            <p className="tier__price">Desde &euro;500 por persona</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Campo adaptado a su juego</li>
              <li>Hora de salida gestionada</li>
              <li>Briefing y calentamiento</li>
              <li>18 hoyos junto a Andy</li>
              <li>Coaching en campo</li>
              <li>Analisis posterior</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">El Dia Signature</p>
            <h3 className="tier__name">Dia de Golf con Anfitrion</h3>
            <p className="tier__price">Desde &euro;650 por persona</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Todo de La Vuelta de Mallorca</li>
              <li>Son Gual o Alcanada</li>
              <li>Almuerzo largo en el restaurante</li>
              <li>Regalo sorpresa</li>
              <li>Ritmo pausado — un dia completo</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">La Experiencia Completa</p>
            <h3 className="tier__name">Viaje de Golf a Medida</h3>
            <p className="tier__price">A consultar</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Dia en varios campos o itinerario</li>
              <li>Transporte privado desde Palma</li>
              <li>Cena en restaurante seleccionado</li>
              <li>Sesion spa o recuperacion</li>
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
          <h2 className="serif-display" style={{color:'#fff'}}>Contacteme y organicemos su dia.</h2>
          <p>Digame sus fechas, su handicap y lo que espera. Le respondre con una recomendacion — personalmente, en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Reserve su dia &rarr;</Link>
          <Link href="/es/golf-courses" className="btn btn--outline-white">Explorar los campos</Link>
        </div>
      </section>
    </PageLayout>
  )
}
