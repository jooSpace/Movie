import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const KEY = "17c39faa5663bf0bcf945d1de0d13501"
const URL = "https://api.themoviedb.org/3/movie/"

export const getMovie = createAsyncThunk('GET/getMovie', 
    async () => {
        try {
            const response = await axios.get(`${URL}popular?api_key=${KEY}&language=ko-KR`)
            const data = await response;
            return data.data.results;
            
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
        builder.addCase(getMovie.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movie = action.payload;
        })
        builder.addCase(getMovie.rejected, (state, action) => {
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