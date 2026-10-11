import type { ComponentProps, ReactNode } from 'react';
import styles from './button.module.css';

type ButtonProps = ComponentProps<'button'> & { children: ReactNode };

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}
