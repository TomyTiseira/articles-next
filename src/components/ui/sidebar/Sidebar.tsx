'use client';
import Link from 'next/link';
import React from 'react';
import {
  IoCloseOutline,
  IoHeadsetOutline,
  IoHomeOutline,
  IoLaptopOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
import styles from './sidebar.module.css';
import { useUiStore } from '@/store';

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
        {/* Botón de cierre */}
        <IoCloseOutline
          size={30}
          className={styles.closeButton}
          onClick={closeSideMenu}
        />

        {/* Enlaces del menú */}
        <Link
          href="/"
          className={styles.menuLink}
          onClick={closeSideMenu}
        >
          <IoHomeOutline size={24} className={styles.icon} />
          <span className={styles.linkText}>Inicio</span>
        </Link>

        <Link
          href="/category/Electrónica"
          className={styles.menuLink}
          onClick={closeSideMenu}
        >
          <IoPhonePortraitOutline size={24} className={styles.icon} />
          <span className={styles.linkText}>Electrónica</span>
        </Link>

        <Link
          href="/category/Accesorios"
          className={styles.menuLink}
          onClick={closeSideMenu}
        >
          <IoHeadsetOutline size={24} className={styles.icon} />
          <span className={styles.linkText}>Accesorios</span>
        </Link>

        <Link
          href="/category/Computadoras"
          className={styles.menuLink}
          onClick={closeSideMenu}
        >
          <IoLaptopOutline size={24} className={styles.icon} />
          <span className={styles.linkText}>Computadoras</span>
        </Link>
      </nav>
    </>
  );
}
