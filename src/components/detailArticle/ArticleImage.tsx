import Image from 'next/image';
import styles from './articleDetail.module.css';

interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticleImage({ src, alt }: ArticleImageProps) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        layout="responsive"
        className={styles.image}
      />
    </div>
  );
}
