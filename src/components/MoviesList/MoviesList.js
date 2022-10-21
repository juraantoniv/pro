import React from 'react';
import {useSelector} from "react-redux";
import css from './MoviesList.module.css'


import MoviesListCard from "../MoviesListCard/MoviesListCard";



const MoviesList = () => {

    const {movies,errors,page}=useSelector(state => state.movieReducer)



    return (
        <div>

            <h3 className={css.page}>  Page: {movies.page}</h3>
            {/*{JSON.stringify(errors)}*/}


        <div className={css.cars_list}>

            {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>

        </div>
    );
};



export {
    MoviesList
};