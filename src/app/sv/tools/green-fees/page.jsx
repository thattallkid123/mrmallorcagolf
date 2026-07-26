export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'sv', {

  title: 'Mallorca green fee comparison',
  robots: { index: true, follow: true },
})

import { buildPageMetadata } from '../../../../lib/page-metadata'
import PageLayout from '../../../../components/PageLayout'
import GreenFeesClient from '../../../(en)/tools/green-fees/GreenFeesClient'

export default function Page() {
  const lang = 'sv'
  return (
    <PageLayout lang={lang.toLowerCase()} navTransparent={false} showWhatsAppButton={false}>
      <GreenFeesClient lang={lang.toLowerCase()} />
    </PageLayout>
  )
}
