import styles from './hero-card.module.css';
import Button from '../ui/button';

export default function HeroCard() {
  return (
    <article className={styles.card}>
      <picture className={styles.picture}>
        <img src='/apartments/the-ember-cabin.webp' alt='The Ember Cabin' height={100} />
      </picture>
      <div className={styles.content}>
        <h4>The Ember Cabin</h4>
        <p>Forest</p>
        <Button variant='secondary' chevron chevronSize={15}>
          <span>VIEW</span>
        </Button>
      </div>
    </article>
  )
}
