import ArticleActions from './ArticleActions';
import styles from './articleDetail.module.css';

interface ArticleDetailsProps {
  title: string;
  price: number;
  rating: number;
  description: string;
  quantity: number;
  onAddToCart: () => void;
}

export default function ArticleDetails({
  title,
  price,
  rating,
  description,
  quantity,
  onAddToCart,
}: ArticleDetailsProps) {
  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.price}>${price}</p>

      <h3 className={styles.ratingTitle}>Rating</h3>
      <p className={styles.rating}>{rating}</p>

      <h3 className={styles.descriptionTitle}>Descripción</h3>
      <p className={styles.description}>{description}</p>

      <ArticleActions quantity={quantity} onAddToCart={onAddToCart}/>
    </div>
  );
}
