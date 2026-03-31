export const GUIDES_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Guides',
      title: 'Mallorca Golf. Honest Guides.',
      lead:
        'Course reviews, trip planning, green fees, and when to visit - written by a PGA Professional who plays here every week.',
      tags: ['Updated 2026', 'First-Hand Reviews', 'PGA Professional'],
    },
    liveGuides: [
      {
        slug: 'son-gual-review',
        badge: 'Course Review',
        title: "Son Gual Golf Mallorca - A PGA Professional's Honest Review (2026)",
        intro:
          'My most-played course on the island. The wind, the greens, the closing stretch - and why Obama and Nadal both keep coming back.',
        readTime: '7 min read',
        keywords: 'Championship · Par 72 · €80-165 · Handicap required',
      },
      {
        slug: 'alcanada-review',
        badge: 'Course Review',
        title: "Club de Golf Alcanada - A PGA Professional's Honest Review (2026)",
        intro:
          'The course I take people to when I want them to come home with a story. The lighthouse changes everything.',
        readTime: '7 min read',
        keywords: 'Coastal · Par 72 · €115-220 · Rolex Challenge Tour Grand Final',
      },
      {
        slug: 'santa-ponsa-1-review',
        badge: 'Course Review',
        title: "Golf Santa Ponsa 1, Mallorca - A PGA Professional's Honest Review (2026)",
        intro:
          "One of Europe's longest courses, DP World Tour history, and a course that genuinely helps you rediscover your driver.",
        readTime: '6 min read',
        keywords: 'Championship · Par 72 · €77-126 · Public access',
      },
    ],
    comingSoonGuides: [
      {
        slug: 'a-day-at-son-gual',
        badge: 'The Experience',
        title: 'A Day at Son Gual with a PGA Professional',
        intro:
          "What actually happens when you spend a full day on Mallorca's finest course with a coach who plays it most weeks.",
        readTime: '5 min read',
        keywords: 'Son Gual · Play with a Pro · Full day experience',
      },
      {
        slug: 'best-golf-courses-mallorca',
        badge: 'Guide',
        title: "The Best Golf Courses in Mallorca - A PGA Professional's Honest Ranking",
        intro:
          'Twenty-two courses on the island. Here is how I would rank them for a visitor with limited time and high standards.',
        readTime: '8 min read',
        keywords: 'All levels · Green fees compared · Updated 2026',
      },
      {
        slug: 'is-mallorca-good-for-golf',
        badge: 'Guide',
        title: 'Is Mallorca Good for Golf? An Honest Answer from Someone Who Lives Here',
        intro:
          'The honest version - what the island does better than Portugal, where it falls short, and who it suits.',
        readTime: '5 min read',
        keywords: 'Mallorca vs Portugal · Course quality · For all levels',
      },
      {
        slug: 'best-time-play-golf-mallorca',
        badge: 'Guide',
        title: 'The Best Time to Play Golf in Mallorca - Month by Month',
        intro:
          'October is the month I would choose. Here is why, and what each month actually delivers in terms of weather, price, and crowds.',
        readTime: '6 min read',
        keywords: 'Weather · Green fees by season · Crowds',
      },
      {
        slug: 'golf-cost-mallorca',
        badge: 'Guide',
        title: 'How Much Does Golf Cost in Mallorca? Green Fees, Hire, and Hidden Costs',
        intro:
          'The full picture on what a golf trip here actually costs - green fees, hire, caddies, and where you can save without compromising.',
        readTime: '5 min read',
        keywords: '€77-220 green fees · Hire · Caddies · 2026 prices',
      },
      {
        slug: 'golf-trip-planning-mallorca',
        badge: 'Guide',
        title: 'Planning a Golf Trip to Mallorca - Everything You Need to Know',
        intro:
          'Flights, courses, staying near the golf, getting between venues. The practical guide I wish existed when I moved here.',
        readTime: '7 min read',
        keywords: 'Trip planning · Where to stay · Getting around',
      },
    ],
    comingSoonLabel: 'Coming Soon',
    finalCta: {
      eyebrow: 'Ready to play?',
      title: 'A private round on one of these courses, with a PGA Professional alongside you.',
      body: "Tell me your dates and what you're looking for. I'll come back personally within 24 hours.",
      primaryCta: 'See the Experiences →',
      secondaryCta: 'Get in Touch',
    },
  },
}

export function getGuidesContent(locale = 'en') {
  return GUIDES_CONTENT[locale] || GUIDES_CONTENT.en
}
