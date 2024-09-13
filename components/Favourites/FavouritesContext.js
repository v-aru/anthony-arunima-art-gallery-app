import React, { createContext, useContext, useState, useEffect } from 'react';

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage on initial load
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      setFavourites(JSON.parse(savedFavourites));
    }
  }, []);

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (slug, artistName) => {
    setFavourites((prevFavourites) => {
      const index = prevFavourites.findIndex((fav) => fav.slug === slug);
      if (index === -1) {
        // Item is not in the list, add it
        return [...prevFavourites, { slug, artistName, isFavourite: true }];
      } else {
        // Item is in the list, remove it
        const newFavourites = [...prevFavourites];
        newFavourites.splice(index, 1);
        return newFavourites;
      }
    });
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