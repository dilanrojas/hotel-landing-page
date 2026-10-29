export type Environment = 'Forest' | 'Coastal' | 'Desert' | 'Lake' | 'Urban';

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
  galleryImages: {
    exterior: string,
    bedroom: string,
    bathroom: string,
    kitchen: string,
    livingRoom: string
  },
  summary: string,
  description: string,
  featured: boolean
}


