import styles from './footer.module.css'
import Logo from '../logo.tsx'

export default function Footer() {
  return (
    <footer className={styles.pmFooter} id="contact">
      <section className={styles.footerContainer} aria-label="Footer">

        <section className={styles.footerContent} aria-label="Footer Content">

          {/* Hotel Information */}
          <section className={styles.footerBrand} aria-labelledby="brand-heading">
            <Logo size="xl" />
          </section>

          {/* Navigation */}
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/apartments">Apartments</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className={styles.footerCopy}>&copy; 2026 Hotelry. All rights reserved.</p>

        </section>

      </section>
    </footer>
  )
}