import { Heart } from 'lucide-react';
import Logo from '../logo';
import styles from './header.module.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className='wrapper' ref={containerRef} >
        <nav className={styles.pmNav}>
          <div className={styles.pmNavPill}>
            <Logo size='xl' />
            <button className={styles.pmNavPillBtn} onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
              <img src='/close.svg' alt='X' aria-hidden={!open} width={15} className={open ? styles.iconVisible : styles.iconHidden} />
              <img src='/menu-line-horizontal.svg' alt='Hamburger menu' aria-hidden={open} className={open ? styles.iconHidden : styles.iconVisible} />
            </button>
          </div>
          <Link to={'/favourites'} className={styles.heartBtn}>
            <span><Heart size={24} /></span>
          </Link>
        </nav>
        <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : styles.dropdownClosed}`}>
          <nav className={styles.dropdownNav} aria-hidden={!open}>
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
