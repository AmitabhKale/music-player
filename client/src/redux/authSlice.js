import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("music-user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
};

let API_URL = "http://localhost:5000/api/user/login";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
  try {
    const res = await axios.post(API_URL, user);
    if (res.data) {
      localStorage.setItem("music-user", JSON.stringify(res.data));
    }

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        // console.log()
      });
  },
});

export default authSlice;
