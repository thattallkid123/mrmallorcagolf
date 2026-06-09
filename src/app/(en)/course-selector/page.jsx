import PageLayout from '../../../components/PageLayout'
import CourseSelectorClient from '../course-selector/CourseSelectorClient'
import { buildPageMetadata } from '../../../lib/page-metadata'

export const metadata = buildPageMetadata('/course-selector', 'en', {
  title: 'Mallorca Golf Course Selector',
  description:
    'Not sure which Mallorca course to play? Answer 5 quick questions and get a personalised recommendation from a PGA professional who plays them all.',
})

export default function CourseSelectorPage() {
  return (
    <PageLayout lang="en" navTransparent={false}>
      <CourseSelectorClient />
    </PageLayout>
  )
}
