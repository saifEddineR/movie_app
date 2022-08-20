import React, { useState, useEffect } from 'react';
import { movies$ } from './movies';

export const MovieContext = React.createContext();
export const MovieUpdateContext = React.createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filterCat, setFilterCat] = useState('');
  const [filterInput, setFilterInput] = useState('');
  useEffect(() => {
    movies$.then((data) => setMovies(data));
  }, []);
  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((mv) => mv.id !== id));
  };
  const addLikeToMovie = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((mv) => (mv.id === id ? { ...mv, likes: mv.likes + 1 } : mv))
    );
  };
  const removeLikeToMovie = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((mv) => (mv.id === id ? { ...mv, likes: mv.likes - 1 } : mv))
    );
  };
  const addDisikeToMovie = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((mv) => (mv.id === id ? { ...mv, dislikes: mv.dislikes + 1 } : mv))
    );
  };
  const removeDisikeToMovie = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((mv) => (mv.id === id ? { ...mv, dislikes: mv.dislikes - 1 } : mv))
    );
  };
  const filterByCat = (cat) => {
    setFilterCat(cat);
  };
  const searchByInput = (input) => {
    setFilterInput(input);
  };
  return (
    <MovieContext.Provider value={{ movies, filterCat, filterInput }}>
      <MovieUpdateContext.Provider
        value={{
          deleteMovie,
          addLikeToMovie,
          removeLikeToMovie,
          addDisikeToMovie,
          removeDisikeToMovie,
          filterByCat,
          searchByInput,
        }}
      >
        {children}
      </MovieUpdateContext.Provider>
    </MovieContext.Provider>
  );
};
