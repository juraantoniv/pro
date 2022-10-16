import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    name: [],
    configuration:[]
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


const movieSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload

        },
        [getMovie.fulfilled]: (state, action) => {
            state.movies = action.payload

        },
        [getName.fulfilled]: (state, action) => {
            state.name = action.payload

        },
        [getConfiguration.fulfilled]: (state, action) => {
            state.configuration= action.payload

        },
    },
});

const {reducer: movieReducer} = movieSlice

const getMovies = {
    getAllMovies,
    getName,
    getConfiguration,
    getMovie
}

export {
    movieReducer,
    getMovies
}