import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Guía de Golf en Mallorca — Análisis de campos y consejos',
  description: 'Guías honestas de golf en Mallorca de un Profesional PGA. Análisis de campos, green fees y planificación de viajes — actualizadas para 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Análisis del campo', badgeGold: true, title: 'Son Gual Golf Mallorca — Análisis honesto de un Profesional PGA (2026)', intro: 'Mi campo más jugado en la isla. El viento, los greens, los últimos hoyos — y por qué Obama y Nadal siguen volviendo.', readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap requerido' },
  { slug: 'alcanada-review', badge: 'Análisis del campo', badgeGold: true, title: 'Club de Golf Alcanada — Análisis honesto de un Profesional PGA (2026)', intro: 'El campo al que llevo a la gente cuando quiero que vuelvan a casa con una historia. El faro lo cambia todo.', readTime: '7 min', keywords: 'Costa · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Análisis del campo', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Análisis honesto de un Profesional PGA (2026)', intro: 'Uno de los campos más largos de Europa, historia en el DP World Tour y un campo que genuinamente ayuda a recuperar la confianza con el driver.', readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Acceso público' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'La Experiencia', badgeGold: false, title: 'Un día en Son Gual con un Profesional PGA', intro: 'Lo que ocurre realmente cuando pasas un día completo en el mejor campo de Mallorca con un coach que lo juega casi cada semana.', readTime: '5 min', keywords: 'Son Gual · Jugar con un Pro · Experiencia de día completo' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guía', badgeGold: false, title: 'Los mejores campos de golf de Mallorca — Ranking honesto de un Profesional PGA', intro: 'Veintidós campos en la isla. Así los clasificaría para un visitante con tiempo limitado y altas expectativas.', readTime: '8 min', keywords: 'Todos los niveles · Comparativa de greenfees · Actualizado 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guía', badgeGold: false, title: '¿Es Mallorca buena para el golf? Una respuesta honesta de alguien que vive aquí', intro: 'La versión sin filtros: qué hace mejor la isla que Portugal, dónde se queda corta y a quién le conviene.', readTime: '5 min', keywords: 'Mallorca vs. Portugal · Calidad de los campos · Para todos los niveles' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guía', badgeGold: false, title: 'La mejor época para jugar al golf en Mallorca — Mes a mes', intro: 'Octubre es el mes que elegiría. Aquí explico por qué y qué ofrece cada mes en términos de clima, precio y afluencia.', readTime: '6 min', keywords: 'Clima · Greenfees por temporada · Afluencia' },
  { slug: 'golf-cost-mallorca', badge: 'Guía', badgeGold: false, title: '¿Cuánto cuesta el golf en Mallorca? Greenfees, alquiler y costes ocultos', intro: 'El panorama completo de lo que cuesta realmente un viaje de golf aquí: greenfees, alquiler, caddies y dónde ahorrar sin sacrificar calidad.', readTime: '5 min', keywords: '€77–220 greenfees · Alquiler · Caddies · Precios 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guía', badgeGold: false, title: 'Planificar un viaje de golf a Mallorca — Todo lo que necesitas saber', intro: 'Vuelos, campos, dónde alojarse cerca del golf, cómo moverse. La guía práctica que desearía haber tenido cuando llegué.', readTime: '7 min', keywords: 'Planificación · Dónde alojarse · Cómo llegar' },
]

export default function GuidesIndex_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/es" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>ES</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>Guías</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf en Mallorca.<br />Guías honestas.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            Análisis de campos, planificación de viajes y green fees — escritas por un Profesional PGA que juega aquí cada semana.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Actualizado 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Análisis de primera mano</span>
            <span className="page-hero__tag">Profesional PGA</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {liveGuides.map((g) => (
            <Link key={g.slug} href={`/es/guides/${g.slug}`} className="reveal"
              style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </Link>
          ))}

          {comingSoonGuides.map((g) => (
            <div key={g.slug} className="reveal"
              style={{display:'block',borderBottom:'1px solid var(--linen)',padding:'32px 0',pointerEvents:'none',userSelect:'none'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(45,74,62,.07)',color:'var(--taupe)',border:'1px solid var(--linen)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:600,color:'var(--deep)',alignSelf:'center',marginLeft:'auto',background:'var(--gold)',padding:'5px 12px'}}>
                  Próximamente
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">¿Listo para jugar?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Una ronda privada en uno de estos campos, con un Profesional PGA a tu lado.</h2>
          <p>Dime tus fechas y lo que buscas. Te respondo personalmente en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Ver las experiencias →</Link>
          <Link href="/es/contact" className="btn btn--outline-white">Contactar</Link>
        </div>
      </section>
    </PageLayout>
  )
}
