
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import ContactContent from '../components/contact/ContactContent'

export default function Contact() {
  return (
    <main>
      <ContactHero/>

      <ContactContent>
        <ContactInfo />
        <ContactForm />
      </ContactContent>
    </main>
  )
}
