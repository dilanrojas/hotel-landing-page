import type { Apartment } from '../../types/apartment';
import ApartmentGallery from './apartment-gallery';
import styles from './apartment-detail.module.css';

interface ApartmentHeroProps {
  apartment: Apartment;
}

export default function ApartmentHero({
  apartment,
}: ApartmentHeroProps) {
  return (
    <figure className={styles.hero}>
      <ApartmentGallery
        key={apartment.id}
        apartment={apartment}
      />
    </figure>
  );
}
