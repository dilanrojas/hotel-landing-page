
import styles from './contactHero.module.css'

export default function ContactHero() {
  return (
    <header className={styles.contactHero}>
      <h1>Let's get in touch.</h1>

      <p className={styles.heroDescription}>
        Have a question or a special request?
        We're here to help make your stay exceptional.
      </p>
    </header>
  )
}
