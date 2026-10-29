import styles from './apartments-filters.module.css'
import type { Apartment } from "../../types/apartment"
import { type ApartmentFilters, type PriceRange } from "../../types/filters"
import { countActiveFilters, getCountryOptions, getEnvironmentOptions, getPriceBounds } from "../../utils/filter-apartments"
import SearchBar from './apartments-search-bar'
import { FilterGroup } from './apartments-filter-group'
import { FilterPrice } from './apartments-filter-price'
import { ALL } from '../../constants/filters'

interface ApartmentsFiltersProps {
  filters: ApartmentFilters
  apartments: Apartment[]
  onSearch: (search: string) => void
  onEnvironment: (environment: string) => void
  onCountry: (country: string) => void
  onPrice: (price: PriceRange) => void
  onClear: () => void
}
export const ApartmentsFilters = ({ filters, apartments, onSearch, onEnvironment, onCountry, onPrice, onClear }: ApartmentsFiltersProps) => {

  const environmentOptions = getEnvironmentOptions(apartments);
  const countriesOptions = getCountryOptions(apartments);
  const priceBounds = getPriceBounds(apartments);
  const activeFilters = countActiveFilters(filters);
  const isMobile = window.matchMedia('(width <=575px)').matches

  return (
    <div className={styles.filters} aria-label="Apartments Filters Bar">

      <div className={styles.groups}>
        <FilterGroup
          label='ENVIRONMENT'
          filterName='environment'
          values={filters.environment}
          options={[ALL, ...environmentOptions]}
          onClick={onEnvironment}
        />

        <FilterGroup
          label='COUNTRY'
          filterName='country'
          values={filters.country}
          options={[ALL, ...countriesOptions]}
          onClick={onCountry}
        />


        <FilterPrice
          price={filters.price}
          priceBounds={priceBounds}
          onChange={onPrice}
        />

      </div>

      <div className={styles.filterBar}>
        <SearchBar
          value={filters.search}
          placeholder={isMobile ? 'Search apartments' : 'Search by name or country...'}
          handleOnChange={onSearch}
        />

        <button
          type='button'
          className={styles.clearButton}
          disabled={activeFilters === 0}
          onClick={onClear}
        >
          CLEAR({activeFilters})
        </button>
      </div>
    </div>
  )
}

