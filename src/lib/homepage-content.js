import { getOfferById, getHomeMultiDayBody, OFFER_IDS } from './offers-content.js'
import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedHomeContent } from './homepage-content-localized.js'

export const HOME_CONTENT = {
  en: {
  "locale": "en",
  "hero": {
    "eyebrow": "UK PGA Advanced Professional · Mallorca",
    "titleLines": [
      "Play Mallorca's Best Courses",
      "with a Pro by Your Side"
    ],
    "emphasis": "",
    "primaryCta": "Play With A Pro",
    "primaryHref": "/play-with-a-pro",
    "secondaryCta": "Plan Your Trip",
    "trust": [
      "PGA Advanced Professional",
      "Trackman Master Certified",
      "18 Years Coaching Golf",
      "Pebble Beach · Evian · The Open"
    ]
  },
  "intro": {
    "eyebrow": "What I do",
    "title": "An 18-hole day with me. Or a whole trip built around it.",
    "paragraphs": [
      "Play With A Pro is my on-course day with you: one course, 18 holes, course management, coaching woven into the round, and the local knowledge that turns a good day into a great one.",
      "Plan Your Trip is the route-planning service. If you want me to handle the courses, base, routing, tee times, buggies, and bookings before you arrive, I do that too."
    ],
    "services": [
      {
        "title": "Play With A Pro",
        "text": "An 18-hole day with me. Standalone, or the anchor for a wider Mallorca trip.",
        "cta": "See Play With A Pro",
        "href": "/play-with-a-pro"
      },
      {
        "title": "Plan Your Trip",
        "text": "Courses, base, routing, tee times, buggies, rental clubs, and dining suggestions.",
        "cta": "Plan Your Trip",
        "href": "/plan-your-trip"
      }
    ],
    "coursesBlurb": "I play and review every course on the island: Son Gual, Alcanada, T Golf Calvia, Son Muntaner, and the rest. If you want to compare courses before booking,",
    "coursesBlurbLink": "see the full list",
    "guideBlurb": "For the full ranked breakdown of all 24 Mallorca (Majorca) courses, with green fees and who each one suits,",
    "guideBlurbLink": "read the course guide",
    "stats": [
      {
        "value": "24",
        "label": "Courses on the island"
      },
      {
        "value": "Personal",
        "label": "Solo and small-group days"
      },
      {
        "value": "PGA",
        "label": "Advanced Professional"
      }
    ]
  },
  "socialProof": "PGA Advanced Professional · Trackman Master · Pebble Beach · The Open Championship · Evian",
  "journey": {
    "eyebrow": "Choose your route",
    "title": "Start where you are in the planning process.",
    "items": [
      {
        "title": "Play With A Pro",
        "text": "An 18-hole day with me: one course, on-course coaching, course management, and local knowledge woven into the round. Solo or group.",
        "cta": "See Play With A Pro",
        "href": "/play-with-a-pro"
      },
      {
        "title": "Plan Your Trip",
        "text": "Get help with the golf side of the trip: course choice, routing, tee times, buggies, and the details that make the week work properly.",
        "cta": "Plan Your Trip",
        "href": "/plan-your-trip"
      },
      {
        "title": "Explore Courses",
        "text": "Browse the island's courses, read the reviews, and compare the options before deciding what belongs in the trip.",
        "cta": "Explore Courses",
        "href": "/golf-courses"
      }
    ]
  },
  "how": {
    "eyebrow": "How I help",
    "title": "Plan the trip first. Add the extras where they make sense.",
    "body": "Planning support, a Play With A Pro day, or both.",
    "steps": [
      {
        "number": "01",
        "title": "Start with the basics",
        "text": "Use the free tool if you want a first course shortlist. It helps you see what might suit your group before any proper planning starts."
      },
      {
        "number": "02",
        "title": "I build the plan",
        "text": "In the paid planning service, I work through the real trip decisions: base, course order, number of rounds, tee times, buggies, rental clubs, and dining."
      },
      {
        "number": "03",
        "title": "Add what improves it",
        "text": "That might be a Play With A Pro day, better club rental, a cleaner tee-time route, or a restaurant that fits the golf day. Not everything needs adding. The right things do."
      }
    ]
  },
  "whyMallorca": {
    "eyebrow": "Why Mallorca",
    "title": "European Tour-standard courses, year-round conditions, and 24 layouts most visitors never fully explore.",
    "paragraphs": [
      "Mallorca is playable every month of the year. The courses range from championship-standard to scenic coastal layouts and quieter inland tracks.",
      "Knowing which course suits your game, which tee times are worth it, and when the conditions are right is much of the difference between a good day and a great one."
    ],
    "stats": [
      {
        "value": "Jan-Dec",
        "label": "year-round season"
      },
      {
        "value": "24",
        "label": "courses on the island"
      }
    ]
  },
  "courses": {
    "eyebrow": "Featured Courses",
    "title": "Mallorca's finest, played and reviewed.",
    "viewAll": "See every Mallorca course →",
    "items": [
      {
        "cls": "course-card--1",
        "badge": "Expert Pick",
        "region": "Palma · 11 km from city",
        "name": "Son Gual",
        "meta": [
          "Championship",
          "Par 72 · Yellow 5,983m",
          "€115-165"
        ],
        "stars": "★★★★★",
        "difficulty": "9/10 Difficulty",
        "excerpt": "Thomas Himmel's 2007 design lives in its own wind ecosystem. The closing stretch from 15 through 18 is among the finest in European golf.",
        "img": "/images/son-gual.webp",
        "href": "/guides/son-gual-review"
      },
      {
        "cls": "course-card--2",
        "badge": "Expert Pick",
        "region": "Alcudia · North Mallorca",
        "name": "Alcanada",
        "meta": [
          "Coastal",
          "Par 72 · 61 Yellow 6,193m",
          "€115-230"
        ],
        "stars": "★★★★★",
        "difficulty": "7/10 Difficulty",
        "excerpt": "Robert Trent Jones Jr. at his most scenic. The lighthouse remains visible for most of the round and the setting is one of the prettiest in Spain.",
        "img": "/images/alcanada.webp",
        "href": "/guides/alcanada-review"
      },
      {
        "cls": "course-card--3",
        "badge": "Best in Spain 2025",
        "region": "Son Vida · Palma",
        "name": "Son Muntaner",
        "meta": [
          "DP World Tour",
          "Par 72 · Yellow 5,985m",
          "€110-260"
        ],
        "stars": "★★★★★",
        "difficulty": "7/10 Difficulty",
        "excerpt": "Named Best Golf Course in Spain at the 2025 World Golf Awards, with Palma Bay views and a thousand-year-old olive tree on 15.",
        "img": "/images/son-muntaner.webp",
        "href": "/guides/son-muntaner-review"
      },
      {
        "cls": "course-card--4",
        "badge": null,
        "region": "Santa Ponsa · Southwest",
        "name": "Santa Ponsa 1",
        "meta": [
          "DP World Tour host",
          "Par 72 · Yellow 6,219m",
          "€77-126"
        ],
        "stars": "★★★★☆",
        "difficulty": "8/10 Difficulty",
        "excerpt": "Host of the 2021 DP World Tour Mallorca Open. Long, generous from the tee, and one of the easiest places on the island to swing freely with driver.",
        "img": "/images/santa-ponsa.webp",
        "href": "/guides/santa-ponsa-1-review"
      },
      {
        "cls": "course-card--5",
        "badge": null,
        "region": "Camp de Mar · Southwest",
        "name": "Golf de Andratx",
        "meta": [
          "Most challenging",
          "Par 72 · Yellow 5,656m",
          "€90-140"
        ],
        "stars": "★★★★☆",
        "difficulty": "9/10 Difficulty",
        "excerpt": "The 6th is the longest par 5 in Spain at 609 metres. Built into coastal hills without compromise. Bring extra balls and no ego.",
        "img": "/images/andratx.webp",
        "href": "/guides/golf-andratx-review"
      }
    ]
  },
  "experience": {
    "eyebrow": "Why trust the plan",
    "title": "I am not writing from a desk. I am on these courses.",
    "paragraphs": [
      "I moved to Mallorca to build this properly. I play the courses, track the conditions, talk to the people running them, and keep notes on what actually matters to visiting golfers.",
      "A good plan is not just \"Son Gual plus Alcanada\". It is where you stay, how far you want to drive, which day deserves the premium green fee, which course suits your group, and where a rest day is smarter than another early tee time.",
      "My coaching background helps, but this site is not only a coaching site. It is here to make Mallorca golf easier to plan, better to play, and more personal once you arrive."
    ],
    "button": "See the Play With A Pro add-on",
    "dateCta": "Plan Your Trip",
    "features": [
      {
        "title": "Course selection",
        "text": "I match the course mix to your group, not to a generic top-10 list."
      },
      {
        "title": "Trip logic",
        "text": "Base, travel time, tee-time rhythm, rest days, lunch, transfers, and budget all matter."
      },
      {
        "title": "Guided course day",
        "text": "When you want the day to be more than a tee time, I can join you for 18 holes and coach the decisions as they happen."
      },
      {
        "title": "Local judgement",
        "text": "Course fit, access, value, driving time, and seasonal conditions change. I keep the plan grounded in what works on the island."
      }
    ]
  },
  "credentials": {
    "eyebrow": "Meet Andy",
    "title": "The person behind the recommendations.",
    "intro": "I am a UK PGA Advanced Professional based in Mallorca. Before building Mr Mallorca Golf I coached and worked across some very different golf environments: elite coaching in China, Pebble Beach, Doral, Evian, The Open, and a season at sea with Costa Cruises.",
    "items": [
      {
        "title": "PGA Advanced Professional",
        "detail": "UK PGA qualification, the highest standard in British golf coaching, with more than 15,000 hours on the range and course."
      },
      {
        "title": "Trackman Master",
        "detail": "The first Trackman Master in China. Data-driven coaching built on the technology that Tour coaches use."
      },
      {
        "title": "TPI Level 3",
        "detail": "Titleist Performance Institute certification: understanding how the body moves and how it limits or unlocks the swing."
      },
      {
        "title": "US Kids Top 50 Coach",
        "detail": "Recognised for junior development and long-term player development environments."
      },
      {
        "title": "11 years in Shanghai",
        "detail": "National team players, hundreds of millions of coaching views on Douyin, and real elite coaching environments."
      },
      {
        "title": "World-class venues",
        "detail": "Pebble Beach, Doral, Evian, The Open Championship, Costa Cruises, and now the courses of Mallorca."
      }
    ]
  },
  "quote": {
    "text": "After just 18 holes together, I've discovered a new ceiling to my potential.",
    "attribution": "Jo, after a Play With A Pro day"
  },
  "winners": {
    "eyebrow": "Proof of work",
    "title": "Competition winners, ambitious golfers, and plenty in between.",
    "intro": "I have coached elite juniors, club golfers, and plenty of people who simply wanted to stop throwing shots away. The common thread is usually the same: clearer decisions, better patterns, and improvement that still shows up when the card is in your hand.",
    "testimonial": "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough.",
    "attribution": "Adam"
  },
  "packages": {
    "eyebrow": "What I offer",
    "title": "A day on the course with me. Or the whole trip, built around it.",
    "body": "The core service is Play With A Pro, an 18-hole day with me. Solo and group are the core day rates. I always try to secure the most personal tee time possible, but golf courses may pair bookings when busy. A guaranteed private tee time can usually be arranged as an add-on, and is included as standard with Signature Day. If you want the whole trip planned around it, that is available too.",
    "items": [
      {
        "tier": "Solo",
        "eyebrow": "A Day With Andy",
        "name": "Solo",
        "features": [
          "Course matched to your game and handicap",
          "Tee time secured and fully handled",
          "18 holes with me",
          "On-course coaching during the round",
          "Post-round debrief"
        ],
        "note": "Andy's day rate. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
        "cta": "Enquire",
        "href": "/contact",
        "price": "€695"
      },
      {
        "tier": "Group",
        "eyebrow": "A Day With Andy",
        "name": "Group",
        "featured": true,
        "features": [
          "Up to 3 players, one fixed day rate for Andy",
          "Course matched to your group",
          "Tee time secured and fully handled",
          "18 holes with me",
          "On-course coaching during the round"
        ],
        "note": "Andy's fixed day rate for 2 or 3 golfers. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
        "cta": "Enquire",
        "href": "/contact",
        "price": "€950 total"
      },
      {
        "tier": "Signature Day",
        "eyebrow": "Signature Day",
        "name": "Signature Day",
        "price": "€3,000+",
        "signature": true,
        "features": [
          "Course, private tee time, and guided golf day",
          "Lunch, private chef, or restaurant booking",
          "Private transfers and recovery time",
          "Caddy, videographer, and premium club hire options",
          "Post-round video analysis included",
          "Priority booking. Your dates held first."
        ],
        "note": "Personalised from the ground up. Transfers, caddy, golf physio, private chef, videographer, and other add-ons can be planned around you before the day.",
        "cta": "Enquire",
        "href": "/contact",
        "detailHref": "/signature-day",
        "detailLabel": "See full details"
      },
      {
        "tier": "Trip Planning",
        "eyebrow": "Trip Planning",
        "name": "Plan Your Trip",
        "price": "Price on enquiry",
        "featured": false,
        "features": [
          "No searching apps or websites - tee times handled for you",
          "Courses picked to match your group, level, and budget",
          "Routing and number of rounds planned around your schedule",
          "Buggies, club hire, and transfers all arranged",
          "Restaurant and dining suggestions included",
          "One person to contact for the whole trip"
        ],
        "note": "5% management fee applies to green fees and bookings. Confirmed after your first conversation.",
        "cta": "Enquire",
        "href": "/contact"
      }
    ],
    "multiDay": {
      "eyebrow": "Want the full picture?",
      "title": "Build the whole trip around your day with me.",
      "body": "Use the basic tool for course ideas. If you want the real plan, I can handle course choice, base, routing, tee times, buggies, rentals, dining suggestions, and whether Play With A Pro belongs in the trip.",
      "cta": "Plan the trip",
      "href": "/plan-your-trip"
    },
    "intro": "Both are arranged by me and played on one of the island's finest courses. The homepage stays light; the full experience and pricing sit on the next page."
  },
  "faq": {
    "eyebrow": "Questions",
    "title": "Common questions before booking.",
    "intro": "Anything not covered here is best asked directly. I reply personally.",
    "items": [
      {
        "q": "Do I need to be a good golfer?",
        "a": "Not at all. The experience adjusts to your game: beginners and scratch players both get something from the day. The only requirement is wanting a golf day that feels more personal than a standard tee time."
      },
      {
        "q": "What kind of coaching do you offer?",
        "a": "On-course coaching during a complete 18-hole round. Not range lessons or individual swing instruction. I work with you playing real holes, where course management and decision-making matter. I help with club choice, scoring decisions, and the patterns that only show up when you're actually playing."
      },
      {
        "q": "How do I book?",
        "a": "Start with the itinerary planner if you are still planning. If you already know your dates and want me involved, send an enquiry and I will come back personally within 24 hours."
      },
      {
        "q": "Is this suitable for a group?",
        "a": "Yes. The experiences work for solos, pairs, groups of friends, and corporate days. The multi-day option is especially well suited to business groups and executives visiting the island."
      },
      {
        "q": "When is the best time of year to visit?",
        "a": "For the best conditions, look at late spring and autumn peak windows. For better value, June to August and December to February are usually cheaper. The island is playable year-round, but spring and autumn are no longer the budget season."
      },
      {
        "q": "Can I book a one-off session during a golf holiday?",
        "a": "Yes. Many of my clients are here on holiday and want to add something different to their golf days. A single on-course session works well for that."
      },
      {
        "q": "Is this just for tourists or do you work with residents too?",
        "a": "Both. I work with golfers who live on the island year-round and visitors here for a week or two. Long-term programmes and one-off sessions are both welcome."
      }
    ]
  },
  "finalCta": {
    "eyebrow": "Ready to plan it properly?",
    "title": "Tell me the trip you want. I'll help build it properly.",
    "body": "Start with your dates, group size, handicap range, budget, and the kind of golf you want. I will help you turn that into a Mallorca golf plan that works on the ground.",
    "quote": "The right course on the right day beats a famous name in the wrong slot.",
    "primaryCta": "Plan Your Trip",
    "secondaryCta": "WhatsApp"
  },
  "ui": {
    "coursesHint": "Swipe or scroll to browse",
    "newsletterEyebrow": "THE NEWSLETTER",
    "newsletterTitle": "Golf insights delivered.",
    "newsletterBody": "Course conditions updated as I play them. Which tee times are worth fighting for, where the greens are running fast, and what is worth knowing before you fly. Sent every two weeks, unsubscribe whenever."
  }
}
}

function getMergedHomeContent(locale = 'en') {
  if (locale === 'en') return HOME_CONTENT.en
  const localized = getLocalizedHomeContent(locale)
  return localized
    ? {
        ...mergeLocalizedContent(HOME_CONTENT.en, localized),
        locale,
      }
    : HOME_CONTENT.en
}

function cleanHomeVisibleText(value) {
  if (typeof value === 'string') {
    return normalizeMojibakeDeep(value)
      .replaceAll('\u00C2\u00B7', '\u00B7')
      .replaceAll('\u00C2', '')
      .replaceAll('\u00E2\u201A\u00AC', '\u20AC')
      .replaceAll('\u00E2\u2020\u2019', '\u2192')
      .replaceAll('\u00E2\u20AC\u201D', '\u2014')
      .replaceAll('\u00E2\u20AC\u201C', '\u2013')
  }
  if (Array.isArray(value)) {
    return value.map((item) => cleanHomeVisibleText(item))
  }
  if (value && typeof value === 'object') {
    const output = {}
    for (const [key, nestedValue] of Object.entries(value)) {
      output[key] = cleanHomeVisibleText(nestedValue)
    }
    return output
  }
  return value
}

export function getHomeContent(locale = 'en') {
  const content = getMergedHomeContent(locale)
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)

  const packages = content.packages
    ? {
        ...content.packages,
        items: (content.packages.items || []).map((item) => ({
          ...item,
          price:
            item.tier === soloOffer.shortLabel
              ? soloOffer.priceDisplay
              : item.tier === groupOffer.shortLabel
                ? groupOffer.priceDisplay
                : item.price ?? null,
        })),
        multiDay: content.packages.multiDay
          ? {
              ...content.packages.multiDay,
              body: getHomeMultiDayBody(locale),
            }
          : content.packages.multiDay,
      }
    : content.packages

  return cleanHomeVisibleText({
    ...content,
    packages,
  })
}
