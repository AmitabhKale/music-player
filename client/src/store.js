import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./redux/playlistSlice";
import playerSlice from "./redux/playerSlice";

const store = configureStore({
  reducer: {
    playlistSongs: playlistSlice.reducer,
    playerSong: playerSlice.reducer,
  },
});

export default store;
