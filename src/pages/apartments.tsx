import { useState } from 'react';
import { useApartments } from '../hooks/use-apartments'
import { DATA_URL } from '../types/apartment'
import styles from './apartments.module.css'
import { DEFAULT_FILTERS, type ApartmentFilters, type PriceRange } from '../types/filters';
import { filterApartments } from '../utils/filter-apartments';
import { getCurrentElements, getPageNumbers, getTotalPages } from '../utils/pagination';
import { ApartmentStatus } from '../components/apartments/apartment-status';
import { ApartmentsFilters } from '../components/apartments/apartments-filters';
import { ApartmentList } from '../components/apartments/apartment-list';
import { Pagination } from '../components/apartments/apartments-pagination';
import { Link } from 'react-router-dom';


const Apartments = () => {

  const { apartments, error, retry } = useApartments(DATA_URL);
  const [search, setSearch] = useState<string>(DEFAULT_FILTERS.search);
  const [environment, setEnvironment] = useState<string>(DEFAULT_FILTERS.environment);
  const [country, setCountry] = useState<string>(DEFAULT_FILTERS.country);
  const [price, setPrice] = useState<PriceRange>(DEFAULT_FILTERS.price);
  const [page, setPage] = useState<number>(1);

  const filters: ApartmentFilters = { search, environment, country, price };
  const filteredApartments = filterApartments(apartments, filters);

  const totalPages = getTotalPages(filteredApartments.length);
  const currentApartments = getCurrentElements(filteredApartments, page);
  const pageNumbers = getPageNumbers(totalPages);


  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    setPage(1);
  }

  const handleEnvironment = (environment: string) => {
    setEnvironment(environment);
    setPage(1);
  }

  const handleCountry = (country: string) => {
    setCountry(country);
    setPage(1);
  }


  const handlePrice = (price: PriceRange) => {
    setPrice(price);
    setPage(1);
  }

  const handleClear = () => {
    setSearch(DEFAULT_FILTERS.search);
    setEnvironment(DEFAULT_FILTERS.environment);
    setCountry(DEFAULT_FILTERS.country);
    setPrice(DEFAULT_FILTERS.price);
    setPage(1);
  }

  return (
    <main className={`wrapper ${styles.apartmentsPage}`}>
      <header className={styles.header}>
        <Link to={'/apartments'}>
          <h1 className={styles.headerTitle}>Apartments.</h1>
        </Link>

        <p className={styles.headerDescription}>
          A curated index of minimalist apartments, pavilions and architectural
          monographs selected for their spatial purity and terrain resonance.
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

          : (
            <>

              <ApartmentsFilters
                filters={filters}
                apartments={apartments}
                onClear={handleClear}
                onSearch={handleSearch}
                onEnvironment={handleEnvironment}
                onPrice={handlePrice}
                onCountry={handleCountry}
              />


              {filteredApartments.length === 0
                ? (
                  <ApartmentStatus
                    title='No apartments match your criteria.'
                    description='No apartments found for the selected environment, country or price. Reset the filters to view the full index'
                    buttonLabel='RESET FILTERS'
                    onClick={handleClear}
                  />
                )

                : (

                  <>
                    <ApartmentList apartments={currentApartments} />
                    <Pagination
                      currentPage={page}
                      totalPages={totalPages}
                      pages={pageNumbers}
                      onPrevious={() => setPage((currentPage) => currentPage - 1)}
                      onNext={() => setPage((currentPage) => currentPage + 1)}
                      onPageChange={setPage}
                    />
                  </>
                )
              }
            </>
          )
        }
      </section>
    </main>
  )
}

export default Apartments
