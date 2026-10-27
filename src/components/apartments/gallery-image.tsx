import { useState } from "react";
import styles from './apartment-gallery.module.css';

interface GalleryImageProps{
    src: string;
    alt: string;
    className: string;
    loading?: 'eager' | 'lazy';
}

export default function GalleyImages({
    src,
    alt,
    className,
    loading = 'eager',
}: GalleryImageProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <span
                className={`${className} ${styles.imageError}`}
                role= "img"
                aria-label={alt || 'image unavailable'}
            >
                Image Unavailable
            </span>
        );
    }

    return(
        <img 
        src= {src}
        alt= {alt}
        className={className}
        loading={loading}
        onError={() => setHasError(true)}
        />
    );
}