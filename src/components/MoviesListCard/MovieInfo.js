import React from 'react';
import {useSelector} from "react-redux";
import {getMovies} from "../../redax";
import css from "./MoviesListCard.module.css";
import {Link, useParams} from "react-router-dom";
import {showGenre} from "../../Functions/Functions";


const MovieInfo = () => {


const {setMovie}=useSelector(state => state.movieReducer)


    return (
        <div>
             <div className={css.card_of_movie_info}>
                 <Link to={'/Picture'}><img src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/></Link>
                <h3>{setMovie?.original_title}</h3>
                <div>{setMovie?.overview}</div>
                 <h3>{showGenre(setMovie?.genre_ids)}</h3>
                <div>{setMovie?.release_date}</div>
                 </div>
        </div>
    );
}



export default MovieInfo;