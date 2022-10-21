
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import css from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";
import {Switch} from "./Switch";
import useLocalStorage from "use-local-storage";
import css1 from "./Header.module.css";

const Header = () => {


    const [query, setQuery] = useState("")
    const [prev, setPrev] = useState(1);
    const [next, setNext] = useState(1);
    let [queryPage, setQueryPage,page] = useSearchParams({page:'1'});
    const dispatch = useDispatch()
    const {name,configuration}=useSelector(state => state.movieReducer)

    let {Action}= useParams()



    useEffect(() => {

        if (Action && !query ){
            dispatch(getMovies.getGenres({name:Action,page:queryPage.get('page')}))
            console.log('Ganre')

        }
        else if (query || Action){

             dispatch(getMovies.getMovie({name:query,page:queryPage.get('page')}))
            queryPage.get('page')
            console.log('Search')

        }
        else{

                dispatch(getMovies.getAllMovies(queryPage.get('page')))
                console.log('All')

        }

    },[Action, dispatch, next, prev, query, queryPage])







    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const swichTheme = ()=>{

        const newTheme =theme==='light'?'dark':'light';
        setTheme(newTheme)

    }




    useEffect(() => {
        dispatch(getMovies.getName())
    },[dispatch])


    useEffect(() => {
        dispatch(getMovies.getConfiguration())
    },[dispatch])


    page = queryPage.get('page');







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
    const nextPage1 = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
        setNext(next+3)


    }
    const nextPage2 = () => {
        setQueryPage(value=>({page:+value.get('page')+2}))
        setNext(next)


    }
    const nextPage3 = () => {
        setQueryPage(value=>({page:+value.get('page')+3}))
        setNext(next)


    }
    const nextPage4 = () => {
        setQueryPage(value=>({page:+value.get('page')+4}))
        setNext(next)


    }
    const nextPage5 = () => {
        setQueryPage(value=>({page:+value.get('page')-page+1}))
        setNext(next)


    }



    const navigate = useNavigate();

    return (
        <div>
            <div className={css.Header}>
                <div>
                    <div>
                        <div>
                        {/*<Switch/>*/}
                        </div>
                        <button onClick={() => navigate('/Movies')} className={css.btn_top_page}>Home Page</button>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>

                    <div>
                        <form className={css.search}>
                            <input type="text"
                                   placeholder={"Search Movie"}
                                   className={css.searchTerm}
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
                </div>
                <div className={css.name}>
                    <h3>Welcome : {name.username}</h3>
                    <img className={css.image_name} src={`http://image.tmdb.org/t/p/w500/${name.avatar?.tmdb.avatar_path}`} alt='img_at'/>

                </div>

            </div>
            <button className={css.btn1} disabled={+page===1} onClick={prevPage}>prevPage</button>
            <button className={css.btn1} disabled={+page===500} onClick={nextPage}>nextPage</button>
            <button className={css.btn1} disabled={+page===1} onClick={nextPage5}>{+page-(+page-1)}</button>
            <button className={css.btn12}>...</button>
            <button className={css.btn1} disabled={+page===500} onClick={nextPage1}>{+page+1}</button>
            <button className={css.btn1} disabled={+page===500} onClick={nextPage2}>{+page+2}</button>
            <button className={css.btn1} disabled={+page===500} onClick={nextPage3}>{+page+3}</button>
            <button className={css.btn1} disabled={+page===500} onClick={nextPage4}>{+page+4}</button>
        </div>
    );
};

export {
    Header

}