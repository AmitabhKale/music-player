import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tracks from "../components/Tracks";
import Loader from "../components/Loader";
import { getSongs } from "../redux/songSlice";

const Test = () => {
  const dispatch = useDispatch();
  const { songs, isLoading } = useSelector((state) => state.songs);

  // useEffect();

  console.log(songs);
  return (
    <div className="home">
      <button
        onClick={() => {
          dispatch(getSongs());
        }}
      >
        Add Songs
      </button>

      {isLoading ? <Loader /> : <Tracks songs={songs} />}
    </div>
  );
};

export default Test;
