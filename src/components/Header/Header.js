
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import css from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";




const Header = () => {


    const [query, setQuery] = useState("")
    let [queryPage, setQueryPage,page] = useSearchParams({page:'1'});
    const dispatch = useDispatch()
    const {name}=useSelector(state => state.movieReducer)

    let {id}= useParams()

    useEffect(() => {

        if (id && !query){
            dispatch(getMovies.getGenres({name:id,page:queryPage.get('page')}))
        }
        else if (query || id){

             dispatch(getMovies.getMovie({name:query,page:queryPage.get('page')}))
            queryPage.get('page')
        }
        else {
                dispatch(getMovies.getAllMovies(queryPage.get('page')))
        }

    },[id, dispatch, query, queryPage])




    useEffect(() => {
        dispatch(getMovies.getName())
    },[dispatch])




    page = queryPage.get('page');

    const prevPage = () => {
        setQueryPage(value=>({page:value.get('page')-1}))
    }
    const nextPage = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
    }
    const nextPage1 = () => {
        setQueryPage(value=>({page:+value.get('page')+1}))
    }
    const nextPage2 = () => {
        setQueryPage(value=>({page:+value.get('page')+2}))
    }
    const nextPage3 = () => {
        setQueryPage(value=>({page:+value.get('page')+3}))
    }
    const nextPage4 = () => {
        setQueryPage(value=>({page:+value.get('page')+4}))
    }
    const nextPage5 = () => {
        setQueryPage(value=>({page:+value.get('page')-page+1}))
    }
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.Header}>
                <div>
                    <div>
                        <div>
                        </div>
                        <button onClick={() => navigate('/')}  className={css.btn_top_page}>Home Page</button>
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
                        <button  disabled={+id===18} onClick={() => navigate('18')} className={css.btn}>Drama</button>
                        <button disabled={+id===10749} onClick={() => navigate('10749')} className={css.btn}>Romance</button>
                        <button disabled={+id===28} onClick={() => navigate('28')} className={css.btn}>Action</button>
                        <button disabled={+id===12} onClick={() => navigate('12')} className={css.btn}>Adventure</button>
                        <button disabled={+id===35} onClick={() => navigate('35')} className={css.btn}>Comedy</button>
                        <button disabled={+id===80} onClick={() => navigate('80')} className={css.btn}>Crime</button>
                        <button disabled={+id===99} onClick={() => navigate('99')} className={css.btn}>Documentary</button>
                        <button disabled={+id===10752} onClick={() => navigate('10752')} className={css.btn}>War</button>
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