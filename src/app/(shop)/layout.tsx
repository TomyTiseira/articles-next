import { TopMenu } from '@/components';
import styles from './layout.module.css';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <TopMenu />

      <div className={styles.content}>
        { children }
      </div>
    </main>
  );
}
