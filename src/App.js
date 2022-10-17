
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet, Navigate
} from "react-router-dom";
import HeaderMoviePAge from "./MoviesPage/HeaderMoviePAge";
import {MoviesList} from "./components/MoviesList/MoviesList";
import Header from "./components/Header/Header";
import {GetGenre} from "./components/MoviesList/GetGenre";
import MovieInfo from "./components/MoviesListCard/MovieInfo";

function App() {
  return (
    <div>

      <Routes>
        <Route element={<HeaderMoviePAge/>}>
          <Route index element={<Navigate to={'/Movies'}/>}/>
          <Route path={'Movies'} element={<MoviesList/>}/>
          <Route path={':Action'} element={<GetGenre/>}/>
          <Route path={':Comedy'} element={<MoviesList/>}/>
          <Route path={':Crime'} element={<MoviesList/>}/>
          <Route path={':Documentary'} element={<MoviesList/>}/>
        </Route>
          <Route path={'/Info'} element={<MovieInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
