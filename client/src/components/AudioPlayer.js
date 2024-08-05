import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { FaVolumeUp, FaVolumeDown } from "react-icons/fa";
import SongDetails from "./SongDetails";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const { song } = useSelector((state) => state.playerSong);
  // console.log(song);
  const songName = song?.music.filename;

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const SONG_URL = `http://localhost:5000/songs/play/${songName}`;

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

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

  const onLoadedMetadata = () => {
    // console.log(audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  useEffect(() => {
    if (song) {
      //   console.log(song);
      setIsPlaying(true);
    }
  }, [song]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="player">
      <audio
        src={song ? SONG_URL : ""}
        type="audio/mpeg"
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="player-items">
        <SongDetails song={song} />

        <div className="song-controls">
          <div className="controls-placement">
            <div className="controls-wrapper">
              <div className="controls">
                <button className="prevbtn">
                  <FaStepBackward />
                </button>
                <button
                  className="playpause"
                  onClick={togglePlayPause}
                  disabled={song === null}
                >
                  {isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay className="current-play" />
                  )}
                </button>
                <button className="nextbtn">
                  <FaStepForward />
                </button>
              </div>
            </div>
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

export default AudioPlayer;
