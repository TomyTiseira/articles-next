import { Article } from '@/types';
import Image from 'next/image';
import React from 'react';
import styles from './articles-grid-item.module.css';
import Link from 'next/link';

interface Props {
  article: Article;
}

export const ArticlesGridItem = ({ article }: Props) => {
  return (
    <div className={styles.articleContainer}>

      <Link href={`article/${article.id}`} className={styles.articleTitle}>
        <div className={styles.articlesImageContainer}>
          <Image
            src={article.imagen}
            alt={article.titulo || 'Article image'}
            className={styles.articlesImage}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.articleContent}>
          <span className={styles.articleTitle}>{article.titulo}</span>
          <span className={styles.articlePrice}>${article.precio}</span>
        </div>
      </Link>

    </div>
  );
};
