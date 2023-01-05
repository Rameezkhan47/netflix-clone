import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};
export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
      const movieGenres = [];
      movie.genre_ids.forEach((genre) => {
        const name = genres.find(({ id }) => id === genre);
        if (name) movieGenres.push(name.name);
      });
      if (movie.backdrop_path)
        moviesArray.push({
          id: movie.id,
          name: movie?.original_name ? movie.original_name : movie.original_title,
          image: movie.backdrop_path,
          genres: movieGenres.slice(0, 3),
        });
    });
  };

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    //   console.log('data is', results)

    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});

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
