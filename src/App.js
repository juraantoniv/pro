
import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import {HeaderMoviePAge} from "./MoviesPage";
import {MovieInfo, MoviesList, PosterPreview, RecommendationPage} from "./components";







function App() {
  return (

      <div>

        <Routes>
          <Route element={<HeaderMoviePAge/>}>
            <Route index element={<Navigate to={'/Movies'}/>}/>
            <Route path={'Movies'} element={<MoviesList/>}/>
            <Route path={':id'} element={<MoviesList/>}/>
          </Route>
          <Route path={'/Info'} element={<MovieInfo/>}/>
          <Route path={'/PosterPreview'} element={<PosterPreview/>}/>
          <Route path={'/Recommendation:id'} element={<RecommendationPage/>}/>
        </Routes>
      </div>
  );
}

export default App;

