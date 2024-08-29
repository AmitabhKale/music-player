import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { createPlaylist } from "../redux/playlistSlice";

const Modal = ({ setIsOpenModal }) => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      createPlaylist({
        title: inputRef.current.value,
      })
    );

    setIsOpenModal(false);
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Playlist to Your Library</h2>
          <button
            onClick={() => setIsOpenModal(false)}
            className="close-button"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="modal-input"
                ref={inputRef}
                placeholder="Enter Name of Playlist"
              />
            </div>

            <button className="service-button gradient-bg" type="submit">
              Create Playlist
            </button>
          </form>
        </div>
        <div className="modal-footer">
          <h3>Enjoy The Beats of Your Own</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
