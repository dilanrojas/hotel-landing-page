
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    MapPin,
    BedDouble,
    Bath,
    Ruler
} from 'lucide-react'
import { useApartments } from '../../hooks/use-apartments'
import styles from './apartments-features.module.css'

export default function ApartmentsFeatured() {
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
                                <Link
                                    to={`/apartments/${apartment.id}`}
                                    className={styles.cardLink}
                                >
                                    {/* Apartment image */}
                                    <figure className={styles.imageContainer}>
                                        <img
                                            src={apartment.image}
                                            alt={`View of ${apartment.name}`}
                                            loading="lazy"
                                            decoding="async"
                                        />

                                        <figcaption className={styles.imageBadge}>
                                            {apartment.environment}
                                        </figcaption>
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

                                    {/* Description */}
                                    <p className={styles.summary}>
                                        {apartment.summary}
                                    </p>

                                    {/* Apartment details */}
                                    <footer className={styles.cardFooter}>
                                        <ul className={styles.details}>
                                            <li>
                                                <BedDouble
                                                    size={16}
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                                {apartment.bedrooms} beds
                                            </li>

                                            <li>
                                                <Bath
                                                    size={16}
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                                {apartment.bathrooms} baths
                                            </li>

                                            <li>
                                                <Ruler
                                                    size={16}
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                                {apartment.areaM2} m²
                                            </li>
                                        </ul>

                                        {/* View property */}
                                        <span className={styles.viewDetails}>
                                            VIEW PROPERTY

                                            <ArrowUpRight
                                                size={17}
                                                strokeWidth={1.8}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </footer>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
            )}

            {/* Explore all apartments */}
            <footer className={styles.sectionFooter}>
                <Link
                    to="/apartments"
                    className={styles.exploreButton}
                >
                    EXPLORE ALL APARTMENTS

                    <ArrowRight
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                </Link>
            </footer>
        </section>
    )
}
