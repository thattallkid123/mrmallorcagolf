import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'


function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}
export const metadata = {
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  description: "Santa Ponsa 1 golf course Mallorca reviewed by a PGA professional. One of Europe",
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  intro: "L'un des parcours les plus longs de l'île. Histoire du European Tour. Et les fairways sont assez larges pour sortir le driver.",
  lang: 'fr',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <PostLayout meta={meta} lang="fr">

        <PostImage
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — reflet dans l'eau et fairway"
          caption="Le green du 16. Le lac entre en jeu sur l'approche et concentre considérablement l'esprit."
        />

        <p>Santa Ponsa 1 est le seul parcours public du groupe Santa Ponsa et celui qui bénéficie d'un véritable pedigree European Tour — il a accueilli le DP World Tour Mallorca Golf Open 2021. C'est le parcours qui a ramené le golf professionnel de haut niveau sur l'île après une décennie d'absence. Le vainqueur, Jeff Winther, a joué 62 deux fois lors des premières rondes. Le parcours était prêt.</p>

        <h2>Pourquoi il convient à mon jeu — et probablement au vôtre</h2>
        <p>Je vais être direct sur un point : ce parcours m'a aidé à retrouver ma confiance avec le driver. Après des parties à Son Gual ou à Alcanada, où la gestion du parcours signifie souvent laisser le driver dans le sac, Santa Ponsa 1, c'est une tout autre conversation. Les fairways sont larges, les premiers trous sont généreux, et le parcours récompense genuinement une approche agressive depuis le départ.</p>
        <p>Avec ma distance, je me retrouve souvent avec un pitching wedge en main vers les greens des par-4 après un bon drive. Pour les joueurs avec des distances plus habituelles, le parcours présente un vrai test quand le vent s'invite — mais c'est le genre de défi qui construit la confiance plutôt que de l'user.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Fairway de Santa Ponsa 1 avec les montagnes derrière"
          caption="Les fairways sont véritablement larges. C'est un parcours qui invite le driver."
        />

        <h2>Le trou 10</h2>
        <p>À 590 mètres, le 10 est l'un des plus longs par-5 d'Europe. Le jouer face au vent le fait paraître encore plus long. Il y a une version vraiment satisfaisante de ce trou — driver, hybrid, wedge — et une version beaucoup moins satisfaisante où l'un de ces trois coups dérape. Les par-3 sont à l'autre bout de l'échelle : longs, avec de petits greens. Limitation des dégâts, pas d'opportunités de birdie.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Plan du parcours et fairways de Santa Ponsa 1"
          caption="Le tracé. Par temps calme, ce parcours vous flatte. Ajoutez du vent et il mérite chaque mètre de sa longueur."
        />

        <h2>Le lien avec le DP World Tour</h2>
        <p>Accueillir le DP World Tour Mallorca Golf Open 2021 a été un événement marquant pour l'île. C'était le premier événement du European Tour ici depuis dix ans, et Santa Ponsa 1 a tenu la comparaison. L'état du parcours lors de la semaine du tournoi, le tracé sous pression, les scores possibles sans que le parcours soit rendu — tout a fonctionné. Ce pedigree est réel, et cela se voit dans la façon dont le parcours se présente aux visiteurs.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Santa Ponsa 1, approche d'un par-3"
          caption="Les montagnes de la Tramuntana en arrière-plan. Les trous 5, 6 et 7 offrent les meilleures vues sur les montagnes."
        />

        <h2>Les vues sur les montagnes</h2>
        <p>Les trous 5, 6 et 7 du front nine offrent certaines des meilleures vues sur la Tramuntana de toute l'île. Herbes hautes, arbres matures, fleurs sauvages, et les montagnes qui encadrent tout en arrière-plan. C'est le genre de décor qui rend un mauvais coup légèrement plus supportable. Légèrement.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths à Santa Ponsa 1 en début de matinée"
          caption="Départ matinal. En milieu de matinée, le vent trouve généralement le parcours."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">Fourchette green fee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Difficulté</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Tracé championnat</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Ouvert à tous les visiteurs</span></div>
        </div>

        <h2>Green fees 2026</h2>
        <p>Haute saison (mi-mars à début juin, mi-septembre à début novembre) : €126. Mi-saison : €106. Basse saison : €77. Détails complets sur golf-santaponsa.com. Un certificat de handicap WHS valide est requis.</p>
        <p>Buggy €43 pour 18 trous. Location de clubs €40. Le parcours est public et réservable librement — aucun accès membre requis. Réservez à l'avance en haute saison ; l'histoire du DP World Tour attire des visiteurs qui savent ce qu'ils viennent chercher.</p>

        <h2>Verdict</h2>
        <p>Si vous frappez bien la balle et que vous voulez vous en féliciter, jouez Santa Ponsa 1. Si vous hésitez entre Son Gual et Alcanada pour une vraie journée et vous voulez quelque chose qui contraste avec les deux — plus ouvert, plus propice à la confiance, avec une vraie histoire European Tour à la clé — c'est ce parcours. Les par-3 vous maintiendront honnête. Le reste de la partie vous rendra quelque chose.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Vues sur Santa Ponsa 1"
          caption="Le back nine s'ouvre. Le 10 fait 590 mètres depuis les départs arrière — l'un des par-5 les plus longs d'Europe."
        />

        <div className="post-cta">
          <p>Vous voulez jouer Santa Ponsa 1 dans le cadre d'une journée golf à Mallorca ? Je peux l'organiser.</p>
          <a href="/play-with-a-pro">Découvrir l'expérience play-with-a-pro →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
