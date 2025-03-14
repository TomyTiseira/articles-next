import { Article } from '@/types';
import articlesData from '@/data/articles.json';

// Simular un retraso de 1 segundo
const simulateDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

// Obtener todos los artículos
export const fetchArticles = async(): Promise<Article[]> => {
  await simulateDelay();
  return articlesData as Article[];
};
