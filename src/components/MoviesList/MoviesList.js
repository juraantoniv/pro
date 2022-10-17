import React from 'react';
import {useSelector} from "react-redux";
import css from './MoviesList.module.css'




import MoviesListCard from "../MoviesListCard/MoviesListCard";



const MoviesList = () => {



    const {movies}=useSelector(state => state.movieReducer)



    return (
        <div>

            <h3>{movies.page}</h3>

        <div className={css.cars_list}>

            {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>

        </div>
    );
};



export {
    MoviesList
};