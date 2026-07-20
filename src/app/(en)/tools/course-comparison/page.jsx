import { permanentRedirect } from 'next/navigation'

// The standalone comparison tool was merged into the green-fees tool
// (now "Compare Mallorca Golf Courses"), which has the all-24 table plus a
// head-to-head mode. Keep this path working with a permanent redirect.
export const metadata = {
  robots: { index: false, follow: true },
}

export default function CourseComparisonRedirect() {
  permanentRedirect('/tools/green-fees')
}
