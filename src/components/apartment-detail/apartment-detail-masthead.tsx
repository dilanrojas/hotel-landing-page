import { Heart, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavouritesContext } from '../../context/favourite-context';
import { useReveal } from '../../hooks/use-reveal';
import type { Apartment } from '../../types/apartment';
import Button from '../ui/button';
import styles from './apartment-detail.module.css';

interface ApartmentDetailMastheadProps {
  apartment: Apartment;
}

export default function ApartmentDetailMasthead({
  apartment,
}: ApartmentDetailMastheadProps) {
  const navigate = useNavigate();
  const { ref, isVisible } = useReveal<HTMLElement>();
  const { isFavourite, toggleFavourite } = useFavouritesContext();
  const favourite = isFavourite(apartment.id);
  const { location } = apartment;

  return (
    <header
      ref={ref}
      className={`${styles.masthead} ${styles.reveal} ${
        isVisible ? styles.revealVisible : ''
      }`}
    >
      <div className={styles.intro}>
        <p className={styles.eyebrow}>
          <span>{apartment.environment}</span>
          {apartment.featured && (
            <>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>Featured apartment</span>
            </>
          )}
        </p>

        <h1 className={styles.title}>{apartment.name}</h1>

        <p className={styles.location}>
          <MapPin size={16} strokeWidth={1.8} aria-hidden="true" />
          <span>
            {location.neighborhood}, {location.city}, {location.country}
          </span>
        </p>

        <p className={styles.summary}>{apartment.summary}</p>
      </div>

      <div className={styles.booking}>
        <p className={styles.priceLabel}>From</p>

        <p className={styles.price}>
          {apartment.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          })}
          <span className={styles.priceUnit}> / night</span>
        </p>

        <div className={styles.actions}>
          <Button
            type="button"
            variant="primary"
            chevron
            chevronSize={16}
            className={styles.requestButton}
            onClick={() =>
              navigate(
                `/contact?apartment=${encodeURIComponent(apartment.id)}`,
              )
            }
          >
            Request information
          </Button>

          <button
            type="button"
            className={styles.favouriteAction}
            aria-label={
              favourite
                ? `Remove ${apartment.name} from saved apartments`
                : `Save ${apartment.name} to favourites`
            }
            aria-pressed={favourite}
            onClick={() => toggleFavourite(apartment.id)}
          >
            <Heart
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
              fill={favourite ? 'currentColor' : 'none'}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
