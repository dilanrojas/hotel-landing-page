import { Heart } from 'lucide-react';
import Logo from '../logo';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <nav className={styles.pmNav}>
          <div className={styles.pmNavPill}>
            <Logo size='xl' />
            <button className={styles.pmNavPillBtn}>
              <img src='/menu-line-horizontal.svg' alt='Menu Lines' />
            </button>
          </div>
          <button>
            <span><Heart /></span>
          </button>
        </nav>
        <div className={styles.dropdown}>
          <nav className={styles.dropdownNav}>
          </nav>
        </div>
      </div>
    </header>
  )
}
