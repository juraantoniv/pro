import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import css from './MoviesList.module.css'



import {useDispatch} from "react-redux";
import {getMovies} from "../../redax";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useLocation, useParams} from "react-router-dom";


const MoviesList = () => {

    // const dispatch = useDispatch()

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