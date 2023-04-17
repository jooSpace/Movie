import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { REACT_APP_TMDB_KEY } from '../config/key';

const URL = "https://api.themoviedb.org/3"

export const getPopularMovie = createAsyncThunk('GET/getPopularMovie', 
    async () => {
        try {
            const response = await axios.get(`${URL}/trending/movie/day?api_key=${REACT_APP_TMDB_KEY}&language=ko-KR`)
            const movie = await response;
            console.log(movie);
            return movie.data.results;
            
        }   
        catch (error) {
            console.log(error);
        }
    }
)

export const movieSlice = createSlice({
    name : 'movieSlice',
    initialState : {
        movie : [],
        isLoading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder.addCase(getPopularMovie.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getPopularMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movie = action.payload;
        })
        builder.addCase(getPopularMovie.rejected, (state, action) => {
            state.status = 'fail';
            state.error = action.error;
        })
    }
})

export default configureStore({
    reducer: {
        movie : movieSlice.reducer 
    }
})
