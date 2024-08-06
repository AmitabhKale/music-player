import React from "react";
import { GiMusicSpell } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav>
      <div className="container">
        <div className="nav-box">
          <Link to={"/"}>
            <span className="brand-heading">
              <GiMusicSpell /> Music Player
            </span>
          </Link>

          {user && (
            <div className="sub-menu">
              <h3>{user.name}</h3>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
