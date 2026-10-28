import { clsx } from 'clsx';
import styles from './logo.module.css';
import { Link } from 'react-router-dom';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo(props: Props) {
  return (
    <Link to={'/'}>
      <span
        className={clsx(
          styles.logo,
          styles[`size_${props.size}`]
        )}
      >
        Harly
      </span>
    </Link>
  )
}
