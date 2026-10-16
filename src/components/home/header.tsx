import { Heart } from 'lucide-react';
import Logo from '../logo';
import styles from './header.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <nav className={styles.pmNav}>
          <div className={styles.pmNavPill}>
            <Logo size='xl' />
            <button className={styles.pmNavPillBtn} onClick={() => setOpen((prev) => !prev)}>
              <img src='/close.svg' alt='Menu close' width={15} />
              <img src='/menu-line-horizontal.svg' alt='Menu open' />
            </button>
          </div>
          <button className={styles.heartBtn}>
            <span><Heart size={24} /></span>
          </button>
        </nav>
        <div className={styles.dropdown}>
          <nav className={styles.dropdownNav}>
            <ul className={styles.dropdownNavList}>
              <h3>PAGES</h3>
              <li><Link to={'/apartments'}><span>Apartments</span></Link></li>
              <li><Link to={'/contact'}><span>Contact</span></Link></li>
            </ul>
            <img src='/header-dropdown-image.jpg' alt='Upstairs house' width={256} />
          </nav>
        </div>
      </div>
    </header>
  )
}
