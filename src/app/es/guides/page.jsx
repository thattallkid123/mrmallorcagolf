import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Guía de Golf Mallorca — Reseñas de Campos y Consejos',
  description: 'Guías honestas sobre el golf en Mallorca por un PGA profesional. Reseñas de campos, green fees y planificación de viaje — actualizado 2026.',
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
            <span style={{color:'var(--gold-light)'}}>Guías</span>
          </p>
          <h1>Golf en Mallorca.<br />Guías Honestas.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>Reseñas de campos, planificación de viajes y green fees — escritas por un PGA profesional que juega aquí cada semana.</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">Actualizado 2026</span>
            <span className="page-hero__tag page-hero__tag--gold">★ Reseñas de primera mano</span>
            <span className="page-hero__tag">PGA Profesional</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        <Link href="/es/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>Reseña del Campo</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gual Golf Mallorca — Reseña Honesta de un Profesional PGA (2026)</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>Mi campo más jugado en la isla. El viento, los greens, los últimos hoyos — y por qué Obama y Nadal siguen volviendo.</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>Campeonato · Par 72 · €80–165 · Hándicap requerido</p>
        </Link>

        <div style={{marginTop:'3rem',padding:'2rem',background:'var(--cream)',border:'1px solid var(--linen)'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.75rem'}}>Más guías próximamente</p>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.8,margin:0}}>Actualmente estoy jugando todos los campos de la isla. Cada reseña aparece después de haberlo jugado — evaluaciones honestas, no folletos. Las próximas guías aparecerán en las próximas semanas.</p>
        </div>

      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">¿Listo para jugar?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Una ronda privada en uno de estos campos con un PGA profesional a su lado.</h2>
          <p>Dígame sus fechas y lo que busca. Le respondo personalmente en 24 horas.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Ver las experiencias →</Link>
          <Link href="/es/contact" className="btn btn--outline-white">Ponerse en contacto</Link>
        </div>
      </section>
    </PageLayout>
  )
}
