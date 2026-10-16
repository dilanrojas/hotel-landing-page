import styles from './hero.module.css';
import Button from '../ui/button';
import type { ReactElement } from 'react';

interface Props {
  title: string;
  desc: string;
  card?: ReactElement;
}

export default function Hero(props: Props) {
  return (
    <section className={styles.hero}>
      <div className='wrapper'>
        <article className={styles.article}>
          <h1>{props.title}</h1>
          <p>
            {props.desc}
          </p>
        </article>
        <footer className={styles.footer}>
          <Button
            variant='primary'
            chevronSize={22}
            chevron={true}
            size='lg'
            scheme='dark'
          >
            <span>Book Your Stay</span>
          </Button>
          {props.card && (
            props.card
          )}
        </footer>
      </div>
    </section>
  )
}
