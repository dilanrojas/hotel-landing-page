import type { ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import styles from './button.module.css'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  chevron?: boolean
  chevronSize?: number
  scheme?: 'light' | 'dark'
}

export default function Button({
  children,
  size,
  variant,
  chevron = false,
  chevronSize = 16,
  scheme,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        styles[`variant_${variant}`],
        size && styles[`size_${size}`],
        scheme && styles[`scheme_${scheme}`],
        props.className
      )}
    >
      {variant === 'primary' && chevron && (
        <>
          <span className={styles.chevron}>
            <ChevronRight size={chevronSize} aria-hidden="true" />
          </span>

          <span className={styles.content}>{children}</span>

          <span className={styles.chevron}>
            <ChevronRight size={chevronSize} aria-hidden="true" />
          </span>
        </>
      )}

      {variant === 'secondary' && chevron && (
        <>
          <span className={styles.content}>{children}</span>

          <span className={styles.secondaryChevrons}>
            <span className={styles.chevron}>
              <ChevronRight size={chevronSize} aria-hidden="true" />
            </span>
            <span className={styles.chevron}>
              <ChevronRight size={chevronSize} aria-hidden="true" />
            </span>
          </span>
        </>
      )}

      {variant === 'tertiary' && (
        <>
          <span className={styles.content}>{children}</span>

          {chevron && (
            <span className={styles.tertiaryChevron}>
              <ChevronRight size={chevronSize} aria-hidden="true" />
            </span>
          )}
        </>
      )}

      {variant !== 'tertiary' && !chevron && (
        <span className={styles.content}>{children}</span>
      )}
    </button>
  )
}
