'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Elección experta', region: 'Palma · 11km del centro', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Dificultad', excerpt: 'El diseño de Thomas Himmel de 2007 tiene su propio ecosistema de viento. El tramo final — hoyos 15 al 18 — está entre los cuatro mejores hoyos del golf europeo.', img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ Elección experta', region: 'Alcúdia · Norte de Mallorca', name: 'Alcanada', meta: ['Costero','Par 72','€115–220'], stars: '★★★★★', difficulty: '7/10 Dificultad', excerpt: 'Robert Trent Jones Jr. en su versión más escénica. El faro visible desde 16 de 18 hoyos. Uno de los campos más fotografiados de España.', img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: 'Mejor de España 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Dificultad', excerpt: 'Elegido mejor campo de golf de España en los World Golf Awards 2025. Vistas sobre la Bahía de Palma. Un olivo milenario en el hoyo 15.', img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', id: 'golf-santa-ponsa-1', badge: null, region: 'Santa Ponsa · Suroeste', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Dificultad', excerpt: 'Sede del Mallorca Golf Open del DP World Tour 2021. Uno de los campos más largos de la isla — el hoyo 10 con 590 m es uno de los par 5 más largos de Europa.', img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', id: 'golf-de-andratx', badge: null, region: 'Camp de Mar · Suroeste', name: 'Golf de Andratx', meta: ['El más exigente','Par 72','€96–140'], stars: '★★★★☆', difficulty: '9/10 Dificultad', excerpt: 'El hoyo 6 es el par 5 más largo de España con 609 metros. Construido en las colinas costeras sin concesiones. Lleve pelotas de repuesto y sin ego.', img: '/images/andratx.webp' },
]

const faqs = [
  { q: '¿Necesito ser un buen golfista?', a: 'En absoluto. La experiencia se adapta a su nivel — tanto principiantes como jugadores de scratch sacan provecho del día. El único requisito es querer una experiencia de golf genuinamente diferente.' },
  { q: '¿Qué campo utiliza?', a: 'Depende de usted. Son Gual y Alcanada son mis campos principales para un día completo serio. Para principiantes, grupos o vueltas más cortas hay mejores opciones — y le diré honestamente cuál es la más adecuada.' },
  { q: '¿Cómo reservo?', a: 'Póngase en contacto. Dígame sus fechas y lo que busca — le respondo personalmente en 24 horas. Sin sistemas de reserva. Sin esperas.' },
  { q: '¿Es adecuado para un grupo?', a: 'Sí. Las experiencias funcionan para personas solas, parejas, grupos de amigos y jornadas de empresa. La Experiencia Completa es especialmente popular entre grupos corporativos y directivos que visitan la isla.' },
  { q: '¿Cuándo es mejor venir?', a: 'Octubre, noviembre, marzo y abril. La mejor combinación de condiciones de campo, clima, relación calidad-precio y ritmo de juego. La isla es jugable todo el año — en enero, los fairways aquí están en mejor estado que en agosto en Inglaterra.' },
]

const FEATURE_ICONS = {
  arranged: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></svg>),
  coaching: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>),
  private: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  access: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>),
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
          <p className="hero__eyebrow">UK PGA Advanced Professional · Mallorca</p>
          <h1 className="serif-display hero__title">
            Juegue los mejores<br />campos de Mallorca.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Con un profesional a su lado.</em>
          </h1>
          <div className="hero__actions">
            <Link href="/es/contact" className="btn btn--gold">Reserve su día</Link>
            <a href="#courses" className="btn btn--outline-white">Explorar campos</a>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>UK PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master certificado</em></p>
          <p className="hero__trust-line"><em>18 años enseñando golf</em></p>
          <p className="hero__trust-line">Pebble Beach · Évian · The Open</p>
        </div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Lo que marca la diferencia</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Muchas experiencias de golf en Mallorca se reservan a través de una plataforma.<br />Esto es otra cosa.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.65)',lineHeight:1.85}}>
            Un día privado con un UK PGA Advanced Professional con más de dos décadas enseñando en tres continentes — jugadores de equipos nacionales en China, grandes torneos en Europa, golfistas amateurs y profesionales en Asia y Estados Unidos. La experiencia es lo que marca la diferencia. El golf es mejor. Los consejos son genuinos.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1">
            <div className="intro__stat-num">18</div>
            <div className="intro__stat-label">Años de coaching de golf</div>
          </div>
          <div className="intro__stat reveal reveal-delay-2">
            <div className="intro__stat-num">15.000+</div>
            <div className="intro__stat-label">Lecciones impartidas</div>
          </div>
          <div className="intro__stat reveal reveal-delay-3">
            <div className="intro__stat-num">300+</div>
            <div className="intro__stat-label">Campeones de torneo</div>
          </div>
        </div>
      </section>

      <section style={{background:'var(--deep)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1.5rem clamp(20px,5vw,60px)'}}>
        <p style={{textAlign:'center',fontSize:'0.85rem',color:'rgba(255,255,255,0.65)',fontFamily:"'Jost',sans-serif",fontWeight:300,lineHeight:1.6}}>
          Andy 教练 &nbsp;·&nbsp; 300 millones+ de visualizaciones de coaching en TikTok &nbsp;·&nbsp; Contenido de coaching de confianza mundial
        </p>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="serif-display">Tres pasos hacia una ronda que recordará.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal">
            <span className="how__num">01</span>
            <h3>Póngase en contacto</h3>
            <p>Dígame sus fechas, su hándicap y lo que busca. Le respondo personalmente en 24 horas.</p>
          </div>
          <div className="how__step reveal reveal-delay-1">
            <span className="how__num">02</span>
            <h3>Organizo su día</h3>
            <p>Recomendación de campo, hora de salida, almuerzo, transporte — todo resuelto antes de que llegue.</p>
          </div>
          <div className="how__step reveal reveal-delay-2">
            <span className="how__num">03</span>
            <h3>Llegue y juegue</h3>
            <p>Su único trabajo es disfrutar la vuelta. La mayoría de la gente juega mejor de lo que esperaba.</p>
          </div>
        </div>
      </section>

      <section style={{background:'var(--deep)',padding:'clamp(60px,8vw,96px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
          <div className="reveal">
            <p className="eyebrow" style={{color:'rgba(255,255,255,.35)',marginBottom:'1rem'}}>Por qué Mallorca</p>
            <h2 className="serif-display" style={{color:'#fff',fontSize:'clamp(1.5rem,4vw,2.6rem)',marginBottom:'1.5rem'}}>Mallorca tiene campos de nivel European Tour. Muchos visitantes juegan unos pocos y se preguntan qué se perdieron.</h2>
            <p style={{fontSize:'1rem',color:'rgba(255,255,255,.6)',lineHeight:1.85,marginBottom:'1.25rem'}}>La mayoría de los campos en Europa cierran en invierno. Mallorca no. En enero, cuando muchos campos en Europa están cerrados, los fairways aquí están impecables y el primer tee está vacío. Octubre a abril es el momento ideal — green fees más bajos, campos menos concurridos, condiciones que superarían cualquier ronda de verano en otro lugar.</p>
            <p style={{fontSize:'1rem',color:'rgba(255,255,255,.6)',lineHeight:1.85}}>Veintidós campos en menos de una hora de coche. Varios han acogido el DP World Tour, la Gran Final del Rolex Challenge Tour, y atraído diseños de Robert Trent Jones Jr. y Jack Nicklaus. Esto no es una isla que casualmente tenga golf. Es un destino serio que la mayoría de visitantes nunca exploran correctamente.</p>
          </div>
          <div className="reveal reveal-delay-1">
            {[
              { num: '22', label: 'campos en la isla' },
              { num: '300+', label: 'días de sol al año' },
              { num: 'Ene–Dic', label: 'temporada todo el año' },
              { num: '€80–220', label: 'rango de green fees' },
            ].map((s, i) => (
              <div key={i} style={{padding:'1.5rem 0',borderBottom:'1px solid rgba(255,255,255,.08)',display:'flex',alignItems:'center',gap:'1.5rem'}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'2.2rem',fontWeight:500,color:'var(--gold)',flexShrink:0,width:120}}>{s.num}</span>
                <span style={{fontSize:'0.9rem',color:'rgba(255,255,255,.5)',fontFamily:"'Jost',sans-serif",fontWeight:300}}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="courses" id="courses">
        <div className="courses__header">
          <div className="courses__header-left">
            <p className="eyebrow">Campos destacados</p>
            <h2 className="serif-display">Los mejores campos de Mallorca — jugados y valorados.</h2>
          </div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)} aria-label="Scroll left">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L5 8l5 5"/></svg>
            </button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)} aria-label="Scroll right">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5"/></svg>
            </button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c, i) => (
            <article key={i} className={`course-card ${c.cls}`} onClick={() => router.push('/es/golf-courses#' + c.id)} style={{cursor:'pointer'}}>
              <div className="course-card__bg" style={{backgroundImage:`url(${c.img})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
              <div className="course-card__overlay" style={{background:'linear-gradient(to top, rgba(10,9,7,0.97) 0%, rgba(10,9,7,0.6) 50%, rgba(10,9,7,0.2) 80%, transparent 100%)'}}></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">
                  {c.meta.map((m, j) => (<span key={j}>{j > 0 && <span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.4)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>))}
                </div>
                <div className="course-card__rating">
                  <span className="course-card__stars">{c.stars}</span>
                  <span className="course-card__rating-label"> · {c.difficulty}</span>
                </div>
                <p className="course-card__excerpt course-card__excerpt--visible">{c.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <Link href="/es/golf-courses#all-courses" className="btn btn--dark">Ver los 22 campos →</Link>
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">La experiencia</p>
          <h2 className="serif-display">La mayoría de los días de golf en Mallorca son una hora de salida y un hasta luego.</h2>
          <span className="gold-rule"></span>
          <p>Pasé más de una década entrenando en China, donde las clases de golf costaban €500 la hora y los clientes querían mejora real, no solo ánimos. Antes de eso, entrené en Pebble Beach, The Open Championship, Évian, y pasé una temporada en un crucero mundial por cuarenta países.</p>
          <p>Esa experiencia da forma a cada ronda que acompaño. Consejos genuinos a lo largo del día — estrategia de campo, toma de decisiones, las cosas que rara vez salen a la luz en una lección estándar. Una ronda que seguirá en sus conversaciones en el vuelo a casa.</p>
          <p>Todo está resuelto antes de que llegue — el campo, la hora de salida, el almuerzo. Su único trabajo es jugar.</p>
          <Link href="/es/play-with-a-pro" className="btn btn--dark">Ver las experiencias</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: FEATURE_ICONS.arranged, title: 'Todo organizado', text: 'Campo, hora de salida, transporte, almuerzo — todo gestionado antes de su llegada.' },
            { icon: FEATURE_ICONS.coaching, title: 'Coaching en campo', text: 'Mejora real en condiciones reales. No es una lección. No es un comentario. La observación correcta en el momento correcto.' },
            { icon: FEATURE_ICONS.private, title: 'Verdaderamente privado', text: 'Solo usted y un UK PGA Advanced Professional. Sin desconocidos. Una ronda diseñada completamente para su juego.' },
            { icon: FEATURE_ICONS.access, title: 'Acceso a más', text: 'Campos solo para socios a los que la mayoría no puede acceder — Santa Ponsa 2 & 3, y otros.' },
          ].map((f, i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text"><h3>{f.title}</h3><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:'var(--pine)',padding:'clamp(48px,6vw,72px) clamp(20px,5vw,60px)'}}>
        <div style={{maxWidth:720,margin:'0 auto',textAlign:'center'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.3rem,2.5vw,1.9rem)',fontStyle:'italic',fontWeight:400,color:'#fff',lineHeight:1.45,marginBottom:'1.25rem'}}>
            &ldquo;Después de solo 18 hoyos juntos, he descubierto un nuevo nivel para mi potencial.&rdquo;
          </p>
          <p style={{fontSize:'9px',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold-light)',fontFamily:"'Jost',sans-serif"}}>— Jo, después de un día en Son Gual</p>
        </div>
      </section>

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Experiencias y paquetes</p>
          <h2 className="serif-display">Un coach. Un campo. Su día.</h2>
          <p>Tres niveles de experiencia. Todos privados, todos guiados personalmente por Andy.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">La ronda de Mallorca</p>
            <h3 className="package__name">Juega con un profesional</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Campo elegido según tu juego y hándicap','Hora de salida reservada y gestionada','Briefing previo y calentamiento','18 hoyos junto a Andy','Coaching en campo durante toda la ronda','Análisis posterior — honesto y claro'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'0.5rem'}}>€350 pp + green fee</p>
            <p style={{fontSize:'0.75rem',color:'var(--taupe)',marginBottom:'1.25rem',lineHeight:1.5}}>Los green fees son adicionales — típicamente €80–220 pp según campo y temporada.</p>
            <Link href="/es/contact" className="btn btn--dark">Consultar</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">El día signature</p>
            <h3 className="package__name">Día de golf con anfitrión</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {['Todo de La Ronda de Mallorca','Son Gual o Alcanada — dos de los mejores de la isla','Almuerzo largo en el restaurante del campo','Regalo sorpresa seleccionado','Ritmo pausado — un día completo, no una ronda apresurada'].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'0.5rem',color:'var(--gold-light)'}}>Desde €450 pp + green fee</p>
            <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.4)',marginBottom:'1.25rem',lineHeight:1.5}}>Los green fees son adicionales — típicamente €80–220 pp según campo y temporada.</p>
            <Link href="/es/contact" className="btn btn--gold">Consultar</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">La experiencia completa</p>
            <h3 className="package__name">Viaje de golf a medida</h3>
            <div className="package__divider"></div>
            <ul className="package__features">
              {[
                'Día en varios campos o itinerario completo de 4 días',
                'Transporte privado desde hoteles de Palma o villas',
                'Cena en un restaurante cuidadosamente elegido',
                'Sesión de spa o recuperación en lugar asociado',
                'Paseo en globo aerostático sobre las montañas',
                'Cata de vinos en una bodega mallorquina',
                'Concierge completo para grupos y empresas',
              ].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <p className="package__price" style={{marginTop:'1.25rem',marginBottom:'1.25rem'}}>Itinerario personalizado — consultar</p>
            <Link href="/es/contact" className="btn btn--dark">Consultar</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Preguntas</p>
          <h2 className="serif-display">Lo que la gente pregunta antes de ponerse en contacto.</h2>
          <p>Dígame sus fechas, su hándicap y lo que busca. Le responderé personalmente en 24 horas.</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f, i) => (
            <div key={i} className={`faq__item${openFaq === i ? ' open' : ''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg>
              </div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">¿Listo para jugar Mallorca como merece?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Póngase en contacto.<br />Yo me encargo del resto.</h2>
          <p>Dígame sus fechas, su hándicap y lo que espera del día. Le responderé con una recomendación — personalmente, en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;El golf es mejor. Los consejos son genuinos.&rdquo;</p>
          <Link href="/es/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px',letterSpacing:'0.18em'}}>Reserve su día</Link>
          <a href="https://wa.me/34624466702" className="btn btn--outline-white" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
