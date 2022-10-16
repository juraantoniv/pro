import React from 'react';
import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
     const {original_title,overview,backdrop_path}=movie

    return (
        <div className={css.card_of_movie}>
            <img src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} alt='img_at'/>
            <div>{original_title}</div>
            <div>{overview}</div>

            {/*<div></div>*/}
        </div>
    );
};

export default MoviesListCard;