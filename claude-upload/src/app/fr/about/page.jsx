import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: "À propos d'Andy Griffiths — PGA Professionnel, Majorque",
  description: "Andy Griffiths est un PGA Advanced Professional basé à Majorque. Anciennement Pebble Beach, Évian, 11 ans de coaching en Chine.",
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/about' },
}

export default function About_FR() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/fr">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Ã€ propos</span></p>
          <h1>Le Professionnel<br />derriÃ¨re l'ExpÃ©rience.</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGA Advanced Professional</span>
            <span className="cred-tag">Trackman Master</span>
            <span className="cred-tag">TPI Level 3</span>
            <span className="cred-tag">Mallorca</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">DÃ©but de carriÃ¨re</p>
            <h2>Suivre les meilleurs coaches sur deux continents.</h2>
            <p>J'ai grandi en jouant au golf, je suis descendu Ã  un handicap de +1 mais j'ai su tÃ´t que le coaching Ã©tait ma voie. AprÃ¨s des Ã©tudes en Applied Golf Management Ã  l'UniversitÃ© de Birmingham et ma qualification en tant que PGA Professionnel, j'ai commencÃ© Ã  construire une carriÃ¨re en suivant les coaches les plus expÃ©rimentÃ©s Ã  travers l'Europe et l'AmÃ©rique du Nord.</p>
            <p>Ces premiÃ¨res annÃ©es m'ont emmenÃ© dans des lieux remarquables. J'ai coachÃ© Ã  Pebble Beach, Doral, Ã‰vian pendant le major fÃ©minin, et Ã  The Open Championship. J'ai passÃ© une saison Ã  coacher Ã  bord d'un paquebot de croisiÃ¨re en tour du monde â€” plus de quarante pays, du golf dans des endroits auxquels la plupart des professionnels n'accÃ¨dent jamais.</p>
            <div className="pull-quote"><p>&ldquo;Chaque environnement Ã©tait diffÃ©rent. Chaque golfeur Ã©tait diffÃ©rent. Cette variÃ©tÃ©, dÃ¨s le dÃ©but, est ce qui a faÃ§onnÃ© tout ce qui a suivi.&rdquo;</p></div>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Shanghai, 2014â€“2025</p>
            <h2>Onze ans au sommet du golf en Chine.</h2>
            <p>En 2014, j'ai dÃ©mÃ©nagÃ© Ã  Shanghai. J'avais des objectifs prÃ©cis â€” mettre en place le programme d'enseignement de la meilleure acadÃ©mie de Chine â€” et je suis restÃ© onze annÃ©es fructueuses.</p>
            <p>La Chine Ã  cette Ã©poque Ã©tait un environnement extraordinaire pour coacher. Les leÃ§ons tournaient autour de 500 â‚¬ de l'heure. Les clients attendaient une amÃ©lioration sÃ©rieuse et mesurable â€” pas seulement des encouragements.</p>
            <p>Je suis devenu le premier Trackman Master du pays, j'ai coachÃ© des joueurs de l'Ã©quipe nationale chinoise, et j'ai construit une prÃ©sence coaching sur Douyin qui a atteint des centaines de millions de vues. Je suis Ã©galement devenu courant en mandarin.</p>
            <p>AprÃ¨s onze ans, j'avais accompli ce pour quoi j'Ã©tais venu. Ma premiÃ¨re fille est nÃ©e en 2023. L'attrait d'Ãªtre plus proche de ma famille, et la chance de construire quelque chose Ã  moi, sont devenus impossibles Ã  ignorer.</p>
          </div>
          <div className="chapter reveal">
            <p className="chapter__label">Majorque, 2025 â€“</p>
            <h2>Vingt-deux parcours, une Ã®le, et une philosophie de coaching affinÃ©e en rejouant.</h2>
            <p>J'ai dÃ©mÃ©nagÃ© Ã  Majorque en mars 2025 avec ma femme Yina. Plus prÃ¨s de la famille au Royaume-Uni, du soleil toute l'annÃ©e, une Ã®le de golf vraiment exceptionnelle que la plupart des gens ne valorisent pas assez.</p>
            <p>J'ai recommencÃ© Ã  jouer sÃ©rieusement. Parcourant chaque parcours de l'Ã®le. RedÃ©couvrant ce que Ã§a fait de se tenir sur un premier dÃ©part et de vraiment se soucier du score.</p>
            <div className="pull-quote"><p>&ldquo;La philosophie de coaching qui est nÃ©e de ce retour au jeu est simple : les amÃ©liorations les plus rapides se produisent sur le parcours, pas au practice. Conditions rÃ©elles, dÃ©cisions rÃ©elles, consÃ©quences rÃ©elles.&rdquo;</p></div>
            <p>Un PGA professionnel qui a passÃ© plus d'une dÃ©cennie Ã  coacher en Asie, maintenant Ã  la tÃªte de journÃ©es golf privÃ©es sur l'une des meilleures Ã®les de golf d'Europe. Si Ã§a ressemble Ã  la journÃ©e que vous cherchez â€” prenez contact.</p>
          </div>
        </main>
        <aside className="story__sidebar">
          <div className="creds reveal">
            <p className="creds__label">Qualifications</p>
            <ul className="cred-list">
              <li key={0} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>PGA Advanced Professional (UK)</strong>La qualification la plus Ã©levÃ©e du golf britannique</span></li>
              <li key={1} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Applied Golf Management</strong>UniversitÃ© de Birmingham</span></li>
              <li key={2} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>CertifiÃ© TPI Niveau 3</strong>Titleist Performance Institute</span></li>
              <li key={3} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>CertifiÃ© Trackman Master</strong>Premier en Chine</span></li>
              <li key={4} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>US Kids Golf Top 50</strong>Coach mondial</span></li>
              <li key={5} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>11 ans Ã  Shanghai</strong>Mandarin courant</span></li>
              <li key={6} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Ã‰quipe nationale chinoise</strong>Coaching Ã©lite juniors et compÃ©tition</span></li>
              <li key={7} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Des centaines de millions de vues</strong>Contenu coaching golf sur Douyin</span></li>
              <li key={8} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>Auteur publiÃ©</strong>Putting It Out There â€” A Life in Full Swing, 2016</span></li>
              <li key={9} className="cred-item"><span className="cred-check">&#10003;</span><span className="cred-text"><strong>BasÃ© Ã  Majorque</strong>Depuis mars 2025</span></li>
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>Jouez les plus beaux parcours de Majorque avec moi Ã  vos cÃ´tÃ©s.</h3>
            <p>JournÃ©es privÃ©es Ã  Son Gual, Alcanada et au-delÃ . Tout organisÃ©. Coaching sur parcours.</p>
            <Link href="/fr/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Voir les ExpÃ©riences â†’</Link>
          </div>
        </aside>
      </div>

      <section className="venues reveal">
        <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Lieux & expÃ©rience</p>
        <h2>OÃ¹ la carriÃ¨re s'est construite.</h2>
        <div className="venues__grid">
            <div key={0} className="venue"><p className="venue__name">Pebble Beach</p><p className="venue__detail">Californie, USA</p></div>
            <div key={1} className="venue"><p className="venue__name">The Open Championship</p><p className="venue__detail">Royaume-Uni</p></div>
            <div key={2} className="venue"><p className="venue__name">Evian Championship</p><p className="venue__detail">France Â· Major Dames</p></div>
            <div key={3} className="venue"><p className="venue__name">Doral</p><p className="venue__detail">Miami, USA</p></div>
            <div key={4} className="venue"><p className="venue__name">Shanghai</p><p className="venue__detail">Chine Â· 11 ans</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">PrÃªt Ã  jouer ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Un PGA Advanced Professional. Une Ã®le de golf exceptionnelle. Votre tour.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous cherchez. Je construirai la journÃ©e autour de vous.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>Voir les ExpÃ©riences â†’</Link>
          <Link href="/fr/contact" className="btn btn--outline-white">Prendre contact</Link>
        </div>
      </section>
    </PageLayout>
  )
}
