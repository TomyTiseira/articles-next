import { QuantitySelector } from '@/components';
import styles from './articleDetail.module.css';
import Link from 'next/link';

interface ArticleActionsProps {
  quantity: number;
  onAddToCart: () => void;
}

export default function ArticleActions({
  quantity,
  onAddToCart,
}: ArticleActionsProps) {
  return (
    <div className={styles.actionsContainer}>
      <h3 className={styles.quantityTitle}>Cantidad</h3>
      <QuantitySelector quantity={quantity} />
      <button className={styles.addToCartButton} onClick={onAddToCart}>
        Agregar al carrito
      </button>
      <Link href="/" className={styles.backButton}>
        Volver al listado
      </Link>
    </div>
  );
}
