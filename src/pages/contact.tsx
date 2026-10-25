
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import ContactContent from '../components/contact/ContactContent'

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
