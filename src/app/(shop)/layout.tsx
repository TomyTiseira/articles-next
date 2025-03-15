import { TopMenu } from '@/components';
import styles from './layout.module.css';
import Sidebar from '@/components/ui/sidebar/Sidebar';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <TopMenu />
      <Sidebar />

      <div className={styles.content}>
        { children }
      </div>
    </main>
  );
}
