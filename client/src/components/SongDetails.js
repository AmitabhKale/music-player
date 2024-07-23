import React from "react";

const SongDetails = ({ song }) => {
  return (
    <div className="current-details">
      <div className="thumb"></div>

      <div>
        <span className="song-title">{song.title}</span>
        <span className="song-artist">{song.artist}</span>
      </div>
    </div>
  );
};

export default SongDetails;
