import { Link } from "react-router-dom";
import "./Heroimg.css";

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src="https://images.unsplash.com/photo-1606530095145-185c1cfd3363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="wallpaper" id="intro"></img>
      </div>
      <div className="content">
        <p style={{ fontSize: "30px", color: "white" }}>Hello, This is Balakrishnan</p>
        <h1 style={{ color: "white" }}>Web Developer (MERN)</h1>
        <div style={{ marginTop: "10px" }}>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="https://drive.google.com/file/d/1vMdxvVYGTGUs1r24y8NKj5t-CdhQoWcM/view" target="_blank" className="btn btn-light">Resume</Link>
        </div>

      </div>
    </div>
  )
}

export default Heroimg