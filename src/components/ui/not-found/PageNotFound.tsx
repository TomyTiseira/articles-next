import Link from 'next/link';
import styles from './page-not-found.module.css';

export const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.subtitle}>Not Found</p>
        <p className={styles.description}>
          <span>Puedes regresar al </span>
          <Link href="/" className={styles.link}>Inicio</Link>
        </p>
      </div>
    </div>
  );
};
