'use client';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import styles from './top-menu.module.css';
import { useUiStore } from '@/store';
import { useCartStore } from '@/store/cart/cartStore';

export const TopMenu = () => {
  const { openSideMenu, isSideMenuOpen, closeSideMenu } = useUiStore();
  const cartItems = useCartStore((state) => state.cartItems);

  // Función para alternar el menú lateral
  const toggleSideMenu = () => {
    if (isSideMenuOpen) {
      closeSideMenu(); // Cierra el menú si está abierto
    } else {
      openSideMenu(); // Abre el menú si está cerrado
    }
  };

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
      <div className={styles.cartContainer} onClick={toggleSideMenu} aria-label={isSideMenuOpen ? 'Cerrar carrito' : 'Abrir carrito'}>
        {uniqueProductCount !== 0 && (<span className={styles.cartBadge}>{uniqueProductCount}</span>)}
        <IoCartOutline className={styles.cartIcon} />
      </div>
    </nav>
  );
};
