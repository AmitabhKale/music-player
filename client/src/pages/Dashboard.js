import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GoPlusCircle } from "react-icons/go";
import Modal from "../components/Modal";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="container">
      <div className="playlist-banner">
        <div className="playlist-image-container">
          <div className="playlist-image">
            <img src={user.avatar} alt="" />
          </div>
        </div>
        <div className="playlist-details">
          <h3 className="heading-primary">{user.name}</h3>
          <h4 className="heading-secondary">{user.email}</h4>
          <h5 className="heading-role">{user.role}</h5>
        </div>
      </div>

      <div className="user-playlists">
        <div className="user-playlists-header">
          <h3>Your Playlists</h3>
          <div className="button-conatiner">
            <button
              id="createPlaylistModal"
              className="service-button outline-hover"
              onClick={() => setIsOpenModal(true)}
            >
              Create New <GoPlusCircle size={"16px"} fontWeight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {}
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
    </div>
  );
};

export default Dashboard;
