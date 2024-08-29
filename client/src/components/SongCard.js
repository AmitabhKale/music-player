import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FiMoreVertical } from "react-icons/fi";
import playerSlice from "../redux/playerSlice";
import SongOptions from "./SongOptions";
import PlaylistModal from "./PlaylistsModal";

const SongCard = ({ song }) => {
  const [options, setOptions] = useState(false);
  const [openModal, setIsOpenModal] = useState(false);

  const { playSong } = playerSlice.actions;
  const dispatch = useDispatch();
  return (
    <div className="song-card">
      <div
        onClick={() => dispatch(playSong(song))}
        className="song-card-image"
      ></div>
      <div className="name-row">
        <h3 onClick={() => dispatch(playSong(song))}>{song.title}</h3>
        <span
          onClick={() => {
            setOptions(!options);
          }}
        >
          <FiMoreVertical size={"16px"} />
        </span>
      </div>
      {/* <div className="more-menu-container">{options && <SongOptions />}</div> */}
      <div className="more-menu-container">
        {options && (
          <div className="more-menu">
            <ul className="more-menu-items">
              <li onClick={() => setIsOpenModal(true)}>Add to Playlist</li>
            </ul>
          </div>
        )}
      </div>
      {openModal && (
        <PlaylistModal songId={song._id} setIsOpenModal={setIsOpenModal} />
      )}
    </div>
  );
};

export default SongCard;
