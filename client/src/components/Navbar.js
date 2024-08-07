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

          {user ? (
            <div className="sub-menu">
              <Link to={"/user/me"}>
                <h3>{user.name}</h3>
              </Link>
            </div>
          ) : (
            <div className="sub-menu">
              <Link to={"/login"}>
                <h4>Login</h4>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
