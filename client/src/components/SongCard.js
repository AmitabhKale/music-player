import React from "react";
import { useDispatch } from "react-redux";
import playerSlice from "../redux/playerSlice";

const SongCard = ({ song }) => {
  const { playSong } = playerSlice.actions;
  const dispatch = useDispatch();
  return (
    <div className="song-card">
      <div
        onClick={() => dispatch(playSong(song))}
        className="song-card-image"
      ></div>
      <h3 onClick={() => dispatch(playSong(song))}>{song.title}</h3>
    </div>
  );
};

export default SongCard;
