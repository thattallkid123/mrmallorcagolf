import PageLayout from '../../components/PageLayout'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact — Mr Mallorca Golf | Andy Griffiths PGA Professional',
  description: 'Get in touch to arrange a private golf day in Mallorca. PGA Advanced Professional Andy Griffiths responds personally within 24 hours.',
  alternates: {
    canonical: 'https://www.mrmallorcagolf.com/contact',
    languages: {
      'en': 'https://www.mrmallorcagolf.com/contact',
      'de': 'https://www.mrmallorcagolf.com/de/contact',
      'es': 'https://www.mrmallorcagolf.com/es/contact',
      'fr': 'https://www.mrmallorcagolf.com/fr/contact',
      'nl': 'https://www.mrmallorcagolf.com/nl/contact',
      'sv': 'https://www.mrmallorcagolf.com/sv/contact',
      'zh': 'https://www.mrmallorcagolf.com/zh/contact',
      'x-default': 'https://www.mrmallorcagolf.com/contact',
    }
  }
}

export default function Contact() {
  return (
    <>
    <link rel="preload" as="image" href="/images/contact.jpg" />
    <PageLayout navTransparent={false}>
      <ContactForm />
    </PageLayout>
    </>
  )
}




