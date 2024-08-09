import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let PLAYLIST_API_URL = "http://localhost:5000/api/playlist";

const initialState = {
  playlists: [],
  playlist: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllPlaylist = createAsyncThunk(
  "playlist/getPlaylists",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(PLAYLIST_API_URL);
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

export const getPlaylistSongs = createAsyncThunk(
  "playlist/getSongs",
  async (playlistId, thunkAPI) => {
    try {
      console.log(playlistId);
      const { data } = await axios.get(`${PLAYLIST_API_URL}/${playlistId}`);
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
      .addCase(getAllPlaylist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPlaylist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.playlists = action.payload;
      })
      .addCase(getAllPlaylist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPlaylistSongs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlaylistSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.playlist = action.payload;
      })
      .addCase(getPlaylistSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default playlistSlice;
