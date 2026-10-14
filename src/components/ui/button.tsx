import type { ComponentProps, ReactNode } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg' | 'xl'
  chevronRight?: boolean;
  chevronRightSize?: number;
};

export default function Button({
  children,
  size,
  variant,
  chevronRight,
  chevronRightSize,
  ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        styles[`chevron_right_${chevronRight}`],
        props.className
      )}
      {...props}
    >
      {chevronRight && (
        <span className={styles.chevron}>
          <ChevronRight size={chevronRightSize} />
        </span>
      )}

      {children}

      {chevronRight && (
        <span className={styles.chevron}>
          <ChevronRight size={chevronRightSize} />
        </span>
      )}
    </button>
  )
}
