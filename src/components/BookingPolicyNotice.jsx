'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getLegalPath } from '../lib/site'

const BOOKING_POLICY_COPY = {
  en: {
    eyebrow: 'Booking confidence',
    title: 'Simple cancellation terms. Clear before you book.',
    items: [
      'More than 14 days before the date: full refund of any deposit paid.',
      '7 to 14 days before: 50% of the total booking value is retained.',
      'Less than 7 days before: the full booking value is retained.',
      'If severe weather, lightning, or course closure prevents play, we will reschedule or refund at our discretion.',
    ],
    pairingNote: 'Tee-time note: busy courses may pair small bookings with other players. If you want the tee reserved only for your party, I can add the spare slots at extra cost before you book. Signature Day includes that as standard.',
    footnote: 'Green fees and third-party course costs can still follow the individual course policy where applicable.',
    linkLabel: 'Read full terms',
  },
  de: {
    eyebrow: 'Buchungssicherheit',
    title: 'Klare Stornobedingungen, bevor Sie buchen.',
    items: [
      'Mehr als 14 Tage vorher: volle Rückerstattung einer geleisteten Anzahlung.',
      '7 bis 14 Tage vorher: 50% des gesamten Buchungswerts werden einbehalten.',
      'Weniger als 7 Tage vorher: der gesamte Buchungswert wird einbehalten.',
      'Bei Unwetter, Blitzschlag oder Platzsperrung bieten wir nach unserem Ermessen eine Umbuchung oder Rückerstattung an.',
    ],
    pairingNote: 'Hinweis zur Startzeit: An stark gebuchten Tagen kann der Golfplatz kleine Gruppen mit anderen Spielern zusammenlegen. Wenn die Startzeit nur für Ihre Gruppe reserviert sein soll, kann ich die freien Plätze vorab gegen Aufpreis mitbuchen. Beim Signature Day ist das standardmäßig enthalten.',
    footnote: 'Greenfees und Kosten externer Anbieter können zusätzlich den Richtlinien des jeweiligen Golfplatzes unterliegen.',
    linkLabel: 'Vollständige Bedingungen lesen',
  },
  es: {
    eyebrow: 'Reserva con confianza',
    title: 'Condiciones de cancelacion claras antes de reservar.',
    items: [
      'Más de 14 dias antes: reembolso completo de cualquier deposito abonado.',
      'Entre 7 y 14 dias antes: se retiene el 50% del valor total de la reserva.',
      'Menos de 7 dias antes: se retiene el valor total de la reserva.',
      'Si el mal tiempo severo, los rayos o el cierre del campo impiden jugar, ofreceremos cambio de fecha o reembolso según nuestro criterio.',
    ],
    pairingNote: 'Nota sobre la salida: en campos concurridos pueden juntar reservas pequenas con otros jugadores. Si quiere que la salida quede solo para su grupo, puedo anadir las plazas libres con coste adicional antes de reservar. Signature Day lo incluye de serie.',
    footnote: 'Los green fees y otros costes de terceros pueden seguir la politica propia de cada campo cuando corresponda.',
    linkLabel: 'Leer condiciones completas',
  },
  fr: {
    eyebrow: 'Reservation en confiance',
    title: 'Des conditions d annulation claires avant de réserver.',
    items: [
      'Plus de 14 jours avant la date: remboursement integral de tout acompte verse.',
      'Entre 7 et 14 jours avant: 50% de la valeur totale de la reservation est conserve.',
      'Moins de 7 jours avant: la valeur totale de la reservation est conservee.',
      'En cas d orage, de fermeture du parcours ou de meteo severe, nous proposerons un report ou un remboursement selon notre appreciation.',
    ],
    pairingNote: 'Note départ: les parcours très demandes peuvent regrouper les petites reservations avec d autres joueurs. Si vous voulez garder le départ uniquement pour votre groupe, je peux ajouter les places restantes avec un cout supplementaire avant reservation. Le Signature Day l inclut d office.',
    footnote: 'Les green fees et frais de tiers peuvent rester soumis a la politique du golf concerne.',
    linkLabel: 'Lire les conditions completes',
  },
  nl: {
    eyebrow: 'Met vertrouwen boeken',
    title: 'Duidelijke annuleringsvoorwaarden voordat u boekt.',
    items: [
      'Meer dan 14 dagen vooraf: volledige terugbetaling van een betaalde aanbetaling.',
      '7 tot 14 dagen vooraf: 50% van de totale boekingswaarde wordt ingehouden.',
      'Minder dan 7 dagen vooraf: de volledige boekingswaarde wordt ingehouden.',
      'Bij zwaar weer, onweer of sluiting van de baan bieden wij naar eigen inzicht een nieuwe datum of terugbetaling aan.',
    ],
    pairingNote: 'Starttijd-notitie: drukke banen kunnen kleine boekingen combineren met andere spelers. Wilt u de starttijd alleen voor uw eigen gezelschap houden, dan kan ik de vrije plaatsen vooraf tegen meerprijs toevoegen. Signature Day bevat dit standaard.',
    footnote: 'Greenfees en kosten van derden kunnen daarnaast onder het afzonderlijke beleid van de betreffende golfbaan vallen.',
    linkLabel: 'Lees de volledige voorwaarden',
  },
  sv: {
    eyebrow: 'Boka med trygghet',
    title: 'Tydliga avbokningsvillkor innan du bokar.',
    items: [
      'Mer an 14 dagar före datumet: full aterbetalning av eventuell deposition.',
      '7 till 14 dagar före: 50% av det totala bokningsvardet behalls.',
      'Mindre an 7 dagar före: hela bokningsvardet behalls.',
      'Vid hardt väder, blixtnedslag eller stangd bana erbjuder vi ombokning eller aterbetalning enligt vart omdome.',
    ],
    pairingNote: 'Notis om starttid: pa upptagna banor kan sma bokningar paras ihop med andra spelare. Om du vill ha starttiden reserverad bara for ditt sallskap kan jag lagga till de lediga platserna mot extra kostnad innan bokning. Signature Day inkluderar detta som standard.',
    footnote: 'Greenfee och andra tredjepartskostnader kan dessutom omfattas av respektive bans egen policy.',
    linkLabel: 'Las fullstandiga villkor',
  },
  zh: {
    eyebrow: '预订更安心',
    title: '在您预订前，取消条款先说清楚。',
    items: [
      '距离日期超过14天取消：已支付的订金全额退还。',
      '距离日期7到14天取消：保留订单总额的50%。',
      '距离日期不足7天取消：保留订单总额的100%。',
      '如因恶劣天气、雷电或球场关闭而无法下场，我们会根据情况安排改期或退款。',
    ],
    pairingNote: '开球时段说明：繁忙时段球场可能会把小组与其他球手拼组。如果您希望该时段只保留给您的同行人员，我可以在预订前把空余名额一并加上，费用另计。Signature Day 默认包含这一安排。',
    footnote: '果岭费及第三方费用在适用时仍可能受各球场自身政策约束。',
    linkLabel: '查看完整条款',
  },
}

function getBookingPolicyCopy(locale = 'en') {
  return BOOKING_POLICY_COPY[locale] || BOOKING_POLICY_COPY.en
}

export default function BookingPolicyNotice({ locale = 'en' }) {
  const [isOpen, setIsOpen] = useState(false)
  const copy = getBookingPolicyCopy(locale)

  return (
    <section className="booking-policy">
      <p className="booking-policy__eyebrow">{copy.eyebrow}</p>
      <button
        className="booking-policy__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="booking-policy__title">{copy.title}</h3>
        <span className="booking-policy__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <>
          <ul className="booking-policy__list">
            {copy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {copy.pairingNote ? (
            <p className="booking-policy__footnote">{copy.pairingNote}</p>
          ) : null}
          <p className="booking-policy__footnote">
            {copy.footnote}{' '}
            <Link href={getLegalPath('terms', locale)} className="booking-policy__link">
              {copy.linkLabel}
            </Link>
          </p>
        </>
      )}
    </section>
  )
}
