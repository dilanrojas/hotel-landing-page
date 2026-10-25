import type { Apartment } from "../../types/apartment";
import styles from './apartment-detail.module.css';

interface ApartmentHeroProps{
    apartment: Apartment;
}

export default function ApartmentHero({
    apartment,
}: ApartmentHeroProps) {
    return (
        <figure className={styles.hero}>
            <img 
              src={apartment.image}
              alt={`Exterior of ${apartment.name}`}
            />
        </figure>
    );
}
