import React, { useEffect } from "react";
import Loader from "../components/Loader";
import Tracks from "../components/Tracks";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/playlistSlice";

const Playlist = () => {
  const dispatch = useDispatch();

  const { songs, isLoading } = useSelector((state) => state.playlistSongs);

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  return (
    <div className="playlist">
      <div className="playlist-banner">
        <div className="playlist-image-container">
          <div className="playlist-image"></div>
        </div>
        <div className="playlist-details">
          <h3 className="playlist-text">Playlist</h3>
          <h2 className="playlist-heading">Pop Mix</h2>
          <h4 className="playlist-artist">Mabel, Linkin Park, Beatles</h4>
        </div>
      </div>
      <div className="playlist-songs">
        {isLoading ? <Loader /> : <Tracks songs={songs} />}
      </div>
    </div>
  );
};

export default Playlist;
