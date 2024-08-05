import { createSlice } from "@reduxjs/toolkit";

// let API_URL = "http://localhost:5000/api/music";

// const fetchMusic = async () => {
//   const res = await axios.get(API_URL);
// };

const initialState = {
  song: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.song = action.payload;
    },
  },
});

export default playerSlice;
