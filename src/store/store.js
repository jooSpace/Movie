import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { REACT_APP_TMDB_KEY } from '../config/key';

const URL = "https://api.themoviedb.org/3"

export const getTrendingDayMovie = createAsyncThunk('GET/getTrendingDayMovie', 
    async () => {
        try {
            const response = await axios.get(`${URL}/trending/movie/day?api_key=${REACT_APP_TMDB_KEY}&language=ko-KR`)
            const dayMovie = await response;
            // console.log("day", dayMovie);
            return dayMovie.data.results;
            
        }   
        catch (error) {
            console.log(error);
        }
    }
)

export const getTrendingWeekMoive = createAsyncThunk('GET/getTrendingWeekMovie',
    async () => {
        try {
            const response = await axios.get(`${URL}/trending/movie/week?api_key=${REACT_APP_TMDB_KEY}&language=ko-KR`)
            const movie = await response;
            // console.log("week",movie);
            return movie.data.results;
        }
        catch (error) {
            console.log(error);
        }
    }

)

export const dayMovieSlice = createSlice({
    name : 'dayMovieSlice',
    initialState : {
        dayMovie : [],
        isLoading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder.addCase(getTrendingDayMovie.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTrendingDayMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dayMovie = action.payload;
        })
        builder.addCase(getTrendingDayMovie.rejected, (state, action) => {
            state.status = 'fail';
            state.error = action.error;
        })
    }
})

export const weekMovieSlice = createSlice({
    name : 'weekMovieSlice',
    initialState : {
        weekMovie : [],
        isLoading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder.addCase(getTrendingWeekMoive.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTrendingWeekMoive.fulfilled, (state, action) => {
            state.isLoading = false;
            state.weekMovie = action.payload;
        })
        builder.addCase(getTrendingWeekMoive.rejected, (state, action) => {
            state.status = 'fail';
            state.error = action.error;
        })
    }
})

export default configureStore({
    reducer: {
        dayMovie : dayMovieSlice.reducer,
        weekMovie : weekMovieSlice.reducer
    }
})
