import React from 'react';
import styles from './title.module.css';

interface Props {
  title: string,
  subtitle?: string;
  className?: string
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={`${styles.title} ${className || ''}`}>{title}</h1>

      { subtitle && (
        <h3 className={styles.subtitle}>{subtitle}</h3>
      )}
    </div>
  );
};
