import PageLayout from '../../components/PageLayout'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact — Mr Mallorca Golf | Andy Griffiths PGA Professional',
  description: 'Get in touch to arrange a private golf day in Mallorca. PGA Advanced Professional Andy Griffiths responds personally within 24 hours.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/contact',
    languages: {
      'en': 'https://mrmallorcagolf.com/contact',
      'de': 'https://mrmallorcagolf.com/de/contact',
      'es': 'https://mrmallorcagolf.com/es/contact',
      'fr': 'https://mrmallorcagolf.com/fr/contact',
      'zh': 'https://mrmallorcagolf.com/zh/contact',
      'sv': 'https://mrmallorcagolf.com/sv/contact',
      'nl': 'https://mrmallorcagolf.com/nl/contact',
      'x-default': 'https://mrmallorcagolf.com/contact',
    },
  },
}

export default function Contact() {
  return (
    <PageLayout>
      <ContactForm />
    </PageLayout>
  )
}




