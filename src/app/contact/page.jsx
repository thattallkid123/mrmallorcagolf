import PageLayout from '../../components/PageLayout'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact — Mr Mallorca Golf | Andy Griffiths PGA Professional',
  description: 'Get in touch to arrange a private golf day in Mallorca. PGA Advanced Professional Andy Griffiths responds personally within 24 hours.',
}

export default function Contact() {
  return (
    <PageLayout>
      <ContactForm />
    </PageLayout>
  )
}




