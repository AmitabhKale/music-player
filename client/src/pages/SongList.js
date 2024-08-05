import { useEffect, useState } from "react";
import axios from "axios";
import Tracks from "../components/Tracks";

function SongList({ songChosed, setSongChosed }) {
  const [songs, setSongs] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  console.log(songChosed);

  let API_URL = "http://localhost:5000/api/music";

  useEffect(() => {
    try {
      //   setIsLoading(true);
      const fetchPlaylist = async () => {
        const res = await axios.get(API_URL);
        console.log(res.data);
        setSongs(res.data);
      };

      fetchPlaylist();
    } catch (e) {
      console.log(e);
    }
  }, [API_URL]);

  return (
    <div className="home">
      {songs.length !== 0 && (
        <Tracks songs={songs} setSongChosed={setSongChosed} />
        // <Tracks songs={songs} setSongName={setSongName} />
      )}
      {/* <AudioPlayer /> */}
    </div>
  );
}

export default SongList;
