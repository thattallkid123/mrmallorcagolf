import PageLayout from '../../../components/PageLayout'
import ContactFormDE from './ContactFormDE'

export const metadata = {
  title: 'Kontakt — Mr Mallorca Golf | Andy Griffiths UK PGA Professional',
  description: 'Arrangieren Sie Ihren privaten Golftag auf Mallorca. UK PGA Advanced Professional Andy Griffiths antwortet persönlich innerhalb von 24 Stunden.',
  alternates: { canonical: 'https://mrmallorcagolf.com/de/contact' },
}

export default function ContactDE() {
  return (
    <PageLayout lang="de" navTransparent={false}>
      <ContactFormDE />
    </PageLayout>
  )
}
