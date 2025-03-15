'use client';
import Link from 'next/link';
import styles from './page-not-found.module.css';

export const NotFound = ({ message = 'Página no encontrada', showHomeLink = true }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>{message}</p>
      {showHomeLink && (
        <Link href="/" className={styles.homeLink}>
          Volver al inicio
        </Link>
      )}
    </div>
  );
};
