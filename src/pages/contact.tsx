
import ContactInfo from '../components/contact/contact-info'
import ContactForm from '../components/contact/contact-form'
import ContactContent from '../components/contact/contact-content'

export default function Contact() {
  return (
    <main>
      <ContactContent>
        <ContactInfo />
        <ContactForm />
      </ContactContent>
    </main>
  )
}
