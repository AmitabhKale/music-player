import React from "react";
import { IoMdMore } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import playerSlice from "../redux/playerSlice";
import PlayingIcon from "./PlayingIcon";

const Tracks = ({ songs }) => {
  const { song } = useSelector((state) => state.playerSong);
  const { playSong } = playerSlice.actions;
  const dispatch = useDispatch();
  function handleClick(currSong) {
    if (currSong) {
      // console.log(song);
      // setSongChosed(song);
      dispatch(playSong(currSong));
    }
  }
  return (
    <div className="tracks">
      {songs && songs.length ? (
        <ul className="playlist">
          {songs.map((songItem, i) => (
            <div
              key={songItem._id}
              className={`song ${
                song && songItem?._id === song._id ? "active" : ""
              }`}
            >
              <div className="song-index">
                {song && songItem?._id === song._id ? (
                  <PlayingIcon />
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <div className="thumb">
                {/* <img src={song.imageUrl} alt="" /> */}
              </div>
              <div className="body">
                <span
                  className="title"
                  onClick={() => {
                    handleClick(songItem);
                  }}
                >
                  {songItem?.title}
                </span>
                <div className="author">{songItem?.artist}</div>
                {/* </div> */}
              </div>

              {/* <div className="song-time">00:00</div> */}
              <div className="option">
                <IoMdMore />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <h3>No Songs</h3>
        </div>
      )}
    </div>
  );
};

export default Tracks;
