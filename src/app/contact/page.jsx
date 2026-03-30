import PageLayout from '../../components/PageLayout'
import ContactForm from './ContactForm'
import { buildContactMetadata } from '../../lib/page-metadata'

export const metadata = buildContactMetadata('en')

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





