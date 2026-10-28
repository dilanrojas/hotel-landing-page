import { useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { useApartments } from '../../hooks/use-apartments'
import Button from '../ui/button'
import SectionHeader from '../section-header'
import styles from './apartments-featured.module.css'

export default function ApartmentsFeatured() {
  const navigate = useNavigate()

  const { apartments, isLoading, error } = useApartments(
    '/data/apartments.json'
  )

  const featuredApartments = apartments.filter(
    (apartment) => apartment.featured
  )

  return (
    <section
      className={`${styles.featuredSection} wrapper`}
      aria-label="Featured apartments"
    >
      <SectionHeader
        title="Featured Apartments"
        desc="Discover exceptional spaces where thoughtful architecture meets unforgettable experiences."
      />

      {isLoading ? (
        <p className={styles.statusMessage} role="status">
          Loading featured apartments...
        </p>
      ) : error ? (
        <p className={styles.statusMessage} role="alert">
          Unable to load featured apartments.
        </p>
      ) : featuredApartments.length === 0 ? (
        <p className={styles.statusMessage}>
          No featured apartments available.
        </p>
      ) : (
        <ul className={styles.apartmentsGrid}>
          {featuredApartments.map((apartment) => (
            <li key={apartment.id} className={styles.gridItem}>
              <article className={styles.apartmentCard}>
                <figure className={styles.imageContainer}>
                  {/* Base photo: darkens on desktop hover */}
                  <img
                    className={styles.baseImage}
                    src={apartment.image}
                    alt={`Exterior of ${apartment.name}`}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Identical photo: visible in the inner window */}
                  <span className={styles.imageWindow} aria-hidden="true">
                    <img
                      className={styles.insetImage}
                      src={apartment.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </span>

                  {/* Desktop: tertiary button on hover/focus */}
                  <Button
                    variant="tertiary"
                    chevron
                    chevronSize={19}
                    type="button"
                    className={styles.imageButton}
                    aria-label={`View details for ${apartment.name}`}
                    onClick={() => navigate(`/apartments/${apartment.id}`)}
                  >
                    VIEW DETAILS
                  </Button>
                </figure>

                <header className={styles.cardHeader}>
                  <p className={styles.location}>
                    <MapPin
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    {apartment.location.city}, {apartment.location.country}
                  </p>
                  <h3>{apartment.name}</h3>
                </header>

                {/* Mobile/touch: original secondary button below image */}
                <footer className={styles.cardFooter}>
                  <Button
                    variant="secondary"
                    chevron
                    chevronSize={15}
                    type="button"
                    aria-label={`View ${apartment.name}`}
                    onClick={() => navigate(`/apartments/${apartment.id}`)}
                  >
                    VIEW DETAILS
                  </Button>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      )}

      <footer className={styles.sectionFooter}>
        <Button
          variant="primary"
          chevron
          chevronSize={15}
          type="button"
          onClick={() => navigate('/apartments')}
        >
          VIEW ALL APARTMENTS
        </Button>
      </footer>
    </section>
  )
}
