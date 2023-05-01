import React from 'react';
import {useSelector} from "react-redux";
import css from './MoviesList.module.css'


import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {Grid} from "@mui/material";



const MoviesList = () => {

    const {movies}=useSelector(state => state.movieReducer)



    return (
        <div>



            <h3 className={css.page}>  Page: {movies.page}</h3>
        <div className={css.cars_list}>


            <Grid container spacing={3} sx={{gap:5}}>

            {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </Grid>


        </div>

        </div>
    );
};



export {
    MoviesList
};