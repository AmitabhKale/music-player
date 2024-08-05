import React from "react";

const Playlist = () => {
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
    </div>
  );
};

export default Playlist;
