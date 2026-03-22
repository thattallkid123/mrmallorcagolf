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
  title: "Club de Golf Alcanada — A PGA Professional",
  description: "Alcanada golf course Mallorca reviewed by a PGA professional who plays it regularly. The lighthouse, the greens, the restaurant terrace, and the green fees for 2026.",
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/guides/alcanada-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Club de Golf Alcanada — A PGA Professional",
  intro: "Le parcours où j'emmène les gens quand je veux qu'ils rentrent chez eux avec une histoire. Le phare change tout.",
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
          src="/images/alcanada-blog/alc-7.jpg"
          alt="Club de Golf Alcanada à l'heure dorée — phare et baie"
          caption="Alcanada à l'heure dorée. Le phare se dresse sur sa propre île au large de la côte — visible depuis 16 des 18 trous."
        />

        <p>Alcanada est le parcours où j'emmène les gens quand je veux qu'ils rentrent avec une histoire. C'est peut-être le tour le plus mémorable de l'île. Le phare change tout.</p>

        <h2>Le cadre</h2>
        <p>Robert Trent Jones Jr. a conçu Alcanada, et ce qu'il a fait avec ce tronçon de littoral est remarquable. Debout sur les départs arrière avec le phare dans le dos et la Méditerranée dans toutes les directions, c'est l'un de ces rares moments de golf où l'environnement vous fait oublier votre score.</p>
        <p>Le phare d'Alcanada se dresse sur une petite île juste au large de la côte, visible depuis 16 des 18 trous. Par un matin clair, avec l'eau calme et la lumière traversant la baie, c'est l'un des cadres les plus beaux où j'ai joué au golf, où que ce soit dans le monde.</p>

        <PostImage
          src="/images/alcanada-blog/alc-6.jpg"
          alt="Client jouant un départ à Alcanada avec le phare en arrière-plan"
          caption="Le phare derrière, la mer à gauche, le fairway qui descend devant."
        />

        <h2>Les départs arrière</h2>
        <p>Se tenir sur les départs arrière surélevés est une expérience en soi. On se sent intouchable — si loin de tout le reste que tout le monde en bas ressemble à un minuscule point. Le phare derrière soi, la baie qui s'étend, et on s'apprête à frapper un driver quelque part dans l'abîme. C'est ça, la sensation.</p>

        <div className="post-pull">
          <p>« Se tenir sur les départs arrière à Alcanada est incroyable. On se sent intouchable. Si loin du reste du monde. Tout le monde ressemble à un minuscule point et on est là, en hauteur, prêt à envoyer le driver quelque part dans le vide. »</p>
        </div>

        <PostImage
          src="/images/alcanada-blog/alc-2.jpg"
          alt="Green d'Alcanada avec la mer et les montagnes derrière"
          caption="Par un matin clair, on peut voir les montagnes de la Tramuntana de l'autre côté de la baie."
        />

        <h2>Les greens</h2>
        <p>C'est là qu'Alcanada mérite d'accueillir des épreuves d'élite. Après avoir négocié un trou difficile, on arrive sur des greens fortement vallonnés, extrêmement rapides, offrant très peu de putts faciles. Cinquante-huit bunkers sur le tracé imposent des approches précises sur presque chaque trou.</p>
        <p>La combinaison de pente, de vitesse et de cassures subtiles sur les greens, voilà ce qui distingue ce parcours d'un simple cadre panoramique et en fait quelque chose qui teste véritablement les joueurs habiles.</p>

        <PostImage
          src="/images/alcanada-blog/alc-5.jpg"
          alt="Golfeurs à Alcanada avec la Méditerranée derrière"
          caption="Les départs arrière à Alcanada sont bien au-dessus du fairway. La montée en vaut toujours la peine."
        />

        <h2>Le Rolex Challenge Tour Grand Final</h2>
        <p>Alcanada accueille le Rolex Challenge Tour Grand Final — qui revient pour la sixième fois en octobre 2026. Ce n'est pas un parcours habillé pour un événement de tour. C'est un parcours qui a toujours été à la hauteur. Jouer les mêmes trous qui décident de la carte d'un professionnel pour la saison, ça se ressent quand on est sur le départ.</p>

        <PostImage
          src="/images/alcanada-blog/alc-1.jpg"
          alt="Rolex Grand Final à Alcanada — trou 16"
          caption="Le Rolex Challenge Tour Grand Final à Alcanada. Il revient pour la sixième fois en octobre 2026."
        />

        <h2>Le pedigree de conception</h2>
        <p>Le père de Robert Trent Jones Jr. a conçu Valderrama — le lieu de la Ryder Cup 1997 — et Spyglass Hill à Pebble Beach. RTJ Jr. a également conçu Spring City Golf à Kunming, classé numéro un chinois par Golf Digest. La filiation est authentique, et elle se voit dans la façon dont Alcanada est tracé — rien ne semble arbitraire, tout tire parti du terrain.</p>

        <PostImage
          src="/images/alcanada-blog/alc-4.jpg"
          alt="Groupe de golfeurs à Alcanada un soir d'été"
          caption="Un tour en soirée d'été. La lumière à Alcanada en juillet est quelque chose à part."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€115–220</span><span className="post-fact__label">Fourchette green fee 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">7/10</span><span className="post-fact__label">Difficulté</span></div>
          <div className="post-fact__item"><span className="post-fact__val">58</span><span className="post-fact__label">Bunkers</span></div>
          <div className="post-fact__item"><span className="post-fact__val">55km</span><span className="post-fact__label">De Palma</span></div>
        </div>

        <h2>Informations pratiques</h2>
        <p>Green fees 2026 : €115 basse saison (janvier, décembre) jusqu'à €220 haute saison (mars–mai, septembre–octobre). Détail complet par saison sur golf-alcanada.com. Une licence de golf journalière (€3 par personne) est requise pour les non-membres de la Fédération espagnole.</p>
        <p>Location de clubs : sets TaylorMade à €38 pour 18 trous. Buggy €48, trolley électrique €20. Le practice Toptracer est excellent pour un vrai échauffement — utilisez-le.</p>
        <p>Situation : Port d'Alcúdia, à environ 50 minutes au nord de Palma. Prenez le temps qu'il faut et ne repartez pas en vitesse.</p>

        <h2>La terrasse du restaurant</h2>
        <p>L'un des meilleurs endroits de l'île pour déjeuner après la partie. Le restaurant est géré par Grupo Babuxa — le groupe derrière les restaurants Casa Gallega très appréciés à Palma — cuisine méditerranéenne avec une terrasse en bord de mer face directement au phare d'Alcanada. Leur menu du déjeuner tourne autour de €30 par personne. Intégrez-le au programme — ce n'est pas un endroit qu'on quitte à la hâte.</p>

        <PostImage
          src="/images/alcanada-blog/alc-hero.jpg"
          alt="Terrasse du clubhouse d'Alcanada"
          caption="La terrasse du clubhouse."
        />

        <h2>Verdict</h2>
        <p>Alcanada est le parcours où j'emmènerais quelqu'un si je voulais qu'il tombe amoureux du golf à Mallorca. Les greens vous mettront à l'épreuve. La route vers le nord en vaut la peine. Le déjeuner après est non négociable.</p>

        <div className="post-cta">
          <p>Alcanada est l'un de mes deux parcours phares pour les journées play-with-a-pro. Vous voulez le jouer comme il se doit ?</p>
          <a href="/play-with-a-pro">Découvrir l'expérience play-with-a-pro →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
