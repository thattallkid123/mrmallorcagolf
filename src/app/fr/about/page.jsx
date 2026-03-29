import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'À propos d\'Andy Griffiths — Professionnel PGA Avancé, Majorque',
  description: "Andy Griffiths est un professionnel PGA avancé du Royaume-Uni basé à Majorque. Ancien coach à Pebble Beach, Evian, 11 ans de coaching en Chine.",
  alternates: {
    canonical: 'https://www.mrmallorcagolf.com/fr/about',
    languages: {
      'en': 'https://www.mrmallorcagolf.com/about',
      'de': 'https://www.mrmallorcagolf.com/de/about',
      'es': 'https://www.mrmallorcagolf.com/es/about',
      'fr': 'https://www.mrmallorcagolf.com/fr/about',
      'nl': 'https://www.mrmallorcagolf.com/nl/about',
      'sv': 'https://www.mrmallorcagolf.com/sv/about',
      'zh': 'https://www.mrmallorcagolf.com/zh/about',
      'x-default': 'https://www.mrmallorcagolf.com/about',
    }
  }
}

const credentials = [
  { title: 'Professionnel PGA Avancé', detail: 'Plus de 15 000 heures de coaching dispensées' },
  { title: 'Études en Gestion du Golf', detail: 'Université de Birmingham' },
  { title: 'Certifié TPI Niveau 3', detail: 'Institut de Performance Titleist' },
  { title: 'Certifié Maître Trackman', detail: 'Premier en Chine' },
  { title: 'Golf pour enfants US Kids', detail: 'Top 50 Coach Mondialement' },
  { title: '11 ans à Shanghai', detail: 'Mandarin courant' },
  { title: 'Équipe nationale chinoise', detail: 'Coaching élite junior et compétition' },
  { title: 'Des centaines de millions de vues', detail: 'Contenu vidéo de coaching au golf sur Douyin' },
  { title: 'Auteur Publié', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'Basé à Majorque', detail: 'Depuis mars 2025' },
]


export default function About() {
  return (
    <>
    <link rel="preload" as="image" href="/images/about-secondary.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero about-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to top, rgba(26,25,22,0.88) 0%, rgba(26,25,22,0.4) 35%, transparent 65%), linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
        backgroundSize: 'auto, auto, cover',
        backgroundPosition: 'center, center, center 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>À propos</span></p>
          <h1>Le Professionnel<br />Derrière l'Expérience.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">Professionnel PGA Avancé</span>
            <span className="cred-tag">Certifié Maître Trackman</span>
            <span className="cred-tag">TPI Niveau 3</span>
            <span className="cred-tag">Basé à Majorque</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">Débuts de carrière</p>
            <h2>Suivre les meilleurs coachs sur deux continents.</h2>
            <p>J'ai grandi en jouant au golf, j'ai atteint un handicap de +1 mais j'ai su tôt que le coaching était ma vocation. Après avoir étudié la Gestion du Golf appliquée à l'Université de Birmingham et m'être qualifié en tant que Professionnel PGA, j'ai commencé à construire une carrière en suivant les coachs les plus expérimentés en Europe et en Amérique du Nord.</p>
            <p>Les premières années m'ont mené dans des lieux remarquables. J'ai coaché à Pebble Beach, Doral, Evian lors du major féminin, The Open Championship. J'ai passé une saison coaching à bord d'un navire de croisière lors d'un voyage mondial — plus de quarante pays, du golf dans des endroits que peu de professionnels visiteront jamais.</p>
            <div className="pull-quote"><p>&ldquo;Chaque environnement était différent. Chaque golfeur était différent. Cette variété, au début, a façonné tout ce qui a suivi.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014–2025</p>
            <h2>Onze ans au sommet du jeu en Chine.</h2>
            <p>En 2014, je me suis installé à Shanghai. Je m'y suis rendu avec des objectifs précis — mettre en place le programme d'enseignement de la meilleure académie de Chine — et j'y suis resté onze années réussies.</p>
            <p>La Chine durant cette période était un environnement extraordinaire pour coacher. Les leçons coûtaient environ 500 € de l'heure. Les clients attendaient une amélioration réelle et mesurable. C'était la norme. Le standard professionnel requis était aussi élevé que n'importe où ailleurs.</p>
            <p>Je suis devenu le premier Maître Trackman du pays, j'ai coaché des joueurs de l'équipe nationale chinoise, et j'ai construit une présence de coaching sur Douyin qui a atteint des centaines de millions de vues. Je suis aussi devenu courant en mandarin, ce qui a changé la profondeur de la relation de coaching que je pouvais construire avec les joueurs et leurs familles.</p>
            <p>Après onze ans, j'avais atteint mes objectifs. Ma première fille est née en 2023. L'appel de se rapprocher de la maison et la chance de construire quelque chose à moi est devenu impossible à ignorer.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Majorque, 2025 –</p>
            <h2>Vingt-deux parcours, une île, et une philosophie de coaching affûtée par le jeu à nouveau.</h2>
            <p>Je me suis installé à Majorque en mars 2025 avec ma femme Yina. Plus proche de ma famille au Royaume-Uni, du soleil toute l'année, une île de golf véritablement exceptionnelle que la plupart des gens ne louent pas assez.</p>
            <p>J'ai recommencé à jouer sérieusement. En explorant tous les parcours de l'île. Redécouvrant ce que c'est de se tenir sur un premier tee et vraiment se soucier du score. Cet instinct compétitif — dormant pendant des années de coaching à temps plein — est revenu rapidement.</p>
            <div className="pull-quote"><p>&ldquo;La philosophie de coaching qui a émergé du jeu à nouveau est simple : les améliorations les plus rapides se font sur le parcours, pas au practice. Des conditions réelles, des décisions réelles. Le progrès qui en découle tend à durer.&rdquo;</p></div>
            <p>Un professionnel PGA qui a passé plus d'une décennie à coacher en Asie, accueillant maintenant des journées de golf privées sur l'une des meilleures îles de golf d'Europe. Si cela ressemble au genre de journée que vous cherchez — prenez contact.</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              alt="Andy Griffiths — Professionnel PGA Avancé du Royaume-Uni, Majorque"
              width={600}
              height={420}
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">Références</p>
            <ul className="cred-list">
              {credentials.map((c, i) => (
                <li key={i} className="cred-item">
                  <span className="cred-check">&#10003;</span>
                  <span className="cred-text"><strong>{c.title}</strong>{c.isBookLink ? (<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>Putting It Out There — A Life in Full Swing, 2016 (Amazon)</a>) : c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Jouez les meilleurs parcours de Majorque à mes côtés.</h3>
            <p>Des journées privées à Son Gual, Alcanada et au-delà. Tout est arrangé. Coaching sur le parcours tout au long.</p>
            <Link href="/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Voir les Expériences &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Prêt à jouer?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un Professionnel PGA Avancé. Une île de golf exceptionnelle. Votre ronde.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous cherchez. Je construirai la journée autour de vous.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Voir les Expériences &rarr;</Link>
          <Link href="/contact" className="btn btn--outline-white">Nous contacter</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}




