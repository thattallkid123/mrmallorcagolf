'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Elección experta', region: 'Palma · 11km del centro', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Dificultad', excerpt: 'El diseño de Thomas Himmel de 2007 tiene su propio ecosistema de viento. El tramo final — hoyos 15 al 18 — está entre los cuatro mejores hoyos del golf europeo.' },
  { cls: 'course-card--2', badge: '★ Elección experta', region: 'Alcúdia · Norte de Mallorca', name: 'Alcanada', meta: ['Costero','Par 72','€95–175'], stars: '★★★★★', difficulty: '8/10 Dificultad', excerpt: 'Robert Trent Jones Jr. en su versión más escénica. El hoyo 17 — un par 3 sobre una ensenada con el faro directamente detrás de la bandera — es uno de los más fotografiados de España.' },
  { cls: 'course-card--3', badge: 'Mejor de España 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Dificultad', excerpt: 'Elegido mejor campo de golf de España en los World Golf Awards 2025. Vistas sobre la Bahía de Palma. Un olivo milenario en el hoyo 15.' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Suroeste', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Dificultad', excerpt: 'Sede del Mallorca Golf Open del DP World Tour 2021. Uno de los campos más largos de la isla.' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Suroeste', name: 'Golf de Andratx', meta: ['El más exigente','Par 70','€96–140'], stars: '★★★★☆', difficulty: '9/10 Dificultad', excerpt: 'El hoyo 6 es el par 5 más largo de España con 609 metros. Construido en las colinas costeras sin concesiones. Lleve pelotas de repuesto y sin ego.' },
]

const faqs = [
  { q: '¿Necesito ser un buen golfista?', a: 'En absoluto. La experiencia se adapta a su nivel — tanto principiantes como jugadores de scratch sacan provecho del día. El único requisito es querer una experiencia de golf genuinamente diferente.' },
  { q: '¿Qué campo utiliza?', a: 'Depende de usted. Son Gual y Alcanada son mis campos principales para un día completo serio. Para principiantes, grupos o vueltas más cortas hay mejores opciones — y le diré honestamente cuál es la más adecuada.' },
  { q: '¿Cómo reservo?', a: 'Póngase en contacto. Dígame sus fechas y lo que busca — le respondo personalmente en 24 horas. Sin sistemas de reserva. Sin esperas.' },
  { q: '¿Es adecuado para un grupo?', a: 'Sí. Las experiencias funcionan para personas solas, parejas, grupos de amigos y jornadas de empresa. La Experiencia Completa es especialmente popular entre grupos corporativos y directivos que visitan la isla.' },
  { q: '¿Cuándo es mejor venir?', a: 'Octubre, noviembre, marzo y abril. La mejor combinación de condiciones de campo, clima, relación calidad-precio y ritmo de juego. La isla es jugable todo el año — en enero, los fairways aquí están en mejor estado que en agosto en Inglaterra.' },
]

// Career venues for scrolling strip (replaces static grid)
const CAREER_VENUES = [
  { name: 'Pebble Beach', detail: 'California, USA' },
  { name: 'The Open Championship', detail: 'UK' },
  { name: 'Evian Championship', detail: "France · Women's Major" },
  { name: 'Doral', detail: 'Miami, USA' },
  { name: 'World Cruise', detail: '40+ Countries' },
  { name: 'TPI Oceanside', detail: 'California, USA' },
  { name: 'Egypt International Pro-Am', detail: 'Cairo, Egypt' },
  { name: 'Shanghai', detail: 'China · 11 Years' },
]

function CareerStrip() {
  const trackRef = useRef(null)
  const allVenues = [...CAREER_VENUES, ...CAREER_VENUES]
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf
    const tick = () => {
      pos += 0.4
      if (pos >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <section style={{background:'var(--deep)',padding:'clamp(48px,6vw,72px) 0',overflow:'hidden'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 clamp(20px,5vw,60px)',marginBottom:'2.5rem'}}>
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.75rem'}}>Venues &amp; experience</p>
        <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.8rem,3vw,2.6rem)'}}>Where the career was built.</h2>
      </div>
      <div style={{position:'relative',overflow:'hidden'}}>
        <div ref={trackRef} style={{display:'flex',gap:2,willChange:'transform',width:'max-content'}}>
          {allVenues.map((v, i) => (
            <div key={i} style={{flexShrink:0,width:240,padding:'28px 24px',background:'rgba(255,255,255,0.04)',borderLeft:'1px solid rgba(255,255,255,0.06)',textAlign:'center'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,color:'#fff',marginBottom:'0.4rem'}}>{v.name}</p>
              <p style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',fontFamily:"'Jost',sans-serif"}}>{v.detail}</p>
            </div>
          ))}
        </div>
        <div style={{position:'absolute',top:0,left:0,width:120,height:'100%',background:'linear-gradient(to right,var(--deep),transparent)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',top:0,right:0,width:120,height:'100%',background:'linear-gradient(to left,var(--deep),transparent)',pointerEvents:'none'}}/>
      </div>
    </section>
  )
}

export default function HomePageES() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  const onMouseDown = (e) => { isDragging.current = true; trackRef.current.style.cursor = 'grabbing'; startX.current = e.pageX - trackRef.current.offsetLeft; scrollLeftStart.current = trackRef.current.scrollLeft }
  const onMouseLeave = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseMove = (e) => { if (!isDragging.current) return; e.preventDefault(); const x = e.pageX - trackRef.current.offsetLeft; trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4 }

  return (
    <>
      <section className="hero">
        <div className="hero__bg" style={{backgroundImage:'linear-gradient(160deg, rgba(26,25,22,0.35) 0%, rgba(26,25,22,0.72) 70%), linear-gradient(to bottom, rgba(26,25,22,0.08) 0%, rgba(26,25,22,0.55) 100%), url(/images/hero-main.jpg)',backgroundSize:'auto, auto, cover',backgroundPosition:'center, center, center 50%'}}></div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA Advanced Professional · Mallorca</p>
          <h1 className="serif-display hero__title">
            Juegue los mejores<br />campos de Mallorca.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Con un profesional a su lado.</em>
          </h1>
          <p className="hero__sub">Experiencias y coaching en campo — para golfistas que quieren sacar más partido a su tiempo en la isla.</p>
          <div className="hero__actions">
            <Link href="/es/play-with-a-pro" className="btn btn--gold">Ver las experiencias →</Link>
            <Link href="/es/golf-courses" className="btn btn--outline-white">Explorar los campos</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master certificado</em></p>
          <p className="hero__trust-line"><em>11 años en Shanghái</em></p>
          <p className="hero__trust-line">Pebble Beach · Évian · The Open</p>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Lo que marca la diferencia</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Muchas experiencias de golf en Mallorca se reservan a través de una plataforma.<br />Esto es otra cosa.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            Un día privado con un PGA Advanced Professional que ha entrenado al más alto nivel en tres continentes — desde jugadores de la selección nacional china hasta golfistas en los grandes escenarios competitivos de Europa, Asia y Estados Unidos. La experiencia que hay detrás del día marca la diferencia. El golf es mejor. Los consejos son genuinos.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1"><div className="intro__stat-num">18</div><div className="intro__stat-label">Años de coaching de golf</div></div>
          <div className="intro__stat reveal reveal-delay-2"><div className="intro__stat-num">15.000+</div><div className="intro__stat-label">Lecciones impartidas</div></div>
          <div className="intro__stat reveal reveal-delay-3"><div className="intro__stat-num">300+</div><div className="intro__stat-label">Campeones de torneo</div></div>
        </div>
      </section>

      
      {/* DOUYIN STRIP */}
      <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}>
        <p style={{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.65)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}>
          Andy 教练 &nbsp;·&nbsp; Más de 300 millones de visualizaciones en TikTok &nbsp;·&nbsp; Contenido de coaching de confianza mundial
        </p>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="serif-display">Así funciona el día.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal"><span className="how__num">01</span><h3>Póngase en contacto</h3><p>Dígame sus fechas, su hándicap y lo que busca. Le respondo personalmente en 24 horas.</p></div>
          <div className="how__step reveal reveal-delay-1"><span className="how__num">02</span><h3>Organizo su día</h3><p>Recomendación de campo, hora de salida, almuerzo, transporte — todo resuelto antes de que llegue.</p></div>
          <div className="how__step reveal reveal-delay-2"><span className="how__num">03</span><h3>Llegue y juegue</h3><p>Su único trabajo es disfrutar la vuelta.</p></div>
        </div>
      </section>

                  {/* La mayoría de los campos en Europa cierran en invierno. Mallorca no. En enero los fairways aquí son impecables.LACEHOLDER */}
      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div>
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>Por qué Mallorca</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>Mallorca tiene campos de nivel European Tour. Muchos visitantes juegan unos pocos y se preguntan qué se perdieron.</h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>La mayoría de los campos en Europa cierran en invierno. Mallorca no. En enero los fairways aquí son impecables.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {[['22','campos en la isla'],['300+','días de sol al año'],['Ene–Dic','Temporada todo el año']].map(([num,label],i) => (
              <div key={i} style={{padding:'24px 0',borderBottom:'1px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'baseline',gap:16}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,color:'var(--gold)',lineHeight:1}}>{num}</span>
                <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.35)',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif"}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="courses">
        <div className="courses__header">
          <div className="courses__header-left"><p className="eyebrow">Campos destacados</p><h2 className="serif-display">Los mejores campos de Mallorca — jugados y valorados.</h2></div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg></button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg></button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c,i) => (
            <article key={i} className={`course-card ${c.cls}`} onClick={() => router.push('/es/golf-courses')} style={{cursor:'pointer'}}>
              <div className="course-card__bg"></div><div className="course-card__overlay"></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">{c.meta.map((m,j)=><span key={j}>{j>0&&<span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.3)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>)}</div>
                <div className="course-card__rating"><span className="course-card__stars">{c.stars}</span><span className="course-card__rating-label"> · {c.difficulty}</span></div>
                <p className="course-card__excerpt">{c.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link href="/es/golf-courses" className="btn btn--dark">Ver los 22 campos →</Link>
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">La experiencia</p>
          <h2 className="serif-display">La mayoría de los días de golf en Mallorca son una hora de salida y un hasta luego.</h2>
          <span className="gold-rule"></span>
          <p>Pasé más de una década entrenando en China, donde las clases de golf costaban 500 € la hora y los clientes querían mejora real, no solo ánimos. Antes de eso, entrené en Pebble Beach, en The Open Championship, en Évian, y pasé una temporada en un crucero alrededor del mundo por cuarenta países.</p>
          <p>Ese bagaje da forma a cada vuelta que acompaño. Consejos genuinos a lo largo de la jornada — estrategia de campo, toma de decisiones, las cosas que la mayoría de los golfistas nunca escuchan. El tipo de día que hace que el vuelo de vuelta se pase rápido.</p>
          <p>Todo está resuelto antes de que llegue — el campo, la hora de salida, la mesa para el almuerzo. Usted solo tiene que aparecer y jugar.</p>
          <Link href="/es/play-with-a-pro" className="btn btn--dark">Ver las experiencias →</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: 'i', title: 'Todo organizado', text: 'Campo, hora de salida, transporte, almuerzo — todo gestionado antes de su llegada.' },
            { icon: '→', title: 'Coaching en campo', text: 'Mejora real en condiciones reales. No es una lección. No es un comentario. La observación correcta en el momento correcto.' },
            { icon: '◇', title: 'Verdaderamente privado', text: 'Solo usted y un PGA Advanced Professional. Sin desconocidos en su grupo. Una vuelta diseñada íntegramente para su juego.' },
            { icon: '+', title: 'Acceso a más', text: 'Campos solo para socios a los que la mayoría de visitantes no puede acceder por su cuenta — Santa Ponsa 2 y 3, entre otros.' },
          ].map((f,i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text"><h3>{f.title}</h3><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__header reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>Lo que dicen los golfistas</p>
          <h2 className="serif-display" style={{color:'#fff'}}>En sus propias palabras.</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jugar al golf con Andy fue una experiencia extraordinaria. Tiene un nivel de percepción sin igual y lo transmite de una manera a la vez sutil y empática. Tras solo 18 hoyos juntos, he descubierto un nuevo techo a mi potencial.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;La comprensión de los cálculos detrás de cada golpe ha mejorado enormemente mi toma de decisiones. El momento que más me impactó fue ver a Andy golpear un hierro 3 a 220 metros por encima de un dogleg a la derecha con árboles y colocarlo en el green. Un talento asombroso.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
        </div>
      </section>

            {/* CAREER STRIP */}
      <CareerStrip />

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Experiencias &amp; Paquetes</p>
          <h2 className="serif-display">Experiencias de golf privadas diseñadas para usted.</h2>
          <p>Tres niveles. Todos privados. Todos con acompañamiento personal. La diferencia está en lo completo que es el día.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">La Vuelta de Mallorca</p>
            <h3 className="package__name">Jugar con un profesional</h3>
            <p className="package__price">Desde 500 € por persona</p>
            <div className="package__divider"></div>
            <ul className="package__features">{['Recomendación de campo adaptada a su juego','Hora de salida reservada y gestionada','Briefing y calentamiento previos','18 hoyos junto a Andy','Coaching en campo durante toda la vuelta','Análisis posterior — honesto y claro'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/es/contact" className="btn btn--dark">Consultar →</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">El Día Signature</p>
            <h3 className="package__name">Día de golf con anfitrión</h3>
            <p className="package__price">Desde 650 € por persona</p>
            <div className="package__divider"></div>
            <ul className="package__features">{['Todo de La Vuelta de Mallorca','Son Gual o Alcanada — dos de los mejores campos de la isla','Almuerzo largo en el restaurante del campo','Regalo sorpresa seleccionado','Ritmo pausado — un día completo, no una vuelta apresurada'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/es/contact" className="btn btn--gold">Consultar →</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">La Experiencia Completa</p>
            <h3 className="package__name">Viaje de golf a medida</h3>
            <p className="package__price">A consultar</p>
            <div className="package__divider"></div>
            <ul className="package__features">{['Día en varios campos o itinerario completo','Transporte privado desde Palma','Cena en un restaurante cuidadosamente elegido','Sesión de spa o recuperación en un establecimiento asociado','Coordinación concierge completa','Para grupos, empresas y solicitudes a medida'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/es/contact" className="btn btn--dark">Consultar →</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Preguntas</p>
          <h2 className="serif-display">Lo que la gente pregunta antes de ponerse en contacto.</h2>
          <p>¿Aún tiene dudas? Contácteme directamente — respondo personalmente en 24 horas.</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f,i) => (
            <div key={i} className={`faq__item${openFaq===i?' open':''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq===i?-1:i)}>{f.q}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg></div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">¿Listo para jugar Mallorca como merece?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Contácteme.<br />Yo me encargo del resto.</h2>
          <p>Dígame sus fechas, su hándicap y lo que espera del día. Le responderé con una recomendación — personalmente, en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;El golf es mejor. Los consejos son genuinos.&rdquo;</p>
          <Link href="/es/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Reserve su día →</Link>
          <Link href="/es/golf-courses" className="btn btn--outline-white">Explorar los campos</Link>
        </div>
      </section>
    </>
  )
}
