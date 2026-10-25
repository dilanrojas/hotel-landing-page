import type { Apartment } from "../types/apartment";
import { ALL, type ApartmentFilters } from "../types/filters";


const normalize = (text: string): string => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim()


export const filterApartments = (apartments: Apartment[], filters: ApartmentFilters): Apartment[] => {
  const { search, environment, country } = filters;
  const { min, max } = filters.price;

  return apartments.filter((apartment) => {
    const matchesSearch = [apartment.name, apartment.location.country].some((filter) => normalize(filter).includes(search))
    const matchesEnvironment = environment === ALL || environment === apartment.environment
    const matchesCountry = country === ALL || country === apartment.location.country
    const matchesPriceBounds = (min === null || apartment.price >= min) && (max === null || apartment.price <= max)

    return matchesSearch && matchesCountry && matchesEnvironment && matchesPriceBounds
  })
}


export const getEnvironmentOptions = (apartments: Apartment[]): string[] => {
  const environments = apartments.map((apartment) => apartment.environment);
  return [...new Set(environments)].sort();
}




export const getCountryOptions = (apartments: Apartment[]): string[] => {
  const countries = apartments.map((apartment) => apartment.location.country)
  return [...new Set(countries)].sort()


}

export const getPriceBounds = (apartments: Apartment[]): { min: number, max: number } => {
  if (apartments.length === 0) {
    return { min: 0, max: 0 }
  }
  const prices = apartments.map((apartment) => apartment.price)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}



export const countActiveFilters = (filters: ApartmentFilters): number => {
  const active: boolean[] = [
    filters.search.trim() !== '',
    filters.environment !== ALL,
    filters.country !== ALL,
    filters.price.min !== null || filters.price.max !== null,
  ]

  return active.filter((value) => value).length;
}















