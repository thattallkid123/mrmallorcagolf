export const GOLF_COURSES_CONTENT = {
  en: {
    locale: 'en',
    hero: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Golf Courses in Mallorca',
      title: "Golf in Mallorca 2026 - An Insider's Guide",
      tags: [
        '22 Courses Covered',
        'Green Fees Updated 2026',
        'Expert First-Hand Reviews',
        'PGA Professional',
      ],
    },
    ui: {
      allCourses: 'All Courses',
      expertPicks: '★ Expert Picks Only',
      southwest: 'Southwest',
      south: 'South',
      east: 'East',
      north: 'North',
      yourGuide: 'Your guide',
      playWithAndy: 'Play with Andy',
      credentials:
        'UK PGA Advanced Professional · Trackman Master · TPI Level 3 · 11 years coaching in Shanghai · Based in Mallorca since 2025',
      intro1:
        'Mallorca has more outstanding golf than most visitors realise. Twenty-two courses, several of genuine European Tour standard, in conditions that stay immaculate through winter.',
      intro2:
        "I'm working my way through every course on the island - playing them, reviewing them honestly. Below is what I know so far.",
      sidebarH3: 'Want to play one of these courses with a UK PGA professional alongside you?',
      sidebarP: 'Private round, everything arranged. Son Gual and Alcanada are the primary venues.',
      sidebarBtn: 'Get in touch →',
      quickPicksTitle: 'Quick picks',
      quickPicks: [
        'Best overall: Son Gual',
        'Most scenic: Alcanada',
        'Best in Spain: Son Muntaner',
        'Most challenging: Golf de Andratx',
        'Best for beginners: Son Quint',
        'Best value: Golf Pollensa',
        'Best East coast: Pula or Canyamel',
      ],
      ctaEyebrow: 'Want to play one of these?',
      ctaH2: 'Private round, everything arranged, UK PGA professional throughout.',
      ctaP:
        "Tell me which course interests you, your dates, and your handicap. I'll come back with a recommendation within 24 hours.",
      seeExperiences: 'See the Experiences →',
      getInTouch: 'Get in touch',
      courseNote: '',
      geoEyebrow: 'Where the courses sit',
      geoH2: 'Mallorca has more outstanding golf than most visitors realise.',
      geoP1:
        "Twenty-two courses ranging from genuine European Tour venues to quieter, less-visited gems. Green fees from €20 to over €200. I'm a UK PGA Advanced Professional based on the island, working my way through every course - all reviews are well-researched, with my own personal notes for the courses I've played.",
      geoP2:
        'Best time to play: October-November and February-April. The island plays year-round - in January, when courses in much of the rest of Europe are unplayable, the fairways here are immaculate.',
      geoRegions: [
        {
          region: 'Palma',
          courses: 'Son Gual · Son Muntaner · Son Vida · Son Quint · T Golf Puntiró · Son Termes · Palma Pitch & Putt',
        },
        {
          region: 'Southwest',
          courses: 'Santa Ponsa 1 · Santa Ponsa 2 · Santa Ponsa 3 · T Golf Calvià · Bendinat · Golf de Andratx',
        },
        {
          region: 'South',
          courses: 'Golf Maioris · Son Antem East · Son Antem West',
        },
        {
          region: 'East',
          courses: 'Capdepera · Canyamel · Pula · Son Servera',
        },
        {
          region: 'North',
          courses: 'Alcanada · Golf Pollensa',
        },
      ],
    },
  },
}

export function getGolfCoursesContent(locale = 'en') {
  return GOLF_COURSES_CONTENT[locale] || GOLF_COURSES_CONTENT.en
}
