import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'
import { buildGuidePostMetadata } from '../../../../lib/page-metadata'

export const metadata = buildGuidePostMetadata({
  slug: 'alcanada-review',
  locale: 'fr',
  title: "Club de Golf Alcanada - Avis honnête d'un professionnel PGA",
  description: "Alcanada à Majorque, vu par un professionnel PGA qui y joue régulièrement. Le phare, les greens, la terrasse et les green fees 2026.",
  imagePath: '/images/alcanada-blog/alc-7.jpg',
})

const meta = {
  badge: 'Avis parcours',
  badgeGold: true,
  readTime: '6 min de lecture',
  updated: 'Mars 2026',
  title: "Club de Golf Alcanada - Avis honnête d'un professionnel PGA",
  intro: "Le parcours où j'emmène les gens quand je veux qu'ils repartent avec une vraie histoire. Le phare change tout.",
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
        <p>Alcanada est le parcours où j'emmène les gens quand je veux qu'ils rentrent chez eux avec une histoire à raconter. C'est peut-être la partie la plus mémorable de l'île. Le phare change tout.</p>

        <h2>Le cadre</h2>
        <p>Robert Trent Jones Jr. a dessiné Alcanada, et ce qu'il a fait avec cette portion de côte est remarquable. Debout sur les départs arrière, avec le phare derrière soi et la Méditerranée dans presque toutes les directions, on vit l'un de ces rares moments de golf où le décor vous fait presque oublier votre score.</p>
        <p>Le phare d'Alcanada se trouve sur un petit îlot juste au large, visible depuis 16 des 18 trous. Par matin clair, avec une mer calme et la lumière qui traverse la baie, c'est l'un des plus beaux cadres de golf que j'aie connus.</p>

        <h2>Les départs arrière</h2>
        <p>Se tenir sur les back tees est une expérience à part entière. On se sent intouchable, si loin de tout le reste que les gens en contrebas ressemblent à de minuscules points. Le phare derrière vous, la baie qui s'ouvre devant, et un driver à lancer quelque part dans l'immensité. C'est exactement cette sensation.</p>

        <div className="post-pull">
          <p>"Se tenir sur les départs arrière d'Alcanada, c'est incroyable. On se sent intouchable. Si loin du reste du monde. Tout le monde ressemble à un petit point, et vous êtes là-haut, prêt à envoyer le driver dans le vide."</p>
        </div>

        <h2>Les greens</h2>
        <p>C'est là qu'Alcanada mérite vraiment sa place parmi les parcours capables d'accueillir de grands tournois. Après un trou exigeant, on arrive sur des greens très vallonnés, très rapides, avec peu de putts faciles. Les 58 bunkers du parcours imposent des approches précises presque partout.</p>
        <p>La combinaison des pentes, de la vitesse et des petits breaks subtils transforme Alcanada en bien plus qu'un joli parcours côtier. Il teste vraiment les bons joueurs.</p>

        <h2>Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada accueille la finale du Rolex Challenge Tour - de retour pour une sixième édition en octobre 2026. Ce n'est pas un parcours qu'on maquille pour un événement. C'est un parcours qui a toujours eu le niveau pour en recevoir un. Quand on se tient sur les départs, on sent que ces mêmes trous décident de l'avenir de joueurs professionnels.</p>

        <h2>La signature du design</h2>
        <p>Le père de Robert Trent Jones Jr. a dessiné Valderrama - site de la Ryder Cup 1997 - ainsi que Spyglass Hill à Pebble Beach. RTJ Jr. a aussi dessiné Spring City Golf à Kunming, classé numéro un en Chine par Golf Digest. Cette lignée est réelle, et on la sent dans le routage d'Alcanada : rien ne paraît arbitraire, tout utilise parfaitement le terrain.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">EUR 115-220</span><span className="post-fact__label">Green fees 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Difficulté</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkers</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55 km</span><span className="post-fact__label">Depuis Palma</span></div>
        </div>

        <h2>Infos pratiques</h2>
        <p>Green fees 2026 : EUR 115 en basse saison et jusqu'à EUR 220 pendant les périodes fortes de mars à mai puis de septembre à octobre. Le détail complet est disponible sur golf-alcanada.com. Une licence journalière de golf de EUR 3 par personne s'applique aux joueurs non affiliés à la fédération espagnole.</p>
        <p>Location de clubs : ensembles TaylorMade à EUR 38 pour 18 trous. Buggy EUR 48, chariot électrique EUR 20. Le practice Toptracer est excellent pour bien se mettre en route - profitez-en.</p>
        <p>Lieu : Port d'Alcúdia, environ 50 minutes au nord de Palma. Prévoyez du temps et ne repartez pas trop vite après la partie.</p>

        <h2>La terrasse du restaurant</h2>
        <p>L'un des meilleurs endroits de l'île pour déjeuner après le parcours. Le restaurant est exploité par Grupo Babuxa - le groupe derrière les réputés Casa Gallega à Palma. Cuisine méditerranéenne, terrasse face à la mer et vue directe sur le phare d'Alcanada. Leur formule déjeuner tourne autour de EUR 30 par personne. Intégrez-la dans la journée - c'est un endroit qu'il faut savourer.</p>

        <h2>Verdict</h2>
        <p>Alcanada est le parcours que je choisirais pour faire tomber quelqu'un amoureux du golf à Majorque. Les greens vont vous tester. Le trajet vers le nord en vaut la peine. Et le déjeuner après la partie n'est pas négociable.</p>

        <div className="post-cta">
          <p>Alcanada est l'un de mes deux parcours de référence pour les journées play-with-a-pro. Envie de le jouer comme il faut ?</p>
          <a href="/fr/play-with-a-pro">Voir l'expérience play-with-a-pro →</a>
        </div>
      </PostLayout>
    </PageLayout>
  )
}
