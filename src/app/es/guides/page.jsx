import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'GuÃ­a de Golf Mallorca â€” ReseÃ±as de Campos y Consejos',
  description: 'GuÃ­as honestas sobre el golf en Mallorca por un PGA profesional. ReseÃ±as de campos, green fees y planificaciÃ³n de viaje â€” actualizado 2026.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides' },
}

export default function GuidesIndex_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/es" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>ES</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>GuÃ­as</span>
          </p>
          <h1>Golf en Mallorca.<br />GuÃ­as Honestas.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>ReseÃ±as de campos, planificaciÃ³n de viajes y green fees â€” escritas por un PGA profesional que juega aquÃ­ cada semana.</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Actualizado 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… ReseÃ±as de primera mano</span>
            <span className="page-hero__tag">PGA Profesional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        {/* â”€â”€ LIVE: Son Gual â”€â”€ */}
        <Link href="/es/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>ReseÃ±a del Campo</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gual Golf Mallorca â€” ReseÃ±a Honesta de un Profesional PGA (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Mi campo mÃ¡s jugado en la isla. El viento, los greens, los Ãºltimos hoyos â€” y por quÃ© Obama y Nadal siguen volviendo.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Campeonato Â· Par 72 Â· â‚¬80â€“165 Â· HÃ¡ndicap requerido</p>
        </Link>

        {/* â”€â”€ COMING SOON block â”€â”€ */}
        <div style={{marginTop:'3rem',padding:'2rem',background:'var(--cream)',border:'1px solid var(--linen)'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.75rem'}}>MÃ¡s guÃ­as prÃ³ximamente</p>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.8,margin:0}}>Actualmente estoy jugando todos los campos de la isla. Cada reseÃ±a aparece despuÃ©s de haberlo jugado â€” evaluaciones honestas, no folletos. Las prÃ³ximas guÃ­as aparecerÃ¡n en las prÃ³ximas semanas.</p>
        </div>

      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Â¿Listo para jugar?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Una ronda privada en uno de estos campos con un PGA profesional a su lado.</h2>
          <p>DÃ­game sus fechas y lo que busca. Le respondo personalmente en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Ver las experiencias â†’</Link>
          <Link href="/es/contact" className="btn btn--outline-white">Ponerse en contacto</Link>
        </div>
      </section>
    </PageLayout>
  )
}
