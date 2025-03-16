'use client';
import ArticleDetailContainer from '@/components/detailArticle/ArticleDetailContainer';
import { useFetch } from '@/hooks/useFetch';
import { fetchArticle } from '@/services/articleService';
import { notFound } from 'next/navigation';
import { use, useEffect } from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ArticleDetailPage({ params }: Props) {
  const { id } = use(params);
  const articleId = parseInt(id);

  const { data, isLoading, error } = useFetch(() => fetchArticle(articleId));

  useEffect(() => {
    if (!isLoading && !data) {
      notFound();
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Cargando artículo...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <ArticleDetailContainer
      id={articleId}
      image={data?.imagen || ''}
      title={data?.titulo || ''}
      price={data?.precio || 0}
      rating={data?.rating || 0}
      description={data?.descripcion || ''}
    />
  );
}
