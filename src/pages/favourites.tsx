import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavouritesContext } from '../context/favourite-context'
import { useApartments } from '../hooks/use-apartments'
import { ApartmentStatus } from '../components/apartments/apartment-status'
import { Pagination } from '../components/apartments/apartments-pagination'
import { FavouritesTable } from '../components/favourites/favourites-table'
import { SummaryBar } from '../components/favourites/favourites-summary-bar'
import { DATA_URL } from '../constants/apartments'
import { getCurrentElements, getPageNumbers, getTotalPages } from '../utils/pagination'
import SectionHeader from '../components/section-header'
import styles from './favourites.module.css'

export default function Favourites() {
  const { apartments, error, retry } = useApartments(DATA_URL)
  const { favourites, clearFavourites } = useFavouritesContext()
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const favouritesApartments = apartments.filter((apartment) => favourites.includes(apartment.id))
  const totalPages = getTotalPages(favouritesApartments.length)
  const currentPage = Math.min(page, totalPages)
  const currentFavourites = getCurrentElements(favouritesApartments, currentPage)
  const pageNumbers = getPageNumbers(totalPages)

  const favouritesCount = favouritesApartments.length
  const locationsCount = new Set(
    favouritesApartments.map((apartment) => apartment.location.country),
  ).size

  const handleScroll = () => window.scrollTo({ top: 0 })

  const handlePrevious = () => {
    setPage(Math.max(1, currentPage - 1))
    handleScroll()
  }

  const handleNext = () => {
    setPage(Math.min(totalPages, currentPage + 1))
    handleScroll()
  }

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage)
    handleScroll()
  }

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
          <>
            <FavouritesTable apartments={currentFavourites} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              pages={pageNumbers}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </main>
  )
}
