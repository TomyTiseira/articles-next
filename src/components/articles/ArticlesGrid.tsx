'use client';
import React, { useState } from 'react';
import { ArticlesGridItem } from './ArticlesGridItem';
import styles from './articles-grid.module.css';
import { useFetch } from '@/hooks/useFetch';
import { fetchArticles } from '@/services/articleService';
import { Searchbar } from '../ui/searchbar/Searchbar';


export const ArticlesGrid = () => {
  const { data, isLoading, error } = useFetch(fetchArticles);
  const [searchQuery, setSearchQuery] = useState('');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ocurrió un error</p>;
  }

  if (data === null) {
    return <p>No hay Artículos disponibles</p>;
  }

  // Filtrar articulos en función del título
  const filteredArticles = data.filter((article) =>
    article.titulo.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {/* Barra de búsqueda */}
      <Searchbar onSearch={(query) => setSearchQuery(query)} />
      <div className={styles.gridContainer}>
        {/* Lista de usuarios */}
        {
          filteredArticles.map(article => (
            <ArticlesGridItem key={article.id} article={article} />
          ))
        }
      </div>
    </div>
  );
};
