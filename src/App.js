import React from "react";
import "./App.css";
import Home from "./sections/Home";
import TakeNote from "./sections/TakeNote";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<TakeNote />} />
      </Routes>
    </div>
  );
}
export default App;
