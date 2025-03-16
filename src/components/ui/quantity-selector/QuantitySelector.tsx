'use client';
import React, { useEffect, useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import styles from './quantity-selector.module.css';

interface Props {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChange }: Props) => {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    onQuantityChange(count);
  }, [count, onQuantityChange]);

  const handleQuantityChange = (value: number) => {
    if (count + value < 1) return;
    if (count + value > 10) return;

    setCount(count + value);
  };

  return (
    <div className={styles.container}>
      {/* Botón para disminuir la cantidad */}
      <button
        onClick={() => handleQuantityChange(-1)}
        className={styles.button}
      >
        <IoRemoveOutline className={styles.icon} />
      </button>

      {/* Cantidad actual */}
      <span className={styles.quantity}>{count}</span>

      {/* Botón para aumentar la cantidad */}
      <button
        onClick={() => handleQuantityChange(1)}
        className={styles.button}
      >
        <IoAddOutline className={styles.icon} />
      </button>
    </div>
  );
};
