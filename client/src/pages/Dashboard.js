import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import AddNewSong from "../components/AddNewSong";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="">
      <Navbar />
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

        {user && (
          <div className="add-song">
            <h2 className="heading-primary">Add New Song</h2>
            <AddNewSong user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
