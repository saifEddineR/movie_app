import { useEffect, useContext } from 'react';
import { PaginationContext } from '../../PaginationContext';
import MovieCardmui from '../movieCard/MovieCardmui';
import './movielist.css';

const MovieList = ({ movies, filterCat, filterInput }) => {
  const { pagination, updatePaginationCount } = useContext(PaginationContext);
  let newMovies = movies.filter(
    (mv) =>
      mv.title.toLowerCase().includes(filterInput.toLowerCase()) &&
      mv.category.includes(filterCat)
  );
  let moviesAfterPaginaion = newMovies.filter(
    (mv, idx) => idx >= pagination.from && idx < pagination.to
  );

  useEffect(() => {
    updatePaginationCount(newMovies.length);
  }, [newMovies.length, updatePaginationCount]);
  return (
    <div className='movie-list'>
      {moviesAfterPaginaion.length ? (
        moviesAfterPaginaion.map((movie) => <MovieCardmui key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
