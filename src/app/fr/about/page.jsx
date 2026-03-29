import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'Ã€ propos d\'Andy Griffiths â€” Professionnel PGA AvancÃ©, Majorque',
  description: "Andy Griffiths est un professionnel PGA avancÃ© du Royaume-Uni basÃ© Ã  Majorque. Ancien coach Ã  Pebble Beach, Evian, 11 ans de coaching en Chine.",
  alternates: {
    canonical: 'https://mrmallorcagolf.com/fr/about',
    languages: {
      'en': 'https://mrmallorcagolf.com/about',
      'de': 'https://mrmallorcagolf.com/de/about',
      'es': 'https://mrmallorcagolf.com/es/about',
      'fr': 'https://mrmallorcagolf.com/fr/about',
      'nl': 'https://mrmallorcagolf.com/nl/about',
      'sv': 'https://mrmallorcagolf.com/sv/about',
      'zh': 'https://mrmallorcagolf.com/zh/about',
      'x-default': 'https://mrmallorcagolf.com/about',
    }
  }
}

const credentials = [
  { title: 'Professionnel PGA AvancÃ©', detail: 'Plus de 15 000 heures de coaching dispensÃ©es' },
  { title: 'Ã‰tudes en Gestion du Golf', detail: 'UniversitÃ© de Birmingham' },
  { title: 'CertifiÃ© TPI Niveau 3', detail: 'Institut de Performance Titleist' },
  { title: 'CertifiÃ© MaÃ®tre Trackman', detail: 'Premier en Chine' },
  { title: 'Golf pour enfants US Kids', detail: 'Top 50 Coach Mondialement' },
  { title: '11 ans Ã  Shanghai', detail: 'Mandarin courant' },
  { title: 'Ã‰quipe nationale chinoise', detail: 'Coaching Ã©lite junior et compÃ©tition' },
  { title: 'Des centaines de millions de vues', detail: 'Contenu vidÃ©o de coaching au golf sur Douyin' },
  { title: 'Auteur PubliÃ©', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'BasÃ© Ã  Majorque', detail: 'Depuis mars 2025' },
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
          <p className="breadcrumb"><Link href="/">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Ã€ propos</span></p>
          <h1>Le Professionnel<br />DerriÃ¨re l'ExpÃ©rience.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">Professionnel PGA AvancÃ©</span>
            <span className="cred-tag">CertifiÃ© MaÃ®tre Trackman</span>
            <span className="cred-tag">TPI Niveau 3</span>
            <span className="cred-tag">BasÃ© Ã  Majorque</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">DÃ©buts de carriÃ¨re</p>
            <h2>Suivre les meilleurs coachs sur deux continents.</h2>
            <p>J'ai grandi en jouant au golf, j'ai atteint un handicap de +1 mais j'ai su tÃ´t que le coaching Ã©tait ma vocation. AprÃ¨s avoir Ã©tudiÃ© la Gestion du Golf appliquÃ©e Ã  l'UniversitÃ© de Birmingham et m'Ãªtre qualifiÃ© en tant que Professionnel PGA, j'ai commencÃ© Ã  construire une carriÃ¨re en suivant les coachs les plus expÃ©rimentÃ©s en Europe et en AmÃ©rique du Nord.</p>
            <p>Les premiÃ¨res annÃ©es m'ont menÃ© dans des lieux remarquables. J'ai coachÃ© Ã  Pebble Beach, Doral, Evian lors du major fÃ©minin, The Open Championship. J'ai passÃ© une saison coaching Ã  bord d'un navire de croisiÃ¨re lors d'un voyage mondial â€” plus de quarante pays, du golf dans des endroits que peu de professionnels visiteront jamais.</p>
            <div className="pull-quote"><p>&ldquo;Chaque environnement Ã©tait diffÃ©rent. Chaque golfeur Ã©tait diffÃ©rent. Cette variÃ©tÃ©, au dÃ©but, a faÃ§onnÃ© tout ce qui a suivi.&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014â€“2025</p>
            <h2>Onze ans au sommet du jeu en Chine.</h2>
            <p>En 2014, je me suis installÃ© Ã  Shanghai. Je m'y suis rendu avec des objectifs prÃ©cis â€” mettre en place le programme d'enseignement de la meilleure acadÃ©mie de Chine â€” et j'y suis restÃ© onze annÃ©es rÃ©ussies.</p>
            <p>La Chine durant cette pÃ©riode Ã©tait un environnement extraordinaire pour coacher. Les leÃ§ons coÃ»taient environ 500 â‚¬ de l'heure. Les clients attendaient une amÃ©lioration rÃ©elle et mesurable. C'Ã©tait la norme. Le standard professionnel requis Ã©tait aussi Ã©levÃ© que n'importe oÃ¹ ailleurs.</p>
            <p>Je suis devenu le premier MaÃ®tre Trackman du pays, j'ai coachÃ© des joueurs de l'Ã©quipe nationale chinoise, et j'ai construit une prÃ©sence de coaching sur Douyin qui a atteint des centaines de millions de vues. Je suis aussi devenu courant en mandarin, ce qui a changÃ© la profondeur de la relation de coaching que je pouvais construire avec les joueurs et leurs familles.</p>
            <p>AprÃ¨s onze ans, j'avais atteint mes objectifs. Ma premiÃ¨re fille est nÃ©e en 2023. L'appel de se rapprocher de la maison et la chance de construire quelque chose Ã  moi est devenu impossible Ã  ignorer.</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">Majorque, 2025 â€“</p>
            <h2>Vingt-deux parcours, une Ã®le, et une philosophie de coaching affÃ»tÃ©e par le jeu Ã  nouveau.</h2>
            <p>Je me suis installÃ© Ã  Majorque en mars 2025 avec ma femme Yina. Plus proche de ma famille au Royaume-Uni, du soleil toute l'annÃ©e, une Ã®le de golf vÃ©ritablement exceptionnelle que la plupart des gens ne louent pas assez.</p>
            <p>J'ai recommencÃ© Ã  jouer sÃ©rieusement. En explorant tous les parcours de l'Ã®le. RedÃ©couvrant ce que c'est de se tenir sur un premier tee et vraiment se soucier du score. Cet instinct compÃ©titif â€” dormant pendant des annÃ©es de coaching Ã  temps plein â€” est revenu rapidement.</p>
            <div className="pull-quote"><p>&ldquo;La philosophie de coaching qui a Ã©mergÃ© du jeu Ã  nouveau est simple : les amÃ©liorations les plus rapides se font sur le parcours, pas au practice. Des conditions rÃ©elles, des dÃ©cisions rÃ©elles. Le progrÃ¨s qui en dÃ©coule tend Ã  durer.&rdquo;</p></div>
            <p>Un professionnel PGA qui a passÃ© plus d'une dÃ©cennie Ã  coacher en Asie, accueillant maintenant des journÃ©es de golf privÃ©es sur l'une des meilleures Ã®les de golf d'Europe. Si cela ressemble au genre de journÃ©e que vous cherchez â€” prenez contact.</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              alt="Andy Griffiths â€” Professionnel PGA AvancÃ© du Royaume-Uni, Majorque"
              width={600}
              height={420}
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">RÃ©fÃ©rences</p>
            <ul className="cred-list">
              {credentials.map((c, i) => (
                <li key={i} className="cred-item">
                  <span className="cred-check">&#10003;</span>
                  <span className="cred-text"><strong>{c.title}</strong>{c.isBookLink ? (<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>Putting It Out There â€” A Life in Full Swing, 2016 (Amazon)</a>) : c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Jouez les meilleurs parcours de Majorque Ã  mes cÃ´tÃ©s.</h3>
            <p>Des journÃ©es privÃ©es Ã  Son Gual, Alcanada et au-delÃ . Tout est arrangÃ©. Coaching sur le parcours tout au long.</p>
            <Link href="/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Voir les ExpÃ©riences &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">PrÃªt Ã  jouer?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un Professionnel PGA AvancÃ©. Une Ã®le de golf exceptionnelle. Votre ronde.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous cherchez. Je construirai la journÃ©e autour de vous.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Voir les ExpÃ©riences &rarr;</Link>
          <Link href="/contact" className="btn btn--outline-white">Nous contacter</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





