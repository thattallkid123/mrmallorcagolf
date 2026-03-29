import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'Sobre Andy Griffiths â€” PGA Profesional, Mallorca',
  description: 'Andy Griffiths es un UK PGA Advanced Professional con base en Mallorca. Anteriormente Pebble Beach, Ã‰vian, 11 aÃ±os de entrenamiento en China.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/about' },
}

export default function About_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 65%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Sobre Andy</span></p>
          <h1>El Profesional<br />detrÃ¡s de la Experiencia.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">UK PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Primeros aÃ±os</p>
            <h2>Siguiendo a los mejores entrenadores en dos continentes.</h2>
            <p>CrecÃ­ jugando al golf, lleguÃ© a un hÃ¡ndicap de +1, pero supe pronto que el coaching era mi camino. Tras estudiar Applied Golf Management en la Universidad de Birmingham y obtener la cualificaciÃ³n de PGA Profesional, comencÃ© a construir mi carrera siguiendo a los entrenadores mÃ¡s experimentados por Europa y AmÃ©rica del Norte.</p>
            <p>Esos primeros aÃ±os me llevaron a lugares extraordinarios. EntrenÃ© en Pebble Beach, Doral, Ã‰vian durante el major femenino y en The Open Championship. PasÃ© una temporada como entrenador de golf a bordo de un crucero de vuelta al mundo â€” mÃ¡s de cuarenta paÃ­ses, golf en lugares a los que la mayorÃ­a de los profesionales nunca llegan.</p>
            <div className="pull-quote"><p>&ldquo;Cada entorno era diferente. Cada golfista era diferente. Esa variedad, desde el principio, es lo que moldeÃ³ todo lo que vino despuÃ©s.&rdquo;</p></div>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">ShanghÃ¡i, 2014â€“2025</p>
            <h2>Once aÃ±os en la cima del golf en China.</h2>
            <p>En 2014 me mudÃ© a ShanghÃ¡i. TenÃ­a objetivos concretos â€” poner en marcha el programa de enseÃ±anza de la mejor academia de China â€” y me quedÃ© once aÃ±os con grandes resultados.</p>
            <p>China en ese perÃ­odo era un entorno extraordinario para entrenar. Las clases rondaban los 500 â‚¬ por hora. Los clientes esperaban una mejora seria y medible â€” esa era la exigencia.</p>
            <p>Me convertÃ­ en el primer Trackman Master del paÃ­s, entrenÃ© a jugadores de la selecciÃ³n nacional china y construÃ­ una presencia de coaching en Douyin que alcanzÃ³ cientos de millones de visualizaciones. TambiÃ©n me volvÃ­ fluido en mandarÃ­n, lo que cambiÃ³ la profundidad de las relaciones de coaching.</p>
            <p>DespuÃ©s de once aÃ±os, habÃ­a logrado lo que vine a buscar. Mi primera hija naciÃ³ en 2023. El deseo de estar mÃ¡s cerca de casa, y la oportunidad de construir algo propio, se volvieron imposibles de ignorar.</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Mallorca, 2025 â€“</p>
            <h2>VeintidÃ³s campos, una isla y una filosofÃ­a de coaching afinada al volver a jugar.</h2>
            <p>Me mudÃ© a Mallorca en marzo de 2025 con mi mujer Yina. MÃ¡s cerca de la familia en el Reino Unido, sol todo el aÃ±o, una isla de golf verdaderamente excepcional a la que la mayorÃ­a de la gente no da suficiente crÃ©dito.</p>
            <p>VolvÃ­ a jugar en serio. Recorriendo todos los campos de la isla. Redescubriendo lo que se siente al estar en el primer tee y realmente importarte el resultado.</p>
            <div className="pull-quote"><p>&ldquo;La filosofÃ­a de coaching que ha surgido de volver a jugar es sencilla: las mejoras mÃ¡s rÃ¡pidas ocurren en el campo, no en la sala de prÃ¡ctica. Condiciones reales, decisiÃ³nes reales, consecuencias reales.&rdquo;</p></div>
            <p>Un PGA Advanced Professional que pasÃ³ mÃ¡s de una dÃ©cada entrenando en Asia, ahora organizando dÃ­as de golf privados en una de las mejores islas de golf de Europa. Si eso suena como el dÃ­a que busca â€” pÃ³ngase en contacto.</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              width={600}
              height={420}
              alt="Andy Griffiths PGA professional, Mallorca"
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">Credenciales</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>UKPGA Advanced Professional</strong>MÃ¡s de 15.000 horas de coaching impartidas</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Applied Golf Management Studies</strong>Universidad de Birmingham</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Certificado TPI Nivel 3</strong>Titleist Performance Institute</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Certificado Trackman Master</strong>Primero en China</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>US Kids Golf</strong>Top 50 Coach mundial</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>11 aÃ±os en ShanghÃ¡i</strong>MandarÃ­n fluido</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>SelecciÃ³n Nacional China</strong>Coaching Ã©lite junior y competiciÃ³n</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Cientos de millones de visualizaciones</strong>Contenido de vÃ­deo de coaching en Douyin</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Autor publicado</strong><a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)",textDecoration:"none"}}>Putting It Out There â€” A Life in Full Swing, 2016 (Amazon)</a></span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Residente en Mallorca</strong>Desde marzo de 2025</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Juegue los mejores campos de Mallorca conmigo a su lado.</h3>
            <p>DÃ­as privados en Son Gual, Alcanada y mÃ¡s. Todo organizado. Coaching en campo.</p>
            <Link href="/es/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Ver las Experiencias â†’</Link>
          </div>
        </aside>
      </div>

      <CareerStrip label="Sedes & experiencia" heading="Donde se construyÃ³ la carrera." />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Â¿Listo para jugar?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un UK PGA Advanced Professional. Una isla de golf excepcional. Su vuelta.</h2>
          <p>DÃ­game sus fechas, su hÃ¡ndicap y lo que busca. ConstruirÃ© el dÃ­a en torno a usted.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Ver las Experiencias â†’</Link>
          <Link href="/es/contact" className="btn btn--outline-white">Ponerse en contacto</Link>
        </div>
      </section>
    </PageLayout>
  )
}

