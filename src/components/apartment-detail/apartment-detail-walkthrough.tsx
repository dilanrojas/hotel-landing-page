import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { useReveal } from '../../hooks/use-reveal';
import type { Apartment } from '../../types/apartment';
import DetailImage from './detail-image';
import styles from './apartment-detail.module.css';

interface ApartmentDetailWalkthroughProps {
  apartment: Apartment;
}

interface SceneProps {
  index: string;
  kicker: string;
  title: string;
  image: string;
  alt: string;
  children: ReactNode;
}

function Scene({
  index,
  kicker,
  title,
  image,
  alt,
  children,
}: SceneProps) {
  const titleId = `apartment-scene-${index}`;
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${styles.scene} ${isVisible ? styles.sceneVisible : ''}`}
      aria-labelledby={titleId}
    >
      <div className={styles.sceneCopy}>
        <p className={styles.sceneKicker}>
          <span>{index}</span>
          <span>{kicker}</span>
        </p>

        <h3 className={styles.sceneTitle} id={titleId}>
          {title}
        </h3>

        {children}
      </div>

      <figure className={styles.sceneFigure}>
        <DetailImage
          src={image}
          alt={alt}
          className={styles.sceneImage}
          loading="lazy"
        />

        <figcaption className={styles.sceneCaption}>
          <span>{index} / 04</span>
        </figcaption>
      </figure>
    </section>
  );
}

export default function ApartmentDetailWalkthrough({
  apartment,
}: ApartmentDetailWalkthroughProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const { galleryImages } = apartment;

  return (
    <section className={styles.walkthrough} aria-labelledby="walkthrough-title">
      <header
        ref={ref}
        className={`${styles.walkthroughHeader} ${styles.reveal} ${
          isVisible ? styles.revealVisible : ''
        }`}
      >
        <h2 className={styles.walkthroughLabel} id="walkthrough-title">
          Walkthrough
        </h2>
        <p className={styles.walkthroughCount}>04 spaces</p>
      </header>

      <Scene
        index="01"
        kicker="The house"
        title="Living room"
        image={galleryImages.livingRoom}
        alt={`Living room at ${apartment.name}`}
      >
        <p className={styles.sceneBody}>{apartment.description}</p>

        <p className={styles.sceneStat}>
          <span className={styles.sceneStatValue}>{apartment.areaM2}</span>
          <span className={styles.sceneStatUnit}>m²</span>
        </p>
      </Scene>

      <Scene
        index="02"
        kicker="Sleep"
        title={apartment.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
        image={galleryImages.bedroom}
        alt={`Bedroom at ${apartment.name}`}
      >
        <p className={styles.sceneStat}>
          <span className={styles.sceneStatValue}>{apartment.bedrooms}</span>
        </p>
      </Scene>

      <Scene
        index="03"
        kicker="Bathe"
        title={apartment.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}
        image={galleryImages.bathroom}
        alt={`Bathroom at ${apartment.name}`}
      >
        <p className={styles.sceneStat}>
          <span className={styles.sceneStatValue}>{apartment.bathrooms}</span>
        </p>
      </Scene>

      <Scene
        index="04"
        kicker="The details"
        title="Amenities"
        image={galleryImages.kitchen}
        alt={`Kitchen at ${apartment.name}`}
      >
        {apartment.amenities.length === 0 ? (
          <p className={styles.sceneBody}>No amenities listed.</p>
        ) : (
          <ul className={styles.amenities}>
            {apartment.amenities.map((amenity) => (
              <li key={amenity}>
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        )}
      </Scene>
    </section>
  );
}
