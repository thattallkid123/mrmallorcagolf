import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Sobre Andy Griffiths — PGA Profesional, Mallorca',
  description: 'Andy Griffiths es un PGA Advanced Professional con base en Mallorca. Anteriormente Pebble Beach, Évian, 11 años de entrenamiento en China.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/about' },
}

export default function About_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Sobre Andy</span></p>
          <h1>El Profesional<br />detrás de la Experiencia.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Primeros años</p>
            <h2>Siguiendo a los mejores entrenadores en dos continentes.</h2>
            <p>Crecí jugando al golf, llegué a un hándicap de +1, pero supe pronto que el coaching era mi camino. Tras estudiar Applied Golf Management en la Universidad de Birmingham y obtener la cualificación de PGA Profesional, comencé a construir mi carrera siguiendo a los entrenadores más experimentados por Europa y América del Norte.</p>
            <p>Esos primeros años me llevaron a lugares extraordinarios. Entrené en Pebble Beach, Doral, Évian durante el major femenino y en The Open Championship. Pasé una temporada como entrenador de golf a bordo de un crucero de vuelta al mundo — más de cuarenta países, golf en lugares a los que la mayoría de los profesionales nunca llegan.</p>
            <div className="pull-quote"><p>&ldquo;Cada entorno era diferente. Cada golfista era diferente. Esa variedad, desde el principio, es lo que moldeó todo lo que vino después.&rdquo;</p></div>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Shanghái, 2014–2025</p>
            <h2>Once años en la cima del golf en China.</h2>
            <p>En 2014 me mudé a Shanghái. Tenía objetivos concretos — poner en marcha el programa de enseñanza de la mejor academia de China — y me quedé once años con grandes resultados.</p>
            <p>China en ese período era un entorno extraordinario para entrenar. Las clases rondaban los 500 € por hora. Los clientes esperaban una mejora seria y medible — no simples ánimos.</p>
            <p>Me convertí en el primer Trackman Master del país, entrené a jugadores de la selección nacional china y construí una presencia de coaching en Douyin que alcanzó cientos de millones de visualizaciones. También me volví fluido en mandarín, lo que cambió la profundidad de las relaciones de coaching.</p>
            <p>Después de once años, había logrado lo que vine a buscar. Mi primera hija nació en 2023. El deseo de estar más cerca de casa, y la oportunidad de construir algo propio, se volvieron imposibles de ignorar.</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 –</p>
            <h2>Veintidós campos, una isla y una filosofía de coaching afinada al volver a jugar.</h2>
            <p>Me mudé a Mallorca en marzo de 2025 con mi mujer Yina. Más cerca de la familia en el Reino Unido, sol todo el año, una isla de golf verdaderamente excepcional a la que la mayoría de la gente no da suficiente crédito.</p>
            <p>Volví a jugar en serio. Recorriendo todos los campos de la isla. Redescubriendo lo que se siente al estar en el primer tee y realmente importarte el resultado.</p>
            <div className="pull-quote"><p>&ldquo;La filosofía de coaching que ha surgido de volver a jugar es sencilla: las mejoras más rápidas ocurren en el campo, no en la sala de práctica. Condiciones reales, decisiones reales, consecuencias reales.&rdquo;</p></div>
            <p>Un PGA profesional que pasó más de una década entrenando en Asia, ahora organizando días de golf privados en una de las mejores islas de golf de Europa. Si eso suena como el día que busca — póngase en contacto.</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="creds reveal">
            <p className="creds__label">Credenciales</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>PGA Advanced Professional (UK)</strong>La cualificación más alta del golf británico</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Applied Golf Management</strong>Universidad de Birmingham</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Certificado TPI Nivel 3</strong>Titleist Performance Institute</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Certificado Trackman Master</strong>Primero en China</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>US Kids Golf Top 50</strong>Coach mundial</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>11 años en Shanghái</strong>Mandarín fluido</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Selección nacional china</strong>Coaching élite junior y competición</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Cientos de millones de visualizaciones</strong>Contenido de coaching en Douyin</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Autor publicado</strong>Putting It Out There — A Life in Full Swing, 2016</span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Residente en Mallorca</strong>Desde marzo de 2025</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Juegue los mejores campos de Mallorca conmigo a su lado.</h3>
            <p>Días privados en Son Gual, Alcanada y más. Todo organizado. Coaching en campo.</p>
            <Link href="/es/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Ver las Experiencias �</Link>
          </div>
        </aside>
      </div>

      <section className="venues reveal">
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Sedes & experiencia</p>
        <h2>Donde se construyó la carrera.</h2>
        <div className="venues__grid">
            <div key={0} className="venue"><p className="venue__name">Pebble Beach</p><p className="venue__detail">California, EE.UU.</p></div>
            <div key={1} className="venue"><p className="venue__name">The Open Championship</p><p className="venue__detail">Reino Unido</p></div>
            <div key={2} className="venue"><p className="venue__name">Evian Championship</p><p className="venue__detail">Francia · Major femenino</p></div>
            <div key={3} className="venue"><p className="venue__name">Doral</p><p className="venue__detail">Miami, EE.UU.</p></div>
            <div key={4} className="venue"><p className="venue__name">Shanghái</p><p className="venue__detail">China · 11 años</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">¿Listo para jugar?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un PGA Advanced Professional. Una isla de golf excepcional. Su vuelta.</h2>
          <p>Dígame sus fechas, su hándicap y lo que busca. Construiré el día en torno a usted.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Ver las Experiencias �</Link>
          <Link href="/es/contact" className="btn btn--outline-white">Ponerse en contacto</Link>
        </div>
      </section>
    </PageLayout>
  )
}





