import React from "react";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    console.log(progressBarRef.current.value);
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="progress">
      <span className="time current">{timeProgress}</span>
      <input
        type="range"
        defaultValue={0}
        ref={progressBarRef}
        onChange={handleProgressChange}
      />
      <span className="time">{duration}</span>
    </div>
  );
};

export default ProgressBar;
