export const ALL = 'All'

export interface PriceRange {
  min: number | null,
  max: number | null
}
export interface ApartmentFilters {
  search: string,
  environment: string,
  country: string,
  price: PriceRange
}

export const DEFAULT_FILTERS: ApartmentFilters = {
  search: '',
  environment: ALL,
  country: ALL,
  price: { min: null, max: null }


}

