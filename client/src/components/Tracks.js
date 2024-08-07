import React from "react";
import { IoMdMore } from "react-icons/io";
import { useDispatch } from "react-redux";
import playerSlice from "../redux/playerSlice";

const Tracks = ({ songs }) => {
  // console.log(songs);
  // let songIndex = 1
  const { playSong } = playerSlice.actions;
  const dispatch = useDispatch();
  function handleClick(song) {
    if (song) {
      console.log(song);
      // setSongChosed(song);
      dispatch(playSong(song));
    }
  }
  return (
    <div className="tracks">
      <ul className="playlist">
        {songs.map((song, i) => (
          <div key={song._id} className={"song"}>
            <div className="song-index">{i + 1}</div>
            <div className="thumb"></div>
            <div className="body">
              <span
                className="title"
                onClick={() => {
                  handleClick(song);
                }}
              >
                {song.title}
              </span>
              <div className="author">{song.artist}</div>
              {/* </div> */}
            </div>

            {/* <div className="song-time">00:00</div> */}
            <div className="option">
              <IoMdMore />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
