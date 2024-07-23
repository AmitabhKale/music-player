import { useCallback, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const Controls = ({
  audioRef,
  isSelected,
  progressBarRef,
  setTimeProgress,
  duration,
}) => {
  const playAnimationRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  // console.log(isPlaying);
  // console.log(isSelected);

  const repeat = useCallback(() => {
    // console.log("run");
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isSelected) {
      setIsPlaying(true);
    }
  }, [isSelected]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  // requestAnimationFrame(repeat)

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button className="prevbtn">
          <FaStepBackward />
        </button>

        <button
          className="playpause"
          onClick={togglePlayPause}
          disabled={!isSelected}
        >
          {isPlaying ? <FaPause /> : <FaPlay className="current-play" />}
        </button>

        <button className="nextbtn">
          <FaStepForward />
        </button>
      </div>
    </div>
  );
};

export default Controls;
