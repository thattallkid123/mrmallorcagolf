import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Coaching Golf sur Parcours Ã  Majorque â€” Professionnel PGA',
  description: 'Coaching golf sur parcours Ã  Majorque avec un Professionnel PGA AvancÃ© Andy Griffiths. AmÃ©lioration rÃ©elle dans des conditions rÃ©elles â€” pour golfeurs en visite et rÃ©sidents.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/fr/coaching',
    languages: {
      'en': 'https://mrmallorcagolf.com/coaching',
      'de': 'https://mrmallorcagolf.com/de/coaching',
      'es': 'https://mrmallorcagolf.com/es/coaching',
      'fr': 'https://mrmallorcagolf.com/fr/coaching',
      'nl': 'https://mrmallorcagolf.com/nl/coaching',
      'sv': 'https://mrmallorcagolf.com/sv/coaching',
      'zh': 'https://mrmallorcagolf.com/zh/coaching',
      'x-default': 'https://mrmallorcagolf.com/coaching',
    }
  }
}

const improvements = [
  { num: '01', title: 'Gestion du parcours', text: 'La plupart des golfeurs amateurs perdent l\'essentiel de leurs coups Ã  cause d\'une mauvaise dÃ©cision, pas d\'un mauvais swing. Choisir le bon club, la bonne cible, la bonne trajectoire â€” voilÃ  ce qui sÃ©pare un 90 d\'un 80. Nous les travaillons en temps rÃ©el, sur de vrais trous, avec un vrai score en jeu.' },
  { num: '02', title: 'Choix de coups sous pression', text: "Les dÃ©cisions qui s\'effondrent sous pression â€” le driver quand un fer 5 gagne le trou, le coup hÃ©roÃ¯que quand la sÃ©curitÃ© rapporte autant â€” deviennent visibles sur le parcours d\'une faÃ§on impossible au practice. Je les vois, je les nomme, et nous les travaillons ensemble." },
  { num: '03', title: 'Lecture des greens et des pentes', text: 'Putter et chipper sur un vrai green est fondamentalement diffÃ©rent d\'un green d\'entraÃ®nement. La vitesse, la pente, le grain, la pression du moment â€” tout change ce qui fonctionne. Nous le pratiquons dans les conditions rÃ©elles.' },
  { num: '04', title: 'Jouer dans le vent', text: "Majorque est venteuse. Son Gual notamment vit dans son propre Ã©cosystÃ¨me de vent. Le choix du club dans un vent de travers, la gestion de la trajectoire, faire confiance Ã  votre visÃ©e quand la balle semble dÃ©river â€” cela ne se travaille que quand il souffle vraiment." },
  { num: '05', title: 'Mental et routine', text: 'Comment vous vous parlez aprÃ¨s un mauvais coup. Comment vous abordez le dÃ©part suivant. Si vous avez une routine d\'avant coup et si elle tient sous pression. Le mental est totalement invisible au practice â€” il ne se montre que quand les consÃ©quences sont rÃ©elles.' },
  { num: '06', title: 'Trouver les gains rapides', text: "La plupart des golfeurs progressent le plus rapidement non pas en reconstruisant leur swing mais grÃ¢ce Ã  un ou deux petits dÃ©blocages. Un client chippait avec un pitching wedge toute sa vie. Une conversation, un changement de club, amÃ©lioration immÃ©diate. Pas de travail technique. Ce genre de choses ne remonte Ã  la surface que sur le parcours." },
  { num: '07', title: 'RÃ©gularitÃ© dans les vraies conditions', text: "Les lies inÃ©gaux, les fairways Ã©troits, le rough â€” le parcours demande des coups que le practice ne sollicite jamais. Les jouer rÃ©guliÃ¨rement, avec un retour en temps rÃ©el, c\'est comme Ã§a qu\'on construit un jeu qui se montre quand Ã§a compte.", full: true },
]

export default function Coaching() {
  return (
    <>
    <link rel="preload" as="image" href="/images/coaching-hero.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero coaching-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, 60% 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Coaching sur Parcours</span></p>
          <h1>Un Meilleur Golf.<br />Sans Tout Changer.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>Coaching sur parcours pour golfeurs en visite et rÃ©sidents. Conditions rÃ©elles, dÃ©cisions rÃ©elles, amÃ©lioration rÃ©elle â€” sans la surcharge technique qui rend la plupart des sessions de practice inutiles dÃ¨s le 3e trou.</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Pourquoi le practice ne suffit pas</p>
          <h2>Il y a une raison pour laquelle votre jeu au practice ne se retrouve pas sur le parcours.</h2>
          <p>Le practice est plat, contrÃ´lÃ© et sans consÃ©quence. Vous frappez depuis un tapis parfait sans vent, sans dÃ©nivelÃ©, sans score en jeu, et personne ne regarde. Puis vous arrivez au premier tee et rien ne se transfÃ¨re.</p>
          <p>Le coaching sur parcours met la leÃ§on lÃ  oÃ¹ elle aide vraiment. Sur le fairway. Dans le rough. Sur une pente inattendue avec un vent que vous n\'aviez pas prÃ©vu. Avec un score qui compte. C\'est lÃ  que les jeux changent â€” et c\'est lÃ  que nous travaillons.</p>
          <div className="analogy-box">
            <p>&ldquo;Pensez Ã  la boxe. Vous pouvez vous entraÃ®ner aux poings pendant des semaines et vous sentir prÃªt. Puis vous avez votre premier sparring et tout change. Le golf, c\'est pareil. Le premier tee n\'est pas le practice.&rdquo;</p>
            <cite>â€” Andy Griffiths, Professionnel PGA AvancÃ©</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Le questionnaire</p>
          <p>Un court questionnaire avant la session donne forme Ã  la journÃ©e avant que nous commencions. Ce qui vous frustre, oÃ¹ sont les lacunes, Ã  quoi ressemble le succÃ¨s.</p>
          <p>Quand nous arrivons au premier tee, j\'ai dÃ©jÃ  une image de ce qu\'il faut observer. Le retour est situationnel et honnÃªte â€” pas un plan de cours gÃ©nÃ©rique appliquÃ© Ã  tout le monde.</p>
          <p>Les sessions ont lieu Ã  Son Gual, Alcanada, ou sur un parcours adaptÃ© Ã  votre niveau et vos objectifs.</p>
          <Link href="/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Discuter d\'une Session &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="Andy Griffiths coaching golf sur un parcours Ã  Majorque"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Ce qui s\'amÃ©liore vraiment</p>
          <h2>Voici ce qui change lors d\'une ronde avec moi.</h2>
          <p className="improvements__sub">Et pourquoi Ã§a dure d\'une faÃ§on que le practice ne produit que rarement.</p>
        </div>
        <div className="improvements-grid">
          {improvements.map((imp, i) => (
            <div key={i} className={`improvement reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}${imp.full ? ' improvement--full' : ''}`}>
              <span className="improvement__num">{imp.num}</span>
              <h3>{imp.title}</h3>
              <p>{imp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">Comment Ã§a marche</p>
          <h2>Trois Ã©tapes. Une session qui change votre jeu.</h2>
          <p>Les sessions ont lieu sur parcours Ã  Son Gual, Alcanada, ou sur un parcours adaptÃ© Ã  votre niveau et vos objectifs. Nous jouons ensemble, le coaching se fait en temps rÃ©el, et le retour est situationnel et honnÃªte â€” pas un plan de cours gÃ©nÃ©rique appliquÃ© Ã  tout le monde.</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'Le questionnaire', text: "Avant la session, vous remplissez un court formulaire. Ce qui vous frustre, oÃ¹ sont les lacunes, Ã  quoi ressemble une bonne journÃ©e. Au premier tee, j\'ai dÃ©jÃ  une image." },
            { num: '02', title: 'La ronde', text: "Nous jouons ensemble. Le coaching se fait en temps rÃ©el â€” la bonne observation au bon moment. Pas un commentaire continu. Pas une leÃ§on. La chose qui change votre score." },
            { num: '03', title: 'Le dÃ©briefing', text: "Autour du dÃ©jeuner, on passe en revue ce qui s\'est amÃ©liorÃ©, sur quoi travailler, et ce qu\'il faut retenir. HonnÃªte et clair. La conversation qui fait tout prendre sens." },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Pour qui c\'est</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Si l\'une de ces situations vous parle, c\'est pour vous.</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'Golfeurs en visite', text: 'AmÃ©lioration ciblÃ©e pendant votre sÃ©jour sur l\'Ã®le â€” pas juste une ronde.' },
            { title: 'Golfeurs rÃ©sidents', text: 'Travail rÃ©gulier avec un professionnel qui joue les mÃªmes parcours que vous.' },
            { title: 'L\'Ã©cart practice/parcours', text: 'Votre jeu d\'entraÃ®nement ne se transfÃ¨re jamais. C\'est lÃ  qu\'on corrige Ã§a.' },
            { title: 'Plus intelligent, pas reconstruit', text: 'Vous voulez mieux jouer sans une refonte technique complÃ¨te.' },
          ].map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">PrÃªt Ã  mieux jouer?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Prenez contact pour discuter d\'une session.</h2>
          <p>Dites-moi oÃ¹ en est votre jeu et ce que vous en voulez. Je construirai la session autour de Ã§a â€” pas un programme gÃ©nÃ©rique.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Prendre contact &rarr;</Link>
          <Link href="/play-with-a-pro" className="btn btn--outline-white">Voir les ExpÃ©riences ComplÃ¨tes</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





