'use client';
import React from 'react';
import styles from './sidebar.module.css';
import { useUiStore } from '@/store';
import { CartPopup } from '@/components/cart/CartPopup';

export default function Sidebar() {
  const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen);
  const closeSideMenu = useUiStore(state => state.closeSideMenu);


  return (
    <>
      {/* Fondo oscuro con blur (solo se muestra si el sidebar está abierto) */}
      {isSideMenuOpen && (
        <>
          <div className={styles.overlay}></div>
          {/* Se cierra cuando se hace click en el blur */}
          <div className={styles.blur} onClick={closeSideMenu}></div>
        </>
      )}

      {/* Sidebar */}
      <nav
        className={`${styles.sidebar} ${isSideMenuOpen ? styles.sidebarOpen : ''}`}
      >
        <CartPopup onClose={closeSideMenu}/>
      </nav>
    </>
  );
}
