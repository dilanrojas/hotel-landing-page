import type { ComponentProps, ReactNode } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl'
  chevron?: boolean;
  chevronSize?: number;
  scheme?: 'light' | 'dark';
};

export default function Button({
  children,
  size,
  variant,
  chevron,
  chevronSize,
  scheme,
  ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        styles[`chevron_right_${chevron}`],
        styles[`scheme_${scheme}`],
        props.className
      )}
    >
      {variant === 'primary' && chevron && (
        <>
          <span className={styles.chevron}>
            <ChevronRight size={chevronSize} />
          </span>

          <span className={styles.content}>
            {children}
          </span>

          <span className={styles.chevron}>
            <ChevronRight size={chevronSize} />
          </span>
        </>
      )}

      {variant === 'secondary' && chevron && (
        <>
          <span className={styles.content}>{children}</span>
          <div className={styles.secondaryChevrons}>
            <span className={styles.chevron}>
              <ChevronRight size={chevronSize} />
            </span>
            <span className={styles.chevron}>
              <ChevronRight size={chevronSize} />
            </span>
          </div>

        </>
      )}

      {!chevron && (
        <span className={styles.content}>{children}</span>
      )}
    </button>
  )
}
