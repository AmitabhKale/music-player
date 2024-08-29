import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongToPlaylist } from "../redux/playlistSlice";

const PlaylistModal = ({ songId, setIsOpenModal }) => {
  const [selectedId, setSelectedId] = useState();
  const [text, setText] = useState("");
  const { playlists } = useSelector((state) => state.playlistSongs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedId) {
      console.log(selectedId);
      console.log(songId);

      dispatch(
        addSongToPlaylist({
          songId,
          playlistId: selectedId,
        })
      );

      setIsOpenModal(false);
    }

    setText("Please Choose a Playlist to add song");
  }, [selectedId]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>PLAYLISTS</h2>
          <button
            onClick={() => setIsOpenModal(false)}
            className="close-button"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {text && <span>{text}</span>}
          {playlists.map((playlist) => (
            <div className="modal-list" key={playlist._id}>
              <h4 onClick={() => setSelectedId(playlist._id)}>
                {playlist.title}
              </h4>
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <h3>Enjoy The Beats of Your Own</h3>
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
