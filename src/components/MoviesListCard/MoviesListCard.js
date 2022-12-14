import React from 'react';
import css from './MoviesListCard.module.css'
import {useDispatch} from "react-redux";
import {getMovies} from "../../redax";
import {Link} from "react-router-dom";
import {showAll} from "../../Functions/Functions";

import Rating from "@mui/material/Rating";



const MoviesListCard = ({movie}) => {


    const dispatch = useDispatch()

     const {original_title,overview,backdrop_path,genre_ids,id,release_date,vote_average}=movie



    return (
        <div>

            <Link to={'/Info'}> <div onClick={()=>dispatch(getMovies.setCurrentFilm(movie))} className={css.card_of_movie}>
                <div className={css.ribbon}><span>{showAll(genre_ids)}</span></div>
            <img className={css.image} src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} alt='img_at'/>
            <h3>{original_title}</h3>
            <div className={css.overview}>{overview}</div>
                <br/>
                <div>Relase date: {release_date}</div>
                <br/>
                <div>Vote average: {vote_average}</div>
                <Rating name="half-rating" defaultValue={+movie?.vote_average} precision={0.5} max={10} />
                </div>
            </Link>

        </div>

    );
};

export default MoviesListCard;

