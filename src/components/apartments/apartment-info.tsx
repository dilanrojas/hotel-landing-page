import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import type { Apartment } from "../../types/apartment";
import ApartmentAmenities from "./apartment-amenities";
import styles from './apartment-detail.module.css';

interface ApartmentInfoProps {
    apartment: Apartment;
}

export default function ApartmentInfo({
    apartment,
}: ApartmentInfoProps) {
    const { location } = apartment;

    return(
        <div className={styles.info}>
            <header className={styles.heading}>
                <p className={styles.eyebrow}>
                    {apartment.environment}
                    {apartment.featured ? ' . Featured property' : ''}
                </p>

                <h1>{apartment.name}</h1>

                <p className={styles.location}>
                    <MapPin size={18} aria-hidden="true" />
                    <span>
                        {location.neighborhood}, {location.city}, {location.country}
                    </span>
                </p>
                <p>{apartment.summary}</p>
            </header>

            <dl className={styles.specs}>
                <div>
                    <dt>
                        <BedDouble size={20} aria-hidden="true"/>
                        Bedrooms
                    </dt>
                    <dd>{apartment.bedrooms}</dd>
                </div>

                <div>
                    <dt>
                        <Bath size={20} aria-hidden="true"/>
                        Bathrooms
                    </dt>
                    <dd>{apartment.bathrooms}</dd>
                </div>

                <div>
                    <dt>
                        <Maximize size={20} aria-hidden="true"/>
                        Area
                    </dt>
                    <dd>{apartment.areaM2} m²</dd>
                </div>
            </dl>

            <section className={styles.section}>
                <h2>about this property</h2>
                <p>{apartment.description}</p>
            </section>

            <ApartmentAmenities amenities={apartment.amenities}/>
        </div>
    );
}