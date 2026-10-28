import type { Apartment } from '../../types/apartment';
import DetailImage from './detail-image';
import styles from './apartment-detail.module.css';

interface ApartmentDetailHeroProps {
  apartment: Apartment;
}

export default function ApartmentDetailHero({
  apartment,
}: ApartmentDetailHeroProps) {
  return (
    <figure className={styles.hero}>
      <DetailImage
        src={apartment.galleryImages.exterior}
        alt={`Exterior of ${apartment.name}`}
        className={styles.heroImage}
        loading="eager"
        fetchPriority="high"
      />
    </figure>
  );
}
