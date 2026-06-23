import Link from 'next/link'

const DEFAULT_TOOLS = {
  courseSelector: {
    eyebrow: 'Free planning tool',
    title: 'Not sure which courses fit your group?',
    body: 'Answer a few quick questions and get a shortlist matched to your handicap, budget, base, and trip style.',
    href: '/tools/course-selector',
    cta: 'Find my courses',
  },
  costCalculator: {
    eyebrow: 'Free planning tool',
    title: 'Want to estimate your own trip cost?',
    body: 'Build a realistic budget for green fees, buggies, clubs, accommodation, transport, and food before you book.',
    href: '/tools/golf-cost-calculator',
    cta: 'Estimate my trip',
  },
  dayBuilder: {
    eyebrow: 'Free planning tool',
    title: 'Want to turn this into a proper golf day?',
    body: 'Build a sample day plan around your base: course, timing, food, transport, and what to do around the round.',
    href: '/tools/golf-day-builder',
    cta: 'Build my day',
  },
  hotelRecommender: {
    eyebrow: 'Free planning tool',
    title: 'Need the right base for the golf?',
    body: 'Get hotel and area suggestions based on where you want to play, group size, budget, and trip style.',
    href: '/tools/hotel-recommender',
    cta: 'Find hotels',
  },
}

export const TOOL_PLACEMENTS = DEFAULT_TOOLS

export default function ToolPlacementCta({
  tool = DEFAULT_TOOLS.courseSelector,
  compact = false,
  slim = false,
  dark = false,
}) {
  const resolvedTool = typeof tool === 'string' ? DEFAULT_TOOLS[tool] : tool
  if (!resolvedTool) return null

  return (
    <aside
      className={`tool-placement-cta${compact ? ' tool-placement-cta--compact' : ''}${slim ? ' tool-placement-cta--slim' : ''}${dark ? ' tool-placement-cta--dark' : ''}`}
    >
      <div className="tool-placement-cta__copy">
        <p className="tool-placement-cta__eyebrow">{resolvedTool.eyebrow}</p>
        <h2>{resolvedTool.title}</h2>
        <p>{resolvedTool.body}</p>
      </div>
      <div className="tool-placement-cta__action">
        <Link href={resolvedTool.href} className="tool-placement-cta__button">
          {resolvedTool.cta}
        </Link>
        <p>No email needed to use the tool. Only enter it if you want the result sent to you.</p>
      </div>
    </aside>
  )
}
