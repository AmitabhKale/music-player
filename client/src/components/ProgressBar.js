import React from "react";
import formatTime from "../utils/formatTime";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    console.log(progressBarRef.current.value);
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="progress">
      <span className="time current">{formatTime(timeProgress)}</span>
      <input
        type="range"
        defaultValue={0}
        ref={progressBarRef}
        onChange={handleProgressChange}
      />
      <span className="time">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
