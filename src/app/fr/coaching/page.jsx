import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Coaching Golf sur Parcours à Majorque — PGA Professionnel',
  description: 'Coaching golf sur parcours à Majorque avec UK PGA Advanced Professional Andy Griffiths. Progression réelle dans des conditions réelles — pour golfeurs en visite et résidents.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/coaching' },
}

export default function Coaching_FR() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <header className="page-hero" style={{position:'relative',overflow:'hidden'}}>
  <Image
    src="/images/coaching-hero.jpg"
    alt=""
    fill
    priority
    sizes="100vw"
    style={{objectFit:'cover', objectPosition:'60% 65%'}}
  />
  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%)'}} />

        <div className="page-hero__inner" style={{position:'relative',zIndex:1}}>
          <p className="breadcrumb"><Link href="/fr">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Coaching sur parcours</span></p>
          <h1>Un meilleur golf.<br />Sans tout changer.</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>Coaching sur parcours pour golfeurs en visite et résidents. Conditions réelles, décisions réelles, progression réelle — sans la surcharge technique qui rend la plupart des sessions de practice inutiles dès le 3e trou.</p>
        </div>
      </header>

      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">Pourquoi le practice ne suffit pas</p>
          <h2>Il y a une raison pour laquelle votre jeu au practice ne se retrouve pas sur le parcours.</h2>
          <p>Le practice est plat, contrôlé et sans conséquence. Vous frappez depuis un tapis parfait sans vent, sans dénivelé, sans score en jeu. Puis vous arrivez au premier départ et rien ne se transfère.</p>
          <p>Le coaching sur parcours met la leçon là où elle aide vraiment. Sur le fairway. Dans le rough. Sur une pente inattendue avec un vent que vous n'aviez pas prévu. Avec un score qui compte. C'est là que les jeux changent — et c'est là que nous travaillons.</p>
          <div className="analogy-box">
            <p>&ldquo;Pensez à la boxe. Vous pouvez vous entraîner aux poings pendant des semaines et vous sentir prêt. Puis vous avez votre premier sparring et tout change. Le golf, c'est pareil. Le premier départ n'est pas le practice.&rdquo;</p>
            <cite>— Andy Griffiths, UK PGA Advanced Professional</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Le questionnaire</p>
          <p>Un court questionnaire avant la session donne forme à la journée avant que nous commencions. Ce qui vous frustre, où sont les lacunes, à quoi ressemble le succès.</p>
          <p>Quand nous arrivons au premier départ, j'ai déjà une image de ce qu'il faut observer. Le retour est situationnel et honnête — pas un plan de cours générique.</p>
          <p>Les sessions ont lieu à Son Gual, Alcanada, ou sur un parcours adapté à votre niveau et vos objectifs.</p>
          <Link href="/fr/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>Discuter d'une session →</Link>
        </div>
      </section>

      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">Ce qui s'améliore vraiment</p>
          <h2>Voici ce qui change lors d'un tour avec moi.</h2>
          <p className="improvements__sub">Et pourquoi ça reste, d'une façon que le practice ne produit que rarement.</p>
        </div>
        <div className="improvements-grid">
          <div className="improvement reveal"><span className="improvement__num">01</span><h3>Gestion du parcours</h3><p>La plupart des golfeurs amateurs perdent l'essentiel de leurs coups à cause d'une mauvaise décision, pas d'un mauvais swing. Choisir le bon club, la bonne cible, la bonne trajectoire — voilà ce qui sépare un 90 d'un 80.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">02</span><h3>Choix de coups sous pression</h3><p>Les décisions qui s'effondrent sous pression — le driver quand un fer 5 gagne le trou, le coup héroïque quand la sécurité rapporte autant — deviennent visibles sur le parcours d'une façon impossible au practice.</p></div>
          <div className="improvement reveal"><span className="improvement__num">03</span><h3>Lire les greens et les pentes</h3><p>Putter et chipper sur un vrai green est fondamentalement différent d'un green d'entraînement. La vitesse, la pente, la texture, la pression du moment — tout change ce qui fonctionne.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">04</span><h3>Jouer dans le vent</h3><p>Majorque est venteuse. Son Gual notamment vit dans son propre écosystème de vent. Le choix du club dans un vent de travers, la gestion de la trajectoire — ça ne se travaille que quand ça souffle vraiment.</p></div>
          <div className="improvement reveal"><span className="improvement__num">05</span><h3>Mental et routine</h3><p>Comment vous vous parlez après un mauvais coup. Comment vous abordez le départ suivant. La routine d'avant coup sous pression. Le mental est totalement invisible au practice.</p></div>
          <div className="improvement reveal reveal-delay-1"><span className="improvement__num">06</span><h3>Trouver les gains rapides</h3><p>La plupart des golfeurs progressent le plus rapidement non pas en reconstruisant leur swing mais grâce à un ou deux petits déblocages. Un client chippait avec un pitching wedge toute sa vie. Une conversation, un changement de club, amélioration immédiate.</p></div>
          <div className="improvement reveal improvement--full"><span className="improvement__num">07</span><h3>Régularité dans les vraies conditions</h3><p>Les lies inégaux, les fairways étroits, le rough — le parcours demande des coups que le practice ne sollicite jamais. Les jouer régulièrement, avec un retour en temps réel, c'est comme ça qu'on construit un jeu qui se montre quand ça compte.</p></div>
        </div>
      </section>

      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">Comment ça marche</p>
          <h2>Trois étapes. Une session qui change votre jeu.</h2>
          <p>Les sessions ont lieu sur parcours à Son Gual, Alcanada, ou un parcours adapté. Nous jouons ensemble, le coaching se fait en temps réel, le retour est situationnel et honnête.</p>
        </div>
        <div className="how-steps reveal">
          <div className="how-step"><span className="how-step__num">01</span><div><h3>Le questionnaire</h3><p>Avant la session, vous remplissez un court formulaire. Ce qui vous frustre, où les lacunes sont, à quoi ressemble une bonne journée. Au premier départ, j'ai déjà une image.</p></div></div>
          <div className="how-step"><span className="how-step__num">02</span><div><h3>Le tour</h3><p>Nous jouons ensemble. Le coaching se fait en temps réel — la bonne observation au bon moment. Pas un commentaire continu. La chose qui change votre score.</p></div></div>
          <div className="how-step"><span className="how-step__num">03</span><div><h3>Le débriefing</h3><p>Autour du déjeuner, on passe en revue ce qui s'est amélioré, sur quoi travailler, et ce qu'il faut retenir. Honnête et clair.</p></div></div>
        </div>
      </section>

      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>Pour qui c'est</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>Si l'une de ces situations vous parle, c'est pour vous.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><h3>Golfeurs en visite</h3><p>Progression ciblée pendant votre séjour sur l'île — pas juste un tour.</p></div>
          <div className="who-card reveal reveal-delay-1"><h3>Golfeurs résidents</h3><p>Travail régulier avec un professionnel qui joue les mêmes parcours que vous.</p></div>
          <div className="who-card reveal reveal-delay-2"><h3>L'écart practice/parcours</h3><p>Votre jeu d'entraînement ne se transfère jamais. C'est là qu'on corrige ça.</p></div>
          <div className="who-card reveal"><h3>Plus intelligent, pas reconstruit</h3><p>Vous voulez mieux jouer sans une refonte technique complète.</p></div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Prêt à mieux jouer ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Prenez contact pour discuter d'une session.</h2>
          <p>Dites-moi où en est votre jeu et ce que vous en voulez. Je construirai la session autour de ça.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Prendre contact →</Link>
          <Link href="/fr/play-with-a-pro" className="btn btn--outline-white">Voir les Expériences Complètes</Link>
        </div>
      </section>
    </PageLayout>
  )
}
