import { Heart } from 'lucide-react';
import Logo from '../logo';
import styles from './header.module.css';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

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
    <header className={`${styles.header} ${isHome ? styles.onHome : styles.offHome}`}>
      <div ref={containerRef} >
        <nav className={styles.pmNav}>
          <Logo size='xl' />
          <ul className={styles.pmNavList}>
            <li>
              <NavLink
                to={'/apartments'}
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                <span>Apartments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/contact'}
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
          <Link to={'/favourites'} className={styles.heartBtn}>
            <span><Heart size={24} /></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
