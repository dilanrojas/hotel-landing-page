import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.pmFooter} id="contact">
      <section className={styles.footerContainer} aria-label="Footer">

        <section className={styles.footerContent} aria-label="Footer Content">

          {/* Hotel Information */}
          <section className={styles.footerBrand} aria-labelledby="brand-heading">
            <h2 id="brand-heading">Hotelry</h2>
          </section>

          {/* Navigation */}
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/apartments">Our Apartments</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className={styles.footerCopy}>&copy; 2026 Hotelry. All rights reserved.</p>

        </section>

      </section>
    </footer>
  )
}