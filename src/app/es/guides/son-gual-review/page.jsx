import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: "Son Gual Golf Mallorca — Reseña Honesta de un Profesional PGA (2026)",
  description: "El campo de golf Son Gual en Mallorca, evaluado por un profesional PGA que juega allí regularmente. Green fees, dificultad, qué esperar.",
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides/son-gual-review' },
}

const meta = {
  badge: 'Reseña del Campo', badgeGold: true, readTime: '6 min de lectura', updated: 'Marzo 2026',
  title: "Son Gual Golf Mallorca — Reseña Honesta de un Profesional PGA (2026)",
  intro: "Mi campo más jugado en la isla. El viento, los greens, los últimos hoyos — y por qué Obama y Nadal siguen volviendo.",
  lang: 'es',
  related: [
    { slug: 'alcanada-review', title: 'Golf Alcanada — Reseña Honesta 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Mejores Campos de Golf en Mallorca 2026' },
    { slug: 'golf-cost-mallorca', title: '¿Cuánto cuesta el golf en Mallorca?' },
    { slug: 'best-time-play-golf-mallorca', title: 'Mejor época para Jugar al Golf en Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <PostLayout meta={meta} lang="es">

        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}>Este artículo fue escrito en inglés y traducido al español.</p>

        <p>Son Gual es mi campo más jugado en Mallorca y el que recomiendo con más consistencia cuando los clientes preguntan dónde jugar. Quiero ser honesto sobre el porqué — y honesto sobre lo que lo hace difícil, porque es difícil, y cualquiera que reserve esperando un día relajado se sorprenderá.</p>

        <h2>El Primer Tee</h2>
        <p>La primera vez que jugué Son Gual, estaba en los tees negros, el viento soplaba fuerte por la izquierda, jugando junto a un amigo profesional PGA que juega y anota bien. La cámara rodaba para un vlog, lo que añade su propia presión. Estaba genuinamente un poco nervioso.</p>
        <p>El drive salió ligeramente del talón. Aun así voló más lejos de lo esperado y evitó los búnkeres — por poco. Hay tantos búnkeres en Son Gual, posicionados exactamente donde van los golpes ligeramente fallados. Estás calculando el viento, los cambios de elevación, los golpes inconsistentes — y los búnkeres parecen crecer cuanto más tiempo los contemplas.</p>

        <h2>El Viento</h2>
        <p>Son Gual parece vivir en su propio ecosistema. Salgo de mi casa en el suroeste de la isla una mañana tranquila y llego al primer tee para encontrar que sopla fuerte — y se mantiene así durante cuatro horas. Jugar a favor del viento es un placer. Contra el viento en un largo par cuatro que de repente se convierte en un par cuatro ridículamente largo — esa es una experiencia diferente.</p>

        <div className="post-pull">
          <p>"Salí de casa una mañana tranquila y llegué al primer tee para encontrar un viento fuerte. Se mantuvo así durante cuatro horas."</p>
        </div>

        <h2>Los Greens</h2>
        <p>Rápidos, elevados e implacables con el mal juego de aproximación. En enero, los greens y la orilla estaban tan bien cortados que era notable para esa época del año. Ideal para producir efecto, incómodo cuando se mira un chip ajustado con poca superficie de aterrizaje.</p>
        <p>Una de mis compañeras de juego ese día — una antigua alumna de China — cogió su putter creyendo que estaba en el green. Le quedaban unos 30 yardas de orilla por recorrer. El acondicionamiento es así de meticuloso.</p>

        <h2>El Campo</h2>
        <p>El diseño de Thomas Himmel de 2007 utiliza la elevación de forma inteligente. El hoyo 2 alberga uno de los búnkeres más grandes de Europa. La secuencia final a partir del hoyo 15 es ampliamente considerada una de las más finas del golf europeo — y habiéndola jugado, estoy de acuerdo. Las vistas sobre la Bahía de Palma son mejores entre los hoyos 8–12. El restaurante comparte esa vista y merece la pena quedarse después de la ronda.</p>

        <h2>Visitantes Notables</h2>
        <p>Rafa Nadal juega aquí regularmente — su campo favorito declarado en la isla. Barack Obama jugó en noviembre de 2024, y el director general Andreas Pamer lo describió como genuinamente simpático y dijo que prometió volver.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€80–165</span><span className="post-fact__label">Rango green fee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">Dificultad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Circuito de campeonato</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">Diseñado por Thomas Himmel</span></div>
        </div>

        <h2>Green Fees 2026</h2>
        <p>Temporada baja (mediados de noviembre a diciembre): €115. Ventana de mantenimiento de enero: €80 por 9 hoyos únicamente. Pico de primavera y otoño (marzo–mayo, septiembre–noviembre): €165. Verano (julio–agosto): €115. Desglose estacional completo en son-gual.com.</p>
        <p>Alquiler de palos en el pro shop: Callaway €35, Titleist €45 por ronda. Buggy €45, trolley eléctrico desde €15. Se requiere un certificado de hándicap WHS válido para reservar.</p>

        <h2>Veredicto</h2>
        <p>Son Gual es mi campo favorito en Mallorca. Resistiría la comparación con cualquier campo que haya jugado en mis viajes — el acondicionamiento, la inteligencia del diseño y el entorno son excepcionales. No es un campo al que llegar sin el juego en orden, pero para cualquier golfista que quiera una ronda seria en un entorno serio, este es.</p>

        <div className="post-cta">
          <p>Llevo clientes a Son Gual regularmente. ¿Quiere jugarlo con alguien que conoce cada hoyo?</p>
          <a href="/es/play-with-a-pro">Ver la experiencia play-with-a-pro →</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}
