import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let API_URL = "http://localhost:5000/api/music";

const initialState = {
  song: {},
  songs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getSongs = createAsyncThunk(
  "songs/getAllSongs",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(API_URL);
      // console.log(data);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addSong = createAsyncThunk(
  "songs/add",
  async (songData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      console.log(token);
      console.log(songData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.songs = action.payload;
      })
      .addCase(getSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addSong.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addSong.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default songSlice;
