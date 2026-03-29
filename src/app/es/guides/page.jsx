import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'GuÃ­a de Golf en Mallorca â€” AnÃ¡lisis de campos y consejos',
  description: 'GuÃ­as honestas de golf en Mallorca de un Profesional PGA. AnÃ¡lisis de campos, green fees y planificaciÃ³n de viajes â€” actualizadas para 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'AnÃ¡lisis del campo', badgeGold: true, title: 'Son Gual Golf Mallorca â€” AnÃ¡lisis honesto de un Profesional PGA (2026)', intro: 'Mi campo mÃ¡s jugado en la isla. El viento, los greens, los Ãºltimos hoyos â€” y por quÃ© Obama y Nadal siguen volviendo.', readTime: '7 min', keywords: 'Championship Â· Par 72 Â· â‚¬80â€“165 Â· Handicap requerido' },
  { slug: 'alcanada-review', badge: 'AnÃ¡lisis del campo', badgeGold: true, title: 'Club de Golf Alcanada â€” AnÃ¡lisis honesto de un Profesional PGA (2026)', intro: 'El campo al que llevo a la gente cuando quiero que vuelvan a casa con una historia. El faro lo cambia todo.', readTime: '7 min', keywords: 'Costa Â· Par 72 Â· â‚¬115â€“220 Â· Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'AnÃ¡lisis del campo', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca â€” AnÃ¡lisis honesto de un Profesional PGA (2026)', intro: 'Uno de los campos mÃ¡s largos de Europa, historia en el DP World Tour y un campo que genuinamente ayuda a recuperar la confianza con el driver.', readTime: '6 min', keywords: 'Championship Â· Par 72 Â· â‚¬77â€“126 Â· Acceso pÃºblico' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'La Experiencia', badgeGold: false, title: 'Un dÃ­a en Son Gual con un Profesional PGA', intro: 'Lo que ocurre realmente cuando pasas un dÃ­a completo en el mejor campo de Mallorca con un coach que lo juega casi cada semana.', readTime: '5 min', keywords: 'Son Gual Â· Jugar con un Pro Â· Experiencia de dÃ­a completo' },
  { slug: 'best-golf-courses-mallorca', badge: 'GuÃ­a', badgeGold: false, title: 'Los mejores campos de golf de Mallorca â€” Ranking honesto de un Profesional PGA', intro: 'VeintidÃ³s campos en la isla. AsÃ­ los clasificarÃ­a para un visitante con tiempo limitado y altas expectativas.', readTime: '8 min', keywords: 'Todos los niveles Â· Comparativa de greenfees Â· Actualizado 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'GuÃ­a', badgeGold: false, title: 'Â¿Es Mallorca buena para el golf? Una respuesta honesta de alguien que vive aquÃ­', intro: 'La versiÃ³n sin filtros: quÃ© hace mejor la isla que Portugal, dÃ³nde se queda corta y a quiÃ©n le conviene.', readTime: '5 min', keywords: 'Mallorca vs. Portugal Â· Calidad de los campos Â· Para todos los niveles' },
  { slug: 'best-time-play-golf-mallorca', badge: 'GuÃ­a', badgeGold: false, title: 'La mejor Ã©poca para jugar al golf en Mallorca â€” Mes a mes', intro: 'Octubre es el mes que elegirÃ­a. AquÃ­ explico por quÃ© y quÃ© ofrece cada mes en tÃ©rminos de clima, precio y afluencia.', readTime: '6 min', keywords: 'Clima Â· Greenfees por temporada Â· Afluencia' },
  { slug: 'golf-cost-mallorca', badge: 'GuÃ­a', badgeGold: false, title: 'Â¿CuÃ¡nto cuesta el golf en Mallorca? Greenfees, alquiler y costes ocultos', intro: 'El panorama completo de lo que cuesta realmente un viaje de golf aquÃ­: greenfees, alquiler, caddies y dÃ³nde ahorrar sin sacrificar calidad.', readTime: '5 min', keywords: 'â‚¬77â€“220 greenfees Â· Alquiler Â· Caddies Â· Precios 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'GuÃ­a', badgeGold: false, title: 'Planificar un viaje de golf a Mallorca â€” Todo lo que necesitas saber', intro: 'Vuelos, campos, dÃ³nde alojarse cerca del golf, cÃ³mo moverse. La guÃ­a prÃ¡ctica que desearÃ­a haber tenido cuando lleguÃ©.', readTime: '7 min', keywords: 'PlanificaciÃ³n Â· DÃ³nde alojarse Â· CÃ³mo llegar' },
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
            <span style={{color:'var(--gold-light)'}}>GuÃ­as</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'Golf en Mallorca.<br />GuÃ­as honestas.'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            AnÃ¡lisis de campos, planificaciÃ³n de viajes y green fees â€” escritas por un Profesional PGA que juega aquÃ­ cada semana.
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Actualizado 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… AnÃ¡lisis de primera mano</span>
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
                  PrÃ³ximamente
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
          <p className="eyebrow eyebrow--gold">Â¿Listo para jugar?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Una ronda privada en uno de estos campos, con un Profesional PGA a tu lado.</h2>
          <p>Dime tus fechas y lo que buscas. Te respondo personalmente en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Ver las experiencias â†’</Link>
          <Link href="/es/contact" className="btn btn--outline-white">Contactar</Link>
        </div>
      </section>
    </PageLayout>
  )
}

