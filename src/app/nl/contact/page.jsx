import PageLayout from '../../../components/PageLayout'
import ContactForm_NL from './ContactForm_NL'

export const metadata = {
  title: 'Contact — Mr Mallorca Golf | Andy Griffiths PGA Professional',
  description: 'Organiseer uw privegolfdag op Mallorca. Andy Griffiths reageert persoonlijk binnen 24 uur.',
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/contact' },
}

export default function Contact_NL() {
  return (
    <PageLayout lang="nl" navTransparent={false}>
      <ContactForm_NL />
    </PageLayout>
  )
}
