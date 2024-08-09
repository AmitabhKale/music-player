import "./custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlist from "./pages/Playlist";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/playlists/:playlistId" element={<Playlist />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/user/me" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
