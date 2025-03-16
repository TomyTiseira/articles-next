'use client';
import { IoTrashBin } from 'react-icons/io5';
import Image from 'next/image';
import styles from './cartItem.module.css';
import { CartItem as CartItemType } from '@/types';
import { CartQuantitySelector } from './CartQuantitySelector';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export const CartItem = ({ item, onRemove, onIncrease, onDecrease }: CartItemProps) => {

  return (
    <div className={styles.cartItem}>
      <Image src={item.imagen} alt={item.titulo} className={styles.itemImage} width={500} height={500} />
      <div className={styles.itemDetails}>
        <h4 className={styles.itemTitle}>{item.titulo}</h4>
        <p className={styles.itemPrice}>${item.precio.toFixed(2)}</p>
        <CartQuantitySelector
          quantity={item.cantidad}
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
        />
        <p className={styles.itemTotal}>${(item.precio * item.cantidad).toFixed(2)}</p>
      </div>
      <button onClick={() => onRemove(item.id)} className={styles.removeButton}>
        <IoTrashBin size={16} color="red" />
      </button>
    </div>
  );
};
