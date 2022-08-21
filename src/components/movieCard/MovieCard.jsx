import { useState, useContext } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { MovieUpdateContext } from '../../MoviesContext';
import './movie-item.css';

const MovieCard = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const {
    deleteMovie,
    addLikeToMovie,
    removeLikeToMovie,
    addDisikeToMovie,
    removeDisikeToMovie,
  } = useContext(MovieUpdateContext);

  const like = (check) => {
    setLiked(!liked);
    check ? addLikeToMovie(movie.id) : removeLikeToMovie(movie.id);
  };
  const dislike = (check) => {
    setDisliked(!disliked);
    check ? addDisikeToMovie(movie.id) : removeDisikeToMovie(movie.id);
  };
  return (
    <div>
      <div className='movie-item'>
        <img
          src={`/images/${movie.thumbnail}`}
          alt='movie thumbnail'
          width='200px'
          length='300px'
        />
        <h3 data-testid='movie-title'>{movie.title}</h3>
        <span>{movie.category}</span>
        <div className='rate'>
          {liked ? (
            <ThumbUpAltIcon onClick={() => like(false)} />
          ) : (
            <ThumbUpOffAltIcon onClick={() => like(true)} />
          )}
          <span>{movie.likes}</span>
          {disliked ? (
            <ThumbDownAltIcon onClick={() => dislike(false)} />
          ) : (
            <ThumbDownOffAltIcon onClick={() => dislike(true)} />
          )}
          <span>{movie.dislikes}</span>

          <button onClick={() => deleteMovie(movie.id)}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
