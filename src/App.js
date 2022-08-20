import React,{} from 'react'
import './App.css';
import FilterByCategory from './components/FilterByCategory';
import MovieList from './components/MovieList';
import { MoviesProvider } from './MoviesContext';

function App() {

  return (
    <MoviesProvider>
      <FilterByCategory/>
      <MovieList />
    </MoviesProvider>
  );
}

export default App;
