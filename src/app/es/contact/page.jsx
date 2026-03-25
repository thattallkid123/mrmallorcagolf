import PageLayout from '../../../components/PageLayout'
import ContactForm_ES from './ContactForm_ES'

export const metadata = {
  title: 'Contacto — Mr Mallorca Golf | Andy Griffiths PGA Profesional',
  description: 'Organice su dia de golf privado en Mallorca. Andy Griffiths responde personalmente en 24 horas.',
  alternates: { canonical: 'https://mrmallorcagolf.com/es/contact' },
}

export default function Contact_ES() {
  return (
    <PageLayout lang="es" navTransparent={false}>
      <ContactForm_ES />
    </PageLayout>
  )
}
