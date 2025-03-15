import { ArticlesGrid, Title } from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Title title='Tienda' subtitle='Todos los articulos'/>
      <ArticlesGrid />
    </div>
  );
}
