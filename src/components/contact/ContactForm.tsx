
import { useState } from 'react'
import type { FormEvent } from 'react'
import {
    Send,
    UserRound,
    Mail,
    List,
    MessageSquareText
} from 'lucide-react'
import styles from './contactForm.module.css'

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.currentTarget.reset()
        setSubmitted(true)
    }

    return (
        <section
            className={styles.formContainer}
            aria-labelledby="contact-form-title"
        >
            <h2 id="contact-form-title">
                Send us a message
            </h2>

            <p className={styles.formDescription}>
                Fill out the form below to get in touch
                with our team.
            </p>

            <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
                onChange={() => setSubmitted(false)}
            >

                {/* Full name */}
                <p className={styles.formGroup}>
                    <label htmlFor="contact-name">
                        Full name
                    </label>

                    <UserRound
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                    <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                    />
                </p>

                {/* Email */}
                <p className={styles.formGroup}>
                    <label htmlFor="contact-email">
                        Email address
                    </label>

                    <Mail
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </p>

                {/* Subject */}
                <p className={styles.formGroup}>
                    <label htmlFor="contact-subject">
                        Subject
                    </label>

                    <List
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                    <select
                        id="contact-subject"
                        name="subject"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            Select a subject
                        </option>

                        <option value="reservation">
                            Reservation inquiry
                        </option>

                        <option value="rooms">
                            Rooms and availability
                        </option>

                        <option value="services">
                            Hotel services
                        </option>

                        <option value="other">
                            Other inquiries
                        </option>
                    </select>
                </p>

                {/* Message */}
                <p className={styles.formGroup}>
                    <label htmlFor="contact-message">
                        Message
                    </label>

                    <MessageSquareText
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        minLength={10}
                        placeholder="Write your message here..."
                        required
                    />
                </p>

                {/* Submit button */}
                <button
                    type="submit"
                    className={styles.submitButton}
                >
                    SEND MESSAGE
                    <Send size={18} strokeWidth={1.8} aria-hidden="true" />

                </button>

                {/* Confirmation message */}
                <p
                    className={styles.successMessage}
                    role="status"
                >
                    {submitted
                        ? 'Message send successfully!.'
                        : ''}
                </p>

            </form>
        </section>
    )
}
