import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState, useContext } from 'react';
// ?icons import
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { MovieUpdateContext } from '../../MoviesContext';
import DeleteIcon from '@mui/icons-material/Delete';
import './movie-item.css';

export default function MovieCardmui({ movie }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const movieUpdateContext = useContext(MovieUpdateContext);
  // const { removeLikeToMovie, addDisikeToMovie, removeDisikeToMovie } =
  //   useContext(MovieUpdateContext);

  const like = (check) => {
    setLiked(!liked);
    check
      ? movieUpdateContext.addLikeToMovie(movie.id)
      : movieUpdateContext.removeLikeToMovie(movie.id);
  };
  const dislike = (check) => {
    setDisliked(!disliked);
    check
      ? movieUpdateContext.addDisikeToMovie(movie.id)
      : movieUpdateContext.removeDisikeToMovie(movie.id);
  };

  return (
    <Card
      className='mui-card'
      // style={{ backgroundColor: '#00000000', color: 'lightgray' }}
      sx={{ width: '20%', maxWidth: '300px', minWidth: '230px' }}
    >
      <CardMedia component='img' image={`/images/${movie.thumbnail}`} alt='Paella dish' />
      <CardContent>
        {/* <CardHeader title='movie title' /> */}
        <h3 data-testid='movie-title' style={{ margin: 0, padding: 0 }}>
          {movie.title}
        </h3>
        <Typography variant='body2' color='text.secondary'>
          {movie.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='card-icons'>
        <div>
          <IconButton className='like-dislike-icons' aria-label='add like'>
            {liked ? (
              <ThumbUpAltIcon onClick={() => like(false)} />
            ) : (
              <ThumbUpOffAltIcon onClick={() => like(true)} />
            )}
            <span>{movie.likes}</span>
          </IconButton>
          <IconButton className='like-dislike-icons' aria-label='add dislike'>
            {disliked ? (
              <ThumbDownAltIcon onClick={() => dislike(false)} />
            ) : (
              <ThumbDownOffAltIcon onClick={() => dislike(true)} />
            )}
            <span>{movie.dislikes}</span>
          </IconButton>
        </div>
        <IconButton onClick={() => movieUpdateContext.deleteMovie(movie.id)}>
          <DeleteIcon className='delete-btn'></DeleteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
