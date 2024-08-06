import "./custom.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Playlist from "./pages/Playlist";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/playlist/:id" element={<Playlist />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
