import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/playlistSlice";
import Tracks from "../components/Tracks";

const Test = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.playlistSongs);
  console.log(songs);
  return (
    <div className="home">
      <button
        onClick={() => {
          dispatch(getSongs());
        }}
      >
        Add Songs
      </button>

      <Tracks songs={songs} />
    </div>
  );
};

export default Test;
