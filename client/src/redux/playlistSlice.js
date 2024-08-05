import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let API_URL = "http://localhost:5000/api/music";

const initialState = {
  songs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getSongs = createAsyncThunk(
  "playlist/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(API_URL);
      //   console.log(res.data);
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

const playlistSlice = createSlice({
  name: "playlist",
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
      });
  },
});

export default playlistSlice;
