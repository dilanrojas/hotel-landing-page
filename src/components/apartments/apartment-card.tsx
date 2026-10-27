import styles from './apartment-card.module.css'
import { ChevronRight, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import type { Apartment } from "../../types/apartment"

interface ApartmentCardProps {
  apartment: Apartment
  isFavourite: boolean
  onToggleFavourite: () => void
}


export const ApartmentCard = ({ apartment, isFavourite, onToggleFavourite }: ApartmentCardProps) => {

  const { name, id, summary, price, environment, image, location } = apartment

  return (

    <article className={styles.card}>

      <div className={styles.cardMedia}>
        <Link to={`/apartments/${id}`}>
          <img src={image} alt={name} className={styles.cardImage} loading='lazy' />
        </Link>
      </div>


      <div className={styles.cardBody}>
        <p className={styles.cardCaption}>
          {environment} · {location.country}
        </p>
        <div className={styles.cardTitleRow}>
          <h2 className={styles.cardTitle}>
            <Link to={`/apartments/${id}`}>
              {name}
              <ChevronRight size={18} strokeWidth={3} className={styles.cardArrow} aria-hidden="true" />
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
            className={styles.cardFavouriteButton}
            aria-label={
              isFavourite
                ? `Remove ${name} from favourites`
                : `Add ${name} to favourites`
            }
            aria-pressed={isFavourite}
            onClick={onToggleFavourite}
          >
            <Heart
              size={32}
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

