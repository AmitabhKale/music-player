import React from "react";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="options">
          <IoHome />
          <span>Home</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
