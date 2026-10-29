import Button from '../ui/button';
import styles from './apartment-status.module.css';


interface ApartmentStatusProps {
  title: string,
  description: string,
  buttonLabel: string,
  onClick: () => void;
}


export const ApartmentStatus = ({ title, description, buttonLabel, onClick }: ApartmentStatusProps) => {
  return (
    <section className={styles.status}>
      <h2 className={styles.statusTitle}>{title}</h2>
      <p className={styles.statusDescription}>{description}</p>
      <Button
        variant='primary'
        chevron
        chevronSize={15}
        onClick={onClick}
        scheme='light'
      >

        {buttonLabel}
      </Button>
    </section>
  )
}

