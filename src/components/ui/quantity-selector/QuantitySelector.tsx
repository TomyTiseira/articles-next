'use client';
import React, { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import styles from './quantity-selector.module.css';

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;
    if (count + value > 10) return;

    setCount(count + value);
  };

  return (
    <div className={styles.container}>
      {/* Botón para disminuir la cantidad */}
      <button
        onClick={() => onQuantityChange(-1)}
        className={styles.button}
      >
        <IoRemoveOutline className={styles.icon} />
      </button>

      {/* Cantidad actual */}
      <span className={styles.quantity}>{count}</span>

      {/* Botón para aumentar la cantidad */}
      <button
        onClick={() => onQuantityChange(1)}
        className={styles.button}
      >
        <IoAddOutline className={styles.icon} />
      </button>
    </div>
  );
};
