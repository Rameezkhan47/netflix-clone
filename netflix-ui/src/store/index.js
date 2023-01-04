
import {configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import axios from 'axios';



const initialState = {
    movies:[],
    genresLoaded: false,
    genres: []
};
export const getGenres = createAsyncThunk("netflix/genres", async()=>{
    const {data:{genres}} = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    console.log(genres);
    return genres;
})

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getGenres.fulfilled,(state, action)=>{
            state.genres = action.payload
            state.genresLoaded = true
        })
    }
    
})




export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    }
})

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const updateMessage = createAsyncThunk(
//     'message/update',
//     async (data, thunkApi) => {
//         console.log(data)
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ message:data})
            
//         };
//         const res = await fetch('http://localhost:3000/message/add',requestOptions)
//         return res.json();
//     }
// )

// export const readMessage = createAsyncThunk(
//     'message/read',
//     async (data, thunkApi) => {
//         const res = await fetch('http://localhost:3000/message')
//         return res.json();
//     }
// )

// const initialState = {
//     messages: []
// }
// export const messageSlice = createSlice({
//     name: 'message',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [updateMessage.rejected]: (state) => {
//             console.log('Rejected');
//         },
//         [updateMessage.fulfilled]: (state, action) => {
//             console.log('action.payload:',action.payload);
//             state.messages = action.payload;
//         },
//         [updateMessage.pending]: state => {
//             console.log('Pending...');
//         },
//         [readMessage.fulfilled]: (state, action) => {

//             state.messages = action.payload;
//         }
//     }
// })