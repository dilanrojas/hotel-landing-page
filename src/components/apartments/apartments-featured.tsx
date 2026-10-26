
import { useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { useApartments } from '../../hooks/use-apartments'
import Button from '../ui/button'
import styles from './apartments-features.module.css'

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
            className={styles.featuredSection}
            aria-labelledby="featured-title"
        >
            {/* Section header */}
            <header className={styles.sectionHeader}>
                <p className={styles.sectionLabel}>
                    CURATED COLLECTION
                </p>

                <h2 id="featured-title">
                    Featured Apartments
                </h2>

                <p className={styles.description}>
                    Discover exceptional spaces where thoughtful
                    architecture meets unforgettable experiences.
                </p>
            </header>

            {/* Featured apartments */}
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
                        <li
                            key={apartment.id}
                            className={styles.gridItem}
                        >
                            <article className={styles.apartmentCard}>

                                {/* Apartment image */}
                                <figure className={styles.imageContainer}>
                                    <img
                                        src={apartment.image}
                                        alt={`View of ${apartment.name}`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </figure>

                                {/* Apartment information */}
                                <header className={styles.cardHeader}>
                                    <p className={styles.location}>
                                        <MapPin
                                            size={15}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />

                                        {apartment.location.city},
                                        {' '}
                                        {apartment.location.country}
                                    </p>

                                    <h3>{apartment.name}</h3>
                                </header>

                                {/* View property button */}
                                <footer className={styles.cardFooter}>
                                    <Button
                                        variant="secondary"
                                        chevron
                                        chevronSize={15}
                                        type="button"
                                        aria-label={`View ${apartment.name}`}
                                        onClick={() =>
                                            navigate(`/apartments/${apartment.id}`)
                                        }
                                    >
                                        <span>VIEW DETAILS</span>
                                    </Button>
                                </footer>

                            </article>
                        </li>
                    ))}
                </ul>
            )}

            {/* Explore all apartments */}
            <footer className={styles.sectionFooter}>
                <Button
                    variant="primary"
                    chevron
                    chevronSize={15}
                    type="button"
                    onClick={() => navigate('/apartments')}
                >
                    <span>EXPLORE ALL APARTMENTS</span>
                </Button>
            </footer>
        </section>
    )
}
