import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Container";
import Videoplayer from "./components/Videoplayer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="video/:id" Component={<Videoplayer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
