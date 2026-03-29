import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Jouer avec un Pro â€” JournÃ©es Golf PrivÃ©es Ã  Majorque',
  description: 'Une partie de golf privÃ©e Ã  Majorque aux cÃ´tÃ©s du UK PGA Advanced Professional Andy Griffiths. Coaching sur parcours, journÃ©e complÃ¨te organisÃ©e. Ã€ partir de â‚¬350 par personne.',
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
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>JournÃ©es Golf PrivÃ©es Â· Majorque</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Une JournÃ©e Golf PrivÃ©e Ã  Majorque.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Pas une leÃ§on. Pas un tour standard. Une journÃ©e privÃ©e sur l'un des plus beaux parcours de l'Ã®le, animÃ©e par un UK PGA Advanced Professional avec deux dÃ©cennies de coaching sur trois continents.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>â‚¬350 p.p. + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/fr/contact" className="btn btn--gold">RÃ©server votre journÃ©e &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Voir les formules</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Ce que la journÃ©e implique</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Avant votre arrivÃ©e, je sais dÃ©jÃ  quoi observer.</h2>
          <p>Avant votre arrivÃ©e, vous remplissez un court questionnaire. Ce qui vous frustre, ou est l'Ã©cart. Quand nous arrivons au premier depart, je sais dÃ©jÃ  quoi observer.</p>
          <p>Pendant le tour, le coaching s'intÃ¨gre naturellement â€” pas un commentaire continu, mais la bonne observation au bon moment. Des dÃ©cisions de gestion de parcours que vous n'aviez pas envisagÃ©es.</p>
          <p>J'ai coachÃ© dans des environnements oÃ¹ l'attente Ã©tait une amÃ©lioration sÃ©rieuse et mesurable â€” des joueurs de l'Ã©quipe nationale en Chine, des passionnÃ©s de golf Ã  travers l'Asie.</p>
          <div className="pull-quote"><p>&ldquo;Ce que la plupart des golfeurs constatent : ils repartent en jouant notablement mieux et avec plus de confiance â€” et en comprenant pourquoi.&rdquo;</p></div>
          <p>Le dÃ©briefing autour du dÃ©jeuner n'est pas un rÃ©sumÃ©. C'est la conversation qui donne un sens Ã  toute la journÃ©e.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>DÃ©jÃ  rÃ©servÃ© ?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Remplissez votre questionnaire prÃ©-parcours &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>3 minutes suffisent. Cela m'aide Ã  adapter la journÃ©e avant le premier dÃ©part.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Ce qui est inclus</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Choix du parcours</strong>AdaptÃ© Ã  votre jeu, votre handicap et vos attentes</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Heure de depart</strong>RÃ©servÃ©e et entiÃ¨rement gÃ©rÃ©e</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing avant le tour</strong>Ce qu'il faut attendre du parcours</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 trous aux cÃ´tÃ©s d'Andy</strong>En jouant, comme votre partenaire</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching sur parcours</strong>Gestion du parcours, choix des clubs</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Debriefing</strong>Ce qui s'est amÃ©liorÃ©, sur quoi travailler</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Dejeuner</strong>Au restaurant du parcours ou local (JournÃ©e Signature)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Quel parcours ?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Le parcours est toujours choisi avec vous.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Un groupe avec des dÃ©butants, une demi-journÃ©e â€” il y a des parcours qui conviennent mieux, et je vous dirai honnÃªtement lequel. Certains sont rÃ©servÃ©s aux membres â€” cet accÃ¨s peut Ãªtre arrangÃ©.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Pour qui c'est</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>L'expÃ©rience s'adapte Ã  votre jeu.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>Le golfeur en visite</h3><p>Un golfeur handicapÃ© qui veut que sa ronde soit vraiment mÃ©morable â€” pas juste une heure de dÃ©part rÃ©servÃ©e en ligne.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>L'Ã©cart practice/parcours</h3><p>Des golfeurs dont le jeu au practice ne se transfÃ¨re jamais. Le problÃ¨me est presque toujours la gestion de parcours.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>Le groupe d'executives</h3><p>Groupes d'entreprise, dirigeants en visite, journÃ©e premium entiÃ¨rement organisÃ©e.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>Le dÃ©butant</h3><p>Des golfeurs occasionnels qui veulent une prÃ©sence experte sans intimidation.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>Le golfeur rÃ©sident</h3><p>BasÃ© sur l'Ã®le, cherchant Ã  travailler rÃ©guliÃ¨rement avec un professionnel.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Quiconque veut plus</h3><p>La seule condition est de vouloir une expÃ©rience golf genuinement diffÃ©rente.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Ce que disent les golfeurs</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>Dans leurs propres mots.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jouer au golf avec Andy Ã©tait une expÃ©rience superbe. Il possÃ¨de un niveau d'insight sans Ã©gal, et le transmet d'une faÃ§on Ã  la fois subtile et empathique. AprÃ¨s seulement 18 trous, j'ai dÃ©couvert un nouveau plafond Ã  mon potentiel.&rdquo;</p><span className="testimonial__author">â€” Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;La comprÃ©hension des calculs derriÃ¨re chaque coup a considÃ©rablement amÃ©liorÃ© ma prise de dÃ©cision. Le moment qui m'a le plus marquÃ© : voir Andy frapper un fer 3 Ã  220 mÃ¨tres par-dessus un dogleg Ã  droite et le placer sur le green.&rdquo;</p><span className="testimonial__author">â€” Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy a complÃ¨tement changÃ© ma faÃ§on de penser la gestion de parcours. AprÃ¨s 18 trous avec lui Ã  Son Gual, j'ai jouÃ© mon meilleur score lÃ -bas et j'ai compris pourquoi.&rdquo;</p><span className="testimonial__author">â€” Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">ExpÃ©riences & Formules</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Trois niveaux. Tous privÃ©s. Tous guidÃ©s personnellement.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>La diffÃ©rence tient Ã  la complÃ©tude de la journÃ©e. Les trois incluent le mÃªme niveau d'expertise.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Le Tour de Majorque</p>
            <h3 className="tier__name">Jouer avec un Pro</h3>
            <p className="tier__price">â‚¬350 p.p. + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Parcours adaptÃ© Ã  votre jeu</li>
              <li>Heure de dÃ©part gÃ©rÃ©e</li>
              <li>Briefing et Ã©chauffement</li>
              <li>18 trous aux cÃ´tÃ©s d'Andy</li>
              <li>Coaching sur parcours</li>
              <li>DÃ©briefing aprÃ¨s la ronde</li>
            </ul>
            <Link href="/fr/contact" className="tier__btn">Demander &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">La JournÃ©e Signature</p>
            <h3 className="tier__name">JournÃ©e Golf EncadrÃ©e</h3>
            <p className="tier__price">Ã€ partir de â‚¬450 p.p. + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Tout du Tour de Majorque</li>
              <li>Son Gual ou Alcanada</li>
              <li>DÃ©jeuner prolongÃ© au restaurant</li>
              <li>Cadeau surprise</li>
              <li>Rythme posÃ© â€” une vraie journÃ©e</li>
            </ul>
            <Link href="/fr/contact" className="tier__btn">Demander &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">L'ExpÃ©rience ComplÃ¨te</p>
            <h3 className="tier__name">Voyage Golf Sur Mesure</h3>
            <p className="tier__price">Sur devis</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>JournÃ©e multi-parcours ou programme</li>
              <li>Transport privÃ© depuis Palma</li>
              <li>DÃ®ner dans un restaurant sÃ©lectionnÃ©</li>
              <li>SÃ©ance spa ou rÃ©cupÃ©ration</li>
              <li>Coordination concierge complÃ¨te</li>
              <li>Groupes, entreprises & demandes sur mesure</li>
            </ul>
            <Link href="/fr/contact" className="tier__btn">Demander &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">PrÃªt Ã  jouer Majorque comme il se doit ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Prenez contact et organisons votre journÃ©e.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous attendez. Je vous rÃ©pondrai â€” personnellement, sous 24 heures.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/fr/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>RÃ©server votre journÃ©e &rarr;</Link>
          <Link href="/fr/golf-courses" className="btn btn--outline-white">Explorer les parcours</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Questionnaire prÃ©-parcours &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

