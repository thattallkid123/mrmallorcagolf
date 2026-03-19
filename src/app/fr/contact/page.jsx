import PageLayout from '../../../components/PageLayout'
import ContactForm_FR from './ContactForm_FR'

export const metadata = {
  title: 'Contact — Mr Mallorca Golf | Andy Griffiths PGA Professionnel',
  description: 'Organisez votre journee golf privee a Majorque. Andy Griffiths repond personnellement sous 24 heures.',
  alternates: { canonical: 'https://mrmallorcagolf.com/fr/contact' },
}

export default function Contact_FR() {
  return (
    <PageLayout lang="fr">
      <ContactForm_FR />
    </PageLayout>
  )
}




