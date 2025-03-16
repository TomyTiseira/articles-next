'use client';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import styles from './cart-popup.module.css';
import { useCartStore } from '@/store/cart/cartStore';
import { CartItem } from './CartItem';

export const CartPopup = ({ onClose }: { onClose: () => void }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const totalItems = cartItems.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className={styles.cartPopup}>
      {/* Encabezado del popup */}
      <div className={styles.cartHeader}>
        <h3>Mi Carrito</h3>
        <button onClick={onClose} className={styles.closeButton}>
          <IoClose size={24} />
        </button>
      </div>

      {/* Listado de productos */}
      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            ))}
          </div>
          <div className={styles.cartSummary}>
            <p>Total ({totalItems} productos): <strong>${totalPrice.toFixed(2)}</strong></p>
            <Link href="/checkout" className={styles.checkoutButton} onClick={onClose}>
              Confirmar pedido
            </Link>
          </div>
        </>
      ) : (
        /* Mensaje de carrito vacío */
        <div className={styles.emptyCart}>
          <p>Tu carrito está vacío</p>
          <Link href="/" className={styles.shopButton} onClick={onClose}>
            Ir a comprar
          </Link>
        </div>
      )}
    </div>
  );
};
