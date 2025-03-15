import { NotFound } from '@/components';


export default function ArticleNotFound() {
  return (
    <NotFound
      message="Artículo no encontrado"
      showHomeLink={true}
    />
  );
}
