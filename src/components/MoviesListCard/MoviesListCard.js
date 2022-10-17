import React from 'react';
import css from './MoviesListCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {

    const {setMovie}=useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

     const {original_title,overview,backdrop_path}=movie


    return (
        <div>
            <Link to={'/Info'}> <div onClick={()=>dispatch(getMovies.setCurrentFilm(movie))} className={css.card_of_movie}>
            <img src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} alt='img_at'/>
            <div>{original_title}</div>
            <div>{overview}</div>
                </div>
            </Link>
        </div>

    );
};

export default MoviesListCard;