import React from "react";

const Home = () => {
  const playlists = ["TopCharts50", "Daily Mix", "PopMix", "Rock Anthems"];
  return (
    <div className="home">
      <h3 className="heading-primary">Trending Playlist</h3>

      <div className="playlists-row">
        {playlists.map((item) => (
          <div className="playlist-card">
            <div className="playlist-card-image"></div>
            <h4>{item}</h4>
            <p>Various Artists</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
