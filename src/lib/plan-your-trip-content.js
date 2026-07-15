import { getOfferById, OFFER_IDS } from './offers-content.js'
import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlanYourTripContent } from './plan-your-trip-content-localized.js'

export const PLAN_YOUR_TRIP_CONTENT = {
  en: {
  "heroEyebrow": "Plan Your Mallorca Golf Trip",
  "heroTitle": "Start with the courses. Let me build the trip properly.",
  "heroBody": "The free tool is a simple starting point. It helps you see which Mallorca courses might suit your group. The professional planning service is where the real trip gets built: base, route, number of rounds, tee times, buggies, rentals, and the details around the golf.",
  "options": {
    "basicLabel": "Basic",
    "basicTitle": "Free course finder",
    "basicNote": "On-site tool. Shortlist only.",
    "proLabel": "Professional",
    "proTitle": "Paid trip planning",
    "proNote": "The real service: route, bookings, base, and add-ons."
  },
  "free": {
    "eyebrow": "Basic",
    "title": "Use the free course finder",
    "body": "Answer a few questions and the tool will suggest courses to consider based on your group, level, region, and budget. It is not a route, a booking plan, or a day-by-day itinerary. Use it to get your bearings before asking me to plan the trip properly."
  },
  "professional": {
    "eyebrow": "Professional",
    "title": "Let me plan it properly",
    "body": "Send me your dates, group size, and what you are hoping for. I will recommend the right courses for your game, advise on where to base yourself and why, work out the routing and number of rounds, book the tee times, arrange buggies and club rentals, and suggest dining options that work around the golf. Price on enquiry.",
    "includes": [
      "Course recommendations matched to your game, group, and budget",
      "Where to base yourself and why",
      "Trip routing and number of rounds",
      "Tee times booked and confirmed",
      "Buggies and club rentals arranged",
      "Dining suggestions built around the schedule",
      "Play With A Pro available as an add-on at any stage"
    ],
    "note": "Send your dates, group size, handicap range, and any courses already on your list. I will come back with the right next step and a quote.",
    "sendPrompt": "Best details to send: dates, group size, handicap range, hotel area, and any courses already on your shortlist.",
    "cta": "Get in touch"
  },
  "addon": {
    "eyebrow": "Add-on available at any level",
    "title": "Play With A Pro",
    "body": "A full day on course with me alongside you for all 18 holes. Works as a standalone booking or as part of a planned trip. One course, chosen for your game, with local course management and coaching woven into the round.",
    "price": "Solo from",
    "priceValue": "€695",
    "groupLabel": "Groups from",
    "groupValue": "€950 total",
    "priceSuffix": "Green fees additional",
    "cta": "See Play With A Pro"
  }
}
}

function getMergedPlanYourTripContent(locale = 'en') {
  if (locale === 'en') return PLAN_YOUR_TRIP_CONTENT.en
  const localized = getLocalizedPlanYourTripContent(locale)
  return localized
    ? mergeLocalizedContent(PLAN_YOUR_TRIP_CONTENT.en, localized)
    : PLAN_YOUR_TRIP_CONTENT.en
}

export function getPlanYourTripContent(locale = 'en') {
  const content = normalizeMojibakeDeep(getMergedPlanYourTripContent(locale))
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)
  return content.addon
    ? {
        ...content,
        addon: {
          ...content.addon,
          priceValue: soloOffer.priceDisplay,
          groupValue: groupOffer.priceDisplay,
        },
      }
    : content
}
