import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet, Navigate
} from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={}/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
