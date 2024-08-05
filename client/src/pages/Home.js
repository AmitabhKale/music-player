import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const playlists = ["TopCharts50", "Daily Mix", "PopMix", "Rock Anthems"];
  return (
    <div className="home">
      <h3 className="heading-primary">Trending Playlist</h3>

      <div className="playlists-row">
        {playlists.map((item) => (
          <div key={item} className="playlist-card">
            <Link to="/playlist/1">
              <div className="playlist-card-image"></div>
            </Link>
            <Link to={"/playlist/1"}>
              <h4>{item}</h4>
            </Link>
            <p>Various Artists</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
