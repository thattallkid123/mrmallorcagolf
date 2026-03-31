import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('de')

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Son Gual Golf Mallorca — Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Mein meistgespielter Platz auf der Insel. Der Wind, die Greens, die Schlusslöcher — und warum Obama und Nadal immer wiederkommen.', readTime: '7 Min.', keywords: 'Championship · Par 72 · €80–165 · Handicap erforderlich' },
  { slug: 'alcanada-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Club de Golf Alcanada — Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Der Platz, zu dem ich Leute bringe, wenn ich möchte, dass sie mit einer Geschichte nach Hause kommen. Der Leuchtturm verändert alles.', readTime: '7 Min.', keywords: 'Küste · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Platz-Bewertung', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Ehrliche Bewertung eines PGA-Professionals (2026)', intro: 'Einer der längsten Plätze in Europa, DP World Tour-Geschichte und ein Platz, der das Vertrauen mit dem Driver wirklich zurückgibt.', readTime: '6 Min.', keywords: 'Championship · Par 72 · €77–126 · Öffentlicher Zugang' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'Das Erlebnis', badgeGold: false, title: 'Ein Tag in Son Gual mit einem PGA Professional', intro: 'Was wirklich passiert, wenn man einen ganzen Tag auf Mallorcas bestem Platz mit einem Coach verbringt, der ihn fast jede Woche spielt.', readTime: '5 Min.', keywords: 'Son Gual · Mit Profi spielen · Ganztageserlebnis' },
  { slug: 'best-golf-courses-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Die besten Golfplätze auf Mallorca — Ehrliches Ranking eines PGA-Professionals', intro: 'Zweiundzwanzig Plätze auf der Insel. So würde ich sie für einen Besucher mit begrenzter Zeit und hohen Ansprüchen einordnen.', readTime: '8 Min.', keywords: 'Alle Level · Greenfees im Vergleich · Aktualisiert 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Ratgeber', badgeGold: false, title: 'Ist Mallorca gut für Golf? Eine ehrliche Antwort von jemandem, der hier lebt', intro: 'Die ehrliche Version — was die Insel besser macht als Portugal, wo sie zurückfällt und für wen sie geeignet ist.', readTime: '5 Min.', keywords: 'Mallorca vs. Portugal · Platzqualität · Für alle Level' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Die beste Reisezeit für Golf auf Mallorca — Monat für Monat', intro: 'Oktober wäre meine Wahl. Hier ist warum, und was jeder Monat tatsächlich in Bezug auf Wetter, Preise und Besucheraufkommen bietet.', readTime: '6 Min.', keywords: 'Wetter · Greenfees nach Saison · Besucheraufkommen' },
  { slug: 'golf-cost-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Was kostet Golf auf Mallorca? Greenfees, Leihausrüstung und versteckte Kosten', intro: 'Das vollständige Bild, was ein Golftrip hier wirklich kostet — Greenfees, Leihausrüstung, Caddies und wo man sparen kann.', readTime: '5 Min.', keywords: '€77–220 Greenfees · Leihausrüstung · Caddies · Preise 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Ratgeber', badgeGold: false, title: 'Einen Golftrip nach Mallorca planen — Alles, was Sie wissen müssen', intro: 'Flüge, Plätze, Unterkünfte in Platznähe, Transfers. Der praktische Reiseführer, den ich mir gewünscht hätte, als ich hierher zog.', readTime: '7 Min.', keywords: 'Reiseplanung · Unterkunft · Anreise' },
]

export default function GuidesIndex_DE() {
  const content = {
    hero: {
      breadcrumbHome: 'DE',
      breadcrumbCurrent: 'Ratgeber',
      title: 'Mallorca Golf. Ehrliche Ratgeber.',
      lead: 'Platz-Bewertungen, Reiseplanung und Greenfees - geschrieben von einem PGA Professional, der hier jede Woche spielt.',
      tags: ['Updated 2026', 'Bewertungen aus erster Hand', 'PGA Professional'],
    },
    liveGuides,
    comingSoonGuides,
    comingSoonLabel: 'Demnächst',
    finalCta: {
      eyebrow: 'Bereit zu spielen?',
      title: 'Eine private Runde auf einem dieser Plätze, mit einem PGA Professional an Ihrer Seite.',
      body: 'Teilen Sie mir Ihre Daten und Wünsche mit. Ich melde mich persönlich innerhalb von 24 Stunden.',
      primaryCta: 'Erlebnisse entdecken →',
      secondaryCta: 'Kontakt aufnehmen',
    },
  }

  return <GuidesIndexView locale="de" pageLang="de" content={content} />
}