import type { ReactNode } from 'react';
import styles from './section-header.module.css';

interface Props {
  title: string;
  desc: string;
  children?: ReactNode;
}

export default function SectionHeader(props: Props) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.desc}>{props.desc}</p>
      </div>
      {props.children && props.children}
    </header>
  )
}
