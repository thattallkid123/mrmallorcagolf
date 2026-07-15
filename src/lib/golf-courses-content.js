import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedGolfCoursesContent } from './golf-courses-content-localized.js'

export const GOLF_COURSES_CONTENT = {
  "en": {
    "locale": "en",
    "hero": {
      "breadcrumbHome": "Home",
      "breadcrumbCurrent": "Golf Courses in Mallorca",
      "title": "Golf Courses in Mallorca: My 2026 Guide",
      "tags": [
        "24 Courses Covered",
        "Green Fees Updated 2026",
        "Played and Researched Properly",
        "PGA Professional"
      ],
      "lead": "If you are deciding where to play first, start here. Use the explorer to narrow the island down by area, price, and difficulty, then send me your dates, handicap, and hotel area and I'll point you towards the right shortlist."
    },
    "regionHeaders": {
      "palma": {
        "title": "Palma",
        "subtitle": "Courses around the city",
        "count": "8 courses"
      },
      "southwest": {
        "title": "Southwest",
        "subtitle": "Santa Ponsa & Camp de Mar",
        "count": "6 courses"
      },
      "south": {
        "title": "South",
        "subtitle": "Llucmajor area",
        "count": "3 courses"
      },
      "east": {
        "title": "East",
        "subtitle": "Worth basing yourself here",
        "count": "6 courses"
      },
      "north": {
        "title": "North",
        "subtitle": "Alcanada alone justifies the drive",
        "count": "2 courses"
      }
    },
    "ui": {
      "allCourses": "All Courses",
      "credentials": "UK PGA Advanced Professional · Trackman Master Certified · TPI Level 3 · 11 years in Shanghai · Based in Mallorca since March 2025",
      "intro1": "Mallorca has more good golf than most visitors realise. There are 24 courses on the island and 21 are open to green-fee visitors, which is more depth than most people expect from one island.",
      "intro2": "I'm working my way through every course on the island, playing them and reviewing them honestly. Son Antem West is now in that played-and-reviewed list. Below is what I know so far.",
      "explorerIntro": "Start with region, price, and difficulty to narrow the courses down fast. Each card shows price, difficulty, rating, and any dynamic pricing or handicap requirement before booking.",
      "ctaEyebrow": "Narrowed it down?",
      "ctaH2": "Tell Andy the trip details and get a proper course recommendation back.",
      "ctaP": "Send your dates, handicap, hotel area, and the two or three courses you are considering. I'll come back personally within 24 hours with the clearest fit.",
      "seeExperiences": "See the Experiences ->",
      "getInTouch": "Get in touch",
      "courseNote": "",
      "faqEyebrow": "Questions",
      "faqTitle": "Common questions",
      "faqIntro": "A few quick answers before you shortlist or book.",
      "faq": [
        {
          "q": "How many golf courses are in Mallorca?",
          "a": "Mallorca has 24 golf courses in total. Of those, 21 are open to green-fee visitors without membership. The island covers five main regions: Palma, Southwest, South, East, and North."
        },
        {
          "q": "What is the best golf course in Mallorca?",
          "a": "There is no single best course. It depends on what you want from the round. For a proper championship test, look at the highest-difficulty courses. For scenery, filter for the coastal and mountain settings. For tour-level conditioning, sort by my rating. Send me your handicap and what matters most to you and I will point you at the right shortlist."
        },
        {
          "q": "How much does it cost to play golf in Mallorca?",
          "a": "Standard full-size rounds range from around €55 at the value end up to around €250 at the top in peak season. Palma Pitch & Putt is cheaper, but it is a separate short-course option rather than a typical visitor round. Most visitor rounds fall between €85 and €165. Buggy hire is typically €30 to €40 extra."
        },
        {
          "q": "Do you need a handicap certificate to play golf in Mallorca?",
          "a": "Most courses welcome all levels, but some require a valid handicap certificate or set a maximum handicap. On the course cards above I have flagged the ones with a handicap requirement and the limit that applies, so you can see it before you book. If you are unsure about your certificate, tell me the courses you are considering and I will check for you."
        }
      ],
      "toolCta": {
        "eyebrow": "Shortcut",
        "title": "Want a shortlist instead of reading all 24 course reviews?",
        "body": "Use the course selector if you know your handicap, budget, base, and trip style. It will narrow the island down before you start comparing tee times.",
        "href": "/tools/course-selector",
        "cta": "Find my courses",
        "note": "No email needed to use the tool. Only enter it if you want the result sent to you."
      }
    }
  }
}

function getMergedGolfCoursesContent(locale = 'en') {
  const localized = getLocalizedGolfCoursesContent(locale)

  return locale === 'en' || !localized
    ? GOLF_COURSES_CONTENT.en
    : {
        ...mergeLocalizedContent(GOLF_COURSES_CONTENT.en, localized),
        locale,
      }
}

export function getGolfCoursesContent(locale = 'en') {
  return getMergedGolfCoursesContent(locale)
}
