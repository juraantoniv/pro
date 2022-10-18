import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import css from "./MoviesListCard.module.css";
import {Link, useParams} from "react-router-dom";
import {showAll, showGenre} from "../../Functions/Functions";
import Rating from "@mui/material/Rating";
import {Outlet} from "@mui/icons-material";
import MoviesListCard from "./MoviesListCard";


const MovieInfo = () => {


const {setMovie,top}=useSelector(state => state.movieReducer)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies.getTop)
    },[dispatch,setMovie])


    return (
        <div>
             <div className={css.card_of_movie_info}>
                 <Link to={'/Picture'}><img src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/></Link>
                <h3>{setMovie?.original_title}</h3>
                <div>{setMovie?.overview}</div>
                 <h3>{showAll(setMovie?.genre_ids)}</h3>
                <div>{setMovie?.release_date}</div>
                 <hr/>
                <div>Середня оцінка: {setMovie?.vote_average}</div>
                 <Rating name="half-rating" defaultValue={+setMovie?.vote_average} precision={0.5} max={10} />
                 </div>
            {JSON.stringify(top)}
        </div>
    );
}



export default MovieInfo;