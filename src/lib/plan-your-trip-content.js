import { getOfferById, OFFER_IDS } from './offers-content.js'
import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlanYourTripContent } from './plan-your-trip-content-localized.js'

export const PLAN_YOUR_TRIP_CONTENT = {
  en: {
  "heroEyebrow": "Plan Your Mallorca Golf Trip",
  "heroTitle": "Start with the courses. Let me handle the golf side properly.",
  "heroBody": "Use the free tool if you just want a first shortlist. If you want the golf side of the trip planned properly, I help with course choice, routing, tee times, buggies, rentals, and the details that make the week work on the ground.",
  "options": {
    "basicLabel": "Explore",
    "basicTitle": "Free course finder",
    "basicNote": "Shortlist courses first.",
    "proLabel": "Service",
    "proTitle": "Golf trip planning with Andy",
    "proNote": "Routing, tee times, and golf-side logistics handled."
  },
  "free": {
    "eyebrow": "Explore",
    "title": "Use the free course finder",
    "body": "Answer a few questions and the tool will suggest courses to consider based on your group, level, region, and budget. It is a useful first pass, not a route, booking plan, or day-by-day itinerary."
  },
  "professional": {
    "eyebrow": "Service",
    "title": "Let me plan the golf side properly",
    "body": "Send me your dates, group size, and what you are hoping for. I will recommend the right courses for your group, work out the routing and number of rounds, book the tee times, arrange buggies and club rentals, and help shape the golf days so the trip runs cleanly from start to finish.",
    "includes": [
      "Course recommendations matched to your game, group, and budget",
      "Where to base yourself and why",
      "Trip routing and number of rounds",
      "Tee times booked and confirmed",
      "Buggies and club rentals arranged",
      "Dining suggestions built around the schedule",
      "Play With A Pro available as an add-on at any stage"
    ],
    "note": "Send your dates, group size, handicap range, hotel area, and any courses already on your list. I will come back with the right next step and a quote.",
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
    "title": "Five courses, five days. Base in Palma.",
    "intro": "A realistic 5-day trip: open course to warm up on, championship test with coaching, north drive to the island's most memorable hole, and a short finish near the airport. All five courses have published guides on the site.",
    "days": [
      {
        "day": "Day 1",
        "course": "Son Quint",
        "fromPalma": "15 min",
        "price": "€80–140",
        "title": "Opener. Easy routing from Palma.",
        "body": "15 minutes from Palma, open layout, room to swing. Early morning tee time. No pressure on day one after travel.",
        "guide": "/guides/son-quint-review",
        "image": "/images/courses/son-quint.webp"
      },
      {
        "day": "Day 2",
        "course": "Santa Ponsa 1",
        "fromPalma": "25 min",
        "price": "€77–126",
        "title": "Familiar. Still based in Palma.",
        "body": "Public access course, forgiving layout, manageable from the tee. 25 minutes from the city. Early slot recommended.",
        "guide": "/guides/santa-ponsa-1-review",
        "image": "/images/courses/santa-ponsa-1.webp"
      },
      {
        "day": "Day 3",
        "course": "Son Gual",
        "fromPalma": "20 min",
        "price": "€115–165",
        "title": "Play With A Pro. Championship test.",
        "body": "Fast greens, tight fringes, wind behaviour unique to this course. Where a pro adds value. Early tee time for the wind. Food on site.",
        "guide": "/guides/son-gual-review",
        "image": "/images/courses/son-gual.webp",
        "dining": "El Camino, Marc Fosh or Zaranda for dinner in Palma."
      },
      {
        "day": "Day 4",
        "course": "Alcanada",
        "fromPalma": "50 min",
        "price": "€115–220",
        "title": "Full day north. The memorable one.",
        "body": "Coastal course, lighthouse in sight for 16 holes. Book early morning for light and wind. 50 minutes is a proper drive but a full day out, not a rush. Severe greens. Book your breakfast early.",
        "guide": "/guides/alcanada-review",
        "image": "/images/courses/alcanada.webp",
        "dining": "Maca de Castro in Port d'Alcúdia, 10 min from the course."
      },
      {
        "day": "Day 5",
        "course": "T Golf Calvià",
        "fromPalma": "30 min",
        "price": "€140–210",
        "title": "Change of style. Back toward the airport.",
        "body": "Post-renovation course with 15 lakes and serious conditioning. 30 minutes from Palma, 40 from the airport. Or choose Son Termes instead: 5,282m, par 70, 10 minutes from Palma, short and scenic for a travel day.",
        "guide": "/guides/t-golf-calvia-review",
        "image": "/images/courses/t-golf-calvia.webp",
        "dining": "El Camino or local options near the course."
      }
    ],
    "readGuideLabel": "Read the guide",
    "summary": "Five courses. Base in Palma for Days 1, 2, 3 and 5. One long drive to Alcanada on Day 4. Green fees roughly €427–700 across the week, plus Play With A Pro if Day 3.",
    "fees": "Green fees €427–700 total. €3 daily licence at Alcanada. Play With A Pro is €695 solo, €950 group, green fees separate.",
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
