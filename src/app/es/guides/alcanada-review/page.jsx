import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'


function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}
export const metadata = {
  title: "Club de Golf Alcanada — A PGA Professional",
  description: "Alcanada golf course Mallorca reviewed by a PGA professional who plays it regularly. The lighthouse, the greens, the restaurant terrace, and the green fees for 2026.",
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "El campo al que llevo a la gente cuando quiero que vuelvan a casa con una historia. El faro lo cambia todo.",
  lang: 'es',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <PostLayout meta={meta} lang="es">

        <PostImage
          src="/images/alcanada-blog/alc-7.jpg"
          alt="Club de Golf Alcanada a la hora dorada — faro y bahía"
          caption="Alcanada a la hora dorada. El faro se asienta en su propia isla frente a la costa — visible desde 16 de los 18 hoyos."
        />

        <p>Alcanada es el campo al que llevo a la gente cuando quiero que se vayan con una historia. Puede que sea la ronda más memorable de la isla. El faro lo cambia todo.</p>

        <h2>El entorno</h2>
        <p>Robert Trent Jones Jr. diseñó Alcanada, y lo que hizo con este tramo de costa es notable. Cuando estás en los tees traseros con el faro detrás y el Mediterráneo en todas las direcciones, es uno de esos momentos raros del golf en los que el entorno te hace olvidar lo que has marcado.</p>
        <p>El faro de Alcanada se asienta en una pequeña isla frente a la costa, visible desde 16 de los 18 hoyos. En una mañana clara con el agua en calma y la luz cruzando la bahía, es uno de los entornos más hermosos en los que he jugado al golf en cualquier parte del mundo.</p>

        <PostImage
          src="/images/alcanada-blog/alc-6.jpg"
          alt="Cliente golpeando un tee shot en Alcanada con el faro de fondo"
          caption="El faro detrás, el mar a la izquierda, el fairway cayendo hacia adelante."
        />

        <h2>Los tees traseros</h2>
        <p>Pararse en los elevados tees traseros es una experiencia en sí misma. Te sientes invulnerable — tan lejos de todo lo demás que todos los de abajo parecen diminutos. El faro detrás, la bahía extendiéndose, y estás a punto de golpear el driver hacia el abismo. Esa es la sensación.</p>

        <div className="post-pull">
          <p>«Pararse en los tees traseros de Alcanada es increíble. Te sientes invulnerable. Tan lejos del resto del mundo. Todos parecen puntos diminutos y tú estás ahí, elevado, listo para golpear el driver hacia el vacío.»</p>
        </div>

        <PostImage
          src="/images/alcanada-blog/alc-2.jpg"
          alt="Green de Alcanada con el mar y las montañas al fondo"
          caption="En una mañana clara se pueden ver las montañas de la Tramuntana al otro lado de la bahía."
        />

        <h2>Los greens</h2>
        <p>Aquí es donde Alcanada se gana el derecho a albergar eventos de élite. Después de sortear un hoyo difícil, llegas a greens que son severamente ondulados, increíblemente rápidos y con muy pocos putts fáciles. Cincuenta y ocho búnkeres repartidos por el recorrido obligan a realizar aproximaciones precisas en casi todos los hoyos.</p>
        <p>La combinación de inclinación, velocidad y rompimientos sutiles en los greens es lo que separa este campo de un mero trazado pintoresco y lo convierte en algo que verdaderamente pone a prueba a los jugadores con nivel.</p>

        <PostImage
          src="/images/alcanada-blog/alc-5.jpg"
          alt="Golfistas en Alcanada con el Mediterráneo detrás"
          caption="Los tees traseros de Alcanada están muy por encima del fairway. La caminata hasta arriba vale la pena cada vez."
        />

        <h2>El Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada acoge el Rolex Challenge Tour Grand Final — que vuelve por sexta vez en octubre de 2026. Este no es un campo que se engalana para un evento de tour. Es un campo que siempre ha sido digno de uno. Jugar los mismos hoyos que deciden la tarjeta de un profesional para la temporada es algo que se nota cuando estás en el tee.</p>

        <PostImage
          src="/images/alcanada-blog/alc-1.jpg"
          alt="Rolex Grand Final en Alcanada — hoyo 16"
          caption="El Rolex Challenge Tour Grand Final en Alcanada. Regresa por sexta vez en octubre de 2026."
        />

        <h2>El pedigrí del diseño</h2>
        <p>El padre de Robert Trent Jones Jr. diseñó Valderrama — sede de la Ryder Cup de 1997 — y Spyglass Hill en Pebble Beach. RTJ Jr. también diseñó Spring City Golf en Kunming, clasificado como el mejor campo de China por Golf Digest. El linaje es genuino, y se nota en cómo está trazado Alcanada — nada parece arbitrario, todo aprovecha el terreno.</p>

        <PostImage
          src="/images/alcanada-blog/alc-4.jpg"
          alt="Grupo de golfistas en Alcanada en una tarde de verano"
          caption="Una ronda de tarde en verano. La luz en Alcanada en julio es algo especial."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">Rango de green fee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Dificultad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Búnkeres</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">Desde Palma</span></div>
        </div>

        <h2>Información práctica</h2>
        <p>Green fees 2026: €115 temporada baja (enero, diciembre) hasta €220 temporada alta (marzo–mayo, septiembre–octubre). Desglose estacional completo en golf-alcanada.com. Se requiere una licencia de golf diaria (€3 por persona) para los no miembros de la Federación Española.</p>
        <p>Alquiler de palos: sets TaylorMade a €38 por 18 hoyos. Buggy €48, trolley eléctrico €20. El campo de prácticas Toptracer es excelente para un calentamiento serio — aprovéchalo.</p>
        <p>Ubicación: Port d'Alcúdia, a unos 50 minutos al norte de Palma. Tómate tu tiempo y no te apresures en volver.</p>

        <h2>La terraza del restaurante</h2>
        <p>Uno de los mejores sitios de la isla para comer después de la ronda. El restaurante está gestionado por Grupo Babuxa — el grupo detrás de los reconocidos restaurantes Casa Gallega en Palma — cocina mediterránea con una terraza frente al mar con vistas directas al faro de Alcanada. Su menú del día ronda los €30 por persona. Inclúyelo en el plan — este no es un lugar del que haya que salir corriendo.</p>

        <PostImage
          src="/images/alcanada-blog/alc-hero.jpg"
          alt="Terraza del clubhouse de Alcanada"
          caption="La terraza del clubhouse."
        />

        <h2>Veredicto</h2>
        <p>Alcanada es el campo al que llevaría a alguien si quisiera que se enamorara del golf en Mallorca. Los greens te pondrán a prueba. La conducción hacia el norte vale la pena. El almuerzo después es innegociable.</p>

        <div className="post-cta">
          <p>Alcanada es uno de mis dos campos principales para los días de play-with-a-pro. ¿Quieres jugarlo como es debido?</p>
          <a href="/play-with-a-pro">Ver la experiencia play-with-a-pro →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
