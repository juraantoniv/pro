import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import css from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import {Navbar} from "react-bootstrap";
import {Switch} from "./Switch";

const Header = () => {


    const [query, setQuery] = useState("")
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);
    const [value, setValue] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)

    const [queryPage, setQueryPage] = useSearchParams({page:'1'});

        console.log(query)


    const dispatch = useDispatch()
    const {name,configuration}=useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(getMovies.getName())
    },[])


    useEffect(() => {
        dispatch(getMovies.getConfiguration())
    },[])



   useEffect(()=>{
       dispatch(getMovies.getAllMovies(queryPage.get('page')))
       setPrev(prev)
       setNext(next)
       
   },[dispatch, next, prev,queryPage])



    useEffect(() => {
        dispatch(getMovies.getMovie(query))
    },[dispatch, query])



    const prevPage = () => {
        setQueryPage(value=>({page:value.get('page')-1}))

    }
    const nextPage = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
    }



    const navigate = useNavigate();

    return (
        <div>
            <div className={css.Header}>
                <div>
                    <div>
                        <div>{configuration.images?.base_url}</div>
                        <img src={configuration.images?.base_url} alt='img_at'/>
                        <img src={`http://image.tmdb.org/t/p/w500/${configuration.base_url}`} alt='img_at'/>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>

            <div>
                <form>
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
            </div>
            <div>
                <h3>Welcome : {name.username}</h3>
                {/*<img src={name.avatar} alt='img_at'/>*/}
            </div>

            </div>
            <button onClick={prevPage}>prevPage</button>
            <button onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {
    Header

}