import { useEffect, useState } from "react";
import type { Apartment } from "../types/apartment.ts"


export const useApartments = (url: string) => {
  const [apartments, setApartments] = useState<Apartment[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getApartments = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Could'nt get apartments data");
        }

        const apartments: Apartment[] = await response.json();

        setApartments(apartments);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Could'nt get apartments data");
      } finally {
        setIsLoading(false);
      }
    };

    getApartments();
  }, [url]);

  return {
    apartments,
    isLoading,
    error,
  };
}

