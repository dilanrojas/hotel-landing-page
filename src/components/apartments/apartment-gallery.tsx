import { useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Apartment } from '../../types/apartment';
import Button from '../ui/button';
import GalleryImage from './gallery-image';
import styles from './apartment-gallery.module.css';

interface ApartmentGalleryProps{
    apartment: Apartment;
}

type GalleryImageKey = keyof Apartment['galleryImages'];

const imageLabels: Record<GalleryImageKey, string> = {
  exterior: 'Exterior',
  bedroom: 'Bedroom',
  bathroom: 'Bathroom',
  kitchen: 'Kitchen',
  livingRoom: 'Living room',
};

export default function ApartmentGallery({
    apartment
}: ApartmentGalleryProps) {
    const entries = Object.entries(apartment.galleryImages) as [
        GalleryImageKey,
        string,
    ][];

    const images = entries.map(([id,src]) => ({
        id,
        src,
        label: imageLabels[id],
    }));

    const [activeIndex, setActiveIndex] = useState(0);

    if (images.length === 0) {
        return <p>No photos available.</p>;
    }

    const activeImage = images[activeIndex];

    const showPrevious = () => {
        setActiveIndex(
            (currentIndex) =>
            (currentIndex -1 + images.length) % images.length,
        );
    };

    const showNext = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % images.length,
    );
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showPrevious();
        }

        if(event.key === 'ArrowRight') {
            event.preventDefault();
            showNext();
        }
    };

    return (
    <section
      className={styles.gallery}
      aria-label={`Photos of ${apartment.name}`}
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      <div className={styles.mainFrame}>
        <GalleryImage
          key={activeImage.src}
          src={activeImage.src}
          alt={`${activeImage.label} of ${apartment.name}`}
          className={styles.mainImage}
        />
      </div>

      <div className={styles.controls}>
        <Button
          type="button"
          variant="secondary"
          aria-label="Previous photo"
          disabled={images.length < 2}
          onClick={showPrevious}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </Button>

        <p
          className={styles.caption}
          aria-live="polite"
          aria-atomic="true"
        >
          {activeImage.label}
          <span>
            {activeIndex + 1} / {images.length}
          </span>
        </p>

        <Button
          type="button"
          variant="secondary"
          aria-label="Next photo"
          disabled={images.length < 2}
          onClick={showNext}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </Button>
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={styles.thumbnail}
            aria-label={`Show ${image.label.toLowerCase()} photo`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <GalleryImage
              key={image.src}
              src={image.src}
              alt=""
              className={styles.thumbnailImage}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
}