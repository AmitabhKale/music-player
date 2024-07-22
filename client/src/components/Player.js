import { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongDetails from "./SongDetails";

const Player = ({ song }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const progressBarRef = useRef();
  // const SONG_URL =
  //   "http://localhost:5000/songs/2024-07-20T15-44-59.390Zalotofmusic.org - Maggie Lindemann - Obsessed.mp3";

  const songName = song.music.filename;
  console.log(songName);
  const SONG_URL = `http://localhost:5000/songs/${songName}`;
  const audioRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (songName.length !== 0) {
      setIsSelected(true);
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  const onLoadedMetadata = () => {
    console.log(audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className="player">
      {/* <span>{songs[0].title}</span> */}
      {/* <audio src="/songs/sarfira.mp3" type="audio/mpeg" controls /> */}
      <audio
        src={SONG_URL}
        type="audio/mpeg"
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="player-items">
        <SongDetails />

        <div className="song-controls">
          <div className="controls-placement">
            <Controls
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>

          <ProgressBar
            progressBarRef={progressBarRef}
            audioRef={audioRef}
            timeProgress={timeProgress}
            duration={duration}
          />
        </div>
        <div className="extra-options"></div>
      </div>
    </div>
  );
};

export default Player;
