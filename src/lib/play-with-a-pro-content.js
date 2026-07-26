import { getOfferById, getPlayHeroBody, getPlayMultiDayDetail, OFFER_IDS } from './offers-content.js'
import { normalizeMojibakeDeep } from './text-normalization.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedPlayWithAProContent } from './play-with-a-pro-content-localized.js'

export const PLAY_WITH_A_PRO_CONTENT = {
  en: {
  "locale": "en",
  "hero": {
    "homeHref": "/",
    "breadcrumbHome": "Home",
    "breadcrumbCurrent": "Play with a Pro",
    "eyebrow": "Play With A Pro | Mallorca | PGA Professional",
    "title": "An 18-hole day with Andy.\nOn-course coaching while you play.",
    "body": "Play With A Pro is an 18-hole day with Andy in Mallorca. The course is chosen for your game, the tee time is secured for you, and Andy plays the round alongside you with on-course coaching where it helps. Solo from 695 EUR. Groups from 950 EUR total. Green fees additional, confirmed before booking.",
    "price": null,
    "primaryCta": "Enquire",
    "primaryHref": "/contact",
    "secondaryCta": "See the options"
  },
  "offerSummary": {
    "eyebrow": "At a glance",
    "title": "Understand the offer before you enquire.",
    "items": [
      {
        "label": "Best for",
        "text": "Solo golfers, pairs, and small groups who want one proper golf day in Mallorca."
      },
      {
        "label": "Format",
        "text": "One course, 18 holes, chosen for your game, with Andy alongside you throughout the round."
      },
      {
        "label": "Pricing",
        "text": "Solo from 695 EUR. Group from 950 EUR total. Green fees stay separate and are confirmed before booking."
      },
      {
        "label": "Next step",
        "text": "Send your dates, group size, and handicap range. Andy replies personally within 24 hours."
      }
    ]
  },
  "day": {
    "eyebrow": "What the day looks like",
    "title": "One course. 18 holes. Everything handled before you arrive.",
    "paragraphs": [
      "You arrive at the course. I handle everything before that: the right course for your game, the tee time, and a brief questionnaire so I understand how your game works and what you are hoping to take away from the day. Then we play. The coaching comes in at the right time, while you are playing real golf and making real decisions. Between shots, there is time to talk: course strategy, how to read conditions, and stories from golf around the world.",
      "I am a PGA Advanced Professional, have coached hundreds of competition winners, 15,000+ coaching hours and a Trackman Master certification. The day draws on that, but does not become purely a technical session. A round of golf, played properly."
    ],
    "quote": "The fastest improvements usually happen on the course, not the range. Real conditions, real decisions: that kind of progress tends to stick.",
    "questionnaireEyebrow": "Already booked?",
    "questionnaireTitle": "Complete your Pre-Round Questionnaire →",
    "questionnaireBody": "Takes 3 minutes. Helps me tailor the day to you before we reach the first tee."
  },
  "included": {
    "title": "Everything in the day",
    "items": [
      [
        "Course selection",
        "I match the course to your game, handicap, and what you want from the day."
      ],
      [
        "Tee time",
        "Secured and fully handled before you arrive. You just show up."
      ],
      [
        "Pre-round briefing",
        "The pre-round questionnaire mentioned earlier, so I understand your game, expectations, and current form."
      ],
      [
        "18 holes with Andy",
        "We play together as a group. Same tee, same conversation, same round."
      ],
      [
        "On-course coaching and strategy",
        "Course management, shot selection, and decision-making at the moments they matter. Not a commentary, just the right observations at the right time."
      ],
      [
        "Post-round debrief",
        "What changed during the round, what to take away, and what to work on next."
      ]
    ]
  },
  "courses": {
    "eyebrow": "Which course?",
    "title": "The course is always chosen with you.",
    "body": "A group including beginners, a shorter half-day, a family with juniors: there are courses that work better for each of those, and I'll tell you honestly which one suits. Some are members-only and cannot be booked independently. If you want one of those, I can arrange it."
  },
  "who": {
    "eyebrow": "Who this is for",
    "title": "The day changes depending on who is standing on the first tee.",
    "cards": [
      {
        "num": "01",
        "title": "Serious golfers who want a day they'll remember",
        "text": "Handicap players: solo, in pairs, or with a small group. You want Mallorca's best courses played properly. Not just a tee time and a wave goodbye, but a day with someone who knows the course, reads the wind, and can change how you think about a hole in the time it takes to walk to the next tee."
      },
      {
        "num": "02",
        "title": "Groups who want everything arranged",
        "text": "Families, corporate groups, and executives visiting the island who want a premium, fully arranged day where every detail is handled. One fixed day rate, a calmer rhythm, and someone who has done it before."
      },
      {
        "num": "03",
        "title": "A gift worth giving",
        "text": "These days work well as gifts for milestone birthdays, retirement, and corporate rewards. Let me know if you're buying for someone else. I'll prepare a certificate and keep the day details private until you're ready."
      }
    ]
  },
  "testimonials": {
    "eyebrow": "What golfers say",
    "title": "In their own words.",
    "items": [
      {
        "text": "Golfing with Andy was a superb experience. He has an unparalleled level of insight, and delivers it in a way that is both subtle and empathetic. I have felt suffocated by well-meaning coaches in the past, but Andy is a cut above. After just 18 holes together, I've discovered a new ceiling to my potential. His philosophy of prioritising the low-hanging fruit has given me clarity. What's more, his simple tips instantly transformed my putting.",
        "author": "Jo"
      },
      {
        "text": "The thing I most enjoyed was how comfortable he made me feel on the course. The insight into what calculations go into each shot has helped me improve my decision making immensely. I would recommend the day to groups of friends, groups on holiday looking for an entertaining day out, or even a family looking to get involved in golf together.",
        "author": "Finlay"
      },
      {
        "text": "I've been playing golf since I was five. I figured I had the fundamentals down and just needed more reps, not a coach. Then someone gifted me a lesson with Andy, and I decided to give it a shot. I'm glad I did. We worked through the finer details of my swing, focused on solid ball contact, better weight transfer, and mechanics. Even the smallest tweaks produced consistent results, and I'm confident they'll shave 5-10 strokes off my game from just one session. Andy was a total pro. Can't thank him enough.",
        "author": "Adam"
      },
      {
        "text": "An amazing experience. Andy evaluated all aspects of my golf game — physical swing, course management, and the mental side — adjusting as we went. I left with a big variety of things to work on.",
        "author": "John"
      },
      {
        "text": "He gave me clear and specific feedback that helped me correct several of my mistakes. Especially my putting, which I have struggled with, has improved a lot. I will continue to use Andy as my pro.",
        "author": "Synøve"
      },
      {
        "text": "Played 18 holes with Andy this morning. After 4 holes or so Andy came in with his assessment and from then everything became enjoyable and the improvement was immense. Down to earth guy explained everything with ease and made me feel so relaxed. Can't wait for my next round on Sunday.",
        "author": "Mark"
      }
    ]
  },
  "packages": {
    "eyebrow": "Pricing",
    "title": "Solo, group, or Signature Day.",
    "body": "Solo and group are the core Play With A Pro day rates. I always try to secure the most personal tee time possible, but golf courses may pair bookings when busy. A guaranteed private tee time can usually be arranged as an add-on, and is included as standard with Signature Day.",
    "tiers": [
      {
        "eyebrow": "A Day With Andy",
        "name": "Solo",
        "price": "€695",
        "note": "Andy's day rate. Golf course green fee and lunch are separate. Buggy and rental clubs available as optional add-ons, Andy can help arrange.",
        "features": [
          "Course matched to your game and handicap",
          "Tee time secured and fully handled",
          "18 holes with Andy",
          "On-course coaching during the round",
          "Post-round debrief and next steps"
        ],
        "button": "Enquire →",
        "href": "/contact",
        "featured": false,
        "signature": false
      },
      {
        "eyebrow": "A Day With Andy",
        "name": "Group",
        "price": "€950 total",
        "noteLines": [
          "Andy's fixed day rate for 2 or 3 golfers.",
          "Golf course green fee and lunch are separate.",
          "Buggy and rental clubs available as optional add-ons, Andy can help arrange."
        ],
        "features": [
          "Up to 3 players, one fixed day rate for Andy",
          "Course matched to your group",
          "Tee time secured and fully handled",
          "18 holes with Andy",
          "On-course coaching during the round"
        ],
        "button": "Enquire →",
        "href": "/contact",
        "featured": true,
        "signature": false
      },
      {
        "eyebrow": "Signature Day",
        "name": "Signature Day",
        "price": "€3,000+",
        "note": "Everything arranged. All details confirmed before the day.",
        "features": [
          "Course, private tee time, and a fully arranged day with Andy",
          "Golf physio with The Golf Doctor to work on the body and the swing issues we saw",
          "Private transfers to and from the course",
          "Evening dinner at a partner hotel"
        ],
        "button": "Enquire →",
        "href": "/contact",
        "detailHref": "/signature-day",
        "detailLabel": "See full details →",
        "featured": false,
        "signature": true
      },
      {
        "eyebrow": "Trip Planning",
        "name": "Plan Your Trip",
        "price": "Price on enquiry",
        "note": "5% management fee applies to green fees and bookings. Confirmed after your first conversation.",
        "features": [
          "No searching apps or websites: tee times handled for you",
          "Courses picked to match your group, level, and budget",
          "Routing and number of rounds planned around your schedule",
          "Buggies, club hire, and transfers all arranged",
          "Restaurant and dining suggestions included",
          "One person to contact for the whole trip"
        ],
        "button": "Enquire →",
        "href": "/contact",
        "featured": false,
        "signature": false
      }
    ],
    "multiDay": {
      "eyebrow": "Still planning the full trip?",
      "title": "Planning the wider trip?",
      "body": "Play With A Pro can stand on its own, or sit inside a planned trip. If you want help choosing courses, base, routing, tee times, rentals, and dining, start with Plan Your Trip.",
      "button": "Plan Your Trip →",
      "href": "/plan-your-trip",
      "detail": null
    }
  },
  "faq": {
    "eyebrow": "Questions",
    "title": "Common questions.",
    "intro": "Anything not covered here is best asked directly. I reply personally.",
    "items": [
      {
        "q": "Do you offer lessons for complete beginners?",
        "a": "Yes. All my sessions take place on the golf course, not the driving range. With some great par 3s and short courses here in Mallorca, beginners can start playing real golf straight away and see the skills they need to develop. Range-only sessions are not something I offer, but I am happy to point you toward someone who does."
      },
      {
        "q": "Do I need to bring my own clubs?",
        "a": "No. Hire clubs are available at most courses on the island. Just mention it when you book and I will help sort it."
      },
      {
        "q": "Where exactly do lessons take place in Mallorca?",
        "a": "At courses across the island, chosen to suit you and your game. When you get in touch, we will pick the right fit for your level and what you are working on."
      },
      {
        "q": "What languages do you teach in?",
        "a": "English and Mandarin. My Spanish is a work in progress, but Mallorca is a great place to practice both."
      },
      {
        "q": "What's the difference between your Solo and Group packages?",
        "a": "Solo is a private session for one golfer. Group packages are for 2 to 3 golfers, small enough that I can still play alongside everyone and give real attention throughout the round."
      },
      {
        "q": "Do you work with juniors?",
        "a": "Yes. I work with juniors at all levels, including complete beginners. We adapt the difficulty of the course so they are learning from a real golf environment without being overwhelmed. Same approach, scaled to where they are."
      },
      {
        "q": "What qualifications does Andy have?",
        "a": "PGA Advanced Professional. TPI Level 3. Trackman Master. Swing Catalyst. SAM PuttLab. GCQuad. Phil Kenyon putting certification. Mike Adams. US Kids Top 50 Worldwide instructor. Full details on the about page."
      },
      {
        "q": "How far in advance do I need to book?",
        "a": "3 to 4 weeks is typical, but there is flexibility. Get in touch and we will find something that works."
      },
      {
        "q": "Will it just be us on the course?",
        "a": "I always aim to book a tee time that gives us the most personal round possible. On busy days the course itself may pair a one or two ball with another player or two. That decision sits with the club, not me. If you'd like the tee time kept for your party only, I can reserve the spare slots too (the course charges extra for those, confirmed before you book). Either way, the coaching, the buggy or walk round, the pre-round questionnaire, the round-feedback video, and the written notes afterwards are all focused on just you on the day."
      },
      {
        "q": "What happens if it rains?",
        "a": "Mallorca gets over 300 days of sunshine a year, so it rarely comes up. If a session does get rained out, we will rearrange at no extra cost."
      }
    ]
  },
  "finalCta": {
    "eyebrow": "Want this inside your trip?",
    "title": "Tell me your dates and I'll recommend the right format.",
    "body": "Send dates, group size, handicap range, and any courses you are considering. I will tell you whether Play With A Pro works best as a standalone day or as part of a planned trip.",
    "primaryCta": "Enquire →",
    "primaryHref": "/contact",
    "secondaryCta": "Message on WhatsApp",
    "secondaryHref": "https://wa.me/34624466702?text=Hi%20Andy%2C%20I%27m%20interested%20in%20a%20golf%20day%20in%20Mallorca.",
    "tertiaryCta": "Explore the Courses",
    "tertiaryHref": "/golf-courses"
  }
}
}

function getMergedPlayWithAProContent(locale = 'en') {
  if (locale === 'en') return PLAY_WITH_A_PRO_CONTENT.en
  const localized = getLocalizedPlayWithAProContent(locale)
  return localized
    ? {
        ...mergeLocalizedContent(PLAY_WITH_A_PRO_CONTENT.en, localized),
        locale,
      }
    : PLAY_WITH_A_PRO_CONTENT.en
}

export function getPlayWithAProContent(locale = 'en') {
  const content = normalizeMojibakeDeep(getMergedPlayWithAProContent(locale))
  const soloOffer = getOfferById(OFFER_IDS.solo, locale)
  const groupOffer = getOfferById(OFFER_IDS.group, locale)
  const packages = content?.packages
    ? {
        ...content.packages,
        tiers: (content.packages.tiers || []).map((tier, index) => ({
          ...tier,
          price: index === 0 ? soloOffer.priceDisplay : index === 1 ? groupOffer.priceDisplay : tier.price,
        })),
        multiDay: content.packages.multiDay
          ? {
              ...content.packages.multiDay,
              detail: getPlayMultiDayDetail(locale),
            }
          : content.packages.multiDay,
      }
    : content?.packages

  return {
    ...content,
    hero: content?.hero
      ? {
          ...content.hero,
          body: locale === 'en' && content.hero.body ? content.hero.body : getPlayHeroBody(locale),
        }
      : content?.hero,
    packages,
  }
}
