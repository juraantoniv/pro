import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import css from "./MoviesListCard.module.css";
import {Link, useNavigate} from "react-router-dom";
import {showAll} from "../../Functions/Functions";
import css1 from '../Header/Header.module.css'

import MoviesListCard from "./MoviesListCard";
import {IconButton} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";



const MovieInfo = () => {

const {setMovie,top,details}=useSelector(state => state.movieReducer)

let navigate = useNavigate()

    let {id}=setMovie

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

                {setMovie.toString().length>0 && <div>{ setMovie.toString().length>0 && <Link to={'/PosterPreview'}>< img  src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/></Link>}
                <h3>{setMovie?.original_title}</h3>
                <div>{setMovie?.overview}</div>
                 <h3>{showAll(setMovie?.genre_ids)}</h3>
                {setMovie.toString().length>0 && <div> Relase date: {setMovie?.release_date}</div>}

                {setMovie.toString().length>0 && <div>Vote average: {setMovie?.vote_average}</div>}

                    <button onClick={() => navigate('/Recommendation/'+id)}  className={css1.btn_top_page}>Recommendation</button>

                { setMovie.toString().length>0 && <div className={css.info}>
                     {details.budget > 0 && <div>Budget: {details.budget} $ </div>}
                     {details.homepage && <div>Homepage: {details.homepage}</div>}
                     <h4>Poster</h4>
                     <img className={css.image} src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} alt='img_at'/>
                     <h3>Citate : {details.tagline}</h3>
                     <h4>Original_language : {details.original_language}</h4>


                 </div>}
                 </div>}

                 </div>
                    <div className={css.flex}>
                        <IconButton  size="large" onClick={() => navigate('/')} fontSize={'large'} sx={{width:50}} ><HomeIcon fontSize={'large'} /></IconButton>
                        <h1>Top 20 rated</h1>
                        <div className={css.cars_list}>

                            {top.results?.map(movie =>
                                <MoviesListCard key={movie.id} movie={movie}/>)}
                        </div>

                    </div>


        </div>
    );
}



export {
    MovieInfo

}