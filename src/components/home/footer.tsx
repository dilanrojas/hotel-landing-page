
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../logo.tsx'
import Button from '../ui/button'
import styles from './footer.module.css'

export default function Footer() {
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className={styles.pmFooter} id="footer">
            <section className={styles.footerContainer}>

                {/* Main footer content */}
                <section className={styles.footerContent}>

                    {/* Hotel branding */}
                    <section
                        className={styles.footerBrand}
                        aria-label="Hotelry"
                    >
                        <span className={styles.brandLogo}>
                            <Logo size="xl" />
                        </span>

                        {/* Brand description */}
                        <p className={styles.brandDescription}>
                            Exceptional stays, thoughtfully curated.
                            Discover spaces designed to inspire
                            unforgettable experiences.
                        </p>

                        {/* Main CTA */}
                        <Button
                            variant="primary"
                            chevronSize={22}
                            chevron={true}
                            size="lg"
                            scheme="dark"
                            type="button"
                            onClick={() => navigate('/apartments')}
                        >
                            <span>Explore Apartments</span>
                        </Button>
                    </section>

                    {/* Navigation */}
                    <nav
                        className={styles.footerNav}
                        aria-label="Footer navigation"
                    >
                        <p className={styles.columnLabel}>
                            Explore
                        </p>

                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/apartments">
                                    Apartments
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Featured property */}
                    <section
                        className={styles.footerShowcase}
                        aria-label="Featured property"
                    >
                        <figure className={styles.showcaseFigure}>
                            <img
                                src="/apartments/casa-manglar/exterior.webp"
                                alt="Hemlock Hollow, a featured Hotelry property"
                                loading="lazy"
                                decoding="async"
                            />

                            <figcaption className={styles.showcaseCaption}>
                                <span>CASA MANGLAR</span>
                                <span>GUADALAJARA, MEXICO</span>
                            </figcaption>
                        </figure>
                    </section>

                </section>

                {/* Footer bottom */}
                <section
                    className={styles.footerBottom}
                    aria-label="Footer information"
                >
                    {/* Copyright */}
                    <p className={styles.footerCopy}>
                        &copy; 2026 Hotelry. All rights reserved.
                    </p>

                    {/* Back to top */}
                    <button
                        type="button"
                        className={styles.backToTop}
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <span
                            className={styles.backToTopLabel}
                            aria-hidden="true"
                        >
                            <span className={styles.labelCurrent}>
                                Back to Top
                            </span>

                            <span className={styles.labelNext}>
                                Back to Top
                            </span>
                        </span>
                    </button>
                </section>

            </section>
        </footer>
    )
}
