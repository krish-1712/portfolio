import { NavLink } from "react-router-dom";
import "./Project.css";
import React from "react";

const Project = ({pro}) => {
  return (
    <div className="project-card">
      <img
        src={pro.imgsrc}
        alt="projectImage"
      />
      <h2 className="project-title">{pro.title}</h2>
      <div className="project-details">
        {/* <p>{pro.description}</p> */}
        <div className="project-btns">
          <NavLink
            to={pro.view}
            className="btn"
          >
            LIVE SITE
          </NavLink>
          <NavLink
            to={pro.frontendsource}
            className="btn"
          >
            FRONT-END SOURCE CODE
          </NavLink>
          {pro.backendsource ? <NavLink
            to={pro.backendsource}
            className="btn"
          >
            BACK-END SOURCE CODE
          </NavLink> : null}
        </div>
      </div>
    </div>
  );
};

export default Project;