export const ABOUT_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'About',
      title: 'The Professional Behind the Experience.',
      tags: [
        'PGA Advanced Professional',
        'Trackman Master Certified',
        'TPI Level 3',
        'Based in Mallorca',
      ],
    },
    chapters: [
      {
        label: 'Early career',
        title: 'Following the best coaches across two continents.',
        paragraphs: [
          'I grew up playing golf, got down to a +1 handicap, but knew early that coaching was where I wanted to be. After studying Applied Golf Management at the University of Birmingham and qualifying as a PGA Professional, I started building a career following the most experienced coaches around Europe and North America.',
          "The early years took me to some remarkable venues. I coached at Pebble Beach, Doral, Evian during the women's major, and The Open Championship. I spent a season coaching aboard a cruise ship on a world voyage - over forty countries, golf in places most professionals never get near.",
        ],
        quote:
          'Every environment was different. Every golfer was different. That variety, early on, is what shaped everything that came after.',
      },
      {
        label: 'Shanghai, 2014-2025',
        title: 'Eleven years at the top of the game in China.',
        paragraphs: [
          'In 2014 I moved to Shanghai. I went with specific goals - to set up the teaching programme for the best academy in China - and stayed for eleven successful years.',
          "China in that period was an extraordinary environment in which to coach. Lessons were running at around €500 per hour. Clients expected real, measurable improvement. That was the standard. The professional standard required was as high as anywhere I'd worked.",
          "I became the country's first Trackman Master, coached players from the Chinese national team, and built a coaching presence on Douyin that reached hundreds of millions of views. I also became fluent in Mandarin, which changed the depth of coaching relationship I could build with players and families.",
          "After eleven years, I'd achieved what I went for. My first daughter was born in 2023. The pull of being closer to home, and the chance to build something of my own, became impossible to ignore.",
        ],
      },
      {
        label: 'Mallorca, 2025-',
        title: 'Twenty-two courses, one island, and a coaching philosophy sharpened by playing again.',
        paragraphs: [
          "I moved to Mallorca in March 2025 with my wife Yina. Closer to family in the UK, year-round sunshine, and a genuinely exceptional golf island that most people don't give enough credit to.",
          'I started playing properly again. Working my way through every course on the island. Rediscovering what it feels like to stand on a first tee and actually care about the score. That competitive instinct, dormant through years of full-time coaching, came back fast.',
          "A PGA Professional who spent over a decade coaching in Asia, now hosting private golf days on one of Europe's best golf islands. If that sounds like the kind of day you're looking for, get in touch.",
        ],
        quote:
          "The coaching philosophy that's come out of playing again is simple: the fastest improvements happen on the course, not the range. Real conditions, real decisions. The progress that comes from that tends to stick.",
      },
    ],
    credentialsLabel: 'Credentials',
    credentials: [
      { title: 'UKPGA Advanced Professional', detail: 'Over 15,000 hours of coaching given' },
      { title: 'Applied Golf Management Studies', detail: 'University of Birmingham' },
      { title: 'TPI Level 3 Certified', detail: 'Titleist Performance Institute' },
      { title: 'Trackman Master Certified', detail: 'First in China' },
      { title: 'US Kids Golf', detail: 'Top 50 Coach Worldwide' },
      { title: '11 years in Shanghai', detail: 'Fluent Mandarin' },
      { title: 'Chinese National Team', detail: 'Elite junior and competition coaching' },
      { title: 'Hundreds of millions of views', detail: 'Golf coaching video content on Douyin' },
      { title: 'Published Author', detail: 'Putting It Out There - A Life in Full Swing, 2016 (Amazon)', isBookLink: true },
      { title: 'Based in Mallorca', detail: 'Since March 2025' },
    ],
    sidebarCta: {
      title: "Play Mallorca's finest courses with me alongside you.",
      body: 'Private days on Son Gual, Alcanada, and beyond. Everything arranged. On-course coaching throughout.',
      button: 'See the Experiences →',
    },
    finalCta: {
      eyebrow: 'Ready to play?',
      title: 'A PGA Advanced Professional. An exceptional golf island. Your round.',
      body: "Tell me your dates, your handicap, and what you're looking for. I'll build the day around you.",
      primaryCta: 'See the Experiences →',
      secondaryCta: 'Get in touch',
    },
  },
}

export function getAboutContent(locale = 'en') {
  return ABOUT_CONTENT[locale] || ABOUT_CONTENT.en
}
