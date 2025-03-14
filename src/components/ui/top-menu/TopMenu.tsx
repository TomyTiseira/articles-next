import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import styles from './top-menu.module.css';

export const TopMenu = () => {
  return (
    <nav className={styles.navbar}>
      {/* Nombre de la app */}
      <div>
        <Link href="/" className={styles.logo}>
          <span>Articles Shop</span>
        </Link>
      </div>

      {/* Center menu */}
      <div className={styles.centerMenu}>
        <Link className={styles.menuLink} href='/category/Electrónica'>Electrónica</Link>
        <Link className={styles.menuLink} href='/category/Accesorios'>Accesorios</Link>
        <Link className={styles.menuLink} href='/category/Computadoras'>Computadoras</Link>
      </div>

      {/* Cart */}
      <div className={styles.cartContainer}>
        <Link href="/cart">
          <span className={styles.cartBadge}>3</span>
          <IoCartOutline className={styles.cartIcon} />
        </Link>
      </div>
    </nav>
  );
};
