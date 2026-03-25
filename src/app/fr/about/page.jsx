import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: "À propos d'Andy Griffiths — PGA Professionnel, Majorque",
  description: "Andy Griffiths est un UK PGA Advanced Professional basé à Majorque. Anciennement Pebble Beach, Évian, 11 ans de coaching en Chine.",
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/about' },
}

export default function About_FR() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <header className="page-hero" style={{
  backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
  backgroundSize: 'auto, cover',
  backgroundPosition: 'center, center 65%',
}}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/fr">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>À propos</span></p>
          <h1>Le Professionnel<br />derrière l'Expérience.</h1>
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
            <p className="chapter__label">Début de carrière</p>
            <h2>Suivre les meilleurs coaches sur deux continents.</h2>
            <p>J'ai grandi en jouant au golf, je suis descendu à un handicap de +1 mais j'ai su tôt que le coaching était ma voie. Après des études en Applied Golf Management à l'Université de Birmingham et ma qualification en tant que PGA Professionnel, j'ai commencé à construire une carrière en suivant les coaches les plus expérimentés à travers l'Europe et l'Amérique du Nord.</p>
            <p>Ces premières années m'ont emmené dans des lieux remarquables. J'ai coaché à Pebble Beach, Doral, Évian pendant le major féminin, et à The Open Championship. J'ai passé une saison à coacher à bord d'un paquebot de croisière en tour du monde — plus de quarante pays, du golf dans des endroits auxquels la plupart des professionnels n'accèdent jamais.</p>
            <div className="pull-quote"><p>&ldquo;Chaque environnement était différent. Chaque golfeur était différent. Cette variété, dès le début, est ce qui a façonné tout ce qui a suivi.&rdquo;</p></div>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014â€“2025</p>
            <h2>Onze ans au sommet du golf en Chine.</h2>
            <p>En 2014, j'ai déménagé à Shanghai. J'avais des objectifs précis — mettre en place le programme d'enseignement de la meilleure académie de Chine — et je suis resté onze années fructueuses.</p>
            <p>La Chine à cette époque était un environnement extraordinaire pour coacher. Les leçons tournaient autour de 500 € de l'heure. Les clients attendaient une amélioration sérieuse et mesurable — c'était l'exigence.</p>
            <p>Je suis devenu le premier Trackman Master du pays, j'ai coaché des joueurs de l'équipe nationale chinoise, et j'ai construit une présence coaching sur Douyin qui a atteint des centaines de millions de vues. Je suis également devenu courant en mandarin.</p>
            <p>Après onze ans, j'avais accompli ce pour quoi j'étais venu. Ma première fille est née en 2023. L'attrait d'être plus proche de ma famille, et la chance de construire quelque chose à moi, sont devenus impossibles à ignorer.</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Majorque, 2025 â€“</p>
            <h2>Vingt-deux parcours, une île, et une philosophie de coaching affinée en rejouant.</h2>
            <p>J'ai déménagé à Majorque en mars 2025 avec ma femme Yina. Plus près de la famille au Royaume-Uni, du soleil toute l'année, une île de golf vraiment exceptionnelle que la plupart des gens ne valorisent pas assez.</p>
            <p>J'ai recommencé à jouer sérieusement. Parcourant chaque parcours de l'île. Redécouvrant ce que ça fait de se tenir sur un premier départ et de vraiment se soucier du score.</p>
            <div className="pull-quote"><p>&ldquo;La philosophie de coaching qui est née de ce retour au jeu est simple : les améliorations les plus rapides se produisent sur le parcours, pas au practice. Conditions réelles, décisions réelles, conséquences réelles.&rdquo;</p></div>
            <p>Un UK PGA professionnel qui a passé plus d'une décennie à coacher en Asie, proposant désormais des journées golf privées sur l'une des meilleures îles de golf d'Europe. Si ça ressemble à la journée que vous cherchez — prenez contact.</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <img
              src="/images/about-andy-colour.jpg"
              alt="Andy Griffiths PGA professional, Mallorca"
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">Qualifications</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>UKPGA Advanced Professional</strong>Plus de 15 000 heures de coaching dispensées</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Applied Golf Management Studies</strong>Université de Birmingham</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Certifié TPI Niveau 3</strong>Titleist Performance Institute</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Certifié Trackman Master</strong>Premier en Chine</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>US Kids Golf</strong>Top 50 Coach mondial</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>11 ans à Shanghai</strong>Mandarin courant</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Équipe Nationale Chinoise</strong>Coaching élite juniors et compétition</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Des centaines de millions de vues</strong>Contenu vidéo de coaching golf sur Douyin</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Auteur publié</strong><a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)",textDecoration:"none"}}>Putting It Out There — A Life in Full Swing, 2016 (Amazon)</a></span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Basé à Majorque</strong>Depuis mars 2025</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Jouez les plus beaux parcours de Majorque avec moi à vos côtés.</h3>
            <p>Journées privées à Son Gual, Alcanada et au-delà. Tout organisé. Coaching sur parcours.</p>
            <Link href="/fr/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Voir les Expériences →</Link>
          </div>
        </aside>
      </div>

      <CareerStrip label="Lieux & expérience" heading="Où la carrière s'est construite." />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Prêt à jouer ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un UK PGA Advanced Professional. Une île de golf exceptionnelle. Votre tour.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous cherchez. Je construirai la journée autour de vous.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Voir les Expériences →</Link>
          <Link href="/fr/contact" className="btn btn--outline-white">Prendre contact</Link>
        </div>
      </section>
    </PageLayout>
  )
}
