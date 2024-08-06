import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import AudioPlayer from "./components/AudioPlayer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
        <div className="player-container">
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
