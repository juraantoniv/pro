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
        console.log(id)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies.getTop())
    },[dispatch,setMovie])


    useEffect(() => {
        dispatch(getMovies.getMovie_byiD(id))
    },[dispatch,id])

    return (
        <div className={css.box}>
            <div className={css.card_of_movie_info}>

                  <Link to={'/Picture'}><img src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/></Link>
                <h3>{setMovie?.original_title}</h3>
                <div>{setMovie?.overview}</div>
                 <h3>{showAll(setMovie?.genre_ids)}</h3>
                <div>{setMovie?.release_date}</div>
                 <hr/>
                <div>Vote average: {setMovie?.vote_average}</div>
                 {/*<Rating name="half-rating" defaultValue={setMovie ? +setMovie?.vote_average:+top?.vote_average} precision={0.5} max={10} />*/}

                 <div className={css.info}>

                     {details.budget > 0 && <div>Budget: {details.budget} $ </div>}
                     {details.homepage && <div>Homepage: {details.homepage}</div>}
                     <h4>Poster</h4>
                     <img src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} alt='img_at'/>
                     <h3>Citate : {details.tagline}</h3>
                     <h4>Original_language : {details.original_language}</h4>

                 </div>

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