import { createContext, useState } from "react";

export const contextMovies = createContext();

export function ContextProvider({ children }) {
  const [movies, setMovies] = useState(null);
  const [favorites, setFavorites] = useState([]);
  return (
    <contextMovies.Provider
      value={{ movies, setMovies, favorites, setFavorites }}
    >
      {children}
    </contextMovies.Provider>
  );
}
