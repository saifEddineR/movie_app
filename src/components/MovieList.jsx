import { useContext } from 'react';
import MovieCard from './MovieCard';
import { MovieContext } from '../MoviesContext';

const MovieList = () => {
  const { movies, filterCat, filterInput } = useContext(MovieContext);
  return (
    <div className='movie-list'>
      {movies
        .filter(
          (mv) =>
            mv.title.toLowerCase().includes(filterInput.toLowerCase()) &&
            mv.category.includes(filterCat)
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
