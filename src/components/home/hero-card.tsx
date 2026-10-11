import { ChevronRight } from 'lucide-react';
import styles from './hero-card.module.css';

export default function HeroCard() {
  return (
    <article className={styles.card}>
      <picture className={styles.picture}>
        <img src='/hero-card.webp' alt='Apartment' width={134} />
      </picture>
      <div className={styles.content}>
        <h4>Horizon Residence</h4>
        <p>Where Architecture Meets Modern Living</p>
        <button className={styles.contentBtn}>
          <span>VIEW</span>
          <span><ChevronRight size={16} strokeWidth={2.5} /></span>
        </button>
      </div>
    </article>
  )
}
