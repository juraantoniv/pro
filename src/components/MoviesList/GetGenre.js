import React from 'react';
import {useSelector} from "react-redux";
import css from './MoviesList.module.css'



import {useDispatch} from "react-redux";
import MoviesListCard from "../MoviesListCard/MoviesListCard";


const GetGenre = () => {



    const {movies,page}=useSelector(state => state.movieReducer)
    return (
        <div>

            <h3 className={css.page}>Page : {movies.page}</h3>

            <div className={css.cars_list}>
                {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

            </div>

        </div>
    );
};



export {
    GetGenre
};