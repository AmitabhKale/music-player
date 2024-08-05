import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaVolumeUp, FaVolumeDown } from "react-icons/fa";
import SongDetails from "./SongDetails";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const { song } = useSelector((state) => state.playerSong);
  console.log(song);
  const songName = song?.music.filename;

  const audioRef = useRef();

  const SONG_URL = `http://localhost:5000/songs/play/${songName}`;

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (song) {
      //   console.log(song);
      setIsPlaying(true);
    }
  }, [song]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, song]);

  return (
    <div className="player">
      <audio src={song ? SONG_URL : ""} type="audio/mpeg" ref={audioRef} />

      <div className="player-items">
        {song && <SongDetails song={song} />}

        <div className="song-controls">
          <div className="controls-placement">
            <div className="controls-wrapper">
              <button
                className="playpause"
                onClick={togglePlayPause}
                disabled={song === null}
              >
                {isPlaying ? <FaPause /> : <FaPlay className="current-play" />}
              </button>
            </div>
          </div>
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
