import React, { useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from './MoviesList.module.css'



// import {useForm} from "react-hook-form";
import {getMovies} from "../../redax";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useParams} from "react-router-dom";


const MoviesList = () => {

    // const dispatch = useDispatch()

    const {movies}=useSelector(state => state.movieReducer)


   const value = useParams()

    console.log(value)


   
    return (
        <div>

            <h3>{movies.page}</h3>

        <div className={css.cars_list}>
            {/*{JSON.stringify(movies)}*/}
            {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>

        </div>
    );
};



export {
    MoviesList
};