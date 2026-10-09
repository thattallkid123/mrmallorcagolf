import { getOfferById, OFFER_IDS } from './offers-content.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlanYourTripContent } from './plan-your-trip-content-localized.js'

export const PLAN_YOUR_TRIP_CONTENT = {
  en: {
  "heroEyebrow": "Plan Your Mallorca Golf Trip",
  "heroTitle": "The right Mallorca courses, in the right order.",
  "heroBody": "I choose and book the courses and tee times for your group, with buggies and rentals arranged before you arrive. You play the rounds on your own schedule. For the whole trip, I also work with a trusted local travel partner on the hotel, transfers, restaurants and days off. If you want me alongside you for a day, add Play With A Pro.",
  "options": {
    "itineraryLabel": "Sample trip",
    "itineraryTitle": "See a real 5-day week",
    "itineraryNote": "A Palma-based route and the thinking behind it.",
    "basicLabel": "Free",
    "basicTitle": "Course finder",
    "basicNote": "Shortlist courses first.",
    "proLabel": "Personal",
    "proTitle": "Trip planning",
    "proNote": "Courses, routing and bookings handled."
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
    "workingModes": {
      "title": "Choose the level of help you need.",
      "body": "Some groups only need tee times checked and booked. Others want the full golf plan, or the whole trip planned around it.",
      "items": [
        {
          "title": "Tee times only",
          "body": "Send dates, group size, handicap range and hotel area. I will suggest suitable courses, check availability and confirm the price before anything is booked.",
          "cta": "Book tee times",
          "target": "tee-time-booking"
        },
        {
          "title": "Full golf plan",
          "body": "For groups playing several rounds, I put the courses in the right order, plan the drives, and handle buggies, rentals and useful dining suggestions.",
          "cta": "Plan my golf trip",
          "target": "trip-planning"
        },
        {
          "title": "The whole trip",
          "body": "Golf plus the hotel, transfers, restaurants and days off. I plan the golf, my local travel partner books the rest directly, and you get one plan.",
          "cta": "Plan the whole trip",
          "target": "whole-trip"
        }
      ]
    },
    "possibilities": {
      "title": "The whole trip, planned around the golf.",
      "body": "I work with a trusted local travel partner who arranges hotels, transfers, restaurants and activities across the island. We agree the plan with you, the partner books and invoices the non-golf side directly, and I look after the golf.",
      "items": [
        "Palma hotel, resort or quieter finca base",
        "Michelin-starred restaurant, local favourite or private chef",
        "Spa, recovery or quieter non-golf time between rounds",
        "Coastal drive, vineyard visit or a more memorable evening plan"
      ]
    },
    "process": {
      "title": "How it works",
      "steps": [
        "Send your dates, group size and what you want from the trip.",
        "For a wider trip, we agree the golf, the base and the extras on a short call.",
        "I send the golf plan; my travel partner sends the hotel, transfer and dining options.",
        "You decide, and only then is anything booked."
      ]
    },
    "note": "No commitment at enquiry stage. I reply personally within 24 hours with the recommended next step and a clear quote before anything is booked.",
    "feeNote": "The management fee is 5% of the green fees. I show the full cost and booking terms before you commit.",
    "sendPrompt": "Best details to send: dates, group size, handicap range, hotel area, and any courses already on your shortlist.",
    "cta": "Enquire about trip planning"
  },
  "addon": {
    "eyebrow": "Add-on available at any level",
    "title": "Play With A Pro",
    "body": "A full day on course with me alongside you for all 18 holes. Works as a standalone booking or as part of a planned trip. One course, chosen for your game, with local course management and coaching woven into the round.",
    "price": "Solo from",
    "priceValue": "€795",
    "groupLabel": "Groups from",
    "groupValue": "€950 total",
    "priceSuffix": "Green fees additional",
    "cta": "See Play With A Pro"
  },
  "sampleItinerary": {
    "eyebrow": "Sample Trip",
    "title": "Five courses, five days. Based in Palma.",
    "intro": "A Palma-based example for a group of club golfers: five rounds, one longer day north, and a clear reason for the order.",
    "routeLabel": "Route preview",
    "route": "Son Quint, Santa Ponsa 1, Son Gual, Alcanada, T Golf Calvià",
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
  const content = getMergedPlanYourTripContent(locale)
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
