'use client';
import { Article } from '@/types';
import Image from 'next/image';
import React from 'react';
import styles from './articles-grid-item.module.css';
import Link from 'next/link';
import { useFavoritesStore } from '@/store/favoritesStore';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

interface Props {
  article: Article;
}

export const ArticlesGridItem = ({ article }: Props) => {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(article.id);

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
      </Link>
      <div className={styles.articleContent}>
        <span className={styles.articleTitle}>{article.titulo}</span>
        <span className={styles.articlePrice}>${article.precio}</span>
        <button onClick={() => toggleFavorite(article.id)} className={styles.favoriteButton}>
          {isFavorite ? <IoHeart size={24} color="#ef4444"/> : <IoHeartOutline size={24} color="#374151" />}
        </button>
      </div>

    </div>
  );
};
