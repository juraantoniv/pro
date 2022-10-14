import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";
import car from "../../components/Car/Car";


const initialState = {
    cars: [],
    car: []
}


const getAllMovies = createAsyncThunk(
    'carSlice1/getAll1',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await carService.getAll()
            return data.data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)


const movieSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.car = action.payload
        },
    },
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
    },
});

const {reducer: movieReducer, actions: {}} = movieSlice

const getMovies = {
    getAllMovies
}

export {
    movieReducer,
    getMovies
}