import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./redux/playlistSlice";
import playerSlice from "./redux/playerSlice";
import authSlice from "./redux/authSlice";
import songSlice from "./redux/songSlice";

const store = configureStore({
  reducer: {
    playlistSongs: playlistSlice.reducer,
    songs: songSlice.reducer,
    playerSong: playerSlice.reducer,
    user: authSlice.reducer,
  },
});

export default store;
