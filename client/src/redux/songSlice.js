import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  song: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addSong = createAsyncThunk(
  "songs/create",
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
  name: "song",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
