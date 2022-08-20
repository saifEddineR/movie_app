import {useState,useContext} from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { MovieUpdateContext } from '../MoviesContext';

const MovieCard = ({movie}) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const {deleteMovie,addLikeToMovie,removeLikeToMovie,addDisikeToMovie,removeDisikeToMovie} = useContext(MovieUpdateContext)
    // const deleteMovie = (id) => { 
    //     setMovies(movies.filter(mv => mv.id!==id))
    //  }
     const like = (check) => { 
        setLiked(!liked)
        check ? addLikeToMovie(movie.id) : removeLikeToMovie(movie.id)
      }
      const dislike = (check) => { 
        setDisliked(!disliked)
        check ? addDisikeToMovie(movie.id) : removeDisikeToMovie(movie.id)
      }
  return (
    <div>
        <div>
        <img src={`/images/${movie.thumbnail}`} alt="movie thumbnail" width='200px' />
        <h3>{movie.title}</h3>
        {liked ?  <ThumbUpAltIcon onClick={()=>like(false)} /> :<ThumbUpOffAltIcon onClick={()=>like(true)}/>  }
        <span>{movie.likes}</span>
        {disliked ? <ThumbDownAltIcon onClick={()=>dislike(false)}/> : <ThumbDownOffAltIcon onClick={()=>dislike(true)}/> }
        <span>{movie.dislikes}</span>

        <button onClick={()=>deleteMovie(movie.id)} >delete</button>
        </div>-
    </div>
  )
}

export default MovieCard