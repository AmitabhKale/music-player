import React from "react";

const Player = () => {
  return (
    <div className="player">
      <audio controls>
        <source src="../songs/Sarfira.mp3" type="audio/mp3"></source>
      </audio>
    </div>
  );
};

export default Player;
