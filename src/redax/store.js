import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/Slices";




const rootReducer =combineReducers({
    movieReducer
})

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {
    setupStore
}