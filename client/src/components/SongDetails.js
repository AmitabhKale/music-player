import React from "react";

const SongDetails = ({ song }) => {
  return (
    <div className="current-details">
      <span className="song-title">{song.title}</span>
      <div>
        <span className="song-artist">{song.artist}</span>
      </div>
    </div>
  );
};

export default SongDetails;
