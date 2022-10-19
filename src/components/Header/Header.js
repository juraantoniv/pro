import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import css from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import {Navbar} from "react-bootstrap";
import {Switch} from "./Switch";

const Header = () => {


    const [query, setQuery] = useState("")
    const [prev, setPrev] = useState(1);
    const [next, setNext] = useState(1);
    // const [value, setValue] = useState(false)
    // const [darkTheme, setDarkTheme] = useState(false)

    let [queryPage, setQueryPage,page] = useSearchParams({page:'1'});




    const dispatch = useDispatch()
    const {name,configuration}=useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(getMovies.getName())
    },[])


    useEffect(() => {
        dispatch(getMovies.getConfiguration())
    },[])


    page = queryPage.get('page');


    useEffect(()=>{
       dispatch(getMovies.getAllMovies(queryPage.get('page')))
       
   },[dispatch, next, prev,queryPage])



    useEffect(() => {
        dispatch(getMovies.getMovie(query))
    },[dispatch, query])



    const prevPage = () => {
        setQueryPage(value=>({page:value.get('page')-1}))
        setPrev(prev-1)
        setNext(next-1)


    }
    const nextPage = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
        setNext(next+1)
        setPrev(prev+1)

    }



    const navigate = useNavigate();

    return (
        <div>
            <div className={css.Header}>
                <div>
                    <div>
                       <img src={'src/components/Header/Img/Знімок екрана 2022-10-19 143920.jpg'} alt={'img'}/>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>

            <div>
                <form className={css.form}>
                    <input type="text"
                           placeholder={"Search Movie"}
                           className={"input"}
                           onChange={event => setQuery(event.target.value)}
                           value={query}
                    />
                </form>
                <button onClick={() => navigate('53')} className={css.btn}>Action</button>
                <button onClick={() => navigate('12')} className={css.btn}>Adventure</button>
                <button onClick={() => navigate('35')} className={css.btn}>Comedy</button>
                <button onClick={() => navigate('80')} className={css.btn}>Crime</button>
                <button onClick={() => navigate('99')} className={css.btn}>Documentary</button>

            </div>
                    {/*<Navbar*/}
                    {/*    bg="light"*/}
                    {/*    variant="light"*/}
                    {/*    expand="lg"*/}
                    {/*    collapseOnSelect*/}
                    {/*    className={darkTheme ? "dark-theme" : "light-theme"}*/}
                    {/*>*/}
                    {/*    <Switch*/}
                    {/*        isOn={value}*/}
                    {/*        onChange={() => {*/}
                    {/*            setDarkTheme((prevTheme) => !prevTheme);*/}
                    {/*            setValue(!value);*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Navbar>*/}

                    <button style={{background:'black'}}>Theme</button>
            </div>
            <div>
                <h3>Welcome : {name.username}</h3>
                {/*<img src={name.avatar} alt='img_at'/>*/}
            </div>

            </div>
            <button disabled={+page===1} onClick={prevPage}>prevPage</button>
            <button disabled={+page===500} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {
    Header

}