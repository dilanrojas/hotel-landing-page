
import styles from './contactInfo.module.css'
import { Mail, MapPin, Clock3 } from 'lucide-react'

export default function ContactInfo() {
    return (
        <section
            className={styles.contactInfo}
            aria-labelledby="contact-info-title"
        >
            <p className={styles.sectionLabel}>
                GET IN TOUCH
            </p>

            <h2 id="contact-info-title">
                We'd love to hear from you.
            </h2>

            <p className={styles.description}>
                Whether you're planning your next getaway,
                have a question about our services, or need
                assistance with a reservation, our team
                is always happy to help.
            </p>

            <ul className={styles.infoList}>

                <li className={styles.infoItem}>
                    <span
                        className={styles.infoIcon}
                        aria-hidden="true"
                    >
                        <Mail size={20} strokeWidth={1.8} />
                    </span>

                    <h3>Email us</h3>
                    <address>hotelrycontact@example.com</address>
                </li>

                <li className={styles.infoItem}>
                    <span
                        className={styles.infoIcon}
                        aria-hidden="true"
                    >
                        <MapPin size={20} strokeWidth={1.8} />
                    </span>

                    <h3>Our location</h3>
                    <address>San José, Costa Rica</address>
                </li>

                <li className={styles.infoItem}>
                    <span
                        className={styles.infoIcon}
                        aria-hidden="true"
                    >
                        <Clock3 size={20} strokeWidth={1.8} />
                    </span>

                    <h3>Customer support</h3>
                    <p>
                        We're here to answer your questions.
                    </p>
                </li>

            </ul>

            <figure className={styles.contactVisual}>
                <img
                    src="/img_izq_contact.avif"
                    alt="Interior elegante de un hotel"
                    loading="lazy"
                />
            </figure>
        </section>
    )
}
