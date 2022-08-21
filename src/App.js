import { useContext } from 'react';
import './App.css';
import FilterByCategory from './components/filter/FilterByCategory';
import MovieList from './components/movieList/MovieList';
import AppPagination from './components/Pagination/AppPagination';
import { MovieContext } from './MoviesContext';

function App() {
  const { movies, filterCat, filterInput } = useContext(MovieContext);

  return (
    <>
      <FilterByCategory />
      <div className='movie-container'>
        <MovieList movies={movies} filterCat={filterCat} filterInput={filterInput} />
      </div>
      <div className='pagination-mui'>
        <AppPagination moviesCount={movies.length} />
      </div>
    </>
  );
}

export default App;
