'use client';
import { QuantitySelector } from '@/components';
import styles from './articleDetail.module.css';
import Link from 'next/link';
import { useState } from 'react';

interface ArticleActionsProps {
  onAddToCart: (quantity: number) => void;
}

export default function ArticleActions({
  onAddToCart,
}: ArticleActionsProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className={styles.actionsContainer}>
      <h3 className={styles.quantityTitle}>Cantidad</h3>
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity}/>
      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        Agregar al carrito
      </button>
      <Link href="/" className={styles.backButton}>
        Volver al listado
      </Link>
    </div>
  );
}
