import { ELEMENTS_PER_PAGE } from '../../utils/pagination';
import styles from './apartment-list-skeleton.module.css';
import apartmentListStyles from './apartment-list.module.css';
import apartmentCardStyles from './apartment-card.module.css';

export const ApartmentListSkeleton = () => {

  return (
    <ul className={apartmentListStyles.apartmentList}>
      {Array.from({ length: ELEMENTS_PER_PAGE }, (_, index) => (
        <li key={index}>
          <article className={apartmentCardStyles.card}>
            <div className={`${styles.block} ${styles.image}`} />

            <div className={styles.captionRow}>
              <div className={`${styles.block} ${styles.meta}`} />
              <div className={`${styles.block} ${styles.price}`} />
            </div>

            <div className={`${styles.block} ${styles.titleRow}`} />
            <div className={`${styles.block} ${styles.summaryRow}`} />
          </article>
        </li>



      ))}


    </ul>
  )
}

