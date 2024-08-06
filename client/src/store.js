import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./redux/playlistSlice";
import playerSlice from "./redux/playerSlice";
import authSlice from "./redux/authSlice";

const store = configureStore({
  reducer: {
    playlistSongs: playlistSlice.reducer,
    playerSong: playerSlice.reducer,
    user: authSlice.reducer,
  },
});

export default store;
