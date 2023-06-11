import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          1. I am a FullStack Developer(MERN Stack).<br></br> 2. I create responsive secured web application as per the need.<br></br>
          3. Seeking a responsible position with a determination to make a good career and use it in the right path of growth and success of organization.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80"
              alt="react"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutContent