import React from "react";
import { IoMdMore } from "react-icons/io";

const Tracks = ({ songs, setSongChosed }) => {
  // console.log(songs);

  function handleClick(song) {
    if (song) {
      console.log(song.title);

      setSongChosed(song);
    }
  }
  return (
    <div className="tracks">
      <ul className="playlist">
        {songs.map((song) => (
          <div key={song._id} className="song">
            {/* <div className=""> */}
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
