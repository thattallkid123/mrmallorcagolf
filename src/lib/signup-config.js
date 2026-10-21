export const PLANNING_NOTES_GROUP_ID = '193787639776675209'

export const PLANNING_NOTES_MAILERLITE_ACTION = 'https://assets.mailerlite.com/jsonp/2404105/forms/189284603205256243/subscribe'

export const COURSE_SELECTOR_MAILERLITE_URL = 'https://preview.mailerlite.io/forms/2404105/189284603205256243/share'

export const COURSE_SELECTOR_MAILERLITE_ACTION = PLANNING_NOTES_MAILERLITE_ACTION

export const COURSE_SELECTOR_FORM_NAME = 'Mallorca Golf Planning Notes'

export const COURSE_SELECTOR_GROUP_NAME = 'Mallorca Golf Planning Notes'

export const LEAD_MAGNET_MAILERLITE_ACTION = 'https://assets.mailerlite.com/jsonp/2404105/forms/190189762313717408/subscribe'

export const LEAD_MAGNET_GROUPS = {
  'cost-guide': '190205560073749928',
  'trip-planner': '190205564290074522',
  'beginners-guide': '190205567197775102',
  'course-comparison': '190205569293878890',
}

// Request records only: these groups have no marketing automations attached.
export const PDF_REQUEST_LEADS_GROUP_ID = '201682395025376464'
export const PDF_REQUEST_GROUPS = {
  'cost-guide': '201682395267597568',
  'course-comparison': '201682395598947644',
  'trip-planner': '201682395841169303',
  'beginners-guide': '201682396088632499',
}

export const LEAD_MAGNETS = {
  'cost-guide': {
    slug: 'cost-guide',
    title: 'Mallorca Golf Cost Breakdown 2026',
    eyebrow: 'Free Download',
    description:
      'Green fees, shared buggy hire and daily licences across 24 courses, with a worked three-round budget and a checklist of other costs.',
    bullets: [
      'Peak vs. low-season pricing for every major course',
      'What extras actually cost on the day',
      'Where to find the best value rounds',
    ],
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/cost-guide.pdf',
    buttonLabel: 'Send me the breakdown',
    metaTitle: 'Mallorca Golf Cost Guide 2026',
    metaDescription:
      'Download the free Mallorca golf cost breakdown. Real green fees, buggy hire, and hidden costs - course by course.',
  },
  'trip-planner': {
    slug: 'trip-planner',
    title: '7-Day Mallorca Golf Itinerary',
    eyebrow: 'Free Download',
    description:
      'A sample week from Palma with four rounds, a rest day, approximate drive times, and named hotel and dining ideas. Adapt it to your dates and group.',
    bullets: [
      'Which courses to play on which days (and why)',
      'Approximate drive times from a Palma base',
      'Local tips from a PGA pro based on the island',
    ],
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/trip-planner.pdf',
    buttonLabel: 'Send me the itinerary',
    metaTitle: '7-Day Mallorca Golf Itinerary',
    metaDescription:
      'A free 7-day Mallorca golf itinerary from a local PGA pro. Four rounds, a rest day, drive times and hotel and dining ideas.',
  },
  'beginners-guide': {
    slug: 'beginners-guide',
    title: "Beginner's Guide to Playing Golf in Mallorca",
    eyebrow: 'Free Download',
    description:
      "Course access, handicap certificates and five starting options for less-experienced golfers, with practical advice for booking a round.",
    bullets: [
      'Five starting options and their access requirements',
      'What to wear, bring and check before playing',
      'How to get the most from your round as a beginner',
    ],
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/beginners-guide.pdf',
    buttonLabel: 'Send me the guide',
    metaTitle: "Beginner's Guide to Mallorca Golf",
    metaDescription:
      'New to golf in Mallorca? Download the free beginner guide - which courses to play, what to expect, and how to enjoy every round.',
  },
  'course-comparison': {
    slug: 'course-comparison',
    title: 'Mallorca Golf Course Comparison Chart',
    eyebrow: 'Free Download',
    description:
      "A side-by-side comparison of all 24 Mallorca courses: green fees, difficulty, holes, walkability, travel from Palma and access requirements.",
    bullets: [
      'All 24 courses on the island, compared',
      'Green fees, difficulty and walking guidance at a glance',
      "Handicap, certificate and visitor-access requirements",
    ],
    downloadUrl: 'https://www.mrmallorcagolf.com/downloads/course-comparison.pdf',
    buttonLabel: 'Send me the chart',
    metaTitle: 'Mallorca Golf Course Comparison',
    metaDescription:
      "Compare all 24 Mallorca golf courses side by side. Free chart: green fees, difficulty, walking and visitor access.",
  },
}
