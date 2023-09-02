import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import { Route, Routes } from "react-router-dom";
import Skills from "./routes/Skills";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />




      </Routes>
    </div>
  );
}

export default App;
