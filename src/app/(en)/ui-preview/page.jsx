import UiPreviewClient from './UiPreviewClient'
import PageLayout from '../../../components/PageLayout'
import { getGuidesContent } from '../../../lib/guides-content'
import { PWAP_PHOTOS } from '../../../lib/pwap-photos'

export const metadata = {
  title: 'UI Preview',
  description: 'Local-only UI preview for Mr Mallorca Golf page upgrades.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function UiPreviewPage() {
  return (
    <PageLayout lang="en" navTransparent={false} showWhatsAppButton={false}>
      <UiPreviewClient photos={PWAP_PHOTOS} guides={getGuidesContent('en')} />
    </PageLayout>
  )
}
