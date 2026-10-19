import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const LOCAL_STORAGE_KEY = 'favourites';


interface FavouritesContextProps {
  favourites: string[],
  isFavourite: (id: string) => boolean,
  toggleFavourite: (id: string) => void
}

const FavouritesContext = createContext<FavouritesContextProps | null>(null);

export const FavouriteContextProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<string[]>((): string[] => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favourites));

  }, [favourites])


  const isFavourite = (id: string): boolean => favourites.includes(id);
  const toggleFavourite = (id: string): void => {
    setFavourites(prev => prev.includes(id) ? prev.filter(favourite => favourite !== id) : [...prev, id])
  }



  return (<FavouritesContext value={{ favourites, isFavourite, toggleFavourite }}>{children}</FavouritesContext >)


}

export const useFavouritesContext = () => {
  const context = useContext(FavouritesContext);

  if (!context) throw new Error('useFavouritesContext must be used whithin FavouritesContextProvider')

  return context;
}



