export type Environment = 'Forest' | 'Coastal' | 'Desert' | 'Lake';

export interface Apartment {
  id: string,
  name: string,
  environment: Environment,
  location: {
    neighborhood: string,
    city: string,
    country: string
  },
  price: number,
  bedrooms: number,
  bathrooms: number,
  areaM2: number,
  image: string,
  amenities: string[],
  summary: string,
  description: string,
  featured: boolean
}
