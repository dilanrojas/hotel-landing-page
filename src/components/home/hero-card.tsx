import styles from './hero-card.module.css';
import Button from '../ui/button';

export default function HeroCard() {
  return (
    <article className={styles.card}>
      <picture className={styles.picture}>
        <img src='/hero-card.webp' alt='Apartment' width={134} />
      </picture>
      <div className={styles.content}>
        <h4>Horizon Residence</h4>
        <p>Where Architecture Meets Modern Living</p>
        <Button variant='secondary' chevron chevronSize={15}>
          <span>VIEW</span>
        </Button>
      </div>
    </article>
  )
}
