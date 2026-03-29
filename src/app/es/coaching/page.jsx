import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Coaching de Golf en Campo en Mallorca â€” PGA Profesional',
  description: 'Coaching de golf en campo en Mallorca con UK PGA Advanced Professional Andy Griffiths. Mejora real en condiciones reales â€” para golfistas en visita y residentes.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/coaching' },
}

export default function Coaching_ES() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, 60% 65%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Coaching en campo</span></p>
          <h1>Mejor golf.<br />Sin cambiarlo todo.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>Coaching en campo para golfistas en visita y residentes. Condiciones reales, decisiones reales, mejora real â€” sin la sobrecarga tÃ©cnica que hace que la mayorÃ­a de las sesiones de prÃ¡ctica queden olvidadas en el hoyo 3.</p>
        </div>
      </header>

      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Por quÃ© la zona de prÃ¡ctica no basta</p>
          <h2>Hay una razÃ³n por la que su juego en la zona de prÃ¡ctica no aparece en el campo.</h2>
          <p>La zona de prÃ¡ctica es plana, controlada y sin consecuencias. Golpea desde una colchoneta perfecta sin viento, sin desniveles, sin un marcador en juego. Luego se planta en el primer tee y nada se transfiere.</p>
          <p>El coaching en campo sitÃºa la lecciÃ³n donde realmente ayuda. En el fairway. En el rough. En una pendiente inesperada con un viento que no esperaba. Con un marcador que importa. AhÃ­ es donde cambian los juegos â€” y ahÃ­ es donde trabajamos.</p>
          <div className="analogy-box">
            <p>&ldquo;Piense en el boxeo. Puede entrenar al saco durante semanas y sentirse preparado. Luego tiene su primer sparring y todo cambia. El golf es lo mismo. El primer tee no es la zona de prÃ¡ctica.&rdquo;</p>
            <cite>â€” Andy Griffiths, UK PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>El cuestionario</p>
          <p>Un breve cuestionario antes de la sesiÃ³n da forma al dÃ­a antes de empezar. QuÃ© le frustra, dÃ³nde estÃ¡n las lagunas, cÃ³mo es el Ã©xito para usted.</p>
          <p>Cuando llegamos al primer tee, ya tengo una imagen de quÃ© observar. El feedback es situacional y honesto â€” no un plan de clase genÃ©rico.</p>
          <p>Las sesiones tienen lugar en Son Gual, Alcanada o un campo adaptado a su nivel y objetivos.</p>
          <Link href="/es/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Hablar de una sesiÃ³n â†’</Link>
        </div>
      </section>

      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">QuÃ© mejora de verdad</p>
          <h2>Esto es lo que cambia durante una vuelta conmigo.</h2>
          <p className="improvements__sub">Y por quÃ© se mantiene de una manera que el trabajo en la zona de prÃ¡ctica raramente logra.</p>
        </div>
        <div className="improvements-grid">
          <div className="improvement reveal"><span className="improvement__num">01</span><h3>GestiÃ³n del campo</h3><p>La mayorÃ­a de los golfistas amateurs pierden la mayorÃ­a de sus golpes por la decisiÃ³n equivocada, no por el swing equivocado. Elegir el palo, el objetivo y la forma adecuados separa un resultado de 90 de uno de 80.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">02</span><h3>ElecciÃ³n de golpe bajo presiÃ³n</h3><p>Las decisiones que se derrumban bajo presiÃ³n â€” el driver cuando un hierro 5 gana el hoyo â€” se hacen visibles en el campo de una forma que nunca ocurre en la zona de prÃ¡ctica.</p></div>
          <div className="improvement reveal"><span className="improvement__num">03</span><h3>Leer greens y pendientes</h3><p>Putear y chipear en un green real es fundamentalmente diferente a un green de prÃ¡ctica. La velocidad, la pendiente, el grano, la presiÃ³n del momento â€” todo cambia lo que funciona.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">04</span><h3>Jugar con viento</h3><p>Mallorca es ventosa. Son Gual especialmente tiene su propio ecosistema de viento. La elecciÃ³n del palo en un viento cruzado â€” esto solo se puede trabajar cuando de verdad sopla.</p></div>
          <div className="improvement reveal"><span className="improvement__num">05</span><h3>Juego mental y rutina</h3><p>CÃ³mo se habla despuÃ©s de un mal golpe. CÃ³mo afronta el siguiente tee. Si tiene una rutina pre-golpe y si aguanta bajo presiÃ³n. El lado mental es completamente invisible en la zona de prÃ¡ctica.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">06</span><h3>Encontrar las victorias rÃ¡pidas</h3><p>La mayorÃ­a de los golfistas mejoran mÃ¡s rÃ¡pido no reconstruyendo su swing, sino con uno o dos pequeÃ±os desbloques. Un cliente habÃ­a estado chipeando con un pitching wedge toda su vida. Una conversaciÃ³n, un cambio de palo, mejora inmediata.</p></div>
          <div className="improvement reveal improvement--full"><span className="improvement__num">07</span><h3>Consistencia en condiciones reales</h3><p>Lies irregulares, fairways estrechos, rough â€” el campo exige golpes que la zona de prÃ¡ctica nunca pide. Jugarlos regularmente, con feedback en tiempo real, es cÃ³mo se construye un juego que aparece cuando importa.</p></div>
        </div>
      </section>

      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">CÃ³mo funciona</p>
          <h2>Tres fases. Una sesiÃ³n que cambia su juego.</h2>
          <p>Las sesiones tienen lugar en campo en Son Gual, Alcanada o un campo adaptado. Jugamos juntos, el coaching ocurre en tiempo real y el feedback es situacional y honesto.</p>
        </div>
        <div className="how-steps reveal">
          <div className="how-step"><span className="how-step__num">01</span><div><h3>El cuestionario</h3><p>Antes de la sesiÃ³n, rellena un breve formulario. QuÃ© le frustra, dÃ³nde estÃ¡n las lagunas, cÃ³mo es un buen dÃ­a. Al llegar al primer tee, ya tengo una imagen.</p></div></div>
          <div className="how-step"><span className="how-step__num">02</span><div><h3>La vuelta</h3><p>Jugamos juntos. El coaching ocurre en tiempo real â€” la observaciÃ³n correcta en el momento correcto. No un comentario continuo. La cosa que cambia su marcador.</p></div></div>
          <div className="how-step"><span className="how-step__num">03</span><div><h3>El anÃ¡lisis</h3><p>En el almuerzo, repasamos quÃ© mejorÃ³, en quÃ© trabajar y quÃ© llevarse. Honesto y claro.</p></div></div>
        </div>
      </section>

      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Â¿Para quiÃ©n es esto?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Si alguna de estas situaciones le resulta familiar, esto es para usted.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><h3>Golfistas en visita</h3><p>Mejora enfocada durante su estancia en la isla â€” no solo una vuelta.</p></div>
          <div className="who-card reveal reveal-delay-1"><h3>Golfistas residentes</h3><p>Trabajo regular con un profesional que juega los mismos campos que usted.</p></div>
          <div className="who-card reveal reveal-delay-2"><h3>La brecha prÃ¡ctica/campo</h3><p>Su juego de prÃ¡ctica nunca se transfiere. AquÃ­ lo arreglamos.</p></div>
          <div className="who-card reveal"><h3>MÃ¡s inteligente, no reconstruido</h3><p>Quiere jugar mejor sin una revisiÃ³n tÃ©cnica completa desde cero.</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Â¿Listo para jugar mejor?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>ContÃ¡cteme para hablar de una sesiÃ³n.</h2>
          <p>DÃ­game cÃ³mo estÃ¡ su juego y quÃ© quiere de Ã©l. ConstruirÃ© la sesiÃ³n en torno a eso â€” no un programa genÃ©rico.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/es/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Ponerse en contacto â†’</Link>
          <Link href="/es/play-with-a-pro" className="btn btn--outline-white">Ver Experiencias Completas</Link>
        </div>
      </section>
    </PageLayout>
  )
}

