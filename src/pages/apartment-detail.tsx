import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { DATA_URL } from '../constants/apartments';
import { useApartments } from '../hooks/use-apartments';
import ApartmentDetailHero from '../components/apartment-detail/apartment-detail-hero';
import ApartmentDetailMasthead from '../components/apartment-detail/apartment-detail-masthead';
import ApartmentDetailWalkthrough from '../components/apartment-detail/apartment-detail-walkthrough';
import styles from '../components/apartment-detail/apartment-detail.module.css';

export default function ApartmentDetail() {
  const { id } = useParams<{ id: string }>();

  const { apartments, isLoading, error } = useApartments(DATA_URL);

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
          <ArrowLeft size={18} aria-hidden="true" />
          All apartments
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
          <ArrowLeft size={18} aria-hidden="true" />
          All apartments
        </Link>
      </main>
    );
  }

  return (
    <main className={`wrapper ${styles.page}`}>
      <article>
        <div className={styles.topbar}>
          <Link className={styles.backLink} to="/apartments">
            <ArrowLeft size={18} aria-hidden="true" />
            All apartments
          </Link>
        </div>

        <ApartmentDetailHero apartment={apartment} />
        <ApartmentDetailMasthead apartment={apartment} />
        <ApartmentDetailWalkthrough apartment={apartment} />
      </article>
    </main>
  );
}
