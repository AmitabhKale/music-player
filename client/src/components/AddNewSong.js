import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../redux/songSlice";
// import { useSelector } from "react-redux";

const AddNewSong = ({ user }) => {
  //   const { user } = useSelector((state) => state.user);
  const [file, setFile] = useState();
  const nameRef = useRef();
  const albumRef = useRef();

  const dispatch = useDispatch();

  function handleUpload(e) {
    setFile(e.target.files[0]);
    console.log(file);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const songDetail = {
      name: nameRef.current.value,
      album: albumRef.current.value,
      artist: user.name,
      upload: file,
    };

    // console.log(songDetail);

    dispatch(addSong(songDetail));
  }

  return (
    <div className="song-form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label className="song-label" htmlFor="name">
            Artist:
          </label>
          <input
            type="text"
            value={user.name}
            className="song-input"
            disabled={user.role !== "ADMIN"}
          />
        </div>
        <div className="input-box">
          <label className="song-label" htmlFor="name">
            Song Name:
          </label>
          <input type="text" ref={nameRef} className="song-input" />
        </div>
        <div className="input-box">
          <label className="song-label" htmlFor="name">
            Album:
          </label>
          <input type="text" ref={albumRef} className="song-input" />
        </div>

        <div className="upload-card">
          <h3>Upload File</h3>
          <div className="drop-box">
            <header>{/* <h4 className="">Select File here</h4> */}</header>
            <input type="file" accept=".mp3" onChange={handleUpload} />
            {/* <button className="upload-btn">Choose File</button> */}
          </div>
        </div>

        <button className="song-submit" type="submit">
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddNewSong;
