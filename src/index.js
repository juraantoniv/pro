import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {setupStore} from "./redax";
import App from "./App";


const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



    <Provider store={store}>

        <BrowserRouter>

            <App/>

        </BrowserRouter>
    </Provider>

);



