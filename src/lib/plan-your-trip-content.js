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
    "days": [
      {
        "day": "Day 1",
        "course": "Golf Son Quint",
        "fromPalma": "15 min",
        "courseType": "Open parkland",
        "role": "Warm-up round",
        "body": "The most forgiving of the perfectly conditioned Arabella courses. Wide fairways, four sets of tees, and enough room that a loose drive is still playable. From the eighth, the highest point on the course, you tee off looking straight at Palma Cathedral. Watch the stone walls, they are in play and not decoration. Tiger Woods played his only round in Mallorca here, with his son Charlie, in 2022.",
        "teeTime": "Mid-morning is fine. No need to be up at six on day one.",
        "swap": "If someone in the party barely plays, Palma Pitch and Putt in the afternoon instead. Nine par 3s in the middle of the city and an even easier start.",
        "dining": "El Camino for modern, expertly prepared tapas and more.",
        "image": "/images/courses/son-quint.webp"
      },
      {
        "day": "Day 2",
        "course": "Golf Santa Ponsa 1",
        "fromPalma": "25 min",
        "courseType": "Long parkland",
        "role": "Step up",
        "body": "The only course in the south west of the island to have hosted a European Tour event. Not an easy test from the back tees, but play a few blocks forward and it settles into a very good round, with more open tee shots and room to get comfortable. The tenth at 590 metres is one of the longest par 5s in Europe whichever tee you use. There are a few partially blind tee shots, so knowing the lines in advance will save you shots. Holes five, six and seven give you the best Tramuntana views on this side of the island.",
        "teeTime": "Early slot. It fills up, and in peak season it is busy from the off, so take the first group of the day if you can.",
        "dining": "Mesón Can Pedro for traditional Mallorcan food, a busy room and a lot of meat. Reservations required.",
        "guide": "/guides/santa-ponsa-1-review",
        "image": "/images/courses/santa-ponsa-1.webp"
      },
      {
        "day": "Day 3",
        "course": "Golf Son Gual",
        "fromPalma": "20 min",
        "courseType": "Championship",
        "role": "The test, with me alongside",
        "body": "Thomas Himmel's 2007 design and the course Rafa Nadal calls his favourite on the island. It sits in its own wind system: the elevated position means the wind on sixteen behaves nothing like the wind on seven. Greens are fast and raised, so where you miss matters more than how you swing, and committing to a clear target to stay out of the many bunkers is a must. The closing four holes are among the best in European golf. This is where Play With A Pro has the most value, with strategy, saving shots around the green and staying out of as much trouble as possible, which is why it sits here and not on arrival.",
        "teeTime": "Early. The wind gets up in the afternoon and you want to be on the terrace enjoying lunch, not fighting a long carry over water into the wind.",
        "planningNote": "Handicap certificate required here, as at Alcanada. Most Mallorca clubs ask for one, so travel with it.",
        "dining": "Michelin star options at Marc Fosh or Zaranda back in Palma city centre.",
        "guide": "/guides/son-gual-review",
        "image": "/images/courses/son-gual.webp"
      },
      {
        "day": "Day 4",
        "course": "Club de Golf Alcanada",
        "fromPalma": "50 min",
        "courseType": "Coastal championship",
        "role": "The one you will remember",
        "body": "Robert Trent Jones Jr., with the lighthouse in view from sixteen of the eighteen holes. Fifty-eight bunkers, placed to make you think on every approach. The greens are severely undulating and quick, so leave yourself below the hole as much as you can. It hosts the Rolex Challenge Tour Grand Final again in October 2026 and is the highlight of many trips here to Mallorca.",
        "teeTime": "Early for the sunrise and before the sea breeze and the bookings fill in. Sunset golf is also good here, though less ideal with the longer drive back to the city.",
        "dining": "Maca de Castro in Port d'Alcúdia, ten minutes from the course. Creative twists on traditional cooking with locally sourced ingredients.",
        "guide": "/guides/alcanada-review",
        "image": "/images/courses/alcanada.webp"
      },
      {
        "day": "Day 5",
        "course": "T Golf Calvià",
        "fromPalma": "30 min",
        "courseType": "Resort championship",
        "role": "Short travel to the airport",
        "body": "Rebuilt after a €10 million renovation and it shows from the car park onwards. Fifteen lakes, wide driving lines, some tree-lined fairways and big undulating greens, so it is playable without being bland. No houses in view from much of the course, and you feel like you are in your own little world with clear views across the property. Thirty minutes from Palma centre, but just over twenty to the airport on the motorway, which is the point on a departure day.",
        "teeTime": "First slot you can get. Round, lunch, and still time to drop the car.",
        "swap": "Flying out early? Golf Son Termes instead. Par 70, 5,285 metres, with a lot of character up in the mountains alongside the goats. Ten minutes from Palma with views all the way to the cathedral and beyond. Short, scenic, done by lunch.",
        "guide": "/guides/t-golf-calvia-review",
        "image": "/images/courses/t-golf-calvia.webp"
      }
    ],
    "readGuideLabel": "Read the guide",
    "toggleShowLabel": "See the 5 days",
    "toggleHideLabel": "Hide itinerary",
    "fromPalmaLabel": "from Palma",
    "teeTimeLabel": "Tee time",
    "swapLabel": "Swap",
    "planningNoteLabel": "Worth knowing",
    "diningLabel": "Dinner",
    "summary": "The point is simple: same hotel, sensible drives, and the hardest golf placed where it belongs.",
    "feesNote": "Green fees vary by season.",
    "feesCta": "Check current rates in the green fee tool",
    "feesLink": "/tools/green-fees",
    "fullGuideLabel": "Read the 5-day guide",
    "fullGuideLink": "/guides/5-day-mallorca-golf-itinerary",
    "hotelEyebrow": "Where to stay",
    "hotelCta": "Use the hotel recommender",
    "hotelLink": "/tools/hotel-recommender",
    "ctaText": "This is a sample, not a package. Send me your dates, your group and your handicaps, and I will build the version that fits.",
    "ctaLabel": "Enquire about trip planning"
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
