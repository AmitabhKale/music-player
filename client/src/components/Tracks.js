import React from "react";

const Tracks = ({ songs }) => {
  console.log(songs);
  return (
    <div className="tracks">
      <ul className="list">
        {songs.map((song) => (
          <div key={song._id} className="listitem">
            <span>{song.title}</span>
            <h4>{song.artist}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
