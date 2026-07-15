import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedAboutContent } from './about-content-localized.js'

export const ABOUT_CONTENT = {
  en: {
  "locale": "en",
  "hero": {
    "homeHref": "/",
    "breadcrumbHome": "Home",
    "breadcrumbCurrent": "About",
    "title": [
      "The Professional",
      "Behind the Experience."
    ],
    "tags": [
      "PGA Advanced Professional",
      "Trackman Master Certified",
      "TPI Level 3",
      "Based in Mallorca"
    ]
  },
  "chapters": [
    {
      "label": "Early career",
      "title": "Learning from the world's best coaches in perfect coaching environments.",
      "paragraphs": [
        "I grew up playing golf, got down to a +1 handicap, but knew early that coaching was where I wanted to be. After studying Applied Golf Management at the University of Birmingham and qualifying as a PGA Professional, I started building a career following the most experienced coaches around Europe and North America.",
        "The early years took me to some remarkable venues. I coached at Pebble Beach, Doral, Evian during the women's major, and The Open Championship. I spent a season coaching aboard a cruise ship on a world voyage - over forty countries, golf in places many people never get to see."
      ],
      "quote": "Those early years mattered because no two environments were the same, and no two golfers were the same either."
    },
    {
      "label": "Shanghai, 2014-2025",
      "title": "Eleven years at the top of the game in China.",
      "paragraphs": [
        "In 2014 I moved to Shanghai. I went with specific goals - to set up the teaching programme for the best academy in China - and stayed for eleven successful years.",
        "China in that period was an extraordinary place to coach. Lessons were running at around €500 per hour, and clients expected real, measurable improvement. That was the standard, and the professional standard required was as high as anywhere I'd worked.",
        "I became the country's first Trackman Master, coached players from the Chinese national team, and built a coaching presence on Douyin that reached hundreds of millions of views. I also became fluent in Mandarin, which changed the depth of coaching relationship I could build with players and families.",
        "After eleven years, I'd achieved what I went for. My first daughter was born in 2023. The pull of being closer to home, and the chance to build something of my own, became impossible to ignore."
      ]
    },
    {
      "label": "Mallorca, 2025-",
      "title": "Twenty-four courses, one island, and a coaching philosophy sharpened by playing properly again.",
      "paragraphs": [
        "I moved to Mallorca in March 2025 with my wife Yina. Closer to family in the UK, year-round sunshine, and a golf island that still doesn't get enough credit.",
        "I started playing properly again. Working my way through every course on the island. Rediscovering what it feels like to stand on a first tee and actually care about the score. That competitive instinct, dormant through years of full-time coaching, came back fast.",
        "I'm a PGA Professional who spent over a decade coaching in Asia. Now I help visiting golfers play Mallorca properly: either as a day on the course with me, or as a full trip planned around it. The coaching background matters, but the bigger job is choosing the right courses, rhythm, and add-ons for the day or the week."
      ],
      "quote": "Playing properly again has only confirmed what I already believed: the quickest improvements usually happen on the course, not on the range."
    }
  ],
  "imageAlt": "Andy Griffiths - UK PGA Advanced Professional, Mallorca",
  "summary": "I'm a UK PGA Advanced Professional. Eleven years coaching in China - national team players, the country's first Trackman Master, hundreds of millions of views on Douyin. Before that: Pebble Beach, The Open Championship, Evian. I moved to Mallorca in March 2025 to build something of my own. I play the island's best courses most weeks and have strong opinions about all of them.",
  "credentialsLabel": "Credentials",
  "credentials": [
    {
      "title": "UKPGA Advanced Professional",
      "detail": "Over 15,000 hours of coaching given"
    },
    {
      "title": "Applied Golf Management Studies",
      "detail": "University of Birmingham"
    },
    {
      "title": "TPI Level 3 Certified",
      "detail": "Titleist Performance Institute"
    },
    {
      "title": "Trackman Master Certified",
      "detail": "First in China"
    },
    {
      "title": "US Kids Golf",
      "detail": "Top 50 Coach Worldwide"
    },
    {
      "title": "11 years in Shanghai",
      "detail": "Fluent Mandarin"
    },
    {
      "title": "Chinese National Team",
      "detail": "Elite junior and competition coaching"
    },
    {
      "title": "Hundreds of millions of views",
      "detail": "Golf coaching video content on Douyin"
    },
    {
      "title": "Published Author",
      "detail": "Putting It Out There - A Life in Full Swing, 2016 (Amazon)",
      "isBookLink": true
    },
    {
      "title": "Based in Mallorca",
      "detail": "Since March 2025"
    }
  ],
  "finalCta": {
    "eyebrow": "Ready to play?",
    "title": "All of that background. One golf island. Your round.",
    "body": "All of that shapes how I approach a day on the course in Mallorca. If you want someone who knows every course on the island and can make the most of your time here, get in touch.",
    "primaryCta": "See the play-with-a-pro experience →",
    "primaryHref": "/play-with-a-pro",
    "secondaryCta": "Get in touch",
    "secondaryHref": "/contact"
  },
  "press": {
    "eyebrow": "Featured in",
    "publication": "Majorca Daily Bulletin",
    "title": "The New Pro in Town",
    "excerpt": "How I brought eleven years of Chinese academy experience to Mallorca, and why it changes how I coach.",
    "url": "https://www.majorcadailybulletin.com/holiday/life-style/2026/05/22/142571/the-new-pro-town-andy-griffiths-brings-world-class-chinese-academy-experience-the-mediterranean.html",
    "linkText": "Read the full feature"
  },
  "careerStripProps": {}
}
}

export function getAboutContent(locale = 'en') {
  if (locale === 'en') return ABOUT_CONTENT.en
  const localized = getLocalizedAboutContent(locale)
  return localized
    ? {
        ...mergeLocalizedContent(ABOUT_CONTENT.en, localized),
        locale,
      }
    : ABOUT_CONTENT.en
}
