import styles from "./apartment-list.module.css"
import { useFavouritesContext } from "../../context/favourite-context"
import type { Apartment } from "../../types/apartment"
import { ApartmentCard } from "./apartment-card"


interface ApartmentListProps {
  apartments: Apartment[]

}

export const ApartmentList = ({ apartments }: ApartmentListProps) => {
  const { isFavourite, toggleFavourite } = useFavouritesContext();


  return (

    <ul className={styles.apartmentList} aria-label="Apartment List">

      {apartments.map((apartment) => (

        <li key={apartment.id}>
          <ApartmentCard
            apartment={apartment}
            isFavourite={isFavourite(apartment.id)}
            onToggleFavourite={() => toggleFavourite(apartment.id)}
          />
        </li>
      ))}
    </ul>







  )
}

