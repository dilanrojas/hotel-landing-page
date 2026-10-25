import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useApartments } from '../hooks/use-apartments';
import ApartmentHero from '../components/apartments/apartment-hero';
import ApartmentInfo from '../components/apartments/apartment-info';
import ApartmentActions from '../components/apartments/apartment-actions';
import styles from '../components/apartments/apartment-detail.module.css';

export default function ApartmentDetail() {
  const { id } = useParams<{ id: string }>();

  const { apartments, isLoading, error } = useApartments(
    '/data/apartments.json',
  );

  const apartment = apartments.find((item) => item.id === id);

  if (isLoading) {
    return (
      <main className={`wrapper ${styles.page} ${styles.status}`}>
        <p role="status">Loading apartment...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={`wrapper ${styles.page} ${styles.status}`}>
        <h1>Unable to load this apartment</h1>
        <p role="alert">{error}</p>
        <Link className={styles.backLink} to="/apartments">
          Back to apartments
        </Link>
      </main>
    );
  }

  if (!apartment) {
    return (
      <main className={`wrapper ${styles.page} ${styles.status}`}>
        <h1>Apartment not found</h1>
        <p>The requested property is unavailable.</p>
        <Link className={styles.backLink} to="/apartments">
          Back to apartments
        </Link>
      </main>
    );
  }

  return (
    <main className={`wrapper ${styles.page}`}>
      <article>
        <Link className={styles.backLink} to="/apartments">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to apartments
        </Link>

        <ApartmentHero apartment={apartment} />

        <div className={styles.grid}>
          <ApartmentInfo apartment={apartment} />
          <ApartmentActions apartment={apartment} />
        </div>
      </article>
    </main>
  );
}