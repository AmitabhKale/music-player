import { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import { FaVolumeUp, FaVolumeDown } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import SongDetails from "./SongDetails";
import { useSelector } from "react-redux";

const Player = () => {
  const [isSelected, setIsSelected] = useState(false);
  const progressBarRef = useRef();
  const [volume, setVolume] = useState(60);

  const { song } = useSelector((state) => state.playerSong);
  console.log(song);

  const songName = isSelected && song.music.filename;
  // console.log(songName);
  const SONG_URL = `http://localhost:5000/songs/play/${songName}`;

  const audioRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // useEffect(() => {
  //   if (songName) {
  //     // console.log(songName);
  //     setIsSelected(true);
  //   }
  // }, [songName, isSelected]);

  useEffect(() => {
    if (song) {
      setIsSelected(true);
    }
  }, [song]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const onLoadedMetadata = () => {
    // console.log(audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className="player">
      {/* <span>{songs[0].title}</span> */}
      {/* <audio src="/songs/sarfira.mp3" type="audio/mpeg" controls /> */}
      <audio
        src={isSelected ? SONG_URL : ""}
        type="audio/mpeg"
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="player-items">
        {song && <SongDetails song={song} />}

        <div className="song-controls">
          <div className="controls-placement">
            <Controls
              audioRef={audioRef}
              isSelected={isSelected}
              song={song}
              progressBarRef={progressBarRef}
              setTimeProgress={setTimeProgress}
              duration={duration}
            />
          </div>

          <ProgressBar
            progressBarRef={progressBarRef}
            audioRef={audioRef}
            timeProgress={timeProgress}
            duration={duration}
          />
        </div>
        <div className="extra-options">
          <div className="volume">
            {/* <button>icons</button> */}
            <FaVolumeDown fill="#fff" />
            <input
              type="range"
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
              min={0}
              max={100}
            />
            <FaVolumeUp fill="#fff" size={"32px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
