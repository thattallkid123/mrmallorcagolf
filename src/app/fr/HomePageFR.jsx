'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ Coup de cœur', region: 'Palma · 11km du centre', name: 'Son Gual', meta: ['Championship','Par 72','€80–165'], stars: '★★★★★', difficulty: '9/10 Difficulté', excerpt: 'Le design de Thomas Himmel (2007) évolue dans son propre écosystème de vent. La séquence finale — trous 15 à 18 — compte parmi les quatre meilleurs trous du golf européen.' },
  { cls: 'course-card--2', badge: '★ Coup de cœur', region: 'Alcúdia · Nord de Majorque', name: 'Alcanada', meta: ['Côtier','Par 72','€95–175'], stars: '★★★★★', difficulty: '8/10 Difficulté', excerpt: 'Robert Trent Jones Jr. dans toute sa splendeur. Le 17e — un par 3 au-dessus dune crique avec le phare directement derrière le drapeau — est lun des trous les plus photographiés dEspagne.' },
  { cls: 'course-card--3', badge: 'Meilleur dEspagne 2025', region: 'Son Vida · Palma', name: 'Son Muntaner', meta: ['DP World Tour','Par 72'], stars: '★★★★★', difficulty: '7/10 Difficulté', excerpt: 'Élu meilleur parcours dEspagne aux World Golf Awards 2025. Vue sur la Baie de Palma. Un olivier millénaire au 15e trou.' },
  { cls: 'course-card--4', badge: null, region: 'Santa Ponsa · Sud-ouest', name: 'Santa Ponsa 1', meta: ['DP World Tour','Par 72','€77–126'], stars: '★★★★☆', difficulty: '8/10 Difficulté', excerpt: 'A accueilli le Mallorca Golf Open DP World Tour 2021. Lun des parcours les plus longs de lîle.' },
  { cls: 'course-card--5', badge: null, region: 'Camp de Mar · Sud-ouest', name: 'Golf de Andratx', meta: ['Le plus exigeant','Par 70','€96–140'], stars: '★★★★☆', difficulty: '9/10 Difficulté', excerpt: 'Le 6e est le par 5 le plus long dEspagne avec 609 mètres. Construit dans les collines côtières sans compromis. Prévoyez des balles de rechange et humilité.' },
]

const faqs = [
  { q: 'Faut-il être un bon golfeur ?', a: 'Pas du tout. Lexpérience sadapte à votre niveau — débutants et joueurs scratch en tirent tous quelque chose. La seule condition : vouloir une expérience golf vraiment différente.' },
  { q: 'Quel parcours utilisez-vous ?', a: 'Cela dépend de vous. Son Gual et Alcanada sont mes parcours principaux pour une vraie journée complète. Pour les débutants, les groupes ou les rondes plus courtes, il y a de meilleures options — et je vous dirai honnêtement laquelle convient.' },
  { q: 'Comment réserver ?', a: 'Prenez contact. Dites-moi vos dates et ce que vous recherchez — je vous réponds personnellement sous 24 heures. Pas de système de réservation. Pas dattente.' },
  { q: 'Est-ce adapté à un groupe ?', a: 'Oui. Les expériences conviennent aux solos, aux duos, aux groupes damis et aux journées dentreprise. LExpérience Complète est particulièrement appréciée des groupes professionnels et des dirigeants en visite sur lîle.' },
  { q: 'Quelle est la meilleure période pour venir ?', a: 'Octobre, novembre, mars et avril. La meilleure combinaison de conditions de parcours, de météo, de rapport qualité-prix et de rythme de jeu. Lîle est jouable toute lannée — en janvier, les fairways ici sont meilleurs que ceux daoût en Angleterre.' },
]

export default function HomePageFR() {
  const [openFaq, setOpenFaq] = useState(0)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const scrollTrack = (dir) => trackRef.current?.scrollBy({ left: dir * 370, behavior: 'smooth' })
  const onMouseDown = (e) => { isDragging.current = true; trackRef.current.style.cursor = 'grabbing'; startX.current = e.pageX - trackRef.current.offsetLeft; scrollLeftStart.current = trackRef.current.scrollLeft }
  const onMouseLeave = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseUp = () => { isDragging.current = false; if(trackRef.current) trackRef.current.style.cursor = 'grab' }
  const onMouseMove = (e) => { if (!isDragging.current) return; e.preventDefault(); const x = e.pageX - trackRef.current.offsetLeft; trackRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 1.4 }

  return (
    <>
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">PGA Advanced Professional · Majorque</p>
          <h1 className="serif-display hero__title">
            Jouez les meilleurs<br />parcours de Majorque.<br />
            <em style={{fontStyle:'italic',fontWeight:400,opacity:0.85}}>Avec un pro à vos côtés.</em>
          </h1>
          <p className="hero__sub">Des expériences et un coaching sur le parcours — pour les golfeurs qui veulent tirer le meilleur de leur séjour sur l&apos;île.</p>
          <div className="hero__actions">
            <Link href="/fr/play-with-a-pro" className="btn btn--gold">Voir les expériences {">"}</Link>
            <Link href="/fr/golf-courses" className="btn btn--outline-white">Découvrir les parcours</Link>
          </div>
        </div>
        <div className="hero__trust">
          <p className="hero__trust-line"><em>PGA Advanced Professional</em></p>
          <p className="hero__trust-line"><em>Trackman Master certifié</em></p>
          <p className="hero__trust-line"><em>11 ans à Shanghai</em></p>
          <p className="hero__trust-line">Pebble Beach · Évian · The Open</p>
        </div>
        <div className="hero__scroll"><span>Défiler</span><div className="hero__scroll-line"></div></div>
      </section>

      <section className="intro reveal">
        <div className="intro__left">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)',marginBottom:'1rem'}}>Ce qui fait la différence</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#fff',marginBottom:'1.5rem'}}>
            Beaucoup d&apos;expériences golf à Majorque passent par une plateforme.<br />Celle-ci, c&apos;est autre chose.
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.6)',lineHeight:1.85}}>
            Une journée privée animée par un PGA Advanced Professional ayant coaché au plus haut niveau sur trois continents — des joueurs de l&apos;équipe nationale de Chine aux golfeurs dans les grands sites de compétition en Europe, en Asie et aux États-Unis. L&apos;expertise qui sous-tend la journée fait toute la différence. Le golf est meilleur. Les conseils sont vrais.
          </p>
        </div>
        <div className="intro__right">
          <div className="intro__stat reveal reveal-delay-1"><div className="intro__stat-num">11</div><div className="intro__stat-label">Ans de coaching en Chine</div></div>
          <div className="intro__stat reveal reveal-delay-2"><div className="intro__stat-num">40+</div><div className="intro__stat-label">Pays où j&apos;ai coaché</div></div>
          <div className="intro__stat reveal reveal-delay-3"><div className="intro__stat-num">22</div><div className="intro__stat-label">Parcours de Majorque explorés</div></div>
        </div>
      </section>

      <section className="how">
        <div className="how__header reveal">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="serif-display">Trois étapes pour un parcours inoubliable.</h2>
        </div>
        <div className="how__steps">
          <div className="how__step reveal"><span className="how__num">01</span><h3>Prenez contact</h3><p>Indiquez-moi vos dates, votre handicap et ce que vous recherchez. Je vous réponds personnellement sous 24 heures.</p></div>
          <div className="how__step reveal reveal-delay-1"><span className="how__num">02</span><h3>Je construis votre journée</h3><p>Recommandation de parcours, heure de départ, déjeuner, transport — tout est réglé avant votre arrivée.</p></div>
          <div className="how__step reveal reveal-delay-2"><span className="how__num">03</span><h3>Arrivez et jouez</h3><p>Votre seule mission : profiter du parcours. Et jouer mieux que prévu.</p></div>
        </div>
      </section>

      <section className="courses">
        <div className="courses__header">
          <div className="courses__header-left"><p className="eyebrow">Parcours sélectionnés</p><h2 className="serif-display">Les plus beaux parcours de Majorque — joués et évalués.</h2></div>
          <div className="courses__header-right">
            <button className="courses__arrow" onClick={() => scrollTrack(-1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg></button>
            <button className="courses__arrow" onClick={() => scrollTrack(1)}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg></button>
          </div>
        </div>
        <div className="courses__track" ref={trackRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          {courses.map((c,i) => (
            <article key={i} className={`course-card ${c.cls}`}>
              <div className="course-card__bg"></div><div className="course-card__overlay"></div>
              {c.badge && <span className="course-card__badge">{c.badge}</span>}
              <div className="course-card__content">
                <p className="course-card__region">{c.region}</p>
                <h3 className="course-card__name">{c.name}</h3>
                <div className="course-card__meta">{c.meta.map((m,j)=><span key={j}>{j>0&&<span style={{display:'inline-block',width:2,height:2,borderRadius:'50%',background:'rgba(255,255,255,0.3)',margin:'0 7px',verticalAlign:'middle'}}></span>}{m}</span>)}</div>
                <div className="course-card__rating"><span className="course-card__stars">{c.stars}</span><span className="course-card__rating-label"> · {c.difficulty}</span></div>
                <p className="course-card__excerpt">{c.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="what">
        <div className="what__left reveal">
          <p className="eyebrow">L&apos;expérience</p>
          <h2 className="serif-display">La plupart des journées golf à Majorque, c&apos;est une heure de départ et un au revoir.</h2>
          <span className="gold-rule"></span>
          <p>J&apos;ai passé plus d&apos;une décennie à coacher en Chine, où les leçons de golf coûtaient 500 € de l&apos;heure et où les clients attendaient des progrès sérieux et mesurables — pas de simples encouragements. Avant cela, j&apos;ai coaché à Pebble Beach, à The Open Championship, à Évian, et j&apos;ai passé une saison sur un tour du monde dans quarante pays.</p>
          <p>Ce parcours façonne chaque ronde que j&apos;accompagne. De vrais conseils tout au long — stratégie de parcours, prise de décision, les choses que la plupart des golfeurs n&apos;entendent jamais. Une journée dont vous parlerez encore dans l&apos;avion du retour.</p>
          <p>Tout est organisé. Le parcours. L&apos;heure de départ. La table du déjeuner. Votre seule tâche : jouer — et jouer mieux que prévu.</p>
          <Link href="/fr/play-with-a-pro" className="btn btn--dark">Voir les expériences {">"}</Link>
        </div>
        <div className="what__right reveal reveal-delay-1">
          {[
            { icon: 'i', title: 'Tout est organisé', text: 'Parcours, heure de départ, transport, déjeuner — tout géré avant votre arrivée.' },
            { icon: '�', title: 'Coaching sur le parcours', text: 'Une vraie progression dans de vraies conditions. Pas une leçon. Pas un commentaire. La bonne observation au bon moment.' },
            { icon: '◇', title: 'Vraiment privé', text: 'Juste vous et un PGA Advanced Professional. Aucun inconnu dans votre groupe. Un parcours entièrement adapté à votre jeu.' },
            { icon: '+', title: 'Accès à plus', text: 'Des parcours membres auxquels la plupart des visiteurs ne peuvent pas accéder seuls — Santa Ponsa 2 & 3, et dautres.' },
          ].map((f,i) => (
            <div key={i} className="what__feature">
              <div className="what__feature-icon">{f.icon}</div>
              <div className="what__feature-text"><h4>{f.title}</h4><p>{f.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__header reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,0.35)'}}>Ce que disent les golfeurs</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Dans leurs propres mots.</h2>
        </div>
        <div className="testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Jouer au golf avec Andy était une expérience superbe. Il possède un niveau d&apos;insight sans égal, et le transmet de façon à la fois subtile et empathique. Après seulement 18 trous ensemble, j&apos;ai découvert un nouveau plafond à mon potentiel.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;L&apos;insight sur les calculs derrière chaque coup a considérablement amélioré ma prise de décision. Le moment marquant : voir Andy frapper un fer 3 à 220 mètres par-dessus un dogleg à droite avec des arbres et le placer sur le green. Un talent exceptionnel.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
        </div>
      </section>

      <section className="packages">
        <div className="packages__header reveal">
          <p className="eyebrow">Expériences &amp; Formules</p>
          <h2 className="serif-display">Des expériences golf privées conçues autour de vous.</h2>
          <p>Trois formules. Toutes privées. Toutes accompagnées personnellement. La différence, c&apos;est la complétude de la journée.</p>
        </div>
        <div className="packages__grid">
          <div className="package reveal">
            <p className="package__tier">Le Tour de Majorque</p><h3 className="package__name">Jouer avec un pro</h3><p className="package__price">À partir de 500 € par personne</p><div className="package__divider"></div>
            <ul className="package__features">{['Recommandation de parcours adaptée à votre jeu','Heure de départ réservée et entièrement gérée','Briefing et échauffement avant le départ','18 trous aux côtés dAndy','Coaching sur le parcours tout au long de la ronde','Débriefing après la ronde — honnête et clair'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/fr/contact" className="btn btn--dark">Demander {">"}</Link>
          </div>
          <div className="package package--featured reveal reveal-delay-1">
            <p className="package__tier">La Journée Signature</p><h3 className="package__name">Journée golf encadrée</h3><p className="package__price">À partir de 650 € par personne</p><div className="package__divider"></div>
            <ul className="package__features">{['Tout du Tour de Majorque','Son Gual ou Alcanada — deux des plus beaux parcours de lîle','Déjeuner prolongé au restaurant du parcours','Cadeau surprise sélectionné avec soin','Rythme posé — une vraie journée, pas une ronde bâclée'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/fr/contact" className="btn btn--gold">Demander {">"}</Link>
          </div>
          <div className="package reveal reveal-delay-2">
            <p className="package__tier">L&apos;Expérience Complète</p><h3 className="package__name">Voyage golf sur mesure</h3><p className="package__price">Sur devis</p><div className="package__divider"></div>
            <ul className="package__features">{['Journée multi-parcours ou programme complet','Transport privé depuis Palma','Dîner dans un restaurant soigneusement sélectionné','Séance spa ou récupération dans un établissement partenaire','Coordination concierge complète','Pour les groupes, entreprises et demandes sur mesure'].map((f,i)=><li key={i}>{f}</li>)}</ul>
            <Link href="/fr/contact" className="btn btn--dark">Demander {">"}</Link>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__left reveal">
          <p className="eyebrow">Questions</p>
          <h2 className="serif-display">Ce que l&apos;on demande avant de prendre contact.</h2>
          <p>Encore des doutes ? Contactez-moi directement — je réponds personnellement sous 24 heures.</p>
        </div>
        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((f,i) => (
            <div key={i} className={`faq__item${openFaq===i?' open':''}`}>
              <div className="faq__q" onClick={() => setOpenFaq(openFaq===i?-1:i)}>{f.q}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg></div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Prêt à jouer Majorque comme il se doit ?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Contactez-moi.<br />Je m&apos;occupe du reste.</h2>
          <p>Dites-moi vos dates, votre handicap et ce que vous attendez de la journée. Je vous répondrai avec une recommandation — personnellement, sous 24 heures.</p>
        </div>
        <div className="cta-final__right reveal reveal-delay-1">
          <p className="serif-italic">&ldquo;Le golf est meilleur. Les conseils sont vrais.&rdquo;</p>
          <Link href="/fr/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Réservez votre journée {">"}</Link>
          <Link href="/fr/golf-courses" className="btn btn--outline-white">Découvrir les parcours</Link>
        </div>
      </section>
    </>
  )
}

