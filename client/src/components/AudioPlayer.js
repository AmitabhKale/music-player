import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

      <button
        className="playpause"
        onClick={togglePlayPause}
        disabled={song === null}
      >
        {isPlaying ? <FaPause /> : <FaPlay className="current-play" />}
      </button>
    </div>
  );
};

export default AudioPlayer;
