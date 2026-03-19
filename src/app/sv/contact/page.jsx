import PageLayout from '../../../components/PageLayout'
import ContactForm_SV from './ContactForm_SV'

export const metadata = {
  title: 'Kontakt — Mr Mallorca Golf | Andy Griffiths PGA-proffs',
  description: 'Arrangera din privata golfdag pa Mallorca. Andy Griffiths svarar personligen inom 24 timmar.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/contact' },
}

export default function Contact_SV() {
  return (
    <PageLayout lang="sv">
      <ContactForm_SV />
    </PageLayout>
  )
}




