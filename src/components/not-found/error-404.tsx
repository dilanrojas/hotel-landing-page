import Button from '../ui/button';
import styles from './error-404.module.css';

export default function Error404() {
  return (
    <div className='wrapper'>
      <div className={styles.errorWrapper}>
        <span className={styles.fourOfour}>404</span>
        <article className={styles.article}>
          <h1>Page not found!</h1>
          <p>
            Oops! The page you're looking for doesn’t exist or may have been moved. Please check the URL or return to the homepage
          </p>
        </article>
        <Button
          variant='primary'
          scheme='light'
          chevron
        >
          <span>Back to home</span>
        </Button>

      </div>
    </div>
  )
}
