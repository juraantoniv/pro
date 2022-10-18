import React from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import css from './Header.MoviePAge.css'

const HeaderMoviePAge = () => {
    return (
        <div className={'1'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default HeaderMoviePAge;