import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    name: [],
    top:[],
    configuration:[],
    setMovie:[],
    errors:null,
    details:[],
    page:null
}


const getAllMovies = createAsyncThunk(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getTop = createAsyncThunk(
    'movieSlice/getTop',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getTopRated()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getName = createAsyncThunk(
    'movieSlice/getName',
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
    'movieSlice/configuration',
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
    'movieSlice/search',
    async ({name,page}, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getMovie(name,page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)
const getMovie_byiD= createAsyncThunk(
    'movieSlice/byId',
    async (id, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getDetails(id)

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)



const getGenres = createAsyncThunk(
    'movieSlice/genres',
    async ({name,page}, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getGenres(name,page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentFilm: (state, action) => {
            state.setMovie = action.payload
        },
    },
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload

        },
        [getTop.fulfilled]: (state, action) => {
                state.top = action.payload
            },
        [getMovie_byiD.fulfilled]: (state, action) => {
            state.details = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.errors = action.payload

        },
        [getMovie.fulfilled]: (state, action) => {
            state.movies = action.payload

        },
        [getMovie.rejected]: (state, action) => {
            state.errors = action.payload
            console.log(state.errors)

        },
        [getMovie.rejected]: (state, action) => {
            state.errors = action.payload

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
    setCurrentFilm,
    getTop,
    getMovie_byiD
}

export {
    movieReducer,
    getMovies
}