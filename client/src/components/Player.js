import { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongDetails from "./SongDetails";

const Player = ({ song }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const progressBarRef = useRef();

  const songName = isSelected && song.music.filename;
  console.log(songName);
  const SONG_URL = `http://localhost:5000/songs/${songName}`;

  const audioRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (songName) {
      setIsSelected(true);
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [songName]);

  useEffect(() => {
    if (Object.keys(song).length) {
      setIsSelected(true);
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
        <SongDetails song={song} />

        <div className="song-controls">
          <div className="controls-placement">
            <Controls
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isSelected={isSelected}
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
