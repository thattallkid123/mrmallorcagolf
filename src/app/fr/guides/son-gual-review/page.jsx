import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: "Son Gual Golf Majorque — Avis Honnête d'un Professionnel PGA (2026)",
  description: "Le parcours de golf Son Gual à Majorque, évalué par un PGA professionnel.",
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/guides/son-gual-review' },
}

const meta = {
  badge: 'Avis Parcours', badgeGold: true, readTime: '6 min de lecture', updated: 'Mars 2026',
  title: "Son Gual Golf Majorque — Avis Honnête d'un Professionnel PGA (2026)",
  intro: "Mon parcours de prédilection sur l'île. Le vent, les greens, les derniers trous — et pourquoi Obama et Nadal continuent d'y revenir.",
  lang: 'fr',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada Golf — Avis Honnête 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Meilleurs Parcours de Golf à Majorque 2026' },
  ],
}


export default function Post() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <PostLayout meta={meta} lang="fr">
        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}>Cet article a été rédigé en anglais puis traduit en français.</p>

        <p>Son Gual est mon parcours le plus joué à Majorque et celui que je recommande le plus systématiquement.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-hero.webp" alt="Son Gual Golf Course" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>Le Premier Départ</h2>
        <p>La première fois que j'ai joué à Son Gual, j'étais sur les départs noirs, le vent soufflait fort par la gauche. La caméra tournait pour un vlog. J'étais vraiment un peu nerveux.</p>
        <p>Le drive a légèrement touché le talon. Il a quand même volé plus loin que prévu et a évité les bunkers — de justesse. Il y a tellement de bunkers à Son Gual, positionnés exactement là où vont les coups légèrement ratés.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-1.jpg" alt="Son Gual fairway" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>Le Vent</h2>
        <p>Son Gual semble vivre dans son propre écosystème. Je quitte ma maison par un matin calme et j'arrive au premier départ pour trouver un vent soutenu — qui reste ainsi pendant quatre heures.</p>
        <div className="post-pull"><p>« J'ai quitté la maison par un matin calme et je suis arrivé au premier départ pour trouver un vent fort. Il est resté ainsi pendant quatre heures. »</p></div>
        <h2>Les Greens</h2>
        <p>Rapides, surélevés et impitoyables sur les mauvaises approches. En janvier, les greens étaient tondus si court que c'était remarquable pour cette période de l'année.</p>
        <p>L'une de mes partenaires de jeu a attrapé son putter en croyant être sur le green. Elle avait encore une trentaine de yards d'avant-green à couvrir. L'entretien est aussi minutieux.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-2.jpg" alt="Son Gual greens" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <h2>Le Parcours</h2>
        <p>Le design de Thomas Himmel de 2007 utilise intelligemment les dénivelés. Le 2e trou abrite l'un des plus grands bunkers d'Europe. La séquence finale à partir du 15e est largement considérée comme l'une des plus belles fins de parcours du golf européen.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'21/9'}}>
          <img src="/images/son-gual-blog/sg-3.webp" alt="Son Gual panoramic" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%'}} />
        </div>
        <h2>Visiteurs Notables</h2>
        <p>Rafa Nadal joue ici régulièrement — son parcours préféré déclaré sur l'île. Barack Obama a joué en novembre 2024.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-4.jpg" alt="Son Gual Golf" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€80–165</span><span className="post-fact__label">Green fees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">Difficulté</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Parcours championship</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">Conçu par Thomas Himmel</span></div>
        </div>
        <h2>Green Fees 2026</h2>
        <p>Basse saison : €115. Janvier maintenance : €80/9 trous. Pic printemps et automne : €165. Été : €115.</p>
        <p>Location de clubs : Callaway €35, Titleist €45. Buggy €45, chariot électrique à partir de €15. Certificat handicap WHS requis.</p>
        <h2>Verdict</h2>
        <p>Son Gual est mon parcours préféré à Majorque. Il soutiendrait la comparaison avec n'importe quel parcours que j'ai joué lors de mes voyages.</p>
        
        <div style={{margin:'2rem 0',borderRadius:2,overflow:'hidden',aspectRatio:'16/9'}}>
          <img src="/images/son-gual-blog/sg-5.jpg" alt="Son Gual closing holes" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <div className="post-cta">
          <p>J'emmène régulièrement des clients à Son Gual. Voulez-vous le jouer avec quelqu'un qui connaît chaque trou ?</p>
          <a href="/fr/play-with-a-pro">Voir l'expérience play-with-a-pro →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
