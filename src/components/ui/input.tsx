import { type ComponentProps } from 'react'
import styles from './input.module.css'

type InputProps = ComponentProps<'input'> & {
  error?: boolean;
};

export default function Input({ error, ...props }: InputProps) {
  return (
    <input className={styles.input} {...props} data-error={error || undefined} />
  )
}
