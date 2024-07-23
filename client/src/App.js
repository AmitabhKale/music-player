import { useEffect, useState } from "react";
import axios from "axios";
import Player from "./components/Player";
import Tracks from "./components/Tracks";
import Sidebar from "./components/Sidebar";
import "./custom.css";
import Loader from "./components/Loader";

function App() {
  const [songs, setSongs] = useState([]);
  const [songChosed, setSongChosed] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(songChosed);

  let API_URL = "http://localhost:5000/api/music";

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchMusic = async () => {
        const res = await axios.get(API_URL);
        console.log(res.data);
        setSongs(res.data);
        setIsLoading(false);
      };

      fetchMusic();
    } catch (e) {
      console.log(e);
    }
  }, [API_URL]);

  return (
    <div className="App">
      <nav>
        <div className="container">
          <div className="nav-box">
            <span className="brand-heading">Music Player</span>
            {/* <div className="sub-menu">
              <button>Login</button>
            </div> */}
          </div>
        </div>
      </nav>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="layout">
          <Sidebar />
          {songs.length !== 0 && (
            <Tracks songs={songs} setSongChosed={setSongChosed} />
            // <Tracks songs={songs} setSongName={setSongName} />
          )}
          {/* <AudioPlayer /> */}
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="player-container">
          <Player song={songChosed} />
          {/* <Player songName={songName} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
