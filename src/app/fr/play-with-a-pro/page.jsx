import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Jouer avec un Pro — Journées Golf Privées à Majorque',
  description: 'Une partie de golf privée à Majorque aux côtés du UK PGA Advanced Professional Andy Griffiths. Coaching sur parcours, journée complète organisée. À partir de €350 par personne.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/play-with-a-pro' },
}

export default function PlayWithAPro_FR() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/fr" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Accueil</Link> &nbsp;/&nbsp; <span>Jouer avec un Pro</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Journées Golf Privées · Majorque</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Une Journée Golf Privée à Majorque.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Pas une leçon. Pas un tour standard. Une journée privée sur l'un des plus beaux parcours de l'île, animée par un UK PGA Advanced Professional avec deux décennies de coaching sur trois continents.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>€350 p.p. + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/fr/contact" className="btn btn--gold">Réserver votre journée &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Voir les formules</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Ce que la journée implique</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Avant votre arrivée, je sais déjà quoi observer.</h2>
          <p>Avant votre arrivée, vous remplissez un court questionnaire. Ce qui vous frustre, ou est l'écart. Quand nous arrivons au premier depart, je sais déjà quoi observer.</p>
          <p>Pendant le tour, le coaching s'intègre naturellement — pas un commentaire continu, mais la bonne observation au bon moment. Des décisions de gestion de parcours que vous n'aviez pas envisagées.</p>
          <p>J'ai coaché dans des environnements où l'attente était une amélioration sérieuse et mesurable — des joueurs de l'équipe nationale en Chine, des passionnés de golf à travers l'Asie.</p>
          <div className="pull-quote"><p>&ldquo;Ce que la plupart des golfeurs constatent : ils repartent en jouant notablement mieux et avec plus de confiance — et en comprenant pourquoi.&rdquo;</p></div>
          <p>Le débriefing autour du déjeuner n'est pas un résumé. C'est la conversation qui donne un sens à toute la journée.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Déjà réservé ?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Remplissez votre questionnaire pré-parcours &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>3 minutes suffisent. Cela m'aide à adapter la journée avant le premier départ.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Ce qui est inclus</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Choix du parcours</strong>Adapté à votre jeu, votre handicap et vos attentes</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Heure de depart</strong>Réservée et entièrement gérée</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing avant le tour</strong>Ce qu'il faut attendre du parcours</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 trous aux côtés d'Andy</strong>En jouant, comme votre partenaire</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching sur parcours</strong>Gestion du parcours, choix des clubs</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Debriefing</strong>Ce qui s'est amélioré, sur quoi travailler</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Dejeuner</strong>Au restaurant du parcours ou local (Journée Signature)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Quel parcours ?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Le parcours est toujours choisi avec vous.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Un groupe avec des débutants, une demi-journée — il y a des parcours qui conviennent mieux, et je vous dirai honnêtement lequel. Certains sont réservés aux membres — cet accès peut être arrangé.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Pour qui c'est</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>L'expérience s'adapte à votre jeu.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>Le golfeur en visite</h3><p>Un golfeur handicapé qui veut que sa ronde soit vraiment mémorable — pas juste une heure de départ réservée en ligne.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>L'écart practice/parcours</h3><p>Des golfeurs dont le jeu au practice ne se transfère jamais. Le problème est presque toujours la gestion de parcours.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>Le groupe d'executives</h3><p>Groupes d'entreprise, dirigeants en visite, journée premium entièrement organisée.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>Le débutant</h3><p>Des golfeurs occasionnels qui veulent une présence experte sans intimidation.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>Le golfeur résident</h3><p>Basé sur l'île, cherchant à travailler régulièrement avec un professionnel.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Quiconque veut plus</h3><p>La seule condition est de vouloir une expérience golf genuinement différente.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Ce que disent les golfeurs</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>Dans leurs propres mots.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jouer au golf avec Andy était une expérience superbe. Il possède un niveau d'insight sans égal, et le transmet d'une façon à la fois subtile et empathique. Après seulement 18 trous, j'ai découvert un nouveau plafond à mon potentiel.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;La compréhension des calculs derrière chaque coup a considérablement amélioré ma prise de décision. Le moment qui m'a le plus marqué : voir Andy frapper un fer 3 à 220 mètres par-dessus un dogleg à droite et le placer sur le green.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy a complètement changé ma façon de penser la gestion de parcours. Après 18 trous avec lui à Son Gual, j'ai joué mon meilleur score là-bas et j'ai compris pourquoi.&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Expériences & Formules</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Trois niveaux. Tous privés. Tous guidés personnellement.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>La différence tient à la complétude de la journée. Les trois incluent le même niveau d'expertise.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Le Tour de Majorque</p>
            <h3 className="tier__name">Jouer avec un Pro</h3>
            <p className="tier__price">€350 p.p. + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Parcours adapté à votre jeu</li>
              <li>Heure de départ gérée</li>
              <li>Briefing et échauffement</li>
              <li>18 trous aux côtés d'Andy</li>
              <li>Coaching sur parcours</li>
              <li>Débriefing après la ronde</li>
            </ul>
            <Link href="/fr/contact" className="tier__btn">Demander &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">La Journée Signature</p>
            <h3 className="tier__name">Journée Golf Encadrée</h3>
            <p className="tier__price">À partir de €450 p.p. + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Tout du Tour de Majorque</li>
              <li>Son Gual ou Alcanada</li>
              <li>Déjeuner prolongé au restaurant</li>
              <li>Cadeau surprise</li>
              <li>Rythme posé — une vraie journée</li>
            </ul>
            <Link href="/fr/contact" className="tier__btn">Demander &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">L'Expérience Complète</p>
            <h3 className="tier__name">Voyage Golf Sur Mesure</h3>
            <p className="tier__price">Sur devis</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Journée multi-parcours ou programme</li>
              <li>Transport privé depuis Palma</li>
              <li>Dîner dans un restaurant sélectionné</li>
              <li>Séance spa ou récupération</li>
              <li>Coordination concierge complète</li>
              <li>Groupes, entreprises & demandes sur mesure</li>
            </ul>
            <Link href="/fr/contact" className="tier__btn">Demander &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Prêt à jouer Majorque comme il se doit ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Prenez contact et organisons votre journée.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous attendez. Je vous répondrai — personnellement, sous 24 heures.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Réserver votre journée &rarr;</Link>
          <Link href="/fr/golf-courses" className="btn btn--outline-white">Explorer les parcours</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Questionnaire pré-parcours &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

