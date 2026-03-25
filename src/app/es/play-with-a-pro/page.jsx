import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Jugar con un Profesional — Días de Golf Privados en Mallorca',
  description: 'Una vuelta de golf privada en Mallorca junto al UK PGA Advanced Professional Andy Griffiths. Coaching en campo, día completo organizado. Desde €350 por persona.',
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
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Días de Golf Privados · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Un Día de Golf Privado en Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>No es una lección. No es una vuelta estándar. Un dia privado en uno de los mejores campos de la isla, con un UK PGA profesional que ha entrenado con dos décadas de experiencia en tres continentes.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>€350 p.p. + tarifa green</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/es/contact" className="btn btn--gold">Reserve su día &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Ver paquetes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Qué incluye el día</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Antes de que llegue, ya sé lo que debo observar.</h2>
          <p>Antes de su llegada, rellena un breve cuestionario. Qué le frustra, dónde está la brecha. Al llegar al primer tee, ya sé lo que debo observar.</p>
          <p>Durante la vuelta, el coaching se integra de forma natural — no un comentario continuo, sino la observación correcta en el momento correcto.</p>
          <p>He entrenado en entornos donde se esperaba una mejora seria y medible — jugadores de la selección nacional en China, entusiastas del golf por toda Asia.</p>
          <div className="pull-quote"><p>&ldquo;Lo que la mayoría de los golfistas descubre es que se van jugando notablemente mejor y con más confianza — y entendiendo por qué, que es la parte que permanece.&rdquo;</p></div>
          <p>El análisis en el almuerzo no es un resumen. Es la conversacion que hace que todo el dia tenga sentido.</p>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Qué está incluido</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Elección del campo</strong>Adaptada a su juego, handicap y expectativas</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Hora de salida</strong>Reservada y completamente gestionada</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing previo</strong>Qué esperar del campo</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 hoyos junto a Andy</strong>Jugando, como su compañero</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching en campo</strong>Gestión del campo, elección de palos</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Análisis posterior</strong>Que mejoro, en que trabajar</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Almuerzo</strong>En el restaurante del campo o local (Dia Signature)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Qué campo?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Son Gual y Alcanada son los campos principales. Pero la elección siempre se hace con usted.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Un grupo con principiantes, una tarde corta — hay campos que funcionan mejor, y le diré honestamente cual. Algunos son solo para socios — ese acceso puede organizarse.</p>
        </div>
        <div className="courses-grid">
          <div className="course-choice reveal">
            <p className="region">Palma · 11km · Championship</p>
            <h3>Son Gual</h3>
            <p>Mi campo mas jugado en la isla. Diseño de Thomas Himmel (2007) con su propio ecosistema de viento. El tramo final — hoyos 15 a 18 — entre los cuatro mejores hoyos del golf europeo. El campo favorito declarado de Rafa Nadal.</p>
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
          <p className="eyebrow">Para quién es</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>La experiencia se adapta a su juego.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>El golfista en visita</h3><p>Un golfista con handicap que quiere que su vuelta en Mallorca sea realmente memorable.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>La brecha práctica/campo</h3><p>Golfistas cuyo juego de práctica nunca se transfiere. El problema casi siempre es la gestión del campo.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>El grupo de ejecutivos</h3><p>Grupos de empresa, directivos de visita, dia premium totalmente organizado.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>El principiante</h3><p>Golfistas ocasionales que quieren compania experta sin intimidacion.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>El golfista residente</h3><p>Basado en la isla, buscando trabajo regular con un profesional.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Quien quiere más</h3><p>El único requisito es querer una experiencia de golf genuinamente diferente.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Lo que dicen los golfistas</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>En sus propias palabras.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jugar al golf con Andy fue una experiencia extraordinaria. Tiene un nivel de percepción sin igual y lo transmite de una manera sutil y empática. Tras solo 18 hoyos, descubrí un nuevo techo a mi potencial.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;La comprensión de los cálculos detras de cada golpe ha mejorado enormemente mi toma de decisiónes. El momento que mas me impacto fue ver a Andy golpear un hierro 3 a 220 metros por encima de un dogleg y colocarlo en el green.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy cambio completamente como pienso sobre la gestión del campo. Despues de 18 hoyos con el en Son Gual, jugue mi mejor resultado y entendi por que.&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Experiencias & Paquetes</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Tres niveles. Todos privados. Todos con aacompañamiento personal.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>La diferencia es lo completo que es el día. Los tres incluyen el mismo nivel de experiencia en campo.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">La Vuelta de Mallorca</p>
            <h3 className="tier__name">Jugar con un Profesional</h3>
            <p className="tier__price">€350 p.p. + tarifa green</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Campo adaptado a su juego</li>
              <li>Hora de salida gestionada</li>
              <li>Briefing y calentamiento</li>
              <li>18 hoyos junto a Andy</li>
              <li>Coaching en campo</li>
              <li>Análisis posterior</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">El Día Signature</p>
            <h3 className="tier__name">Día de Golf con Anfitrión</h3>
            <p className="tier__price">Desde €450 p.p. + tarifa green</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Todo de La Vuelta de Mallorca</li>
              <li>Son Gual o Alcanada</li>
              <li>Almuerzo largo en el restaurante</li>
              <li>Regalo sorpresa</li>
              <li>Ritmo pausado — un día completo</li>
            </ul>
            <Link href="/es/contact" className="tier__btn">Consultar &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">La Experiencia Completa</p>
            <h3 className="tier__name">Viaje de Golf a Medida</h3>
            <p className="tier__price">A consultar</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Día en varios campos o itinerario</li>
              <li>Transporte privado desde Palma</li>
              <li>Cena en restaurante selecciónado</li>
              <li>Sesión spa o recuperacion</li>
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
          <h2 className="serif-display" style={{color:'#fff'}}>Contácteme y organicemos su dia.</h2>
          <p>Dígame sus fechas, su handicap y lo que espera. Le responderé con una recomendacion — personalmente, en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Reserve su día &rarr;</Link>
          <Link href="/es/golf-courses" className="btn btn--outline-white">Explorar los campos</Link>
        </div>
      </section>
    </PageLayout>
  )
}
