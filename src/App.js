
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

function App() {
  return (
    <div>

      <Routes>
        <Route element={<HeaderMoviePAge/>}>
          <Route index element={<Navigate to={'/Movies'}/>}/>
          <Route path={'Movies'} element={<MoviesList/>}/>
          <Route path={':Adventure'} element={<MoviesList/>}/>
          <Route path={':Comedy'} element={<MoviesList/>}/>
          <Route path={':Crime'} element={<MoviesList/>}/>
          <Route path={':Documentary'} element={<MoviesList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
