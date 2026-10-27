import styles from './hero-card.module.css';
import Button from '../ui/button';
import { useNavigate } from 'react-router-dom';

export default function HeroCard() {
  const navigate = useNavigate();

  return (
    <article className={styles.card}>
      <picture className={styles.picture}>
        <img src='/apartments/the-ember-cabin.webp' alt='The Ember Cabin' height={130} />
      </picture>
      <div className={styles.content}>
        <h4>The Ember Cabin</h4>
        <p>With a steel fire bowl in the gravel clearing.</p>
        <Button variant='secondary' chevron chevronSize={15} onClick={() => navigate('/apartments/the-ember-cabin')}>
          <span>VIEW</span>
        </Button>
      </div>
    </article>
  )
}
