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
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  description: "Santa Ponsa 1 golf course Mallorca reviewed by a PGA professional. One of Europe",
  alternates: { canonical: 'https://mrmallorcagolf.com/es/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  intro: "Uno de los campos más largos de la isla. Historia del European Tour. Y las calles son lo suficientemente anchas para el driver.",
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
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — reflejo del agua y calle"
          caption="El green del 16. El lago influye en la aproximación y concentra la mente considerablemente."
        />

        <p>Santa Ponsa 1 es el único campo público del grupo Santa Ponsa y el que tiene un verdadero pedigree del European Tour — acogió el DP World Tour Mallorca Golf Open 2021. Este es el campo que devolvió el golf profesional de máximo nivel a la isla tras una década de ausencia. El ganador, Jeff Winther, hizo un 62 dos veces en las rondas iniciales. El campo estaba preparado.</p>

        <h2>Por qué se adapta a mi juego — y probablemente al tuyo</h2>
        <p>Voy a ser directo sobre algo: este campo me ha ayudado a recuperar la confianza con el driver. Después de rondas en Son Gual o Alcanada, donde el course management a menudo significa dejar el driver en la bolsa, Santa Ponsa 1 es una conversación completamente diferente. Las calles son anchas, los primeros hoyos son generosos, y el campo recompensa genuinamente un enfoque agresivo desde el tee.</p>
        <p>Con mi distancia, a menudo me queda un pitching wedge para los greens de par-4 después de un buen drive. Para jugadores con distancias más típicas, el campo presenta una prueba real cuando entra el viento — pero es el tipo de desafío que construye confianza en lugar de destruirla.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Calle de Santa Ponsa 1 con montañas detrás"
          caption="Las calles son genuinamente anchas. Este es un campo que invita al driver."
        />

        <h2>El hoyo 10</h2>
        <p>Con 590 metros, el 10 es uno de los par-5 más largos de Europa. Jugarlo en contra del viento lo hace sentir aún más largo. Hay una versión genuinamente satisfactoria de este hoyo — driver, hybrid, wedge — y una versión mucho menos satisfactoria en la que uno de esos tres sale mal. Los par-3 son el otro extremo de la escala: largos, con greens pequeños. Limitación de daños, no oportunidades de birdie.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Diseño del recorrido y calles de Santa Ponsa 1"
          caption="El recorrido. En un día tranquilo este campo te favorece. Añade viento y se gana cada metro de su longitud."
        />

        <h2>La conexión con el DP World Tour</h2>
        <p>Acoger el DP World Tour Mallorca Golf Open 2021 fue significativo para la isla. Fue el primer evento del European Tour aquí en diez años, y Santa Ponsa 1 aguantó la inspección. El estado del campo durante la semana del torneo, el recorrido bajo presión, los resultados posibles sin que el campo se rindiera — todo funcionó. Ese pedigree es real, y se nota en cómo el campo se presenta a los visitantes.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Aproximación a un par-3 en Santa Ponsa 1"
          caption="Las montañas de la Tramuntana detrás. Los hoyos 5, 6 y 7 tienen las mejores vistas de la montaña."
        />

        <h2>Las vistas a la montaña</h2>
        <p>Los hoyos 5, 6 y 7 de los primeros nueve ofrecen algunas de las mejores vistas de la Tramuntana en la isla. Hierba alta, árboles maduros, flores silvestres, y las montañas enmarcando todo por detrás. Es el tipo de escenario que hace que un mal golpe sea ligeramente más soportable. Ligeramente.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths en Santa Ponsa 1 a primera hora de la mañana"
          caption="Salida temprana. A media mañana el viento normalmente encuentra el campo."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">Rango de green fee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Dificultad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Recorrido de campeonato</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Abierto a todos los visitantes</span></div>
        </div>

        <h2>Green fees 2026</h2>
        <p>Temporada alta (mediados de marzo a principios de junio, mediados de septiembre a principios de noviembre): €126. Temporada media: €106. Temporada baja: €77. Detalles completos en golf-santaponsa.com. Se requiere un certificado de handicap WHS válido.</p>
        <p>Buggy €43 para 18 hoyos. Alquiler de palos €40. El campo es público y se puede reservar libremente — no se requiere acceso de socio. Reserva con antelación en temporada alta; la historia del DP World Tour atrae a visitantes que saben lo que vienen a buscar.</p>

        <h2>Veredicto</h2>
        <p>Si estás golpeando bien la bola y quieres sentirte bien con ello, juega Santa Ponsa 1. Si estás entre Son Gual y Alcanada para un día serio y quieres algo que contraste con ambos — más abierto, más constructor de confianza, con una historia auténtica del European Tour — este es el campo. Los par-3 te mantendrán honesto. El resto de la ronda te dará algo a cambio.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Vistas a lo largo de Santa Ponsa 1"
          caption="La vuelta trasera se abre. El hoyo 10 mide 590 metros desde los tees más atrasados — uno de los par-5 más largos de Europa."
        />

        <div className="post-cta">
          <p>¿Quieres jugar Santa Ponsa 1 como parte de un día de golf en Mallorca? Puedo organizarlo.</p>
          <a href="/play-with-a-pro">Ver la experiencia play-with-a-pro →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
