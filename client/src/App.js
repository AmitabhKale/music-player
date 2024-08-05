import Sidebar from "./components/Sidebar";
import "./custom.css";
import { GiMusicSpell } from "react-icons/gi";
import Home from "./pages/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Playlist from "./pages/Playlist";
import SongList from "./pages/SongList";
import Test from "./pages/Test";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [songChosed, setSongChosed] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <div className="container">
            <div className="nav-box">
              <Link to={"/"}>
                <span className="brand-heading">
                  <GiMusicSpell /> Music Player
                </span>
              </Link>
              {/* <div className="sub-menu">
              <button>Login</button>
              </div> */}
            </div>
          </div>
        </nav>
        {/* {isLoading ? (
        <Loader />
        ) : ( */}
        <div className="layout">
          <Sidebar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route
                path="/songs"
                element={
                  <SongList
                    songChosed={songChosed}
                    setSongChosed={setSongChosed}
                  />
                }
              />
              <Route path="/playlist/1" element={<Playlist />} />
            </Routes>
          </div>
        </div>
        <div className="player-container">
          {/* <Player song={songChosed} /> */}
          <AudioPlayer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
