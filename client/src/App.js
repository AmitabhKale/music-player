import { useEffect, useState } from "react";
import axios from "axios";
import Player from "./components/Player";
import Tracks from "./components/Tracks";
import Sidebar from "./components/Sidebar";

function App() {
  const [songs, setSongs] = useState([]);
  // const [songName, setSongName] = useState("");

  let API_URL = "http://localhost:5000/api/music";

  // let songName = songs[2].music.filename;

  useEffect(() => {
    try {
      const fetchMusic = async () => {
        const res = await axios.get(API_URL);
        console.log(res.data);
        setSongs(res.data);
        // setSongName(songs[2].music.filename);
      };

      fetchMusic();
    } catch (e) {
      console.log(e);
    }
  }, [API_URL]);

  // useEffect(() => {
  //   setSongName(songs[0].music.filename);
  // });

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
      <div className="layout">
        <Sidebar />
        {songs.length !== 0 && <Tracks songs={songs} />}
        {/* <AudioPlayer /> */}
      </div>
      <div className="player-container">
        <Player />
        {/* <Player songName={songName} /> */}
      </div>
    </div>
  );
}

export default App;
