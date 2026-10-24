
import type { ReactNode } from 'react'
import styles from './contactContent.module.css'

interface ContactContentProps {
  children: ReactNode
}

export default function ContactContent({
  children
}: ContactContentProps) {
  return (
    <section
      className={styles.contactSection}
      aria-label="Contact information and message form"
    >
      {children}
    </section>
  )
}
