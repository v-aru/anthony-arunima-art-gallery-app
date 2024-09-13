import React, { createContext, useContext, useState, useEffect } from 'react';

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage on initial load
    const savedFavourites = JSON.parse(localStorage.getItem('favourites'));
    if (savedFavourites) {
      setFavourites(savedFavourites);
    }
  }, []);

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  // Example of toggleFavourite in FavouritesContext
  const toggleFavourite = (slug, artist, title, imageSource, dimensions) => {
    const isAlreadyFavourite = favourites.some(fav => fav.slug === slug);

    if (isAlreadyFavourite) {
      setFavourites(prevFavourites =>
        prevFavourites.filter(fav => fav.slug !== slug)
      );
    } else {
      const newFavourite = { slug, artist, title, imageSource, ...dimensions };
      setFavourites(prevFavourites => [...prevFavourites, newFavourite]);
    }
  };


  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

// export const useFavourites = () => useContext(FavouritesContext);

export const useFavourites = () => {
    return useContext(FavouritesContext);
  };