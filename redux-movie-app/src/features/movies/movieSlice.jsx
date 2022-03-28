import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      "?s=" + term + "&type=movie&apikey=" + APIKey
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
    "movies/fetchAsyncSeries",
    async (term) => {
      const response = await movieApi.get(
        "?s=" + term + "&type=series&apikey=" + APIKey
      );
      return response.data;
    }
  );

  export const fetchAsyncMovieOrSerieDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrSerieDetail",
    async (id) => {
      const response = await movieApi.get(
        "?i="+id+"&Plot=full&apikey=" + APIKey
      );
      return response.data;
    }
  );

const initialState = {
  movies: {},
  series:{},
  selectedMovieOrSerie:{},
  favorites:{},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      removeSelectedMovieOrSerie: (state) => {
        state.selectMovieOrSerie = {};
      },
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
      },
      [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, series: payload };
      },
      [fetchAsyncMovieOrSerieDetail.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectedMovieOrSerie: payload };
      },
    },
  });

export const { removeSelectedMovieOrSerie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrSerie = (state) => state.movies.selectedMovieOrSerie;
export default movieSlice.reducer;
