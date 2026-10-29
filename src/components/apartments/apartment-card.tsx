import styles from './apartment-card.module.css'
import { ChevronRight, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import type { Apartment } from "../../types/apartment"
import { useState } from 'react';

interface ApartmentCardProps {
  apartment: Apartment
  isFavourite: boolean
  onToggleFavourite: () => void
}


export const ApartmentCard = ({ apartment, isFavourite, onToggleFavourite }: ApartmentCardProps) => {

  const [isAnimating, setIsAnimating] = useState(false);

  const { name, id, summary, price, environment, image, location } = apartment

  return (

    <article className={styles.card}>

      <div className={styles.cardMedia}>
        <img src={image} alt={name} className={styles.cardImage} loading='lazy' />
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardCaption}>
          {environment} · {location.country}
        </p>
        <div className={styles.cardTitleRow}>
          <h2 className={styles.cardTitle}>
            <Link className={styles.cardTitleLink} to={`/apartments/${id}`}>
              <span>
                {name}
                <ChevronRight size={18} strokeWidth={3} className={styles.cardArrow} aria-hidden="true" />
              </span>
            </Link>
          </h2>
        </div>

        <div className={styles.cardSummaryRow}>
          <p className={styles.cardSummary}>{summary}</p>
        </div>


        <div className={styles.cardBottom}>
          <p className={styles.cardPrice}>
            {price.toLocaleString('en-US', {
              maximumFractionDigits: 0,
              style: 'currency',
              currency: 'USD'
            })}

            <span className={styles.cardPriceUnit}> / NIGHT</span>
          </p>

          
<button
  type="button"
  className={`${styles.cardFavouriteButton} ${
    isAnimating ? styles.favouritePulse : ''
  }`}
  aria-label={
    isFavourite
      ? `Remove ${name} from favourites`
      : `Add ${name} to favourites`
  }
  aria-pressed={isFavourite}
  onClick={() => {
    onToggleFavourite();
    setIsAnimating(true);
  }}
  onAnimationEnd={() => setIsAnimating(false)}
>
  <Heart
    size={28}
    strokeWidth={1.5}
    fill={isFavourite ? 'black' : 'none'}
    aria-hidden="true"
  />
</button>

        </div>
      </div>
    </article>
  )
}

