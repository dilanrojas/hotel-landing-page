import styles from './favourites.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useFavouritesContext } from "../context/favourite-context";
import { useApartments } from "../hooks/use-apartments"
import { useRef, useState } from 'react';

import { ApartmentList } from "../components/apartments/apartment-list";
import { ApartmentStatus } from "../components/apartments/apartment-status";
import { Pagination } from '../components/apartments/apartments-pagination';

import { DATA_URL } from "../types/apartment";
import { getCurrentElements, getPageNumbers, getTotalPages } from '../utils/pagination';

export default function Favourites() {
  const { apartments, error, retry } = useApartments(DATA_URL);
  const { favourites } = useFavouritesContext();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const apartmentsRef = useRef<HTMLDivElement>(null);

  const favouritesApartments = apartments.filter((apartment) => favourites.includes(apartment.id));
  const currentFavourites = getCurrentElements(favouritesApartments, page);
  const totalPages = getTotalPages(favouritesApartments.length);
  const pageNumbers = getPageNumbers(totalPages);

  const handleScroll = () => apartmentsRef.current?.scrollIntoView({ block: 'start' })
  const handlePrevious = () => {
    setPage((current) => current - 1);
    handleScroll();
  }
  const handleNext = () => {
    setPage((current) => current + 1);
    handleScroll();
  }
  const handlePageChange = (page: number) => {
    setPage(page);
    handleScroll();
  }
  return (

    <main className={`wrapper ${styles.favouritesPage}`}>
      <header className={styles.header}>
        <Link to={'/favourites'}>
          <h2 className={styles.headerTitle}>Favourites.</h2>
        </Link>
        <p className={styles.headerDescription}>
          Your personal selection of the minimalist apartments and pavilions, gathered here for closer comparison.
        </p>
      </header>

      <section className={styles.body}>

        {error

          ? (
            <ApartmentStatus
              title='Unable to load the apartments'
              description='The connection to the archive failed while retrieving the apartments. The data is currently unreachable.'
              buttonLabel='RETRY CONNECTION'
              onClick={retry}
            />
          )
          : favourites.length === 0 ? (
            <ApartmentStatus
              title='No favourites saved yet.'
              description='Save the apartments you like from the index and they will appear here, so you can compare them in one place.'
              buttonLabel="Go to Apartments"
              onClick={() => navigate('/apartments')}
            />
          )

            : (

              <>
                <div ref={apartmentsRef}>
                  <ApartmentList apartments={currentFavourites} />
                </div>
                <Pagination
                  currentPage={page}
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
