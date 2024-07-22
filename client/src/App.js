import Player from "./components/Player";

function App() {
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
      <div className="container"></div>
      <div className="player-container">
        <Player />
      </div>
    </div>
  );
}

export default App;
