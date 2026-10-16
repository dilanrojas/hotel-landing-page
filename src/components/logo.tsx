import { clsx } from 'clsx';
import styles from './logo.module.css';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo(props: Props) {
  return (
    <span
      className={clsx(
        styles.logo,
        styles[`size_${props.size}`]
      )}
    >
      Hotelry
    </span>
  )
}
