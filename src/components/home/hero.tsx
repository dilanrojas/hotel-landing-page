import { ChevronRight } from 'lucide-react';
import HeroCard from './hero-card';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className='wrapper'>
        <article className={styles.article}>
          <h1>"WE SHAPE SPACES <br /> FOR TOMORROW"</h1>
          <p>
            We shape spaces for tomorrow by blending visionary design with purposeful functionality creating environments that inspire and endure.
          </p>
        </article>
        <footer className={styles.footer}>
          <button className={styles.heroBtn}>
            <span>Book Your Stay</span>
            <span className={styles.heroBtnChevron}>
              <ChevronRight size={22} strokeWidth={1.5} />
            </span>
          </button>
          <HeroCard />
        </footer>
      </div>
    </section>
  )
}
