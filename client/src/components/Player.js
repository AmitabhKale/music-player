import { useRef, useState } from "react";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const Player = () => {
  const progressBarRef = useRef();
  const SONG_URL =
    "http://localhost:5000/songs/2024-07-20T15-44-59.390Zalotofmusic.org - Maggie Lindemann - Obsessed.mp3";
  // const SONG_URL = `http://localhost:5000/songs/${songs[0].music.filename}`;
  const audioRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <div className="player">
      {/* <span>{songs[0].title}</span> */}
      {/* <audio src="/songs/sarfira.mp3" type="audio/mpeg" controls /> */}
      <audio src={SONG_URL} type="audio/mpeg" ref={audioRef} />
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
      />
      <Controls audioRef={audioRef} />
    </div>
  );
};

export default Player;
