import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'es',
  title: 'Club de Golf Alcanada - Análisis honesto de un Profesional PGA',
  description: 'Alcanada en Mallorca, visto por un Profesional PGA que lo juega con frecuencia. El faro, los greens, la terraza y los green fees de 2026.',
  imagePath: '/images/alcanada-blog/alc-7.jpg',
})

const meta = {
  badge: 'Análisis del campo',
  badgeGold: true,
  readTime: '6 min',
  updated: 'Marzo 2026',
  title: 'Club de Golf Alcanada - Análisis honesto de un Profesional PGA',
  intro: 'El campo al que llevo a la gente cuando quiero que vuelvan a casa con una historia real. El faro cambia todo.',
  lang: 'es',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Análisis honesto 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <PostLayout meta={meta} lang="es">
        <p>Alcanada es el campo al que llevo a la gente cuando quiero que regresen a casa con una historia que contar. Puede que sea la vuelta más memorable de la isla. El faro lo cambia todo.</p>

        <h2>El entorno</h2>
        <p>Robert Trent Jones Jr. diseñó Alcanada, y lo que hizo con esta franja de costa es extraordinario. Cuando estás en los tees de atrás, con el faro detrás y el Mediterráneo abierto en casi todas las direcciones, vives uno de esos momentos de golf en los que el paisaje casi hace que te olvides de la tarjeta.</p>
        <p>El faro de Alcanada está en un pequeño islote justo frente a la costa y se ve desde 16 de los 18 hoyos. En una mañana clara, con el mar en calma y la luz entrando sobre la bahía, es uno de los escenarios de golf más bonitos que he visto en cualquier parte del mundo.</p>

        <h2>Los tees de atrás</h2>
        <p>Estar en los tees elevados del fondo es una experiencia en sí misma. Te sientes intocable, tan lejos de todo lo demás que la gente abajo parece un punto diminuto. El faro detrás, la bahía delante, y un driver a punto de salir hacia el vacío. Esa es la sensación.</p>

        <div className="post-pull">
          <p>"Estar en los tees de atrás de Alcanada es increíble. Te sientes intocable. Muy lejos del resto del mundo. Todo el mundo parece un punto pequeño y tú estás ahí arriba, listo para lanzar el driver al vacío."</p>
        </div>

        <h2>Los greens</h2>
        <p>Aquí es donde Alcanada se gana de verdad su derecho a acoger eventos de alto nivel. Tras superar un hoyo exigente, llegas a greens muy ondulados, muy rápidos y llenos de putts incómodos. Los 58 bunkers del recorrido exigen golpes de aproximación muy precisos casi en cada hoyo.</p>
        <p>La combinación de pendiente, velocidad y pequeñas caídas sutiles convierte a Alcanada en mucho más que un bonito campo costero. Pone a prueba de verdad a los buenos jugadores.</p>

        <h2>Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada acoge la final del Rolex Challenge Tour, que volverá por sexta vez en octubre de 2026. No es un campo que se disfraza para un evento. Es un campo que siempre ha tenido nivel para albergarlo. Cuando estás en el tee, notas que esos mismos hoyos deciden carreras y tarjetas profesionales.</p>

        <h2>La firma del diseño</h2>
        <p>El padre de Robert Trent Jones Jr. diseñó Valderrama - sede de la Ryder Cup de 1997 - y Spyglass Hill en Pebble Beach. RTJ Jr. también diseñó Spring City Golf en Kunming, considerado el número uno de China por Golf Digest. Ese linaje es real y se nota en el routing de Alcanada: nada parece arbitrario, todo aprovecha el terreno.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 115-220</span><span className="post-fact__label">Green fees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Dificultad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkers</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55 km</span><span className="post-fact__label">Desde Palma</span></div>
        </div>

        <h2>Información práctica</h2>
        <p>Green fees 2026: EUR 115 en temporada baja y hasta EUR 220 en los periodos fuertes de marzo a mayo y de septiembre a octubre. El desglose completo está en golf-alcanada.com. Los jugadores no federados en España deben pagar una licencia diaria de golf de EUR 3 por persona.</p>
        <p>Alquiler de palos: juegos TaylorMade por EUR 38 para 18 hoyos. Buggy EUR 48, trolley eléctrico EUR 20. El campo de prácticas con Toptracer es excelente para hacer un buen calentamiento - úsalo.</p>
        <p>Ubicación: Port d'Alcúdia, a unos 50 minutos al norte de Palma. Merece la pena ir con tiempo y no salir corriendo al acabar.</p>

        <h2>La terraza del restaurante</h2>
        <p>Uno de los mejores lugares de la isla para comer después de jugar. El restaurante lo gestiona Grupo Babuxa, el grupo que está detrás de los bien valorados Casa Gallega de Palma. Cocina mediterránea, terraza frente al mar y el faro de Alcanada justo delante. El menú ronda los EUR 30 por persona. Cuenta con ello: no es un sitio del que quieras irte deprisa.</p>

        <h2>Veredicto</h2>
        <p>Alcanada es el campo que elegiría para hacer que alguien se enamore del golf en Mallorca. Los greens te van a examinar. El viaje al norte merece la pena. Y la comida después de la vuelta no es negociable.</p>

        <div className="post-cta">
          <p>Alcanada es uno de mis dos campos base para los días play-with-a-pro. ¿Quieres jugarlo de verdad como se merece?</p>
          <a href="/es/play-with-a-pro">Ver la experiencia play-with-a-pro →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
