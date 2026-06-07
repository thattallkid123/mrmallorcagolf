import PageLayout from '../../../components/PageLayout'
import CourseSelectorClient from '../course-selector/CourseSelectorClient'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const metadata = buildPageMetadata('/course-selector', 'en', {
  title: 'Mallorca Golf Course Selector',
  description:
    'Answer five quick questions and get a first shortlist of Mallorca golf courses matched to your group, budget, timing, and trip style.',
})

export default function CourseSelectorPage() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <CourseSelectorClient />
    </PageLayout>
  )
}
