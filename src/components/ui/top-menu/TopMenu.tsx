'use client';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import styles from './top-menu.module.css';
import { useUiStore } from '@/store';
import { useCartStore } from '@/store/cart/cartStore';

export const TopMenu = () => {
  const openSideMenu = useUiStore(state => state.openSideMenu);
  const cartItems = useCartStore((state) => state.cartItems);

  // Calcula la cantidad de productos distintos en el carrito
  const uniqueProductCount = cartItems.length;
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
      <div className={styles.cartContainer} onClick={openSideMenu}>
        {uniqueProductCount !== 0 && (<span className={styles.cartBadge}>{uniqueProductCount}</span>)}
        <IoCartOutline className={styles.cartIcon} />
      </div>
    </nav>
  );
};
