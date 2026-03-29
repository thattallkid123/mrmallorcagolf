import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: 'Golf Santa Ponsa 1, Mallorca - Análisis honesto de un Profesional PGA',
  description: 'Santa Ponsa 1 en Mallorca, visto por un Profesional PGA. Historia de Tour, fairways amplios y confianza renovada con el driver.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Análisis del campo',
  badgeGold: true,
  readTime: '6 min',
  updated: 'Marzo 2026',
  title: 'Golf Santa Ponsa 1, Mallorca - Análisis honesto de un Profesional PGA',
  intro: 'Uno de los campos más largos de la isla. Historia real de Tour europeo. Y fairways lo bastante amplios para sacar el driver.',
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
        <p>Santa Ponsa 1 es el único campo público del grupo Santa Ponsa y el que tiene auténtico pedigrí de Tour europeo. Aquí se disputó el Mallorca Golf Open del DP World Tour en 2021. Fue el campo que devolvió el golf profesional de primer nivel a la isla tras diez años de ausencia. El ganador, Jeff Winther, firmó dos vueltas de 62 en las rondas iniciales. El campo estaba preparado para ello.</p>

        <h2>Por qué encaja con mi juego - y probablemente con el tuyo</h2>
        <p>Voy a ser claro con algo: este campo me ha ayudado a recuperar confianza con el driver. Después de jugar Son Gual o Alcanada, donde la gestión del campo muchas veces obliga a dejar el driver en la bolsa, Santa Ponsa 1 es otra conversación. Los fairways son anchos, los primeros hoyos son generosos y el recorrido recompensa de verdad una actitud agresiva desde el tee.</p>
        <p>Con mi distancia, muchas veces me queda apenas un wedge para atacar greens de par 4 después de un buen drive. Para jugadores con una pegada más normal, el campo se convierte en una prueba seria cuando entra el viento, pero es el tipo de reto que construye confianza en lugar de desgastarla.</p>

        <h2>El hoyo 10</h2>
        <p>Con 590 metros, el 10 es uno de los pares 5 más largos de Europa. Jugado contra el viento se siente todavía más largo. Hay una versión muy satisfactoria de este hoyo - driver, híbrido, wedge - y otra bastante menos agradable si uno de esos tres golpes falla. Los pares 3 son el extremo opuesto: largos y con greens pequeños. Aquí se trata más de limitar daños que de buscar birdies.</p>

        <h2>La conexión con el DP World Tour</h2>
        <p>Ser sede del Mallorca Golf Open de 2021 fue importante para la isla. Era el primer evento del Tour europeo aquí en diez años, y Santa Ponsa 1 respondió. El estado del campo en semana de torneo, el routing bajo presión y los resultados posibles sin que el recorrido se entregara - todo funcionó. Ese pedigrí es real y se nota en cómo se presenta el campo al visitante.</p>

        <h2>Las vistas a la Tramuntana</h2>
        <p>Los hoyos 5, 6 y 7 de la primera vuelta ofrecen algunas de las mejores vistas de la Tramuntana de toda la isla. Hierba alta, árboles maduros, flores silvestres y las montañas al fondo. Es el tipo de paisaje que hace que un mal golpe se lleve un poco mejor. Un poco.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 77-126</span><span className="post-fact__label">Green fees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Dificultad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Recorrido championship</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Público</span><span className="post-fact__label">Abierto a visitantes</span></div>
        </div>

        <h2>Green fees 2026</h2>
        <p>Temporada alta de mediados de marzo a principios de junio y de mediados de septiembre a principios de noviembre: EUR 126. Temporada media: EUR 106. Temporada baja: EUR 77. Los detalles completos están en golf-santaponsa.com. Se requiere certificado de hándicap WHS válido.</p>
        <p>Buggy: EUR 43 por 18 hoyos. Alquiler de palos: EUR 40. El campo es público y se puede reservar libremente, sin necesidad de acceso de socio. Conviene reservar con antelación en temporada alta; la historia del DP World Tour atrae a jugadores que saben exactamente a qué vienen.</p>

        <h2>Veredicto</h2>
        <p>Si estás pegando bien el driver y quieres disfrutar de esa sensación, juega Santa Ponsa 1. Si estás entre Son Gual y Alcanada para un gran día de golf y buscas algo que contraste con ambos - más abierto, más amigable para la confianza y con verdadera historia de Tour europeo - este es el campo. Los pares 3 te mantendrán honesto. El resto de la vuelta te devolverá bastante.</p>

        <div className="post-cta">
          <p>¿Quieres jugar Santa Ponsa 1 como parte de un día de golf en Mallorca? Yo puedo organizarlo.</p>
          <a href="/es/play-with-a-pro">Ver la experiencia play-with-a-pro →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
