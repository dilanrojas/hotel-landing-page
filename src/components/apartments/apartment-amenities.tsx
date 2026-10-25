import { Check } from 'lucide-react';
import styles  from './apartment-detail.module.css';

interface ApartmentAmenitiesProps {
    amenities: string[];
}

export default function ApartmentAmenities({
    amenities,
}: ApartmentAmenitiesProps) {
    return (
        <section className={styles.section}>
            <h2>Amenities</h2>

            {amenities.length === 0 ? (
                <p>No amenities listed.</p>
            ) : (
                <ul className={styles.amenities}>
                    {amenities.map((amenity) => (
                        <li key={amenity}>
                            <Check size={18} aria-hidden= "true"/>
                            <span>{amenity}</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}