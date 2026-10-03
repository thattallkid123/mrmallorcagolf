export const dynamic = 'force-dynamic'

export const metadata = buildPageMetadata('/tools/green-fees', 'sv', {

  title: 'Jämför greenfees på Mallorca',
  description: 'Jämför greenfees för alla 24 golfbanor på Mallorca efter säsong, handicap och golfbilsalternativ.',
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
