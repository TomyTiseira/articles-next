'use client';

import styles from './cartItem.module.css';

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}


// No reutilice el código de QuantitySelector para tener otro estilo más simplificado para el Popup
export const CartQuantitySelector = ({ quantity, onIncrease, onDecrease }: Props) => {
  return (
    <div className={styles.itemActions}>
      <button onClick={onDecrease} className={styles.quantityButton}>-</button>
      <span className={styles.quantityInput}>{quantity}</span>
      <button onClick={onIncrease} className={styles.quantityButton}>+</button>
    </div>
  );
};
