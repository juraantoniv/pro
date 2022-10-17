import React from 'react';
import {useSelector} from "react-redux";
import {getMovies} from "../../redax";
import css from "./MoviesListCard.module.css";


const MovieInfo = () => {


const {setMovie}=useSelector(state => state.movieReducer)



    return (
        <div>
             <div className={css.card_of_movie_info}>
                <img src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/>
                <div>{setMovie?.original_title}</div>
                <div>{setMovie?.overview}</div>
                <div>{setMovie?.release_date}</div>
                 </div>
        </div>
    );
}



export default MovieInfo;