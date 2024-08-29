import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlaylist } from "../redux/playlistSlice";
import SongCard from "../components/SongCard";
import { getSongs } from "../redux/songSlice";

const Home = () => {
  const { playlists } = useSelector((state) => state.playlistSongs);
  const { songs } = useSelector((state) => state.songs);

  const defaultImage =
    "https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600";
  console.log(songs);
  console.log(playlists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPlaylist());
    dispatch(getSongs());
  }, [dispatch]);
  // const playlists = ["TopCharts50", "Daily Mix", "PopMix", "Rock Anthems"];
  return (
    <div className="home">
      <h3 className="heading-primary">Trending Playlist</h3>

      <div className="playlists-row">
        {playlists.map((item) => (
          <div key={item._id} className="playlist-card">
            <Link to={`playlists/${item._id}`}>
              <img
                src={item.image || defaultImage}
                className="playlist-card-image"
              />
              {/* <img src={defaultImage} alt="" /> */}
            </Link>
            <Link to={`playlists/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <p>Various Artists</p>
          </div>
        ))}
      </div>

      <h3 className="heading-primary">Latest Songs</h3>
      <div className="song-row">
        {songs.map((song) => (
          <SongCard key={song._id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;
