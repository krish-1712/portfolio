import "./Project.css";
import React from "react";

const Project = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project" />
      <div className="project-details">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-description">{props.description}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn" target="_blank" >
            View
          </a>
          
            <a href={props.frontendsource} className="btn"  target="_blank">
              <span className="btn-icon">🔍</span> FrontEnd
            </a>
            {props.backendsource && (
              <a href={props.backendsource} className="btn" style={{ "marginLeft": "6px" }}  target="_blank">
                <span className="btn-icon">🔍</span> BackEnd
              </a>
            )}
        
        </div>
      </div>
    </div>
  );
};

export default Project;
