import { useNavigate } from 'react-router-dom'
import { useFavouritesContext } from '../context/favourite-context'
import { useApartments } from '../hooks/use-apartments'
import { ApartmentStatus } from '../components/apartments/apartment-status'
import { FavouritesTable } from '../components/favourites/favourites-table'
import { SummaryBar } from '../components/favourites/favourites-summary-bar'
import { DATA_URL } from '../constants/apartments'
import SectionHeader from '../components/section-header'
import styles from './favourites.module.css'

export default function Favourites() {
  const { apartments, error, retry } = useApartments(DATA_URL)
  const { favourites, clearFavourites } = useFavouritesContext()
  const navigate = useNavigate()

  const favouritesApartments = apartments.filter((apartment) => favourites.includes(apartment.id))

  const favouritesCount = favouritesApartments.length
  const locationsCount = new Set(
    favouritesApartments.map((apartment) => apartment.location.country),
  ).size

  const isEmpty = favouritesApartments.length === 0

  return (
    <main className={`wrapper ${styles.favouritesPage}`}>
      <SectionHeader
        title="Favourites"
        desc="Your personal selection of the minimalist apartments and pavilions, gathered here for closer comparison."
      >
        <div className={styles.summaryBar}>
          <SummaryBar
            savedCount={favouritesCount}
            locationsCount={locationsCount}
            onClear={clearFavourites}
          />
        </div>
      </SectionHeader>

      <section className={styles.body}>
        {error ? (
          <ApartmentStatus
            title="Unable to load your favourites"
            description="The connection to the archive failed while retrieving your favourites. The data is currently unreachable."
            buttonLabel="RETRY CONNECTION"
            onClick={retry}
          />
        ) : isEmpty ? (
          <ApartmentStatus
            title="No favourites saved yet."
            description="Save the apartments you like from the index and they will appear here, so you can compare them in one place."
            buttonLabel="Go to Apartments"
            onClick={() => navigate('/apartments')}
          />
        ) : (
          <FavouritesTable apartments={favouritesApartments} />
        )}
      </section>
    </main>
  )
}
