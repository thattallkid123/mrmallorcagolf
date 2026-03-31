import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('nl')

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Son Gual Golf Mallorca — Eerlijke beoordeling van een PGA Professional (2026)', intro: 'Mijn meest gespeelde baan op het eiland. De wind, de greens, de slothole — en waarom Obama en Nadal blijven terugkomen.', readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap vereist' },
  { slug: 'alcanada-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Club de Golf Alcanada — Eerlijke beoordeling van een PGA Professional (2026)', intro: 'De baan waar ik mensen naartoe breng als ik wil dat ze met een verhaal thuiskomen. De vuurtoren verandert alles.', readTime: '7 min', keywords: 'Kustbaan · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Baanbeoordeling', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Eerlijke beoordeling van een PGA Professional (2026)', intro: 'Een van de langste banen in Europa, DP World Tour-geschiedenis en een baan die je vertrouwen met de driver écht teruggeeft.', readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Toegankelijk voor bezoekers' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'De Ervaring', badgeGold: false, title: 'Een dag op Son Gual met een PGA Professional', intro: 'Wat er werkelijk gebeurt als je een volledige dag doorbrengt op het mooiste parcours van Mallorca met een coach die het bijna elke week speelt.', readTime: '5 min', keywords: 'Son Gual · Spelen met een Pro · Dagervaring' },
  { slug: 'best-golf-courses-mallorca', badge: 'Gids', badgeGold: false, title: 'De beste golfbanen van Mallorca — Eerlijke ranking van een PGA Professional', intro: 'Tweeëntwintig banen op het eiland. Zo zou ik ze rangschikken voor een bezoeker met beperkte tijd en hoge verwachtingen.', readTime: '8 min', keywords: 'Alle niveaus · Greenfees vergeleken · Bijgewerkt 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Gids', badgeGold: false, title: 'Is Mallorca goed voor golf? Een eerlijk antwoord van iemand die hier woont', intro: 'De ongefiltreerde versie — wat het eiland beter doet dan Portugal, waar het tekortschiet en voor wie het geschikt is.', readTime: '5 min', keywords: 'Mallorca vs Portugal · Kwaliteit banen · Alle niveaus' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Gids', badgeGold: false, title: 'De beste tijd om golf te spelen op Mallorca — Maand voor maand', intro: 'Oktober is de maand die ik zou kiezen. Dit is waarom, en wat elke maand werkelijk biedt qua weer, prijs en drukte.', readTime: '6 min', keywords: 'Weer · Greenfees per seizoen · Drukte' },
  { slug: 'golf-cost-mallorca', badge: 'Gids', badgeGold: false, title: 'Hoeveel kost golf op Mallorca? Greenfees, verhuur en verborgen kosten', intro: 'Het volledige beeld van wat een golfreis hier werkelijk kost — greenfees, verhuur, caddies en waar je kunt besparen zonder in te leveren.', readTime: '5 min', keywords: '€77–220 greenfees · Verhuur · Caddies · Prijzen 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Gids', badgeGold: false, title: 'Een golfreis naar Mallorca plannen — Alles wat je moet weten', intro: 'Vluchten, banen, verblijf bij de golf, hoe je je verplaatst. De praktische gids die ik had willen hebben toen ik hier aankwam.', readTime: '7 min', keywords: 'Reisplanning · Verblijf · Vervoer' },
]

export default function GuidesIndex_NL() {
  const content = {
    hero: {
      breadcrumbHome: 'NL',
      breadcrumbCurrent: 'Gidsen',
      title: 'Golf op Mallorca. Eerlijke gidsen.',
      lead: 'Baanbeoordelingen, reisplanning en greenfees - geschreven door een PGA Professional die hier elke week speelt.',
      tags: ['Updated 2026', 'Beoordelingen uit eerste hand', 'PGA Professional'],
    },
    liveGuides,
    comingSoonGuides,
    comingSoonLabel: 'Binnenkort',
    finalCta: {
      eyebrow: 'Klaar om te spelen?',
      title: 'Een privéronde op één van deze banen, met een PGA Professional aan je zijde.',
      body: 'Vertel me je data en wat je zoekt. Ik kom binnen 24 uur persoonlijk bij je terug.',
      primaryCta: 'Bekijk de ervaringen →',
      secondaryCta: 'Neem contact op',
    },
  }

  return <GuidesIndexView locale="nl" pageLang="nl" content={content} />
}