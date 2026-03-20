import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: "Son Gual Golf Mallorca — Reseña Honesta de un Profesional PGA (2026)",
  description: "El campo de golf Son Gual en Mallorca, evaluado por un PGA profesional.",
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
  ],
}


export default function Post() {
  return (
    <PageLayout lang="es">
      <RevealObserver />
      <PostLayout meta={meta} lang="es">
        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}>Este artículo fue escrito en inglés y traducido al español.</p>

        <p>Son Gual es mi campo más jugado en Mallorca y el que recomiendo con más consistencia cuando los clientes preguntan dónde jugar.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-hero.webp" alt="Son Gual Golf Course" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>El Primer Tee</h2>
        <p>La primera vez que jugué Son Gual, estaba en los tees negros, el viento soplaba fuerte por la izquierda. La cámara rodaba para un vlog. Estaba genuinamente un poco nervioso.</p>
        <p>El drive salió ligeramente del talón. Aun así voló más lejos de lo esperado y evitó los búnkeres — por poco. Hay tantos búnkeres en Son Gual, posicionados exactamente donde van los golpes ligeramente fallados.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-1.jpg" alt="Son Gual fairway" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>El Viento</h2>
        <p>Son Gual parece vivir en su propio ecosistema. Salgo de mi casa una mañana tranquila y llego al primer tee para encontrar que sopla fuerte — y se mantiene así durante cuatro horas.</p>
        <div className="post-pull"><p>"Salí de casa una mañana tranquila y llegué al primer tee para encontrar un viento fuerte. Se mantuvo así durante cuatro horas."</p></div>
        <h2>Los Greens</h2>
        <p>Rápidos, elevados e implacables con el mal juego de aproximación. En enero, los greens estaban tan bien cortados que era notable para esa época del año.</p>
        <p>Una de mis compañeras de juego cogió su putter creyendo que estaba en el green. Le quedaban unos 30 yardas de orilla por recorrer. El acondicionamiento es así de meticuloso.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-2.jpg" alt="Son Gual greens" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>El Campo</h2>
        <p>El diseño de Thomas Himmel de 2007 utiliza la elevación de forma inteligente. El hoyo 2 alberga uno de los búnkeres más grandes de Europa. La secuencia final a partir del hoyo 15 es ampliamente considerada una de las más finas del golf europeo.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'21/9'}}>
          <img src="/images/son-gual-blog/sg-3.webp" alt="Son Gual panoramic" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%'}} />
        </div>
        <h2>Visitantes Notables</h2>
        <p>Rafa Nadal juega aquí regularmente — su campo favorito declarado en la isla. Barack Obama jugó en noviembre de 2024.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-4.jpg" alt="Son Gual Golf" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€80–165</span><span className="post-fact__label">Rango green fee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">Dificultad</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Circuito de campeonato</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">Diseñado por Thomas Himmel</span></div>
        </div>
        <h2>Green Fees 2026</h2>
        <p>Temporada baja: €115. Enero mantenimiento: €80/9 hoyos. Pico primavera y otoño: €165. Verano: €115.</p>
        <p>Alquiler de palos: Callaway €35, Titleist €45. Buggy €45, trolley eléctrico desde €15. Certificado WHS requerido.</p>
        <h2>Veredicto</h2>
        <p>Son Gual es mi campo favorito en Mallorca. Resistiría la comparación con cualquier campo que haya jugado en mis viajes.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-5.jpg" alt="Son Gual closing holes" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-cta">
          <p>Llevo clientes a Son Gual regularmente. ¿Quiere jugarlo con alguien que conoce cada hoyo?</p>
          <a href="/es/play-with-a-pro">Ver la experiencia play-with-a-pro →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
