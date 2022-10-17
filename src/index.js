import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {setupStore} from "./redax";
import App from "./App";
import { StyledEngineProvider } from '@mui/material/styles';

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

        <BrowserRouter>
            <StyledEngineProvider injectFirst>
            <App/>
            </StyledEngineProvider>

        </BrowserRouter>
    </Provider>

);
