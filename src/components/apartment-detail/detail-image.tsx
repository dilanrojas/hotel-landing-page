import { useState } from 'react';
import styles from './apartment-detail.module.css';

interface DetailImageProps {
  src: string;
  alt: string;
  className: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function DetailImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
}: DetailImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span
        className={`${styles.imageFallback} ${className}`}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        Image unavailable
      </span>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setHasError(true)}
    />
  );
}
