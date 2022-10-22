import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getMovies} from "../../redax";
import {useDispatch, useSelector} from "react-redux";
import css from "./MoviesListCard.module.css";
import MoviesListCard from "./MoviesListCard";
import css1 from "../Header/Header.module.css";

const RecommendationPage = () => {

    const {reviews}=useSelector(state => state.movieReducer)

    const {id}=useParams()
    let navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies.getReviews(id))
    },[dispatch,id])



    return (
        <div>
            <button onClick={() => navigate('/')} className={css1.btn_top_page}>Home Page</button>

            {/*{JSON.stringify(reviews)}*/}
            <div className={''}>

                {reviews.results?.map(review =>
                    <div className={css.recommendation}>
                        <h2>Name : {review.author}</h2>
                        <h3>User_name : {review.author_details.username}</h3>
                        {/*<img alt={'img'}>src={`http://image.tmdb.org/t/p/w500/${review?.author_details.avatar_path}`}</img>*/}
                        <h5>Review</h5>
                        <h3>{review.content}</h3>
                        <h3>Created : {review.created_at}</h3>

                    </div>


                )}
            </div>
        </div>
    );
};

export {

RecommendationPage

}

