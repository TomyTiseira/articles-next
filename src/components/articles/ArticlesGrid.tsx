'use client'; // Marca este archivo como Client Component
import React from 'react';
import { ArticlesGridItem } from './ArticlesGridItem';
import styles from './articles-grid.module.css';
import { useFetch } from '@/hooks/useFetch';
import { fetchArticles } from '@/services/articleService';


export const ArticlesGrid = () => {
  const { data, isLoading, error } = useFetch(fetchArticles);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ocurrió un error</p>;
  }

  if (data === null) {
    return <p>No hay Artículos disponibles</p>;
  }

  return (
    <div className={styles.gridContainer}>
      {
        data.map(article => (
          <ArticlesGridItem key={article.id} article={article} />
        ))
      }
    </div>
  );
};
