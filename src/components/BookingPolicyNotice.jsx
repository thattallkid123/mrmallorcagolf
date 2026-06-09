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
    footnote: 'Green fees and third-party course costs can still follow the individual course policy where applicable.',
    linkLabel: 'Read full terms',
  },
  de: {
    eyebrow: 'Buchungssicherheit',
    title: 'Klare Stornobedingungen, bevor Sie buchen.',
    items: [
      'Mehr als 14 Tage vorher: volle Rueckerstattung einer geleisteten Anzahlung.',
      '7 bis 14 Tage vorher: 50% des gesamten Buchungswerts werden einbehalten.',
      'Weniger als 7 Tage vorher: der gesamte Buchungswert wird einbehalten.',
      'Bei Unwetter, Blitzschlag oder Platzsperrung bieten wir nach unserem Ermessen eine Umbuchung oder Rueckerstattung an.',
    ],
    footnote: 'Greenfees und Kosten externer Anbieter koennen zusaetzlich den Richtlinien des jeweiligen Golfplatzes unterliegen.',
    linkLabel: 'Vollstaendige Bedingungen lesen',
  },
  es: {
    eyebrow: 'Reserva con confianza',
    title: 'Condiciones de cancelacion claras antes de reservar.',
    items: [
      'Mas de 14 dias antes: reembolso completo de cualquier deposito abonado.',
      'Entre 7 y 14 dias antes: se retiene el 50% del valor total de la reserva.',
      'Menos de 7 dias antes: se retiene el valor total de la reserva.',
      'Si el mal tiempo severo, los rayos o el cierre del campo impiden jugar, ofreceremos cambio de fecha o reembolso segun nuestro criterio.',
    ],
    footnote: 'Los green fees y otros costes de terceros pueden seguir la politica propia de cada campo cuando corresponda.',
    linkLabel: 'Leer condiciones completas',
  },
  fr: {
    eyebrow: 'Reservation en confiance',
    title: 'Des conditions d annulation claires avant de reserver.',
    items: [
      'Plus de 14 jours avant la date: remboursement integral de tout acompte verse.',
      'Entre 7 et 14 jours avant: 50% de la valeur totale de la reservation est conserve.',
      'Moins de 7 jours avant: la valeur totale de la reservation est conservee.',
      'En cas d orage, de fermeture du parcours ou de meteo severe, nous proposerons un report ou un remboursement selon notre appreciation.',
    ],
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
    footnote: 'Greenfees en kosten van derden kunnen daarnaast onder het afzonderlijke beleid van de betreffende golfbaan vallen.',
    linkLabel: 'Lees de volledige voorwaarden',
  },
  sv: {
    eyebrow: 'Boka med trygghet',
    title: 'Tydliga avbokningsvillkor innan du bokar.',
    items: [
      'Mer an 14 dagar fore datumet: full aterbetalning av eventuell deposition.',
      '7 till 14 dagar fore: 50% av det totala bokningsvardet behalls.',
      'Mindre an 7 dagar fore: hela bokningsvardet behalls.',
      'Vid hardt vader, blixtnedslag eller stangd bana erbjuder vi ombokning eller aterbetalning enligt vart omdome.',
    ],
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
    footnote: '果岭费及第三方费用在适用时仍可能受各球场自身政策约束。',
    linkLabel: '查看完整条款',
  },
}

export function getBookingPolicyCopy(locale = 'en') {
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
