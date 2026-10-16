import HeroCard from './hero-card';
import styles from './hero.module.css';
import Button from '../ui/button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className='wrapper'>
        <article className={styles.article}>
          <h1>"WE SHAPE SPACES FOR TOMORROW"</h1>
          <p>
            We shape spaces for tomorrow by blending visionary design with purposeful functionality creating environments that inspire and endure.
          </p>
        </article>
        <footer className={styles.footer}>
          <Button
            variant='primary'
            chevronSize={22}
            chevron={true}
            size='lg'
            scheme='dark'
          >
            <span>Book Your Stay</span>
          </Button>
          <HeroCard />
        </footer>
      </div>
    </section>
  )
}
