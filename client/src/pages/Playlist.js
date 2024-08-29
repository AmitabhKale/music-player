import React, { useEffect } from "react";
import Loader from "../components/Loader";
import Tracks from "../components/Tracks";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistSongs } from "../redux/playlistSlice";
import { useParams } from "react-router-dom";

const Playlist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();

  const { playlist, isLoading, isError } = useSelector(
    (state) => state.playlistSongs
  );
  console.log(playlist, isLoading, isError);

  const defaultImage =
    "https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600";

  useEffect(() => {
    dispatch(getPlaylistSongs(playlistId));
  }, [dispatch, playlistId]);

  return (
    <div className="playlist">
      <div className="playlist-banner">
        <div className="playlist-image-container">
          <div className="playlist-image">
            <img src={defaultImage} alt="" />
          </div>
        </div>
        {playlist ? (
          <div className="playlist-details">
            <h3 className="playlist-text">Playlist</h3>
            <h2 className="playlist-heading">{playlist.title}</h2>
            <h4 className="playlist-artist">{playlist.createdBy?.name}</h4>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <div className="playlist-songs">
        {playlist ? <Tracks songs={playlist.songs} /> : <Loader />}
      </div>
    </div>
  );
};

export default Playlist;
