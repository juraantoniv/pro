
import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import {HeaderMoviePAge} from "./MoviesPage";
import {GetGenre, MovieInfo, MoviesList, Picture} from "./components";






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
          <Route path={'/Picture'} element={<Picture/>}/>
      </Routes>
    </div>
  );
}

export default App;

