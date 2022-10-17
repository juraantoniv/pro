import React from 'react';
import css from './MoviesListCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import {Link} from "react-router-dom";
import {showGenre} from "../../Functions/Functions";


const MoviesListCard = ({movie}) => {

    const {setMovie}=useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

     const {original_title,overview,backdrop_path,genre_ids}=movie






    return (
        <div>
            <div className={css.badge1} data-badge={showGenre(genre_ids)}></div>
            <Link to={'/Info'}> <div onClick={()=>dispatch(getMovies.setCurrentFilm(movie))} className={css.card_of_movie}>
            <img src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} alt='img_at'/>
            <h3>{original_title}</h3>
            {/*<h3>{showGenre(genre_ids)}</h3>*/}
            <div style={{textDecoration:'none'}}>{overview}</div>
                </div>
            </Link>
        </div>

    );
};

export default MoviesListCard;

