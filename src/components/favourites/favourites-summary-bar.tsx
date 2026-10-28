import { Trash2 } from 'lucide-react';
import Button from '../ui/button';
import styles from './favourites-summary-bar.module.css';

interface SummaryBarProps {
  savedCount: number,
  locationsCount: number,
  onClear: () => void
}

export const SummaryBar = ({ savedCount, locationsCount, onClear }: SummaryBarProps) => {
  return (
    <section className={styles.bar} aria-label="Favourites Summary">
      <ul className={styles.stats}>

        <li className={styles.stat}>
          <h4 className={styles.label}>Saved Apartments</h4>
          <span className={styles.value}>{savedCount} {savedCount === 1 ? ' apartment' : ' apartments'}</span>
        </li>

        <li className={styles.stat}>
          <h4 className={styles.label}>Locations</h4>
          <span className={styles.value}>{locationsCount}{locationsCount === 1 ? ' country' : ' countries'}</span>
        </li>

      </ul>

      <Button
        type="button"
        variant="secondary"
        className={styles.clearBtn}
        onClick={onClear}
        disabled={savedCount === 0}
        aria-label="Clear all favourites"
      >
        <span className={styles.clearLabel}>
          <Trash2 size={15} strokeWidth={1.8} aria-hidden="true" />
          Clear
        </span>
      </Button>
    </section>
  )
}

