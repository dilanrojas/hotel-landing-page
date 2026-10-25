import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import  type { Apartment } from '../../types/apartment';
import { useFavouritesContext } from "../../context/favourite-context";
import Button from "../ui/button";
import styles from './apartment-detail.module.css';

interface ApartmentActionsProps{
    apartment: Apartment;
}

export default function ApartmentActions({
    apartment,
}: ApartmentActionsProps) {
    const { isFavourite, toggleFavourite } = useFavouritesContext();
    const favourite = isFavourite(apartment.id);

    return(
        <aside className={styles.card} aria-label="Property enquiries">
            <p>Price</p>

            <p className={styles.price}>
                {apartment.price.toLocaleString('en-US')}
            </p>

            <p>Contact us for pricing details and availability.</p>

            <div className={styles.actions}>
                <Link
                    className={styles.contactLink}
                    to={`/contact?apartment=${encodeURIComponent(apartment.id)}`}
                >
                    Request information
                </Link>

                <Button
                    type="button"
                    variant="secondary"
                    aria-pressed={favourite}
                    onClick={() => toggleFavourite(apartment.id)}
                >
                    <span className={styles.favouriteContent}>
                        <Heart
                            size={18}
                            aria-hidden="true"
                            fill={favourite ? 'currentColor' : 'none'}
                        />

                        {favourite ? 'saved to favourites' : 'save to favourites'}
                    </span>
                </Button>
            </div>
        </aside>
    );
}
