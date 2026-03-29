import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: 'Golf Santa Ponsa 1, Majorque - Avis honnête d’un professionnel PGA',
  description: 'Santa Ponsa 1 à Majorque, vu par un professionnel PGA. Histoire du Tour, fairways généreux et confiance retrouvée au driver.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Avis parcours',
  badgeGold: true,
  readTime: '6 min de lecture',
  updated: 'Mars 2026',
  title: 'Golf Santa Ponsa 1, Majorque - Avis honnête d’un professionnel PGA',
  intro: "L'un des parcours les plus longs de l'île. Une vraie histoire de Tour européen. Et des fairways assez larges pour sortir le driver.",
  lang: 'fr',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf - Avis honnête 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="fr">
      <RevealObserver />
      <PostLayout meta={meta} lang="fr">
        <p>Santa Ponsa 1 est le seul parcours public du groupe Santa Ponsa, et celui qui possède une vraie histoire sur le Tour européen. Il a accueilli le Mallorca Golf Open du DP World Tour en 2021. C'est le parcours qui a ramené le golf professionnel de haut niveau sur l'île après dix ans d'absence. Le vainqueur, Jeff Winther, a signé deux cartes de 62 lors des deux premiers tours. Le parcours était prêt pour cela.</p>

        <h2>Pourquoi il convient à mon jeu - et probablement au vôtre</h2>
        <p>Je vais être direct : ce parcours m'a aidé à retrouver de la confiance au driver. Après des journées à Son Gual ou Alcanada, où le bon choix est souvent de laisser le driver dans le sac, Santa Ponsa 1 raconte une autre histoire. Les fairways sont larges, les premiers trous accueillants, et le parcours récompense vraiment une attitude agressive au départ.</p>
        <p>Avec ma longueur, je me retrouve souvent avec un simple wedge en main pour attaquer les greens de par 4 après un bon drive. Pour des joueurs de distance plus classique, le test devient sérieux quand le vent se lève - mais c'est le genre de défi qui construit la confiance au lieu de l'éroder.</p>

        <h2>Le trou n°10</h2>
        <p>Avec ses 590 mètres, le 10 est l'un des par 5 les plus longs d'Europe. Face au vent, il paraît encore plus long. Il existe une version très satisfaisante de ce trou - driver, hybride, wedge - et une version beaucoup moins agréable si l'un de ces trois coups dérape. Les par 3 sont l'autre extrême : longs, avec de petits greens. Ici, il s'agit davantage de limiter les dégâts que de chercher le birdie.</p>

        <h2>Le lien avec le DP World Tour</h2>
        <p>L'accueil du Mallorca Golf Open 2021 a compté pour l'île. C'était le premier événement du Tour européen ici depuis dix ans, et Santa Ponsa 1 a répondu présent. L'état du parcours pendant la semaine du tournoi, le tracé sous pression, les scores possibles sans que le parcours ne soit abandonné - tout a fonctionné. Cette crédibilité est réelle, et elle se ressent quand on découvre le parcours en tant que visiteur.</p>

        <h2>Les vues sur la Tramuntana</h2>
        <p>Les trous 5, 6 et 7 de l'aller offrent certains des plus beaux points de vue sur la Tramuntana de toute l'île. Herbes hautes, arbres matures, fleurs sauvages, puis les montagnes en toile de fond. C'est le genre de décor qui rend un mauvais coup légèrement plus supportable. Légèrement.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 77-126</span><span className="post-fact__label">Green fees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Difficulté</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Parcours championship</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Ouvert aux visiteurs</span></div>
        </div>

        <h2>Green fees 2026</h2>
        <p>Haute saison de mi-mars à début juin puis de mi-septembre à début novembre : EUR 126. Mi-saison : EUR 106. Basse saison : EUR 77. Les détails complets figurent sur golf-santaponsa.com. Un certificat de handicap WHS valide est requis.</p>
        <p>Buggy : EUR 43 pour 18 trous. Location de clubs : EUR 40. Le parcours est public et se réserve librement - aucun accès membre n'est nécessaire. Réservez tôt en haute saison ; l'histoire DP World Tour attire les joueurs qui savent exactement ce qu'ils viennent chercher.</p>

        <h2>Verdict</h2>
        <p>Si vous tapez bien la balle au départ et que vous voulez profiter de cette sensation, jouez Santa Ponsa 1. Si vous hésitez entre Son Gual et Alcanada pour une grande journée de golf et que vous voulez un contraste plus ouvert, plus rassurant, avec une vraie histoire de Tour européen, c'est le bon choix. Les par 3 vous garderont honnête. Le reste du parcours vous rendra quelque chose.</p>

        <div className="post-cta">
          <p>Envie de jouer Santa Ponsa 1 dans le cadre d'une journée golf à Majorque ? Je peux tout organiser.</p>
          <a href="/fr/play-with-a-pro">Voir l'expérience play-with-a-pro →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
