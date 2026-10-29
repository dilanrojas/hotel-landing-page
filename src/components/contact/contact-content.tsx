
import type { ReactNode } from 'react'
import styles from './contact-content.module.css'

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
      <div className='wrapper'>
        {children}
      </div>
    </section>
  )
}
