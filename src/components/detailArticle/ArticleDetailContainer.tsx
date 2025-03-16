'use client';
import ArticleImage from './ArticleImage';
import ArticleDetails from './ArticleDetails';
import styles from './articleDetail.module.css';
import { useCartStore } from '@/store/cart/cartStore';

interface ArticleDetailProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  description: string;
}

export default function ArticleDetailContainer({
  id,
  image,
  title,
  price,
  rating,
  description,
}: ArticleDetailProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (quantity: number) => {
    addToCart(
      {
        id,
        titulo: title,
        imagen: image,
        precio: price,
      },
      quantity,
    );
  };

  return (
    <div className={styles.container}>
      <ArticleImage src={image} alt={title} />
      <ArticleDetails
        title={title}
        price={price}
        rating={rating}
        description={description}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
