import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('fr')

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Avis parcours', badgeGold: true, title: "Son Gual Golf Majorque — Avis honnête d'un Professionnel PGA (2026)", intro: "Mon parcours le plus joué sur l'île. Le vent, les greens, la fin de parcours — et pourquoi Obama et Nadal reviennent toujours.", readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap requis' },
  { slug: 'alcanada-review', badge: 'Avis parcours', badgeGold: true, title: "Club de Golf Alcanada — Avis honnête d'un Professionnel PGA (2026)", intro: "Le parcours où j'emmène les gens quand je veux qu'ils rentrent avec une histoire. Le phare change tout.", readTime: '7 min', keywords: 'Côtier · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Avis parcours', badgeGold: true, title: "Golf Santa Ponsa 1, Majorque — Avis honnête d'un Professionnel PGA (2026)", intro: "L'un des parcours les plus longs d'Europe, une histoire sur le DP World Tour, et un parcours qui redonne vraiment confiance avec le driver.", readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Accès public' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: "L'Expérience", badgeGold: false, title: 'Une journée à Son Gual avec un Professionnel PGA', intro: "Ce qui se passe vraiment quand vous passez une journée entière sur le meilleur parcours de Majorque avec un coach qui le joue presque chaque semaine.", readTime: '5 min', keywords: 'Son Gual · Jouer avec un Pro · Journée complète' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guide', badgeGold: false, title: 'Les meilleurs parcours de golf de Majorque — Classement honnête par un Professionnel PGA', intro: "Vingt-deux parcours sur l'île. Voici comment je les classerais pour un visiteur avec peu de temps et des exigences élevées.", readTime: '8 min', keywords: 'Tous niveaux · Comparatif green fees · Mis à jour 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guide', badgeGold: false, title: "Majorque est-elle bonne pour le golf ? Une réponse honnête par quelqu'un qui y vit", intro: "La version sans filtre — ce que l'île fait mieux que le Portugal, ses lacunes, et à qui elle convient vraiment.", readTime: '5 min', keywords: 'Majorque vs Portugal · Qualité des parcours · Tous niveaux' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guide', badgeGold: false, title: 'La meilleure période pour jouer au golf à Majorque — Mois par mois', intro: "Octobre est le mois que je choisirais. Voici pourquoi, et ce que chaque mois offre réellement en termes de météo, de prix et de fréquentation.", readTime: '6 min', keywords: 'Météo · Green fees par saison · Fréquentation' },
  { slug: 'golf-cost-mallorca', badge: 'Guide', badgeGold: false, title: 'Combien coûte le golf à Majorque ? Green fees, location et coûts cachés', intro: "Le tableau complet de ce que coûte réellement un séjour golf ici — green fees, location, caddies et où économiser sans compromis.", readTime: '5 min', keywords: '€77–220 green fees · Location · Caddies · Tarifs 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guide', badgeGold: false, title: 'Planifier un voyage golf à Majorque — Tout ce que vous devez savoir', intro: "Vols, parcours, hébergement près du golf, comment se déplacer. Le guide pratique que j'aurais aimé avoir en arrivant ici.", readTime: '7 min', keywords: 'Planification · Hébergement · Se déplacer' },
]

export default function GuidesIndex_FR() {
  const content = {
    hero: {
      breadcrumbHome: 'FR',
      breadcrumbCurrent: 'Guides',
      title: 'Golf à Majorque. Guides honnêtes.',
      lead: 'Avis sur les parcours, planification de voyage et green fees - écrits par un Professionnel PGA qui joue ici chaque semaine.',
      tags: ['Updated 2026', 'Avis de première main', 'PGA Professional'],
    },
    liveGuides,
    comingSoonGuides,
    comingSoonLabel: 'Bientôt',
    finalCta: {
      eyebrow: 'Prêt à jouer ?',
      title: 'Un tour privé sur l\'un de ces parcours, avec un Professionnel PGA à vos côtés.',
      body: 'Dites-moi vos dates et ce que vous recherchez. Je vous réponds personnellement sous 24 heures.',
      primaryCta: 'Voir les expériences →',
      secondaryCta: 'Prendre contact',
    },
  }

  return <GuidesIndexView locale="fr" pageLang="fr" content={content} />
}