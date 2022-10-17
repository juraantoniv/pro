import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    name: [],
    configuration:[],
    setMovie:null,
    errors:null,
}


const getAllMovies = createAsyncThunk(
    'carSlice1/getAll1',
    async (page, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getName = createAsyncThunk(
    'carSlice1/getName',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getAccount()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)
const getConfiguration = createAsyncThunk(
    'carSlice1/configuration',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getConfiguration()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)

const getMovie = createAsyncThunk(
    'carSlice1/search',
    async (name, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getMovie(name)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)


const getGenres = createAsyncThunk(
    'carSlice1/genres',
    async (name, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getGenres(name)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)

const movieSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCurrentFilm: (state, action) => {
            state.setMovie = action.payload
            console.log(state.setMovie)
        },
    },
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload

        },
        [getAllMovies.rejected]: (state, action) => {
            state.errors = action.payload
            console.log(state.errors)

        },
        [getMovie.fulfilled]: (state, action) => {
            state.movies = action.payload

        },
        [getMovie.rejected]: (state, action) => {
            state.errors = action.payload
            console.log(state.errors)

        },
        [getName.fulfilled]: (state, action) => {
            state.name = action.payload

        },
        [getConfiguration.fulfilled]: (state, action) => {
            state.configuration= action.payload

        },
        [getGenres.fulfilled]: (state, action) => {
            state.movies= action.payload

        },
    },
});

const {reducer: movieReducer ,actions:{setCurrentFilm}} = movieSlice

const getMovies = {
    getAllMovies,
    getName,
    getConfiguration,
    getMovie,
    getGenres,
    setCurrentFilm
}

export {
    movieReducer,
    getMovies
}