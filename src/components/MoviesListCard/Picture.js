import React from 'react';
import {useSelector} from "react-redux";
import {getMovies} from "../../redax";
import css from "./MoviesListCard.module.css";
import {Link} from "react-router-dom";


const Picture = () => {


    const {setMovie}=useSelector(state => state.movieReducer)



    return (
        <div>
            <div className={css.pic}>
                <Link to={'/Picture'}><img src={`http://image.tmdb.org/t/p/w500/${setMovie?.backdrop_path}`} alt='img_at'/></Link>

            </div>
        </div>
    );
}



export default Picture;