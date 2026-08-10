import { getOfferById, OFFER_IDS } from './offers-content.js'
import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlanYourTripContent } from './plan-your-trip-content-localized.js'

export const PLAN_YOUR_TRIP_CONTENT = {
  en: {
  "heroEyebrow": "Plan Your Mallorca Golf Trip",
  "heroTitle": "The right Mallorca courses, in the right order.",
  "heroBody": "I choose the courses that suit your group, put them in the right order, and handle the tee times, buggies, rentals, and golf-side logistics before you arrive.",
  "options": {
    "itineraryLabel": "Sample trip",
    "itineraryTitle": "See a real 5-day week",
    "itineraryNote": "A Palma-based route and the thinking behind it.",
    "basicLabel": "Free",
    "basicTitle": "Course finder",
    "basicNote": "Shortlist courses first.",
    "proLabel": "Personal",
    "proTitle": "Trip planning",
    "proNote": "Courses, routing, tee times, and bookings handled."
  },
  "free": {
    "eyebrow": "Free",
    "title": "Use the free course finder",
    "body": "Answer a few questions and the tool will suggest courses to consider based on your group, level, region, and budget. It is a useful first pass, not a route, booking plan, or day-by-day itinerary."
  },
  "professional": {
    "eyebrow": "Personal",
    "title": "Let me plan and book the golf side of your trip",
    "body": "Send me your dates, group size, and what you want from the trip. I will recommend the right courses for your group, work out the routing and number of rounds, book and confirm the tee times, arrange buggies and club rentals, and shape the golf days so the trip runs cleanly from start to finish.",
    "includes": [
      "Course recommendations matched to your game, group, and budget",
      "Where to base yourself and why",
      "Trip routing and number of rounds",
      "Tee times booked and confirmed",
      "Buggies and club rentals arranged",
      "Dining suggestions built around the schedule",
      "Play With A Pro available as an add-on at any stage"
    ],
    "possibilities": {
      "title": "A golf trip can stay simple, or become something more complete.",
      "body": "Depending on the group, I can shape the days around hotel choice, restaurants, spa time, coastal drives, wine tasting, private chef evenings, extra lessons, or quieter recovery time between rounds.",
      "items": [
        "Palma hotel, resort or quieter finca base",
        "Michelin-starred restaurant, local favourite or private chef",
        "Spa, recovery or quieter non-golf time between rounds",
        "Coastal drive, vineyard visit or a more memorable evening plan"
      ]
    },
    "note": "No commitment at enquiry stage. I reply personally within 24 hours with the recommended next step and a clear quote before anything is booked.",
    "sendPrompt": "Best details to send: dates, group size, handicap range, hotel area, and any courses already on your shortlist.",
    "cta": "Enquire about trip planning"
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
  },
  "sampleItinerary": {
    "eyebrow": "Sample Trip",
    "title": "Five courses, five days. Based in Palma.",
    "intro": "A Palma-based example for a group of club golfers: five rounds, one longer day north, and a clear reason for the order.",
    "whyThisShape": {
      "title": "Why the week runs in this order",
      "lead": "Most trips go wrong in the gaps between tee times: the first morning, the long drive, the hard course, the flight home. This is the sort of routing I would check before I booked anything.",
      "points": [
        {
          "title": "Arrival day stays easy",
          "body": "After a flight and a hire-car queue, the first round should be close, open and calm. Nobody needs the hardest scorecard of the week on day one."
        },
        {
          "title": "Difficulty builds in the middle",
          "body": "Son Gual makes more sense once the group has settled. By then the wind, pace and misses are clearer, and any coaching has more to work with."
        },
        {
          "title": "One long drive, mid-week",
          "body": "Alcanada is worth the drive, but it is a full day. I would not put it on arrival day or anywhere near a flight home."
        },
        {
          "title": "Finish short and near the airport",
          "body": "The final round should keep the airport simple. A small delay should cost lunch, not the flight."
        }
      ]
    },
    "summary": "The point is simple: same hotel, sensible drives, and the hardest golf placed where it belongs.",
    "feesNote": "Green fees vary by season.",
    "feesCta": "Check current rates in the green fee tool",
    "feesLink": "/tools/green-fees",
    "fullGuideLabel": "Read the 5-day guide",
    "fullGuideLink": "/guides/5-day-mallorca-golf-itinerary",
    "hotelEyebrow": "Where to stay",
    "hotelCta": "Use the hotel recommender",
    "hotelLink": "/tools/hotel-recommender"
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
