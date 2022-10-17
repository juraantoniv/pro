import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import css from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redax";

const Header = () => {


    const [query, setQuery] = useState("")
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [queryPage, setQueryPage] = useSearchParams({page:'1'});

    let item={id:'28'}


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
                {/*<button onClick={() => navigate('/Action')}>Action</button>*/}
                {/*<button onClick={() => navigate('/Adventure')}>Adventure</button>*/}
                {/*<button onClick={() => navigate('/Comedy')}>Comedy</button>*/}
                {/*<button onClick={() => navigate('/Crime')}>Crime</button>*/}
                {/*<button onClick={() => navigate('/Documentary')}>Documentary</button>*/}

                <button onClick={() => navigate('53')}>Action</button>
                <button onClick={() => navigate('12')}>Adventure</button>
                <button onClick={() => navigate('35')}>Comedy</button>
                <button onClick={() => navigate('80')}>Crime</button>
                <button onClick={() => navigate('99')}>Documentary</button>

            </div>
            </div>
            <div>
                <div>Welcome {name.username}</div>
                {/*<img src={name.avatar} alt='img_at'/>*/}
            </div>

            </div>
            <button  disabled={prev===1} onClick={prevPage}>prevPage</button>
            <button onClick={nextPage}>nextPage</button>
        </div>
    );
};

export default Header;