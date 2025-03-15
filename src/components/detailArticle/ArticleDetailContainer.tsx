import ArticleImage from './ArticleImage';
import ArticleDetails from './ArticleDetails';
import styles from './articleDetail.module.css';

interface ArticleDetailProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  onAddToCart: () => void;
}

export default function ArticleDetailContainer({
  image,
  title,
  price,
  rating,
  description,
  onAddToCart,
}: ArticleDetailProps) {
  return (
    <div className={styles.container}>
      <ArticleImage src={image} alt={title} />
      <ArticleDetails
        title={title}
        price={price}
        rating={rating}
        description={description}
        quantity={2}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
