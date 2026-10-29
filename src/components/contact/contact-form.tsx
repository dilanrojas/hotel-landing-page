
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useApartments } from '../../hooks/use-apartments';
import type { FormEvent } from 'react'
import Button from '../ui/button';
import {
  UserRound,
  Mail,
  List,
  MessageSquareText,
  Phone,
  House
} from 'lucide-react'
import styles from './contact-form.module.css'
import { DATA_URL } from '../../constants/apartments';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();

  const { apartments, isLoading, error } = useApartments(DATA_URL);
  const requestedId = searchParams.get('apartment') ?? '';

  const selectedApartmentId = apartments.some(
    (apartment) => apartment.id === requestedId,
  )
    ? requestedId
    : '';




  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();

    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('apartment');

    setSearchParams(nextParams, { replace: true });

    setSubmitted(true);
  };



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


        {/* Phone Number */}
        <p className={styles.formGroup}>
          <label htmlFor="contact-phone">
            Phone Number (optional)
          </label>

          <Phone
            className={styles.fieldIcon}
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="Enter your phone number"
            autoComplete="tel"
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

        {/* Property of interest */}
        <p className={styles.formGroup}>
          <label htmlFor="contact-apartment">
            Property of interest (optional)
          </label>

          <House
            className={styles.fieldIcon}
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <select
            id="contact-apartment"
            name="apartment"
            value={selectedApartmentId}
            disabled={isLoading || Boolean(error)}
            onChange={(event) => {
              const nextParams = new URLSearchParams(searchParams);

              if (event.target.value) {
                nextParams.set('apartment', event.target.value);
              } else {
                nextParams.delete('apartment');
              }

              setSearchParams(nextParams, { replace: true });
              setSubmitted(false);
            }}
          >
            <option value="">
              {isLoading
                ? 'Loading properties...'
                : 'No property selected'}
            </option>

            {apartments.map((apartment) => (
              <option key={apartment.id} value={apartment.id}>
                {apartment.name}
              </option>
            ))}
          </select>

          {isLoading && (
            <span role="status">Loading available properties...</span>
          )}

          {error && (
            <span role="alert">
              Unable to load properties. Please try again later.
            </span>
          )}

          {!isLoading && !error && apartments.length === 0 && (
            <span role="status">
              No properties are currently available.
            </span>
          )}

          {!isLoading && !error && requestedId && !selectedApartmentId && (
            <span role="status">
              The requested property was not found. Please select another.
            </span>
          )}
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
        <Button
          variant="primary"
          type="submit"
          chevron
          chevronSize={15}
        >
          <span>SEND MESSAGE</span>
        </Button>



        {/* Confirmation message */}
        <p
          className={styles.successMessage}
          role="status"
        >
          {submitted
            ? 'Demo submission completed. No message was actually sent.'
            : ''}
        </p>


      </form>
    </section>
  )
}
