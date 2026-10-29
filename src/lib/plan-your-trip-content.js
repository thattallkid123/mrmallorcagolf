import { getOfferById, OFFER_IDS } from './offers-content.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlanYourTripContent } from './plan-your-trip-content-localized.js'

export const PLAN_YOUR_TRIP_CONTENT = {
  en: {
  "heroEyebrow": "Plan Your Mallorca Golf Trip",
  "heroTitle": "The right Mallorca courses, in the right order.",
  "heroBody": "I choose and book courses and tee times for your group. For hotels, transfers, restaurants and days off, I work with a trusted local travel partner.",
  "options": {
    "itineraryLabel": "Sample trip",
    "itineraryTitle": "See a sample five-day trip",
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
    "body": "Send your dates, group size, handicap range and where you plan to stay. I will recommend the right level of help.",
    "includes": [
      "Course recommendations matched to your game, group, and budget",
      "The best area to stay for your golf itinerary",
      "Trip routing and number of rounds",
      "Tee times booked and confirmed",
      "Buggies and club rentals arranged",
      "Play With A Pro available as an add-on at any stage"
    ],
    "workingModes": {
      "title": "Choose the level of help you need.",
      "body": "One round, a long weekend or a longer golf trip. Choose the help you need; I do not have to join your rounds.",
      "items": [
        {
          "title": "Tee times only",
          "body": "Send dates, group size, handicap range and hotel area. I will suggest suitable courses, check availability and confirm the price before anything is booked.",
          "cta": "Book tee times",
          "target": "tee-time-booking"
        },
        {
          "title": "Full golf plan",
          "body": "For groups playing several rounds, I put the courses in the right order, plan the drives, and arrange buggies and club rentals.",
          "cta": "Plan my golf trip",
          "target": "trip-planning"
        },
        {
          "title": "The whole trip",
          "body": "Golf plus accommodation, transfers, dining and days off, planned with my local travel partner.",
          "cta": "Plan the whole trip",
          "target": "whole-trip"
        }
      ]
    },
    "possibilities": {
      "title": "The whole trip, planned around the golf.",
      "body": "I plan and book the golf. A trusted local travel partner helps with hotels, transfers, restaurants and activities. Before you book, we agree the scope, costs and who handles each part.",
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
        "I confirm the golf options and check any wider requests with my travel partner.",
        "You decide, and only then is anything booked."
      ]
    },
    "note": "No commitment at enquiry stage. I reply personally within 24 hours with the recommended next step and a clear quote before anything is booked.",
    "feeNote": "Golf booking carries a 5% fee on green fees. Full planning and non-golf arrangements are quoted separately before you commit.",
    "sendPrompt": "Best details to send: dates, group size, handicap range, hotel area, and any courses already on your shortlist.",
    "cta": "Enquire about trip planning"
  },
  "tripIdeas": {
    "eyebrow": "Trip ideas",
    "title": "What the days around the golf can look like.",
    "intro": "A few of the hotels, tables and days out I suggest to groups. Your options are matched to the group and the courses, and my travel partner checks availability and prices.",
    "photoLabel": "Photo",
    "cta": "Plan the whole trip",
    "items": [
      {
        "image": "/images/trip-ideas/stay-golf.webp",
        "photo": "Cap Vermell Grand Hotel",
        "tag": "East · golf base",
        "title": "Cap Vermell Grand Hotel",
        "text": "In the Canyamel valley, close to Canyamel Golf."
      },
      {
        "image": "/images/trip-ideas/stay-city.webp",
        "photo": "Hotel Saratoga",
        "tag": "Palma · city hotel",
        "title": "Hotel Saratoga",
        "text": "Central Palma, with the old town and its restaurants on foot."
      },
      {
        "image": "/images/trip-ideas/dine-fosh.webp",
        "photo": "Marc Fosh",
        "tag": "Palma · Michelin star",
        "title": "Marc Fosh",
        "text": "A Michelin-starred tasting menu, with a private table for a smaller group."
      },
      {
        "image": "/images/trip-ideas/dine-siso.webp",
        "photo": "Siso Beach",
        "tag": "Palmanova · on the beach",
        "title": "Siso Beach",
        "text": "A beachside prize-giving lunch after the last round at T Golf Calvià."
      },
      {
        "image": "/images/trip-ideas/dine-annabel.webp",
        "photo": "Annabel",
        "tag": "Palmanova · sea view",
        "title": "Annabel",
        "text": "Sea views, music and a private room for a group dinner."
      },
      {
        "image": "/images/trip-ideas/do-boat.webp",
        "photo": "Can Simoneta",
        "tag": "On the water",
        "title": "A private boat",
        "text": "Half a day along the coast with a skipper, back in time for dinner."
      },
      {
        "image": "/images/trip-ideas/do-winery.webp",
        "photo": "Bodega Ribas",
        "tag": "Consell · wine",
        "title": "Bodega Ribas",
        "text": "A tasting on a free afternoon, with transfers so nobody drives back."
      },
      {
        "image": "/images/trip-ideas/do-train.webp",
        "photo": "Tren de Sóller",
        "tag": "Day off",
        "title": "The Sóller train",
        "text": "The wooden train through the mountains to Sóller, about an hour from Palma."
      }
    ]
  },
  "clientProof": {
    "eyebrow": "In their words",
    "title": "Golfers who came to Mallorca to play.",
    "intro": "What visiting golfers wrote after their time on the course with me.",
    "testimonials": {
      "items": [
        {
          "text": "The most enjoyable golf imaginable. Andy brings such easy affability and deep wisdom, playing with him is an absolute privilege. I was on an extended golf vacation and my rounds with Andy were the best part of my trip. He's really great, and the ultimate resource for golf on Mallorca!!",
          "author": "John H."
        },
        {
          "text": "I visited Mallorca with my wife and we spent two brilliant days with Andy. He gave us some easy tips to put into action on the golf course straight away and taught us how to think our way around 18 holes much better. It was very cool to watch Andy play too! Would recommend Andy for anyone looking to upgrade their golfing experience while on the island. We will be booking for next year.",
          "author": "Sam"
        },
        {
          "text": "I recently spent two days with Andy in Mallorca and had the pleasure of playing two rounds with him at Santa Ponsa 1 and Alcanada. I would highly recommend spending a full day (or more) with Andy - he has wisdom far beyond the game of golf to impart! Thank you again, Andy - I'll be back for more!",
          "author": "Mark P."
        },
        {
          "text": "Mr Mallorca Golf was totally worth it. I booked a round with Andy and he was an excellent host. He gave me amazing golf tips, straightened out my slice which has been a problem for my game for years. Beyond that he was great company. Would recommend to anyone looking to book a Golf Trip in Mallorca.",
          "author": "Adam"
        }
      ]
    }
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
    "title": "A five-round example from Palma.",
    "intro": "One Palma-based example for club golfers who want five rounds. Your trip can be shorter or longer, with rest days and a different course mix.",
    "routeLabel": "Route preview",
    "route": "Son Quint, Santa Ponsa 1, Son Gual, Alcanada, T Golf Calvià",
    "whyThisShape": {
      "title": "Why the week runs in this order",
      "lead": "Most trips go wrong in the gaps between tee times: the first morning, the long drive, the hard course, the flight home. This is the sort of routing I would check before I booked anything.",
      "points": [
        {
          "title": "Arrival day stays easy",
          "body": "After a flight and a hire-car queue, the first round should be close, open and calm, with an early-afternoon tee time rather than a dawn start. Nobody needs the hardest scorecard of the week on day one."
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
          "body": "The final round should keep the airport simple. T Golf Calvià is about 30 minutes from the airport on the motorway, so the group does not cross the island on the way home, and a small delay should cost lunch, not the flight."
        }
      ]
    },
    "summary": "The point is simple: same hotel, sensible drives, and the hardest golf placed where it belongs.",
    "feesNote": "Green fees vary by season.",
    "feesCta": "Check current rates in the green fee tool",
    "feesLink": "/tools/course-comparison",
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
