import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavouritesContext } from '../../context/favourite-context';
import type { Apartment } from '../../types/apartment';
import Button from '../ui/button';
import styles from './favourites-table.module.css';
import { useState } from 'react';

interface FavouritesTableProps {
  apartments: Apartment[];
}

const formatPrice = (price: number) =>
  price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });


interface RemoveFavouriteButtonProps {
  apartment: Apartment;
  onRemove: (id: Apartment['id']) => void;
}

const RemoveFavouriteButton = ({
  apartment,
  onRemove,
}: RemoveFavouriteButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onRemove(apartment.id);
      return;
    }

    setIsAnimating(true);
  };

  return (
    <button
      type="button"
      className={`${styles.favouriteButton} ${isAnimating ? styles.favouritePulse : ''
        }`}
      aria-label={`Remove ${apartment.name} from favourites`}
      aria-pressed={true}
      onClick={handleClick}
      onAnimationEnd={(event) => {
        if (event.target !== event.currentTarget || !isAnimating) return;

        onRemove(apartment.id);
      }}
    >
      <Heart
        size={28}
        strokeWidth={1.5}
        fill="black"
        aria-hidden="true"
      />
    </button>
  );
};


export const FavouritesTable = ({ apartments }: FavouritesTableProps) => {
  const { toggleFavourite } = useFavouritesContext();
  const navigate = useNavigate();

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table} role="table">
        <caption className={styles.caption}>Saved apartments</caption>

        <thead className={styles.head} role="rowgroup">
          <tr role="row">
            <th scope="col" role="columnheader">
              Apartment
            </th>
            <th scope="col" role="columnheader">
              Location
            </th>
            <th scope="col" role="columnheader">
              Layout
            </th>
            <th scope="col" role="columnheader" className={styles.rateHeader}>
              Rate
            </th>
            <th scope="col" role="columnheader" className={styles.actionsHeader}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          {apartments.map((apartment) => (
            <tr key={apartment.id} className={styles.row} role="row">
              <th scope="row" role="rowheader" className={`${styles.cell} ${styles.propertyCell}`}>
                <div className={styles.property}>
                  <div className={styles.thumbnailWrap}>
                    <img
                      className={styles.thumbnail}
                      src={apartment.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.propertyCopy}>
                    <span className={styles.environment}>{apartment.environment}</span>
                    <span className={styles.name}>{apartment.name}</span>
                  </div>
                </div>
              </th>

              <td className={`${styles.cell} ${styles.locationCell}`} role="cell">
                <span className={styles.mobileLabel} aria-hidden="true">
                  Location
                </span>
                <span className={styles.locationPrimary}>
                  {apartment.location.neighborhood}
                </span>
                <span className={styles.locationMeta}>
                  {apartment.location.city}, {apartment.location.country}
                </span>
              </td>

              <td className={`${styles.cell} ${styles.layoutCell}`} role="cell">
                <span className={styles.mobileLabel} aria-hidden="true">
                  Layout
                </span>
                <span className={styles.layout}>
                  <span className={styles.layoutGroup}>
                    <span>
                      <strong>{apartment.bedrooms}</strong> bed
                    </span>
                    <span className={styles.divider} aria-hidden="true">
                      ·
                    </span>
                    <span>
                      <strong>{apartment.bathrooms}</strong> bath
                    </span>
                  </span>
                  <span>
                    <strong>{apartment.areaM2}</strong> m²
                  </span>
                </span>
              </td>

              <td className={`${styles.cell} ${styles.rateCell}`} role="cell">
                <span className={styles.mobileLabel} aria-hidden="true">
                  Rate
                </span>
                <span className={styles.rate}>
                  {formatPrice(apartment.price)}
                  <span className={styles.rateUnit}> / night</span>
                </span>
              </td>

              <td className={`${styles.cell} ${styles.actionsCell}`} role="cell">
                <div className={styles.actions}>
                  <Button
                    type="button"
                    variant="secondary"
                    chevron
                    chevronSize={15}
                    className={styles.viewButton}
                    aria-label={`View ${apartment.name}`}
                    onClick={() => navigate(`/apartments/${apartment.id}`)}
                  >
                    View
                  </Button>


                  <RemoveFavouriteButton
                    apartment={apartment}
                    onRemove={toggleFavourite}
                  />

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
