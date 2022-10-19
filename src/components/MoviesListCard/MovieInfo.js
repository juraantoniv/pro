import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import css from "./MoviesListCard.module.css";
import {Link, useParams} from "react-router-dom";
import {showAll, showGenre} from "../../Functions/Functions";
import Rating from "@mui/material/Rating";

import MoviesListCard from "./MoviesListCard";


const MovieInfo = () => {

const {setMovie,top,details}=useSelector(state => state.movieReducer)





    let {id}=setMovie



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies.getTop())
    },[dispatch,setMovie])

    console.log(setMovie)


    useEffect(() => {
        dispatch(getMovies.getMovie_byiD(id))
    },[dispatch,id])

    return (
        <div className={css.box}>
            <div className={css.card_of_movie_info}>

                { setMovie.toString().length>0 && <Link to={'/Picture'}><img src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/></Link>}
                <h3>{setMovie?.original_title}</h3>
                <div>{setMovie?.overview}</div>
                 <h3>{showAll(setMovie?.genre_ids)}</h3>
                {setMovie.toString().length>0 && <div> Relase date: {setMovie?.release_date}</div>}

                {setMovie.toString().length>0 && <div>Vote average: {setMovie?.vote_average}</div>}

                { setMovie.toString().length>0 && <div className={css.info}>
                     {details.budget > 0 && <div>Budget: {details.budget} $ </div>}
                     {details.homepage && <div>Homepage: {details.homepage}</div>}
                     <h4>Poster</h4>
                     <img src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} alt='img_at'/>
                     <h3>Citate : {details.tagline}</h3>
                     <h4>Original_language : {details.original_language}</h4>

                 </div>}

                 </div>
                    <div className={css.flex}>
                        <h1>Top 20 rated</h1>
                        <div className={css.cars_list}>
                            {top.results?.map(movie =>
                                <MoviesListCard key={movie.id} movie={movie}/>)}
                        </div>


                    </div>


        </div>
    );
}



export default MovieInfo;