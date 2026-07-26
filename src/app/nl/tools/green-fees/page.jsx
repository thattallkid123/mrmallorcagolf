export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'nl', {

  title: 'Mallorca green fee comparison',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function Page() {
  const lang = 'nl'
  return (
    <PageLayout lang={lang.toLowerCase()} navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang={lang.toLowerCase()} />
    </PageLayout>
  )
}
