import { GOLF_COURSE_DATA } from './golf-courses-data.js'
import { getCoursePriceMeta } from './golf-courses-helpers.js'
import { getScorecardByCourseName } from './scorecard-data.js'
import { mergeLocalizedContent } from './guide-content-localization.js'
import { getLocalizedGuidesContent } from './guides-content-localized.js'

export const GUIDES_CONTENT = {
  en: {
  "locale": "en",
  "hero": {
    "breadcrumbHome": "Home",
    "breadcrumbCurrent": "Guides",
    "title": "Mallorca Golf. Honest Guides.",
    "lead": "Course reviews, trip planning, green fees, and when to visit, written by a PGA Professional who plays here every week.",
    "tags": [
      "Updated 2026",
      "First-Hand Reviews",
      "PGA Professional"
    ]
  },
  "liveGuides": [
    {
      "slug": "alcanada-review",
      "badge": "Course Review",
      "img": "/images/alcanada-card.webp",
      "imgPosition": "center 50%",
      "title": "Club de Golf Alcanada - A PGA Professional's Honest Review (2026)",
      "intro": "The course I take people to when I want them to come home with a story. The lighthouse changes everything.",
      "readTime": "7 min read",
      "keywords": "Coastal · Par 72 · €115-230 · Rolex Challenge Tour Grand Final"
    },
    {
      "slug": "son-gual-review",
      "badge": "Course Review",
      "img": "/images/son-gual-card.webp",
      "imgPosition": "center 40%",
      "title": "Son Gual Golf Mallorca - A PGA Professional's Honest Review (2026)",
      "intro": "My most-played course on the island. The wind, the greens, the closing stretch, and why Obama and Nadal both keep coming back.",
      "readTime": "7 min read",
      "keywords": "Championship · Par 72 · €115-165 · Handicap required"
    },
    {
      "slug": "t-golf-calvia-review",
      "badge": "Course Review",
      "badgeGold": true,
      "img": "/images/t-golf-calvia-card.webp",
      "imgPosition": "center 40%",
      "title": "T Golf Calvià Review - A PGA Professional's Honest Take (2026)",
      "intro": "Fifteen lakes, windmills throughout, and some of the purest greens on the island. One of the best-conditioned courses in Mallorca. A 9 out of 10.",
      "readTime": "6 min read",
      "keywords": "Par 72 · €80-210 · Southwest Mallorca · 15 lakes"
    },
    {
      "slug": "son-muntaner-review",
      "badge": "Course Review",
      "badgeGold": true,
      "img": "/images/son-muntaner-card.webp",
      "imgPosition": "center 30%",
      "title": "Golf Son Muntaner, Mallorca. A PGA Professional's Honest Review (2026)",
      "intro": "Best Golf Course in Spain at the 2025 World Golf Awards. I played it on a full tee sheet on a Saturday morning. Here's what I found.",
      "readTime": "6 min read",
      "keywords": "Championship · Par 72 · €110-260 · Buggy included"
    },
    {
      "slug": "santa-ponsa-1-review",
      "badge": "Course Review",
      "img": "/images/santa-ponsa-card.webp",
      "imgPosition": "center 40%",
      "title": "Golf Santa Ponsa 1, Mallorca - A PGA Professional's Honest Review (2026)",
      "intro": "One of Europe's longest courses, real DP World Tour history, and one of the easiest places on the island to enjoy hitting driver.",
      "readTime": "6 min read",
      "keywords": "Championship · Par 72 · €77-126 · Public access"
    },
    {
      "slug": "golf-andratx-review",
      "badge": "Course Review",
      "badgeGold": true,
      "img": "/images/andratx-card.webp",
      "imgPosition": "center 40%",
      "title": "Golf de Andratx Review - A PGA Professional's Honest Take (2026)",
      "intro": "The longest par 5 in Spain, mountain views over the southwest, and a layout that rewards course management far more than length. A 7.5 out of 10.",
      "readTime": "6 min read",
      "keywords": "Mountain course · Par 72 · €90-140 · Southwest Mallorca"
    },
    {
      "slug": "son-antem-west-review",
      "badge": "Course Review",
      "badgeGold": true,
      "img": "/images/courses/son-antem-west.webp",
      "imgPosition": "center 45%",
      "title": "Son Antem West Golf Club, Mallorca - A PGA Professional's Honest Review (2026)",
      "intro": "A resort course 15-20 minutes from Palma. Good conditioning, open countryside, and a layout that suits a wide range of players.",
      "readTime": "6 min read",
      "keywords": "Resort course - Par 72 - €109-135 - 15-20 min from Palma"
    },
    {
      "slug": "son-termes-review",
      "badge": "Course Review",
      "img": "/images/courses/son-termes.webp",
      "imgPosition": "center 40%",
      "title": "Son Termes Golf, Mallorca: A PGA Professional's Honest Review (2026)",
      "intro": "Mountain views above Palma, tighter driving lines than people expect, and one of the most distinctive layouts at this price point on the island.",
      "readTime": "5 min read",
      "keywords": "Mountain course - Par 70 - €90-110 - 20 min from Palma"
    },
    {
      "slug": "play-with-a-pro-explained",
      "badge": "The Experience",
      "img": "/images/pwap-hero-mandarin.jpg",
      "imgPosition": "center 40%",
      "title": "What \"Play With A Pro\" Actually Looks Like",
      "intro": "A full day on course with a PGA professional. What happens, what changes, and what people take home that they did not expect.",
      "readTime": "5 min read",
      "keywords": "Play With A Pro · Full day · On-course coaching"
    },
    {
      "slug": "on-course-coaching-mallorca",
      "badge": "Coaching Guide",
      "badgeGold": true,
      "img": "/images/son-gual-blog/sg-swing.webp",
      "imgPosition": "center 40%",
      "title": "On-Course Golf Coaching in Mallorca. Play Better, Right Now",
      "intro": "Most lessons happen on a range. On-course coaching happens where the game actually is. Here is what it involves and what to expect.",
      "readTime": "5 min read",
      "keywords": "On-course coaching · PGA Advanced Professional · Real situations"
    },
    {
      "slug": "best-golf-courses-mallorca",
      "badge": "Guide",
      "img": "/images/blog-best-golf-courses/Son Gual.webp",
      "imgPosition": "center 50%",
      "title": "The Best Golf Courses in Mallorca - A PGA Professional's Honest Ranking",
      "intro": "Twenty-four courses on the island. Here is how I would rank them for a visitor with limited time and high standards.",
      "readTime": "8 min read",
      "keywords": "All levels · Green fees compared · Updated 2026"
    },
    {
      "slug": "is-mallorca-good-for-golf",
      "badge": "Guide",
      "img": "/images/blog-is-mallorca-good/Son Gual.webp",
      "imgPosition": "center 40%",
      "title": "Is Mallorca Good for Golf? An Honest Answer from Someone Who Lives Here",
      "intro": "The honest version - what the island does better than Portugal, where it falls short, and who it suits.",
      "readTime": "5 min read",
      "keywords": "Mallorca vs Portugal · Course quality · For all levels"
    },
    {
      "slug": "best-time-play-golf-mallorca",
      "badge": "Guide",
      "img": "/images/blog-best-time-play/Son Severa Sunny Golf.webp",
      "imgPosition": "center 50%",
      "title": "The Best Time to Play Golf in Mallorca - Month by Month",
      "intro": "October is the month I would choose. Here is why, and what each month actually delivers in terms of weather, price, and crowds.",
      "readTime": "6 min read",
      "keywords": "Weather · Green fees by season · Crowds"
    },
    {
      "slug": "golf-cost-mallorca",
      "badge": "Guide",
      "img": "/images/blog-golf-cost/Alcanada.webp",
      "imgPosition": "center 40%",
      "title": "How Much Does Golf Cost in Mallorca? Green Fees, Hire, and Hidden Costs",
      "intro": "The full picture on what a golf trip here actually costs - green fees, hire, caddies, and where you can save without compromising.",
      "readTime": "5 min read",
      "keywords": "€55-260 green fees · Hire · Caddies · 2026 prices"
    },
    {
      "slug": "golf-trip-planning-mallorca",
      "badge": "Guide",
      "img": "/images/blog-trip-planning/Son Gual.webp",
      "imgPosition": "center 50%",
      "title": "Planning a Golf Trip to Mallorca - Everything You Need to Know",
      "intro": "Flights, courses, staying near the golf, getting between venues. The practical guide I wish existed when I moved here.",
      "readTime": "7 min read",
      "keywords": "Trip planning · Where to stay · Getting around"
    },
    {
      "slug": "golf-club-hire-mallorca",
      "badge": "Practical Guide",
      "img": "/images/blog-golf-club-hire/Callaway Rogue ST Max.webp",
      "imgPosition": "center 50%",
      "title": "Golf Club Hire in Mallorca - Everything You Need to Know (2026)",
      "intro": "Should you bring your own clubs? Which hire companies are worth using? What should you pay? Answered honestly.",
      "readTime": "6 min read",
      "keywords": "Club hire · Bring your own · Prices · Companies"
    }
  ],
  "comingSoonGuides": [],
  "comingSoonLabel": "Coming Soon",
  "reviewsHeading": "Course Reviews",
  "articlesHeading": "Guides & Articles",
  "finalCta": {
    "eyebrow": "Ready to make it real?",
    "title": "The right courses, booked in the right order.",
    "body": "Tell me your dates, group size, and what you want from the trip. I will reply personally within 24 hours with the clearest next step.",
    "primaryCta": "Plan Your Trip",
    "secondaryCta": "Play With A Pro"
  }
}
}

const COURSE_REVIEW_SLUGS = new Set([
  'alcanada-review',
  'son-gual-review',
  't-golf-calvia-review',
  'son-muntaner-review',
  'santa-ponsa-1-review',
  'golf-andratx-review',
  'son-termes-review',
  'son-antem-west-review',
])

const GUIDE_PRICE_LABELS = {
  zh: { currency: '\u20ac' },
  default: { currency: '\u20ac' },
}

function getGuideCourseBySlug(slug) {
  return GOLF_COURSE_DATA.flatMap((region) => region.courses).find((course) => course.reviewSlug === slug) || null
}

function formatGuidePriceSegment(locale, peakPrice, lowPrice) {
  const labels = GUIDE_PRICE_LABELS[locale] || GUIDE_PRICE_LABELS.default
  if (Number.isFinite(lowPrice) && Number.isFinite(peakPrice)) return `${labels.currency}${lowPrice}-${peakPrice}`
  if (Number.isFinite(peakPrice)) return `${labels.currency}${peakPrice}`
  return null
}

function formatGuideParSegment(locale, par) {
  if (!Number.isFinite(par)) return null
  return locale === 'zh' ? `\u6807\u51c6\u6746${par}` : `Par ${par}`
}

function syncGuideKeywordFacts(locale, guide) {
  if (!COURSE_REVIEW_SLUGS.has(guide.slug)) return guide
  const course = getGuideCourseBySlug(guide.slug)
  if (!course) return guide
  const par = getScorecardByCourseName(course.name)?.par
  const { peakPrice, lowPrice } = getCoursePriceMeta(course)
  const separator = guide.keywords?.includes(' \u00b7 ') ? ' \u00b7 ' : ' - '
  const parts = String(guide.keywords || '').split(separator)
  const nextParts = parts.map((part) => {
    if (/(?:Par|\u6807\u51c6\u6746|\u6a19\u6e96\u687f)\s*\d+/i.test(part)) return formatGuideParSegment(locale, par) || part
    if (/(?:\u20ac|EUR|\u00e2\u201a\u00ac)/i.test(part)) return formatGuidePriceSegment(locale, peakPrice, lowPrice) || part
    return part
  })
  return {
    ...guide,
    keywords: nextParts.join(separator),
  }
}

function getMergedGuidesContent(locale = 'en') {
  if (locale === 'en') return GUIDES_CONTENT.en
  const localized = getLocalizedGuidesContent(locale)
  return localized
    ? {
        ...mergeLocalizedContent(GUIDES_CONTENT.en, localized),
        locale,
      }
    : GUIDES_CONTENT.en
}

export function getGuidesContent(locale = 'en') {
  const content = getMergedGuidesContent(locale)
  return {
    ...content,
    liveGuides: (content.liveGuides || []).map((guide) => syncGuideKeywordFacts(locale, guide)),
  }
}
