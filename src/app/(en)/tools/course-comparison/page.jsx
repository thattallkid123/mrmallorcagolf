import PageLayout from '../../../../components/PageLayout'
import CourseComparisonClient from './CourseComparisonClient'

export const metadata = {
  title: 'Compare Mallorca Golf Courses — Fees, Par, Difficulty & More',
  description: "Compare all 24 Mallorca golf courses side-by-side. See green fees, par, difficulty, handicap requirements, walking rules, buggy costs, and Andy's verdict for each course.",
  robots: { index: true, follow: true },
}

export default function CourseComparisonPage() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <CourseComparisonClient />
    </PageLayout>
  )
}
