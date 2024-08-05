import React from "react";

const SongDetails = ({ song }) => {
  return (
    <div className="song-current-details">
      {song && (
        <div className="current-details">
          <div className="thumb"></div>
          <div>
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongDetails;
